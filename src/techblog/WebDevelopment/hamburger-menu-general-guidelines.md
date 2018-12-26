---
path: src/techblog/WebDevelopment/
title: Hamburger Menu General Guidelines
date: 2018-12-26T23:13:57.339Z
author: Andrew Rogala
category: 'Menus '
subCategory: Hamburger Menus
---
I have found the humble “hamburger” menu to be one of the hardest things about front-end design. There are almost too many resources on the “right way” to make an accessible menu. However, I have found some general guidelines for a “good way” to implement menus. Anyway this post is not a tutorial on how to make a menu. It it is just a list of useful guidelines I use to build my menus.
<br/><br/>
* Make sure there is a logical tab order to the menu.
* Use proper semantics by making use of the navigation tag and placing menu items in an unordered list. Also, be sure to make use of nested lists for submenus.
* Keep the hamburger button inside the navigation tag. This way, when screen reader users shortcut to the navigation tag they will not find it empty.
* When the menu is off-screen ensure that the list items are not focusable. This is done through using “visibility hidden” or “display none”. Otherwise, users may end up tabbing through off-screen elements, which makes for poor user experience.
* Don’t forget about accessibility by testing with screen readers, using ARIA attributes when applicable, and checking for cross browser support. This process may involve the use of some polyfills for Microsoft Edge. I have found [focus-within polyfill](https://github.com/jonathantneal/focus-within) very useful for submenus.
* When possible, I usually prefer to use CSS for most of the menu functionality. However, this isn’t necessarily a good or bad thing, but rather a matter of personal preference.

 
