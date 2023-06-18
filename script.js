function drawCircle() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear any previous drawings
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
