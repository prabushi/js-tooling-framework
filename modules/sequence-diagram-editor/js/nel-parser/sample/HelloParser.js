// Generated from Hello.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var HelloListener = require('./HelloListener').HelloListener;
var grammarFileName = "Hello.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\5\b\4\2\t\2\3\2\3\2\3\2\3\2\2\2\3\2\2\2\6\2\4\3\2\2\2\4\5\7\3\2\2",
    "\5\6\7\4\2\2\6\3\3\2\2\2\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'hello'" ];

var symbolicNames = [ 'null', 'null', "ID", "WS" ];

var ruleNames =  [ "r" ];

function HelloParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

HelloParser.prototype = Object.create(antlr4.Parser.prototype);
HelloParser.prototype.constructor = HelloParser;

Object.defineProperty(HelloParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

HelloParser.EOF = antlr4.Token.EOF;
HelloParser.T__0 = 1;
HelloParser.ID = 2;
HelloParser.WS = 3;

HelloParser.RULE_r = 0;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HelloParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.ID = function() {
    return this.getToken(HelloParser.ID, 0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.exitR(this);
	}
};




HelloParser.RContext = RContext;

HelloParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, HelloParser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(HelloParser.T__0);
        this.state = 3;
        this.match(HelloParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.HelloParser = HelloParser;
