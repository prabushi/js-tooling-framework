// Generated from source.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sourceListener = require('./sourceListener').sourceListener;
var grammarFileName = "source.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\u0091\u0272\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t",
    "\b\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4",
    "\27\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35",
    "\4\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'",
    "\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61",
    "\t\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\4",
    "8\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C",
    "\tC\4D\tD\4E\tE\4F\tF\4G\tG\3\2\3\2\5\2\u0091\n\2\3\2\3\2\3\2\3\3\5",
    "\3\u0097\n\3\3\3\3\3\5\3\u009b\n\3\3\3\3\3\3\4\7\4\u00a0\n\4\f\4\16",
    "\4\u00a3\13\4\3\5\6\5\u00a6\n\5\r\5\16\5\u00a7\3\6\3\6\3\6\3\6\3\7\3",
    "\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3",
    "\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\5\13\u00ca\n\13\3\f\3\f\3",
    "\f\3\f\5\f\u00d0\n\f\3\r\3\r\3\r\3\r\5\r\u00d6\n\r\3\16\3\16\3\16\3",
    "\16\5\16\u00dc\n\16\3\17\3\17\3\17\3\17\5\17\u00e2\n\17\3\20\3\20\3",
    "\20\3\20\5\20\u00e8\n\20\3\20\5\20\u00eb\n\20\3\21\3\21\3\21\3\21\5",
    "\21\u00f1\n\21\3\21\5\21\u00f4\n\21\3\22\3\22\3\22\3\22\3\22\5\22\u00fb",
    "\n\22\3\22\5\22\u00fe\n\22\3\23\3\23\3\23\3\23\5\23\u0104\n\23\3\23",
    "\3\23\3\24\3\24\3\24\7\24\u010b\n\24\f\24\16\24\u010e\13\24\3\25\3\25",
    "\3\25\3\25\3\25\5\25\u0115\n\25\3\25\3\25\3\26\3\26\3\26\7\26\u011c",
    "\n\26\f\26\16\26\u011f\13\26\3\27\3\27\3\27\5\27\u0124\n\27\3\27\3\27",
    "\5\27\u0128\n\27\3\30\3\30\3\30\5\30\u012d\n\30\3\30\3\30\3\30\5\30",
    "\u0132\n\30\3\30\3\30\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3",
    "\33\3\33\3\33\3\34\3\34\3\34\6\34\u0145\n\34\r\34\16\34\u0146\3\35\3",
    "\35\3\35\3\35\7\35\u014d\n\35\f\35\16\35\u0150\13\35\3\35\3\35\3\36",
    "\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3",
    " \3 \3 \3 \3 \5 \u016b\n \3 \3 \3 \5 \u0170\n \3!\3!\3!\3!\3\"\3\"\3",
    "#\3#\5#\u017a\n#\3#\5#\u017d\n#\3#\5#\u0180\n#\3#\5#\u0183\n#\3#\3#",
    "\3#\3$\3$\3$\3$\3$\7$\u018d\n$\f$\16$\u0190\13$\3%\3%\3%\7%\u0195\n",
    "%\f%\16%\u0198\13%\3&\3&\3&\3&\3&\3&\3&\3&\3\'\3\'\3(\3(\7(\u01a6\n",
    "(\f(\16(\u01a9\13(\3(\3(\3)\3)\3)\3)\3)\3)\3)\3)\5)\u01b5\n)\3*\3*\6",
    "*\u01b9\n*\r*\16*\u01ba\3+\3+\3+\3,\3,\3,\3,\3,\3,\3-\3-\3-\3.\3.\3",
    "/\3/\5/\u01cd\n/\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\62\3\62\5\62\u01d8",
    "\n\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3",
    "\63\3\63\3\63\3\63\3\63\5\63\u01eb\n\63\3\64\3\64\3\64\3\64\3\64\3\64",
    "\3\64\3\64\3\64\3\64\3\64\5\64\u01f8\n\64\3\65\3\65\3\65\3\66\3\66\3",
    "\66\3\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67\3\67\3\67\3\67\5\67\u020b",
    "\n\67\38\38\38\38\38\38\38\39\39\39\39\39\39\39\3:\3:\3:\3:\3:\3:\3",
    ":\3;\3;\3;\3;\3;\3;\3;\3<\3<\3<\3<\3<\3<\5<\u022f\n<\3<\3<\3=\3=\3=",
    "\3=\3=\3=\3=\3=\3=\5=\u023c\n=\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3?\3?\3",
    "?\5?\u024b\n?\3?\3?\3@\3@\3@\3@\5@\u0253\n@\3@\3@\3A\3A\5A\u0259\nA",
    "\3B\3B\3B\3B\3B\3B\3B\3C\3C\3D\3D\3E\3E\3F\3F\3G\3G\3G\7G\u026d\nG\f",
    "G\16G\u0270\13G\3G\2\2H\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&",
    "(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084",
    "\u0086\u0088\u008a\u008c\2\t\4\2[[__\3\2\30\33\4\2klqv\3\2[`\3\2$%\13",
    "\2&&**,,//\66\66<<CCEEMM\4\2\27\27\'\'\u026d\2\u008e\3\2\2\2\4\u0096",
    "\3\2\2\2\6\u00a1\3\2\2\2\b\u00a5\3\2\2\2\n\u00a9\3\2\2\2\f\u00ad\3\2",
    "\2\2\16\u00b3\3\2\2\2\20\u00b9\3\2\2\2\22\u00bf\3\2\2\2\24\u00c5\3\2",
    "\2\2\26\u00cb\3\2\2\2\30\u00d1\3\2\2\2\32\u00d7\3\2\2\2\34\u00dd\3\2",
    "\2\2\36\u00e3\3\2\2\2 \u00ec\3\2\2\2\"\u00f5\3\2\2\2$\u00ff\3\2\2\2",
    "&\u0107\3\2\2\2(\u010f\3\2\2\2*\u0118\3\2\2\2,\u0120\3\2\2\2.\u012c",
    "\3\2\2\2\60\u0135\3\2\2\2\62\u0139\3\2\2\2\64\u013d\3\2\2\2\66\u0141",
    "\3\2\2\28\u0148\3\2\2\2:\u0153\3\2\2\2<\u0157\3\2\2\2>\u016f\3\2\2\2",
    "@\u0171\3\2\2\2B\u0175\3\2\2\2D\u0177\3\2\2\2F\u018e\3\2\2\2H\u0191",
    "\3\2\2\2J\u0199\3\2\2\2L\u01a1\3\2\2\2N\u01a3\3\2\2\2P\u01b4\3\2\2\2",
    "R\u01b6\3\2\2\2T\u01bc\3\2\2\2V\u01bf\3\2\2\2X\u01c5\3\2\2\2Z\u01c8",
    "\3\2\2\2\\\u01ca\3\2\2\2^\u01ce\3\2\2\2`\u01d2\3\2\2\2b\u01d7\3\2\2",
    "\2d\u01ea\3\2\2\2f\u01f7\3\2\2\2h\u01f9\3\2\2\2j\u01fc\3\2\2\2l\u0203",
    "\3\2\2\2n\u020c\3\2\2\2p\u0213\3\2\2\2r\u021a\3\2\2\2t\u0221\3\2\2\2",
    "v\u0228\3\2\2\2x\u023b\3\2\2\2z\u023d\3\2\2\2|\u0247\3\2\2\2~\u024e",
    "\3\2\2\2\u0080\u0258\3\2\2\2\u0082\u025a\3\2\2\2\u0084\u0261\3\2\2\2",
    "\u0086\u0263\3\2\2\2\u0088\u0265\3\2\2\2\u008a\u0267\3\2\2\2\u008c\u0269",
    "\3\2\2\2\u008e\u0090\5\4\3\2\u008f\u0091\5\6\4\2\u0090\u008f\3\2\2\2",
    "\u0090\u0091\3\2\2\2\u0091\u0092\3\2\2\2\u0092\u0093\5\b\5\2\u0093\u0094",
    "\7\2\2\3\u0094\3\3\2\2\2\u0095\u0097\5\f\7\2\u0096\u0095\3\2\2\2\u0096",
    "\u0097\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u009a\5\16\b\2\u0099\u009b",
    "\5\20\t\2\u009a\u0099\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u009c\3\2\2",
    "\2\u009c\u009d\5\n\6\2\u009d\5\3\2\2\2\u009e\u00a0\5> \2\u009f\u009e",
    "\3\2\2\2\u00a0\u00a3\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2",
    "\u00a2\7\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a4\u00a6\5D#\2\u00a5\u00a4\3",
    "\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8",
    "\t\3\2\2\2\u00a9\u00aa\7H\2\2\u00aa\u00ab\5H%\2\u00ab\u00ac\7g\2\2\u00ac",
    "\13\3\2\2\2\u00ad\u00ae\7\u008d\2\2\u00ae\u00af\7\3\2\2\u00af\u00b0",
    "\7a\2\2\u00b0\u00b1\7_\2\2\u00b1\u00b2\7b\2\2\u00b2\r\3\2\2\2\u00b3",
    "\u00b4\7\u008d\2\2\u00b4\u00b5\7\4\2\2\u00b5\u00b6\7a\2\2\u00b6\u00b7",
    "\5,\27\2\u00b7\u00b8\7b\2\2\u00b8\17\3\2\2\2\u00b9\u00ba\7\u008d\2\2",
    "\u00ba\u00bb\7\5\2\2\u00bb\u00bc\7a\2\2\u00bc\u00bd\5.\30\2\u00bd\u00be",
    "\7b\2\2\u00be\21\3\2\2\2\u00bf\u00c0\7\u008d\2\2\u00c0\u00c1\7\3\2\2",
    "\u00c1\u00c2\7a\2\2\u00c2\u00c3\7_\2\2\u00c3\u00c4\7b\2\2\u00c4\23\3",
    "\2\2\2\u00c5\u00c6\7\u008d\2\2\u00c6\u00c9\7\6\2\2\u00c7\u00c8\7a\2",
    "\2\u00c8\u00ca\7b\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca",
    "\25\3\2\2\2\u00cb\u00cc\7\u008d\2\2\u00cc\u00cf\7\7\2\2\u00cd\u00ce",
    "\7a\2\2\u00ce\u00d0\7b\2\2\u00cf\u00cd\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0",
    "\27\3\2\2\2\u00d1\u00d2\7\u008d\2\2\u00d2\u00d5\7\b\2\2\u00d3\u00d4",
    "\7a\2\2\u00d4\u00d6\7b\2\2\u00d5\u00d3\3\2\2\2\u00d5\u00d6\3\2\2\2\u00d6",
    "\31\3\2\2\2\u00d7\u00d8\7\u008d\2\2\u00d8\u00db\7\t\2\2\u00d9\u00da",
    "\7a\2\2\u00da\u00dc\7b\2\2\u00db\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc",
    "\33\3\2\2\2\u00dd\u00de\7\u008d\2\2\u00de\u00e1\7\n\2\2\u00df\u00e0",
    "\7a\2\2\u00e0\u00e2\7b\2\2\u00e1\u00df\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2",
    "\35\3\2\2\2\u00e3\u00e4\7\u008d\2\2\u00e4\u00ea\7\13\2\2\u00e5\u00e7",
    "\7a\2\2\u00e6\u00e8\5B\"\2\u00e7\u00e6\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8",
    "\u00e9\3\2\2\2\u00e9\u00eb\7b\2\2\u00ea\u00e5\3\2\2\2\u00ea\u00eb\3",
    "\2\2\2\u00eb\37\3\2\2\2\u00ec\u00ed\7\u008d\2\2\u00ed\u00f3\7\f\2\2",
    "\u00ee\u00f0\7a\2\2\u00ef\u00f1\5B\"\2\u00f0\u00ef\3\2\2\2\u00f0\u00f1",
    "\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\u00f4\7b\2\2\u00f3\u00ee\3\2\2\2",
    "\u00f3\u00f4\3\2\2\2\u00f4!\3\2\2\2\u00f5\u00f6\7\u008d\2\2\u00f6\u00fd",
    "\7\r\2\2\u00f7\u00fa\7a\2\2\u00f8\u00fb\5*\26\2\u00f9\u00fb\5B\"\2\u00fa",
    "\u00f8\3\2\2\2\u00fa\u00f9\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fc\3",
    "\2\2\2\u00fc\u00fe\7b\2\2\u00fd\u00f7\3\2\2\2\u00fd\u00fe\3\2\2\2\u00fe",
    "#\3\2\2\2\u00ff\u0100\7\u008d\2\2\u0100\u0101\7\16\2\2\u0101\u0103\7",
    "a\2\2\u0102\u0104\5&\24\2\u0103\u0102\3\2\2\2\u0103\u0104\3\2\2\2\u0104",
    "\u0105\3\2\2\2\u0105\u0106\7b\2\2\u0106%\3\2\2\2\u0107\u010c\5(\25\2",
    "\u0108\u0109\7h\2\2\u0109\u010b\5(\25\2\u010a\u0108\3\2\2\2\u010b\u010e",
    "\3\2\2\2\u010c\u010a\3\2\2\2\u010c\u010d\3\2\2\2\u010d\'\3\2\2\2\u010e",
    "\u010c\3\2\2\2\u010f\u0110\7\u008d\2\2\u0110\u0111\7\17\2\2\u0111\u0114",
    "\7a\2\2\u0112\u0115\5*\26\2\u0113\u0115\5B\"\2\u0114\u0112\3\2\2\2\u0114",
    "\u0113\3\2\2\2\u0114\u0115\3\2\2\2\u0115\u0116\3\2\2\2\u0116\u0117\7",
    "b\2\2\u0117)\3\2\2\2\u0118\u011d\5@!\2\u0119\u011a\7h\2\2\u011a\u011c",
    "\5@!\2\u011b\u0119\3\2\2\2\u011c\u011f\3\2\2\2\u011d\u011b\3\2\2\2\u011d",
    "\u011e\3\2\2\2\u011e+\3\2\2\2\u011f\u011d\3\2\2\2\u0120\u0123\5\60\31",
    "\2\u0121\u0122\7h\2\2\u0122\u0124\5\62\32\2\u0123\u0121\3\2\2\2\u0123",
    "\u0124\3\2\2\2\u0124\u0127\3\2\2\2\u0125\u0126\7h\2\2\u0126\u0128\5",
    "\64\33\2\u0127\u0125\3\2\2\2\u0127\u0128\3\2\2\2\u0128-\3\2\2\2\u0129",
    "\u012a\5\66\34\2\u012a\u012b\7h\2\2\u012b\u012d\3\2\2\2\u012c\u0129",
    "\3\2\2\2\u012c\u012d\3\2\2\2\u012d\u0131\3\2\2\2\u012e\u012f\5:\36\2",
    "\u012f\u0130\7h\2\2\u0130\u0132\3\2\2\2\u0131\u012e\3\2\2\2\u0131\u0132",
    "\3\2\2\2\u0132\u0133\3\2\2\2\u0133\u0134\5<\37\2\u0134/\3\2\2\2\u0135",
    "\u0136\7\20\2\2\u0136\u0137\7j\2\2\u0137\u0138\7_\2\2\u0138\61\3\2\2",
    "\2\u0139\u013a\7\21\2\2\u013a\u013b\7j\2\2\u013b\u013c\7_\2\2\u013c",
    "\63\3\2\2\2\u013d\u013e\7\22\2\2\u013e\u013f\7j\2\2\u013f\u0140\7[\2",
    "\2\u0140\65\3\2\2\2\u0141\u0142\7\23\2\2\u0142\u0144\7j\2\2\u0143\u0145",
    "\58\35\2\u0144\u0143\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0144\3\2\2\2",
    "\u0146\u0147\3\2\2\2\u0147\67\3\2\2\2\u0148\u0149\7c\2\2\u0149\u014e",
    "\7_\2\2\u014a\u014b\7h\2\2\u014b\u014d\7_\2\2\u014c\u014a\3\2\2\2\u014d",
    "\u0150\3\2\2\2\u014e\u014c\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0151\3",
    "\2\2\2\u0150\u014e\3\2\2\2\u0151\u0152\7d\2\2\u01529\3\2\2\2\u0153\u0154",
    "\7\24\2\2\u0154\u0155\7j\2\2\u0155\u0156\7_\2\2\u0156;\3\2\2\2\u0157",
    "\u0158\7\25\2\2\u0158\u0159\7j\2\2\u0159\u015a\5\u0086D\2\u015a=\3\2",
    "\2\2\u015b\u015c\7\63\2\2\u015c\u015d\5\u0088E\2\u015d\u015e\7\u008c",
    "\2\2\u015e\u015f\7j\2\2\u015f\u0160\5\u0084C\2\u0160\u0161\7g\2\2\u0161",
    "\u0170\3\2\2\2\u0162\u0163\7\63\2\2\u0163\u0164\5\u008aF\2\u0164\u0165",
    "\7\u008c\2\2\u0165\u0166\7j\2\2\u0166\u0167\7G\2\2\u0167\u0168\7\u008c",
    "\2\2\u0168\u016a\7a\2\2\u0169\u016b\7_\2\2\u016a\u0169\3\2\2\2\u016a",
    "\u016b\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\7b\2\2\u016d\u016e\7",
    "g\2\2\u016e\u0170\3\2\2\2\u016f\u015b\3\2\2\2\u016f\u0162\3\2\2\2\u0170",
    "?\3\2\2\2\u0171\u0172\7\u008c\2\2\u0172\u0173\7j\2\2\u0173\u0174\5B",
    "\"\2\u0174A\3\2\2\2\u0175\u0176\t\2\2\2\u0176C\3\2\2\2\u0177\u0179\5",
    "F$\2\u0178\u017a\5\36\20\2\u0179\u0178\3\2\2\2\u0179\u017a\3\2\2\2\u017a",
    "\u017c\3\2\2\2\u017b\u017d\5 \21\2\u017c\u017b\3\2\2\2\u017c\u017d\3",
    "\2\2\2\u017d\u017f\3\2\2\2\u017e\u0180\5\"\22\2\u017f\u017e\3\2\2\2",
    "\u017f\u0180\3\2\2\2\u0180\u0182\3\2\2\2\u0181\u0183\5$\23\2\u0182\u0181",
    "\3\2\2\2\u0182\u0183\3\2\2\2\u0183\u0184\3\2\2\2\u0184\u0185\5\22\n",
    "\2\u0185\u0186\5J&\2\u0186E\3\2\2\2\u0187\u018d\5\24\13\2\u0188\u018d",
    "\5\26\f\2\u0189\u018d\5\30\r\2\u018a\u018d\5\32\16\2\u018b\u018d\5\34",
    "\17\2\u018c\u0187\3\2\2\2\u018c\u0188\3\2\2\2\u018c\u0189\3\2\2\2\u018c",
    "\u018a\3\2\2\2\u018c\u018b\3\2\2\2\u018d\u0190\3\2\2\2\u018e\u018c\3",
    "\2\2\2\u018e\u018f\3\2\2\2\u018fG\3\2\2\2\u0190\u018e\3\2\2\2\u0191",
    "\u0196\7\u008c\2\2\u0192\u0193\7i\2\2\u0193\u0195\7\u008c\2\2\u0194",
    "\u0192\3\2\2\2\u0195\u0198\3\2\2\2\u0196\u0194\3\2\2\2\u0196\u0197\3",
    "\2\2\2\u0197I\3\2\2\2\u0198\u0196\3\2\2\2\u0199\u019a\7\26\2\2\u019a",
    "\u019b\5L\'\2\u019b\u019c\7a\2\2\u019c\u019d\7\27\2\2\u019d\u019e\7",
    "\u008c\2\2\u019e\u019f\7b\2\2\u019f\u01a0\5N(\2\u01a0K\3\2\2\2\u01a1",
    "\u01a2\7\u008c\2\2\u01a2M\3\2\2\2\u01a3\u01a7\7c\2\2\u01a4\u01a6\5P",
    ")\2\u01a5\u01a4\3\2\2\2\u01a6\u01a9\3\2\2\2\u01a7\u01a5\3\2\2\2\u01a7",
    "\u01a8\3\2\2\2\u01a8\u01aa\3\2\2\2\u01a9\u01a7\3\2\2\2\u01aa\u01ab\7",
    "d\2\2\u01abO\3\2\2\2\u01ac\u01b5\5b\62\2\u01ad\u01b5\5d\63\2\u01ae\u01b5",
    "\5f\64\2\u01af\u01b5\5z>\2\u01b0\u01b5\5|?\2\u01b1\u01b5\5h\65\2\u01b2",
    "\u01b5\5R*\2\u01b3\u01b5\5\\/\2\u01b4\u01ac\3\2\2\2\u01b4\u01ad\3\2",
    "\2\2\u01b4\u01ae\3\2\2\2\u01b4\u01af\3\2\2\2\u01b4\u01b0\3\2\2\2\u01b4",
    "\u01b1\3\2\2\2\u01b4\u01b2\3\2\2\2\u01b4\u01b3\3\2\2\2\u01b5Q\3\2\2",
    "\2\u01b6\u01b8\5T+\2\u01b7\u01b9\5V,\2\u01b8\u01b7\3\2\2\2\u01b9\u01ba",
    "\3\2\2\2\u01ba\u01b8\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bbS\3\2\2\2\u01bc",
    "\u01bd\7W\2\2\u01bd\u01be\5N(\2\u01beU\3\2\2\2\u01bf\u01c0\7.\2\2\u01c0",
    "\u01c1\7a\2\2\u01c1\u01c2\5X-\2\u01c2\u01c3\7b\2\2\u01c3\u01c4\5N(\2",
    "\u01c4W\3\2\2\2\u01c5\u01c6\5Z.\2\u01c6\u01c7\7\u008c\2\2\u01c7Y\3\2",
    "\2\2\u01c8\u01c9\t\3\2\2\u01c9[\3\2\2\2\u01ca\u01cc\5^\60\2\u01cb\u01cd",
    "\5`\61\2\u01cc\u01cb\3\2\2\2\u01cc\u01cd\3\2\2\2\u01cd]\3\2\2\2\u01ce",
    "\u01cf\7>\2\2\u01cf\u01d0\5~@\2\u01d0\u01d1\5N(\2\u01d1_\3\2\2\2\u01d2",
    "\u01d3\7\67\2\2\u01d3\u01d4\5N(\2\u01d4a\3\2\2\2\u01d5\u01d8\5\u0088",
    "E\2\u01d6\u01d8\5\u008aF\2\u01d7\u01d5\3\2\2\2\u01d7\u01d6\3\2\2\2\u01d8",
    "\u01d9\3\2\2\2\u01d9\u01da\7\u008c\2\2\u01da\u01db\7g\2\2\u01dbc\3\2",
    "\2\2\u01dc\u01dd\5\u0088E\2\u01dd\u01de\7\u008c\2\2\u01de\u01df\7j\2",
    "\2\u01df\u01e0\5\u0084C\2\u01e0\u01e1\7g\2\2\u01e1\u01eb\3\2\2\2\u01e2",
    "\u01e3\5\u008aF\2\u01e3\u01e4\5j\66\2\u01e4\u01e5\7g\2\2\u01e5\u01eb",
    "\3\2\2\2\u01e6\u01e7\5\u008aF\2\u01e7\u01e8\5l\67\2\u01e8\u01e9\7g\2",
    "\2\u01e9\u01eb\3\2\2\2\u01ea\u01dc\3\2\2\2\u01ea\u01e2\3\2\2\2\u01ea",
    "\u01e6\3\2\2\2\u01ebe\3\2\2\2\u01ec\u01ed\7\u008c\2\2\u01ed\u01ee\7",
    "j\2\2\u01ee\u01ef\5\u0084C\2\u01ef\u01f0\7g\2\2\u01f0\u01f8\3\2\2\2",
    "\u01f1\u01f2\5j\66\2\u01f2\u01f3\7g\2\2\u01f3\u01f8\3\2\2\2\u01f4\u01f5",
    "\5l\67\2\u01f5\u01f6\7g\2\2\u01f6\u01f8\3\2\2\2\u01f7\u01ec\3\2\2\2",
    "\u01f7\u01f1\3\2\2\2\u01f7\u01f4\3\2\2\2\u01f8g\3\2\2\2\u01f9\u01fa",
    "\5x=\2\u01fa\u01fb\7g\2\2\u01fbi\3\2\2\2\u01fc\u01fd\7\u008c\2\2\u01fd",
    "\u01fe\7j\2\2\u01fe\u01ff\7G\2\2\u01ff\u0200\5\u008aF\2\u0200\u0201",
    "\7a\2\2\u0201\u0202\7b\2\2\u0202k\3\2\2\2\u0203\u0204\7\u008c\2\2\u0204",
    "\u020a\7j\2\2\u0205\u020b\5n8\2\u0206\u020b\5p9\2\u0207\u020b\5r:\2",
    "\u0208\u020b\5t;\2\u0209\u020b\5v<\2\u020a\u0205\3\2\2\2\u020a\u0206",
    "\3\2\2\2\u020a\u0207\3\2\2\2\u020a\u0208\3\2\2\2\u020a\u0209\3\2\2\2",
    "\u020bm\3\2\2\2\u020c\u020d\7\34\2\2\u020d\u020e\7a\2\2\u020e\u020f",
    "\7\u008c\2\2\u020f\u0210\7h\2\2\u0210\u0211\7\u008c\2\2\u0211\u0212",
    "\7b\2\2\u0212o\3\2\2\2\u0213\u0214\7\35\2\2\u0214\u0215\7a\2\2\u0215",
    "\u0216\7\u008c\2\2\u0216\u0217\7h\2\2\u0217\u0218\7\u008c\2\2\u0218",
    "\u0219\7b\2\2\u0219q\3\2\2\2\u021a\u021b\7\36\2\2\u021b\u021c\7a\2\2",
    "\u021c\u021d\5\u0084C\2\u021d\u021e\7h\2\2\u021e\u021f\7\u008c\2\2\u021f",
    "\u0220\7b\2\2\u0220s\3\2\2\2\u0221\u0222\7\37\2\2\u0222\u0223\7a\2\2",
    "\u0223\u0224\7\u008c\2\2\u0224\u0225\7h\2\2\u0225\u0226\7\u008c\2\2",
    "\u0226\u0227\7b\2\2\u0227u\3\2\2\2\u0228\u0229\7\u008c\2\2\u0229\u022a",
    "\7 \2\2\u022a\u022b\7a\2\2\u022b\u022e\7\u008c\2\2\u022c\u022d\7h\2",
    "\2\u022d\u022f\7_\2\2\u022e\u022c\3\2\2\2\u022e\u022f\3\2\2\2\u022f",
    "\u0230\3\2\2\2\u0230\u0231\7b\2\2\u0231w\3\2\2\2\u0232\u0233\7!\2\2",
    "\u0233\u0234\7a\2\2\u0234\u0235\7\u008c\2\2\u0235\u023c\7b\2\2\u0236",
    "\u0237\7!\2\2\u0237\u0238\7a\2\2\u0238\u0239\5\u0084C\2\u0239\u023a",
    "\7b\2\2\u023a\u023c\3\2\2\2\u023b\u0232\3\2\2\2\u023b\u0236\3\2\2\2",
    "\u023cy\3\2\2\2\u023d\u023e\7\u008c\2\2\u023e\u023f\7i\2\2\u023f\u0240",
    "\7\u008c\2\2\u0240\u0241\7a\2\2\u0241\u0242\5\u008cG\2\u0242\u0243\7",
    "h\2\2\u0243\u0244\5\u0084C\2\u0244\u0245\7b\2\2\u0245\u0246\7g\2\2\u0246",
    "{\3\2\2\2\u0247\u024a\7\"\2\2\u0248\u024b\7\u008c\2\2\u0249\u024b\5",
    "n8\2\u024a\u0248\3\2\2\2\u024a\u0249\3\2\2\2\u024a\u024b\3\2\2\2\u024b",
    "\u024c\3\2\2\2\u024c\u024d\7g\2\2\u024d}\3\2\2\2\u024e\u024f\7a\2\2",
    "\u024f\u0252\5\u0080A\2\u0250\u0251\t\4\2\2\u0251\u0253\5\u0080A\2\u0252",
    "\u0250\3\2\2\2\u0252\u0253\3\2\2\2\u0253\u0254\3\2\2\2\u0254\u0255\7",
    "b\2\2\u0255\177\3\2\2\2\u0256\u0259\5\u0082B\2\u0257\u0259\5\u0084C",
    "\2\u0258\u0256\3\2\2\2\u0258\u0257\3\2\2\2\u0259\u0081\3\2\2\2\u025a",
    "\u025b\7#\2\2\u025b\u025c\7a\2\2\u025c\u025d\7_\2\2\u025d\u025e\7h\2",
    "\2\u025e\u025f\7\u008c\2\2\u025f\u0260\7b\2\2\u0260\u0083\3\2\2\2\u0261",
    "\u0262\t\5\2\2\u0262\u0085\3\2\2\2\u0263\u0264\t\6\2\2\u0264\u0087\3",
    "\2\2\2\u0265\u0266\t\7\2\2\u0266\u0089\3\2\2\2\u0267\u0268\t\b\2\2\u0268",
    "\u008b\3\2\2\2\u0269\u026e\7\u008c\2\2\u026a\u026b\7i\2\2\u026b\u026d",
    "\7\u008c\2\2\u026c\u026a\3\2\2\2\u026d\u0270\3\2\2\2\u026e\u026c\3\2",
    "\2\2\u026e\u026f\3\2\2\2\u026f\u008d\3\2\2\2\u0270\u026e\3\2\2\2\63",
    "\u0090\u0096\u009a\u00a1\u00a7\u00c9\u00cf\u00d5\u00db\u00e1\u00e7\u00ea",
    "\u00f0\u00f3\u00fa\u00fd\u0103\u010c\u0114\u011d\u0123\u0127\u012c\u0131",
    "\u0146\u014e\u016a\u016f\u0179\u017c\u017f\u0182\u018c\u018e\u0196\u01a7",
    "\u01b4\u01ba\u01cc\u01d7\u01ea\u01f7\u020a\u022e\u023b\u024a\u0252\u0258",
    "\u026e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Path'", "'Source'", "'Api'", "'GET'", "'POST'", 
                     "'PUT'", "'DELETE'", "'HEAD'", "'Produces'", "'Consumes'", 
                     "'ApiOperation'", "'ApiResponses'", "'ApiResponse'", 
                     "'protocol'", "'host'", "'port'", "'tags'", "'description'", 
                     "'produces'", "'resource'", "'message'", "'ConnectionClosedException'", 
                     "'ConnectionFailedException'", "'ConnectionTimeoutException'", 
                     "'Exception'", "'invoke'", "'sendTo'", "'datamap'", 
                     "'receiveFrom'", "'.mediator'", "'log'", "'reply'", 
                     "'eval'", "'MediaType.APPLICATION_JSON'", "'MediaType.APPLICATION_XML'", 
                     "'string'", "'endpoint'", "'abstract'", "'assert'", 
                     "'boolean'", "'break'", "'byte'", "'case'", "'catch'", 
                     "'char'", "'class'", "'const'", "'continue'", "'constant'", 
                     "'default'", "'do'", "'double'", "'else'", "'enum'", 
                     "'extends'", "'final'", "'finally'", "'float'", "'for'", 
                     "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
                     "'int'", "'interface'", "'long'", "'native'", "'new'", 
                     "'package'", "'private'", "'protected'", "'public'", 
                     "'return'", "'short'", "'static'", "'strictfp'", "'super'", 
                     "'switch'", "'synchronized'", "'this'", "'throw'", 
                     "'throws'", "'transient'", "'try'", "'void'", "'volatile'", 
                     "'while'", 'null', 'null', 'null', 'null', 'null', 
                     "'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
                     "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", 
                     "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", 
                     "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", 
                     "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", 
                     "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", 
                     "'>>>='", 'null', "'@'", "'...'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', "ABSTRACT", "ASSERT", "BOOLEAN", 
                      "BREAK", "BYTE", "CASE", "CATCH", "CHAR", "CLASS", 
                      "CONST", "CONTINUE", "CONSTANT", "DEFAULT", "DO", 
                      "DOUBLE", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", 
                      "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", 
                      "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", 
                      "NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", 
                      "RETURN", "SHORT", "STATIC", "STRICTFP", "SUPER", 
                      "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", 
                      "TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", "IntegerLiteral", 
                      "FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", 
                      "StringLiteral", "NullLiteral", "LPAREN", "RPAREN", 
                      "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
                      "DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", 
                      "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", 
                      "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", 
                      "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
                      "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", 
                      "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
                      "URSHIFT_ASSIGN", "Identifier", "AT", "ELLIPSIS", 
                      "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "sourceFile", "definition", "constants", "resources", 
                   "packageDef", "path", "source", "api", "resourcePath", 
                   "getMethod", "postMethod", "putMethod", "deleteMethod", 
                   "headMethod", "prodAnt", "conAnt", "antApiOperation", 
                   "antApiResponses", "antApiResponseSet", "antApiResponse", 
                   "elementValuePairs", "sourceElementValuePairs", "apiElementValuePairs", 
                   "protocol", "host", "port", "tags", "tag", "descripton", 
                   "producer", "constant", "elementValuePair", "elementValue", 
                   "resource", "httpMethods", "qualifiedName", "resourceDeclaration", 
                   "resourceName", "block", "blockStatement", "tryCatchBlock", 
                   "tryClause", "catchClause", "exceptionHandler", "exceptionType", 
                   "ifElseBlock", "ifBlock", "elseBlock", "localVariableDeclarationStatement", 
                   "localVariableInitializationStatement", "localVariableAssignmentStatement", 
                   "logMediatorStatement", "newTypeObjectCreation", "mediatorCall", 
                   "invokeMediatorCall", "sendToMediatorCall", "dataMapMediatorCall", 
                   "receiveFromMediatorCall", "customMediatorCall", "logMediatorCall", 
                   "messageModificationStatement", "returnStatement", "parExpression", 
                   "expression", "evalExpression", "literal", "mediaType", 
                   "type", "classType", "messagePropertyName" ];

function sourceParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sourceParser.prototype = Object.create(antlr4.Parser.prototype);
sourceParser.prototype.constructor = sourceParser;

Object.defineProperty(sourceParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sourceParser.EOF = antlr4.Token.EOF;
sourceParser.T__0 = 1;
sourceParser.T__1 = 2;
sourceParser.T__2 = 3;
sourceParser.T__3 = 4;
sourceParser.T__4 = 5;
sourceParser.T__5 = 6;
sourceParser.T__6 = 7;
sourceParser.T__7 = 8;
sourceParser.T__8 = 9;
sourceParser.T__9 = 10;
sourceParser.T__10 = 11;
sourceParser.T__11 = 12;
sourceParser.T__12 = 13;
sourceParser.T__13 = 14;
sourceParser.T__14 = 15;
sourceParser.T__15 = 16;
sourceParser.T__16 = 17;
sourceParser.T__17 = 18;
sourceParser.T__18 = 19;
sourceParser.T__19 = 20;
sourceParser.T__20 = 21;
sourceParser.T__21 = 22;
sourceParser.T__22 = 23;
sourceParser.T__23 = 24;
sourceParser.T__24 = 25;
sourceParser.T__25 = 26;
sourceParser.T__26 = 27;
sourceParser.T__27 = 28;
sourceParser.T__28 = 29;
sourceParser.T__29 = 30;
sourceParser.T__30 = 31;
sourceParser.T__31 = 32;
sourceParser.T__32 = 33;
sourceParser.T__33 = 34;
sourceParser.T__34 = 35;
sourceParser.T__35 = 36;
sourceParser.T__36 = 37;
sourceParser.ABSTRACT = 38;
sourceParser.ASSERT = 39;
sourceParser.BOOLEAN = 40;
sourceParser.BREAK = 41;
sourceParser.BYTE = 42;
sourceParser.CASE = 43;
sourceParser.CATCH = 44;
sourceParser.CHAR = 45;
sourceParser.CLASS = 46;
sourceParser.CONST = 47;
sourceParser.CONTINUE = 48;
sourceParser.CONSTANT = 49;
sourceParser.DEFAULT = 50;
sourceParser.DO = 51;
sourceParser.DOUBLE = 52;
sourceParser.ELSE = 53;
sourceParser.ENUM = 54;
sourceParser.EXTENDS = 55;
sourceParser.FINAL = 56;
sourceParser.FINALLY = 57;
sourceParser.FLOAT = 58;
sourceParser.FOR = 59;
sourceParser.IF = 60;
sourceParser.GOTO = 61;
sourceParser.IMPLEMENTS = 62;
sourceParser.IMPORT = 63;
sourceParser.INSTANCEOF = 64;
sourceParser.INT = 65;
sourceParser.INTERFACE = 66;
sourceParser.LONG = 67;
sourceParser.NATIVE = 68;
sourceParser.NEW = 69;
sourceParser.PACKAGE = 70;
sourceParser.PRIVATE = 71;
sourceParser.PROTECTED = 72;
sourceParser.PUBLIC = 73;
sourceParser.RETURN = 74;
sourceParser.SHORT = 75;
sourceParser.STATIC = 76;
sourceParser.STRICTFP = 77;
sourceParser.SUPER = 78;
sourceParser.SWITCH = 79;
sourceParser.SYNCHRONIZED = 80;
sourceParser.THIS = 81;
sourceParser.THROW = 82;
sourceParser.THROWS = 83;
sourceParser.TRANSIENT = 84;
sourceParser.TRY = 85;
sourceParser.VOID = 86;
sourceParser.VOLATILE = 87;
sourceParser.WHILE = 88;
sourceParser.IntegerLiteral = 89;
sourceParser.FloatingPointLiteral = 90;
sourceParser.BooleanLiteral = 91;
sourceParser.CharacterLiteral = 92;
sourceParser.StringLiteral = 93;
sourceParser.NullLiteral = 94;
sourceParser.LPAREN = 95;
sourceParser.RPAREN = 96;
sourceParser.LBRACE = 97;
sourceParser.RBRACE = 98;
sourceParser.LBRACK = 99;
sourceParser.RBRACK = 100;
sourceParser.SEMI = 101;
sourceParser.COMMA = 102;
sourceParser.DOT = 103;
sourceParser.ASSIGN = 104;
sourceParser.GT = 105;
sourceParser.LT = 106;
sourceParser.BANG = 107;
sourceParser.TILDE = 108;
sourceParser.QUESTION = 109;
sourceParser.COLON = 110;
sourceParser.EQUAL = 111;
sourceParser.LE = 112;
sourceParser.GE = 113;
sourceParser.NOTEQUAL = 114;
sourceParser.AND = 115;
sourceParser.OR = 116;
sourceParser.INC = 117;
sourceParser.DEC = 118;
sourceParser.ADD = 119;
sourceParser.SUB = 120;
sourceParser.MUL = 121;
sourceParser.DIV = 122;
sourceParser.BITAND = 123;
sourceParser.BITOR = 124;
sourceParser.CARET = 125;
sourceParser.MOD = 126;
sourceParser.ADD_ASSIGN = 127;
sourceParser.SUB_ASSIGN = 128;
sourceParser.MUL_ASSIGN = 129;
sourceParser.DIV_ASSIGN = 130;
sourceParser.AND_ASSIGN = 131;
sourceParser.OR_ASSIGN = 132;
sourceParser.XOR_ASSIGN = 133;
sourceParser.MOD_ASSIGN = 134;
sourceParser.LSHIFT_ASSIGN = 135;
sourceParser.RSHIFT_ASSIGN = 136;
sourceParser.URSHIFT_ASSIGN = 137;
sourceParser.Identifier = 138;
sourceParser.AT = 139;
sourceParser.ELLIPSIS = 140;
sourceParser.WS = 141;
sourceParser.COMMENT = 142;
sourceParser.LINE_COMMENT = 143;

sourceParser.RULE_sourceFile = 0;
sourceParser.RULE_definition = 1;
sourceParser.RULE_constants = 2;
sourceParser.RULE_resources = 3;
sourceParser.RULE_packageDef = 4;
sourceParser.RULE_path = 5;
sourceParser.RULE_source = 6;
sourceParser.RULE_api = 7;
sourceParser.RULE_resourcePath = 8;
sourceParser.RULE_getMethod = 9;
sourceParser.RULE_postMethod = 10;
sourceParser.RULE_putMethod = 11;
sourceParser.RULE_deleteMethod = 12;
sourceParser.RULE_headMethod = 13;
sourceParser.RULE_prodAnt = 14;
sourceParser.RULE_conAnt = 15;
sourceParser.RULE_antApiOperation = 16;
sourceParser.RULE_antApiResponses = 17;
sourceParser.RULE_antApiResponseSet = 18;
sourceParser.RULE_antApiResponse = 19;
sourceParser.RULE_elementValuePairs = 20;
sourceParser.RULE_sourceElementValuePairs = 21;
sourceParser.RULE_apiElementValuePairs = 22;
sourceParser.RULE_protocol = 23;
sourceParser.RULE_host = 24;
sourceParser.RULE_port = 25;
sourceParser.RULE_tags = 26;
sourceParser.RULE_tag = 27;
sourceParser.RULE_descripton = 28;
sourceParser.RULE_producer = 29;
sourceParser.RULE_constant = 30;
sourceParser.RULE_elementValuePair = 31;
sourceParser.RULE_elementValue = 32;
sourceParser.RULE_resource = 33;
sourceParser.RULE_httpMethods = 34;
sourceParser.RULE_qualifiedName = 35;
sourceParser.RULE_resourceDeclaration = 36;
sourceParser.RULE_resourceName = 37;
sourceParser.RULE_block = 38;
sourceParser.RULE_blockStatement = 39;
sourceParser.RULE_tryCatchBlock = 40;
sourceParser.RULE_tryClause = 41;
sourceParser.RULE_catchClause = 42;
sourceParser.RULE_exceptionHandler = 43;
sourceParser.RULE_exceptionType = 44;
sourceParser.RULE_ifElseBlock = 45;
sourceParser.RULE_ifBlock = 46;
sourceParser.RULE_elseBlock = 47;
sourceParser.RULE_localVariableDeclarationStatement = 48;
sourceParser.RULE_localVariableInitializationStatement = 49;
sourceParser.RULE_localVariableAssignmentStatement = 50;
sourceParser.RULE_logMediatorStatement = 51;
sourceParser.RULE_newTypeObjectCreation = 52;
sourceParser.RULE_mediatorCall = 53;
sourceParser.RULE_invokeMediatorCall = 54;
sourceParser.RULE_sendToMediatorCall = 55;
sourceParser.RULE_dataMapMediatorCall = 56;
sourceParser.RULE_receiveFromMediatorCall = 57;
sourceParser.RULE_customMediatorCall = 58;
sourceParser.RULE_logMediatorCall = 59;
sourceParser.RULE_messageModificationStatement = 60;
sourceParser.RULE_returnStatement = 61;
sourceParser.RULE_parExpression = 62;
sourceParser.RULE_expression = 63;
sourceParser.RULE_evalExpression = 64;
sourceParser.RULE_literal = 65;
sourceParser.RULE_mediaType = 66;
sourceParser.RULE_type = 67;
sourceParser.RULE_classType = 68;
sourceParser.RULE_messagePropertyName = 69;

function SourceFileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_sourceFile;
    return this;
}

SourceFileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceFileContext.prototype.constructor = SourceFileContext;

SourceFileContext.prototype.definition = function() {
    return this.getTypedRuleContext(DefinitionContext,0);
};

SourceFileContext.prototype.resources = function() {
    return this.getTypedRuleContext(ResourcesContext,0);
};

SourceFileContext.prototype.EOF = function() {
    return this.getToken(sourceParser.EOF, 0);
};

SourceFileContext.prototype.constants = function() {
    return this.getTypedRuleContext(ConstantsContext,0);
};

SourceFileContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterSourceFile(this);
	}
};

SourceFileContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitSourceFile(this);
	}
};




sourceParser.SourceFileContext = SourceFileContext;

sourceParser.prototype.sourceFile = function() {

    var localctx = new SourceFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sourceParser.RULE_sourceFile);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.definition();
        this.state = 142;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 141;
            this.constants();

        }
        this.state = 144;
        this.resources();
        this.state = 145;
        this.match(sourceParser.EOF);
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

function DefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_definition;
    return this;
}

DefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefinitionContext.prototype.constructor = DefinitionContext;

DefinitionContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

DefinitionContext.prototype.packageDef = function() {
    return this.getTypedRuleContext(PackageDefContext,0);
};

DefinitionContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

DefinitionContext.prototype.api = function() {
    return this.getTypedRuleContext(ApiContext,0);
};

DefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterDefinition(this);
	}
};

DefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitDefinition(this);
	}
};




sourceParser.DefinitionContext = DefinitionContext;

sourceParser.prototype.definition = function() {

    var localctx = new DefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sourceParser.RULE_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        if(la_===1) {
            this.state = 147;
            this.path();

        }
        this.state = 150;
        this.source();
        this.state = 152;
        _la = this._input.LA(1);
        if(_la===sourceParser.AT) {
            this.state = 151;
            this.api();
        }

        this.state = 154;
        this.packageDef();
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

function ConstantsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_constants;
    return this;
}

ConstantsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantsContext.prototype.constructor = ConstantsContext;

ConstantsContext.prototype.constant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstantContext);
    } else {
        return this.getTypedRuleContext(ConstantContext,i);
    }
};

ConstantsContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterConstants(this);
	}
};

ConstantsContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitConstants(this);
	}
};




sourceParser.ConstantsContext = ConstantsContext;

sourceParser.prototype.constants = function() {

    var localctx = new ConstantsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sourceParser.RULE_constants);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sourceParser.CONSTANT) {
            this.state = 156;
            this.constant();
            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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

function ResourcesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_resources;
    return this;
}

ResourcesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourcesContext.prototype.constructor = ResourcesContext;

ResourcesContext.prototype.resource = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ResourceContext);
    } else {
        return this.getTypedRuleContext(ResourceContext,i);
    }
};

ResourcesContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterResources(this);
	}
};

ResourcesContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitResources(this);
	}
};




sourceParser.ResourcesContext = ResourcesContext;

sourceParser.prototype.resources = function() {

    var localctx = new ResourcesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sourceParser.RULE_resources);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 162;
            this.resource();
            this.state = 165; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===sourceParser.AT);
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

function PackageDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_packageDef;
    return this;
}

PackageDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageDefContext.prototype.constructor = PackageDefContext;

PackageDefContext.prototype.PACKAGE = function() {
    return this.getToken(sourceParser.PACKAGE, 0);
};

PackageDefContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};

PackageDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterPackageDef(this);
	}
};

PackageDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitPackageDef(this);
	}
};




sourceParser.PackageDefContext = PackageDefContext;

sourceParser.prototype.packageDef = function() {

    var localctx = new PackageDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, sourceParser.RULE_packageDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(sourceParser.PACKAGE);
        this.state = 168;
        this.qualifiedName();
        this.state = 169;
        this.match(sourceParser.SEMI);
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

function PathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_path;
    return this;
}

PathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathContext.prototype.constructor = PathContext;

PathContext.prototype.AT = function() {
    return this.getToken(sourceParser.AT, 0);
};

PathContext.prototype.LPAREN = function() {
    return this.getToken(sourceParser.LPAREN, 0);
};

PathContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

PathContext.prototype.RPAREN = function() {
    return this.getToken(sourceParser.RPAREN, 0);
};

PathContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterPath(this);
	}
};

PathContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitPath(this);
	}
};




sourceParser.PathContext = PathContext;

sourceParser.prototype.path = function() {

    var localctx = new PathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, sourceParser.RULE_path);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(sourceParser.AT);
        this.state = 172;
        this.match(sourceParser.T__0);
        this.state = 173;
        this.match(sourceParser.LPAREN);
        this.state = 174;
        this.match(sourceParser.StringLiteral);
        this.state = 175;
        this.match(sourceParser.RPAREN);
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

function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.AT = function() {
    return this.getToken(sourceParser.AT, 0);
};

SourceContext.prototype.LPAREN = function() {
    return this.getToken(sourceParser.LPAREN, 0);
};

SourceContext.prototype.sourceElementValuePairs = function() {
    return this.getTypedRuleContext(SourceElementValuePairsContext,0);
};

SourceContext.prototype.RPAREN = function() {
    return this.getToken(sourceParser.RPAREN, 0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitSource(this);
	}
};




sourceParser.SourceContext = SourceContext;

sourceParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, sourceParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(sourceParser.AT);
        this.state = 178;
        this.match(sourceParser.T__1);
        this.state = 179;
        this.match(sourceParser.LPAREN);
        this.state = 180;
        this.sourceElementValuePairs();
        this.state = 181;
        this.match(sourceParser.RPAREN);
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

function ApiContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_api;
    return this;
}

ApiContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ApiContext.prototype.constructor = ApiContext;

ApiContext.prototype.apiElementValuePairs = function() {
    return this.getTypedRuleContext(ApiElementValuePairsContext,0);
};

ApiContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterApi(this);
	}
};

ApiContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitApi(this);
	}
};




sourceParser.ApiContext = ApiContext;

sourceParser.prototype.api = function() {

    var localctx = new ApiContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, sourceParser.RULE_api);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(sourceParser.AT);
        this.state = 184;
        this.match(sourceParser.T__2);

        this.state = 185;
        this.match(sourceParser.LPAREN);

        this.state = 186;
        this.apiElementValuePairs();
        this.state = 187;
        this.match(sourceParser.RPAREN);
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

function ResourcePathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_resourcePath;
    return this;
}

ResourcePathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourcePathContext.prototype.constructor = ResourcePathContext;

ResourcePathContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

ResourcePathContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterResourcePath(this);
	}
};

ResourcePathContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitResourcePath(this);
	}
};




sourceParser.ResourcePathContext = ResourcePathContext;

sourceParser.prototype.resourcePath = function() {

    var localctx = new ResourcePathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, sourceParser.RULE_resourcePath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(sourceParser.AT);
        this.state = 190;
        this.match(sourceParser.T__0);

        this.state = 191;
        this.match(sourceParser.LPAREN);
        this.state = 192;
        this.match(sourceParser.StringLiteral);
        this.state = 193;
        this.match(sourceParser.RPAREN);
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

function GetMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_getMethod;
    return this;
}

GetMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetMethodContext.prototype.constructor = GetMethodContext;


GetMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterGetMethod(this);
	}
};

GetMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitGetMethod(this);
	}
};




sourceParser.GetMethodContext = GetMethodContext;

sourceParser.prototype.getMethod = function() {

    var localctx = new GetMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, sourceParser.RULE_getMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(sourceParser.AT);
        this.state = 196;
        this.match(sourceParser.T__3);
        this.state = 199;
        _la = this._input.LA(1);
        if(_la===sourceParser.LPAREN) {
            this.state = 197;
            this.match(sourceParser.LPAREN);
            this.state = 198;
            this.match(sourceParser.RPAREN);
        }

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

function PostMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_postMethod;
    return this;
}

PostMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PostMethodContext.prototype.constructor = PostMethodContext;


PostMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterPostMethod(this);
	}
};

PostMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitPostMethod(this);
	}
};




sourceParser.PostMethodContext = PostMethodContext;

sourceParser.prototype.postMethod = function() {

    var localctx = new PostMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, sourceParser.RULE_postMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(sourceParser.AT);
        this.state = 202;
        this.match(sourceParser.T__4);
        this.state = 205;
        _la = this._input.LA(1);
        if(_la===sourceParser.LPAREN) {
            this.state = 203;
            this.match(sourceParser.LPAREN);
            this.state = 204;
            this.match(sourceParser.RPAREN);
        }

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

function PutMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_putMethod;
    return this;
}

PutMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PutMethodContext.prototype.constructor = PutMethodContext;


PutMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterPutMethod(this);
	}
};

PutMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitPutMethod(this);
	}
};




sourceParser.PutMethodContext = PutMethodContext;

sourceParser.prototype.putMethod = function() {

    var localctx = new PutMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, sourceParser.RULE_putMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(sourceParser.AT);
        this.state = 208;
        this.match(sourceParser.T__5);
        this.state = 211;
        _la = this._input.LA(1);
        if(_la===sourceParser.LPAREN) {
            this.state = 209;
            this.match(sourceParser.LPAREN);
            this.state = 210;
            this.match(sourceParser.RPAREN);
        }

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

function DeleteMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_deleteMethod;
    return this;
}

DeleteMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeleteMethodContext.prototype.constructor = DeleteMethodContext;


DeleteMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterDeleteMethod(this);
	}
};

DeleteMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitDeleteMethod(this);
	}
};




sourceParser.DeleteMethodContext = DeleteMethodContext;

sourceParser.prototype.deleteMethod = function() {

    var localctx = new DeleteMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, sourceParser.RULE_deleteMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(sourceParser.AT);
        this.state = 214;
        this.match(sourceParser.T__6);
        this.state = 217;
        _la = this._input.LA(1);
        if(_la===sourceParser.LPAREN) {
            this.state = 215;
            this.match(sourceParser.LPAREN);
            this.state = 216;
            this.match(sourceParser.RPAREN);
        }

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

function HeadMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_headMethod;
    return this;
}

HeadMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadMethodContext.prototype.constructor = HeadMethodContext;


HeadMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterHeadMethod(this);
	}
};

HeadMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitHeadMethod(this);
	}
};




sourceParser.HeadMethodContext = HeadMethodContext;

sourceParser.prototype.headMethod = function() {

    var localctx = new HeadMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, sourceParser.RULE_headMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.match(sourceParser.AT);
        this.state = 220;
        this.match(sourceParser.T__7);
        this.state = 223;
        _la = this._input.LA(1);
        if(_la===sourceParser.LPAREN) {
            this.state = 221;
            this.match(sourceParser.LPAREN);
            this.state = 222;
            this.match(sourceParser.RPAREN);
        }

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

function ProdAntContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_prodAnt;
    return this;
}

ProdAntContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProdAntContext.prototype.constructor = ProdAntContext;

ProdAntContext.prototype.elementValue = function() {
    return this.getTypedRuleContext(ElementValueContext,0);
};

ProdAntContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterProdAnt(this);
	}
};

ProdAntContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitProdAnt(this);
	}
};




sourceParser.ProdAntContext = ProdAntContext;

sourceParser.prototype.prodAnt = function() {

    var localctx = new ProdAntContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, sourceParser.RULE_prodAnt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(sourceParser.AT);
        this.state = 226;
        this.match(sourceParser.T__8);
        this.state = 232;
        _la = this._input.LA(1);
        if(_la===sourceParser.LPAREN) {
            this.state = 227;
            this.match(sourceParser.LPAREN);
            this.state = 229;
            _la = this._input.LA(1);
            if(_la===sourceParser.IntegerLiteral || _la===sourceParser.StringLiteral) {
                this.state = 228;
                this.elementValue();
            }

            this.state = 231;
            this.match(sourceParser.RPAREN);
        }

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

function ConAntContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_conAnt;
    return this;
}

ConAntContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConAntContext.prototype.constructor = ConAntContext;

ConAntContext.prototype.elementValue = function() {
    return this.getTypedRuleContext(ElementValueContext,0);
};

ConAntContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterConAnt(this);
	}
};

ConAntContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitConAnt(this);
	}
};




sourceParser.ConAntContext = ConAntContext;

