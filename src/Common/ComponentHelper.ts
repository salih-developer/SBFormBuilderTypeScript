import { ContainerComponent } from "../Components/ContainerComponent.js";
import { DivComponent } from "../Components/DivComponent.js";
import { LSelectboxComponent } from "../Components/LSelectboxComponent.js";
import { LTextboxComponent } from "../Components/LTextboxComponent.js";

export class ComponentHelper {
   public static Create(controlId:string="" ,controlName:string="",controlType:string=""): HTMLElement {
        var item=new DivComponent("Div");
          switch (controlType) {
              case "LTextbox":
                  item=new LTextboxComponent("LTextbox");
                  break;
              case "LSelectbox":
                  item=new LSelectboxComponent("LSelectbox");
                  break;
                  
              case "Container":
                  item=new ContainerComponent("Container");
                    break;
              default:
                  break;
          }
          item.Id=controlId;
          item.name=controlName;          
          item.isComponent=false;
        return item.Create();
    }
}