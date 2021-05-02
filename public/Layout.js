import { ContainerComponent } from "./Components/ContainerComponent.js";
import { LTextboxComponent } from "./Components/LTextboxComponent.js";
import { DivComponent } from "./Components/DivComponent.js";
import { ComponentHelper } from "./Common/ComponentHelper.js";
import { LSelectboxComponent } from "./Components/LSelectboxComponent.js";
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
                var cmp = ComponentHelper.Create("", "", data);
                element.appendChild(cmp);
                element.className = "";
            }
        };
        document.getElementById("MainPanel").appendChild(layoutPanel);
        let tb = new LTextboxComponent("LTextbox");
        tb.isComponent = true;
        tb.draggable = true;
        document.getElementById("components").appendChild(tb.Create(null));
        tb = new LSelectboxComponent("LSelectbox");
        tb.isComponent = true;
        tb.draggable = true;
        document.getElementById("components").appendChild(tb.Create(null));
        tb = new ContainerComponent("Container");
        tb.isComponent = true;
        tb.draggable = true;
        document.getElementById("components").appendChild(tb.Create(null));
        tb = new DivComponent("Div");
        tb.isComponent = true;
        tb.draggable = true;
        document.getElementById("components").appendChild(tb.Create(null));
    }
}
;
