/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var portal = document.getElementById("portal_bg");
const image_click =document.getElementById("green");
const portalContent = document.getElementById("portal_screen");

function openUserPortal(){
    
    function loadPopupContent() {
        fetch('userPortal.html')
            .then(response => response.text())
            .then(data => {
                portalContent.innerHTML = data;
                
            })
            .catch(error => console.error('Error loading popup content:', error));
    }
    
   image_click.addEventListener("click", function() {
        loadPopupContent();
        portal.style.display = "block";
    });
    
    // Hide popup menu when clicking outside of the popup content
     window.addEventListener("click", function(event) {
    if (event.target ===portal) {
            portal.style.display = "none";
        }
    });
    
}

 


function closeUserPortal(){
         popup.style.display = "none";
                }
