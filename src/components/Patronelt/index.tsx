// @ts-ignore
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
    k: number;
    ias: number;
    sp: number;
    children: JSX.Element;
}

export function Patronelt({k, ias, sp, children}: Props): JSX.Element {
    return (
        <div className={clsx('card',
            styles.element,
            (k == -1 ? styles.andmore : undefined),
            (sp == 1 ? styles.sp : undefined),
            (k == 10 ? styles.k10 : undefined),
            (k == 5 ? styles.k5 : undefined),
            (k == 3 ? styles.k3 : undefined),
            (k == 2 ? styles.k2 : undefined),
            (k == 0 ? styles.k0 : undefined),
            (ias == 1 ? styles.ias : undefined),
            (ias == 1 && sp == 1 ? styles.spias : undefined),
            (ias != 1 && sp == 1 ? styles.spnoias : undefined),
            )}>
            {k == 10 ? '☀️ ' : ''}{k == 5 ? '🌟 ' : ''}{k == 2 || k == 3 ? '⭐ ' : ''}{k == 0 && ias == 1 ? '' : ''}{children}
        </div>
    );
}