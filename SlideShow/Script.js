let header = document.getElementById("Header");
let context = document.getElementById("mainContext");
let slideMainDiv = document.getElementById("slide");

let BackButton = document.getElementById("Back");
let ContinueButton = document.getElementById("Continue");

let buttonAnimationInterval;

let currentIndex = 0;

function setSlideContext(slideObject) {
    slideMainDiv.style.backgroundImage = `url("${slideObject.image}")`;
    header.innerHTML = slideObject.header;
    context.innerHTML = slideObject.context;
    header.style.color = slideObject.headerColor;
    context.style.color = slideObject.contextColor;
}

setSlideContext(Slides[0]);

BackButton.addEventListener("click", () => {onButtonsClicked(false);});
ContinueButton.addEventListener("click", () => {onButtonsClicked(true);});

function onButtonsClicked(boolean) {
    if(boolean) {
        if(Slides.length > currentIndex + 1) {
            currentIndex++;
        }
        setSlideContext(Slides[currentIndex]);
    }
    else {
        if(currentIndex > 0) {
            currentIndex--;
        }
        setSlideContext(Slides[currentIndex]);
    }
}

function repeatButtonAnimation() {
    BackButton.classList.add("buttons");
    ContinueButton.classList.add("buttons");

    let neshto = false;

    buttonAnimationInterval = setInterval(() => {
        BackButton.classList.remove("buttons");
        ContinueButton.classList.remove("buttons");
        neshto = true;
        clearInterval(buttonAnimationInterval);
    }, 7000);

    if(neshto) {
        repeatButtonAnimation();
    }
}

/*async function buttonAnimation() {
    BackButton.classList.add("buttons");
    ContinueButton.classList.add("buttons");

    while(true) {
        await repeatButtonAnimation();

        BackButton.classList.add("buttons");
        ContinueButton.classList.add("buttons");
    }
}*/

repeatButtonAnimation();