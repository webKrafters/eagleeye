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

/* empties aImmutable data; sets aImmutable data = {} */
consumer.set( Tag.CLEAR )
// or consumer.set({ [ Tag.CLEAR ]: <anything> })


//  empties the value at aImmutable data.a.b;
//  sets aImmutable data.a.b = []
consumer.set({
    a: {
        b: Tag.CLEAR // or { [ Tag.CLEAR ]: <anything> }
    }
});


//  empties the value at aImmutable data.a.j;
//  sets aImmutable data.a.j = null
consumer.set({
    a: {
        j: Tag.CLEAR // or { [ Tag.CLEAR ]: <anything> }
    }
});

//  empties the value at aImmutable data.a.b[ 0 ];
//  sets aImmutable data.a.b = [{}]
consumer.set({
    a: {
        b: [ Tag.CLEAR ] // or { [ Tag.CLEAR ]: <anything> }
    }
});

//  empties the value at aImmutable data.a.b[0];
//  sets aImmutable data.a.b = [{}, aImmutable data.a.b[1]]
consumer.set({
    a: {
        b: [
            Tag.CLEAR, // or { [ Tag.CLEAR ]: <anything> }
            aImmutable data.a.b[1]
        ]
    }
});

// empties the value at aImmutable data.a.b[0];
// sets aImmutable data.a.b = [{}, a.b[1]]
// uses indexing (RECOMMENDED)
consumer.set({
    a: {
        b: {
            0: Tag.CLEAR // or { [ Tag.CLEAR ]: <anything> }
        }
    }
});`;

const SetMethodApiClearTagPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-clear-tag-page ${ className }` }>
        <h1>@@CLEAR Tag Usage</h1>
        <strong>Signature 1:</strong>
        { ' ' }
        <code>'@@CLEAR'</code>
        <p>{ ' ' } </p>
        <strong>Signature 2:</strong>
        <pre>
            { `{ '@@CLEAR': <any> }; // the value has no effect.` }
        </pre>
        <h3>Example:</h3>
        <CodeBlock>{ SAMPLE }</CodeBlock>
    </article>
);

export default SetMethodApiClearTagPage;

export const Head : HeadFC = () => ( <title>{ metadata.title }: @@CLEAR</title> );