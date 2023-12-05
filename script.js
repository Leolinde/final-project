document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.main-img');
    const canvas = document.getElementById('mapCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to match the image
    canvas.width = image.width;
    canvas.height = image.height;

    // Position the canvas over the image
    canvas.style.top = image.offsetTop + 'px';
    canvas.style.left = image.offsetLeft + 'px';

    // Get the areas from the map
    const areas = document.querySelectorAll('area');

    areas.forEach(area => {
        area.addEventListener('focus', (event) => {
            drawCircle(area);
        });

        area.addEventListener('blur', (event) => {
            clearCanvas();
        });
    });

    function drawCircle(area) {
        const coords = area.coords.split(',').map(coord => parseInt(coord, 10));
        if (area.shape.toLowerCase() === 'circle' && coords.length === 3) {
            const [x, y, radius] = coords;

            // Draw the circle
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});