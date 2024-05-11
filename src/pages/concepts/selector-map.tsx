import React from 'react';

import Anchor from '../../partials/anchor';

import CodeBlock from '../../partials/code-block';

const SAMPLE =
`// Given the following state object:
const state = {
    a: 1, b: 2, c: 3, d: {
        e: 5,
        f: [ 6, {
            x: 7,
            y: 8,
            z: 9
        } ]
    }
};

/* --------------------------------------------- */
/* a client observing the following selector map */
/* --------------------------------------------- */
const selectorMap = {
    all: '@@STATE',
    myData: 'd',
    secondFElement: 'd.f[1]'
};

// will receive the following store data
store.data = {
    all: state,
    myData: state.d,
    secondFElement: state.d.f[1]
};

/* --------------------------------------------------- */
/* a client observing the following property path list */
/* --------------------------------------------------- */
const propertyPaths = [ '@@STATE', 'd', 'd.f[1]' ];

// will receive the following store data
store.data = {
    0: state,
    1: state.d,
    2: state.d.f[1]
};`

const ConceptSelectorMapPage : React.FC<{className? : string}> = ({ className }) => (
    <article className={ `concept-selector-map-page ${ className }` }>
        <h1>Selector Map</h1>
        <div>
            <h3>What is a Selector Map?</h3>
            <div>
                A selector map is an object holding key:value pairs.<br />
                <i><strong>An array of <Anchor to="/concepts/property-path">property paths</Anchor> is also acceptable:</strong> indexes serve as keys for this purpose.</i><br />
                <ul>
                    <li><code>key</code> refers to an arbitrary name to be assigned to a given property in the <Anchor to="/concepts/store"><code>store.data</code></Anchor>.</li>
                    <li><code>value</code> refers to the <Anchor to="/concepts/property-path">property path</Anchor> leading to a state slice whose value will be assigned to and observed by this <Anchor to="/concepts/store"><code>store.data</code></Anchor> property.</li>
                    <li>A special '<Anchor to="/concepts/property-path#fullstate-selectorkey">@@STATE</Anchor>' value may be used to access and observe the full state object.</li>
                </ul>
            </div>
            <div>
                <h3 id="selector-map-example">Example:</h3>
                <CodeBlock>{ SAMPLE }</CodeBlock>
            </div>
        </div>
    </article>
);

export default ConceptSelectorMapPage;
