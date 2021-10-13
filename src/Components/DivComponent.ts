import { BaseComponent } from "./BaseComponent.js";
import { ComponentHelper } from "../Common/ComponentHelper.js";
export class DivComponent extends BaseComponent
{
       constructor(id:string) {
        id="Div";
        super(id);
    }
    Create(): HTMLElement {
        var cdiv=document.createElement('div');
        cdiv.setAttribute("iscomponent",String(this.isComponent));
        if(this.isComponent)
        {
            cdiv.className="component-common";
            cdiv.appendChild(super.CreateSpan("fa fa-tablet","Div"));
        }else
        {
            let toolbar=super.CreateToolBar();
            cdiv.appendChild(toolbar);
            cdiv.setAttribute("compName","Div");
            
            cdiv.setAttribute("style","background-color:#f5f3ed;;width: 100%;height: 400px;");
            cdiv.className="component-prepared"
        }
        cdiv.ondrop=x=>{
            x.preventDefault();
            const element = ((x.target==x.currentTarget)?x.currentTarget:x.target) as HTMLInputElement
            var data = x.dataTransfer.getData("text");
            if(x.currentTarget==x.target)
                {
                    var cmp=ComponentHelper.Create(data);            
                    element.appendChild(cmp);
                   // element.className="col-5 divcoll" ;
                }
        };
        cdiv.ondragleave=x=> {
            x.preventDefault();        
            const element = ((x.target==x.currentTarget)?x.currentTarget:x.target) as HTMLInputElement
            //element.className="col-6";
            //this.ClearTempDiv(element);    
        };
        cdiv.ondragenter=x=> {
            x.preventDefault();
            const element = ((x.target==x.currentTarget)?x.currentTarget:x.target) as HTMLInputElement
           // element.className="col-6 ContainerColumn";
        };
        cdiv.ondragstart = x => {
            const element = x.target as HTMLElement;
            x.dataTransfer.effectAllowed = "move";
            x.dataTransfer.setData("text", element.id);
        };
        cdiv.id=this.Id;        
        cdiv.draggable=this.draggable;
        super.Create(cdiv);
        return cdiv;
    }
    
}