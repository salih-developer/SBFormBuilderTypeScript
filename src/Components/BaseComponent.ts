import { Interface } from "node:readline";
import { ComponentProperties } from "./ComponentProperties.js";
import { IBaseComponent } from "./IBaseComponent";

export abstract class BaseComponent implements IBaseComponent{
    Id: string;
    name: string;
    style: string;
    draggable: boolean;
    isComponent: boolean;
    constructor(id:string ) {
      this.Id=id; 
    }
    Create(control: HTMLElement):HTMLElement{
      if(!this.isComponent){
        control.addEventListener('click', function (event) {
          var ppanel=document.getElementById("cpropGrid");
          
          ppanel.childNodes.forEach(element => {
            element.remove();
          });
          var elem=(event.target as HTMLElement);
          var componentProperties=new ComponentProperties();
          var table=componentProperties.Create(elem);
          ppanel.appendChild(table);
        });
    }
    return control;
    }
    
}