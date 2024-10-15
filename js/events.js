const mouse = document.querySelector("#mouse");

mouse.addEventListener("mouseover", () => {
    console.log("You Mouse Over");
})

mouse.addEventListener("mousemove", () => {
    console.log("You Mouse Move");
})

mouse.addEventListener("mouseout", () => {
    console.log("You Mouse Out");
})

const input = document.querySelector("#inputBtn");

input.addEventListener("focus", () => {
    console.log("You focus");
})

input.addEventListener("blur", () => {
    console.log("You Blur");
})

input.addEventListener("change", () => {
    console.log("Changed Value");
})