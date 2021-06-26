import { ComponentProperties } from "./ComponentProperties.js";
export class BaseComponent {
    constructor(id) {
        this.Id = id;
    }
    Create(control) {
        control.id = this.Id;
        //   if(!this.isComponent){
        //     control.addEventListener('click', function (event) {
        //       var ppanel=document.getElementById("cpropGrid");
        //       ppanel.childNodes.forEach(element => {
        //         element.remove();
        //       });
        //       var elem=(event.currentTarget as HTMLElement);
        //       var componentProperties=new ComponentProperties();
        //       var table=componentProperties.Create(elem);
        //       ppanel.appendChild(table);
        //     });
        // }
        return control;
    }
    CreateToolBar() {
        var tb = document.createElement("div");
        tb.id = "toolbar";
        tb.className = "toolbar";
        tb.setAttribute("style", "height: 20px;width: 100%;");
        var tball = document.createElement("div");
        tball.className = "component-btn-group";
        var tbRemove = document.createElement("div");
        tbRemove.className = "btn btn-xxs btn-danger component-settings-button component-settings-button-remove";
        tbRemove.addEventListener('click', function (event) {
            var ppanel = document.getElementById("cpropGrid");
            ppanel.childNodes.forEach(element => {
                element.remove();
            });
            var eln = event.currentTarget;
            eln.parentElement.parentElement.parentElement.remove();
        });
        var removei = document.createElement("i");
        removei.className = "fa fa-remove";
        tbRemove.appendChild(removei);
        var tbEdit = document.createElement("div");
        tbEdit.className = "btn btn-xxs btn-secondary component-settings-button component-settings-button-edit";
        tbEdit.addEventListener('click', function (event) {
            var ppanel = document.getElementById("cpropGrid");
            ppanel.childNodes.forEach(element => {
                element.remove();
            });
            var eln = event.currentTarget;
            var componentProperties = new ComponentProperties();
            var table = componentProperties.Create(eln.parentElement.parentElement.parentElement);
            ppanel.appendChild(table);
        });
        var editi = document.createElement("i");
        editi.className = "fa fa-cog";
        tbEdit.appendChild(editi);
        tball.appendChild(tbEdit);
        tball.appendChild(tbRemove);
        tb.appendChild(tball);
        return tb;
    }
    CreateSpan(cicon, title) {
        var i = document.createElement("i");
        i.className = cicon;
        i.setAttribute("style", "margin-right: 5px");
        var span = document.createElement("span");
        span.setAttribute("style", "margin-right: 26px");
        var cspan = span.cloneNode(true);
        cspan.textContent = title;
        span.appendChild(i);
        span.appendChild(cspan);
        return span;
    }
}
