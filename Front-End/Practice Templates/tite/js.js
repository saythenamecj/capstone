var canvas = document.getElementById("circle1");
var obj = canvas.getContext("2d");

obj.beginPath();
obj.arc(150,100,25,0,2*Math.PI,false);
obj.fillStyle="red";
obj.fill();
obj.lineWidth=1;
obj.strokeStyle="red";
obj.stroke();

var canvas = document.getElementById("circle2");
var obj2 = canvas.getContext("2d");

obj2.beginPath();
obj2.arc(200,100,25,0,2*Math.PI,false);
obj2.fillStyle="red";
obj2.fill();
obj2.lineWidth=1;
obj2.strokeStyle="red";
obj2.stroke();

var canvas = document.getElementById("circle3");
var obj3 = canvas.getContext("2d");

obj3.beginPath();
obj3.scale(1,2);
obj3.arc(175,26,25,0,2*Math.PI,false);
obj3.restore();
obj3.fillStyle="red";
obj3.fill();
obj3.lineWidth=1;
obj3.strokeStyle="red";
obj3.stroke();