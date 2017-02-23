enableDrawing();

function enableDrawing() {
    document.addEventListener('click', function(e) {
        var red = Math.ceil((Math.random() * 255) + 0);
        var green = Math.ceil((Math.random() * 255) + 0);
        var blue = Math.ceil((Math.random() * 255) + 0);
        var box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.top = e.clientY + 'px';
        box.style.left = e.clientX + 'px';
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = 'rgb(255,182,193)';

        document.body.appendChild(box);
    });
}


