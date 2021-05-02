import { BaseComponent } from "./BaseComponent.js";

export class DivComponent extends BaseComponent
{
       constructor(id:string) {
        id="Div";
        super(id);
    }
    Create(): HTMLElement {
        var cdiv=document.createElement('div');
        cdiv.setAttribute("iscomponent",String(this.isComponent));
        if(!this.isComponent)
        cdiv.setAttribute("compName","Div");
        cdiv.setAttribute("style","background-color:blue;width: 100%;height: 50px;");
        cdiv.id=this.Id;        
        cdiv.draggable=this.draggable;
        super.Create(cdiv);
        return cdiv;
    }
    
}