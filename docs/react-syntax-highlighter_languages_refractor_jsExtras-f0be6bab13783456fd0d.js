"use strict";(self.webpackChunkeagleeye_dev=self.webpackChunkeagleeye_dev||[]).push([[2224],{23935:function(a){function e(a){!function(a){function e(a,e){return RegExp(a.replace(/<ID>/g,(function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source})),e)}a.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+a.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),a.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+a.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),a.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),a.languages.insertBefore("javascript","keyword",{imports:{pattern:e(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:a.languages.javascript},exports:{pattern:e(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:a.languages.javascript}}),a.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),a.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),a.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:e(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var t=["function","function-variable","method","method-variable","property-access"],s=0;s<t.length;s++){var r=t[s],n=a.languages.javascript[r];"RegExp"===a.util.type(n)&&(n=a.languages.javascript[r]={pattern:n});var o=n.inside||{};n.inside=o,o["maybe-class-name"]=/^[A-Z][\s\S]*/}}(a)}a.exports=e,e.displayName="jsExtras",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsExtras-f0be6bab13783456fd0d.js.map