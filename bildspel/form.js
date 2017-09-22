function validateForm(myForm)
        {
            var inputs, index;
            var form=document.getElementById(myForm);
            inputs = form.getElementsByTagName('input');
            for (index = 0; index < inputs.length; ++index) {
                // deal with inputs[index] element.
                if (inputs[index].value==null || inputs[index].value=="")
                {
                    alert("One field or more is empty");
                    return false;
                }
                
            }
        }

var nameElement = document.getElementById("name");
var emailElement = document.getElementById("email");
var numberElement = document.getElementById("number");


nameElement.addEventListener("keyup", function() {
    var value = nameElement.value; 

    var nameRegex = /[a-zA-Z]{1,30}/
    var isValid = nameRegex.test(value);
    
    /* En liten if-sats. Grönt sker ifall kravet stämmer, rött händer i annat fall. */
    nameElement.style.backgroundColor = isValid ? "green" : "red";
})

emailElement.addEventListener("keyup", function() { 
    var value = emailElement.value;

    var emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
    var isValid = emailRegex.test(value);
    
    /* En liten if-sats. Grönt sker ifall kravet stämmer, rött händer i annat fall. */
    emailElement.style.backgroundColor = isValid ? "green" : "red";
})

numberElement.addEventListener("keyup", function() { 
    var value = numberElement.value;

    var numberRegex = /[0-9]{3,15}/
    var isValid = numberRegex.test(value);
    
    /* En liten if-sats. Grönt sker ifall kravet stämmer, rött händer i annat fall. */
    numberElement.style.backgroundColor = isValid ? "green" : "red";
})