sourceParser.prototype.conAnt = function() {

    var localctx = new ConAntContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, sourceParser.RULE_conAnt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(sourceParser.AT);
        this.state = 235;
        this.match(sourceParser.T__9);
        this.state = 241;
        _la = this._input.LA(1);
        if(_la===sourceParser.LPAREN) {
            this.state = 236;
            this.match(sourceParser.LPAREN);
            this.state = 238;
            _la = this._input.LA(1);
            if(_la===sourceParser.IntegerLiteral || _la===sourceParser.StringLiteral) {
                this.state = 237;
                this.elementValue();
            }

            this.state = 240;
            this.match(sourceParser.RPAREN);
        }

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

function AntApiOperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_antApiOperation;
    return this;
}

AntApiOperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AntApiOperationContext.prototype.constructor = AntApiOperationContext;

AntApiOperationContext.prototype.elementValuePairs = function() {
    return this.getTypedRuleContext(ElementValuePairsContext,0);
};

AntApiOperationContext.prototype.elementValue = function() {
    return this.getTypedRuleContext(ElementValueContext,0);
};

AntApiOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterAntApiOperation(this);
	}
};

AntApiOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitAntApiOperation(this);
	}
};




sourceParser.AntApiOperationContext = AntApiOperationContext;

sourceParser.prototype.antApiOperation = function() {

    var localctx = new AntApiOperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, sourceParser.RULE_antApiOperation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(sourceParser.AT);
        this.state = 244;
        this.match(sourceParser.T__10);
        this.state = 251;
        _la = this._input.LA(1);
        if(_la===sourceParser.LPAREN) {
            this.state = 245;
            this.match(sourceParser.LPAREN);
            this.state = 248;
            switch (this._input.LA(1)) {
            case sourceParser.Identifier:
            	this.state = 246;
            	this.elementValuePairs();
            	break;
            case sourceParser.IntegerLiteral:
            case sourceParser.StringLiteral:
            	this.state = 247;
            	this.elementValue();
            	break;
            case sourceParser.RPAREN:
            	break;
            default:
            	throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 250;
            this.match(sourceParser.RPAREN);
        }

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

function AntApiResponsesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_antApiResponses;
    return this;
}

AntApiResponsesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AntApiResponsesContext.prototype.constructor = AntApiResponsesContext;

AntApiResponsesContext.prototype.antApiResponseSet = function() {
    return this.getTypedRuleContext(AntApiResponseSetContext,0);
};

AntApiResponsesContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterAntApiResponses(this);
	}
};

AntApiResponsesContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitAntApiResponses(this);
	}
};




sourceParser.AntApiResponsesContext = AntApiResponsesContext;

sourceParser.prototype.antApiResponses = function() {

    var localctx = new AntApiResponsesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, sourceParser.RULE_antApiResponses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(sourceParser.AT);
        this.state = 254;
        this.match(sourceParser.T__11);
        this.state = 255;
        this.match(sourceParser.LPAREN);
        this.state = 257;
        _la = this._input.LA(1);
        if(_la===sourceParser.AT) {
            this.state = 256;
            this.antApiResponseSet();
        }

        this.state = 259;
        this.match(sourceParser.RPAREN);
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

function AntApiResponseSetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_antApiResponseSet;
    return this;
}

AntApiResponseSetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AntApiResponseSetContext.prototype.constructor = AntApiResponseSetContext;

AntApiResponseSetContext.prototype.antApiResponse = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AntApiResponseContext);
    } else {
        return this.getTypedRuleContext(AntApiResponseContext,i);
    }
};

AntApiResponseSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterAntApiResponseSet(this);
	}
};

AntApiResponseSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitAntApiResponseSet(this);
	}
};




sourceParser.AntApiResponseSetContext = AntApiResponseSetContext;

sourceParser.prototype.antApiResponseSet = function() {

    var localctx = new AntApiResponseSetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, sourceParser.RULE_antApiResponseSet);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.antApiResponse();
        this.state = 266;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sourceParser.COMMA) {
            this.state = 262;
            this.match(sourceParser.COMMA);
            this.state = 263;
            this.antApiResponse();
            this.state = 268;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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

function AntApiResponseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_antApiResponse;
    return this;
}

AntApiResponseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AntApiResponseContext.prototype.constructor = AntApiResponseContext;

AntApiResponseContext.prototype.elementValuePairs = function() {
    return this.getTypedRuleContext(ElementValuePairsContext,0);
};

AntApiResponseContext.prototype.elementValue = function() {
    return this.getTypedRuleContext(ElementValueContext,0);
};

AntApiResponseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterAntApiResponse(this);
	}
};

AntApiResponseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitAntApiResponse(this);
	}
};




sourceParser.AntApiResponseContext = AntApiResponseContext;

sourceParser.prototype.antApiResponse = function() {

    var localctx = new AntApiResponseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, sourceParser.RULE_antApiResponse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(sourceParser.AT);
        this.state = 270;
        this.match(sourceParser.T__12);
        this.state = 271;
        this.match(sourceParser.LPAREN);
        this.state = 274;
        switch (this._input.LA(1)) {
        case sourceParser.Identifier:
        	this.state = 272;
        	this.elementValuePairs();
        	break;
        case sourceParser.IntegerLiteral:
        case sourceParser.StringLiteral:
        	this.state = 273;
        	this.elementValue();
        	break;
        case sourceParser.RPAREN:
        	break;
        default:
        	throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 276;
        this.match(sourceParser.RPAREN);
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

function ElementValuePairsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_elementValuePairs;
    return this;
}

ElementValuePairsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementValuePairsContext.prototype.constructor = ElementValuePairsContext;

ElementValuePairsContext.prototype.elementValuePair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementValuePairContext);
    } else {
        return this.getTypedRuleContext(ElementValuePairContext,i);
    }
};

ElementValuePairsContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterElementValuePairs(this);
	}
};

ElementValuePairsContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitElementValuePairs(this);
	}
};




sourceParser.ElementValuePairsContext = ElementValuePairsContext;

sourceParser.prototype.elementValuePairs = function() {

    var localctx = new ElementValuePairsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, sourceParser.RULE_elementValuePairs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.elementValuePair();
        this.state = 283;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sourceParser.COMMA) {
            this.state = 279;
            this.match(sourceParser.COMMA);
            this.state = 280;
            this.elementValuePair();
            this.state = 285;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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

function SourceElementValuePairsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_sourceElementValuePairs;
    return this;
}

SourceElementValuePairsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceElementValuePairsContext.prototype.constructor = SourceElementValuePairsContext;

SourceElementValuePairsContext.prototype.protocol = function() {
    return this.getTypedRuleContext(ProtocolContext,0);
};

SourceElementValuePairsContext.prototype.host = function() {
    return this.getTypedRuleContext(HostContext,0);
};

SourceElementValuePairsContext.prototype.port = function() {
    return this.getTypedRuleContext(PortContext,0);
};

SourceElementValuePairsContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterSourceElementValuePairs(this);
	}
};

SourceElementValuePairsContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitSourceElementValuePairs(this);
	}
};




sourceParser.SourceElementValuePairsContext = SourceElementValuePairsContext;

sourceParser.prototype.sourceElementValuePairs = function() {

    var localctx = new SourceElementValuePairsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, sourceParser.RULE_sourceElementValuePairs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.protocol();
        this.state = 289;
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        if(la_===1) {
            this.state = 287;
            this.match(sourceParser.COMMA);
            this.state = 288;
            this.host();

        }
        this.state = 293;
        _la = this._input.LA(1);
        if(_la===sourceParser.COMMA) {
            this.state = 291;
            this.match(sourceParser.COMMA);
            this.state = 292;
            this.port();
        }

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

function ApiElementValuePairsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_apiElementValuePairs;
    return this;
}

ApiElementValuePairsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ApiElementValuePairsContext.prototype.constructor = ApiElementValuePairsContext;

ApiElementValuePairsContext.prototype.producer = function() {
    return this.getTypedRuleContext(ProducerContext,0);
};

ApiElementValuePairsContext.prototype.tags = function() {
    return this.getTypedRuleContext(TagsContext,0);
};

ApiElementValuePairsContext.prototype.descripton = function() {
    return this.getTypedRuleContext(DescriptonContext,0);
};

ApiElementValuePairsContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterApiElementValuePairs(this);
	}
};

ApiElementValuePairsContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitApiElementValuePairs(this);
	}
};




sourceParser.ApiElementValuePairsContext = ApiElementValuePairsContext;

sourceParser.prototype.apiElementValuePairs = function() {

    var localctx = new ApiElementValuePairsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, sourceParser.RULE_apiElementValuePairs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        _la = this._input.LA(1);
        if(_la===sourceParser.T__16) {
            this.state = 295;
            this.tags();
            this.state = 296;
            this.match(sourceParser.COMMA);
        }

        this.state = 303;
        _la = this._input.LA(1);
        if(_la===sourceParser.T__17) {
            this.state = 300;
            this.descripton();
            this.state = 301;
            this.match(sourceParser.COMMA);
        }

        this.state = 305;
        this.producer();
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

function ProtocolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_protocol;
    return this;
}

ProtocolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProtocolContext.prototype.constructor = ProtocolContext;

ProtocolContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

ProtocolContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterProtocol(this);
	}
};

ProtocolContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitProtocol(this);
	}
};




sourceParser.ProtocolContext = ProtocolContext;

sourceParser.prototype.protocol = function() {

    var localctx = new ProtocolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, sourceParser.RULE_protocol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.match(sourceParser.T__13);
        this.state = 308;
        this.match(sourceParser.ASSIGN);
        this.state = 309;
        this.match(sourceParser.StringLiteral);
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

function HostContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_host;
    return this;
}

HostContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HostContext.prototype.constructor = HostContext;

HostContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

HostContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterHost(this);
	}
};

HostContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitHost(this);
	}
};




sourceParser.HostContext = HostContext;

sourceParser.prototype.host = function() {

    var localctx = new HostContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, sourceParser.RULE_host);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.match(sourceParser.T__14);
        this.state = 312;
        this.match(sourceParser.ASSIGN);
        this.state = 313;
        this.match(sourceParser.StringLiteral);
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

function PortContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_port;
    return this;
}

PortContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PortContext.prototype.constructor = PortContext;

PortContext.prototype.IntegerLiteral = function() {
    return this.getToken(sourceParser.IntegerLiteral, 0);
};

PortContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterPort(this);
	}
};

PortContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitPort(this);
	}
};




sourceParser.PortContext = PortContext;

sourceParser.prototype.port = function() {

    var localctx = new PortContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, sourceParser.RULE_port);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        this.match(sourceParser.T__15);
        this.state = 316;
        this.match(sourceParser.ASSIGN);
        this.state = 317;
        this.match(sourceParser.IntegerLiteral);
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

function TagsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_tags;
    return this;
}

TagsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagsContext.prototype.constructor = TagsContext;

TagsContext.prototype.tag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagContext);
    } else {
        return this.getTypedRuleContext(TagContext,i);
    }
};

TagsContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterTags(this);
	}
};

TagsContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitTags(this);
	}
};




sourceParser.TagsContext = TagsContext;

sourceParser.prototype.tags = function() {

    var localctx = new TagsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, sourceParser.RULE_tags);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this.match(sourceParser.T__16);
        this.state = 320;
        this.match(sourceParser.ASSIGN);
        this.state = 322; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 321;
            this.tag();
            this.state = 324; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===sourceParser.LBRACE);
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

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.StringLiteral = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.StringLiteral);
    } else {
        return this.getToken(sourceParser.StringLiteral, i);
    }
};


TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitTag(this);
	}
};




sourceParser.TagContext = TagContext;

sourceParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, sourceParser.RULE_tag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
        this.match(sourceParser.LBRACE);
        this.state = 327;
        this.match(sourceParser.StringLiteral);
        this.state = 332;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sourceParser.COMMA) {
            this.state = 328;
            this.match(sourceParser.COMMA);
            this.state = 329;
            this.match(sourceParser.StringLiteral);
            this.state = 334;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 335;
        this.match(sourceParser.RBRACE);
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

function DescriptonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_descripton;
    return this;
}

DescriptonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptonContext.prototype.constructor = DescriptonContext;

DescriptonContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

DescriptonContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterDescripton(this);
	}
};

DescriptonContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitDescripton(this);
	}
};




sourceParser.DescriptonContext = DescriptonContext;

sourceParser.prototype.descripton = function() {

    var localctx = new DescriptonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, sourceParser.RULE_descripton);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this.match(sourceParser.T__17);
        this.state = 338;
        this.match(sourceParser.ASSIGN);
        this.state = 339;
        this.match(sourceParser.StringLiteral);
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

function ProducerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_producer;
    return this;
}

ProducerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProducerContext.prototype.constructor = ProducerContext;

ProducerContext.prototype.mediaType = function() {
    return this.getTypedRuleContext(MediaTypeContext,0);
};

ProducerContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterProducer(this);
	}
};

ProducerContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitProducer(this);
	}
};




sourceParser.ProducerContext = ProducerContext;

sourceParser.prototype.producer = function() {

    var localctx = new ProducerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, sourceParser.RULE_producer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this.match(sourceParser.T__18);
        this.state = 342;
        this.match(sourceParser.ASSIGN);
        this.state = 343;
        this.mediaType();
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

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.CONSTANT = function() {
    return this.getToken(sourceParser.CONSTANT, 0);
};

ConstantContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ConstantContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.Identifier);
    } else {
        return this.getToken(sourceParser.Identifier, i);
    }
};


ConstantContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ConstantContext.prototype.classType = function() {
    return this.getTypedRuleContext(ClassTypeContext,0);
};

ConstantContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitConstant(this);
	}
};




sourceParser.ConstantContext = ConstantContext;

sourceParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, sourceParser.RULE_constant);
    var _la = 0; // Token type
    try {
        this.state = 365;
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 345;
            this.match(sourceParser.CONSTANT);
            this.state = 346;
            this.type();
            this.state = 347;
            this.match(sourceParser.Identifier);
            this.state = 348;
            this.match(sourceParser.ASSIGN);
            this.state = 349;
            this.literal();
            this.state = 350;
            this.match(sourceParser.SEMI);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 352;
            this.match(sourceParser.CONSTANT);
            this.state = 353;
            this.classType();
            this.state = 354;
            this.match(sourceParser.Identifier);
            this.state = 355;
            this.match(sourceParser.ASSIGN);
            this.state = 356;
            this.match(sourceParser.NEW);
            this.state = 357;
            this.match(sourceParser.Identifier);
            this.state = 358;
            this.match(sourceParser.LPAREN);
            this.state = 360;
            _la = this._input.LA(1);
            if(_la===sourceParser.StringLiteral) {
                this.state = 359;
                this.match(sourceParser.StringLiteral);
            }

            this.state = 362;
            this.match(sourceParser.RPAREN);
            this.state = 363;
            this.match(sourceParser.SEMI);
            break;

        }
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

function ElementValuePairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_elementValuePair;
    return this;
}

ElementValuePairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementValuePairContext.prototype.constructor = ElementValuePairContext;

ElementValuePairContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

ElementValuePairContext.prototype.elementValue = function() {
    return this.getTypedRuleContext(ElementValueContext,0);
};

ElementValuePairContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterElementValuePair(this);
	}
};

ElementValuePairContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitElementValuePair(this);
	}
};




sourceParser.ElementValuePairContext = ElementValuePairContext;

sourceParser.prototype.elementValuePair = function() {

    var localctx = new ElementValuePairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, sourceParser.RULE_elementValuePair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.match(sourceParser.Identifier);
        this.state = 368;
        this.match(sourceParser.ASSIGN);
        this.state = 369;
        this.elementValue();
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

function ElementValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_elementValue;
    return this;
}

ElementValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementValueContext.prototype.constructor = ElementValueContext;

ElementValueContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

ElementValueContext.prototype.IntegerLiteral = function() {
    return this.getToken(sourceParser.IntegerLiteral, 0);
};

ElementValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterElementValue(this);
	}
};

ElementValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitElementValue(this);
	}
};




sourceParser.ElementValueContext = ElementValueContext;

sourceParser.prototype.elementValue = function() {

    var localctx = new ElementValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, sourceParser.RULE_elementValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        _la = this._input.LA(1);
        if(!(_la===sourceParser.IntegerLiteral || _la===sourceParser.StringLiteral)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
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

function ResourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_resource;
    return this;
}

ResourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourceContext.prototype.constructor = ResourceContext;

ResourceContext.prototype.httpMethods = function() {
    return this.getTypedRuleContext(HttpMethodsContext,0);
};

ResourceContext.prototype.resourcePath = function() {
    return this.getTypedRuleContext(ResourcePathContext,0);
};

ResourceContext.prototype.resourceDeclaration = function() {
    return this.getTypedRuleContext(ResourceDeclarationContext,0);
};

ResourceContext.prototype.prodAnt = function() {
    return this.getTypedRuleContext(ProdAntContext,0);
};

ResourceContext.prototype.conAnt = function() {
    return this.getTypedRuleContext(ConAntContext,0);
};

ResourceContext.prototype.antApiOperation = function() {
    return this.getTypedRuleContext(AntApiOperationContext,0);
};

ResourceContext.prototype.antApiResponses = function() {
    return this.getTypedRuleContext(AntApiResponsesContext,0);
};

ResourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterResource(this);
	}
};

ResourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitResource(this);
	}
};




sourceParser.ResourceContext = ResourceContext;

sourceParser.prototype.resource = function() {

    var localctx = new ResourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, sourceParser.RULE_resource);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.httpMethods();
        this.state = 375;
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 374;
            this.prodAnt();

        }
        this.state = 378;
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        if(la_===1) {
            this.state = 377;
            this.conAnt();

        }
        this.state = 381;
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        if(la_===1) {
            this.state = 380;
            this.antApiOperation();

        }
        this.state = 384;
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        if(la_===1) {
            this.state = 383;
            this.antApiResponses();

        }
        this.state = 386;
        this.resourcePath();
        this.state = 387;
        this.resourceDeclaration();
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

function HttpMethodsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_httpMethods;
    return this;
}

HttpMethodsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HttpMethodsContext.prototype.constructor = HttpMethodsContext;

HttpMethodsContext.prototype.getMethod = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GetMethodContext);
    } else {
        return this.getTypedRuleContext(GetMethodContext,i);
    }
};

HttpMethodsContext.prototype.postMethod = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PostMethodContext);
    } else {
        return this.getTypedRuleContext(PostMethodContext,i);
    }
};

HttpMethodsContext.prototype.putMethod = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PutMethodContext);
    } else {
        return this.getTypedRuleContext(PutMethodContext,i);
    }
};

HttpMethodsContext.prototype.deleteMethod = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeleteMethodContext);
    } else {
        return this.getTypedRuleContext(DeleteMethodContext,i);
    }
};

HttpMethodsContext.prototype.headMethod = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HeadMethodContext);
    } else {
        return this.getTypedRuleContext(HeadMethodContext,i);
    }
};

HttpMethodsContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterHttpMethods(this);
	}
};

HttpMethodsContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitHttpMethods(this);
	}
};




sourceParser.HttpMethodsContext = HttpMethodsContext;

sourceParser.prototype.httpMethods = function() {

    var localctx = new HttpMethodsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, sourceParser.RULE_httpMethods);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 394;
                var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 389;
                    this.getMethod();
                    break;

                case 2:
                    this.state = 390;
                    this.postMethod();
                    break;

                case 3:
                    this.state = 391;
                    this.putMethod();
                    break;

                case 4:
                    this.state = 392;
                    this.deleteMethod();
                    break;

                case 5:
                    this.state = 393;
                    this.headMethod();
                    break;

                } 
            }
            this.state = 398;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
        }

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

function QualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_qualifiedName;
    return this;
}

QualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedNameContext.prototype.constructor = QualifiedNameContext;

QualifiedNameContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.Identifier);
    } else {
        return this.getToken(sourceParser.Identifier, i);
    }
};


QualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterQualifiedName(this);
	}
};

QualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitQualifiedName(this);
	}
};




sourceParser.QualifiedNameContext = QualifiedNameContext;

sourceParser.prototype.qualifiedName = function() {

    var localctx = new QualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, sourceParser.RULE_qualifiedName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 399;
        this.match(sourceParser.Identifier);
        this.state = 404;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sourceParser.DOT) {
            this.state = 400;
            this.match(sourceParser.DOT);
            this.state = 401;
            this.match(sourceParser.Identifier);
            this.state = 406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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

function ResourceDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_resourceDeclaration;
    return this;
}

ResourceDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourceDeclarationContext.prototype.constructor = ResourceDeclarationContext;

ResourceDeclarationContext.prototype.resourceName = function() {
    return this.getTypedRuleContext(ResourceNameContext,0);
};

ResourceDeclarationContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

ResourceDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ResourceDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterResourceDeclaration(this);
	}
};

ResourceDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitResourceDeclaration(this);
	}
};




sourceParser.ResourceDeclarationContext = ResourceDeclarationContext;

sourceParser.prototype.resourceDeclaration = function() {

    var localctx = new ResourceDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, sourceParser.RULE_resourceDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.match(sourceParser.T__19);
        this.state = 408;
        this.resourceName();
        this.state = 409;
        this.match(sourceParser.LPAREN);
        this.state = 410;
        this.match(sourceParser.T__20);
        this.state = 411;
        this.match(sourceParser.Identifier);
        this.state = 412;
        this.match(sourceParser.RPAREN);
        this.state = 413;
        this.block();
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

function ResourceNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_resourceName;
    return this;
}

ResourceNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourceNameContext.prototype.constructor = ResourceNameContext;

ResourceNameContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

ResourceNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterResourceName(this);
	}
};

ResourceNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitResourceName(this);
	}
};




sourceParser.ResourceNameContext = ResourceNameContext;

sourceParser.prototype.resourceName = function() {

    var localctx = new ResourceNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, sourceParser.RULE_resourceName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.match(sourceParser.Identifier);
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

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.blockStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStatementContext);
    } else {
        return this.getTypedRuleContext(BlockStatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitBlock(this);
	}
};




sourceParser.BlockContext = BlockContext;

sourceParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, sourceParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this.match(sourceParser.LBRACE);
        this.state = 421;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (sourceParser.T__20 - 21)) | (1 << (sourceParser.T__30 - 21)) | (1 << (sourceParser.T__31 - 21)) | (1 << (sourceParser.T__35 - 21)) | (1 << (sourceParser.T__36 - 21)) | (1 << (sourceParser.BOOLEAN - 21)) | (1 << (sourceParser.BYTE - 21)) | (1 << (sourceParser.CHAR - 21)) | (1 << (sourceParser.DOUBLE - 21)))) !== 0) || ((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (sourceParser.FLOAT - 58)) | (1 << (sourceParser.IF - 58)) | (1 << (sourceParser.INT - 58)) | (1 << (sourceParser.LONG - 58)) | (1 << (sourceParser.SHORT - 58)) | (1 << (sourceParser.TRY - 58)))) !== 0) || _la===sourceParser.Identifier) {
            this.state = 418;
            this.blockStatement();
            this.state = 423;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 424;
        this.match(sourceParser.RBRACE);
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

function BlockStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_blockStatement;
    return this;
}

BlockStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatementContext.prototype.constructor = BlockStatementContext;

BlockStatementContext.prototype.localVariableDeclarationStatement = function() {
    return this.getTypedRuleContext(LocalVariableDeclarationStatementContext,0);
};

BlockStatementContext.prototype.localVariableInitializationStatement = function() {
    return this.getTypedRuleContext(LocalVariableInitializationStatementContext,0);
};

BlockStatementContext.prototype.localVariableAssignmentStatement = function() {
    return this.getTypedRuleContext(LocalVariableAssignmentStatementContext,0);
};

BlockStatementContext.prototype.messageModificationStatement = function() {
    return this.getTypedRuleContext(MessageModificationStatementContext,0);
};

BlockStatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

BlockStatementContext.prototype.logMediatorStatement = function() {
    return this.getTypedRuleContext(LogMediatorStatementContext,0);
};

BlockStatementContext.prototype.tryCatchBlock = function() {
    return this.getTypedRuleContext(TryCatchBlockContext,0);
};

BlockStatementContext.prototype.ifElseBlock = function() {
    return this.getTypedRuleContext(IfElseBlockContext,0);
};

BlockStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterBlockStatement(this);
	}
};

BlockStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitBlockStatement(this);
	}
};




sourceParser.BlockStatementContext = BlockStatementContext;

sourceParser.prototype.blockStatement = function() {

    var localctx = new BlockStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, sourceParser.RULE_blockStatement);
    try {
        this.state = 434;
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 426;
            this.localVariableDeclarationStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 427;
            this.localVariableInitializationStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 428;
            this.localVariableAssignmentStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 429;
            this.messageModificationStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 430;
            this.returnStatement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 431;
            this.logMediatorStatement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 432;
            this.tryCatchBlock();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 433;
            this.ifElseBlock();
            break;

        }
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

function TryCatchBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_tryCatchBlock;
    return this;
}

TryCatchBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TryCatchBlockContext.prototype.constructor = TryCatchBlockContext;

TryCatchBlockContext.prototype.tryClause = function() {
    return this.getTypedRuleContext(TryClauseContext,0);
};

TryCatchBlockContext.prototype.catchClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CatchClauseContext);
    } else {
        return this.getTypedRuleContext(CatchClauseContext,i);
    }
};

TryCatchBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterTryCatchBlock(this);
	}
};

TryCatchBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitTryCatchBlock(this);
	}
};




sourceParser.TryCatchBlockContext = TryCatchBlockContext;

sourceParser.prototype.tryCatchBlock = function() {

    var localctx = new TryCatchBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, sourceParser.RULE_tryCatchBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this.tryClause();
        this.state = 438; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 437;
            this.catchClause();
            this.state = 440; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===sourceParser.CATCH);
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

function TryClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_tryClause;
    return this;
}

TryClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TryClauseContext.prototype.constructor = TryClauseContext;

TryClauseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

TryClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterTryClause(this);
	}
};

TryClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitTryClause(this);
	}
};




sourceParser.TryClauseContext = TryClauseContext;

sourceParser.prototype.tryClause = function() {

    var localctx = new TryClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, sourceParser.RULE_tryClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this.match(sourceParser.TRY);
        this.state = 443;
        this.block();
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

function CatchClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_catchClause;
    return this;
}

CatchClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CatchClauseContext.prototype.constructor = CatchClauseContext;

CatchClauseContext.prototype.exceptionHandler = function() {
    return this.getTypedRuleContext(ExceptionHandlerContext,0);
};

CatchClauseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

CatchClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterCatchClause(this);
	}
};

CatchClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitCatchClause(this);
	}
};




sourceParser.CatchClauseContext = CatchClauseContext;

sourceParser.prototype.catchClause = function() {

    var localctx = new CatchClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, sourceParser.RULE_catchClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(sourceParser.CATCH);
        this.state = 446;
        this.match(sourceParser.LPAREN);
        this.state = 447;
        this.exceptionHandler();
        this.state = 448;
        this.match(sourceParser.RPAREN);
        this.state = 449;
        this.block();
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

function ExceptionHandlerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_exceptionHandler;
    return this;
}

ExceptionHandlerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExceptionHandlerContext.prototype.constructor = ExceptionHandlerContext;

ExceptionHandlerContext.prototype.exceptionType = function() {
    return this.getTypedRuleContext(ExceptionTypeContext,0);
};

ExceptionHandlerContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

ExceptionHandlerContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterExceptionHandler(this);
	}
};

ExceptionHandlerContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitExceptionHandler(this);
	}
};




sourceParser.ExceptionHandlerContext = ExceptionHandlerContext;

