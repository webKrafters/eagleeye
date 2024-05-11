import React, {
    Children,
    forwardRef,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from 'react';

import { ValueCtx } from '../../page-context';

import hasHandheldWidth from '../../util/is-handheld-portrait';

import SiteFaqs from '../site-faqs';
import SiteNav from '../site-nav';
import SiteTags from '../site-tags';

import './style.scss';

export interface Props {
    children?: React.ReactNode,
    isSiderCollapsed?: boolean,
    onSiderVisibilityChange: ( isCollapsed: boolean ) => void
};

interface TargetElement extends EventTarget { tagName: string }
type EventHandler = (this: HTMLElement, ev: MouseEvent) => any

const Sider : React.ForwardRefExoticComponent<
    React.PropsWithoutRef<{ isCollapsible?: boolean }> &
    React.RefAttributes<Element>
> = forwardRef(({ isCollapsible = true }, ref ) => {
    useLayoutEffect(() => {
        ( ref as React.RefObject<HTMLElement> ).current?.classList[ isCollapsible ? 'remove' : 'add' ]( 'closed' );
    }, [ isCollapsible ]);
    return (
        <section
            className={ `site-body-sider${ isCollapsible ? '' : ' closed' }` }
            ref={ ref as React.LegacyRef<HTMLElement> }
        >
            <SiteNav />
        </section>
    );
});

Sider.displayName = 'Site.Body.Sider';

const NoSider : React.FC<Pick<Props, 'children'>> = ({ children }) => {
    const page = useMemo(() => Children.map(
        children as React.ReactHTMLElement<any>,
        c => {
            try {
                return React.cloneElement( c, {
                    className: `page-main${
                        c.props.className?.length
                            ? ` ${ c.props.className }`
                            : ''
                    }`
                } );
            } catch( e ) { return c }
        }
    ), [ children ]);
    return (
        <main>
            <SiteTags />
            { page }
        </main>
    );
};
NoSider.displayName = 'Site.Body.NoSider';

const WithSider : React.FC<Props> = ({
    children, isSiderCollapsed, onSiderVisibilityChange,
    
}) => {
    const siderRef = useRef<Element>( null );
    const [ isHandheld, setHandheldFlag ] = useState<boolean>(() => isSiderCollapsed ?? hasHandheldWidth());
    useEffect(() => {
        let timer : NodeJS.Timeout | void;
        const collapseSider = () => {
            timer && clearTimeout( timer );
            timer = setTimeout(() => {
                setHandheldFlag( hasHandheldWidth );
                timer = undefined;
            }, 500 );
        };
        window.addEventListener( 'resize', collapseSider );
        return () => window.removeEventListener( 'resize', collapseSider );
    }, []);
    useEffect(() => onSiderVisibilityChange( isHandheld ), [ isHandheld ]);
    useLayoutEffect(() => {
        if( !isHandheld ) { return }
        const notifyOnHandHeldNavigate : EventHandler = e => {
            ( e.currentTarget as TargetElement ).tagName === 'NAV' &&
            onSiderVisibilityChange( true )
        };
        const siteNav = siderRef.current?.querySelector( ':scope .site-nav' ) as HTMLElement;
        siteNav.addEventListener( 'click', notifyOnHandHeldNavigate );
        return () => siteNav.removeEventListener( 'click', notifyOnHandHeldNavigate );
    }, [ isHandheld, onSiderVisibilityChange ]);
    return (
        <>
            <Sider isCollapsible={ !( isSiderCollapsed ?? isHandheld ) } ref={ siderRef } />
            <NoSider>{ children }</NoSider>
            <SiteFaqs />
        </>
    );
};
WithSider.displayName = 'Site.Body.WithSider';

const Component : React.FC<Props> = ({ children, ...props }) => (
    <section className="site-body">
        { !useContext( ValueCtx ).isNoSiderPage
            ? ( <WithSider { ...props }>{ children }</WithSider> )
            : ( <NoSider>{ children }</NoSider> )
        }
    </section>
);

Component.displayName = 'Site.Body';

export default Component;