var sourceToDesign = function (treeObject) {
    console.log("sourceDesign" + treeObject);
    var view = addNewEmptyTab(treeObject);
    if(view.model.get('diagramResourceElements').models[0]) {
        traverseTree(treeObject, view.model.get('diagramResourceElements').models[0]);
    }
    view.render();
};

var traverseTree = function (node, model) {
    console.log("traverse" + node);
    if (node.type === "Resource") {
        console.log("resource");
        var parameters = node.parameters;
        model.attributes.parameters = node.parameters;
        node.children.forEach(function (child) {
        traverseTree(child, model);
        });

    } else if (node.type == "InvokeMediator") {
        console.log("invoke");
    } else if(node.type ==="ResponseMsg") {
        console.log("response");
    }
};

var addNewEmptyTab = function(root) {
    var id =  Math.random().toString(36).substr(2, 9);
    var hrefId = '#seq_' + id;
    var resourceId = 'seq_' + id;
    var resourceModel = new Diagrams.Models.Tab({
        resourceId: resourceId,
        hrefId: hrefId,
        resourceTitle: "Generated Resource" ,
        createdTab: false
    });

    if (diagram.selectedOptionsGroup) {
        diagram.selectedOptionsGroup.classed("option-menu-hide", true);
        diagram.selectedOptionsGroup.classed("option-menu-show", false);
    }
    diagram.selectedOptionsGroup = null;
    if (diagram.propertyWindow) {
        diagram.propertyWindow = false;
        defaultView.enableDragZoomOptions();
        $('#property-pane-svg').empty();
    }

    var nextTabListView = new Diagrams.Views.TabListView({model: resourceModel});
    nextTabListView.render(resourceModel);
    //create new diagram object for the tab
    var diagramObj = new Diagrams.Models.Diagram({});
    resourceModel.addDiagramForTab(diagramObj);

    //Activating tab on creation itself
    $('.tabList a[href="#' + resourceId + '"]').tab('show');
    var dgModel = resourceModel.getDiagramOfTab(resourceModel.attributes.diagramForTab.models[0].cid);
    dgModel.CurrentDiagram(dgModel);
    var svgUId = resourceId + "4";
    var options = {selector: hrefId, wrapperId: svgUId};

    // get the current diagram view for the tab
    var currentView = dgModel.createDiagramView(dgModel, options);
    // add diagramModel
    var preview = new Diagrams.Views.DiagramOutlineView({mainView: currentView});
    preview.render();
    resourceModel.preview(preview);

    // set current tab's diagram view as default view
    currentView.currentDiagramView(currentView);
    resourceModel.setDiagramViewForTab(currentView);
    // mark tab as visited
    resourceModel.setSelectedTab();
    currentView.renderMainElement("Source", 1, MainElements.lifelines.SourceLifeline);
    currentView.model.sourceLifeLineCounter(1);
    if(root.type == "Resource") {
        currentView.renderMainElement("Resource", 1, MainElements.lifelines.ResourceLifeline);
        currentView.model.resourceLifeLineCounter(1);
        // first arrow creation between source and resource
        var currentSource = currentView.model.diagramSourceElements().models[0];
        var currentResource = currentView.model.diagramResourceElements().models[0];
        drawInitArrow(currentSource, currentResource, currentView);
    }
    return currentView;
};

var drawInitArrow = function(source,destination,diagramView){
    centerS = createPoint(200, 50);
    centerR = createPoint(380, 50);
    var sourcePoint = new SequenceD.Models.MessagePoint({
        model: {type: "messagePoint"},
        x: centerS.x(),
        y: centerS.y(),
        direction: "outbound"
    });
    var destinationPoint = new SequenceD.Models.MessagePoint({
        model: {type: "messagePoint"},
        x: centerR.x(),
        y: centerR.y(),
        direction: "inbound"
    });
    var messageLink = new SequenceD.Models.MessageLink({
        source: sourcePoint,
        destination: destinationPoint
    });
    var messageOptionsInbound = {'class': 'messagePoint', 'direction': 'inbound'};
    var messageOptionsOutbound = {'class': 'messagePoint', 'direction': 'outbound'};
    source.addChild(sourcePoint, messageOptionsOutbound);
    destination.addChild(destinationPoint, messageOptionsInbound);
   //diagramView.render();
};
