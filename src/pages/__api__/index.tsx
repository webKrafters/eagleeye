import React from 'react';

import Alert from '../../partials/alert';
import Anchor from '../../partials/anchor';

import CodeBlock from '../../partials/code-block';

const INSTANCE_SAMPLE =
`import AutoImmutable from 'auto-immutable';

const ProtectedData : {} = {};

const aImmutable = new AutoImmutable( ProtectedData ); // creates an AutoImmutable instance bearing the ProtectedData

aImmutable.connect(); // returns a consumer for this Immutable instance`;

const CONNECTION_SAMPLE =
`import AutoImmutable from 'auto-immutable';

const aImmutable = new AutoImmutable({
    a: {
        b: {
            c: 22
            d: 60
         },
         x: 99
    }
});

const consumer = aImmutable.connect(); // returns a consumer for this AutoImmutable instance

consumer.get( 'a.b.d', 'a.x' );
// returns {
//    'a.b.d': 60,
//    'a.x': 99
// }

consumer.set({
    a: {
        b: {
            d: {
                m: 70
            },
            g: 506
        }
    }
});
// updates immutable data to:
// {
//     a: {
//         b: {
//             c: 22
//             d: {
//                 m: 70
//             }
//             g: 506
//         },
//         x: 99
//     }
// }

consumer.get( 'a.b.d', 'a.x' );
// returns {
//    'a.b.d': { m: 70 },
//    'a.x': 99
// }

console.log( consumer.instanceId ); // prints this consumer's unique id

console.log( consumer.disconnected ); // prints \`false\`

consumer.disconnect(); // severs connection to the AutoImmutable instance.

console.log( consumer.disconnected ); // prints \`true\`

consumer.get( 'a.b.d', 'a.x' ); // returns \`undefined\`

consumer.set({ a: { x: 1000 } }); // cannot update the immutable data

/* ----------------------------------------------------- */

const consumer1 = aImmutable.connect();

consumer1.get( 'a.b.d', 'a.x' );
// returns {
//    'a.b.d': { m: 70 },
//    'a.x': 99
// }

console.log( consumer.disconnected ); // prints \`false\``;

const ApiPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `api-page ${ className }` }>
        <h1>API</h1>
        <div id="source">
            <h3>AutoImmutable Instance</h3>
            <ul>
                <li>is a source object holding the immutable data.</li>
                <li>exposes its underlying data through its <strong><code>connect(...)</code></strong> method.</li>
                <li>provides a <strong><code>close(...)</code></strong> which can be called before deallocating the instance to immediately release longer-lived connections; Otherwise, this task is delegated to the <Anchor to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection">GC</Anchor>.</li>
                <li>also offers interactivity with its <code>exit</code> process through its <strong><code>onClose(...)</code></strong> method. Handlers registered by this method are invokes during the <code>close(...)</code> call.</li>
                <li>communicates its availability through its <strong><code>closed</code></strong> property.</li>
            </ul>
            <CodeBlock>{ INSTANCE_SAMPLE }</CodeBlock>
            <Alert style={{ margin: '2rem 0' }} title="Pro tip:">
                <p>An AutoImmutable instance, once closed, remains permanently unavailable.</p>
                <p>All operations on a closed AutoImmutable instance is a <code>noop</code>.</p>
                <p>When in doubt, please check its <code>closed</code> property.</p>
            </Alert>
        </div>
        <div id="consumer">
            <h3>Connection Instance</h3>
            <ul>
                <li>is a consumer for an <code>AutoImmutable</code> instance.</li>
                <li>exposes <Anchor to="/api/method/get"><strong><code>get(...)</code></strong></Anchor>, <Anchor to="/api/method/set"><strong><code>set(...)</code></strong></Anchor> and <Anchor to="/api/method/disconnect"><strong><code>disconnect(...)</code></strong></Anchor> methods for interaction with its AutoImmutable instance.</li>
                <li>its <strong><code>disconnect(...)</code></strong> can be called before deallocating this connection to immediately release longer-lived resources held by it; Otherwise, this task is delegated to the <Anchor to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection">GC</Anchor>.</li>
                <li>communicates its availability through its <strong><code>disconnected</code></strong> property.</li>
            </ul>
            <CodeBlock>{ CONNECTION_SAMPLE }</CodeBlock>
            <Alert style={{ margin: '2rem 0' }} title="Pro tip:">
                <h4>Similar to the AutoImmutable instance</h4>
                <p>Connection, once disconnected, loses all access to its AutoImmutable instance permanently.</p>
                <p>To regain access, simply obtain a fresh connection from the Immutable instance.</p>
                <p>All operations on a disconnected connection is a <code>noop</code>.</p>
                <p>When in doubt, please check its <code>disconnected</code> property.</p>
            </Alert>
        </div>
    </article>
);

export default ApiPage;