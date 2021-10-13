const handleClick = () => {
    for (e of document.querySelectorAll(".button"))
        e.addEventListener("click", ev => console.log(ev.target.textContent));
}