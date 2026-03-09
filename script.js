function showMessage()
{
    const msg = document.getElementById("hiddenMessage");
    msg.style.display = "block";
}

const petalsContainer = document.querySelector(".petals");

function createPetal()
{
    const petal = document.createElement("span");
    const flowers = ["🌸", "🌺", "💮", "🌹", "🌷", "🌼"];

    petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 6 + Math.random() * 6 + "s";
    petal.style.fontSize = 16 + Math.random() * 12 + "px";

    petalsContainer.appendChild(petal);

    setTimeout(() =>
    {
        petal.remove();
    }, 12000);
}

setInterval(createPetal, 400);