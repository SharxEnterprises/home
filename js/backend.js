link=document.getElementById("linkWs");
link.addEventListener("click",generarHTML);

function generarHTML(){
    const h6 = document.createElement("h6");
    const p = document.createElement("p");
    const div = document.getElementById("divWS");
    h6.innerHTML=`
        Numero:
    `;
    p.innerHTML=`
        +50231302539
    `;
    div.appendChild(h6);
    div.appendChild(p);
    setTimeout(function(){
        h6.remove();
        p.remove();
    },5000);
}