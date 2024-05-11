import React from 'react';

import Alert from '../../../../partials/alert';
import Anchor from '../../../../partials/anchor';
import CodeBlock from '../../../../partials/code-block';

const PROPER_BATCH_CALL =
`import AutoImmutable from 'auto-immutable';

// Given the following immutable data:
const protectedData = {
    a: { b: [ { x: 7, y: 8, z: 9 } ] },
    j: 10
};

const aImmutable = new AutoImmutable( protectedData );

const consumer = aImmutable.connect();

consumer.set([
    {
        a: { b: { 1: 22 },
        c: 40
    },
    {
        a: { b: { 0: { v: 8, w: 560, y: 110, z: 120 } } }
    },
]);
// updates the AutoImmutable instance data to: {
//     a: { b: [ { v: 8, w: 560, x: 7, y: 110, z: 120 }, 22 ] },
//     c: 40,
//     j: 10
// };`

const BASIC =
`import AutoImmutable from 'auto-immutable';

// Given the following immutable data:
const protectedData = {
    a: { b: [ { x: 7, y: 8, z: 9 } ] },
    j: 10
};

const aImmutable = new AutoImmutable( protectedData );

const consumer = aImmutable.connect();

consumer.set({
    a: {
        b: { 0: { y: 73 } },
        d: 80
    },
    j: 23
}, changes => console.log( changes ))
// updates AutoImmutable instance data to: {
//    a: {
//        b: [ { x: 7, y: 73, z: 9 } ],
//        d: 80
//    },
//    j: 23
// };
// the second argument is invoked immediately following the update`

const SET_ARRAY =
`import AutoImmutable from 'auto-immutable';

// Given the following array bearing immutable data:
const protectedData = {
    a: { b: [ { x: 7, y: 8, z: 9 } ] },
    j: 10
};

const aImmutable = new AutoImmutable( protectedData );

const consumer = aImmutable.connect();

// The following will override the existing array.
consumer.set({ a: { b: [ { y: 30 }, 22 ] } });
// updates the AutoImmutable instance data to: {
//     a: { b: [ { y: 30 }, 22 ] },
//     j: 10
// };

// The followinng will update the existing array at indexes.
consumer.set({ a: { b: { 0: { y: 30 }, 1: 22 } } });
// updates the AutoImmutable instance data to: {
//     a: { b: [ { x: 7, y: 30, z: 9 }, 22 ] },
//     j: 10
// };

// The followinng will update the existing array at indexes.
consumer.set({ a: { b: { '-1': { y: 30 }, 1: 22 } } });
// updates the AutoImmutable instance data to: {
//     a: { b: [ { x: 7, y: 30, z: 9 }, 22 ] },
//     j: 10
// };`;

const SetOverviewApiPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-overiew-page ${ className }` }>
        <h1>Set Method Overiew</h1>
        <p>New updates are merged into AutoImmutable instance data by default.</p>
        <p>So only supply the exact changes to be merged <strong><i>{ '(' }i.e. do not spread changing properties into the current properties as is commonly done in pure functional development{ ')' }</i></strong>.</p>
        <p>An optional <strong><code>onUpdateComplete</code></strong> callback may be provided as a second argument.</p>
        <p>And to overwrite/delete a slice of the AutoImmutable instance data, use any combinations of the <strong><Anchor to="/api/method/set/tags">tag</Anchor></strong> commands.</p>
        <strong>Example:</strong>
        <CodeBlock>{ BASIC }</CodeBlock>
        <h3 id="indexing">Indexing</h3>
        <p>Traditionally, AutoImmutable instance data properties of the Array type are updated by a new array replacement. This overwrites the current property.</p>
        <p>Hence the need for <code>indexing</code>. Indexing provides a mechanism for updating array properties at specific indexes using an indexed change object property.</p>
        <p>The store also recognizes and resolves negative indexes when present in the indexed change object. See additional <Anchor to="/api/method/set/overview#neg-idx-tip">tip</Anchor> below.</p>
        <strong>Example:</strong>
        <CodeBlock>{ SET_ARRAY }</CodeBlock>
        <div id="neg-idx-tip">
            <Alert style={{ margin: '2rem 0' }} title={ <strong><i>Tip:</i></strong> }>
                Negative indexing pointing at an out-of-bounds index is ignored.
            </Alert>
        </div>
        <h3 id="batched-update">Batched Updates</h3>
        <p>Auto Immutable JS provides a means for updating data as a transaction of several change payloads.</p>
        <p>The list of change payloads are applied sequentially from <code>index 0</code> to the <code>final index</code>.</p>
        <p>This capability is especially applicable when update operation using <strong><Anchor to="/api/method/set/tags">tag</Anchor></strong> commands depends on previous outcomes.</p>
        <CodeBlock>{ PROPER_BATCH_CALL }</CodeBlock>
    </article>
);

export default SetOverviewApiPage;