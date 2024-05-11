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
    j: 10
};

const aImmutable = new AutoImmutable( protectedData );
const consumer = aImmutable.connect();

//  removes aImmutable data.a;
//  sets aImmutable data = {j: 10}
consumer.set({ [ Tag.DELETE ]: [ 'a' ] });

//  removes aImmutable data.a.b;
//  sets aImmutable data.a = {}
consumer.set({ a: { [ Tag.DELETE ]: [ 'b' ] } });

//  removes aImmutable data.a.b[0];
//  leaving aImmutable data.a.b = [{ x: 17, y: 18, z: 19 }]
consumer.set({
    a: {
        b: {
            [ Tag.DELETE ]: [ 0 ] // [ -2 ] with negative indexing
        }
    }
});

//  removes \`x\` and \`z\` properties from aImmutable data.a.b[1];
//  sets aImmutable data.a.b = [
//      { x: 7, y: 8, z: 9 },
//      {y: 18}
//  ]
consumer.set({
    a: {
        b: [
            aImmutable data.a.b[ 0 ],
            {
                [ Tag.DELETE ]: [ 'x', 'z' ]
            }
        ]
    }
});

//  removes \`x\` and \`z\` properties from aImmutable data.a.b[1];
//  sets aImmutable data.a.b = [
//      { x: 7, y: 8, z: 9 },
//      {y: 18}
//  ]
//  uses indexing (RECOMMENDED)
consumer.set({
    a: {
        b: {
            1: {
                [ Tag.DELETE ]: [ 'x', 'z' ]
            }
        }
    }
});`;

const SIGNATURE = `{
    '@@DELETE': [
        ...keysToRemove
    ]
};`

const SetMethodApiDeleteTagPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-delete-tag-page ${ className }` }>
        <h1>@@DELETE Tag Usage</h1>
        <strong>Signature:</strong>
        <pre>{ SIGNATURE }</pre>
        <h3>Example:</h3>
        <CodeBlock>{ SAMPLE }</CodeBlock>
    </article>
);

export default SetMethodApiDeleteTagPage;

export const Head : HeadFC = () => ( <title>{ metadata.title }: @@DELETE</title> );
