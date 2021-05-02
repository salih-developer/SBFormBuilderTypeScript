import { strict } from "node:assert";
import { BaseComponent } from "./BaseComponent.js";
import { ContainerColumnComponent } from "./ContainerColumnComponent.js";
import { IBaseComponent } from "./IBaseComponent.js";

export class ContainerComponent extends BaseComponent{
    Create(): HTMLElement {
                var divcol=new ContainerColumnComponent();
                var control=document.createElement("div");  
                control.setAttribute("iscomponent",String(this.isComponent));
                control.appendChild(divcol.Create());
                control.appendChild(divcol.Create());
                if(!this.isComponent)
                control.setAttribute("compName","Container");
                control.id=this.Id;
                control.setAttribute("style","background-color:#b9b3b3a3;")
                control.className="row";
                control.draggable= this.draggable;
                control.ondragstart=x=>{
                    var dc=control.attributes.getNamedItem("iscomponent");
                    if(dc.value=="false")
                       {
                           x.preventDefault();
                           return;
                       }
                    const element = x.target as HTMLInputElement
                    x.dataTransfer.effectAllowed = "move";
                    x.dataTransfer.setData("text", element.id);
                };
                super.Create(control);
                return control;
            }
}
// export class ContainerComponent implements IBaseComponent{
//     isComponent: boolean;
//     Id: string;
//     name: string;
//     style: string;    
//     constructor() {
//         this.Id="cContainer";         
//     }
//     draggable: boolean;
//     Create(): HTMLElement {
//         var divcol=new ContainerColumnComponent();
//         var container=document.createElement("div");  
//         container.setAttribute("iscomponent",String(this.isComponent));
//         container.appendChild(divcol.Create());
//         container.appendChild(divcol.Create());
//         if(!this.isComponent)
//         container.setAttribute("compName","Container");
//         container.id=this.Id;
//         container.setAttribute("style","background-color:#b9b3b3a3;")
//         container.className="row";
//         container.draggable= this.draggable;
//         container.ondragstart=x=>{
//             var dc=container.attributes.getNamedItem("iscomponent");
//             if(dc.value=="false")
//                {
//                    x.preventDefault();
//                    return;
//                }
//             const element = x.target as HTMLInputElement
//             x.dataTransfer.effectAllowed = "move";
//             x.dataTransfer.setData("text", element.id);
//         };

//         return container;
//     }
    
// } 