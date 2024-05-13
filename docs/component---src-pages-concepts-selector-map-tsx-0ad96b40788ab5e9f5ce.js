"use strict";(self.webpackChunkeagleeye_dev=self.webpackChunkeagleeye_dev||[]).push([[8183],{14375:function(e,t,n){n.r(t);var a=n(96540),l=n(16040),r=n(51314),s=n(22990),o=n(4732);t.default=e=>{let{className:t}=e;return a.createElement("article",{className:`concept-selector-map-page ${t}`},a.createElement("h1",null,"Selector Map"),a.createElement("h3",null,"What is a Selector Map?"),a.createElement(o.A,null,"A selector map is an object holding key:value pairs used for defining parts of the state to observe and retrieve."),a.createElement(o.A,null,a.createElement("i",null,a.createElement("strong",null,"An array of ",a.createElement(l.A,{to:"/concepts/property-path"},"property paths")," is also acceptable:")," indexes serve as keys for this purpose.")),a.createElement("div",{style:{paddingLeft:"2.5rem"}},a.createElement(s.A,null,a.createElement(o.A,null,a.createElement("code",null,"key")," refers to an arbitrary name to be assigned to a given property in the ",a.createElement(l.A,{to:"/concepts/store"},a.createElement("code",null,"store.data")),".")),a.createElement(s.A,null,a.createElement(o.A,null,a.createElement("code",null,"value")," refers to the ",a.createElement(l.A,{to:"/concepts/property-path"},"property path")," leading to a state slice whose value will be assigned to and observed by this ",a.createElement(l.A,{to:"/concepts/store"},a.createElement("code",null,"store.data"))," property.")),a.createElement(s.A,null,a.createElement(o.A,null,"A special '",a.createElement(l.A,{to:"/concepts/property-path#fullstate-selectorkey"},"@@STATE"),"' value may be used to access and observe the full state object."))),a.createElement("h3",{id:"selector-map-example"},"Example:"),a.createElement(r.A,null,"// Given the following state object:\nconst state = {\n    a: 1, b: 2, c: 3, d: {\n        e: 5,\n        f: [ 6, {\n            x: 7,\n            y: 8,\n            z: 9\n        } ]\n    }\n};\n\n/* --------------------------------------------- */\n/* a client observing the following selector map */\n/* --------------------------------------------- */\nconst selectorMap = {\n    all: '@@STATE',\n    myData: 'd',\n    secondFElement: 'd.f[1]'\n};\n\n// will receive the following store data\nstore.data = {\n    all: state,\n    myData: state.d,\n    secondFElement: state.d.f[1]\n};\n\n/* --------------------------------------------------- */\n/* a client observing the following property path list */\n/* --------------------------------------------------- */\nconst propertyPaths = [ '@@STATE', 'd', 'd.f[1]' ];\n\n// will receive the following store data\nstore.data = {\n    0: state,\n    1: state.d,\n    2: state.d.f[1]\n};"))}},22990:function(e,t,n){n.d(t,{A:function(){return s}});var a=n(96540);const l=e=>{let{className:t}=e;return"list-item"+(t?` ${t}`:"")},r=e=>{let{children:t}=e;const n=(0,a.useMemo)((()=>{var e;return{className:l(t.props),role:null!==(e=t.props.role)&&void 0!==e?e:"listitem"}}),[t.props.className,t.props.role]);return(0,a.cloneElement)(t,n)};r.displayName="ListItem";var s=r},4732:function(e,t,n){n.d(t,{A:function(){return r}});var a=n(96540);const l=(0,a.forwardRef)(((e,t)=>{let{children:n,className:l,...r}=e;return a.createElement("div",Object.assign({role:"paragraph"},r,{className:"paragraph"+(l?` ${l}`:""),ref:t}),a.Children.map(n,(e=>e)))}));l.displayName="Paragraph";var r=l}}]);
//# sourceMappingURL=component---src-pages-concepts-selector-map-tsx-0ad96b40788ab5e9f5ce.js.map