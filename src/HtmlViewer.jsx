import "./ui/HtmlViewer.css";
import { Component, createElement } from "react";
import { HtmlViewerComponent } from "./components/HtmlViewerComponent";

export class HtmlViewer extends Component {
    render() {
        const { htmlSourceType, htmlAttribute, htmlTextTemplate } = this.props;
        let htmlString = "";

        if (htmlSourceType === "attribute") {
            if (htmlAttribute && htmlAttribute.status === "available") {
                htmlString = htmlAttribute.value;
            }
        } else {
            if (htmlTextTemplate && htmlTextTemplate.status === "available") {
                htmlString = htmlTextTemplate.value;
            }
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
