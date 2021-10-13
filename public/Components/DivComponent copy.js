import { ComponentHelper } from "../Common/ComponentHelper.js";
import { BaseComponent } from "./BaseComponent.js";
export class DivComponent extends BaseComponent {
    constructor(id) {
        id = "Div";
        super(id);
    }
    Create() {
        var cdiv = document.createElement('div');
        cdiv.setAttribute("iscomponent", String(this.isComponent));
        if (this.isComponent) {
            cdiv.appendChild(super.CreateSpan("fa fa-square-o", "Div"));
            cdiv.setAttribute("style", "margin: 5PX;");
        }
        else {
            let toolbar = super.CreateToolBar();
            cdiv.appendChild(toolbar);
            cdiv.setAttribute("compName", "Div");
            cdiv.setAttribute("style", "background-color:#f5f3ed;;width: 100%;height: 400px;");
        }
        cdiv.ondrop = x => {
            x.preventDefault();
            const element = ((x.target == x.currentTarget) ? x.currentTarget : x.target);
            var data = x.dataTransfer.getData("text");
            if (x.currentTarget == x.target) {
                var cmp = ComponentHelper.Create(data);
                element.appendChild(cmp);
                // element.className="col-5 divcoll" ;
            }
        };
        cdiv.ondragleave = x => {
            x.preventDefault();
            const element = ((x.target == x.currentTarget) ? x.currentTarget : x.target);
            //element.className="col-6";
            //this.ClearTempDiv(element);    
        };
        cdiv.ondragenter = x => {
            x.preventDefault();
            const element = ((x.target == x.currentTarget) ? x.currentTarget : x.target);
            // element.className="col-6 ContainerColumn";
        };
        cdiv.id = this.Id;
        cdiv.draggable = this.draggable;
        super.Create(cdiv);
        return cdiv;
    }
}
