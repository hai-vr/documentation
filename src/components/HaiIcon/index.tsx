// @ts-ignore
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import BasisLogo from './basis_logo.png';
import JpIcon from './jp.svg';
import UkIcon from './uk.svg';
import UniversalIcon from './universal.png';
import ChatBubble from './chatbubble.png';
import ResoniteLogo from './resonite_logo.png';
import GearIcon from './gear.png';
import SparklesIcon from './sparkles.png';
import StarIcon from './star.png';
import StarburstIcon from './starburst.png';
import SunIcon from './sun.png';

const ICON_ASSETS: Record<string, any> = {
    jp: JpIcon,
    uk: UkIcon,
    universal: UniversalIcon,
    chatbubble: ChatBubble,
    basis: BasisLogo,
    resonite: ResoniteLogo,
    gear: GearIcon,
    sparkles: SparklesIcon,
    star: StarIcon,
    starburst: StarburstIcon,
    sun: SunIcon,
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
        return (
            <span className={clsx(styles.hai_icon)} role="img" aria-label={name}>
                <Svg />
            </span>
        );
    }

    return (
        <span
            className={clsx(styles.hai_icon)}
            role="img"
            aria-label={name}
            style={{ backgroundImage: `url(${src})` }}
        />
    );
}
