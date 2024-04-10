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
import styles from './styles.module.css';

interface Props {
    requiresVRChat: boolean;
    requiresResonite: boolean;
    requiresSteamVR: boolean;
    notVRChat: boolean;
    isUniversal: boolean;
}

export function HaiTag({requiresVRChat, isUniversal, notVRChat, requiresResonite, requiresSteamVR}: Props): JSX.Element {
    return (
        <span>
                {requiresVRChat ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_vrchat)}>💬 Requires VRChat</div> : ''}
                {requiresResonite ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_resonite)}>⚡ Requires Resonite</div> : ''}
                {requiresSteamVR ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_steamvr)}>Requires SteamVR</div> : ''}
                {isUniversal ? <div className={clsx(styles.hai_tag, styles.hai_tag_universal)}>🌊 Any Platform</div> : ''}
                {notVRChat ? <div className={clsx(styles.hai_tag, styles.hai_tag_universal)}>🌊 Any Platform, except VRChat</div> : ''}
        </span>
    );
}