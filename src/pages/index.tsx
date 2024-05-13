import type { HeadFC } from 'gatsby';

import React from 'react';

import { graphql } from 'gatsby';

import Anchor from '../partials/anchor';
import CodeBlock from '../partials/code-block';
import Paragraph from '../partials/paragraph';

import '../partials/contents/index-page/style.scss';

type Props = {
	className? : string,
	data : {
        site : {
            siteMetadata : {
                url : {
					demo : string,
					npm : string
				}
            }
        }
    }
}

const IndexPage : React.FC<Props> = ({ className, data }) => (
    <article className={ `index-page ${ className }` }>
    	<h1>Welcome to Eagle Eye JS!</h1>
      	<Paragraph>An intuitive reactive context based React state manager. </Paragraph>
		<div>
			<label>Official:{ ' ' }
				<Anchor to={ data.site.siteMetadata.url.npm }>
					React-Observable-Context
				</Anchor>
			</label>
		</div>
		<div className="installation">
			<header>Installation:</header>
			<label>
				<strong>Main:</strong>
				<CodeBlock isInline>
					npm install --save react-eagleeye
				</CodeBlock>
			</label>
			<label>
				<strong>Alternate:</strong>
				<CodeBlock isInline>
					npm install --save @webkrafters/react-observable-context
				</CodeBlock>
			</label>
		</div>
    	<div>
			<label>Play with a demo app here on:{ ' ' }
				<Anchor to={ data.site.siteMetadata.url.demo }>
					Code Sandbox
				</Anchor>
			</label>
		</div>
    	<div>
			<label>License: <span>MIT</span></label>
		</div>
		<h2>Eagle Eye. Why now?</h2>
		<ul>
			<li>Auto-immutable update-friendly context. See <Anchor to="/concepts/store/setstate"><code>store.setState</code></Anchor>.</li>
			<li>A context bearing an observable consumer <Anchor to="/concepts/store">store</Anchor>.</li>
			<li>Recognizes <strong>negative array indexing</strong>. Please see <Anchor to="/concepts/property-path">Property Path</Anchor> and <code>store.setState</code> <Anchor to="/concepts/store/setstate#indexing">Indexing</Anchor>.</li>
			<li>Only re-renders subscribing components (<Anchor to="/concepts/client">clients</Anchor>) on context state changes.</li>
			<li>Subscribing component decides which context state properties' changes to trigger its update.</li>
		</ul>
		<div>May see features history at <Anchor to="/history/features">What's Changed?</Anchor></div>
	</article>
);

export default IndexPage;

export const Head : HeadFC = () => (
	<>
		<title>Eagle Eye JS</title>
		<meta
			content="Welcome to Eagle Eye context!"
			name="description"
		/>
	</>
);

export const query = graphql`
    query IntroTitle {
        site {
            siteMetadata {
                url {
					demo
					npm
				}
            }
        }
    }
`;