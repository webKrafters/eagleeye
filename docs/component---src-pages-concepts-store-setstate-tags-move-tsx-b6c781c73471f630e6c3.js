"use strict";(self.webpackChunkeagleeye_dev=self.webpackChunkeagleeye_dev||[]).push([[1790],{61492:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(96540),s=n(8053),r=n(51314);t.default=e=>{let{className:t}=e;return a.createElement("article",{className:`concept-store-setstate-move-tag-usage-page ${t}`},a.createElement("h1",null,a.createElement("code",null,"store.setState")," @@MOVE Tag Usage"),a.createElement("strong",null,"Sample:"),a.createElement("pre",null,"store.setState({\n    stateKey0: { // where `state.stateKey0` is an array\n        '@@MOVE': [ // repositioning `numItemsToMove` items\n            -/+fromIndex,\n            -/+toIndex,\n            +numItemsToMove? = 1\n        ]\n    }\n});"),a.createElement("h4",null,"Example:"),a.createElement(r.A,null,"import { MOVE_TAG } from '@webkrafters/react-observable-context'; // MOVE_TAG = \"@@MOVE\"\n\nconst state = {\n    a: { b: [{ x: 7, y: 8, z: 9 }, { x: 17, y: 18, z: 19 }] },\n    j: 10,\n    q: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]\n};\n\nstore.setState({ a: { [ MOVE_TAG ]: [ 0, 1 ] } }) // assigning a '@@MOVE' command to a non-array property has no effect.\n\n/* moves state.a.b[0] into index 1; leaving state.a.b = [{ x: 17, y: 18, z: 19 }, { x: 7, y: 8, z: 9 }] */\nstore.setState({ a: { b: { [ MOVE_TAG ]: [ 0, 1 ] } } }) // or store.setState({ a: { b: { [ MOVE_TAG ]: [ -2, -1 ] } } })\n\n/* moves state.q[4] - [7] into indexes 1 - 4; leaving state.q = [ 1, 5, 6, 7, 8, 2, 3, 4, 9 ] */\nstore.setState({ a: { q: { [ MOVE_TAG ]: [ 4, 1, 4 ] } } }) // or store.setState({ a: { q: { [ MOVE_TAG ]: [ -5, -8, 4 ] } } })"))};const o=()=>a.createElement("title",null,s.A.title,": @@MOVE")}}]);
//# sourceMappingURL=component---src-pages-concepts-store-setstate-tags-move-tsx-b6c781c73471f630e6c3.js.map