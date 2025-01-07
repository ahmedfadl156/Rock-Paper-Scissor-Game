const gameContainer = document.querySelector(".container")
const userResult = document.querySelector(".user-result")
const botResult = document.querySelector(".bot-result")
const result = document.querySelector(".result")
const resultScore = document.querySelector(".result-score")
const optionImages = document.querySelectorAll(".option-image")
const userResultImage = document.querySelector(".user-result img");
const botResultImage = document.querySelector(".bot-result img");
let botCounter = 0;
let userCounter = 0;

optionImages.forEach((image , index) => {
    image.addEventListener("click" , (e) => {
        image.classList.add("active");

        userResultImage.src = botResultImage.src = "images/rock.png";
        result.textContent = "Playing...";
        optionImages.forEach((image2 , index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
        gameContainer.classList.remove("start");
        let imageSrc = e.target.querySelector("img").src;
        userResultImage.src = imageSrc;        

        let botChoice = Math.floor(Math.random() * 3);
        let botImageSrc = optionImages[botChoice].querySelector("img").src;
        botResultImage.src = botImageSrc;

        let  botValue = ["R" , "P" , "S"][botChoice];
        let userValue = ["R" , "P" , "S"][index];

        let outcomes = {
            RR: "Draw",
            RP: "Bot",
            RS: "User",
            PR: "User",
            PP: "Draw",
            PS: "Bot",
            SR: "Bot",
            SP: "User",
            SS: "Draw",
        };

        let outComeValue = outcomes[userValue + botValue];

        result.textContent = userValue === botValue ? "Match Draw" : `${outComeValue} Won` ;
        if(result.textContent === "User Won"){
            result.textContent = "You Won 🎉";
            userCounter++;
        }
        else if(result.textContent === "Bot Won"){
            result.textContent = "You Lost , Bot Won 😢";
            botCounter++;
        }
        else{
            result.textContent = "Match Draw";
        }
        resultScore.textContent = `${userCounter} : ${botCounter}`;
        }, 2500);
    });
});