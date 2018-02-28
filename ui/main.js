//counter code 
var button = document.getElementById('counter');


button.onclick = function () {
    
    //Create a Request object
    var request = new XMLHttpRequest();
    
    //Capture the rsponse & store it in a variable.
    request.onreadystatechange = function () {
        if (request.readyState ===  XMLHttpRequest.DONE) {
            //take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString() ;
            }
        }
        //Not done yet 
    };
    
    // Make a request
    request.open('GET', 'http://ranjanpiyush1910.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

//Submit names
var nameInput = document.getElementById('name');
var name = nameInput;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Make a request to the server & send the name 
     var request = new XMLHttpRequest();
    
    //Capture the rsponse & store it in a variable.
    request.onreadystatechange = function () {
        if (request.readyState ===  XMLHttpRequest.DONE) {
            //take some action
            if (request.status === 200) {
              var names = request.responseText;
              names = JSON.parse(names);
              var list = '';
               for (var i=0; i<names.length ; i++) {
               list += '<li>' + names[i] + '</li>';
    }
    
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
     
            }
        }
        //Not done yet 
    };
    
    // Make a request
    request.open('GET', 'http://ranjanpiyush1910.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    //Capture a list of names & render it as a list
    
};