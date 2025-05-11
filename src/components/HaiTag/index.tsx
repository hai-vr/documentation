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
    requiresBasis: boolean;
    short: boolean;
    supporter: boolean;
    compatibleWithPhotoshop: boolean;
    compatibleWithGIMP: boolean;
}

export function HaiTag({
                           requiresVRChat,
                           isUniversal,
                           requiresBasis,
                           notVRChat,
                           requiresResonite,
                           requiresSteamVR,
                           requiresChilloutVR,
                           requiresVRM,
                           compatibleWithVSFAvatar,
                           compatibleWithVSeeFace,
                           compatibleWithWarudo,
                           compatibleWithBeatSaber,
                           compatibleWithPhotoshop,
                           compatibleWithGIMP,
                           requiresWarudo,
                           notCompatibleWithGltf,
                           compatibleWithVNyan,
                           short,
                           supporter
}: Props): JSX.Element {
    let div = short ? <></> : <>Compatible with </>;
    let div2 = short ? <></> : <>Requires </>;
    return (
        <span>
                {requiresVRChat ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_vrchat)}>💬 {div2}<span className="notranslate">VRChat</span></div> : ''}
                {requiresResonite ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_resonite)}>⚡ {div2}<span className="notranslate">Resonite</span></div> : ''}
                {requiresBasis ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_basis)}>🔺 {div2}<span className="notranslate">Basis</span></div> : ''}
                {requiresVRM ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_vrm)}>📹 {div2}<span className="notranslate">VRM</span></div> : ''}
                {requiresSteamVR ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_steamvr)}>{div2}<span className="notranslate">SteamVR</span></div> : ''}
                {requiresChilloutVR ? <div className={clsx(styles.hai_tag, styles.hai_tag_requires_chilloutvr)}>🌆 {div2}<span className="notranslate">ChilloutVR</span></div> : ''}
                {compatibleWithVSFAvatar ? <div
                    className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_vsfavatar)}>{div}<span className="notranslate">VSFAvatar</span></div> : ''}
                {compatibleWithVSeeFace ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_vsfavatar)}>{div}<span className="notranslate">VSeeFace</span></div> : ''}
                {compatibleWithVNyan ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_vnyan)}>{div}<span className="notranslate">VNyan</span></div> : ''}
                {compatibleWithWarudo ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_warudo)}>{div}<span className="notranslate">Warudo</span></div> : ''}
                {compatibleWithBeatSaber ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_beatsaber)}>{div}<span className="notranslate">Beat Saber</span></div> : ''}
                {notCompatibleWithGltf ? <div className={clsx(styles.hai_tag, styles.hai_tag_not_compatible_with_gltf)}>🚫 Not compatible with GLB/GLTF format</div> : ''}
                {requiresWarudo ? <div className={clsx(styles.hai_tag, styles.hai_tag_compatible_with_warudo)}>📹 {div2}<span className="notranslate">Warudo</span></div> : ''}
                {isUniversal ? <div className={clsx(styles.hai_tag, styles.hai_tag_universal)}>🌊 Any Platform</div> : ''}
                {notVRChat ? <div className={clsx(styles.hai_tag, styles.hai_tag_universal)}>🌊 Any Platform, except <span className="notranslate">VRChat</span></div> : ''}
            {supporter ? <div className={clsx(styles.hai_tag, styles.hai_tag_supporter)}>⭐ All Supporter tiers <a href="https://www.patreon.com/vr_hai">(5€+)</a></div> : ''}
            {compatibleWithPhotoshop ? <div className={clsx(styles.hai_tag, styles.hai_tag_misc)}>{div}<span className="notranslate">Photoshop 2024</span></div> : ''}
            {compatibleWithGIMP ? <div className={clsx(styles.hai_tag, styles.hai_tag_misc)}>{div}<span className="notranslate">GIMP</span></div> : ''}
        </span>
    );
}