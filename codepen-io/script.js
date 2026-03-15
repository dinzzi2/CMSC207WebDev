document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

/*Look for a class named '.clickme'*/

document.querySelector(".clickme").addEventListener("click", () => {
  /*For every class named "hidden", swap it to class "showing" */
  document.querySelectorAll(".hidden").forEach((item) => {
    item.classList.toggle("showing");
  });
});

