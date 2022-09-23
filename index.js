const container = document.getElementById("container");

import { NewsCard } from "./NewsCard.js";


const url = "./getnews.php";

let data = {};

//addData(data, url);

/*function addData(data){// pass your data in method
     $.ajax({
             type: "GET",
             url: url,
             data: JSON.stringify(data),// now data come in this function
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             success: function (data, status, jqXHR) {

                addArticle(data);// write success in " "
             },

             error: function (jqXHR, status) {
                 // error handler
                 console.log(jqXHR);
                 alert('fail' + status.code);
             }
          });
    }*/

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
        //const stuff = await doAjax({});
        //console.log(stuff[0])
        //for(let i = 0; i < stuff.length; i++){
            //return 
            /*
                        <div class="card" style="width: 18rem;">
              <img src="" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            */
            let HTML = '';
            stuff.map(newscard => {
                HTML += NewsCard(newscard);
                //console.log(`${newscard.description}`);
            })
            document.getElementById("container").innerHTML = HTML;

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
