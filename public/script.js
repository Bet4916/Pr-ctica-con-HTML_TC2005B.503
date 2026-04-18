console.log("Hola mundo")


const username=document.getElementById("username")
const password=document.getElementById("password")
const binLogin=document.getElementById("login")

const login=()=>{
    if(username.value=="root" && password.value=="root"){
        window.location="/profile"
    }else{
        alert("credenciales incorrectas")
    }
}

binLogin.addEventListener("click", login)


