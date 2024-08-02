/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templa0t0es/ClientSide/javascript.js to edit this template
 */
var popup = document.getElementById("popup_bg");

document.addEventListener("DOMContentLoaded", function() {
  
   
    const popupButton1 = document.getElementById("privacyButton");
    const popupButton2 = document.getElementById("termsButton");
    const popupContent = document.getElementById("popup_screen");
   
  if(popupButton1 === document.getElementById("privacyButton")){
    // Function to load the popup content from another HTML file
    function loadPopupContent() {
        fetch('privacyPolicy.html')
            .then(response => response.text())
            .then(data => {
                popupContent.innerHTML = data;
                
            })
            .catch(error => console.error('Error loading popup content:', error));
    }
    
    
    // Show popup menu and load content when button is clicked
    popupButton1.addEventListener("click", function() {
        loadPopupContent();
        popup.style.display = "block";
    });
    
  
      // Hide popup menu when clicking outside of the popup content
   window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
    
   
}



  if(popupButton2 === document.getElementById("termsButton")){
    // Function to load the popup content from another HTML file
    function loadPopupContent() {
        fetch('termsCondition.html')
            .then(response => response.text())
            .then(data => {
                popupContent.innerHTML = data;
                
            })
            .catch(error => console.error('Error loading popup content:', error));
    }
    
     popupButton2.addEventListener("click", function() {
        loadPopupContent();
        popup.style.display = "block";
    });
    
      // Hide popup menu when clicking outside of the popup content
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
}
   
});

function closePopUpMenu(){
         popup.style.display = "none";
                }
