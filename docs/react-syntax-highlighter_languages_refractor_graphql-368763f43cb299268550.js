"use strict";(self.webpackChunkeagleeye_dev=self.webpackChunkeagleeye_dev||[]).push([[451],{88355:function(n){function e(n){n.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:n.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},n.hooks.add("after-tokenize",(function(n){if("graphql"===n.language)for(var e=n.tokens.filter((function(n){return"string"!=typeof n&&"comment"!==n.type&&"scalar"!==n.type})),t=0;t<e.length;){var a=e[t++];if("keyword"===a.type&&"mutation"===a.content){var r=[];if(c(["definition-mutation","punctuation"])&&"("===l(1).content){t+=2;var i=f(/^\($/,/^\)$/);if(-1===i)continue;for(;t<i;t++){var o=l(0);"variable"===o.type&&(b(o,"variable-input"),r.push(o.content))}t=i+1}if(c(["punctuation","property-query"])&&"{"===l(0).content&&(t++,b(l(0),"property-mutation"),r.length>0)){var s=f(/^\{$/,/^\}$/);if(-1===s)continue;for(var u=t;u<s;u++){var p=e[u];"variable"===p.type&&r.indexOf(p.content)>=0&&b(p,"variable-input")}}}}function l(n){return e[t+n]}function c(n,e){e=e||0;for(var t=0;t<n.length;t++){var a=l(t+e);if(!a||a.type!==n[t])return!1}return!0}function f(n,a){for(var r=1,i=t;i<e.length;i++){var o=e[i],s=o.content;if("punctuation"===o.type&&"string"==typeof s)if(n.test(s))r++;else if(a.test(s)&&0===--r)return i}return-1}function b(n,e){var t=n.alias;t?Array.isArray(t)||(n.alias=t=[t]):n.alias=t=[],t.push(e)}}))}n.exports=e,e.displayName="graphql",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_graphql-368763f43cb299268550.js.map