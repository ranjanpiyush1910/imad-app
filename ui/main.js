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
                counter = counter + 1;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString() ;
            }
        }
        //Not done yet 
    };
    
    // Make a request
    request.open('GET', 'https://ranjanpiyush1910.imad.hasura-app.io/counter',true);
    request.send(null);
    
};