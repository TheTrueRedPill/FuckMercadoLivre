// ==UserScript==
// @name         Fuck Mercado Livre
// @namespace    https://github.dev/TheTrueRedPill/FuckMercadoLivre
// @version      1.0
// @description  Remova o popup chato que aparece no Mercado Livre quando você tem dívida.
// @author       The True Red Pill
// @supportURL   https://github.dev/TheTrueRedPill/FuckMercadoLivre
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mercadolivre.com.br
// @grant        none
// @match        *://www.mercadolivre.com/*
// @noframes
// ==/UserScript==


// Define the new CSS rule to hide elements with class andes-modal__portal
// and reset the overflow for the html element
let newCSSRule = `
  .andes-modal__portal { display: none !important; }
  html { overflow: initial !important; }
`;

// Create a new style element
let styleElement = document.createElement('style');
styleElement.type = 'text/css';

// Check if the browser supports the styleSheet property (works in most modern browsers)
if (styleElement.styleSheet) {
  styleElement.styleSheet.cssText = newCSSRule; // For IE
} else {
  styleElement.appendChild(document.createTextNode(newCSSRule)); // For other browsers
}

// Add the style element to the document's head
document.head.appendChild(styleElement);
