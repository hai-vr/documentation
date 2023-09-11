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
import Translate from "@docusaurus/core/lib/client/exports/Translate";
import Link from '@docusaurus/Link';

interface Props {
    name: string;
    image: string;
    url: string;
    urlTS: string;
    children: JSX.Element;
}

export function PlaygroundCard({name, image, url, urlTS, children}: Props): JSX.Element {
    return (
        <div className="col col--4 margin-bottom--lg">
            <div className={clsx('card')}>
                <div className={clsx('card__image')}>
                    <Link to={url}>
                        <img src={image} />
                    </Link>
                </div>
                <div className="card__body">
                    <h3>{name}</h3>
                    <p>{children}</p>
                </div>
                <div className="card__footer">
                    <div style={{textAlign: 'center'}}>
                        <b>
                            <Translate id="playground.tryItButton">Try it now!</Translate>
                        </b>
                    </div>
                    <div className="button-group button-group--block">
                        <Link className="button button--secondary" to={url}>
                            JavaScript
                        </Link>
                        <Link className="button button--secondary" to={urlTS}>
                            TypeScript
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}