import { ContainerColumnComponent } from "./ContainerColumnComponent.js";
export class ContainerComponent {
    constructor() {
        this.Id = "cContainer";
    }
    Create() {
        var divcol = new ContainerColumnComponent();
        var container = document.createElement("div");
        container.setAttribute("iscomponent", String(this.isComponent));
        container.appendChild(divcol.Create());
        container.appendChild(divcol.Create());
        container.id = this.Id;
        container.setAttribute("style", "background-color:#b9b3b3a3;");
        container.className = "row";
        container.draggable = this.draggable;
        container.ondragstart = x => {
            var dc = container.attributes.getNamedItem("iscomponent");
            if (dc.value == "false") {
                x.preventDefault();
                return;
            }
            const element = x.target;
            x.dataTransfer.effectAllowed = "move";
            x.dataTransfer.setData("text", element.id);
        };
        return container;
    }
}
