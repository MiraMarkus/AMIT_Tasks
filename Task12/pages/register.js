var submit = document.querySelector("input[type='submit']")
var inputs = document.querySelectorAll("input:not(input[type='submit'])")

var username = document.querySelector("input[name='username']")
var email = document.querySelector("input[name='email']")
var password = document.querySelector("input[name='password']")
var confirm_password = document.querySelector("input[name='confirm_password']")
var telephone = document.querySelector("input[type='tel']")

var email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g
var password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g
var telephone_pattern = /[0-9]{3}-[0-9]{4}-[0-9]{4}/g

submit.addEventListener('click' , (e) =>{
    e.preventDefault()
    var error = false
    inputs.forEach((input) => {
        if (input.value == '') {
            // console.log("err");
            input.nextElementSibling.textContent = `${input.name} is required`
            error = true
        }
        else {
            if (!email.value.match(email_pattern) && email.value != '') {
                email.nextElementSibling.textContent = `your email  should be like  name@mail.com`
                error = true

            }
            if (!telephone.value.match(telephone_pattern) && telephone.value != '') {
                telephone.nextElementSibling.textContent = `your phone should be like 012-8965-8965`
                error = true


            }
            if (!password.value.match(password_pattern) && password.value != '') {
                password.nextElementSibling.textContent = `your password  should has capital , small , special characters and at least 8 letters`
                error = true

            }
            if (confirm_password.value != password.value && confirm_password.value != '') {
                confirm_password.nextElementSibling.textContent = `confirm_password is not match password`
                error = true

            }
        }
    })

    if(error == false){
        var users=  localStorage.getItem("users")
        if(!users){
          users = []
          id=1
  
        }else{
          users = JSON.parse(users)
          id = users[users.length-1].user_id +1
         
        }
        users.push({
           user_id: id,
           username : username.value,
           email: email.value,
           telephone: telephone.value,
           password: password.value
        })
        localStorage.setItem("users",JSON.stringify(users))
        window.location.href="file:///E:/AMIT_Tasks/Task12/pages/login.html"
      }
})