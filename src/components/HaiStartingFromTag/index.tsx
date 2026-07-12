/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Hai: Comes from this https://github.com/facebook/docusaurus/discussions/7708
// https://github.com/facebook/docusaurus/blob/main/website/docs/playground.mdx
// https://github.com/facebook/docusaurus/blob/main/website/src/components/Playground/index.tsx
// I'm not a bloody frontend dev, I make UIs in ImGui for fucks sake

/* eslint-disable global-require */

// @ts-ignore
import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from '/src/components/HaiTag/styles.module.css';

interface Props {
    version: string,
    small: boolean
}

export function HaiStartingFromTag({version, small = false}: Props): JSX.Element {
    return (
        <span>
                <div className={clsx(styles.hai_tag, styles.hai_tag_startingfrom, small && styles.hai_tag_small)}><Translate id="hai.starting_from">Starting from </Translate><strong><span
                    className="notranslate">{version}</span></strong></div>
        </span>
    );
}