var submit = document.querySelector("input[type='submit']")
var email = document.querySelector("input[name='email']")
var password = document.querySelector("input[name='password']")

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    var users = JSON.parse(localStorage.getItem("users"))

    users.forEach(user => {
        if(user.email == email.value && user.password == password.value ){
              sessionStorage.setItem("username",user.username)  //kholud
              

             window.location.href="file:///E:/AMIT_Tasks/Task12/pages/profile.html"

        }
        
    });
  
})