import { BaseComponent } from "./BaseComponent.js";
import { ContainerColumnComponent } from "./ContainerColumnComponent.js";
export class ContainerComponent extends BaseComponent {
    Create() {
        var control = document.createElement("div");
        control.setAttribute("iscomponent", String(this.isComponent));
        control.setAttribute("style", "background-color:#bd213014;margin: 5PX;");
        if (!this.isComponent) {
            let toolbar = super.CreateToolBar();
            control.appendChild(toolbar);
            var divcol = new ContainerColumnComponent();
            control.appendChild(divcol.Create());
            control.appendChild(divcol.Create());
            control.setAttribute("compName", "Container");
            control.setAttribute("style", "background-color:#b9b3b3a3;height:100px ;");
            control.className = "row margin0";
        }
        else {
            control.appendChild(super.CreateSpan("fa fa-folder-open", "Container"));
        }
        control.draggable = this.draggable;
        control.ondragstart = x => {
            var dc = control.attributes.getNamedItem("iscomponent");
            if (dc.value == "false") {
                x.preventDefault();
                return;
            }
            const element = x.target;
            x.dataTransfer.effectAllowed = "move";
            x.dataTransfer.setData("text", element.id);
        };
        control.id = this.Id;
        super.Create(control);
        return control;
    }
}
