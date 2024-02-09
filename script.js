function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
        "The no button is just for visuals";
    document.getElementById("name").style.display = "none";

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Aruzhan! LESGOOO see you on the 14th babygirl😘😘💋💋💋";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Создаем новые изображения
    const imageContainer = document.querySelector(".image-container");
    const secondImage = document.createElement("img");
    const thirdImage = document.createElement("img");
    secondImage.src = "images/5.jpg";
    thirdImage.src = "images/7.jpg";
    secondImage.classList.add("image");
    thirdImage.classList.add("image");

    // Добавляем новые изображения внизу контейнера
    imageContainer.appendChild(secondImage);
    imageContainer.appendChild(thirdImage);

    document.getElementById("yesButton").remove();
  }
}
