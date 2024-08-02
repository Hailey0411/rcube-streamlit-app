
const  logout = document.getElementById("logout_bg");
const LogoutBtn = document.getElementById("signoutbutton");
const signoutContent = document.getElementById("logout_screen");
const cancelBtn = document.getElementById("cancel");
const confirmBtn = document.getElementById("confirm");

document.addEventListener("DOMContentLoaded", function(){
    if (!logout) {
        console.error("Element with id 'logout_bg' not found.");
        return;
    }

    if (!LogoutBtn) {
        console.error("Element with id 'signoutButton' not found.");
        return;
    }

    if (!signoutContent) {
        console.error("Element with id 'logout_screen' not found.");
        return;
    }
    
    LogoutBtn.addEventListener("click", function() {
        logout.style.display = "block";
    });
    
    
    // Hide popup menu when clicking outside of the popup content
     window.addEventListener("click", function(event) {
    if (event.target === logout) {
            logout.style.display = "none";
        }
    });  
    
    if(cancelBtn){
        cancelBtn.addEventListener("click",function(){
            logout.style.display = "none";
        });
    }
     else{
         console.error("Button cancel is not found");
         }
         
    if(confirmBtn){
            
            let SignoutBtn = document.getElementById("confirm");
            console.log(SignoutBtn);
            
            
            let Signout = ()=>{
                sessionStorage.removeItem("user-creds");
                sessionStorage.removeItem("user-info");
                window.location.replace('logout.html');
            };
           
            SignoutBtn.addEventListener('click',Signout);

    }
    
});



        




 
