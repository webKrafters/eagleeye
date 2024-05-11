import React from 'react';

import Anchor from '../../../partials/anchor';

const ConceptClientPage : React.FC<{className? : string}> = ({ className }) => (
    <article className={ `concept-client-page ${ className }` }>
        <h1>Client</h1>
        <div>
            <h3>What is a client?</h3>
            <div>
                <p>
                    A client is any component consuming the observable context. A client consumes the context by:
                    <ul>
                        <li>Either using the Eagle Eye <Anchor to="/api#usecontext">useContext</Anchor> hook</li>
                        <li>Or embedding itself within the connector returned by the Eagle Eye <Anchor to="/api#connect">connect</Anchor> function</li>
                    </ul>
                </p>
                <p>
                    Please see examples in:
                    <ol>
                        <li><Anchor to="/getting-started#usecontext-usage">Consuming context { '(' }hook with memo method{ ')' }</Anchor></li>
                        <li><Anchor to="/getting-started#connect-usage">Consuming context { '(' }hoc method{ ')' }</Anchor></li>
                    </ol>
                    respectively.
                </p>
            </div>
        </div>
    </article>
);

export default ConceptClientPage;