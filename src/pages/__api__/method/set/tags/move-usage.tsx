import { HeadFC } from 'gatsby';

import React from 'react';

import metadata from '../../../../../../gatsby-config/metadata';

import CodeBlock from '../../../../../partials/code-block';

const SAMPLE =
`import AutoImmutable, { Tag } from '@webkrafters/react-observable-context';

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

/* assigning a '@@MOVE' command to a non-array property has no effect. */
consumer.set({
    a: {
        [ Tag.MOVE ]: [ 0, 1 ]
    }
});

//  moves aImmutable data.a.b[0] into index 1;
//  leaving aImmutable data.a.b = [{
//      x: 17, y: 18, z: 19 },
//      { x: 7, y: 8, z: 9 }
//  ]
consumer.set({
    a: {
        b: {
            [ Tag.MOVE ]: [ 0, 1 ] // or [ -2, -1 ] with negative indexing
        }
    }
});

//  moves aImmutable data.q[4] - [7] into indexes 1 - 4;
//  leaving aImmutable data.q = [ 1, 5, 6, 7, 8, 2, 3, 4, 9 ]
consumer.set({
    a: {
        q: {
            [ Tag.MOVE ]: [ 4, 1, 4 ] // or [ -5, -8, 4 ] with negative indexing
        }
    }
});`;

const SIGNATURE = `{
    '@@MOVE': [
        -/+fromIndex,
        -/+toIndex,
        +numItemsToMove? = 1
    ]
}`;

const SetMethodApiMoveTagPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-move-tag-page ${ className }` }>
        <h1>@@MOVE Tag Usage</h1>
        <strong>Signature:</strong>
        <pre>{ SIGNATURE }</pre>
        <h3>Example:</h3>
        <CodeBlock>{ SAMPLE }</CodeBlock>
    </article>
);

export default SetMethodApiMoveTagPage;

export const Head : HeadFC = () => ( <title>{ metadata.title }: @@MOVE</title> );
