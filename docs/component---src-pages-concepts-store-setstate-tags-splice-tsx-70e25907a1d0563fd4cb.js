"use strict";(self.webpackChunkeagleeye_dev=self.webpackChunkeagleeye_dev||[]).push([[5201],{6075:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l}});var n=a(96540),s=a(8053),r=a(51314);t.default=e=>{let{className:t}=e;return n.createElement("article",{className:`concept-store-setstate-splice-tag-usage-page ${t}`},n.createElement("h1",null,n.createElement("code",null,"store.setState")," @@SPLICE Tag Usage"),n.createElement("strong",null,"Sample:"),n.createElement("pre",null,"store.setState({\n    stateKey0: { // where `state.stateKey0` is an array\n        '@@SPLICE': [ // performs array splice on `state.stateKey0`.\n            -/+fromIndex,\n            deleteCount, // integer >= 0\n            ...newInserts?\n        ]\n    }\n});"),n.createElement("h4",null,"Example:"),n.createElement(r.A,null,"import { SPLICE_TAG } from '@webkrafters/react-observable-context'; // SPLICE_TAG = \"@@SPLICE\"\n\nconst state = {\n    a: { b: [{ x: 7, y: 8, z: 9 }, { x: 17, y: 18, z: 19 }] },\n    j: 10,\n    q: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]\n};\n\nstore.setState({ a: { [ SPLICE_TAG ]: [ 0, 1 ] } }); // assigning a '@@SPLICE' command to a non-array property has no effect.\n\n/* removes state.a.b[0]; leaving state.a.b = [{ x: 17, y: 18, z: 19 }] */\nstore.setState({ a: { b: { [ SPLICE_TAG ]: [ 0, 1 ] } } }) // or store.setState({ a: { b: { [ SPLICE_TAG ]: [ -2, -1 ] } } });\n\n/* replaces state.q[4] - [7] with 2 items; leaving state.q = [ 1, 2, 3, 4, 33, 88, 9 ] */\nstore.setState({ a: { q: { [ SPLICE_TAG ]: [ 4, 4, 33, 88 ] } } }) // or store.setState({ a: { q: { [ SPLICE_TAG ]: [ -5, 4, 33, 88 ] } } });"))};const l=()=>n.createElement("title",null,s.A.title,": @@SPLICE")}}]);
//# sourceMappingURL=component---src-pages-concepts-store-setstate-tags-splice-tsx-70e25907a1d0563fd4cb.js.map