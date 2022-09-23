const container = document.getElementById("container");

import { NewsCard } from "./NewsCard.js";


const url = "./getnews.php";

let data = {};

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
        /*let row = document.createElement('div');
        row.classList.add("row");
        let col = document.createElement('div');
        col.classList.add('col');
        console.log(data[0])
        col.innerHTML = data[0].description;
        row.appendChild(col);
        container.append(row);*/
    //}

    doAjax({}).then( (data) => addArticle(data) )
