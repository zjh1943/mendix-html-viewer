import { Component, createElement } from "react";

export function HtmlViewerComponent({ htmlString, style, className, tabIndex }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} style={style} className={className} tabIndex={tabIndex} />
    );
}
