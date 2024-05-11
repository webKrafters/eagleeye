import React from 'react';

import CodeBlock from '../partials/code-block';

import Alert from '../partials/alert';
import Anchor from '../partials/anchor';
import Header from '../partials/segment-header';

import '../partials/contents/getting-start-page/styles.scss';

const providerCode =
`import React, { forwardRef } from 'react';
import ObservableContext from './context'; // using example from the "Getting Started Page"
import Ui from './ui'; // using example from the "Getting Started Page"

const initState = {a: { b: { x: { y: { z: [ 2022 ] } } } }};

const ProviderDemo = forwardRef(( props, ref ) => {
    // signify to parent the exit of the storeRef Provider on component unmount.
    useEffect(() => () => setTimeout( () => props?.onDismount(), 0 ), []);
    return (
        <ObservableContext.Provider ref={ ref } value={ initState }>
            <Ui />
        </ObservableContext.Provider>
    );
};
ProviderDemo.displayName = 'ProviderDemo';

export default ProviderDemo;`

const setupCode =
`import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProviderDemo from './provider-demo';
import StoreMonitor from './debug-monitor';
const App = () => {
    const storeRef = useRef();
    const [ refChangeCount, setRefChangeCount ] = useState( 0 );
    const updateMonitor = useCallback(() => setRefChangeCount( c => c + 1 ), []);
    const [ monitor ] = useState(() => new StoreMonitor( d => console.log( d ) ));
    useEffect(() => {
        monitor.source = storeRef.current;
        return () => monitor.cleanup();
    }, [ refChangeCount ]);
    return (
        <ProviderDemo
            onDismount={ updateMonitor }
            ref={ storeRef }
        />
    );
}
export default App;`

const externalAccessCode =
`class Monitor {
    #onEvent;
    #store;
    #unsub;
    constructor( onEvent, store ) {
        this.onEvent = onEvent;
        this.source = store;
    }
    set onEvent( handler ) { this.#onEvent = handler }
    get source() { return this.#store }
    set source( store ) {
        if( store === this.#store ) { return }
        this.cleanup();
        if( !store ) { return }
        this.#store = store;
        this.#onEvent( this.#store.getState() );
        this.#unsub = store.subscribe(
            () => this.#onEvent( this.#store.getState() )
        );
    }
    cleanup() {
        this.#unsub?.();
        this.#store = null;
    }
}
export default Monitor;`

const ExternalAccessPage : React.FC<{className : string}> = ({ className }) => (
    <article className={ `external-access-page ${ className }` }>
        <h1>External Access</h1>
        <div>Normally, the context must be rendered within the component tree in order to make its store accessible - any attempt to the contrary leads to a <code>UsageError</code>. However, once rendered, its store becomes accessible both within its context component tree and externally.</div>
        <h3>How do I access the store externally?</h3>
        <div>This is done by obtaining a reference to the Provider component. Once obtained, its <code>current</code> property { '(' }i.e. which holds the referenced store object{ ')' } can be passed around to other parts of the application. When the reference is no longer needed, be sure to unsubscribe all observers attached through this store reference during this phase.</div>
        <div>
            For external access to the context, <strong>4</strong> store methods have been exposed. Namely:
            <ol>
                <li><strong><code>store.getState()</code>:</strong> Provides a static snapshot of the current state.</li>
                <li><strong><code>store.resetState()</code>:</strong> Please see descriptions in the <Anchor to="/concepts/store/store">store</Anchor> page.</li>
                <li><strong><code>store.setState()</code>:</strong> Please see descriptions in the <Anchor to="/concepts/store/store">store</Anchor> page.</li>
                <li><strong><code>store.subscribe(observerFn: (changes: Changes&lt;State&gt;) =&gt; void) =&gt; VoidFunction // retuns an unsubsciber function </code>:</strong> Provides an API for  manual subscription to the state.</li>
            </ol>
        </div>
        <h4>Let's see some code!</h4>
        <div className="snippet-box">
            <Header>provider-demo.js</Header>
            <div>Making our Provider accessible to the parent component.</div>
            <CodeBlock>{ providerCode }</CodeBlock>
        </div>
        <div className="snippet-box">
            <Header>app.js</Header>
            <div>Grabbing a ref to the Provider component and sharing it with a class.</div>
            <CodeBlock>{ setupCode }</CodeBlock>
        </div>
        <div className="snippet-box">
            <Header>debug-monitor.js</Header>
            <div>Using a simple class instance to montor and report changes in the store in realtime.</div>
            <CodeBlock>{ externalAccessCode }</CodeBlock>
        </div>
        <Alert title="Pro Tips">
            <p>
                Store references are simply ReactJS references to the Eagle Eye Provider component. Therefore, after <code>unmounting</code> the <code>Provider</code> component, the <code>storeRef.current</code> becomes empty. So therefore:
                <ol>
                    <li>if the need exists to maintain the store beyond the life of the Provider, the keep a reference to the state snapshot returned by the last valid <code>storeRef.current.getState()</code> call.</li>
                    <li>be sure to unsubscribe all external subscribers attached to the <code>Provider</code>'s store reference, at or prior to the <code>unmount</code> phase of the <code>Provider</code> component.</li>
                </ol>
            </p>
            <p>
                State references are always snapshots of the state at the time of access. In essence, the state returned by <code>storeRef.current.getState()</code> are not affected by subsequent updates to the store's state. Any updates to this acquired state never affects the context's state. So therefore, the <strong>4</strong> considerations: 
                <ol>
                    <li>use only the <code>storeRef.current.setState()</code> to update the context internal store.</li>
                    <li><code>storeRef.current.getState()</code> must used to obtain the current state value.</li>
                    <li>use your <code>storeRef.current.subscribe()</code> to manually subscribe to state changes and refresh your current state value in realtime.</li>
                    <li>use the <code>unsubscriber</code> returned by your storeRef's <code>subscribe()</code> to unsubscribe from the store when needed</li>
                </ol>
            </p>
        </Alert>
    </article>
);

export default ExternalAccessPage;