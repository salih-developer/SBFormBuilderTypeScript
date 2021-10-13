import { table } from "node:console";
import { ContainerComponent } from "./Components/ContainerComponent.js";
import { LTextboxComponent } from "./Components/LTextboxComponent.js";
import { IBaseComponent } from "./Components/IBaseComponent.js";
import { DivComponent } from "./Components/DivComponent.js";
import { ComponentHelper } from "./Common/ComponentHelper.js";
import { LSelectboxComponent } from "./Components/LSelectboxComponent.js";
import { TabComponent } from "./Components/TabComponent.js";
import { DataTableComponent } from "./Components/DataTableComponent.js";
export class  Layout {
    constructor()
    {
        var layoutPanel=document.createElement('div');
        layoutPanel.id="LayoutPanel";
        layoutPanel.setAttribute("style", "background-color:#8080800a;height:600px");
        
        layoutPanel.ondragenter=x=> {
            x.preventDefault();
            const element = x.currentTarget as HTMLInputElement
            var cmp=document.getElementById("divtmp");
            if(cmp==null && x.currentTarget==x.target)
            {
                element.className="droptarget"
                // var cmp=this.GetHTMLElement("divtmp");
                // element.appendChild(cmp);
            }
            console.log("ondragenter"+x.dataTransfer.getData("text"));
        };
        
        layoutPanel.ondragleave=x=> {
            x.preventDefault();
            const element = x.currentTarget as HTMLInputElement
            layoutPanel.className="";
            console.log("ondragleave"+x.dataTransfer.getData("text"));
        };
     
        layoutPanel.ondragstart=x=>{
            console.log("ondragstart"+x.dataTransfer.getData("text"));            
           // x.dataTransfer.setData("text",x.dataTransfer.getData("text"))
        };
        layoutPanel.ondragover=x=>{
            console.log("ondragover"+x.dataTransfer.getData("text"));
            x.preventDefault();
        };
        layoutPanel.ondrop=x=>{
            x.preventDefault();
            const element = x.currentTarget as HTMLInputElement
            var data = x.dataTransfer.getData("text");
            console.log("sonuç"+data);
            if(x.currentTarget==x.target)
            {
                var cmp=ComponentHelper.Create(data);            
                if(cmp==null && data!=null)
                {
                    cmp=document.getElementById(data);
                    element.appendChild(cmp);
                }else
                {
                        element.appendChild(cmp);
                        element.className="";
                }
            }
        };
        document.getElementById("MainPanel").appendChild(layoutPanel);

        let tb : IBaseComponent= new LTextboxComponent("LTextbox")
        tb.isComponent=true;
        tb.draggable=true;
        document.getElementById("components").appendChild(tb.Create(null));
        
        tb =new LSelectboxComponent("LSelectbox");
        tb.isComponent=true;
        tb.draggable=true;
        document.getElementById("components").appendChild(tb.Create(null));

        tb =new ContainerComponent("Container");
        tb.isComponent=true;
        tb.draggable=true;
        document.getElementById("components").appendChild(tb.Create(null));
        
        tb =new DivComponent("Div");
        tb.isComponent=true;
        tb.draggable=true;
        document.getElementById("components").appendChild(tb.Create(null));

        tb =new TabComponent("Tabs");
        tb.isComponent=true;
        tb.draggable=true;
        document.getElementById("components").appendChild(tb.Create(null));

        tb =new DataTableComponent("DataTable");
        tb.isComponent=true;
        tb.draggable=true;
        document.getElementById("components").appendChild(tb.Create(null));
    }
};

