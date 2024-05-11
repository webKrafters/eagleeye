import { HeadFC } from 'gatsby';

import React from 'react';

import metadata from '../../../../../../gatsby-config/metadata';

import CodeBlock from '../../../../../partials/code-block';

const SAMPLE =
`import AutoImmutable, { Tag } from 'auto-immutable';

const protectedDatae = {
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

/* rewrites aImmutable data to { a: 'Demo', j: 17 } */
consumer.set({
    [ Tag.REPLACE ]: {
        a: 'Demo',
        j: 17
    }
});

/* rewrites aImmutable data.a to { message: 'Testing...' } */
consumer.set({
    a: {
        [ Tag.REPLACE ]: {
            message: 'Testing...'
        }
    }
});

//  rewrites aImmutable data.a.b[1] to { x: 97, y: 98, z: 99 };
//  leaving aImmutable data.a.b = [
//      { x: 7, y: 8, z: 9 },
//      { x: 97, y: 98, z: 99 }
//  ]
consumer.set({
    a: {
        b: [
            aImmutable data.a.b[ 0 ],
            {
                [ Tag.REPLACE ]: {
                    x: 97,
                    y: 98,
                    z: 99
                }
            }
        ]
    }
});

//  rewrites aImmutable data.a.b[1] to { x: 97, y: 98, z: 99 };
//  leaving aImmutable data.a.b = [
//      { x: 7, y: 8, z: 9 },
//      { x: 97, y: 98, z: 99 }
//  ]
//  uses indexing (RECOMMENDED)
consumer.set({
    a: {
        b: {
            1: {
                [ Tag.REPLACE ]: {
                    x: 97,
                    y: 98,
                    z: 99
                }
            }
        }
    }
});`;

const SetMethodApiReplaceTagPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-replace-tag-page ${ className }` }>
    <h1>@@REPLACE Tag Usage</h1>
    <strong>Signature:</strong>
    <pre>{ `{ '@@REPLACE': <any> }` }</pre>
    <h3>Example:</h3>
    <CodeBlock>{ SAMPLE }</CodeBlock>
    </article>
);

export default SetMethodApiReplaceTagPage;

export const Head : HeadFC = () => ( <title>{ metadata.title }: @@REPLACE</title> );
