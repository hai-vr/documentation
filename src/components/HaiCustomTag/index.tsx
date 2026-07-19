import React from 'react';
import clsx from 'clsx';
import styles from '../HaiTag/styles.module.css';

interface Props {
    children: React.ReactNode;
}

export function HaiCustomTag({ children }: Props): JSX.Element {
    return (
        <span>
            <div className={clsx(styles.hai_tag, styles.hai_tag_custom)}>
                {children}
            </div>
        </span>
    );
}
