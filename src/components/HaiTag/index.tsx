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
    requiresVRM: boolean;
    requiresSteamVR: boolean;
    requiresChilloutVR: boolean;
    compatibleWithVSFAvatar: boolean;
    compatibleWithVSeeFace: boolean;
    compatibleWithVNyan: boolean;
    compatibleWithWarudo: boolean;
    compatibleWithBeatSaber: boolean;
    notCompatibleWithGltf: boolean;
    requiresWarudo: boolean;
    notVRChat: boolean;
    isUniversal: boolean;
    short: boolean;
}

export function HaiTag({
                           requiresVRChat,
                           isUniversal,
                           notVRChat,
                           requiresResonite,
                           requiresSteamVR,
                           requiresChilloutVR,
                           requiresVRM,
                           compatibleWithVSFAvatar,
                           compatibleWithVSeeFace,
                           compatibleWithWarudo,
                           compatibleWithBeatSaber,
                           requiresWarudo,
                           notCompatibleWithGltf,
                           compatibleWithVNyan,
                            short
}: Props): JSX.Element {
    let div = short ? <></> : <>Compatible with </>;
    let div2 = short ? <></> : <>Requires </>;
    return (
        <span>
                {requiresVRChat ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_vrchat)}>💬 {div2}VRChat</div> : ''}
                {requiresResonite ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_resonite)}>⚡ {div2}Resonite</div> : ''}
                {requiresVRM ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_vrm)}>📹 {div2}VRM</div> : ''}
                {requiresSteamVR ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_steamvr)}>{div2}SteamVR</div> : ''}
                {requiresChilloutVR ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_chilloutvr)}>🌆 {div2}ChilloutVR</div> : ''}
                {compatibleWithVSFAvatar ? <div
                    className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_vsfavatar)}>{div}VSFAvatar</div> : ''}
                {compatibleWithVSeeFace ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_vsfavatar)}>{div}VSeeFace</div> : ''}
                {compatibleWithVNyan ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_vnyan)}>{div}VNyan</div> : ''}
                {compatibleWithWarudo ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_warudo)}>{div}Warudo</div> : ''}
                {compatibleWithBeatSaber ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_beatsaber)}>{div}Beat Saber</div> : ''}
                {notCompatibleWithGltf ? <div className={clsx(styles.hai_tag, styles.hai_tag_not_compatible_with_gltf)}>🚫 Not compatible with GLB/GLTF format</div> : ''}
                {requiresWarudo ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_warudo)}>📹 Requires Warudo</div> : ''}
                {isUniversal ? <div className={clsx(styles.hai_tag, styles.hai_tag_universal)}>🌊 Any Platform</div> : ''}
                {notVRChat ? <div className={clsx(styles.hai_tag, styles.hai_tag_universal)}>🌊 Any Platform, except VRChat</div> : ''}
        </span>
    );
}