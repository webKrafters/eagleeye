import React from 'react';

import Anchor, { Props as AnchorProps } from '../../../../../partials/anchor';

const TagLink : React.FC<AnchorProps> = ({ to, ...props }) => (
    <Anchor
        style={{
            fontStyle: 'italic',
            fontWeight: 500,
            marginRight: 6
        }}
        to={ `/api/method/set/tags/${ to }-usage` }
        { ...props }
    />
);

const SetMethodApiTagsPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-tags-page ${ className }` }>
        <h1>Set Method Tags Commands</h1>
        <p>By default, the <strong><Anchor to="/api#consuer">consumer's</Anchor></strong> <code>set(...)</code> method recursively merges new changes into current state.</p>
        <p>To overwrite current Immutable data slices with new values, <strong>7</strong> tag commands have been provided:
            <ol>
                <li><TagLink to="clear">@@CLEAR:</TagLink> sets property to its corresponding empty value</li>
                <li><TagLink to="delete">@@DELETE:</TagLink> removes plain object properties and array items</li>
                <li><TagLink to="move">@@MOVE:</TagLink> moves array elements</li>
                <li><TagLink to="push">@@PUSH:</TagLink> pushes new items into an array</li>
                <li><TagLink to="replace">@@REPLACE:</TagLink> replaces property values</li>
                <li><TagLink to="set">@@SET:</TagLink> sets property values</li>
                <li><TagLink to="splice">@@SPLICE:</TagLink> splices array items</li>
            </ol>
        </p>
    </article>
);

export default SetMethodApiTagsPage;
