import { ComponentHelper } from "../Common/ComponentHelper.js";
export class ContainerColumnComponent {
    CreateSpan(cicon) {
        throw new Error("Method not implemented.");
    }
    CreateToolBar() {
        throw new Error("Method not implemented.");
    }
    Create() {
        var cdiv = document.createElement('div');
        cdiv.setAttribute("iscomponent", "false");
        if (!this.isComponent)
            cdiv.setAttribute("compName", "ContainerColumn");
        //cdiv.setAttribute("class","col-5");
        cdiv.setAttribute("style", "min-height: 50px;");
        cdiv.id = this.Id;
        cdiv.className = "col-6 ContainerColumn";
        cdiv.draggable = false;
        cdiv.ondrop = x => {
            x.preventDefault();
            const element = ((x.target == x.currentTarget) ? x.currentTarget : x.target);
            var data = x.dataTransfer.getData("text");
            if (x.currentTarget == x.target) {
                var cmp = ComponentHelper.Create(data);
                if (cmp == null && data != null) {
                    cmp = document.getElementById(data);
                }
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
        return cdiv;
    }
}
// import { DivComponent } from "./DivComponent.js";
// import {IBaseComponent} from "./IBaseComponent"
// export class ContainerColumnComponent implements IBaseComponent{
//     draggable: boolean;
//     isComponent: boolean;
//     Id: string;
//     name: string;
//     style: string;
//     Create(): HTMLElement {
//         var cdiv=document.createElement('div');
//         cdiv.setAttribute("iscomponent","false");
//         if(!this.isComponent)
//         cdiv.setAttribute("compName","ContainerColumn");
//         cdiv.setAttribute("class","col-5");
//         cdiv.setAttribute("style","min-height: 50px;margin: 10px;");   
//         cdiv.id=this.Id;        
//         cdiv.className="divcoll"
//         cdiv.draggable=false;
//         cdiv.ondrop=x=>{
//             x.preventDefault();
//             const element = ((x.target==x.currentTarget)?x.currentTarget:x.target) as HTMLInputElement
//             var data = x.dataTransfer.getData("text");
//                 element.appendChild(document.getElementById(data).cloneNode(true));
//                 element.className="col-5 divcoll" ;
//         };
//         cdiv.ondragleave=x=> {
//             x.preventDefault();        
//             const element = ((x.target==x.currentTarget)?x.currentTarget:x.target) as HTMLInputElement
//             element.className="col-5 divcoll";
//             //this.ClearTempDiv(element);    
//         };
//         cdiv.ondragenter=x=> {
//             x.preventDefault();
//             const element = ((x.target==x.currentTarget)?x.currentTarget:x.target) as HTMLInputElement
//             element.className="col-5 droptarget";
//         };
//         return cdiv;
//     }
// }
