const button = document.getElementById("findButton");
button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);

    function alphabetize(wold) {
        return wold.toLowerCase().split("").sort().join("").trim();
    }
    textContent = alphabetize(typedText)
    
    document.body.appendChild()
    
});
  
