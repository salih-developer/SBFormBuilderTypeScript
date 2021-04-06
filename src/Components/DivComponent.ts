import {IBaseComponent} from "./IBaseComponent"
export class DivComponent implements IBaseComponent{
    draggable: boolean;
    isComponent: boolean;
    Id: string;
    name: string;
    style: string;
    Create(): HTMLElement {
        var cdiv=document.createElement('div');
        cdiv.setAttribute("iscomponent",String(this.isComponent));
        cdiv.setAttribute("style","background-color:blue;width: 100%;height: 50px;");
        cdiv.id=this.Id;        
        cdiv.draggable=this.draggable;
        return cdiv;
    }
}