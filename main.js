canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
mars_images = ["download.jpg", "images.jpg", "mars.jpg", "Mars2.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);
backgroundimg = mars_images[random_number];
rover_image = "rover.png";

function add() {
    background_img = new Image();
    background_img.onload = upload_background;
    background_img.src = backgroundimg;

    rover_newimg = new Image();
    rover_newimg.onload = upload_rover;
    rover_newimg.src = rover_image;
}

function upload_background() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_newimg, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    key_pressed = e.keyCode;
    if (key_pressed == '38') {
        up();
    }
    if (key_pressed == '40') {
        down();
    }
    if (key_pressed == '37') {
        left();
    }
    if (key_pressed == '39') {
        right();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        upload_background();
        upload_rover();
    }
}
function left() {
    if (rover_x > 0) {
        rover_x = rover_x - 10;
        upload_background();
        upload_rover();
    }
}
function down() {
    if (rover_y < 500) {
        rover_y = rover_y + 10;
        upload_background();
        upload_rover();
    }
}
function up() {
    if (rover_y > 0) {
        rover_y = rover_y - 10;
        upload_background();
        upload_rover();
    }
}

