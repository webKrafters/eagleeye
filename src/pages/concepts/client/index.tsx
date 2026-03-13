import React from 'react';

import Anchor from '../../../partials/anchor';
import Name from '../../../partials/name';
import Paragraph from '../../../partials/paragraph';

const ConceptClientPage : React.FC<{className? : string}> = ({ className }) => (
    <article className={ `concept-client-page ${ className }` }>
        <h1>Client</h1>
        <div>
            <h3>What is a client?</h3>
            <div>
                <Paragraph>
                    A client is any entity observing the <Name /> instance.
                </Paragraph>
                <Paragraph>
                    A client observes an instance by invoking its <Name /> <Anchor to="/api#streaming">stream</Anchor> function property.
                </Paragraph>
                <Paragraph>
                    Please see an example of a client joining a stream <Anchor to="/getting-started#streaming">here.{ ')' }</Anchor>
                </Paragraph>
            </div>
        </div>
    </article>
);

export default ConceptClientPage;
