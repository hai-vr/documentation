/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-ignore
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {HaiTag} from "../HaiTag";

interface Props {
    children: JSX.Element;
}

export function HaiTags({children}: Props): JSX.Element {
    return (
        <div>
            <p>{children}</p>
        </div>
    );
}