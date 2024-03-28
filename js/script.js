(function(){
    "use strict"
    const person = document.getElementById("person");
    const persons = document.getElementById("persons");
    const form = document.querySelector('form');


    person.addEventListener('change', function() {
        persons.innerHTML = person.value;

    })
    form.addEventListener('submit', function (evnt) {
        evnt.preventDefault()
        alert('The form is submitted')
    })
    

}());