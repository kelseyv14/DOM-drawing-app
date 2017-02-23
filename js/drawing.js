enableDrawing();

function enableDrawing() {
    document.addEventListener(___________, function(e) {
        var red = _________________________;
        var green = _________________________;
        var blue = _________________________;
        var box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.top = e.__________ + 'px';
        box.style.left = e.__________ + 'px';
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = 'rgb(255, 0, 0)';

        document.body.appendChild(box);
    });
}


