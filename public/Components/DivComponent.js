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
        }
        else {
            let toolbar = super.CreateToolBar();
            cdiv.appendChild(toolbar);
            if (!this.isComponent)
                cdiv.setAttribute("compName", "Div");
            cdiv.setAttribute("style", "background-color:blue;width: 100%;");
        }
        cdiv.setAttribute("style", "background-color:#bd213014; margin: 5PX;");
        cdiv.id = this.Id;
        cdiv.draggable = this.draggable;
        super.Create(cdiv);
        return cdiv;
    }
}
