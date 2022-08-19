let encryptionRule = {
'A': 'N', 'B': '0', 'C': 'P', 'D': 'Q',
'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U', 
'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y', 
'M': 'Z', 'N': 'A', '0': 'B', 'P': 'C', 
'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G', 
'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K', 
'Y': 'L', 'Z': 'M', 
'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 
'e': 'r', 'f': 's', 'g': 't', 'h': 'u', 
'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y', 
'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c', 
'q': 'd', 'r': 'e', 's': 'f', 't': 'g', 
'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k', 
'y': 'l', 'z': 'm', 
'0': '5', '1': '6', '2': '7', '3': '8', 
'4': '9', '5': '0', '6': '1', '7': '2', 
'8': '3', '9': '4', 
'!': '#', '$': '%', '&':'+', '-':'@',
'_':'~', '#': '!', '%': '$', '+':'&',
'@':'-', '~':'_'

}
//encrypt
const encrypt =(inputPassword) =>{
    let encryptedPassword=''
    for(char of inputPassword){
        
        encryptedPassword=encryptedPassword + encryptionRule[char];

    }
    return encryptedPassword;

}

//decrypt
const decrypt =(encryptedPassword) =>{
    let actualPassword=''
    let keys = Object.keys(encryptionRule)
    let values=Object.values(encryptionRule)
    for(char of encryptedPassword){
        let requriedIndex = values.findIndex(value => value === char)
        actualPassword = actualPassword + keys[requriedIndex]
    }
    return actualPassword
}
console.log(decrypt('Fngln'))


const DB_USERS= []

const resetSignUpFields = () => {
    document.getElementById('signup-first-name').value=''
     document.getElementById('signup-last-name').value=''
    document.getElementById('signup-phone').value=''
    document.getElementById('signup-email').value=''
    document.getElementById('signup-password').value=''
    document.getElementById('signup-confirm-password').value=''


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

    let signupSuccessAlert = document.getElementById('signup-alert-success')
    // let signupFailuresAlert = document.getElementById('signup-alert-failure') VALIDATION fAILURE


    let userDetails={
        firstName,
        lastName,
        phone,
        email,
        password:encrypt(password),
    }

    DB_USERS.push(userDetails)// It is storing the database value of UserDetails
    signupSuccessAlert.style.display='block';

    console.log(DB_USERS)

    resetSignUpFields()   
}

const login = () =>{
     let enteredEmail=document.getElementById('login-email').value
     let enteredpassword=document.getElementById('login-password').value

     let loginSuccessAlert = document.getElementById('login-alert-success')
     let loginFailureAlert = document.getElementById('login-alert-failure')



    let currentUser = DB_USERS.find(user => 
        user.email===enteredEmail  && decrypt(user.password)===enteredpassword )

   if(currentUser) {
        loginSuccessAlert.style.display='block'
        loginFailureAlert.style.display='none'
} 
else{
    loginFailureAlert.style.display='block'
    loginSuccessAlert.style.display='none'

   }
   resetLoginFields()
}




/* 
        find() -> Return a condition to find the element ;If value exists , returns the value; else return undefined
     2 Steps
     1. Check whether the email(user) exists in the DB
     2. Whether entered password match with t

     */