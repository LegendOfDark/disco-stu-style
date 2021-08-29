const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');

// declare canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArr = [];
let hue = 0;


//measure title element
let titleElement = document.getElementById('title1');
let titleMeasure = titleElement.getBoundingClientRect();

let title = {
    x: titleMeasure.left,
    y: titleMeasure.top,
    width: titleMeasure.width,
    height: 20
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasure = titleElement.getBoundingClientRect();    
    title = {
        x: titleMeasure.left,
        y: titleMeasure.top,
        width: titleMeasure.width,
        height: 20
    }
    init();
});





class Particle {
    constructor(x,y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.weight = Math.random() * 2 + 1;
        this.directionX = (Math.random() - 0.5) * 3;
        this.hue = Math.random() * 360;
        // this.directionY = 1;
    }
    hiisafa
    
    draw(){
        this.hue += 1;
        c.fillStyle = 'hsl(' + this.hue + ', 100%, 50%)';
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.closePath();
        c.fill();
    }

    update(){
        // if go belows the screen
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 2 + 5;
            this.x = Math.random() * canvas.width *  0.8;
        }
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;
        this.draw();

        // if touches left or right
        if (this.x - this.size < 0) this.directionX = -this.directionX;
        if (this.x + this.size > canvas.width) this.directionX = - this.directionX;



        //check for collision
        if(
            this.x < title.x + title.width &&
            this.x + this.size > title.x &&
            this.y < title.y + title.height &&
            this.y + this.size > title.y
        ){
            this.y -= 3;
            this.weight *= -0.4;
        }
    }
}

let particle_num = 300;

let init = () => {
    particleArr = [];
    for (let i = 0; i < particle_num; i++){
        const size = Math.random() * 10 + 2;
        const x = Math.random() * canvas.width - size;
        const y = Math.random() * canvas.height + size;
        particleArr.push(new Particle(x, y, size));
    }
}

//handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150
}

let animate = () => {
    // disco();
    c.fillStyle = 'rgba(0, 0, 0, 0.1)';
    c.fillRect(0 , 0, canvas.width, canvas.height);
    particleArr.forEach(element => element.update());
    // disco();
    requestAnimationFrame(animate);
    // c.fillRect(title.x, title.y, title.width, title.height);
};
init();
animate();