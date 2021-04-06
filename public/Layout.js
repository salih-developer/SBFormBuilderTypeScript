import { ContainerComponent } from "./Components/ContainerComponent.js";
import { TextboxComponent } from "./Components/TextboxComponent.js";
import { DivComponent } from "./Components/DivComponent.js";
export class Layout {
    constructor() {
        var layoutPanel = document.createElement('div');
        layoutPanel.id = "LayoutPanel";
        layoutPanel.setAttribute("style", "background-color:#8080800a;height:600px");
        layoutPanel.ondragover = x => {
            x.preventDefault();
        };
        layoutPanel.ondragenter = x => {
            x.preventDefault();
            const element = x.currentTarget;
            var cmp = document.getElementById("divtmp");
            if (cmp == null && x.currentTarget == x.target) {
                element.className = "droptarget";
                // var cmp=this.GetHTMLElement("divtmp");
                // element.appendChild(cmp);
            }
        };
        layoutPanel.ondragleave = x => {
            x.preventDefault();
            const element = x.currentTarget;
            layoutPanel.className = "";
        };
        layoutPanel.ondrop = x => {
            x.preventDefault();
            const element = x.currentTarget;
            var data = x.dataTransfer.getData("text");
            if (x.currentTarget == x.target) {
                var cmp = this.GetHTMLElement("", "", data);
                element.appendChild(cmp);
                element.className = "";
            }
        };
        document.getElementById("MainPanel").appendChild(layoutPanel);
        let tb = new TextboxComponent();
        tb.isComponent = true;
        tb.draggable = true;
        document.getElementById("components").appendChild(tb.Create());
        tb = new ContainerComponent();
        tb.isComponent = true;
        tb.draggable = true;
        document.getElementById("components").appendChild(tb.Create());
    }
    GetHTMLElement(controlId = "", controlName = "", controlType = "") {
        var item = new DivComponent();
        switch (controlType) {
            case "cTextbox":
                item = new TextboxComponent();
                break;
            case "cContainer":
                item = new ContainerComponent();
                break;
            default:
                break;
        }
        item.Id = controlId;
        item.name = controlName;
        item.isComponent = false;
        return item.Create();
    }
}
;
