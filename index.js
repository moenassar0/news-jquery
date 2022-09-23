const container = document.getElementById("container");

const url = "./getnews.php";

let data = {};

addData(data, url);

function addData(data){// pass your data in method
     $.ajax({
             type: "GET",
             url: url,
             data: JSON.stringify(data),// now data come in this function
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             success: function (data, status, jqXHR) {

                console.log(data);// write success in " "
             },

             error: function (jqXHR, status) {
                 // error handler
                 console.log(jqXHR);
                 alert('fail' + status.code);
             }
          });
    }