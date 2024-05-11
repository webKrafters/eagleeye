import React from 'react';

import Anchor from '../../../partials/anchor';

const ConceptStoreResetStatePage : React.FC<{className? : string}> = ({ className }) => (
    <article className={ `concept-store-resetstate-page ${ className }` }>
        <h1><code>store.resetState</code> Usage</h1>
        <div>
            <h3>What does the store resetState method do?</h3>
            <ul>
                <li>Resets slices of state to their initial state values as desired.</li>
                <li>Accepts an array of property paths referencing the desired slices of state to reset.</li>
                <li>Performs a total state reset when <Anchor to="/concepts/property-path#fullstate-selectorkey"><code>@@STATE</code></Anchor> is present in the property paths array.</li>
                <li>Resets state slices referenced by the calling client's <Anchor to="/concepts/selector-map">selector map</Anchor> when invoked with 0 arguments.</li>
                <li>Performs a total state reset when invoked with 0 arguments and <Anchor to="/concepts/property-path#fullstate-selectorkey"><code>@@STATE</code></Anchor> is present in the calling client's <Anchor to="/concepts/selector-map">selector map</Anchor>.</li>
                <li>Performs no state reset when a client with no <Anchor to="/concepts/selector-map">selector map</Anchor> invokes this method with 0 arguments.</li>
            </ul>
        </div>
    </article>
);

export default ConceptStoreResetStatePage;