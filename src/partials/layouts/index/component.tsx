import React, { useCallback, useState } from 'react';

import isHandheldWidth from '../../../util/is-handheld-portrait';

import SiteBody from '../../site-body';
import SiteFooting from '../../site-footing';
import SiteHeading from '../../site-heading';

import '../style.scss';
import './style.scss';

/** `Props.children` expects page body contents */
export interface Props { children? : React.ReactNode };

const Layout : React.FC<Props> = ({ children }) => {
  const [ isSiderCollapsed, setCollapsedSiderFlag ] = useState( isHandheldWidth );
  const toggleSiderSwitch = useCallback(() => setCollapsedSiderFlag( f => !f ), []);
  return (
    <div className="index-layout">
      <SiteHeading
        isSiderCollapsed={ isSiderCollapsed }
        onToggleSider={ toggleSiderSwitch }
      />
      <SiteBody 
        isSiderCollapsed={ isSiderCollapsed }
        onSiderVisibilityChange={ setCollapsedSiderFlag }
      >
        { children }
      </SiteBody>
      <SiteFooting />
    </div>
  );
};

export default Layout;