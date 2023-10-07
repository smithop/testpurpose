const shapesContainer = document.querySelector('#shapes-container');
const shapes = document.querySelectorAll('.shape');

shapes.forEach(shape => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    const randomRotation = Math.floor(Math.random() * 360);

    shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
});

shapesContainer.classList.remove('overflow-hidden');
window.onload = function () {
    for (var i = 0; i < 10; i++) {
        var shape = document.createElement("div");
        var shapeType = Math.floor(Math.random() * 3);

        if (shapeType == 0) {
            shape.classList.add("circle");
            shape.style.backgroundColor = getRandomColor();
        } else if (shapeType == 1) {
            shape.classList.add("square");
            shape.style.backgroundColor = getRandomColor();
        } else {
            shape.classList.add("triangle");
            shape.style.backgroundColor = getRandomColor();
        }

       document.body.appendChild(shape);
    }
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}