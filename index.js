const container = document.getElementById("container");
const carouselInner = document.getElementById("carousel-inner");
const url = "./getnews.php";

import { NewsCard } from "./NewsCard.js";
import { Carousel } from "./Carousel.js";

async function doAjax(args) {
    let result;

    try {
        result = await $.ajax({
            url: url,
            type: 'GET',
            data: args
        });

        return result;
    } catch (error) {
        console.error(error);
    }
}

async function addArticle(stuff){
    let nRows = stuff.length / 3;
    nRows = (Math.ceil(nRows));
    for(let i = 0; i < nRows; i++){
        let row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);
        for(let x = 0; x < 3; x++){
            let col = document.createElement('div');
            col.classList.add("col");
            row.appendChild(col);
        }
    }   
    let cols = document.getElementsByClassName('col');
        let HTML = '';
        stuff.map((newscard, i) => {
            cols[i].innerHTML = NewsCard(newscard);
            //console.log(`${newscard.description}`);
        })
        //document.getElementById("container").innerHTML += HTML;

}

doAjax({}).then( (data) => addArticle(data) )

$.getJSON( "./getcarousels.php", function( data ) {
    var items = [];
    data.map((carousel, i) => {
        carouselInner.innerHTML += (`
            <div class="carousel-item">
                <img src="${carousel.urlToImage}" class="d-block w-100" alt="...">
            </div>
        `)
    })
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });
