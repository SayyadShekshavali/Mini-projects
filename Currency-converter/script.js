document.getElementById("c-btn").addEventListener("click", async () => {
  //! Get the latest values from the dropdowns
  const amount = document.getElementById("number").value;
  let Fromcurrency = document.querySelector(".from").value;
  let Tocurrency = document.querySelector(".to").value;

  //! Access image elements
  const image1 = document.getElementById("img1");
  const image2 = document.getElementById("img2");
  const images = document.querySelector(".images");

  if (image1) image1.style.marginRight = "300px";
  if (image2) image2.style.marginRight = "-50px";
  if (images) images.style.position = "relative";
  if (image1) images.style.position = "relative";
  if (image2) images.style.position = "relative";

  try {
    //! Add a timestamp to avoid API response caching
    const timestamp = new Date().getTime();
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/6e78007fe810d99227db1722/latest/${Fromcurrency}?timestamp=${timestamp}`
    );

    if (!response.ok) {
      throw new Error("API is not working");
    }

    const data = await response.json();
    const rate = data.conversion_rates[Tocurrency];
    const sound = document.getElementById("audio");
    const convertedAmount = (amount * rate).toFixed(2);

    //! Play sound and update result
    sound.play();
    document.getElementById("result").innerText = convertedAmount;
  } catch (error) {
    console.error("Error: ", error);
  }
});

document.getElementById("c-t").addEventListener("click", () => {
  //! Get the dropdown elements
  const currencyExchange = document.getElementById("c-t");

  //! Toggle rotation class
  if (currencyExchange.style.transform === "rotateY(180deg)") {
    currencyExchange.style.transform = "rotateY(0deg)";
  } else {
    currencyExchange.style.transform = "rotateY(180deg)";
  }

  //! Add smooth transition
  currencyExchange.style.transition = "transform 1s ease";
  let Fromcurrency = document.querySelector(".from");
  let Tocurrency = document.querySelector(".to");

  //! Swap the dropdown values
  const temp = Fromcurrency.value;
  Fromcurrency.value = Tocurrency.value;
  Tocurrency.value = temp;

  //! Animate the button
});
