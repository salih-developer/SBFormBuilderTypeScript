import { BaseComponent } from "./BaseComponent.js";
export class LTextboxComponent extends BaseComponent {
    constructor(id) {
        super(id);
    }
    Create() {
        var control = document.createElement('div');
        control.setAttribute("iscomponent", String(this.isComponent));
        if (!this.isComponent) {
            let toolbar = super.CreateToolBar();
            control.appendChild(toolbar);
            control.appendChild(this.CreateLabel());
            control.appendChild(this.CreateTextbox());
        }
        else {
            control.appendChild(super.CreateSpan("fa fa-terminal", "Text Field"));
        }
        control.setAttribute("compName", "LTextbox");
        control.setAttribute("disabled", "");
        control.setAttribute("style", "background-color:#bd213014; margin: 5PX;");
        control.draggable = this.draggable;
        control.ondragstart = x => {
            const element = x.target;
            x.dataTransfer.effectAllowed = "move";
            x.dataTransfer.setData("text", element.id);
        };
        super.Create(control);
        return control;
    }
    CreateLabel() {
        var label = document.createElement("label");
        label.textContent = "Label Textbox";
        label.setAttribute("style", "margin-right: 26px");
        return label;
    }
    CreateTextbox() {
        var textbox = document.createElement("input");
        textbox.setAttribute("type", "text");
        textbox.setAttribute("disabled", "");
        return textbox;
    }
}
