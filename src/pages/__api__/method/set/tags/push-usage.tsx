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

/* assigning a '@@PUSH' command to a non-array property has no effect. */
consumer.set({
    a: {
        [ Tag.PUSH ]: [
            { n: 5 }
        ]
    }
});

//  appends 2 new items into aImmutable data.a.b;
//  leaving aImmutable data.a.b = [
//      ...aImmutable data.a.b,
//      { x: 27, y: 28, z: 29 },
//      { x: 37, y: 38, z: 39 }
//  ]
consumer.set({
    a: {
        b: {
            [ Tag.PUSH ]: [
                { x: 27, y: 28, z: 29 },
                { x: 37, y: 38, z: 39 }
            ]
        }
    }
});`;

const SIGNATURE = `{
    '@@PUSH': [
        ...newItemsToAppend
    ]
}`;

const SetMethodApiPushTagPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-push-tag-page ${ className }` }>
    <h1>@@PUSH Tag Usage</h1>
    <strong>Signature:</strong>
    <pre>{ SIGNATURE }</pre>
    <h3>Example:</h3>
    <CodeBlock>{ SAMPLE }</CodeBlock>
    </article>
);

export default SetMethodApiPushTagPage;

export const Head : HeadFC = () => ( <title>{ metadata.title }: @@PUSH</title> );
