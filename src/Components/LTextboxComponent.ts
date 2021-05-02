import { BaseComponent } from "./BaseComponent.js";

export class LTextboxComponent extends BaseComponent{
    constructor(id:string) {
        id="LTextbox";
        super(id);
    }
    Create(): HTMLElement {
                var control=document.createElement('div');
                control.setAttribute("iscomponent",String(this.isComponent));
                
                control.appendChild(this.CreateLabel());
               // container.appendChild(this.CreateTextbox());
               control.setAttribute("style","background-color:#bd213014;width:100px")
               control.id=this.Id;
               control.draggable=this.draggable;
               control.ondragstart=x=>{
                    const element = x.target as HTMLInputElement
                    x.dataTransfer.effectAllowed = "move";
                    x.dataTransfer.setData("text", element.id);
                };        
                super.Create(control);
                return control;
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