import type { Props } from '../anchor';

import React from 'react';

import Anchor from '../anchor';

import './style.scss';

const createIndentedAnchor = ( indentClassNum : 1|2|3|4 ) : React.FC<Props> => ({ className, ...props }) => (
  <Anchor className={ `indent${ indentClassNum }${ className ? ` ${ className }` : '' }` } { ...props } />
);

const AnchorIndent1 = createIndentedAnchor( 1 );
const AnchorIndent2 = createIndentedAnchor( 2 );
const AnchorIndent3 = createIndentedAnchor( 3 );
const AnchorIndent4 = createIndentedAnchor( 4 );

const Component : React.FC = () => (
	<nav className="site-nav">
		<Anchor to="/">Introduction</Anchor>
		<Anchor className="group-link" to="/getting-started">Getting Started</Anchor>
		<AnchorIndent1 to="/getting-started#create-context-usage">Creating context</AnchorIndent1>
		<AnchorIndent1 to="/getting-started#provider-usage">Setting up the Provider</AnchorIndent1>
		<AnchorIndent1 to="/getting-started#connect-usage">Consuming context { '(' }hoc method{ ')' }</AnchorIndent1>
		<AnchorIndent1 to="/getting-started#usecontext-usage">Consuming context { '(' }hook with memo method{ ')' }</AnchorIndent1>
		<Anchor to="/external-access">External Access</Anchor>
		<Anchor className="group-link" to="/api">API</Anchor>
		<AnchorIndent1 to="/api#connect">Connect HoC</AnchorIndent1>
		<AnchorIndent1 to="/api#create-context">CreateContext Function</AnchorIndent1>
		<AnchorIndent1 to="/api#usage-error">UsageError Exception</AnchorIndent1>
		<AnchorIndent1 to="/api#usecontext">UseContext Hook</AnchorIndent1>
		<Anchor className="group-link" to="/concepts">Concepts</Anchor>
		<AnchorIndent1 to="/concepts/client">Client</AnchorIndent1>
		<AnchorIndent1 to="/concepts/prehooks">Prehooks</AnchorIndent1>
		<AnchorIndent1 className="group-link" to="/concepts/property-path">Property Path</AnchorIndent1>
		<AnchorIndent2 to="/concepts/property-path#fullstate-selectorkey"><b>@@STATE</b></AnchorIndent2>
		<AnchorIndent1 to="/concepts/provider">Provider</AnchorIndent1>
		<AnchorIndent1 to="/concepts/selector-map">Selector Map</AnchorIndent1>
		<AnchorIndent1 to="/concepts/storage">Storage</AnchorIndent1>
		<AnchorIndent1 className="group-link" to="/concepts/store">Store</AnchorIndent1>
		<AnchorIndent2 to="/concepts/store/resetstate">Reset State</AnchorIndent2>
		<AnchorIndent2 className="group-link" to="/concepts/store/setstate">Set State</AnchorIndent2>
		<AnchorIndent3 to="/concepts/store/setstate#batched-update">Batched Update</AnchorIndent3>
		<AnchorIndent3 to="/concepts/store/setstate#indexing">Array Indexing</AnchorIndent3>
		<AnchorIndent3 className="group-link" to="/concepts/store/setstate/tags">Using Tag Commands</AnchorIndent3>
		<AnchorIndent4 to="/concepts/store/setstate/tags/clear-usage"><b>@@CLEAR</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/concepts/store/setstate/tags/delete-usage"><b>@@DELETE</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/concepts/store/setstate/tags/move-usage"><b>@@MOVE</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/concepts/store/setstate/tags/push-usage"><b>@@PUSH</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/concepts/store/setstate/tags/replace-usage"><b>@@REPLACE</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/concepts/store/setstate/tags/set-usage"><b>@@SET</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/concepts/store/setstate/tags/splice-usage"><b>@@SPLICE</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/concepts/store/setstate/tags/order-of-operations">Combination Usage Example</AnchorIndent4>
		<Anchor className="group-link" to="/history/features">What's Changed?</Anchor>
	</nav>
);

Component.displayName = 'Site.Nav';

export default Component;