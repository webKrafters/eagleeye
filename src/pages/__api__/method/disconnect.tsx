import React from 'react';

import Anchor from '../../../partials/anchor';

import CodeBlock from '../../../partials/code-block';

import NotePad from '../../../partials/pad/note';

const DISCONNECT_SAMPLE =
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

const SUMMARY_CLOSURE_SAMPLE =
`import AutoImmutable from 'auto-immutable';

const protectedData = {
    a: {
        b: {
            c: 22
            d: 60
         },
         x: 99
    }
};

type Data = typeof protectedData;

const aImmutable = new AutoImmutable<ProtectedData>( protectedData );

console.log( aImmutable.closed )
// prints \`false\`;

const consumers : Array<Connection<ProtectedData>> = [];

for( let c = 5; c--; ) {
    consumers.push( aImmutable.connect();
}

consumers.forEach( c => console.log( c.disconnected ) );
// prints \`false\` 5 times

consumers.forEach( c => console.log( c.get( 'a.x' ) ) );
// prints \`{'a.x': 99}\` 5 times;

aImmutable.close();

console.log( aImmutable.closed )
// prints \`true\`;

consumers.forEach( c => console.log( c.disconnected ) );
// prints \`true\` 5 times

consumers.forEach( c => console.log( c.get( 'a.x' ) ) );
// prints \`undefined\` 5 times;`; 

const DisconnectMethodApiPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `disconnect-method-api-page ${ className }` }>
        <h1>Disconnecting from Source</h1>
        <p>Any AutoImmutable instance communicates with its environment through its own <Anchor to="/api#consumer"><code>Connection class</code></Anchor> (the consumer) instances.</p>
        <p>The Connection's <strong><code>disconnect(...)</code></strong> parameterless method of the <code>Connection</code> instance provides the means for disconnecting itself from its AutoImmutable instance.</p>
        <p>This method also prompts the source AutoImmutable instance to deallocate all resources dedicated to the disconnecting consumer.</p>
        <CodeBlock>{ DISCONNECT_SAMPLE }</CodeBlock>
        <h2>Further Considerations</h2>
        <p>This method serves as the final association between a consumer and its source AutoImmutable instance.</p>
        <p>Once issued, the instant consumer loses accessibility to its source AutoImmutable instance.</p>
        <NotePad>calling an AutoImmutable <strong><code>close(...)</code></strong> method summarily disconnects all its connected consumers. This instant consumer, if connected to the given AutoImmutable instance, will be disconnected as well.</NotePad>
        <CodeBlock>{ SUMMARY_CLOSURE_SAMPLE }</CodeBlock>
    </article>
);

export default DisconnectMethodApiPage;