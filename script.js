


const button = document.querySelector ("#getData")
const input = document.getElementById ("makeup")
console.log(input)

async function getData(e){

    e.preventDefault();

    fetch ("http://makeup-api.herokuapp.com/api/v1/products"+input.value) .then(res=> {

        return res.json();
    }).then(data=> {

        console.log(data)
        result.innerHTML=data.name
    })

    .catch(e=> {    
        console.log(e)

    })


   
}

button.addEventListener = ("click", getData)




   