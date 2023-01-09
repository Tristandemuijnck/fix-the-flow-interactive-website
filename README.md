# Toolgankelijkheid Vervoerregio Amsterdam

## Titel
Toolgankelijkheid - Een overzicht van toegankelijkheidsverbeteringen voor het verbeteren van toegankelijkheid op een website of app.

## Beschrijving
Dit is de repository van mijn uitvoering van fix-the-flow-interactive-website - Vervoerregio Amsterdam.

De tool is gemaakt voor de volgende user stories: 
> "Als organisatie wil ik een overzicht van toegankelijkheidsverbeteringen kunnen bekijken, zodat ik een gevoel kan krijgen wat er moet gebeuren om mijn website/app toegankelijker te maken op het terrein van waarneembaarheid, robuustheid, begrijpelijkheid en bedienbaarheid."

> "Als bezoeker van de tool wil ik contactinformatie kunnen achterhalen over wie de eigenaar/maker van deze tool is."

> "Als vervoerregio wil ik de urgentie van de wettelijke verplichting duidelijk maken aan lezers"

> "Als gebruiker wil ik een soort interactieve checklist kunnen bijhouden over de wettelijke toegankelijkheidsrichtlijnen voor mijn eigen website"

### Preview
<img src="https://user-images.githubusercontent.com/43402897/211406138-d0321700-9f5e-4970-8792-a123b1fc96d0.png" width=700>

## :mag: Kenmerken

### :page_facing_up: HTML

Voor de layout maak ik gebruik van: 

  `<main>`
  `<section>`
  `<article>`
  `<nav>`
  `<footer>`
  
### :art: CSS

Een aantal belangrijke css onderdelen zijn de keyframes. Deze worden gebruikt voor het maken van de animaties.

```
@keyframes countColorAnimation{
    0% {
        color: var(--magenta);
        transform: scale(1) 
    }
    50% {
        color: var(--geel);
        transform: scale(1.5) 
    }
    100% {
        color: var(--magenta);
        transform: scale(1) 
    }
}
```


### :loop: JavaScript

Een belangrijk stukje JavaScript is de code voor het animeren van de checklist counter.

Eerst selecteer ik alle checkboxes in de checklist.
```
const checkboxes = document.querySelectorAll('input[type=checkbox]');
```

Vervolgens zet ik op elke checkbox een change eventlistener.
```
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const parentElement = this.closest(".rl-cards").parentElement.id;
        const category = parentElement.replace('rl-', '');
        checkboxCountAndHighlight(checkbox, parentElement, category)
    });
});
```

Dan check ik bij welke counter de checkbox hoort om vervolgens de counter aan te passen en een animatie toe te voegen.
```
function checkboxCountAndHighlight(checkbox, parentElement, category) {
    const progress = checkbox.closest(".rl-cards").querySelectorAll('input[type=checkbox]:checked').length;
    checkbox.closest(".rl-card").classList.toggle("rl-card-border");

    category === "waarneembaar" || category === "begrijpelijk" ? countHighlighter(category, parentElement, progress, "highlightColor") : countHighlighter(category, parentElement, progress, "highlightColor-blue")
}

function countHighlighter(categoryName, parentElement, progress, className){
    document.getElementById(categoryName + "-count").innerHTML = progress;
    document.getElementById(parentElement).querySelector("#"+categoryName+"-count").classList.toggle(className);
    setTimeout(() => {
        document.getElementById(parentElement).querySelector("#"+categoryName+"-count").classList.toggle(className);
    }, delay)
}
```

## Live versie
Voor een live versie van het project: https://tristanva.student.fdnd.nl/

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
