const  st = document.getElementById("setting_bg");
const mateImage = document.getElementById("mate");
const settingContent = document.getElementById("setting_screen");

function openSetting(){
   mateImage.addEventListener("click", function() {
      st.style.display = "block";
    });
    
    // Hide popup menu when clicking outside of the popup content
     window.addEventListener("click", function(event) {
    if (event.target === st) {
            st.style.display = "none";
        }
    });
    
   
    
}




