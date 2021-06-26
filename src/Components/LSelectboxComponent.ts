import { BaseComponent } from "./BaseComponent.js";

export class LSelectboxComponent extends BaseComponent{
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
                }else
                {
                    control.appendChild(super.CreateSpan("fa fa-plus-square","Selectbox"));
                }
                control.setAttribute("compName","LSelectbox");
                control.setAttribute("disabled","");
               control.setAttribute("style","background-color:#bd213014; margin: 5PX;")
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
                label.textContent="Label SelectBox";
                label.setAttribute("style","margin-right: 26px");
                return label;
            }
            private  CreateTextbox(){
               var textbox= document.createElement("select");
               textbox.setAttribute("type","text");
               textbox.setAttribute("disabled","");
               textbox.setAttribute("style","width: 100px;");
               return textbox;
            }
    
}