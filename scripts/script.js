// Navigatie menu openen
const menuBtn = document.getElementById('menu-btn');
const primaireNav = document.getElementById('primaire-nav');

menuBtn.addEventListener('click', () => {
    primaireNav.classList.toggle("show");
});

// Card openen alternatief
const cardButtons = document.querySelectorAll('.rl-card-btn');
const cardsContent = document.querySelectorAll('.rl-card-content');

cardButtons.forEach((cardButton) => {
    cardButton.addEventListener('click', function () {
        const parentElement = this.closest('.rl-card-content-wrapper');
        const targetElement = parentElement.querySelector('.rl-card-extra');
        const btnElement = parentElement.querySelector('.rl-card-btn');
        
        targetElement.classList.toggle("showCard");
        
        if(targetElement.classList.contains("showCard")){
            btnElement.innerHTML = "Minder info";
        } else {
            btnElement.innerHTML = "Meer info";
        }
    })
})

// Belangrijke variables
const delay = 1500;

// Checkbox selector
const checkboxes = document.querySelectorAll('input[type=checkbox]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const parentElement = this.closest(".rl-cards").parentElement.id;
        const category = parentElement.replace('rl-', '');
        checkboxCountAndHighlight(checkbox, parentElement, category)
    });
});

function countHighlighter(categoryName, parentElement, progress, className){
    document.getElementById(categoryName + "-count").innerHTML = progress;
    document.getElementById(parentElement).querySelector("#"+categoryName+"-count").classList.toggle(className);
    setTimeout(() => {
        document.getElementById(parentElement).querySelector("#"+categoryName+"-count").classList.toggle(className);
    }, delay)
    
}

function checkboxCountAndHighlight(checkbox, parentElement, category) {
    const progress = checkbox.closest(".rl-cards").querySelectorAll('input[type=checkbox]:checked').length;
    checkbox.closest(".rl-card").classList.toggle("rl-card-border");

    category === "waarneembaar" || category === "begrijpelijk" ? countHighlighter(category, parentElement, progress, "countColor") : countHighlighter(category, parentElement, progress, "countColor-blue")
}

// ==============================================================================================================================================================
// =========================================================================== ITERATIE 4 =======================================================================
// ================================================================== IF STATEMENT INKORTEN NAAR TERNARY=========================================================

    // if (categorie === "waarneembaar" || categorie === "begrijpelijk") {
    //     countHighlighter(categorie, parentElement, progress, "countColor")
    // }
    // else {
    //     countHighlighter(categorie, parentElement, progress, "countColor-blue")
    // } 

// ==============================================================================================================================================================
// ===================================================================== EINDE ITERATIE 4 ===== =================================================================
// ==============================================================================================================================================================


    
    
// ==============================================================================================================================================================
// =========================================================================== ITERATIE 3 =======================================================================
// ==================================================== SWITCH STATEMENT INKORTEN MET APARTE FUNCTION VOOR HIGHLIGHTEN ==========================================

    // switch (parentElement) {
    //     case "rl-waarneembaar":
    //         checkbox.closest(".rl-card").classList.toggle("rl-card-border");
    //         countHighlighter("waarneembaar", parentElement, progress, "countColor")
    //         break;

    //     case "rl-robuust":
    //         checkbox.closest(".rl-card").classList.toggle("rl-card-border");
    //         countHighlighter("robuust", parentElement, progress, "countColor-blue")
    //         break;

    //     case "rl-begrijpelijk":
    //         checkbox.closest(".rl-card").classList.toggle("rl-card-border");
    //         countHighlighter("begrijpelijk", parentElement, progress, "countColor")
    //         break;
        
    //     case "rl-bedienbaar":
    //         checkbox.closest(".rl-card").classList.toggle("rl-card-border");
    //         countHighlighter("bedienbaar", parentElement, progress, "countColor-blue")
    //         break;
    
    //     default:
    //         break;
    // }

// ==============================================================================================================================================================
// ===================================================================== EINDE ITERATIE 3 =======================================================================
// ==============================================================================================================================================================


// ==============================================================================================================================================================
// =========================================================================== ITERATIE 2 =======================================================================
// ====================================================== EXTRA FUNCTIES AANGEMAAKT EN FILTEREN OP CATEGORIE ====================================================

// function countCheckboxes(checkbox, categorie) {
//     let progress = checkbox.closest(".rl-cards").querySelectorAll('input[type=checkbox]:checked').length;

//     switch (categorie) {
//         case "rl-waarneembaar":
//             document.getElementById("waarneembaar-count").innerHTML = progress;
//             break;

//         case "rl-robuust":
//             document.getElementById("robuust-count").innerHTML = progress;
//             break;

//         case "rl-begrijpelijk":
//             document.getElementById("begrijpelijk-count").innerHTML = progress;
//             break;
        
//         case "rl-bedienbaar":
//             document.getElementById("bedienbaar-count").innerHTML = progress;
//             break;
    
//         default:
//             break;
//     }
// }

