import { map } from "jquery";

export class PropertiesOfControl{  
        static ComponentPropertiesDic: {[key: string]: Array<{ id: number, name: string ,title:string,ctype:string }>} = {
            "LTextbox": Array(
                { "id": 0, "name": "P_Name",title:"Name",ctype:"textbox" },
                { "id": 1, "name": "P_DBKey",title:"DBKey",ctype:"textbox" },
                { "id": 2, "name": "P_Caption",title:"Caption",ctype:"textbox"},
                { "id": 3, "name": "P_Required",title:"Zorunlu",ctype:"checkbox"}
            ),
            "LSelectbox": Array(
                { "id": 0, "name": "P_Name",title:"Name",ctype:"textbox" },
                { "id": 1, "name": "P_DBKey",title:"DBKey",ctype:"textbox" },
                { "id": 2, "name": "P_Caption",title:"Caption",ctype:"textbox"},
                { "id": 3, "name": "P_Required",title:"Zorunlu",ctype:"checkbox"}
            ),
            "Container": Array(),
            "Tabs": Array(),
            "DataTable": Array(),
            "Div": Array()              
        }
        
}
