import { PropertiesOfControl } from "../Common/PropertiesOfControl.js";

export class ComponentProperties{
   Create(selectedControl:Element):HTMLElement{
    
    var table: HTMLTableElement = <HTMLTableElement> document.createElement("Table");
    table.className="pgTable";

    var row = table.insertRow(0)
    row.className="pgGroupRow";
    var cell1=row.insertCell(0);
    cell1.setAttribute("colspan","2");
    cell1.appendChild(this.CreateEditorLabel());

    var row1 = table.insertRow(1);
    row1.className="pgRow";
    var cell=row1.insertCell(0);
    cell.className="pgCell";
    cell.innerText="Comp. Name";
    cell=row1.insertCell(1);
    cell.className="pgCell";
    cell.setAttribute("style","color:red");
    cell.innerText=selectedControl.getAttribute("compname");

    PropertiesOfControl.ComponentPropertiesDic[selectedControl.getAttribute("compname")].forEach(element => {
      var row = table.insertRow(element.id+2);
      row.className="pgRow";
      var cell=row.insertCell(0);
      cell.className="pgCell";
      cell.innerText=element.title;
      cell=row.insertCell(1);
      cell.className="pgCell";
      var txt=this.CreateInput(element.name,element.title,element.ctype);
      cell.appendChild(txt);
    });
   
    var  div=document.createElement("div");
    div.className="propGrid";
    div.setAttribute("style","float:left; margin-left:10px");
    div.appendChild(table);

    return div;
   }
   private CreateInput(name:string,title:string,ctype:string):HTMLElement
   {
      var rs=null;
      switch (ctype) {
         case "textbox":
            rs= document.createElement("input");
            
            break;
         case "checkbox":
            rs= document.createElement("input");
            rs.type = "checkbox";
            rs.onchange=x=>{
               var selectedInputId= document.getElementById("cpropGrid").attributes.getNamedItem("selectedInput").value
               var selectedInput= document.getElementById(selectedInputId);
               var tg=x.target as HTMLInputElement;
               var dt= tg.checked
               selectedInput.setAttribute(name,String(dt));
            }
            break;
         case "label":
               rs= document.createElement("label");;
               rs.textContent=title;
               rs.setAttribute("style","margin-right: 26px");
               break;
         default:
            break;
      }
      rs.id=name;
      
      rs.onkeyup=x=>{
         var selectedInputId= document.getElementById("cpropGrid").attributes.getNamedItem("selectedInput").value
         var selectedInput= document.getElementById(selectedInputId);
         var tg=x.target as HTMLInputElement;
         selectedInput.setAttribute(name, tg.value);
         if(name=="P_Caption")
         {
            var labelselectedInput= document.getElementById(selectedInput.id+"_label");
            labelselectedInput.textContent=tg.value;
         }
      }      
      rs.className="propertyInput"
      return rs as HTMLElement;
   }
   private CreateEditorLabel():HTMLLabelElement
   {
      var label=document.createElement("label");
      label.textContent="Editör";
      label.setAttribute("style","margin-right: 26px");
      return label;
   }
   
}