"use strict";(self.webpackChunkeagleeye_dev=self.webpackChunkeagleeye_dev||[]).push([[7815],{59219:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l}});var n=a(96540),s=a(51314);t.default=e=>{let{className:t}=e;return n.createElement("article",{className:`concept-store-setstate-replace-tag-usage-page ${t}`},n.createElement("h1",null,n.createElement("code",null,"store.setState")," @@REPLACE Tag Usage"),n.createElement("strong",null,"Sample:"),n.createElement("pre",null,"store.setState({\n    stateKey0: {\n        '@@REPLACE': <any> // replaces `state.stateKey0` with value \n    }\n});"),n.createElement("h3",null,"Example:"),n.createElement(s.A,null,"import { REPLACE_TAG } from '@webkrafters/react-observable-context'; // REPLACE_TAG = \"@@REPLACE\"\n\nconst state = {\n    a: { b: [{ x: 7, y: 8, z: 9 }, { x: 17, y: 18, z: 19 }] },\n    j: 10\n};\n\nstore.setState({ [ REPLACE_TAG ]: { a: 'Demo', j: 17 } }) // rewrites state to { a: 'Demo', j: 17 };\n\nstore.setState({ a: { [ REPLACE_TAG ]: { message: 'Testing...' } } }) // rewrites state.a to { message: 'Testing...' }\n\n/* rewrites state.a.b[1] to { x: 97, y: 98, z: 99 }; leaving state.a.b = [{ x: 7, y: 8, z: 9 }, { x: 97, y: 98, z: 99 }] */\nstore.setState({ a: { b: [ state.a.b[ 0 ], { [ REPLACE_TAG ]: { x: 97, y: 98, z: 99 } } ] } });\n\n/* rewrites state.a.b[1] to { x: 97, y: 98, z: 99 }; leaving state.a.b = [{ x: 7, y: 8, z: 9 }, { x: 97, y: 98, z: 99 }] using indexing (RECOMMENDED) */\nstore.setState({ a: { b: { 1: { [ REPLACE_TAG ]: { x: 97, y: 98, z: 99 } } } } });"))};const l=()=>n.createElement("title",null,"eagleeyejs: @@REPLACE")}}]);
//# sourceMappingURL=component---src-pages-concepts-store-setstate-tags-replace-tsx-6dae25c24978640092ab.js.map