import { BaseComponent } from "./BaseComponent.js";

export class LTextboxComponent extends BaseComponent{
    constructor(id:string) {
        super(id);
    }
    Create(): HTMLElement {
                var control=document.createElement('div');
                control.setAttribute("iscomponent",String(this.isComponent));
                if(!this.isComponent)
                {
                    let toolbar=super.CreateToolBar();
                    control.appendChild(toolbar);
                    control.appendChild(this.CreateLabel());
                    control.appendChild(this.CreateTextbox());
                    control.className="component-prepared"
                }else
                {
                    control.className="component-common";
                    control.appendChild(super.CreateSpan("fa fa-font","Text Field"));
                }
                
                control.setAttribute("compName","LTextbox");
                control.setAttribute("disabled","");
               
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
                //label.setAttribute("style","margin-right: 26px");
                return label;
            }
            private  CreateTextbox(){
               var textbox= document.createElement("input");
               textbox.setAttribute("type","text");
               textbox.setAttribute("disabled","");
               return textbox;
            }
            
    
}