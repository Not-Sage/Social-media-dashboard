let checkbox = document.getElementById("checkbox");
const root = document.documentElement;
let value = getComputedStyle(document.documentElement)
               .getPropertyValue('--VeryDarkBlueBG')
               .trim();
let currentMode = "dark";
root.style.setProperty('--HoverFiler', 'brightness(120%)')
checkbox.addEventListener('change', function () {
    if (currentMode === "dark"){
        currentMode = "light";
        root.style.setProperty('--VeryDarkBlueTopBGPattern', 'hsl(225, 100%, 98%)');
        root.style.setProperty('--WhiteText','hsl(230, 17%, 14%)white');
        root.style.setProperty('--DarkDesaturatedBlueCardBG', 'hsl(227, 47%, 96%)')
        root.style.setProperty('--HoverFiler', 'brightness(90%)')
        root.style.setProperty('--SliderBG','#fff')
    }
    else{
        currentMode = "dark"
        root.style.setProperty('--VeryDarkBlueTopBGPattern','hsl(230, 17%, 14%)');
        root.style.setProperty('--WhiteText','hsl(0, 0%, 100%)');
        root.style.setProperty('--DarkDesaturatedBlueCardBG', 'hsl(229, 27%, 20%)')
        root.style.setProperty('--HoverFiler', 'brightness(120%)')
        root.style.setProperty('--SliderBG','hsl(230, 17%, 14%)')
    }
});