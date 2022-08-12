const DB_USERS= []

const resetSignUpFields = () => {
    document.getElementById('signup-first-name').value=''
     document.getElementById('signup-last-name').value=''
    document.getElementById('signup-phone').value=''
    document.getElementById('signup-email').value=''
    document.getElementById('signup-password').value=''

}
const resetLoginFields = () => {
    
    document.getElementById('login-email').value=''
    document.getElementById('login-password').value=''

}



const signup = ()=>{
    let firstName=document.getElementById('signup-first-name').value
    let lastName= document.getElementById('signup-last-name').value
    let phone=document.getElementById('signup-phone').value
    let email=document.getElementById('signup-email').value
    let password=document.getElementById('signup-password').value

    let userDetails={
        firstName,
        lastName,
        phone,
        email,
        password,
    }

    DB_USERS.push(userDetails)// It is storing the database value of UserDetails

    resetSignUpFields()   
}

const login = () =>{
     let enteredEmail=document.getElementById('login-email').value
     let enteredpassword=document.getElementById('login-password').value

    let currentUser = DB_USERS.find((element) => {
         return element.email===enteredEmail })

   console.log(currentUser)
     resetLoginFields()
}

/* 
        find() -> Return a condition to find the element ;If value exists , returns the value; else return undefined
     2 Steps
     1. Check whether the email(user) exists in the DB
     2. Whether entered password match with t

     */