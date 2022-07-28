document.getElementById("container").addEventListener("click", (event) =>{
   const main = document.getElementById("main");
   main.classList.add("popup");
   main.style.display = "flex";
   const change = document.getElementById("container");
   change.classList.add("change");
});

document.getElementById("letter").addEventListener("click", (event) => {
    const hideNumber = document.getElementById("showNumber");
    hideNumber.style.display = "none";
    const showLetter = document.getElementById("showLetter");
    showLetter.style.display = "block";
    const main = document.getElementById("main");
    main.style.display = "none";
    const removeChange = document.getElementById("container");
    removeChange.classList.remove("change");
});

document.getElementById("number").addEventListener("click", (event) =>{
    const hideLetter = document.getElementById("showLetter");
    hideLetter.style.display = "none"
    const showNumber = document.getElementById("showNumber");
    showNumber.style.display = "block";
    const main = document.getElementById("main");
    main.style.display = "none";
    const removeChange = document.getElementById("container");
    removeChange.classList.remove("change");
});

