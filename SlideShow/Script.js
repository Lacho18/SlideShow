let header = document.getElementById("Header");
let context = document.getElementById("mainContext");
let slideMainDiv = document.getElementById("slide");

let BackButton = document.getElementById("Back");
let ContinueButton = document.getElementById("Continue");

BackButton.style.visibility = "hidden";
ContinueButton.style.visibility = "hidden";
slideMainDiv.style.visibility = "hidden";

let buttonToBegin = document.createElement("button");
buttonToBegin.id = "startButton";
let body = document.querySelector("body");
body.appendChild(buttonToBegin);

buttonToBegin.addEventListener("click", () => {
    buttonToBegin.remove();
    BackButton.style.visibility = "visible";
    ContinueButton.style.visibility = "visible";
    slideMainDiv.style.visibility = "visible";

    slideMainDiv.style.backgroundImage = `url("${Slides[currentIndex].image}")`;
    slideMainDiv.classList.add("slideApearence");
    BackButton.classList.add("backButtonAnimation");
    ContinueButton.classList.add("continueButtonAnimation");

    let interval = setInterval(() => {
        loadText(Slides[currentIndex]);
        clearInterval(interval);
    }, 3000);
});

let buttonAnimationInterval;

let currentIndex = 0;

BackButton.addEventListener("click", () => {onButtonsClicked(false);});
ContinueButton.addEventListener("click", () => {onButtonsClicked(true);});

function onButtonsClicked(boolean) {
    if(boolean) {
        if(Slides.length > currentIndex + 1) {
            currentIndex++;
            slideChange();
        }
    }
    else {
        if(currentIndex > 0) {
            currentIndex--;
            slideChange();
        }
    }
}

function repeatButtonAnimation() {
    buttonAnimationInterval = setInterval(() => {
        BackButton.classList.remove("backButtonAnimation");
        ContinueButton.classList.remove("continueButtonAnimation");
        
        setTimeout(() => {
            BackButton.classList.add("backButtonAnimation");
            ContinueButton.classList.add("continueButtonAnimation");
        }, 1000);
    }, 10000);
}

function loadText(currentSlide) {
    let header = document.createElement("p");
    let context = document.createElement("div");
    let mainContext = document.createElement("p");

    header.id = "Header";
    context.id = "context";
    header.innerHTML = currentSlide.header;
    mainContext.innerHTML = currentSlide.context;

    header.style.color = currentSlide.headerColor; 
    context.style.color = currentSlide.contextColor;

    context.appendChild(mainContext);
    slideMainDiv.appendChild(header);
    slideMainDiv.appendChild(context);
}

function removeContext() {
    let header = document.getElementById("Header");
    let context = document.getElementById("context");

    slideMainDiv.removeChild(header);
    slideMainDiv.removeChild(context);
}

function slideChange() {
    removeContext();
    slideMainDiv.classList.remove("slideApearence");
    slideMainDiv.classList.add("slideGoAway");

        let interval = setInterval(() => {
            slideMainDiv.style.backgroundImage = `url("${Slides[currentIndex].image}")`;
            slideMainDiv.classList.remove("slideGoAway");
            slideMainDiv.classList.add("slideApearence");

            innerInterval = setInterval(() => {
                loadText(Slides[currentIndex]);
                 clearInterval(innerInterval);
            }, 3000);

            clearInterval(interval);
        }, 3000);
}

repeatButtonAnimation();
