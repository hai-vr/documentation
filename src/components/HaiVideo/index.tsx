import React from 'react';

interface Props {
    cdn: string;
    src: string;
    autoWidth: boolean;
    halfWidth: boolean;
    sound: boolean;
}

const prefix = "https://downscale.srv.hai-vr.dev";
const docsUrl = prefix + "/assets/docs/";

export function HaiVideo(props: Props): JSX.Element {
    const realSrc = props.cdn != null ? (prefix + props.cdn) : (docsUrl + props.src.substring(props.src.lastIndexOf("/") + 1));
    return (
        <video controls muted={!props.sound} width={props.autoWidth ? "auto" : (props.halfWidth ? "408" : "816")}>
            <source
                src={realSrc} />
                {/*src={props.cdn ?? require(props.src).default} />*/}
        </video>
    );
}