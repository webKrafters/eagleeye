"use strict";(self.webpackChunkeagleeye_dev=self.webpackChunkeagleeye_dev||[]).push([[2943],{76731:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var n=a(96540),r=a(16040),s=a(51314),l=a(4732);t.default=e=>{let{className:t}=e;return n.createElement("article",{className:`concept-store-setstate-set-tag-usage-page ${t}`},n.createElement("h1",null,n.createElement("code",null,"store.setState")," @@SET Tag Usage"),n.createElement("strong",null,"Sample 1:"),n.createElement("pre",null,"store.setState({\n    stateKey0: {\n        '@@SET': <any> // replaces `state.stateKey0` with value\n    }\n});"),n.createElement("strong",null,"Sample 2:"),n.createElement("br",null),n.createElement("strong",{style:{color:"green"}},"Using Computed value"),n.createElement("pre",null,"store.setState({\n    stateKey0: {\n        // replaces `state.stateKey0` with return value\n        '@@SET': ( currentStateKey0: <any> ) => <any>\n    }\n});"),n.createElement(l.A,null,"This tag is for handling edge cases only."),n.createElement(l.A,null,"Please use sparingly. In most cases, store.setState with or without any of the other tags is sufficient and most efficient."),n.createElement(l.A,null,"This and the '",n.createElement("strong",null,n.createElement(r.A,{to:"/concepts/store/setstate/tags/replace"},"@@REPLACE")),"' tags are functionally equivalent when used with a replacement value argument."),n.createElement(l.A,null,"Be aware that the compute function argument may be ",n.createElement("code",null,"undefined")," for properties which do not yet exist in the state."),n.createElement("h3",null,"Example:"),n.createElement(s.A,null,"import { SET_TAG } from '@webkrafters/react-observable-context'; // SET_TAG = \"@@SET\"\n\nconst state = {\n    a: { b: [{ x: 7, y: 8, z: 9 }, { x: 17, y: 18, z: 19 }] },\n    j: 10\n};\n\nstore.setState({ [ SET_TAG ]: currentValue => ({ ...currentValue, a: 'Demo', j: 17 }) }) // rewrites state to { ...state, a: 'Demo', j: 17 };\n\nstore.setState({ a: { [ SET_TAG ]: currentValue => ({ ...currentValue, message: 'Testing...' }) } }) // rewrites state.a to { ...state, message: 'Testing...' }\n\n/* rewrites state.a.b[1] to { x: 97, y: 98, z: 99 }; leaving state.a.b = [{ x: 7, y: 8, z: 9 }, { x: 97, y: 98, z: 99 }] */\nstore.setState({ a: { b: [ state.a.b[ 0 ], { [ SET_TAG ]: currentValue => ({ ...currentValue, x: 97, y: 98, z: 99 }) } ] } })\n\n/* rewrites state.a.b[1] to { x: 97, y: 98, z: 99 }; leaving state.a.b = [{ x: 7, y: 8, z: 9 }, { x: 97, y: 98, z: 99 }] using indexing (RECOMMENDED) */\nstore.setState({ a: { b: { 1: { [ SET_TAG ]: currentValue => ({ ...currentValue, x: 97, y: 98, z: 99 }) } } } });"))};const c=()=>n.createElement("title",null,"eagleeyejs: @@SET")},4732:function(e,t,a){a.d(t,{A:function(){return s}});var n=a(96540);const r=(0,n.forwardRef)(((e,t)=>{let{children:a,className:r,...s}=e;return n.createElement("div",Object.assign({role:"paragraph"},s,{className:"paragraph"+(r?` ${r}`:""),ref:t}),n.Children.map(a,(e=>e)))}));r.displayName="Paragraph";var s=r}}]);
//# sourceMappingURL=component---src-pages-concepts-store-setstate-tags-set-tsx-5a45b702c52a644ed0b3.js.map