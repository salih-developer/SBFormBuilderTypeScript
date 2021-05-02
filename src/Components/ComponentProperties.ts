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


    var row1 = table.insertRow(2);
    row1.className="pgRow";
    var cell=row1.insertCell(0);
    cell.className="pgCell";
    cell.innerText="Name";
    cell=row1.insertCell(1);
    cell.className="pgCell";
    var txt=document.createElement("input");
    cell.appendChild(txt);


    row1 = table.insertRow(3);
    row1.className="pgRow";
    var cell=row1.insertCell(0);
    cell.className="pgCell";
    cell.innerText="DBKey";
    cell=row1.insertCell(1);
    cell.className="pgCell";
    var txt=document.createElement("input");
    cell.appendChild(txt);


    
    
    var  div=document.createElement("div");
    div.className="propGrid";
    div.setAttribute("style","float:left; margin-left:10px");
    div.appendChild(table);

    return div;
   }

   private CreateEditorLabel():HTMLLabelElement
   {
      var label=document.createElement("label");
      label.textContent="Editör";
      label.setAttribute("style","margin-right: 26px");
      return label;
   }
}