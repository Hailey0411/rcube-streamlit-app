/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
/* global firebaseConfig, firebase */

const firebaseConfig = {

    apiKey: "AIzaSyA0TV1R5BMxnV0amrNf61j_ypzMvSZu82E",

    authDomain: "login-with-firebase-data-afb28.firebaseapp.com",

    projectId: "login-with-firebase-data-afb28",

    storageBucket: "login-with-firebase-data-afb28.appspot.com",

    messagingSenderId: "991792165879",

    appId: "1:991792165879:web:f768829e119ade7962b4f2"
    };

firebase.initializeApp(firebaseConfig);
const auth=firebase.auth()
const database= firebase.database()

function register(){
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
if(validate_password(==false|| validate_passwords(password,confirm_password)==false){
        alert("Check all info you've entered!")
        return
}
auth.createUserwithIDandPassword(userid,password)
        .then(function(){
            var user=auth.currentUser
            var database_ref=database.ref()
            var user_data={
           userid:userid;
           last_login:Date.now()
            }
            
}
database_ref.child('users/'+user.uid).set(user_data)
    
})
.catch(function(error){
    var error_code=error.code
    var error_message=error.message
    alert(error_message)
})
}



function validate_password(password){
    if(password<6){
        return false;
    }else{
        return true;
    }
}
function validatePasswords(password,confirm_password) {
           

if (password === confirm_password) {
        alert('Account created successfully');
    } else {
        alert('Passwords do not match.');
    }}

