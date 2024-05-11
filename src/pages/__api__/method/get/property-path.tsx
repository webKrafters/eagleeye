import React from 'react';

import metadata from '../../../../../gatsby-config/metadata';

import Anchor from '../../../../partials/anchor';
import CodeBlock from '../../../../partials/code-block';

const isolatedTopStyle = { marginTop: '1rem' };

const ILLUSTRATION =
`{
    a: {
        c: {
            e: 5,
            f: [ 0, 2, 4 ]
        }
    }
}`;

const SAMPLE =
`import AutoImmutable from 'auto-immutable';

const protectedData = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 5,
        f: [ 6, {
            x: 7,
            y: 8,
            z: 9
        } ]
    }
};

const aImmutable = new AutoImmutable( protectedData );

const consumer = aImmutable.connect();

consumer.get( '@@GLOBAL', 'd', 'd.f[1]' );
// returns
// {
//     '@@GLOBAL': protectedData,
//     d: protectedData.d,
//     'd.f[1]': protectedData.d.f[1]
// };`;

const PropertyPathApiPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `property-path-api-page ${ className }` }>
        <h1>Property Path</h1>
        <div>
            <h3>What is a Property Path?</h3>
            <div>
                <div>
                    <p>A property path is a dot-notation string leading to a specific property within an object.</p>
                    <p>{ metadata.title } recognizes any property path abiding by the <Anchor to="https://lodash.com/docs/4.17.15#has"><strong>Lodash</strong></Anchor> object path <strong><u>string</u></strong> specifications.</p>
                    <p>{ metadata.title } will, in addition, resolve any such property paths containing negative integer indexes.</p>
                </div>
                <p><strong>Negative</strong> integer { '[' }<i>-N</i>{ ']' } in a property path indicates the <i>nth</i> last an array index: resolved at runtime by counting <code>abs(-N)</code> steps backward from array length.</p>
                <p>
                    <h3 id="property-path-example">Ex. Given the following object:</h3>
                    <CodeBlock>{ ILLUSTRATION }</CodeBlock>
                    <p style={ isolatedTopStyle }>
                        The property path <code>a.c.e</code> accesses the <code>e=5</code> property.
                    </p>
                    <p>Either of the property paths <code>a.c.f.1</code>, <code>a.c.f.-2</code>, <code>a.c.f[1]</code> and <code>a.c.f[-2]</code> is a valid property path to access the <code>[1]=2</code> property.</p>
                    <p>A special property path, <Anchor to="/api/method/get/property-path#global">@@GLOBAL</Anchor>, may be used to access the AutoImmutable data as a whole.</p>
                </p>
            </div>
            <h3 id="global">What is the @@GLOBAL keyword?</h3>
            <div>
                <strong>@@GLOBAL</strong> is a property path which can be used to obtain a snapshot of the entire AutoImmutable data held in the AutoImmutable instance.<br />
            </div>
        </div>
        <div>
            <h3 id="access-usage">Example:</h3>
            <CodeBlock>{ SAMPLE }</CodeBlock>
        </div>
    </article>
);

export default PropertyPathApiPage;
