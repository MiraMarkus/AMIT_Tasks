var submit = document.querySelector("input[type='submit']")
var title = document.querySelector("input[name='title']")
var price = document.querySelector("input[name='price']")
var quantity = document.querySelector("input[name='quantity']")
var category = document.querySelector("input[name='category']")
var delete_all = document.querySelector("#delete_all")
var tbody = document.querySelector("#tbody")

var mode = "create"
var ind
var dataPro  

function check(){
    if(localStorage.product != null){
        dataPro = JSON.parse(localStorage.product)
        delete_all.innerHTML = `<button onclick="Delete()">Delete All</button> `
    }else{
        dataPro = []
        delete_all.innerHTML =''
    }
    }
    check()

    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        var newPro = {
            title : title.value,
            price : price.value,
            quantity : quantity.value,
            category : category.value,
        }
    
        if(mode == "create"){
            dataPro.push(newPro)
        }else{
            dataPro[ind] = newPro
            submit.value = "Create"
            mode = "create"
        }
        localStorage.setItem("product",JSON.stringify(dataPro))
        showData()
        check()
        reset()
    })



    showData()
function showData(){
    var row =''
     for(var i = 0 ; i < dataPro.length ; i++){
            row +=`
            <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].category}</td>
            <td>${dataPro[i].quantity}</td>
            <td><button onclick="update_item(${i})" id="update">Update</button></td>
            <td><button onclick="delete_item(${i})" id="delete">Delete</button></td>
        </tr>
            `
     }
     tbody.innerHTML = row;

}



function Delete_all(){
    localStorage.clear()
    dataPro.splice(0)
    showData()
    check()
}


function delete_item(i){
    dataPro.splice(i,1)
    localStorage.setItem("product",JSON.stringify(dataPro))
    showData()
}



function update_item(i){
    title.value = dataPro[i].title
    price.value = dataPro[i].price
    quantity.value = dataPro[i].quantity
    category.value = dataPro[i].category
    submit.value = 'Update'
    mode = "update"
    ind = i
}



function reset(){
    title.value =''
    price.value =''
    category.value =''
    quantity.value =''
   
}