/*
<dialog id="dialogTrailer">
    <iframe width="420" height="315" src=""></iframe>
</dialog>

<dialog id="dialogCover">
    <img src="" alt="">
</dialog>


____________NA TABELA:____________
<td>
    <button onclick="openCover('${movie.cover}')">SEE COVER</button>
    <button onclick="openTrailer('${movie.trailer}')">SEE TRAILER</button>
    <button onclick="removeMovie('${movie.title}')">REMOVE</button>
</td>
*/

const openTrailer = (src) => {  //o src fica sendo o movie.cover e movie.trailer chamados na criacao da linha da tabela
    const iframe = dialogTrailer.querySelector('iframe');
    iframe.src = src;
    dialogTrailer.showModal();
};
  
const openCover = (src) => {
    const img = dialogCover.querySelector('img');
    img.src = src;
    dialogCover.showModal();
};

// NO HTML
<dialog id="dialog">
    <p>Isso é um dialog</p>
    <button id="fechar">Fechar</button>
</dialog>

let dialog = document.getElementById("dialog")
document.getElementById("fechar").addEventListener("click", dialog.close())



/*
Para mostrar o dialog, você pode usar o método showModal() e 
para ocultá-lo, use o método close().
*/