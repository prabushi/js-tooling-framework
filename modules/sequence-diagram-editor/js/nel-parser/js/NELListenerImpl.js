//TODO remove double quotations
var NELListener = require('../generated-parser/NELListener').NELListener;
var isInitializationFired = false;

var integration = {
    Resources: [],
    Endpoints: []
};
var count = 0;
var currentResource;
var rootNode;

function TreeNode(value, type, cStart, cEnd, parameters) {
    //parameters is an array of parameters
    this.object = undefined;
    this.children = [];
    this.value = value;
    this.type = type;
    this.configStart = cStart;
    this.configEnd = cEnd;
    this.parameters = parameters;

    this.getChildren = function () {
        return this.children;
    };

    this.getValue = function () {
        return this.value;
    };

    this.setConfigStart = function (cStart) {
        this.configStart = cStart;
    };

    this.setConfigEnd = function (cEnd) {
        this.configEnd = cEnd;
    };

    this.setParameters = function (parameters) {
        this.parameters = parameters;
    };
}

NELListenerImpl = function () {
    console.log("NELListenerImpl constructor" + count++);
    NELListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
NELListenerImpl.prototype = Object.create(NELListener.prototype);
NELListenerImpl.prototype.constructor = NELListenerImpl;

// Enter a parse tree produced by NELParser#sourceFile.
NELListenerImpl.prototype.enterSourceFile = function (ctx) {
    console.log("enterSourceFile" + count++);
};

// Exit a parse tree produced by NELParser#sourceFile.
NELListenerImpl.prototype.exitSourceFile = function (ctx) {
    console.log("exitSourceFile" + count++);
    console.log(JSON.stringify(integration));
    console.log(integration);
    console.log(JSON.stringify(rootNode));
    console.log(rootNode);
    return integration;
};


// Enter a parse tree produced by NELParser#definition.
NELListenerImpl.prototype.enterDefinition = function (ctx) {
    console.log("enterDefinition" + count++);
};

// Exit a parse tree produced by NELParser#definition.
NELListenerImpl.prototype.exitDefinition = function (ctx) {
    console.log("exitDefinition" + count++);
};


// Enter a parse tree produced by NELParser#constants.
NELListenerImpl.prototype.enterConstants = function (ctx) {
    console.log("enterConstants" + count++);
};

// Exit a parse tree produced by NELParser#constants.
NELListenerImpl.prototype.exitConstants = function (ctx) {
    console.log("exitConstants" + count++);
};


// Enter a parse tree produced by NELParser#globalVariables.
NELListenerImpl.prototype.enterGlobalVariables = function (ctx) {
    console.log("enterGlobalVariables" + count++);
};

// Exit a parse tree produced by NELParser#globalVariables.
NELListenerImpl.prototype.exitGlobalVariables = function (ctx) {
    console.log("exitGlobalVariables" + count++);
};


// Enter a parse tree produced by NELParser#resources.
NELListenerImpl.prototype.enterResources = function (ctx) {
    //integration.resource = {};
    rootNode = new TreeNode("Resource", "Resource");
    //new TreeNode("Resource", "Resource", "resource passthrough (message m) {\nmessage response;", "}");
    currentResource = {};
    console.log("enterResources" + count++);
};

// Exit a parse tree produced by NELParser#resources.
NELListenerImpl.prototype.exitResources = function (ctx) {
    integration.Resources.push(currentResource);
    console.log("exitResources" + count++);
};


// Enter a parse tree produced by NELParser#packageDef.
NELListenerImpl.prototype.enterPackageDef = function (ctx) {
    integration.packageDef = ctx.qualifiedName().getText();
    console.log("enterPackageDef" + count++);
};

// Exit a parse tree produced by NELParser#packageDef.
NELListenerImpl.prototype.exitPackageDef = function (ctx) {
    console.log("exitPackageDef" + count++);
};


// Enter a parse tree produced by NELParser#path.
NELListenerImpl.prototype.enterPath = function (ctx) {
    integration.Path = ctx.StringLiteral().getText().replace(/['"]+/g, '');
    console.log("enterPath" + count++);
};

// Exit a parse tree produced by NELParser#path.
NELListenerImpl.prototype.exitPath = function (ctx) {
    console.log("exitPath" + count++);
    //check double quote
};


// Enter a parse tree produced by NELParser#source.
NELListenerImpl.prototype.enterSource = function (ctx) {
    integration.Source = {};
    console.log("enterSource" + count++);
};

// Exit a parse tree produced by NELParser#source.
NELListenerImpl.prototype.exitSource = function (ctx) {
    console.log("exitSource" + count++);
};


// Enter a parse tree produced by NELParser#api.
NELListenerImpl.prototype.enterApi = function (ctx) {
    console.log("enterApi" + count++);
    integration.Service = {};
};

// Exit a parse tree produced by NELParser#api.
NELListenerImpl.prototype.exitApi = function (ctx) {
    console.log("exitApi" + count++)
};


// Enter a parse tree produced by NELParser#resourcePath.
NELListenerImpl.prototype.enterResourcePath = function (ctx) {
    currentResource.path = ctx.StringLiteral().getText().replace(/['"]+/g, '');
    console.log("enterResourcePath" + count++);
};

// Exit a parse tree produced by NELParser#resourcePath.
NELListenerImpl.prototype.exitResourcePath = function (ctx) {
    console.log("exitResourcePath" + count++);
};


// Enter a parse tree produced by NELParser#getMethod.
NELListenerImpl.prototype.enterGetMethod = function (ctx) {
    console.log("enterGetMethod" + count++);
    //if (!ctx.httpMethods().getMethod().isEmpty()) {
    // this.currentResource.getAnnotations().get('@GET').setValue(Boolean.TRUE);
    currentResource.get = true;
    // } else {
    //     integration.resource.get = false;
    // }
};

// Exit a parse tree produced by NELParser#getMethod.
NELListenerImpl.prototype.exitGetMethod = function (ctx) {
    console.log("exitGetMethod" + count++);
};


// Enter a parse tree produced by NELParser#postMethod.
NELListenerImpl.prototype.enterPostMethod = function (ctx) {
    console.log("enterPostMethod" + count++);
    // if (!ctx.httpMethods().getMethod().isEmpty()) {
    //     // this.currentResource.getAnnotations().get('@GET').setValue(Boolean.TRUE);
    currentResource.post = true;
    // } else {
    //     integration.resource.post = false;
    // }
};

// Exit a parse tree produced by NELParser#postMethod.
NELListener.prototype.exitPostMethod = function (ctx) {
    console.log("exitPostMethod" + count++);
};


// Enter a parse tree produced by NELParser#putMethod.
NELListenerImpl.prototype.enterPutMethod = function (ctx) {
    currentResource.put = true;
    console.log("enterPutMethod" + count++);
};

// Exit a parse tree produced by NELParser#putMethod.
NELListenerImpl.prototype.exitPutMethod = function (ctx) {
    console.log("exitPutMethod");
};


// Enter a parse tree produced by NELParser#deleteMethod.
NELListenerImpl.prototype.enterDeleteMethod = function (ctx) {
    currentResource.delete = true;
    console.log("enter deleteMethod" + count++);
};

// Exit a parse tree produced by NELParser#deleteMethod.
NELListenerImpl.prototype.exitDeleteMethod = function (ctx) {
    console.log("exit deleteMethod" + count++);
};


// Enter a parse tree produced by NELParser#headMethod.
NELListenerImpl.prototype.enterHeadMethod = function (ctx) {
};

// Exit a parse tree produced by NELParser#headMethod.
NELListenerImpl.prototype.exitHeadMethod = function (ctx) {
};


// Enter a parse tree produced by NELParser#prodAnt.
NELListenerImpl.prototype.enterProdAnt = function (ctx) {
};

// Exit a parse tree produced by NELParser#prodAnt.
NELListenerImpl.prototype.exitProdAnt = function (ctx) {
};


// Enter a parse tree produced by NELParser#conAnt.
NELListenerImpl.prototype.enterConAnt = function (ctx) {
};

// Exit a parse tree produced by NELParser#conAnt.
NELListenerImpl.prototype.exitConAnt = function (ctx) {
};


// Enter a parse tree produced by NELParser#antApiOperation.
NELListenerImpl.prototype.enterAntApiOperation = function (ctx) {
};

// Exit a parse tree produced by NELParser#antApiOperation.
NELListenerImpl.prototype.exitAntApiOperation = function (ctx) {
};


// Enter a parse tree produced by NELParser#antApiResponses.
NELListenerImpl.prototype.enterAntApiResponses = function (ctx) {
};

// Exit a parse tree produced by NELParser#antApiResponses.
NELListenerImpl.prototype.exitAntApiResponses = function (ctx) {
};


// Enter a parse tree produced by NELParser#antApiResponseSet.
NELListenerImpl.prototype.enterAntApiResponseSet = function (ctx) {
};

// Exit a parse tree produced by NELParser#antApiResponseSet.
NELListenerImpl.prototype.exitAntApiResponseSet = function (ctx) {
};


// Enter a parse tree produced by NELParser#antApiResponse.
NELListenerImpl.prototype.enterAntApiResponse = function (ctx) {
};

// Exit a parse tree produced by NELParser#antApiResponse.
NELListenerImpl.prototype.exitAntApiResponse = function (ctx) {
};


// Enter a parse tree produced by NELParser#elementValuePairs.
NELListenerImpl.prototype.enterElementValuePairs = function (ctx) {
};

// Exit a parse tree produced by NELParser#elementValuePairs.
NELListenerImpl.prototype.exitElementValuePairs = function (ctx) {
};


// Enter a parse tree produced by NELParser#sourceElementValuePairs.
NELListenerImpl.prototype.enterSourceElementValuePairs = function (ctx) {
    //TODO check for non default sample
    console.log("enterSourceElementValuePairs" + count++);
    integration.Source.sourceElementValuePairs = {};
};

// Exit a parse tree produced by NELParser#sourceElementValuePairs.
NELListenerImpl.prototype.exitSourceElementValuePairs = function (ctx) {
    console.log("exitSourceElementValuePairs" + count++);
};


// Enter a parse tree produced by NELParser#interfaceDeclaration.
NELListenerImpl.prototype.enterInterfaceDeclaration = function (ctx) {
    console.log("enterInterfaceDeclaration" + count++);
    integration.Source.sourceElementValuePairs.interface = ctx.StringLiteral().getText().replace(/['"]+/g, '');
};

// Exit a parse tree produced by NELParser#interfaceDeclaration.
NELListenerImpl.prototype.exitInterfaceDeclaration = function (ctx) {
    console.log("exitInterfaceDeclaration" + count++);
};


// Enter a parse tree produced by NELParser#apiElementValuePairs.
NELListenerImpl.prototype.enterApiElementValuePairs = function (ctx) {
    console.log("enterApiElementValuePairs" + count++);
    integration.Service.apiElementValuePairs = {};
};

// Exit a parse tree produced by NELParser#apiElementValuePairs.
NELListenerImpl.prototype.exitApiElementValuePairs = function (ctx) {
    console.log("exitApiElementValuePairs" + count++);
};


// Enter a parse tree produced by NELParser#protocol.
NELListenerImpl.prototype.enterProtocol = function (ctx) {
};

// Exit a parse tree produced by NELParser#protocol.
NELListenerImpl.prototype.exitProtocol = function (ctx) {
};


// Enter a parse tree produced by NELParser#host.
NELListenerImpl.prototype.enterHost = function (ctx) {
};

// Exit a parse tree produced by NELParser#host.
NELListenerImpl.prototype.exitHost = function (ctx) {
};


// Enter a parse tree produced by NELParser#port.
NELListenerImpl.prototype.enterPort = function (ctx) {
};

// Exit a parse tree produced by NELParser#port.
NELListenerImpl.prototype.exitPort = function (ctx) {
};


// Enter a parse tree produced by NELParser#tags.
NELListenerImpl.prototype.enterTags = function (ctx) {
    console.log("enterTags" + count++);
    integration.Service.apiElementValuePairs.tags = [];
};

// Exit a parse tree produced by NELParser#tags.
NELListenerImpl.prototype.exitTags = function (ctx) {
    console.log("exitTags" + count++);
};


// Enter a parse tree produced by NELParser#tag.
NELListenerImpl.prototype.enterTag = function (ctx) {
    console.log("entertag" + count++);
    var tags = ctx.StringLiteral();
    tags.forEach(function (t, index) {
        var tag = {tagValue: t.getText().replace(/['"]+/g, '')};
        integration.Service.apiElementValuePairs.tags.push(tag);
    });
    //ctx.apiElementValuePairs().tags().tag()[0].getText()
    //ctx.apiElementValuePairs().tags().tag()[0].StringLiteral()[0].getText()
};

// Exit a parse tree produced by NELParser#tag.
NELListenerImpl.prototype.exitTag = function (ctx) {
    console.log("exittag" + count++);
};


// Enter a parse tree produced by NELParser#descripton.
NELListenerImpl.prototype.enterDescripton = function (ctx) {
    integration.Service.apiElementValuePairs.description = ctx.StringLiteral().getText().replace(/['"]+/g, '');
    console.log("enterDescripton" + count++);
};

// Exit a parse tree produced by NELParser#descripton.
NELListenerImpl.prototype.exitDescripton = function (ctx) {
    console.log("exitDescription" + count++);
};


// Enter a parse tree produced by NELParser#producer.
NELListenerImpl.prototype.enterProducer = function (ctx) {
    console.log("enterProducer" + count++);
    integration.Service.apiElementValuePairs.producer = {};
};

// Exit a parse tree produced by NELParser#producer.
NELListenerImpl.prototype.exitProducer = function (ctx) {
    console.log("exitProducer" + count++);
};


// Enter a parse tree produced by NELParser#constant.
NELListenerImpl.prototype.enterConstant = function (ctx) {
    var type = (ctx.classType() != null) ? ctx.classType().getText() : ctx.type().getText();
    console.log("enterConstant" + count++);
    var endpoint = {};
    if (type === "endpoint") {
        endpoint.uri = ctx.StringLiteral().getText().replace(/['"]+/g, '');
        endpoint.name = ctx.Identifier()[0].getText();
    }
    integration.Endpoints.push(endpoint);
};

// Exit a parse tree produced by NELParser#constant.
NELListenerImpl.prototype.exitConstant = function (ctx) {
    console.log("exitConstant" + count++);
};


// Enter a parse tree produced by NELParser#globalVariable.
NELListenerImpl.prototype.enterGlobalVariable = function (ctx) {
};

// Exit a parse tree produced by NELParser#globalVariable.
NELListenerImpl.prototype.exitGlobalVariable = function (ctx) {
};


// Enter a parse tree produced by NELParser#elementValuePair.
NELListenerImpl.prototype.enterElementValuePair = function (ctx) {
    console.log("enterElementValuePair" + count++);

};

// Exit a parse tree produced by NELParser#elementValuePair.
NELListenerImpl.prototype.exitElementValuePair = function (ctx) {
    console.log("exitElementValuePair" + count++);
};


// Enter a parse tree produced by NELParser#elementValue.
NELListenerImpl.prototype.enterElementValue = function (ctx) {
};

// Exit a parse tree produced by NELParser#elementValue.
NELListenerImpl.prototype.exitElementValue = function (ctx) {
};


// Enter a parse tree produced by NELParser#resource.
NELListenerImpl.prototype.enterResource = function (ctx) {
};

// Exit a parse tree produced by NELParser#resource.
NELListenerImpl.prototype.exitResource = function (ctx) {
    // var path = ctx.resourcePath().StringLiteral().getText();
    // integration.resource.path = path;
    /* Updating annotations */
    // //TODO: set all for current resource (not for one resource)
    // if (!ctx.httpMethods().getMethod().isEmpty()) {
    //    // this.currentResource.getAnnotations().get('@GET').setValue(Boolean.TRUE);
    //     integration.resource.get = true;
    // }
    // if (!ctx.httpMethods().putMethod().isEmpty()) {
    //     //this.currentResource.getAnnotations().get(ConfigConstants.PUT_ANNOTATION).setValue(Boolean.TRUE);
    //     integration.resource.put = true;
    // }
    // if (!ctx.httpMethods().postMethod().isEmpty()) {
    //     //this.currentResource.getAnnotations().get(ConfigConstants.POST_ANNOTATION).setValue(Boolean.TRUE);
    //     integration.resource.post = true;
    // }
    // if (!ctx.httpMethods().deleteMethod().isEmpty()) {
    //     //this.currentResource.getAnnotations().get(ConfigConstants.DELETE_ANNOTATION).setValue(Boolean.TRUE);
    //     integration.resource.delete = true;
    // }

    //this.currentResource.getAnnotations().get(ConfigConstants.AN_BASE_PATH).setValue(path);

    //integration.getResources().put(this.currentResource.getName(), this.currentResource);
};


// Enter a parse tree produced by NELParser#httpMethods.
NELListenerImpl.prototype.enterHttpMethods = function (ctx) {
};

// Exit a parse tree produced by NELParser#httpMethods.
NELListenerImpl.prototype.exitHttpMethods = function (ctx) {
};


// Enter a parse tree produced by NELParser#qualifiedName.
NELListenerImpl.prototype.enterQualifiedName = function (ctx) {
};

// Exit a parse tree produced by NELParser#qualifiedName.
NELListenerImpl.prototype.exitQualifiedName = function (ctx) {
};


// Enter a parse tree produced by NELParser#resourceDeclaration.
NELListenerImpl.prototype.enterResourceDeclaration = function (ctx) {
    currentResource.inputParameter = ctx.Identifier().getText();
    console.log("enterResourceDeclaration: " + ctx.Identifier().getText() + " " + count++);
};

// Exit a parse tree produced by NELParser#resourceDeclaration.
NELListenerImpl.prototype.exitResourceDeclaration = function (ctx) {
    //set resource passthrough(message m) - > m
    console.log("exitResourceDeclaration" + count++);
};


// Enter a parse tree produced by NELParser#resourceName.
NELListenerImpl.prototype.enterResourceName = function (ctx) {
    console.log("enterResourceName" + count++);
    currentResource.name = ctx.Identifier().getText();
};

// Exit a parse tree produced by NELParser#resourceName.
NELListenerImpl.prototype.exitResourceName = function (ctx) {
    console.log("exitResourceName" + count++);
    // currentResource.name = ctx.Identifier().getText();
    // currentResource = integration.resource;
};


// Enter a parse tree produced by NELParser#block.
NELListenerImpl.prototype.enterBlock = function (ctx) {
};

// Exit a parse tree produced by NELParser#block.
NELListenerImpl.prototype.exitBlock = function (ctx) {
};


// Enter a parse tree produced by NELParser#blockStatement.
NELListenerImpl.prototype.enterBlockStatement = function (ctx) {
};

// Exit a parse tree produced by NELParser#blockStatement.
NELListenerImpl.prototype.exitBlockStatement = function (ctx) {
};


// Enter a parse tree produced by NELParser#tryCatchBlock.
NELListenerImpl.prototype.enterTryCatchBlock = function (ctx) {
};

// Exit a parse tree produced by NELParser#tryCatchBlock.
NELListenerImpl.prototype.exitTryCatchBlock = function (ctx) {
};


// Enter a parse tree produced by NELParser#tryClause.
NELListenerImpl.prototype.enterTryClause = function (ctx) {
};

// Exit a parse tree produced by NELParser#tryClause.
NELListenerImpl.prototype.exitTryClause = function (ctx) {
};


// Enter a parse tree produced by NELParser#catchClause.
NELListenerImpl.prototype.enterCatchClause = function (ctx) {
};

// Exit a parse tree produced by NELParser#catchClause.
NELListenerImpl.prototype.exitCatchClause = function (ctx) {
};


// Enter a parse tree produced by NELParser#exceptionHandler.
NELListenerImpl.prototype.enterExceptionHandler = function (ctx) {
};

// Exit a parse tree produced by NELParser#exceptionHandler.
NELListenerImpl.prototype.exitExceptionHandler = function (ctx) {
};


// Enter a parse tree produced by NELParser#exceptionType.
NELListenerImpl.prototype.enterExceptionType = function (ctx) {
};

// Exit a parse tree produced by NELParser#exceptionType.
NELListenerImpl.prototype.exitExceptionType = function (ctx) {
};


// Enter a parse tree produced by NELParser#ifElseBlock.
NELListenerImpl.prototype.enterIfElseBlock = function (ctx) {
};

// Exit a parse tree produced by NELParser#ifElseBlock.
NELListenerImpl.prototype.exitIfElseBlock = function (ctx) {
};


// Enter a parse tree produced by NELParser#ifBlock.
NELListenerImpl.prototype.enterIfBlock = function (ctx) {
};

// Exit a parse tree produced by NELParser#ifBlock.
NELListenerImpl.prototype.exitIfBlock = function (ctx) {
};


// Enter a parse tree produced by NELParser#elseBlock.
NELListenerImpl.prototype.enterElseBlock = function (ctx) {
};

// Exit a parse tree produced by NELParser#elseBlock.
NELListenerImpl.prototype.exitElseBlock = function (ctx) {
};


// Enter a parse tree produced by NELParser#localVariableDeclarationStatement.
NELListenerImpl.prototype.enterLocalVariableDeclarationStatement = function (ctx) {
    console.log("enterLocalVariableDeclarationStatement" + count++);
    var type;
    var variableName;
    var property = {
        key: "",
        name: ""
    };
    //TODO need a property holder for general case
    if (ctx.type() != null) { // pattern of "type Identifier ';'"
        console.log("type identifier");
        type = ctx.type().getText();
    } else if (ctx.classType() != null) { // pattern of "message m ';'"
        console.log("message m");
        type = ctx.classType().getText();
    }
    variableName = ctx.Identifier().getText();
    //TODO set to property
    property.key = variableName;
    property.name = type;
    currentResource.property = property;
};

// Exit a parse tree produced by NELParser#localVariableDeclarationStatement.
NELListenerImpl.prototype.exitLocalVariableDeclarationStatement = function (ctx) {
    console.log("extLocalVariableDeclarationstatement" + count++);
    // var type;
    console.log(currentResource);
    var parameters = [
        {
            key: "title",
            value: currentResource.name
        },
        {
            key: "path",
            value: currentResource.path
        },
        {
            key: "get",
            value: currentResource.get
        },
        {
            key: "put",
            value: currentResource.put
        },
        {
            key: "post",
            value: currentResource.post
        }
    ];
    rootNode.setParameters(parameters);
    rootNode.setConfigStart(
        "resource " + currentResource.name + " (message " + currentResource.inputParameter + ") {\n"
        + currentResource.property.name + " " + currentResource.property.key + ";"
    );
    rootNode.setConfigEnd("}");
    // var variableName;
    // var property = {
    //     key: "",
    //     name: ""
    // };
    // //TODO need a property holder for general case
    // if (ctx.type() != null) { // pattern of "type Identifier ';'"
    //     console.log("type identifier");
    //     type = ctx.type().getText();
    // } else if (ctx.classType() != null) { // pattern of "message m ';'"
    //     console.log("message m");
    //     type = ctx.classType().getText();
    // }
    // variableName = ctx.Identifier().getText();
    // //TODO set to property
    // property.key = variableName;
    // property.name = type;
    // currentResource.property = property;
    //dropMediatorFilterAware(property)
};


// Enter a parse tree produced by NELParser#localVariableInitializationStatement.
NELListenerImpl.prototype.enterLocalVariableInitializationStatement = function (ctx) {
    isInitializationFired = true;
};

// Exit a parse tree produced by NELParser#localVariableInitializationStatement.
NELListenerImpl.prototype.exitLocalVariableInitializationStatement = function (ctx) {
//yet to add

    isInitializationFired = false;
};


// Enter a parse tree produced by NELParser#localVariableAssignmentStatement.
NELListenerImpl.prototype.enterLocalVariableAssignmentStatement = function (ctx) {
};

// Exit a parse tree produced by NELParser#localVariableAssignmentStatement.
NELListenerImpl.prototype.exitLocalVariableAssignmentStatement = function (ctx) {
    var type;
    var variableName;
    var variableValue;
    //TODO commentes parts are not needed for passthrough
    // ParameterHolder parameterHolder = new ParameterHolder();
    // Mediator propertyMediator = MediatorProviderRegistry.getInstance().getMediator(Constants.PROPERTY_MEDIATOR_NAME);

    if (ctx.newTypeObjectCreation() != null) { // pattern of " m '=' new message() ';' "
        type = ctx.newTypeObjectCreation().classType().getText();
        variableName = ctx.Identifier().getText();
        // parameterHolder.addParameter(new Parameter(Constants.TYPE, type));
        // parameterHolder.addParameter(new Parameter(Constants.ASSIGNMENT, Boolean.FALSE.toString()));
    } else if (ctx.mediatorCall() != null) {
        return;
    } else {  // pattern of " i = 4 ';'"
        variableName = ctx.Identifier().getText();
        if (ctx.literal().StringLiteral() != null) {
            variableValue = ctx.literal().getText();
        }

        // parameterHolder.addParameter(new Parameter(Constants.VALUE, variableValue));
        // parameterHolder.addParameter(new Parameter(Constants.ASSIGNMENT, Boolean.TRUE.toString()));
    }
    // parameterHolder.addParameter(new Parameter(Constants.KEY, variableName));
    //
    // propertyMediator.setParameters(parameterHolder);
    // dropMediatorFilterAware(propertyMediator);
};


// Enter a parse tree produced by NELParser#mediatorCallStatement.
NELListenerImpl.prototype.enterMediatorCallStatement = function (ctx) {
    console.log("EntermediatorCallStatement" + count++);
};

// Exit a parse tree produced by NELParser#mediatorCallStatement.
NELListenerImpl.prototype.exitMediatorCallStatement = function (ctx) {
    console.log("ExitmediatorCallStatement" + count++);
};


// Enter a parse tree produced by NELParser#newTypeObjectCreation.
NELListenerImpl.prototype.enterNewTypeObjectCreation = function (ctx) {
};

// Exit a parse tree produced by NELParser#newTypeObjectCreation.
NELListenerImpl.prototype.exitNewTypeObjectCreation = function (ctx) {
};


// Enter a parse tree produced by NELParser#mediatorCall.
NELListenerImpl.prototype.enterMediatorCall = function (ctx) {
    console.log("enterMediatorCall" + count++);
    var parameter = {
        key: "",
        value: ""
    };
    //invoke and header mediator
    var mediatorId = ctx.Identifier().getText();
    console.log("MediatorId: " + mediatorId);
    // call mediator is specified in the language as "invoke". This is a special case.
    if ("invoke" === mediatorId) {
        var invoke = {
            parameters: []
        };
        //invoke mediator
        // passing all the mediator input arguments
        var endpointRef = "";
        var messageRef = "";
        if (ctx.keyValuePairs() != null) {
            var keyValuePairs = ctx.keyValuePairs().keyValuePair();
            keyValuePairs.forEach(function (keyValuePair, index) {
                var tempParameter = JSON.parse(JSON.stringify(parameter));
                if (keyValuePair.literal() != null) {
                    //check for double quotes
                    tempParameter.value = keyValuePair.literal().getText();
                } else {
                    tempParameter.value = keyValuePair.Identifier(keyValuePair.Identifier().length - 1).getText();
                }
                // if the key is a classType (eg: 'endpoint' or 'message')
                if (keyValuePair.classType() != null) {
                    tempParameter.key = keyValuePair.classType().getText();
                } else {
                    tempParameter.key = keyValuePair.Identifier(0).getText();
                }
                if (tempParameter.key === "endpointRef") {
                    endpointRef = tempParameter.value;
                } else if (tempParameter.key === "messageRef") {
                    messageRef = tempParameter.value;
                }
                invoke.parameters[index] = tempParameter;
            });
        }
        currentResource.invoke = invoke;
        var invokeNode = new TreeNode("InvokeMediator", "InvokeMediator", ("response = invoke(endpointRef="
                                                                           + endpointRef
                                                                           + ", messageRef=" + messageRef
                                                                           + ")"), ";", [{
            key: "endpointRef",
            value: endpointRef
        }]);
        rootNode.getChildren().push(invokeNode);
    } else if ("setHeader" === mediatorId) {
        //header mediator
    } else if ("log" === mediatorId) {
        var log = {parameters: []};

        if (ctx.keyValuePairs() != null) {
            var keyValuePairs = ctx.keyValuePairs().keyValuePair();
            keyValuePairs.forEach(function (keyValuePair, index) {
                var tempParameter = JSON.parse(JSON.stringify(parameter));
                if (keyValuePair.literal() != null) {
                    //check for double quotes
                    tempParameter.value = keyValuePair.literal().getText().replace(/['"]+/g, '');
                } else {
                    tempParameter.value =
                        keyValuePair.Identifier(keyValuePair.Identifier().length - 1).getText().replace(/['"]+/g, '');
                }
                // if the key is a classType (eg: 'endpoint' or 'message')
                if (keyValuePair.classType() != null) {
                    tempParameter.key = keyValuePair.classType().getText();
                } else {
                    tempParameter.key = keyValuePair.Identifier(0).getText();
                }
                log.parameters[index] = tempParameter;
            });

        }

        currentResource.log = log;
        var log_configStart = "log(level=\"" + log.parameters[1].value + "\"," + "status=\"" + log.parameters[0].value
                              + "\"";
        var logNode = new TreeNode("LogMediator", "LogMediator", log_configStart, ");");
        rootNode.getChildren().push(logNode);
    }

};

// Exit a parse tree produced by NELParser#mediatorCall.
NELListenerImpl.prototype.exitMediatorCall = function (ctx) {
    console.log("exitMediatorCall" + count++);
    // var invoke = {
    //     parameters: []
    // };
    // var parameter = {
    //     key: "",
    //     value: ""
    // };
    // //invoke and header mediator
    // var mediatorId = ctx.Identifier().getText();
    // // call mediator is specified in the language as "invoke". This is a special case.
    // if ("invoke" === mediatorId) {
    //     //invoke mediator
    // } else if ("setHeader" === mediatorId) {
    //     //header mediator
    // }
    // // passing all the mediator input arguments
    // if (ctx.keyValuePairs() != null) {
    //     var keyValuePairs = ctx.keyValuePairs().keyValuePair();
    //     keyValuePairs.forEach(function (keyValuePair, index) {
    //         var tempParameter = JSON.parse(JSON.stringify(parameter));
    //         if (keyValuePair.literal() != null) {
    //             //check for double quotes
    //             tempParameter.value = keyValuePair.literal().getText();
    //         } else {
    //             tempParameter.value = keyValuePair.Identifier(keyValuePair.Identifier().length - 1).getText();
    //         }
    //         // if the key is a classType (eg: 'endpoint' or 'message')
    //         if (keyValuePair.classType() != null) {
    //             tempParameter.key = keyValuePair.classType().getText();
    //         } else {
    //             tempParameter.key = keyValuePair.Identifier(0).getText();
    //         }
    //         invoke.parameters[index] = tempParameter;
    //     });
    //
    // }
    //Adding the return variable key
    // if (ctx.parent instanceof NELParser.LocalVariableInitializationStatementContext) {
    //     parameterHolder.addParameter(new Parameter(Constants.RETURN_VALUE,
    //         (( NELParser.LocalVariableInitializationStatementContext)
    //         (( NELLParser.MediatorCallContext) ctx).parent).Identifier().getText()));
    // } else if (ctx.parent instanceof WUMLParser.LocalVariableAssignmentStatementContext) {
    //     parameterHolder.addParameter(new Parameter(Constants.RETURN_VALUE,
    //         ((WUMLParser.LocalVariableAssignmentStatementContext)
    //         ((WUMLParser.MediatorCallContext) ctx).parent).Identifier().getText()));
    // }

    // setting the integration name to the mediator. It can use useful in writing the operation in the mediator
    //parameterHolder.addParameter(new Parameter(Constants.INTEGRATION_KEY, this.integrationName));
    // currentResource.invoke = invoke;
    //mediator.setParameters(parameterHolder);
    //dropMediatorFilterAware(mediator);
};


// Enter a parse tree produced by NELParser#endpointDeclaration.
NELListenerImpl.prototype.enterEndpointDeclaration = function (ctx) {
};

// Exit a parse tree produced by NELParser#endpointDeclaration.
NELListenerImpl.prototype.exitEndpointDeclaration = function (ctx) {
};


// Enter a parse tree produced by NELParser#parametersAnnotation.
NELListenerImpl.prototype.enterParametersAnnotation = function (ctx) {
};

// Exit a parse tree produced by NELParser#parametersAnnotation.
NELListenerImpl.prototype.exitParametersAnnotation = function (ctx) {
};


// Enter a parse tree produced by NELParser#circuitBreakerAnnotation.
NELListenerImpl.prototype.enterCircuitBreakerAnnotation = function (ctx) {
};

// Exit a parse tree produced by NELParser#circuitBreakerAnnotation.
NELListenerImpl.prototype.exitCircuitBreakerAnnotation = function (ctx) {
};


// Enter a parse tree produced by NELParser#keyValuePairs.
NELListenerImpl.prototype.enterKeyValuePairs = function (ctx) {
};

// Exit a parse tree produced by NELParser#keyValuePairs.
NELListenerImpl.prototype.exitKeyValuePairs = function (ctx) {
};


// Enter a parse tree produced by NELParser#keyValuePair.
NELListenerImpl.prototype.enterKeyValuePair = function (ctx) {
};

// Exit a parse tree produced by NELParser#keyValuePair.
NELListenerImpl.prototype.exitKeyValuePair = function (ctx) {
};


// Enter a parse tree produced by NELParser#messageModificationStatement.
NELListenerImpl.prototype.enterMessageModificationStatement = function (ctx) {
};

// Exit a parse tree produced by NELParser#messageModificationStatement.
NELListenerImpl.prototype.exitMessageModificationStatement = function (ctx) {
};


// Enter a parse tree produced by NELParser#returnStatement.
NELListenerImpl.prototype.enterReturnStatement = function (ctx) {
    console.log("enterReturnStatement" + count++);
    //Mediator respondMediator = MediatorProviderRegistry.getInstance().getMediator(Constants.RESPOND_MEDIATOR_NAME);
    var respondMediator = {messageId: ""};
    //ParameterHolder parameterHolder = new ParameterHolder();
    if (ctx.Identifier() != null) {
        var messageId = ctx.Identifier().getText();
        respondMediator.messageId = messageId;
    }
    currentResource.respondMediator = respondMediator;
    var replyNode = new TreeNode("ResponseMsg", "ResponseMsg", "reply " + messageId, ";");
    rootNode.getChildren().push(replyNode);
};

// Exit a parse tree produced by NELParser#returnStatement.
NELListenerImpl.prototype.exitReturnStatement = function (ctx) {
    //reply response;
    console.log("exitReturnStatement" + count++);
    //dropMediatorFilterAware(respondMediator);
};


// Enter a parse tree produced by NELParser#parExpression.
NELListenerImpl.prototype.enterParExpression = function (ctx) {
};

// Exit a parse tree produced by NELParser#parExpression.
NELListenerImpl.prototype.exitParExpression = function (ctx) {
};


// Enter a parse tree produced by NELParser#expression.
NELListenerImpl.prototype.enterExpression = function (ctx) {
};

// Exit a parse tree produced by NELParser#expression.
NELListenerImpl.prototype.exitExpression = function (ctx) {
};


// Enter a parse tree produced by NELParser#evalExpression.
NELListenerImpl.prototype.enterEvalExpression = function (ctx) {
};

// Exit a parse tree produced by NELParser#evalExpression.
NELListenerImpl.prototype.exitEvalExpression = function (ctx) {
};


// Enter a parse tree produced by NELParser#literal.
NELListenerImpl.prototype.enterLiteral = function (ctx) {
};

// Exit a parse tree produced by NELParser#literal.
NELListenerImpl.prototype.exitLiteral = function (ctx) {
};


// Enter a parse tree produced by NELParser#mediaType.
NELListenerImpl.prototype.enterMediaType = function (ctx) {
    integration.Service.apiElementValuePairs.producer = {mediaType: ctx.getText()};
    console.log("enterMediaType" + count++);
};

// Exit a parse tree produced by NELParser#mediaType.
NELListenerImpl.prototype.exitMediaType = function (ctx) {
    console.log("exitMediaType" + count++);
};


// Enter a parse tree produced by NELParser#type.
NELListenerImpl.prototype.enterType = function (ctx) {
};

// Exit a parse tree produced by NELParser#type.
NELListenerImpl.prototype.exitType = function (ctx) {
};


// Enter a parse tree produced by NELParser#classType.
NELListenerImpl.prototype.enterClassType = function (ctx) {
};

// Exit a parse tree produced by NELParser#classType.
NELListenerImpl.prototype.exitClassType = function (ctx) {
};


// Enter a parse tree produced by NELParser#messagePropertyName.
NELListenerImpl.prototype.enterMessagePropertyName = function (ctx) {
};

// Exit a parse tree produced by NELParser#messagePropertyName.
NELListenerImpl.prototype.exitMessagePropertyName = function (ctx) {
};

exports.NELListenerImpl = NELListenerImpl;