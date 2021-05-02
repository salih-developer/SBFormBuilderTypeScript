import { ComponentProperties } from "./ComponentProperties.js";
export class BaseComponent {
    constructor(id) {
        this.Id = id;
    }
    Create(control) {
        if (!this.isComponent) {
            control.addEventListener('click', function (event) {
                var ppanel = document.getElementById("cpropGrid");
                ppanel.childNodes.forEach(element => {
                    element.remove();
                });
                var elem = event.target;
                var componentProperties = new ComponentProperties();
                var table = componentProperties.Create(elem);
                ppanel.appendChild(table);
            });
        }
        return control;
    }
}
