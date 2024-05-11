import { HeadFC } from 'gatsby';

import React from 'react';

import metadata from '../../../../../../gatsby-config/metadata';

import CodeBlock from '../../../../../partials/code-block';

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

/* assigning a '@@SPLICE' command to a non-array property has no effect. */
consumer.set({
    a: {
        [ Tag.SPLICE ]: [ 0, 1 ]
    }
});

//  removes aImmutable data.a.b[0];
//  leaving aImmutable data.a.b = [
//     { x: 17, y: 18, z: 19 }
//  ]
consumer.set({
    a: {
        b: {
            [ Tag.SPLICE ]: [ 0, 1 ] // or [ -2, -1 ] with negative indexing
        }
    }
});

//  replaces aImmutable data.q[4] - [7] with 2 items;
//  leaving aImmutable data.q = [ 1, 2, 3, 4, 33, 88, 9 ]
consumer.set({
    a: {
        q: {
            [ Tag.SPLICE ]: [ 4, 4, 33, 88 ]
                            // or [ -5, 4, 33, 88 ] with negative indexing
        }
    }
});`;

const SIGNATURE = `{
    '@@SPLICE': [
        -/+fromIndex,
        deleteCount, // integer >= 0
        ...newInserts?
    ]
}`;

const SetMethodApiSpliceTagPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-splice-tag-page ${ className }` }>
        <h1>@@SPLICE Tag Usage</h1>
        <strong>Signature:</strong>
        <pre>{ SIGNATURE }</pre>
        <h3>Example:</h3>
        <CodeBlock>{ SAMPLE }</CodeBlock>
    </article>
);

export default SetMethodApiSpliceTagPage;

export const Head : HeadFC = () => ( <title>{ metadata.title }: @@SPLICE</title> );
