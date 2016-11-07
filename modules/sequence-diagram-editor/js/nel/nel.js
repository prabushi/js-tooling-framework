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

var NELTools = (function (nel) {

    var nel = nel || {};
    // var require = require('lib/require_js/require', function () {
    //
    // });

    // define(function () {
    //
    //     var antlr4 = require("lib/antlr4/index");
    //     var x = require("../antlr4/index");
    //     var nel = require("../nel-gen/index");
    // });

    var antlr4 = require(['lib/antlr4/index'], function (foo) {
        //foo is now loaded.
    });
    var NELLexer = require(['js/nel-gen/NELLexer'], function (foo) {
        //foo is now loaded.
    });
    var NELParser = require(['js/nel-gen/NELParser'], function (foo) {
        //foo is now loaded.require([
    });

    // var antlr4 = require('lib/antlr4/index');
    // var NELLexer = require('js/nel-gen/NELLexer');
    // var NELParser = require('js/nel-gen/NELParser');

    var parseScriptTree = function (input) {
        var chars = new antlr4.InputStream(input);
        var lexer = new NELLexer.NELLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new NELParser.NELParser(tokens);
        parser.buildParseTrees = true;
        return parser.script();
    };
    
    nel.parseScriptTree = parseScriptTree;
    
    return nel;

}(NELTools || {}));

