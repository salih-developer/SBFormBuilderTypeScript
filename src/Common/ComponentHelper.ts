import { ContainerComponent } from "../Components/ContainerComponent.js";
import { DivComponent } from "../Components/DivComponent.js";
import { LSelectboxComponent } from "../Components/LSelectboxComponent.js";
import { LTextboxComponent } from "../Components/LTextboxComponent.js";
import { Guid } from "../Common/Guid.js";

export class ComponentHelper {
   public static Create(controlType:string=""): HTMLElement {
       var id = Guid.newGuid();
        var item=new DivComponent("Div");
          switch (controlType) {
              case "LTextbox":
                  item=new LTextboxComponent(id);
                  break;
              case "LSelectbox":
                  item=new LSelectboxComponent(id);
                  break;
                  
              case "Container":
                  item=new ContainerComponent(id);
                    break;
              default:
                  break;
          }
          item.Id=id;
          item.isComponent=false;
        return item.Create();
    }
}