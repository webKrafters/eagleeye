import type { GatsbyLinkProps } from 'gatsby';

export interface Props<TState extends {} = {}> extends React.PropsWithoutRef<GatsbyLinkProps<TState>>{
    hideIcon?: boolean
};