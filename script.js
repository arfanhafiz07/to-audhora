// Yes Button Click
document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("response").innerText = "LETS GOO I LOVE YOUU! 💖🥰";
});

// No Button Moves Away
document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
