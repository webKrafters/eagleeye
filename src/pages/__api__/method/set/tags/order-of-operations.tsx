import React from 'react';

import CodeBlock from '../../../../../partials/code-block';
import Anchor from '../../../../../partials/anchor';

const SAMPLE =
`import AutoImmutable, { Tag } from 'auto-immutable';

const protectedData = {
    a: {
        b: [
            { x: 7, y: 8, z: 9 },
            { x: 17, y: 18, z: 19 }
        ]
    },
    j: 10,
    q: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
};

const aImmutable = new AutoImmutable( protectedData );
const consumer = aImmutable.connect();

consumer.set({
    a: {
        b: {
            /* evaluated 1st */ [ Tag.DELETE ]: [ 0 ], // upon deleting aImmutable data.a.b[0] -> aImmutable data.a.b[1] becomes the new aImmutable data.a.b[0]
            /* evaluated 3rd */ 0: Tag.CLEAR, // clear the new aImmutable data.a.b[0]
            /* evaluated 4th */ 2: { x: 47, y: 48, z: 49 }, // add new item at aImmutable data.a.b[2],
            /* evaluated 2nd */ [ Tag.PUSH ]: [{ x: 107, y: 108, z: 109 }] // appends aImmutable data.a.b[1]
        }
    },
    j: { [ Tag.SET ]: currentValue => currentValue < 10 ? currentValue : 0 },
    q: {
        /* evaluated 1st */ [ Tag.MOVE ]: [ 5, 3, 2 ],
        /* evaluated 2nd */ 12: 11
    }
});
// => {
//      a: {
//          b: [
//              {},
//              { x: 107, y: 108, z: 109 },
//              { x: 47, y: 48, z: 49 }
//          ]
//      },
//      j: 0,
//      q: [ 1, 2, 3, 6, 7, 4, 5, 8, 9, <empty>, <empty>, <empty>, 11 ]
// };`;

const BATCHED_UPDATE_SAMPLE =
`import AutoImmutable, { Tag } from 'auto-immutable';

const protectedData = {
    a: 
        b: [
            { x: 7, y: 8, z: 9 },
            { x: 17, y: 18, z: 19 }
        ]
    },
    j: 10,
    q: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
};

const aImmutable = new AutoImmutable( protectedData );
const consumer = aImmutable.connect();

consumer.set([
    {
        a: {
            b: {
                [ Tag.DELETE ]: [ 0 ]
            }
        },
        j: { [ Tag.SET ]: currentValue => currentValue < 10 ? currentValue : 0 },
        q: {
            /* evaluated 1st */ [ Tag.MOVE ]: [ 5, 3, 2 ],
            /* evaluated 2nd */ 12: 11
        }
    },
    { a: { b: { 0: Tag.CLEAR } } },
    { a: { b: { 2: { x: 47, y: 48, z: 49 } } } },
    { a: { b: { [ Tag.PUSH ]: [{ x: 107, y: 108, z: 109 }] } } }
]);
// => {
//      a: 
//          b: [
//              undefined,
//              undefined,
//              { x: 47, y: 48, z: 49 },
//              { x: 107, y: 108, z: 109 }
//          ]
//      },
//      j: 0,
//      q: [ 1, 2, 3, 6, 7, 4, 5, 8, 9, <empty>, <empty>, <empty>, 11 ]
// };`;

const SetMethodApiFullUsagePage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-full-usage-page ${ className }` }>
        <h1>Combination Tags Usage:</h1>
        <p>Tags may be used in combination with the default usage where all top-level tag command results in property are sequentially merged into AutoImmutable data followed by the merging of the rest of the property changes.</p>
        <p>Get finer control over update order with the <strong><Anchor to="/api/method/set/tags/order-of-operations#batched-update-example">batched update method</Anchor></strong> illustrated in the next section.</p>
        <h3>Example:</h3>
        <CodeBlock>{ SAMPLE }</CodeBlock>
        <h3 id="batched-update-example">Batched Update Example:</h3>
        <CodeBlock>{ BATCHED_UPDATE_SAMPLE }</CodeBlock>
    </article>
);

export default SetMethodApiFullUsagePage;
