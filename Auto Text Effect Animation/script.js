const containerEl = document.querySelector(".container");

const careerEl = ["coder", "Web developer", "freelancer", "UI/UX Designer"];

let careerIdx = 0;

let charIdx = 0;

updateText();

function updateText(){

    charIdx++;

    containerEl.innerHTML = `<h1>> Hi, I am ${careerEl[careerIdx].slice(0,1) == "f" ? "an" : "a"} ${careerEl[careerIdx].slice(0,charIdx)}  </h1>`

    if(charIdx == careerEl[careerIdx].length){
        careerIdx++;
        charIdx=0;
    }

    if(careerIdx == careerEl.length){
        careerIdx = 0;
    }

    setTimeout(updateText,250);

}


