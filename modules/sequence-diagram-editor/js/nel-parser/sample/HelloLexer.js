// Generated from Hello.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\5\33\b\1\4\2\t\2\4\3\t\3\4\4\t\4\3\2\3\2\3\2\3\2\3\2\3\2\3\3\6\3",
    "\21\n\3\r\3\16\3\22\3\4\6\4\26\n\4\r\4\16\4\27\3\4\3\4\2\2\5\3\3\5\4",
    "\7\5\3\2\4\3\2c|\5\2\13\f\17\17\"\"\34\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3",
    "\2\2\2\3\t\3\2\2\2\5\20\3\2\2\2\7\25\3\2\2\2\t\n\7j\2\2\n\13\7g\2\2",
    "\13\f\7n\2\2\f\r\7n\2\2\r\16\7q\2\2\16\4\3\2\2\2\17\21\t\2\2\2\20\17",
    "\3\2\2\2\21\22\3\2\2\2\22\20\3\2\2\2\22\23\3\2\2\2\23\6\3\2\2\2\24\26",
    "\t\3\2\2\25\24\3\2\2\2\26\27\3\2\2\2\27\25\3\2\2\2\27\30\3\2\2\2\30",
    "\31\3\2\2\2\31\32\b\4\2\2\32\b\3\2\2\2\5\2\22\27\3\b\2\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function HelloLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

HelloLexer.prototype = Object.create(antlr4.Lexer.prototype);
HelloLexer.prototype.constructor = HelloLexer;

HelloLexer.EOF = antlr4.Token.EOF;
HelloLexer.T__0 = 1;
HelloLexer.ID = 2;
HelloLexer.WS = 3;


HelloLexer.modeNames = [ "DEFAULT_MODE" ];

HelloLexer.literalNames = [ 'null', "'hello'" ];

HelloLexer.symbolicNames = [ 'null', 'null', "ID", "WS" ];

HelloLexer.ruleNames = [ "T__0", "ID", "WS" ];

HelloLexer.grammarFileName = "Hello.g4";



exports.HelloLexer = HelloLexer;

