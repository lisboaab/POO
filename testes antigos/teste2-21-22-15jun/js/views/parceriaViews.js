import { Parceiras } from "../models/parceriaModels";

let parceirias = [];

parceirias.push(new Parceiras("MTK Digital Agency","mtk@mtk.com",["TSIW", "Design"],5,["Imagem gráfica MKTalent", "Campanha publicitária"]));
parceirias.push(new Parceiras("BindTunning","contacto@bindtunning.com",["TSIW"],3,["Web Parts for Sharepoint", "Sharepoint Intranet Templates"]));
parceirias.push(new Parceiras("Kendir Studios","edu@kendir.com",["TSIW", "Multimédia", "Design"],4,["Desenvolvimento aventuras educativas"]));

document.getElementById("btnF1").addEventListener("click",function(){
    let qtyProjetos = 0;
    parceirias.forEach((p) => {
        qtyProjetos += p.projetos.length
    })
    alert(`Existem ${qtyProjetos} projetos`)
})
