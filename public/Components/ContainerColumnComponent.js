export class ContainerColumnComponent {
    Create() {
        var cdiv = document.createElement('div');
        cdiv.setAttribute("iscomponent", "false");
        cdiv.setAttribute("class", "col-5");
        cdiv.setAttribute("style", "min-height: 50px;margin: 10px;");
        cdiv.id = this.Id;
        cdiv.className = "divcoll";
        cdiv.draggable = false;
        cdiv.ondrop = x => {
            x.preventDefault();
            const element = ((x.target == x.currentTarget) ? x.currentTarget : x.target);
            var data = x.dataTransfer.getData("text");
            element.appendChild(document.getElementById(data).cloneNode(true));
            element.className = "col-5 divcoll";
        };
        cdiv.ondragleave = x => {
            x.preventDefault();
            const element = ((x.target == x.currentTarget) ? x.currentTarget : x.target);
            element.className = "col-5 divcoll";
            //this.ClearTempDiv(element);    
        };
        cdiv.ondragenter = x => {
            x.preventDefault();
            const element = ((x.target == x.currentTarget) ? x.currentTarget : x.target);
            element.className = "col-5 droptarget";
        };
        return cdiv;
    }
}