sourceParser.prototype.exceptionHandler = function() {

    var localctx = new ExceptionHandlerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, sourceParser.RULE_exceptionHandler);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.exceptionType();
        this.state = 452;
        this.match(sourceParser.Identifier);
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

function ExceptionTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_exceptionType;
    return this;
}

ExceptionTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExceptionTypeContext.prototype.constructor = ExceptionTypeContext;


ExceptionTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterExceptionType(this);
	}
};

ExceptionTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitExceptionType(this);
	}
};




sourceParser.ExceptionTypeContext = ExceptionTypeContext;

sourceParser.prototype.exceptionType = function() {

    var localctx = new ExceptionTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, sourceParser.RULE_exceptionType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 454;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sourceParser.T__21) | (1 << sourceParser.T__22) | (1 << sourceParser.T__23) | (1 << sourceParser.T__24))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
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

function IfElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_ifElseBlock;
    return this;
}

IfElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfElseBlockContext.prototype.constructor = IfElseBlockContext;

IfElseBlockContext.prototype.ifBlock = function() {
    return this.getTypedRuleContext(IfBlockContext,0);
};

IfElseBlockContext.prototype.elseBlock = function() {
    return this.getTypedRuleContext(ElseBlockContext,0);
};

IfElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterIfElseBlock(this);
	}
};

IfElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitIfElseBlock(this);
	}
};




sourceParser.IfElseBlockContext = IfElseBlockContext;

sourceParser.prototype.ifElseBlock = function() {

    var localctx = new IfElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, sourceParser.RULE_ifElseBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 456;
        this.ifBlock();
        this.state = 458;
        _la = this._input.LA(1);
        if(_la===sourceParser.ELSE) {
            this.state = 457;
            this.elseBlock();
        }

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

function IfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_ifBlock;
    return this;
}

IfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfBlockContext.prototype.constructor = IfBlockContext;

IfBlockContext.prototype.parExpression = function() {
    return this.getTypedRuleContext(ParExpressionContext,0);
};

IfBlockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

IfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterIfBlock(this);
	}
};

IfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitIfBlock(this);
	}
};




sourceParser.IfBlockContext = IfBlockContext;

sourceParser.prototype.ifBlock = function() {

    var localctx = new IfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, sourceParser.RULE_ifBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 460;
        this.match(sourceParser.IF);
        this.state = 461;
        this.parExpression();
        this.state = 462;
        this.block();
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

function ElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_elseBlock;
    return this;
}

ElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBlockContext.prototype.constructor = ElseBlockContext;

ElseBlockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterElseBlock(this);
	}
};

ElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitElseBlock(this);
	}
};




sourceParser.ElseBlockContext = ElseBlockContext;

sourceParser.prototype.elseBlock = function() {

    var localctx = new ElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, sourceParser.RULE_elseBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 464;
        this.match(sourceParser.ELSE);
        this.state = 465;
        this.block();
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

function LocalVariableDeclarationStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_localVariableDeclarationStatement;
    return this;
}

LocalVariableDeclarationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocalVariableDeclarationStatementContext.prototype.constructor = LocalVariableDeclarationStatementContext;

LocalVariableDeclarationStatementContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

LocalVariableDeclarationStatementContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

LocalVariableDeclarationStatementContext.prototype.classType = function() {
    return this.getTypedRuleContext(ClassTypeContext,0);
};

LocalVariableDeclarationStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterLocalVariableDeclarationStatement(this);
	}
};

LocalVariableDeclarationStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitLocalVariableDeclarationStatement(this);
	}
};




sourceParser.LocalVariableDeclarationStatementContext = LocalVariableDeclarationStatementContext;

sourceParser.prototype.localVariableDeclarationStatement = function() {

    var localctx = new LocalVariableDeclarationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, sourceParser.RULE_localVariableDeclarationStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        switch(this._input.LA(1)) {
        case sourceParser.T__35:
        case sourceParser.BOOLEAN:
        case sourceParser.BYTE:
        case sourceParser.CHAR:
        case sourceParser.DOUBLE:
        case sourceParser.FLOAT:
        case sourceParser.INT:
        case sourceParser.LONG:
        case sourceParser.SHORT:
            this.state = 467;
            this.type();
            break;
        case sourceParser.T__20:
        case sourceParser.T__36:
            this.state = 468;
            this.classType();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 471;
        this.match(sourceParser.Identifier);
        this.state = 472;
        this.match(sourceParser.SEMI);
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

function LocalVariableInitializationStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_localVariableInitializationStatement;
    return this;
}

LocalVariableInitializationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocalVariableInitializationStatementContext.prototype.constructor = LocalVariableInitializationStatementContext;

LocalVariableInitializationStatementContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

LocalVariableInitializationStatementContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

LocalVariableInitializationStatementContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

LocalVariableInitializationStatementContext.prototype.classType = function() {
    return this.getTypedRuleContext(ClassTypeContext,0);
};

LocalVariableInitializationStatementContext.prototype.newTypeObjectCreation = function() {
    return this.getTypedRuleContext(NewTypeObjectCreationContext,0);
};

LocalVariableInitializationStatementContext.prototype.mediatorCall = function() {
    return this.getTypedRuleContext(MediatorCallContext,0);
};

LocalVariableInitializationStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterLocalVariableInitializationStatement(this);
	}
};

LocalVariableInitializationStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitLocalVariableInitializationStatement(this);
	}
};




sourceParser.LocalVariableInitializationStatementContext = LocalVariableInitializationStatementContext;

sourceParser.prototype.localVariableInitializationStatement = function() {

    var localctx = new LocalVariableInitializationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, sourceParser.RULE_localVariableInitializationStatement);
    try {
        this.state = 488;
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 474;
            this.type();
            this.state = 475;
            this.match(sourceParser.Identifier);
            this.state = 476;
            this.match(sourceParser.ASSIGN);
            this.state = 477;
            this.literal();
            this.state = 478;
            this.match(sourceParser.SEMI);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 480;
            this.classType();
            this.state = 481;
            this.newTypeObjectCreation();
            this.state = 482;
            this.match(sourceParser.SEMI);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 484;
            this.classType();
            this.state = 485;
            this.mediatorCall();
            this.state = 486;
            this.match(sourceParser.SEMI);
            break;

        }
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

function LocalVariableAssignmentStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_localVariableAssignmentStatement;
    return this;
}

LocalVariableAssignmentStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocalVariableAssignmentStatementContext.prototype.constructor = LocalVariableAssignmentStatementContext;

LocalVariableAssignmentStatementContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

LocalVariableAssignmentStatementContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

LocalVariableAssignmentStatementContext.prototype.newTypeObjectCreation = function() {
    return this.getTypedRuleContext(NewTypeObjectCreationContext,0);
};

LocalVariableAssignmentStatementContext.prototype.mediatorCall = function() {
    return this.getTypedRuleContext(MediatorCallContext,0);
};

LocalVariableAssignmentStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterLocalVariableAssignmentStatement(this);
	}
};

LocalVariableAssignmentStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitLocalVariableAssignmentStatement(this);
	}
};




sourceParser.LocalVariableAssignmentStatementContext = LocalVariableAssignmentStatementContext;

sourceParser.prototype.localVariableAssignmentStatement = function() {

    var localctx = new LocalVariableAssignmentStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, sourceParser.RULE_localVariableAssignmentStatement);
    try {
        this.state = 501;
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 490;
            this.match(sourceParser.Identifier);
            this.state = 491;
            this.match(sourceParser.ASSIGN);
            this.state = 492;
            this.literal();
            this.state = 493;
            this.match(sourceParser.SEMI);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 495;
            this.newTypeObjectCreation();
            this.state = 496;
            this.match(sourceParser.SEMI);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 498;
            this.mediatorCall();
            this.state = 499;
            this.match(sourceParser.SEMI);
            break;

        }
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

function LogMediatorStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_logMediatorStatement;
    return this;
}

LogMediatorStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogMediatorStatementContext.prototype.constructor = LogMediatorStatementContext;

LogMediatorStatementContext.prototype.logMediatorCall = function() {
    return this.getTypedRuleContext(LogMediatorCallContext,0);
};

LogMediatorStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterLogMediatorStatement(this);
	}
};

LogMediatorStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitLogMediatorStatement(this);
	}
};




sourceParser.LogMediatorStatementContext = LogMediatorStatementContext;

sourceParser.prototype.logMediatorStatement = function() {

    var localctx = new LogMediatorStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, sourceParser.RULE_logMediatorStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 503;
        this.logMediatorCall();
        this.state = 504;
        this.match(sourceParser.SEMI);
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

function NewTypeObjectCreationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_newTypeObjectCreation;
    return this;
}

NewTypeObjectCreationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NewTypeObjectCreationContext.prototype.constructor = NewTypeObjectCreationContext;

NewTypeObjectCreationContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

NewTypeObjectCreationContext.prototype.classType = function() {
    return this.getTypedRuleContext(ClassTypeContext,0);
};

NewTypeObjectCreationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterNewTypeObjectCreation(this);
	}
};

NewTypeObjectCreationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitNewTypeObjectCreation(this);
	}
};




sourceParser.NewTypeObjectCreationContext = NewTypeObjectCreationContext;

sourceParser.prototype.newTypeObjectCreation = function() {

    var localctx = new NewTypeObjectCreationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, sourceParser.RULE_newTypeObjectCreation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 506;
        this.match(sourceParser.Identifier);
        this.state = 507;
        this.match(sourceParser.ASSIGN);
        this.state = 508;
        this.match(sourceParser.NEW);
        this.state = 509;
        this.classType();
        this.state = 510;
        this.match(sourceParser.LPAREN);
        this.state = 511;
        this.match(sourceParser.RPAREN);
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

function MediatorCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_mediatorCall;
    return this;
}

MediatorCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediatorCallContext.prototype.constructor = MediatorCallContext;

MediatorCallContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

MediatorCallContext.prototype.invokeMediatorCall = function() {
    return this.getTypedRuleContext(InvokeMediatorCallContext,0);
};

MediatorCallContext.prototype.sendToMediatorCall = function() {
    return this.getTypedRuleContext(SendToMediatorCallContext,0);
};

MediatorCallContext.prototype.dataMapMediatorCall = function() {
    return this.getTypedRuleContext(DataMapMediatorCallContext,0);
};

MediatorCallContext.prototype.receiveFromMediatorCall = function() {
    return this.getTypedRuleContext(ReceiveFromMediatorCallContext,0);
};

MediatorCallContext.prototype.customMediatorCall = function() {
    return this.getTypedRuleContext(CustomMediatorCallContext,0);
};

MediatorCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterMediatorCall(this);
	}
};

MediatorCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitMediatorCall(this);
	}
};




sourceParser.MediatorCallContext = MediatorCallContext;

sourceParser.prototype.mediatorCall = function() {

    var localctx = new MediatorCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, sourceParser.RULE_mediatorCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
        this.match(sourceParser.Identifier);
        this.state = 514;
        this.match(sourceParser.ASSIGN);
        this.state = 520;
        switch(this._input.LA(1)) {
        case sourceParser.T__25:
            this.state = 515;
            this.invokeMediatorCall();
            break;
        case sourceParser.T__26:
            this.state = 516;
            this.sendToMediatorCall();
            break;
        case sourceParser.T__27:
            this.state = 517;
            this.dataMapMediatorCall();
            break;
        case sourceParser.T__28:
            this.state = 518;
            this.receiveFromMediatorCall();
            break;
        case sourceParser.Identifier:
            this.state = 519;
            this.customMediatorCall();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function InvokeMediatorCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_invokeMediatorCall;
    return this;
}

InvokeMediatorCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvokeMediatorCallContext.prototype.constructor = InvokeMediatorCallContext;

InvokeMediatorCallContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.Identifier);
    } else {
        return this.getToken(sourceParser.Identifier, i);
    }
};


InvokeMediatorCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterInvokeMediatorCall(this);
	}
};

InvokeMediatorCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitInvokeMediatorCall(this);
	}
};




sourceParser.InvokeMediatorCallContext = InvokeMediatorCallContext;

sourceParser.prototype.invokeMediatorCall = function() {

    var localctx = new InvokeMediatorCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, sourceParser.RULE_invokeMediatorCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 522;
        this.match(sourceParser.T__25);
        this.state = 523;
        this.match(sourceParser.LPAREN);
        this.state = 524;
        this.match(sourceParser.Identifier);
        this.state = 525;
        this.match(sourceParser.COMMA);
        this.state = 526;
        this.match(sourceParser.Identifier);
        this.state = 527;
        this.match(sourceParser.RPAREN);
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

function SendToMediatorCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_sendToMediatorCall;
    return this;
}

SendToMediatorCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SendToMediatorCallContext.prototype.constructor = SendToMediatorCallContext;

SendToMediatorCallContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.Identifier);
    } else {
        return this.getToken(sourceParser.Identifier, i);
    }
};


SendToMediatorCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterSendToMediatorCall(this);
	}
};

SendToMediatorCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitSendToMediatorCall(this);
	}
};




sourceParser.SendToMediatorCallContext = SendToMediatorCallContext;

sourceParser.prototype.sendToMediatorCall = function() {

    var localctx = new SendToMediatorCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, sourceParser.RULE_sendToMediatorCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 529;
        this.match(sourceParser.T__26);
        this.state = 530;
        this.match(sourceParser.LPAREN);
        this.state = 531;
        this.match(sourceParser.Identifier);
        this.state = 532;
        this.match(sourceParser.COMMA);
        this.state = 533;
        this.match(sourceParser.Identifier);
        this.state = 534;
        this.match(sourceParser.RPAREN);
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

function DataMapMediatorCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_dataMapMediatorCall;
    return this;
}

DataMapMediatorCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataMapMediatorCallContext.prototype.constructor = DataMapMediatorCallContext;

DataMapMediatorCallContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

DataMapMediatorCallContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

DataMapMediatorCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterDataMapMediatorCall(this);
	}
};

DataMapMediatorCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitDataMapMediatorCall(this);
	}
};




sourceParser.DataMapMediatorCallContext = DataMapMediatorCallContext;

sourceParser.prototype.dataMapMediatorCall = function() {

    var localctx = new DataMapMediatorCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, sourceParser.RULE_dataMapMediatorCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 536;
        this.match(sourceParser.T__27);
        this.state = 537;
        this.match(sourceParser.LPAREN);
        this.state = 538;
        this.literal();
        this.state = 539;
        this.match(sourceParser.COMMA);
        this.state = 540;
        this.match(sourceParser.Identifier);
        this.state = 541;
        this.match(sourceParser.RPAREN);
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

function ReceiveFromMediatorCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_receiveFromMediatorCall;
    return this;
}

ReceiveFromMediatorCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReceiveFromMediatorCallContext.prototype.constructor = ReceiveFromMediatorCallContext;

ReceiveFromMediatorCallContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.Identifier);
    } else {
        return this.getToken(sourceParser.Identifier, i);
    }
};


ReceiveFromMediatorCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterReceiveFromMediatorCall(this);
	}
};

ReceiveFromMediatorCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitReceiveFromMediatorCall(this);
	}
};




sourceParser.ReceiveFromMediatorCallContext = ReceiveFromMediatorCallContext;

sourceParser.prototype.receiveFromMediatorCall = function() {

    var localctx = new ReceiveFromMediatorCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, sourceParser.RULE_receiveFromMediatorCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 543;
        this.match(sourceParser.T__28);
        this.state = 544;
        this.match(sourceParser.LPAREN);
        this.state = 545;
        this.match(sourceParser.Identifier);
        this.state = 546;
        this.match(sourceParser.COMMA);
        this.state = 547;
        this.match(sourceParser.Identifier);
        this.state = 548;
        this.match(sourceParser.RPAREN);
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

function CustomMediatorCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_customMediatorCall;
    return this;
}

CustomMediatorCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CustomMediatorCallContext.prototype.constructor = CustomMediatorCallContext;

CustomMediatorCallContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.Identifier);
    } else {
        return this.getToken(sourceParser.Identifier, i);
    }
};


CustomMediatorCallContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

CustomMediatorCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterCustomMediatorCall(this);
	}
};

CustomMediatorCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitCustomMediatorCall(this);
	}
};




sourceParser.CustomMediatorCallContext = CustomMediatorCallContext;

sourceParser.prototype.customMediatorCall = function() {

    var localctx = new CustomMediatorCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, sourceParser.RULE_customMediatorCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 550;
        this.match(sourceParser.Identifier);
        this.state = 551;
        this.match(sourceParser.T__29);
        this.state = 552;
        this.match(sourceParser.LPAREN);
        this.state = 553;
        this.match(sourceParser.Identifier);
        this.state = 556;
        _la = this._input.LA(1);
        if(_la===sourceParser.COMMA) {
            this.state = 554;
            this.match(sourceParser.COMMA);
            this.state = 555;
            this.match(sourceParser.StringLiteral);
        }

        this.state = 558;
        this.match(sourceParser.RPAREN);
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

function LogMediatorCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_logMediatorCall;
    return this;
}

LogMediatorCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogMediatorCallContext.prototype.constructor = LogMediatorCallContext;

LogMediatorCallContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

LogMediatorCallContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

LogMediatorCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterLogMediatorCall(this);
	}
};

LogMediatorCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitLogMediatorCall(this);
	}
};




sourceParser.LogMediatorCallContext = LogMediatorCallContext;

sourceParser.prototype.logMediatorCall = function() {

    var localctx = new LogMediatorCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, sourceParser.RULE_logMediatorCall);
    try {
        this.state = 569;
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 560;
            this.match(sourceParser.T__30);
            this.state = 561;
            this.match(sourceParser.LPAREN);
            this.state = 562;
            this.match(sourceParser.Identifier);
            this.state = 563;
            this.match(sourceParser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 564;
            this.match(sourceParser.T__30);
            this.state = 565;
            this.match(sourceParser.LPAREN);
            this.state = 566;
            this.literal();
            this.state = 567;
            this.match(sourceParser.RPAREN);
            break;

        }
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

function MessageModificationStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_messageModificationStatement;
    return this;
}

MessageModificationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageModificationStatementContext.prototype.constructor = MessageModificationStatementContext;

MessageModificationStatementContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.Identifier);
    } else {
        return this.getToken(sourceParser.Identifier, i);
    }
};


MessageModificationStatementContext.prototype.messagePropertyName = function() {
    return this.getTypedRuleContext(MessagePropertyNameContext,0);
};

MessageModificationStatementContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

MessageModificationStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterMessageModificationStatement(this);
	}
};

MessageModificationStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitMessageModificationStatement(this);
	}
};




sourceParser.MessageModificationStatementContext = MessageModificationStatementContext;

sourceParser.prototype.messageModificationStatement = function() {

    var localctx = new MessageModificationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, sourceParser.RULE_messageModificationStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 571;
        this.match(sourceParser.Identifier);
        this.state = 572;
        this.match(sourceParser.DOT);
        this.state = 573;
        this.match(sourceParser.Identifier);
        this.state = 574;
        this.match(sourceParser.LPAREN);
        this.state = 575;
        this.messagePropertyName();
        this.state = 576;
        this.match(sourceParser.COMMA);
        this.state = 577;
        this.literal();
        this.state = 578;
        this.match(sourceParser.RPAREN);
        this.state = 579;
        this.match(sourceParser.SEMI);
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

function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

ReturnStatementContext.prototype.invokeMediatorCall = function() {
    return this.getTypedRuleContext(InvokeMediatorCallContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitReturnStatement(this);
	}
};




sourceParser.ReturnStatementContext = ReturnStatementContext;

sourceParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, sourceParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 581;
        this.match(sourceParser.T__31);
        this.state = 584;
        switch (this._input.LA(1)) {
        case sourceParser.Identifier:
        	this.state = 582;
        	this.match(sourceParser.Identifier);
        	break;
        case sourceParser.T__25:
        	this.state = 583;
        	this.invokeMediatorCall();
        	break;
        case sourceParser.SEMI:
        	break;
        default:
        	throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 586;
        this.match(sourceParser.SEMI);
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

function ParExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_parExpression;
    return this;
}

ParExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParExpressionContext.prototype.constructor = ParExpressionContext;

ParExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ParExpressionContext.prototype.GT = function() {
    return this.getToken(sourceParser.GT, 0);
};

ParExpressionContext.prototype.LT = function() {
    return this.getToken(sourceParser.LT, 0);
};

ParExpressionContext.prototype.EQUAL = function() {
    return this.getToken(sourceParser.EQUAL, 0);
};

ParExpressionContext.prototype.LE = function() {
    return this.getToken(sourceParser.LE, 0);
};

ParExpressionContext.prototype.GE = function() {
    return this.getToken(sourceParser.GE, 0);
};

ParExpressionContext.prototype.NOTEQUAL = function() {
    return this.getToken(sourceParser.NOTEQUAL, 0);
};

ParExpressionContext.prototype.AND = function() {
    return this.getToken(sourceParser.AND, 0);
};

ParExpressionContext.prototype.OR = function() {
    return this.getToken(sourceParser.OR, 0);
};

ParExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterParExpression(this);
	}
};

ParExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitParExpression(this);
	}
};




sourceParser.ParExpressionContext = ParExpressionContext;

sourceParser.prototype.parExpression = function() {

    var localctx = new ParExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, sourceParser.RULE_parExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 588;
        this.match(sourceParser.LPAREN);
        this.state = 589;
        this.expression();
        this.state = 592;
        _la = this._input.LA(1);
        if(((((_la - 105)) & ~0x1f) == 0 && ((1 << (_la - 105)) & ((1 << (sourceParser.GT - 105)) | (1 << (sourceParser.LT - 105)) | (1 << (sourceParser.EQUAL - 105)) | (1 << (sourceParser.LE - 105)) | (1 << (sourceParser.GE - 105)) | (1 << (sourceParser.NOTEQUAL - 105)) | (1 << (sourceParser.AND - 105)) | (1 << (sourceParser.OR - 105)))) !== 0)) {
            this.state = 590;
            _la = this._input.LA(1);
            if(!(((((_la - 105)) & ~0x1f) == 0 && ((1 << (_la - 105)) & ((1 << (sourceParser.GT - 105)) | (1 << (sourceParser.LT - 105)) | (1 << (sourceParser.EQUAL - 105)) | (1 << (sourceParser.LE - 105)) | (1 << (sourceParser.GE - 105)) | (1 << (sourceParser.NOTEQUAL - 105)) | (1 << (sourceParser.AND - 105)) | (1 << (sourceParser.OR - 105)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 591;
            this.expression();
        }

        this.state = 594;
        this.match(sourceParser.RPAREN);
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

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.evalExpression = function() {
    return this.getTypedRuleContext(EvalExpressionContext,0);
};

ExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitExpression(this);
	}
};




sourceParser.ExpressionContext = ExpressionContext;

sourceParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, sourceParser.RULE_expression);
    try {
        this.state = 598;
        switch(this._input.LA(1)) {
        case sourceParser.T__32:
            this.enterOuterAlt(localctx, 1);
            this.state = 596;
            this.evalExpression();
            break;
        case sourceParser.IntegerLiteral:
        case sourceParser.FloatingPointLiteral:
        case sourceParser.BooleanLiteral:
        case sourceParser.CharacterLiteral:
        case sourceParser.StringLiteral:
        case sourceParser.NullLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 597;
            this.literal();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function EvalExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_evalExpression;
    return this;
}

EvalExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvalExpressionContext.prototype.constructor = EvalExpressionContext;

EvalExpressionContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

EvalExpressionContext.prototype.Identifier = function() {
    return this.getToken(sourceParser.Identifier, 0);
};

EvalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterEvalExpression(this);
	}
};

EvalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitEvalExpression(this);
	}
};




sourceParser.EvalExpressionContext = EvalExpressionContext;

sourceParser.prototype.evalExpression = function() {

    var localctx = new EvalExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, sourceParser.RULE_evalExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 600;
        this.match(sourceParser.T__32);
        this.state = 601;
        this.match(sourceParser.LPAREN);
        this.state = 602;
        this.match(sourceParser.StringLiteral);
        this.state = 603;
        this.match(sourceParser.COMMA);
        this.state = 604;
        this.match(sourceParser.Identifier);
        this.state = 605;
        this.match(sourceParser.RPAREN);
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

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(sourceParser.IntegerLiteral, 0);
};

LiteralContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(sourceParser.FloatingPointLiteral, 0);
};

LiteralContext.prototype.CharacterLiteral = function() {
    return this.getToken(sourceParser.CharacterLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(sourceParser.StringLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(sourceParser.BooleanLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitLiteral(this);
	}
};




sourceParser.LiteralContext = LiteralContext;

sourceParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, sourceParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 607;
        _la = this._input.LA(1);
        if(!(((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (sourceParser.IntegerLiteral - 89)) | (1 << (sourceParser.FloatingPointLiteral - 89)) | (1 << (sourceParser.BooleanLiteral - 89)) | (1 << (sourceParser.CharacterLiteral - 89)) | (1 << (sourceParser.StringLiteral - 89)) | (1 << (sourceParser.NullLiteral - 89)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
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

function MediaTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_mediaType;
    return this;
}

MediaTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaTypeContext.prototype.constructor = MediaTypeContext;


MediaTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterMediaType(this);
	}
};

MediaTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitMediaType(this);
	}
};




sourceParser.MediaTypeContext = MediaTypeContext;

sourceParser.prototype.mediaType = function() {

    var localctx = new MediaTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, sourceParser.RULE_mediaType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 609;
        _la = this._input.LA(1);
        if(!(_la===sourceParser.T__33 || _la===sourceParser.T__34)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
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

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitType(this);
	}
};




sourceParser.TypeContext = TypeContext;

sourceParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, sourceParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 611;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (sourceParser.T__35 - 36)) | (1 << (sourceParser.BOOLEAN - 36)) | (1 << (sourceParser.BYTE - 36)) | (1 << (sourceParser.CHAR - 36)) | (1 << (sourceParser.DOUBLE - 36)) | (1 << (sourceParser.FLOAT - 36)) | (1 << (sourceParser.INT - 36)) | (1 << (sourceParser.LONG - 36)))) !== 0) || _la===sourceParser.SHORT)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
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

function ClassTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_classType;
    return this;
}

ClassTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassTypeContext.prototype.constructor = ClassTypeContext;


ClassTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterClassType(this);
	}
};

ClassTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitClassType(this);
	}
};




sourceParser.ClassTypeContext = ClassTypeContext;

sourceParser.prototype.classType = function() {

    var localctx = new ClassTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, sourceParser.RULE_classType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 613;
        _la = this._input.LA(1);
        if(!(_la===sourceParser.T__20 || _la===sourceParser.T__36)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
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

function MessagePropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sourceParser.RULE_messagePropertyName;
    return this;
}

MessagePropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessagePropertyNameContext.prototype.constructor = MessagePropertyNameContext;

MessagePropertyNameContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sourceParser.Identifier);
    } else {
        return this.getToken(sourceParser.Identifier, i);
    }
};


MessagePropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.enterMessagePropertyName(this);
	}
};

MessagePropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sourceListener ) {
        listener.exitMessagePropertyName(this);
	}
};




sourceParser.MessagePropertyNameContext = MessagePropertyNameContext;

sourceParser.prototype.messagePropertyName = function() {

    var localctx = new MessagePropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, sourceParser.RULE_messagePropertyName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 615;
        this.match(sourceParser.Identifier);
        this.state = 620;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sourceParser.DOT) {
            this.state = 616;
            this.match(sourceParser.DOT);
            this.state = 617;
            this.match(sourceParser.Identifier);
            this.state = 622;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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


exports.sourceParser = sourceParser;
