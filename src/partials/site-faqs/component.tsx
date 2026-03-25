import React from 'react';

import Anchor from '../anchor';
import Name from '../name';

import './style.scss';

const Component : React.FC = () => (
    <nav className="site-faqs">
        <Anchor to="/getting-started#install">Installation</Anchor>
        <Anchor to="/global-access">Can I observe the <Name /> state manager from anywhere?</Anchor>
        <Anchor to="/concepts/channel/setstate">Is it true that the state can never be mutated?</Anchor>
		<Anchor to="/global-access#external-apis">How to observe state globally.</Anchor>
        <Anchor to="/concepts/property-path#fullstate-selectorkey">About the <strong><code>@@STATE</code></strong> keyword.</Anchor>
        <Anchor to="/concepts/channel/setstate#indexing">Can I use negative array indexing?</Anchor>
        <Anchor to="/getting-started#streaming">How to react to state changes in real-time.</Anchor>
        <Anchor to="/concepts/channel/setstate">How to set state.</Anchor>
		<Anchor to="/concepts/channel/setstate">Why not use the spread operator for incoming state?</Anchor>
		<Anchor to="/concepts/channel/setstate#indexing">How do I update my array exactly at a specific index?</Anchor>
        <Anchor to="/concepts/channel/setstate/tags">What is the use of <strong>setstate @@ tags</strong>?</Anchor>
        <Anchor to="/concepts/channel/setstate#batched-update">How to set multiple states sequentially.</Anchor>
    </nav>
);

export default Component;
