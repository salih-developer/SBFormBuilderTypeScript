export class DivComponent {
    Create() {
        var cdiv = document.createElement('div');
        cdiv.setAttribute("iscomponent", String(this.isComponent));
        cdiv.setAttribute("style", "background-color:blue;width: 100%;height: 50px;");
        cdiv.id = this.Id;
        return cdiv;
    }
}
