import type { NamedExoticComponent, ReactNode } from 'react';

import React, { forwardRef, useEffect, useState } from 'react';

import { Select } from 'antd';

import './style.scss';

interface Content {
	label : ReactNode;
	value : ReactNode;
}

interface IProps {
	currentIndex? : number;
	options : Array<Content>;
}

export type Props = Omit<JSX.IntrinsicElements[ "div" ], "children"> & IProps

const SelectTab : NamedExoticComponent<Props> = forwardRef<
	HTMLDivElement, Props
>(({ className, options, currentIndex = 0, ...props }, ref ) => {
	const [ content, setContent ] = useState( options[ currentIndex ] );
	useEffect(() => setContent( options[ currentIndex ] ), [ options, currentIndex ]);
	return (
		<div
			role="tabpanel"
			{ ...props }
			className={ `select-tab${ className ? ` ${ className }` : '' }` }
			ref={ ref }
		>
			<Select
				labelInValue
				onSelect={ setContent }
				options={ options }
				popupClassName="select-tab__dropdown"
				style={{ width: 132 }}
				value={ content }
			/>
			<div className="content">
				{ content.value }
			</div>
		</div>
	);
});

SelectTab.displayName = 'SelectTab';

export default SelectTab;
