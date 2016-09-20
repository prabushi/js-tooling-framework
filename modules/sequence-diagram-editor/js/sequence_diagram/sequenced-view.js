/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * SequenceD-Views Module extension.
 *
 * Definition of Backbone Views required for Sequence Diagrams.
 */
var SequenceD = (function (sequenced) {
    var views = sequenced.Views = sequenced.Views || {};
    var toolPaletteWidth = 240;
    var imageHeight = 20;

    var Processor = Diagrams.Views.ShapeView.extend(
        /** @lends Processor.prototype */
        {
            /**
             * @augments ShapeView
             * @constructs
             * @class Processor Represents the view for processor components in Sequence Diagrams.
             * @param {Object} options Rendering options for the view
             */
            initialize: function (options) {
                Diagrams.Views.ShapeView.prototype.initialize.call(this, options);
            },

            verticalDrag: function () {
                return false;
            },

            render: function (paperID, centerPoint) {
                Diagrams.Views.ShapeView.prototype.render.call(this, paperID);
                thisModel = this.model;
                var processor = this.drawProcessor(centerPoint, this.modelAttr('title'), this.options);
                var viewObj = this;
                var drag = d3.drag()
                    .on("start", function () {
                        viewObj.dragStart(d3.event);
                    })
                    .on("drag", function () {
                        viewObj.dragMove(d3.event);
                    })
                    .on("end", function () {
                        viewObj.dragStop();
                    });

                this.d3el = processor;
                this.el = processor.node();
                return processor;
            },

            drawProcessor: function (center, title, prefs) {
                var d3Ref = this.getD3Ref();
                var group = d3Ref.draw.group()
                    .classed(prefs.class, true);
                var viewObj = this;
                if (this.model.model.type === "UnitProcessor") {

                    var rectBottomXXX = d3Ref.draw.centeredRect(center,
                        prefs.rect.width,
                        prefs.rect.height,
                        3,
                        3,
                        this.group, //element.viewAttributes.colour
                        this.modelAttr('viewAttributes').colour
                    );
                    var mediatorText = d3Ref.draw.centeredText(center,
                        title,
                        this.group)
                        .classed(prefs.text.class, true);
                    Object.getPrototypeOf(group).rect = rectBottomXXX;
                    Object.getPrototypeOf(group).title = mediatorText;
                    //this.renderViewForElement(element, opts);
                } else if (this.model.model.type === "DynamicContainableProcessor") {

                    console.log("Processor added");
                    var rectBottomXXX = d3Ref.draw.rectWithTitle(center,
                        150,
                        prefs.rect.height,
                        3,
                        3,
                        d3Ref,
                        this.modelAttr('viewAttributes').colour,
                        this.modelAttr('title')
                    );
                    console.log("started");
                    var middleRect = d3Ref.draw.centeredBasicRect(createPoint(center.x(),
                        center.y()+75), lifeLineOptions.rect.width-20, 150, 3, 3);
                    middleRect.on("mousedown", function () {
                            var m = d3.mouse(this);
                            this.mouseDown(prefs, center.x(), m[1]);
                        }).on('mouseover', function () {
                            console.log("middle rect detected");
                            diagram.selectedNode = viewObj.model;
                            d3.select(this).style("fill", "green").style("fill-opacity", 0.1);
                        }).on('mouseout', function () {
                            diagram.destinationLifeLine = diagram.selectedNode;
                            diagram.selectedNode = null;
                            d3.select(this).style("fill-opacity", 0.01);
                        }).on('mouseup', function (data) {
                        });
                    console.log(middleRect);
                    Object.getPrototypeOf(group).rect = rectBottomXXX;
                    Object.getPrototypeOf(group).middleRect = middleRect;

                    var centerPoint = center;
                    var xValue = centerPoint.x();
                    var yValue = centerPoint.y();
                    //lifeLine.call(drag);
                    for (var id in this.modelAttr("children").models) {
                        yValue += 60;
                        var processor = this.modelAttr("children").models[id];
                        var processorView = new SequenceD.Views.Processor({model: processor, options: lifeLineOptions});
                        var processorCenterPoint = createPoint(xValue, yValue);
                        processorView.render("#diagramWrapper", processorCenterPoint);
                        processor.setY(yValue);
                    }



                } else if (this.model.model.type === "ComplexProcessor") {

                    console.log("Processor added");
                    var rectBottomXXX = d3Ref.draw.rectWithTitle(
                        center,
                        150,
                        prefs.rect.height,
                        3,
                        3,
                        d3Ref,
                        this.modelAttr('viewAttributes').colour,
                        this.modelAttr('title')
                    );
                    console.log("started");
                    var middleRect = d3Ref.draw.centeredBasicRect(createPoint(center.x(),
                        center.y()+75), lifeLineOptions.rect.width-20, 150, 3, 3);
                    middleRect.on("mousedown", function () {
                            var m = d3.mouse(this);
                            this.mouseDown(prefs, center.x(), m[1]);
                        }).on('mouseover', function () {
                            diagram.selectedNode = viewObj.model;
                            d3.select(this).style("fill", "green").style("fill-opacity", 0.1);
                        }).on('mouseout', function () {
                            diagram.destinationLifeLine = diagram.selectedNode;
                            diagram.selectedNode = null;
                            d3.select(this).style("fill-opacity", 0.01);
                        }).on('mouseup', function (data) {
                        });
                    console.log(middleRect);

                    Object.getPrototypeOf(group).middleRect = middleRect;
                    Object.getPrototypeOf(group).rect = rectBottomXXX;

                    var centerPoint = center;
                    var xValue = centerPoint.x();
                    var yValue = centerPoint.y();
                    //lifeLine.call(drag);
                    for (var id in this.modelAttr("children").models) {
                        yValue += 60;
                        var processor = this.modelAttr("children").models[id];
                        var processorView = new SequenceD.Views.Processor({model: processor, options: lifeLineOptions});
                        var processorCenterPoint = createPoint(xValue, yValue);
                        processorView.render("#diagramWrapper", processorCenterPoint);
                        processor.setY(yValue);
                    }

                }

                /*var rect = d3Ref.draw.centeredRect(center, prefs.rect.width, prefs.rect.height, 3, 3, group)
                 .classed(prefs.rect.class, true);
                 var text = d3Ref.draw.centeredText(center, title, group)
                 .classed(prefs.text.class, true);*/

                Object.getPrototypeOf(group).translate = function (dx, dy) {
                    this.attr("transform", function () {
                        return "translate(" + [dx, dy] + ")"
                    })
                };

                return group;
            }

        });

    var LifeLineView = Diagrams.Views.ShapeView.extend(
        /** @lends LifeLineView.prototype */
        {
            /**
             * @augments ShapeView
             * @constructs
             * @class LifeLineView Represents the view for lifeline components in Sequence Diagrams.
             * @param {Object} options Rendering options for the view
             */
            initialize: function (options) {
                Diagrams.Views.ShapeView.prototype.initialize.call(this, options);
                this.listenTo(this.model, 'change:title', this.renderTitle);
            },

            handleDropEvent: function (event, ui) {
                console.log("dropped in to LifeLineView ")
            },

            verticalDrag: function () {
                return false;
            },

            thisModel: '',

            renderTitle: function () {
                console.log("lifeline rendered again due to its title change");
                this.render('.editor');
            },

            render: function (paperID) {
                Diagrams.Views.ShapeView.prototype.render.call(this, paperID);
                thisModel = this.model;
                var centerPoint = this.modelAttr('centerPoint');
                var lifeLine = this.drawLifeLine(centerPoint, this.modelAttr('title'), this.options);
                var viewObj = this;
                var drag = d3.drag()
                    .on("start", function () {
                        viewObj.dragStart(d3.event);
                    })
                    .on("drag", function () {
                        viewObj.dragMove(d3.event);
                    })
                    .on("end", function () {
                        viewObj.dragStop();
                    });
                var xValue = centerPoint.x();
                var yValue = centerPoint.y();

                // Disabling the lifeline dragging
                //lifeLine.call(drag);
                for (var id in this.modelAttr("children").models) {
                    yValue += 60;
                    if(this.modelAttr("children").models[id] instanceof SequenceD.Models.Processor) {
                        var processor = this.modelAttr("children").models[id];
                        var processorView = new SequenceD.Views.Processor({model: processor, options: lifeLineOptions});
                        var processorCenterPoint = createPoint(xValue, yValue);
                        processorView.render("#diagramWrapper", processorCenterPoint);
                        processor.setY(yValue);
                    } else {
                        var link = this.modelAttr("children").models[id];

                    }
                }

                this.model.on("addChildProcessor", this.onAddChildProcessor, this);

                this.d3el = lifeLine;
                this.el = lifeLine.node();
                return lifeLine;
            },

            onAddChildProcessor: function (element, opts) {

                if (element instanceof SequenceD.Models.Processor) {

                    if (element.model.type === "UnitProcessor") {

                        var d3Ref = this.getD3Ref();
                        console.log("Processor added");
                        var rectBottomXXX = d3Ref.draw.centeredRect(
                            createPoint(diagram.selectedNode.get('centerPoint').get('x'),
                                element.get('centerPoint').get('y')),
                            this.prefs.rect.width,
                            this.prefs.rect.height,
                            3,
                            3,
                            this.group, element.viewAttributes.colour
                        );
                        var mediatorText = d3Ref.draw.centeredText(
                            createPoint(diagram.selectedNode.get('centerPoint').get('x'),
                                element.get('centerPoint').get('y')),
                            element.get('title'),
                            this.group)
                            .classed(this.prefs.text.class, true);
                        //this.renderViewForElement(element, opts);
                    } else if (element.model.type === "DynamicContainableProcessor") {
                        var d3Ref = this.getD3Ref();
                        console.log("Processor added");
                        var rectBottomXXX = d3Ref.draw.rectWithTitle(
                            createPoint(diagram.selectedNode.get('centerPoint').get('x'),
                                element.get('centerPoint').get('y')),
                            150,
                            this.prefs.rect.height,
                            3,
                            3,
                            this.group, element.viewAttributes.colour,
                            element.attributes.title
                        );

                    } else if (element.model.type === "ComplexProcessor") {
                        var d3Ref = this.getD3Ref();
                        console.log("Processor added");
                        var rectBottomXXX = d3Ref.draw.rectWithTitle(
                            createPoint(diagram.selectedNode.get('centerPoint').get('x'),
                                element.get('centerPoint').get('y')),
                            150,
                            this.prefs.rect.height,
                            3,
                            3,
                            this.group, element.viewAttributes.colour,
                            element.attributes.title
                        );

                    }

                } else if (element instanceof SequenceD.Models.Message) {
                    console.log("Message Link added !!!")
                    if (opts.direction == 'inbound') {
                        diagram.addElement(element, opts);
                    }
                }

            },

            drawLifeLine: function (center, title, prefs) {
                var d3Ref = this.getD3Ref();
                this.diagram = prefs.diagram;
                var viewObj = this;
                var group = d3Ref.draw.group()
                    .classed(prefs.class, true);

                this.group = group;
                this.prefs = prefs;
                this.center = center;
                this.title = title;
                var rect = d3Ref.draw.centeredRect(center, prefs.rect.width + 30, prefs.rect.height, 3, 3, group)
                    .classed(prefs.rect.class, true);

                var middleRect = d3Ref.draw.centeredBasicRect(createPoint(center.get('x'), center.get('y') + prefs.rect.height / 2 + prefs.line.height / 2), prefs.middleRect.width, prefs.middleRect.height, 3, 3, group)
                    .classed(prefs.middleRect.class, true);

                var drawMessageRect = d3Ref.draw.centeredBasicRect(createPoint(center.get('x'), center.get('y') + prefs.rect.height / 2 + prefs.line.height / 2), (prefs.middleRect.width*0.4), prefs.middleRect.height, 3, 3, group)
                    .on("mousedown", function () {
                        var m = d3.mouse(this);
                        viewObj.mouseDown(prefs, center.x(), m[1]);
                    });

                var rectBottom = d3Ref.draw.centeredRect(createPoint(center.get('x'), center.get('y') + prefs.line.height), prefs.rect.width + 30, prefs.rect.height, 3, 3, group)
                    .classed(prefs.rect.class, true);
                var line = d3Ref.draw.verticalLine(createPoint(center.get('x'), center.get('y') + prefs.rect.height / 2), prefs.line.height - prefs.rect.height, group)
                    .classed(prefs.line.class, true);
                var text = d3Ref.draw.centeredText(center, title, group)
                    .classed(prefs.text.class, true);
                var textBottom = d3Ref.draw.centeredText(createPoint(center.get('x'), center.get('y') + prefs.line.height), title, group)
                    .classed(prefs.text.class, true);
                Object.getPrototypeOf(group).rect = rect;
                Object.getPrototypeOf(group).rectBottom = rectBottom;
                Object.getPrototypeOf(group).line = line;
                Object.getPrototypeOf(group).middleRect = middleRect;
                Object.getPrototypeOf(group).drawMessageRect = drawMessageRect;
                Object.getPrototypeOf(group).title = text;
                Object.getPrototypeOf(group).titleBottom = textBottom;
                Object.getPrototypeOf(group).translate = function (dx, dy) {
                    this.attr("transform", function () {
                        return "translate(" + [dx, dy] + ")"
                    })
                };


                var viewObj = this;
                middleRect.on('mouseover', function () {
                    diagram.selectedNode = viewObj.model;
                    d3.select(this).style("fill", "green").style("fill-opacity", 0.1);
                }).on('mouseout', function () {
                    diagram.destinationLifeLine = diagram.selectedNode;
                    diagram.selectedNode = null;
                    d3.select(this).style("fill-opacity", 0.01);
                }).on('mouseup', function (data) {
                });

                drawMessageRect.on('mouseover', function () {
                    diagram.selectedNode = viewObj.model;
                    d3.select(this).style("fill", "black").style("fill-opacity", 0.2)
                        .style("cursor", 'url(http://www.rw-designer.com/cursor-extern.php?id=93354), pointer');
                }).on('mouseout', function () {
                    d3.select(this).style("fill-opacity", 0.0);
                }).on('mouseup', function (data) {
                });

                function updateudControlLocation(rect) {
                    var imgRight = rect.getBoundingClientRect().left - toolPaletteWidth + rect.getBoundingClientRect().width;
                    var imgTop = rect.getBoundingClientRect().top - imageHeight - 4;
                    udcontrol.set('visible', true);
                    udcontrol.set('x', imgRight);
                    udcontrol.set('y', imgTop);
                    udcontrol.set('lifeline', thisModel);
                }

                rect.on("click", (function () {
                    if (selected) {
                        if (this == selected) {
                            selected.classList.toggle("lifeline_selected");
                            udcontrol.set('visible', false);
                            udcontrol.set('lifeline', '');
                            selected = '';
                        } else {
                            selected.classList.toggle("lifeline_selected");
                            this.classList.toggle("lifeline_selected");
                            updateudControlLocation(this);
                            selected = this;
                        }
                    } else {
                        this.classList.toggle("lifeline_selected");
                        updateudControlLocation(this);
                        selected = this;
                    }
                }));

                return group;
            },

            mouseDown: function (prefs, x, y) {
                prefs.diagram.clickedLifeLine = this.model;
                prefs.diagram.onLifelineClicked(x, y);
            }

        });

    var MessageView = Diagrams.Views.LinkView.extend(
        /** @lends MessageView.prototype */
        {
            /**
             * @augments LinkView
             * @constructs
             * @class MessageView Represents the view for message components in Sequence Diagrams.
             * @param {Object} options Rendering options for the view
             */
            initialize: function (options) {
                Diagrams.Views.LinkView.prototype.initialize.call(this, options);
            },

            render: function (paperID) {
                // call super
                Diagrams.Views.LinkView.prototype.render.call(this, paperID);
                var viewObj = this;
                var drag = d3.drag()
                    .on("start", function () {
                        viewObj.dragStart(d3.event);
                    })
                    .on("drag", function () {
                        viewObj.dragMove(d3.event);
                    })
                    .on("end", function () {
                        viewObj.dragStop();
                    });

                this.d3el.call(drag);
                return this.d3el;
            }
        });

    var ActivationView = Diagrams.Views.ConnectionPointView.extend(
        /** @lends ConnectionPointView.prototype */
        {
            /**
             * @augments LinkView
             * @constructs
             * @class ActivationView Represents the view for activations in Sequence Diagrams.
             * @param {Object} options Rendering options for the view
             */
            initialize: function (options) {
                Diagrams.Views.ConnectionPointView.prototype.initialize.call(this, options);
            },

            render: function (paperID) {
                // call super
                Diagrams.Views.ConnectionPointView.prototype.render.call(this, paperID);

            },

            getNextAvailableConnectionPoint: function (connecion, x, y) {
                var nextYCoordinate = diagram.deepestPointY + 50;
                var nextXCoordinate = this.model.owner().get('centerPoint').x();

                // TODO: Until the layout finalize we will be drawing the message without offsetting dynamically
                //if (_.isEqual(connecion.type(), "incoming")) {
                //    lifeLineOptions.diagram.deepestPointY = nextYCoordinate;
                //}
                return new GeoCore.Models.Point({'x': nextXCoordinate, 'y': diagram.sourceLifeLineY});
            }
        });

    var FixedSizedMediatorView = Diagrams.Views.ShapeView.extend(
        /** @lends FixedSizedMediatorView.prototype */
        {
            /**
             * @augments ShapeView
             * @constructs
             * @class LifeLineView Represents the view for lifeline components in Sequence Diagrams.
             * @param {Object} options Rendering options for the view
             */
            initialize: function (options) {
                Diagrams.Views.ShapeView.prototype.initialize.call(this, options);
            },

            verticalDrag: function () {
                return false;
            },

            render: function (paperID) {
                Diagrams.Views.ShapeView.prototype.render.call(this, paperID);

                var lifeLine = this.drawFixedSizedMediator(this.modelAttr('centerPoint'), this.modelAttr('title'), this.options);
                var viewObj = this;
                var drag = d3.drag()
                    .on("start", function () {
                        viewObj.dragStart(d3.event);
                    })
                    .on("drag", function () {
                        viewObj.dragMove(d3.event);
                    })
                    .on("end", function () {
                        viewObj.dragStop();
                    });

                //lifeLine.call(drag);

                this.d3el = lifeLine;
                this.el = lifeLine.node();
                return lifeLine;
            },

            drawFixedSizedMediator: function (center, title, prefs) {
                var d3Ref = this.getD3Ref();
                var group = d3Ref.draw.group()
                    .classed(prefs.class, true);
                var rect = d3Ref.draw.centeredRect(center, prefs.rect.width, prefs.rect.height, 3, 3, group)
                    .classed(prefs.rect.class, true);
                //var rectBottom = d3Ref.draw.centeredRect(createPoint(center.get('x'), center.get('y') + prefs.line.height), prefs.rect.width, prefs.rect.height, 3, 3, group)
                //.classed(prefs.rect.class, true);
                //var line = d3Ref.draw.verticalLine(createPoint(center.get('x'), center.get('y')+ prefs.rect.height/2), prefs.line.height-prefs.rect.height, group)
                //.classed(prefs.line.class, true);
                var text = d3Ref.draw.centeredText(center, title, group)
                    .classed(prefs.text.class, true);
                //var textBottom = d3Ref.draw.centeredText(createPoint(center.get('x'), center.get('y') + prefs.line.height), title, group)
                // .classed(prefs.text.class, true);
                Object.getPrototypeOf(group).rect = rect;
                //Object.getPrototypeOf(group).rectBottom = rectBottom;
                //Object.getPrototypeOf(group).line = line;
                Object.getPrototypeOf(group).title = text;
                //Object.getPrototypeOf(group).titleBottom = textBottom;
                Object.getPrototypeOf(group).translate = function (dx, dy) {
                    this.attr("transform", function () {
                        return "translate(" + [dx, dy] + ")"
                    })
                };

                return group;
            }

        });

    views.MessageView = MessageView;
    views.ActivationView = ActivationView;
    views.LifeLineView = LifeLineView;
    views.FixedSizedMediatorView = FixedSizedMediatorView;
    views.Processor = Processor;
    return sequenced;

}(SequenceD || {}));