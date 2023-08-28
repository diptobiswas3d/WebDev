const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
  constructor(x, y, speed, angle) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.radius = Math.random() * 3 + 2;
    this.opacity = 1;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = `hsla(0, 100%, 0%, ${this.opacity})`;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    this.opacity -= 0.01;
    if (this.opacity <= 0.01) this.opacity = 0;
    this.draw();
  }
}

let mouseClicked = false;
const particlesMouseClick = [];
const particlesMouseMove = [];
const numOfParticlesMouseClick = 250;
const numOfParticlesMouseMove = 5;

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (mouseClicked) {
    particlesMouseClick.forEach((particle, index) => {
      particle.update();
      if (particle.opacity == 0) {
        particlesMouseClick.splice(index, 1);
      }
    });
  }
  particlesMouseMove.forEach((particle, index) => {
    particle.update();
    if (particle.opacity == 0) {
      particlesMouseMove.splice(index, 1);
    }
  });
}

addEventListener("click", (e) => {
  for (let i = 0; i < numOfParticlesMouseClick; i++) {
    let speed = Math.random() * 5 - 2.5;
    let angle = Math.random() * Math.PI * 2;
    particlesMouseClick.push(new Particle(e.clientX, e.clientY, speed, angle));
  }
  mouseClicked = true;
});
addEventListener("mousemove", (e) => {
  for (let i = 0; i < numOfParticlesMouseMove; i++) {
    let speed = Math.random() * 2 - 1;
    let angle = Math.random() * Math.PI * 2;
    particlesMouseMove.push(new Particle(e.x, e.y, speed, angle));
  }
});

animate();
