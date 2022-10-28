import { Component, createElement } from "react";
import { HtmlViewerComponent } from "./components/HtmlViewerComponent";

export class preview extends Component {
    render() {
        const { htmlSourceType, htmlAttribute, htmlTextTemplate } = this.props;
        let htmlString = "";

        if (htmlSourceType === "attribute") {
            htmlString = `[${htmlAttribute}]`;
        } else {
            htmlString = `[${htmlTextTemplate}]`;
        }

        return (
            <HtmlViewerComponent
                htmlString={htmlString}
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
            />
        );
    }
}

export function getPreviewCss() {
    return require("./ui/HtmlViewer.css");
}