// function changeHighlight(parentElement) {
//     switch (parentElement) {
//         case "rl-waarneembaar":
//             document.getElementById(parentElement).querySelector('#waarneembaar-count').classList.toggle("countColor");
//             setTimeout(() => {
//                 document.getElementById(parentElement).querySelector('#waarneembaar-count').classList.toggle("countColor");
//             }, delay)
//             break;
    
//         case "rl-robuust":
//             document.getElementById(parentElement).querySelector('#robuust-count').classList.toggle("countColor-blue");
//             setTimeout(() => {
//                 document.getElementById(parentElement).querySelector('#robuust-count').classList.toggle("countColor-blue");
//             }, delay)
//             break;
        
//         case "rl-begrijpelijk":
//             document.getElementById(parentElement).querySelector('#begrijpelijk-count').classList.toggle("countColor");
//             setTimeout(() => {
//                 document.getElementById(parentElement).querySelector('#begrijpelijk-count').classList.toggle("countColor");
//             }, delay)
//             break;
        
//         case "rl-bedienbaar":
//             document.getElementById(parentElement).querySelector('#bedienbaar-count').classList.toggle("countColor-blue");
//             setTimeout(() => {
//                 document.getElementById(parentElement).querySelector('#bedienbaar-count').classList.toggle("countColor-blue");
//             }, delay)
//             break;
        
//         default:
//             break;
//     }
// }

// ==============================================================================================================================================================
// ===================================================================== EINDE ITERATIE 2 =======================================================================
// ==============================================================================================================================================================



// ==============================================================================================================================================================
// =========================================================================== ITERATIE 1 =======================================================================
// ============================================================== ALLES UITGESCHREVEN PER CATEGORIE =============================================================

// const waarneembaarCheckboxes = document.querySelectorAll('#rl-waarneembaar input[type=checkbox]');
// const robuustCheckboxes = document.querySelectorAll('#rl-robuust input[type=checkbox]');
// const begrijpelijkCheckboxes = document.querySelectorAll('#rl-begrijpelijk input[type=checkbox]');
// const bedienbaarCheckboxes = document.querySelectorAll('#rl-bedienbaar input[type=checkbox]');

// Checkbox animatie
// waarneembaarCheckboxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', function () {
//         countChecks(checkbox, this.closest(".rl-cards").parentElement.id);
//         this.closest(".rl-card").classList.toggle("rl-card-border");
//         let parentElement = this.closest(".rl-cards").parentElement.id;
//         let targetElement = document.getElementById(parentElement).querySelector('#waarneembaar-count');
//         targetElement.classList.toggle("countColor");

//         setTimeout(() => {
//             targetElement.classList.toggle("countColor");
//         }, delay)
//     });
// });

// robuustCheckboxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', function () {
//         countChecks(checkbox, this.closest(".rl-cards").parentElement.id);
//         this.closest(".rl-card").classList.toggle("rl-card-border");
//         let parentElement = this.closest(".rl-cards").parentElement.id;
//         let targetElement = document.getElementById(parentElement).querySelector('#robuust-count');
//         targetElement.classList.toggle("countColor-blue");

//         setTimeout(() => {
//             targetElement.classList.toggle("countColor-blue");
//         }, delay)
//     });
// });

// begrijpelijkCheckboxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', function () {
//         countChecks(checkbox, this.closest(".rl-cards").parentElement.id);
//         this.closest(".rl-card").classList.toggle("rl-card-border");
//         let parentElement = this.closest(".rl-cards").parentElement.id;
//         let targetElement = document.getElementById(parentElement).querySelector('#begrijpelijk-count');
//         targetElement.classList.toggle("countColor");

//         setTimeout(() => {
//             targetElement.classList.toggle("countColor");
//         }, delay)
//     });
// });

// bedienbaarCheckboxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', function () {
//         countChecks(checkbox, this.closest(".rl-cards").parentElement.id);
//         this.closest(".rl-card").classList.toggle("rl-card-border");
//         let parentElement = this.closest(".rl-cards").parentElement.id;
//         let targetElement = document.getElementById(parentElement).querySelector('#bedienbaar-count');
//         targetElement.classList.toggle("countColor-blue");

//         setTimeout(() => {
//             targetElement.classList.toggle("countColor-blue");
//         }, delay)
//     });
// });

// function countChecks(checkbox, categorie) {
//     var progress = checkbox.closest(".rl-cards").querySelectorAll('input[type=checkbox]:checked').length;

//     switch (categorie) {
//         case "rl-waarneembaar":
//             document.getElementById("waarneembaar-count").innerHTML = progress;
//             break;

//         case "rl-robuust":
//             document.getElementById("robuust-count").innerHTML = progress;
//             break;

//         case "rl-begrijpelijk":
//             document.getElementById("begrijpelijk-count").innerHTML = progress;
//             break;
        
//         case "rl-bedienbaar":
//             document.getElementById("bedienbaar-count").innerHTML = progress;
//             break;
    
//         default:
//             break;
//     }
// }

// ==============================================================================================================================================================
// ===================================================================== EINDE ITERATIE 1 =======================================================================
// ==============================================================================================================================================================




