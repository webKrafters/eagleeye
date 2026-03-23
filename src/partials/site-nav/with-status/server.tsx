import type { Props } from '../../anchor';

import React, { useContext, useMemo } from 'react';

import { ValueCtx as PageCtxValue } from '../../../contexts/page';

const WithStatus : React.FC<Props> = typeof window !== 'undefined'
    ? () => ( <div className="error-link">Invalid server nav link.</div> )
    : props => {
        const { location: { href = '' } = {} } = useContext( PageCtxValue );
        const routePattern = useMemo(() => new RegExp( props.to + '\/?$' ), [ props.to ]);
        const active = useMemo(() => routePattern.test( href ), [ href, routePattern ]);
        return (
            <div { ...( active ? { className: 'active' } : {} ) }>
                { props.children as React.ReactNode }
            </div>
        );
    };

WithStatus.displayName = 'Site.Nav.WithStatus.Server';

export default WithStatus;
