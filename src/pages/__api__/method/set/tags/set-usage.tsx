import { HeadFC } from 'gatsby';

import React from 'react';

import metadata from '../../../../../../gatsby-config/metadata';

import Anchor from '../../../../../partials/anchor';
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

/* rewrites aImmutable data to { ...aImmutable data, a: 'Demo', j: 17 } */
consumer.set({
    [ Tag.SET ]: currentValue => ({
        ...currentValue,
        a: 'Demo',
        j: 17
    })
});

/* rewrites aImmutable data.a to { ...aImmutable data, message: 'Testing...' } */
consumer.set({
    a: {
        [ Tag.SET ]: currentValue => ({
            ...currentValue,
            message: 'Testing...'
        })
    }
});

//  rewrites aImmutable data.a.b[1] to { x: 97, y: 98, z: 99 };
//  leaving aImmutable data.a.b = [
//       { x: 7, y: 8, z: 9 },
//       { x: 97, y: 98, z: 99 }
//  ]
consumer.set({
    a: {
        b: [
            aImmutable data.a.b[ 0 ],
            {
                [ Tag.SET ]: currentValue => ({
                    ...currentValue,
                    x: 97,
                    y: 98,
                    z: 99
                })
            }
        ]
    }
});

//  rewrites aImmutable data.a.b[1] to { x: 97, y: 98, z: 99 };
//  leaving aImmutable data.a.b = [
//     { x: 7, y: 8, z: 9 },
//     { x: 97, y: 98, z: 99 }
//  ]
//  uses indexing (RECOMMENDED)
consumer.set({
    a: {
        b: {
            1: {
                [ Tag.SET ]: currentValue => ({
                    ...currentValue,
                    x: 97,
                    y: 98,
                    z: 99
                })
            }
        }
    }
});`;

const SetMethodApiSetTagPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-set-tag-page ${ className }` }>
        <h1>@@SET Tag Usage</h1>
        <strong>Signature 1:</strong>
        <pre>{ `{ '@@SET': <any> }` }</pre>
        <p>{ ' ' } </p>
        <strong>Signature 2:</strong>
        <pre>
            { `{ '@@SET': ( currentValue: <any> ) => <any> }` }
        </pre>
        <p>This tag is mainly for handling edge cases.</p>
        <p>Please use sparingly. In most cases, consumer.set with or without any of the other tags is sufficient and most efficient.</p>
        <p>This and the '<strong><Anchor to="/api/method/set/tags/replace-usage">@@REPLACE</Anchor></strong>' tags are functionally equivalent when used with a replacement value argument.</p>
        <p>Be aware that the compute function argument may be <code>undefined</code> for properties which do not yet exist in the aImmutable data.</p>
        <h3>Example:</h3>
        <CodeBlock>{ SAMPLE }</CodeBlock>
    </article>
);

export default SetMethodApiSetTagPage;

export const Head : HeadFC = () => ( <title>{ metadata.title }: @@SET</title> );
