import { strict } from "node:assert";
import { ContainerColumnComponent } from "./ContainerColumnComponent.js";
import { IBaseComponent } from "./IBaseComponent";

export class ContainerComponent implements IBaseComponent{
    isComponent: boolean;
    Id: string;
    name: string;
    style: string;    
    constructor() {
        this.Id="cContainer";         
    }
    draggable: boolean;
    Create(): HTMLElement {
        var divcol=new ContainerColumnComponent();
        var container=document.createElement("div");  
        container.setAttribute("iscomponent",String(this.isComponent));
        container.appendChild(divcol.Create());
        container.appendChild(divcol.Create());
        container.id=this.Id;
        container.setAttribute("style","background-color:#b9b3b3a3;")
        container.className="row";
        container.draggable= this.draggable;
        container.ondragstart=x=>{
            var dc=container.attributes.getNamedItem("iscomponent");
            if(dc.value=="false")
               {
                   x.preventDefault();
                   return;
               }
            const element = x.target as HTMLInputElement
            x.dataTransfer.effectAllowed = "move";
            x.dataTransfer.setData("text", element.id);
        };

        return container;
    }
    
} 