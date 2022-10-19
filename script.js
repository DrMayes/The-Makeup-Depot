


const button = document.querySelector ("#getData")
// const input = document.getElementById ("inputBar")
// console.log(input)
console.log("hello world")
function getData(){
const input = document.getElementById("inputBar")
console.log(input.value)
    // event.preventDefault();

    fetch ("http://makeup-api.herokuapp.com/api/v1/products.json",{mode: 'cors'}).then(res=> {

        return res.json();
        // console.log(res.json())
    }).then(data=> {
        console.log(data)
        // result.innerHTML=data.name
    }).catch(e=> {    
        console.log(e)

    })


   
}

// button.addEventListener = ("click", getData())




   