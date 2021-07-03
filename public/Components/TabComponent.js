import { ComponentHelper } from "../Common/ComponentHelper.js";
import { BaseComponent } from "./BaseComponent.js";
export class TabComponent extends BaseComponent {
    constructor(id) {
        id = "Tabs";
        super(id);
    }
    Create() {
        var cdiv = document.createElement('div');
        cdiv.setAttribute("iscomponent", String(this.isComponent));
        if (this.isComponent) {
            cdiv.appendChild(super.CreateSpan("fa fa-square-o", "Tab"));
            cdiv.setAttribute("style", "background-color:#bd213014; margin: 5PX;    padding-inline-start: 0px;");
        }
        else {
            let toolbar = super.CreateToolBar();
            cdiv.appendChild(toolbar);
            cdiv.setAttribute("compName", "Tabs");
            cdiv.setAttribute("style", "background-color:#f5f3ed;;width: 100%;height: 400px;");
            var btn = document.createElement("button");
            btn.textContent = "Add";
            btn.className = "pull-right";
            btn.id = "btn-add-tab";
            btn.addEventListener('click', function (event) {
                var divs = document.querySelectorAll('.close');
                var cd = divs.length;
                $('#tab-list').append($('<li class="nav-item"><button class="close" type="button">×</button><a href="#tab' + cd + '" role="tab"  class="nav-link" data-toggle="tab"><span>Tab ' + cd + '</span> <span class="glyphicon glyphicon-pencil text-muted edit"></span></a></li>'));
                $('#tab-content').append($('<div class="tab-pane fade" style="height: 300px;" id="tab' + cd + '">Tab ' + cd + ' content</div>'));
                divs = document.querySelectorAll('.close');
                divs.forEach(el => el.addEventListener('click', event => {
                    var el = event.currentTarget;
                    var rcontentId = el.parentElement.lastElementChild.getAttribute("href");
                    var rcontent = document.getElementById(rcontentId.replace("#", ""));
                    if (rcontentId !== "#tab0")
                        el.parentElement.remove();
                    var divs1 = document.querySelectorAll('.close');
                    if (rcontentId !== "#tab0" && rcontent !== null)
                        rcontent.remove();
                    var tabFirst = $('#tab-list a:first');
                    tabFirst.tab('show');
                }));
            });
            cdiv.appendChild(btn);
            var cul = document.createElement("ul");
            cul.className = "nav nav-pills";
            cul.id = "tab-list";
            cul.setAttribute("role", "tablist");
            var cli = document.createElement("li");
            cli.className = "nav-item";
            var ca = document.createElement("a");
            ca.setAttribute("role", "tab");
            ca.setAttribute("href", "#tab0");
            ca.setAttribute("data-toggle", "tab");
            ca.className = "nav-link active";
            var cli_ca_span = document.createElement("span");
            cli_ca_span.textContent = "Tab 0";
            ca.appendChild(cli_ca_span);
            var cli_ca_span1 = document.createElement("span");
            cli_ca_span1.className = "glyphicon glyphicon-pencil text-muted edit";
            ca.appendChild(cli_ca_span1);
            var cli_ca_button = document.createElement("button");
            cli_ca_button.className = "close";
            cli_ca_button.setAttribute("type", "button");
            cli_ca_button.textContent = "×";
            ca.appendChild(cli_ca_button);
            cli.appendChild(ca);
            cul.appendChild(cli);
            cdiv.appendChild(cul);
            var tabdiv = document.createElement("div");
            tabdiv.id = "tab-content";
            tabdiv.className = "tab-content";
            var tabdiv_div = document.createElement("div");
            tabdiv_div.className = "tab-pane fade in active show";
            tabdiv_div.id = "tab0";
            tabdiv_div.textContent = "Tab 0 content";
            tabdiv_div.setAttribute("style", "height:300px;");
            tabdiv_div.draggable = true;
            tabdiv.appendChild(tabdiv_div);
            cdiv.appendChild(tabdiv);
            tabdiv_div.ondrop = x => {
                x.preventDefault();
                const element = ((x.target == x.currentTarget) ? x.currentTarget : x.target);
                var data = x.dataTransfer.getData("text");
                if (x.currentTarget == x.target) {
                    var cmp = ComponentHelper.Create(data);
                    element.appendChild(cmp);
                    // element.className="col-5 divcoll" ;
                }
            };
        }
        cdiv.ondragstart = x => {
            const element = x.target;
            x.dataTransfer.effectAllowed = "move";
            x.dataTransfer.setData("text", element.id);
        };
        cdiv.id = this.Id;
        cdiv.draggable = this.draggable;
        super.Create(cdiv);
        return cdiv;
    }
}
