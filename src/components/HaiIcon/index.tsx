// @ts-ignore
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import BasisIcon from './basis.svg';
import JpIcon from './jp.svg';
import UkIcon from './uk.svg';
import UniversalIcon from './universal.png';

const ICON_ASSETS: Record<string, any> = {
    basis: BasisIcon,
    jp: JpIcon,
    uk: UkIcon,
    universal: UniversalIcon,
};

interface Props {
    name: string;
}

export function HaiIcon({name}: Props): JSX.Element {
    const src = ICON_ASSETS[name];
    if (!src) {
        return <span>[{name}]</span>;
    }

    if (typeof src === 'function' || (typeof src === 'object' && src !== null && src.$$typeof)) {
        const Svg = src;
        return <Svg className={clsx(styles.hai_icon)} role="img" />;
    }

    return (
        <img src={src} alt="" className={clsx(styles.hai_icon)}/>
    );
}
