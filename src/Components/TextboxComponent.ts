import {IBaseComponent} from "./IBaseComponent"
export class TextboxComponent implements IBaseComponent{
    Id: string;
    name: string;
    style: string;
    constructor() {
      this.Id="cTextbox"; 
    }
    draggable: boolean;
    isComponent: boolean;
    Create(): HTMLElement {
        var container=document.createElement('div');
        container.setAttribute("iscomponent",String(this.isComponent));
        container.appendChild(this.CreateLabel());
       // container.appendChild(this.CreateTextbox());
        container.setAttribute("style","background-color:#bd213014;width:100px")
        container.id=this.Id;
        container.draggable=this.draggable;
        container.ondragstart=x=>{
            const element = x.target as HTMLInputElement
            x.dataTransfer.effectAllowed = "move";
            x.dataTransfer.setData("text", element.id);
        };
        return container;
    }
    private CreateLabel(){
        var label=document.createElement("label");
        label.textContent="Label Textbox";
        label.setAttribute("style","margin-right: 26px");
        return label;
    }
    private  CreateTextbox(){
       var textbox= document.createElement("input");
       textbox.setAttribute("type","text");
       textbox.setAttribute("disabled","");
       return textbox;
    }
}