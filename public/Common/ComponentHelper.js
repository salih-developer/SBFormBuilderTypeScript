import { ContainerComponent } from "../Components/ContainerComponent.js";
import { DivComponent } from "../Components/DivComponent.js";
import { LTextboxComponent } from "../Components/LTextboxComponent.js";
export class ComponentHelper {
    static Create(controlId = "", controlName = "", controlType = "") {
        var item = new DivComponent("Div");
        switch (controlType) {
            case "LTextbox":
                item = new LTextboxComponent("LTextbox");
                break;
            case "Container":
                item = new ContainerComponent("Container");
                break;
            default:
                break;
        }
        item.Id = controlId;
        item.name = controlName;
        item.isComponent = false;
        return item.Create();
    }
}
