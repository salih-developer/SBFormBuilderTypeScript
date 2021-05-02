import { BaseComponent } from "./BaseComponent.js";
export class LSelectboxComponent extends BaseComponent {
    constructor(id) {
        id = "LSelectbox";
        super(id);
    }
    Create() {
        var control = document.createElement('div');
        control.setAttribute("iscomponent", String(this.isComponent));
        control.appendChild(this.CreateLabel());
        control.appendChild(this.CreateTextbox());
        control.setAttribute("compName", "LSelectbox");
        control.setAttribute("disabled", "");
        control.setAttribute("style", "background-color:#bd213014;");
        control.id = this.Id;
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
        label.textContent = "Label SelectBox";
        label.setAttribute("style", "margin-right: 26px");
        return label;
    }
    CreateTextbox() {
        var textbox = document.createElement("select");
        textbox.setAttribute("type", "text");
        textbox.setAttribute("disabled", "");
        textbox.setAttribute("style", "width: 100px;");
        return textbox;
    }
}
