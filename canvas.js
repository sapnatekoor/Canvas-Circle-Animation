var canvas = document.querySelector('canvas');
// console.log(canvas);
canvas.width=window.innerWidth;
canvas.height= window.innerHeight;

let ctx = canvas.getContext("2d");
// ctx.fillStyle="pink";
// ctx.fillRect(100, 100 , 100,100);
// ctx.fillRect(800, 500 , 100,100);
// ctx.fillRect(100, 500 , 100,100);
// ctx.fillRect(500, 100 , 100,100);


// ctx.beginPath();
// ctx.moveTo(200,800);
// ctx.lineTo(260,500);
// ctx.lineTo(290,700);

// ctx.stroke();

// for(let i=0;i<100;i++){
//     ctx.beginPath();

// let x = Math.random()*canvas.width;
// let y = Math.random()*canvas.height;


//     ctx.arc(x, y, 50, 0, 2 * Math.PI);
//     ctx.stroke();
// }
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx= dx;
    this.dy=dy;
    this.radius = radius;
    this.draw = function(){
        ctx.beginPath();

        // let y = Math.random()*canvas.height;
        
        
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.stroke();
    };
    this.update = function(){
            if(this.x+ this.radius > innerWidth || this.x-this.radius < 0){
       this.dx = -this.dx;
    }
    if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
        this.dy = -this.dy;
    }
        this.x += this.dx;
        this.y += this.dy
        this.draw()
    }
}

var circle = new Circle(200,200,8,8,30);
// circle.draw()

var createCircle = [];

for(i=0;i<100;i++){
    var x = Math.random()*innerWidth;
var y = Math.random()*innerHeight;
var dx = (Math.random()-0.5);
var dy = (Math.random()-0.5)
;
var radius= 50;
    createCircle.push(new Circle(x,y,dy,dx,radius))
}
console.log(createCircle)

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
for(i=0;i<createCircle.length;i++){
    createCircle[i].update();
}
    // console.log("jhhhhhhhhhh");
   
    
      
}


// var x = Math.random()*innerWidth;
// var y = Math.random()*innerHeight;
// var dx = (Math.random()-0.5)*9;
// var dy = (Math.random()-0.5)*4;
// var radius= 50;

// function animate(){
//     requestAnimationFrame(animate);
//     ctx.clearRect(0,0,canvas.width,canvas.height);

//     console.log("jhhhhhhhhhh");
//     ctx.beginPath();

// // let y = Math.random()*canvas.height;


//     ctx.arc(x, y, radius, 0, 2 * Math.PI);
//     ctx.stroke();
//     if(x+radius > canvas.width || x-radius < 0){
//         dx = -dx;
//     }
//     if(y+radius > canvas.height || y-radius < 0){
//         dy = -dy;
//     }
//         x += dx;
//         y +=dy
      
// }
animate()