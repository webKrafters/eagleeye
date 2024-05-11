import React from 'react';

import Alert from '../../../../partials/alert';
import Anchor from '../../../../partials/anchor';
import CodeBlock from '../../../../partials/code-block';
import WarningIcon from '../../../../partials/icons/warning';

const PROPER_BATCH_CALL =
`setState([
    {stateKey0: changes0},
    {stateKey1: changes1},
    // et cetera ... et cetera
]);`

const IMPROPER_BATCH_CALL =
`setState([
    {...state, stateKey0: {...state.stateKey0, ...changes0}},
    {...state, stateKey1: {...state.stateKey1, ...changes1}},
    // et cetera ... et cetera
]);`

const INVOCATION =
`// Given the following array bearing state object:
const state = { a: { b: [ { x: 7, y: 8, z: 9 } ] }, j: 10 };

// The following will override the existing array.
store.setState({ a: { b: [ { y: 30 }, 22 ] } });
// updates the state to: { a: { b: [ { y: 30 }, 22 ] }, j: 10 };

// The followinng will update the existing array at indexes.
store.setState({ a: { b: { 0: { y: 30 }, 1: 22 } } });
// updates the state to: { a: { b: [ { x: 7, y: 30, z: 9 }, 22 ] }, j: 10 };

// The followinng will update the existing array at indexes.
store.setState({ a: { b: { '-1': { y: 30 }, 1: 22 } } });
// updates the state to: { a: { b: [ { x: 7, y: 30, z: 9 }, 22 ] }, j: 10 };

// The previous 2 statements are functionally equivalent to the following:
const [ first, second, ...rest ] = state.a.b;
store.setState({ ...state, a: { ...state.a, b: [ { ...first, y: 30 }, 22, ...rest ] } });
// Refrain from doing this, please!`

const ConceptStoreSetStatePage : React.FC<{className? : string}> = ({ className }) => (
    <article className={ `concept-store-setstate-page ${ className }` }>
        <h1><code>store.setState</code> Usage</h1>
        <div>
            <h3>About the store setState method</h3>
            <div>
                <blockquote>
                    [This store's] internal state is <strong><u>immutable</u></strong> and <strong><u>private</u></strong>.<br />
                    Direct mutation attempts on its properties have no effect.
                </blockquote>
                New updates are merged into state by default. 
                So only supply the exact changes to be merged <strong><i>{ '(' }i.e. do not spread the new state changes into the current state as is commonly done in React development{ ')' }</i></strong>. 
                And to overwrite a slice of state, use the <Anchor to="/concepts/store/setstate/tags">tag</Anchor> command.<br />
                <WarningIcon /> <strong><i>Do this:</i></strong> <code>setState(&#10100;stateKey0: changes0&#10101;);</code><br />
                <WarningIcon /> <strong><i>Not this:</i></strong> <code>setState(&#10100;...state, stateKey0: &#10100;...state.stateKey0, ...changes0&#10101;&#10101;);</code><br />
            </div>
            <h3 id="batched-update">Batched Update</h3>
            <div>
                provides a way to update the state as a transaction of several state changes. This can be achieved by collecting a series of state changes in an array and passing that array as an argument to the <code>store.setState</code> method. 
                The state changes are resolved sequentially from <code>index 0</code> to the <code>last index</code>. <Anchor to="/concepts/client">Clients</Anchor> are only notified at batched update completion.<br />
                <WarningIcon /> <strong><i>Do this:</i></strong> 
                <CodeBlock>{ PROPER_BATCH_CALL }</CodeBlock>
                <br />
                <WarningIcon /> <strong><i>Not this:</i></strong> 
                <CodeBlock>{ IMPROPER_BATCH_CALL }</CodeBlock>
            </div>
            <h3 id="indexing">Indexing</h3>
            <div>
                Traditionally, array state properties are updated by a new array replacement. This overwrites the existing state property.<br />
                Hence the need for <code>indexing</code>. Indexing provides a mechanism for updating array state properties at specific indexes using an indexed state change object.<br />
                The store also recognizes and resolves negative indexes when present in the indexed state change object. See additional <Anchor to="/concepts/store/setstate#neg-idx-tip">tip</Anchor> below.<br />
                <strong>Example:</strong>
                <CodeBlock>{ INVOCATION }</CodeBlock>
            </div>
            <Alert id="neg-idx-tip" title={ <i><strong>Tip:</strong></i> }>
                Negative indexing pointing at an out-of-bounds index is ignored.
            </Alert>
            <h3 id="setstate-tags">Overwriting state using the tag commands</h3>
            <div>Please see full info on tag commands <Anchor to="/concepts/store/setstate/tags">here</Anchor>.</div>
        </div>
    </article>
);

export default ConceptStoreSetStatePage;