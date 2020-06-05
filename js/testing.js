$(document).ready(function () {
    /*$("h1").click(function () {
        $("#error_name").slideDown("slow");
        $("#error_phone").fadeOut("16000");
        $(":input").css("border","2px solid black");
    });

    $("#register_form").click(function() {
        const firstname =document.getElementById("firstname").value;
        const number = document.getElementById("phone-number").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        var names =[];
        
        names.push({
            name: firstname,
            phone_number: number,
            emailId: email,
            messagebox: message,
        })
        
        localStorage.setItem("data",JSON.stringify(names));       

    }); 


    */

    $("#click").click(function () {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open("GET", "https://reqres.in/api/users");
        
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
           
            localStorage.setItem("data", JSON.stringify(ourData.data));
            table(ourData);
            
        };      
        ourRequest.send();

        const tablebody = document.querySelector("#tabledata > tbody");
        function table(ourData) {
            while ( tablebody.firstChild){
                tablebody.removeChild(tablebody.firstChild);

            }
            var i;
            
            ourData.forEach((row) => {  
                const tr = document.createElement("tr");

                row.forEach((cell) => {
                    const td = document.createElement("td");
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                tablebody.appendChild(tr);
            });
        }
    }); 

});
