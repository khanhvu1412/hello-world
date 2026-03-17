let good = document.getElementById("good");
let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");

good.addEventListener("change", () => handleChange(good));
cheap.addEventListener("change", () => handleChange(cheap));
fast.addEventListener("change", () => handleChange(fast));


function handleChange(clicked) {
    if (good.checked && cheap.checked && fast.checked) {

        if(clicked === good) {
            fast.checked = false;
        }

        if(clicked === cheap) {
            good.checked = false;
        }

        if(clicked === fast) {
            cheap.checked = false;
        }
    }
}