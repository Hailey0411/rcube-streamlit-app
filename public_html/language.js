/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', () => {
    const radiobutton = document.querySelectorAll('input[name="language"]');
    const elementsToTranslate = [
        'contentLanguage',
        'who-we-are',
        'goals',
        'goal-text',
        'and',
        'mission',
        'missions-text'
    ];

    radiobutton.forEach(radio => {
        radiobutton.addEventListener('change', () => {
            const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
            updateLanguage(selectedLanguage);
        });
    });

    const updateLanguage = (language) => {
        elementsToTranslate.forEach(id => {
        const element = document.getElementById(id);
        element.innerHTML = element.getAttribute(`data-${language}`);
        });
    };

    // Set default language on page load
    const defaultLanguage = document.querySelector('input[name="language"]:checked').value;
    updateLanguage(defaultLanguage);
});

