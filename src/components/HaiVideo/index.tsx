import React from 'react';

interface Props {
    cdn: string;
    src: string;
    autoWidth: boolean;
    halfWidth: boolean;
    sound: boolean;
    loop: boolean;
}

const prefix = "https://large.docs.cdn.hai-vr.dev";
const docsUrl = prefix + "/assets/docs/";

export function HaiVideo(props: Props): JSX.Element {
    const realSrc = props.cdn != null ? (prefix + props.cdn) : (docsUrl + props.src.substring(props.src.lastIndexOf("/") + 1));
    return (
        <video controls muted={!props.sound} width={props.autoWidth ? "auto" : (props.halfWidth ? "408" : "816")} loop={props.loop}>
            <source
                src={realSrc} />
                {/*src={props.cdn ?? require(props.src).default} />*/}
        </video>
    );
}