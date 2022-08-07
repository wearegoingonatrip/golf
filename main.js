

var canvas = new fabric.Canvas("myCanvas");

ball_y=0
ball_x=0
hole_y=400
hole_x=800

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obg = Img;
		hole_obg.scaleToWidth(50);
		hole_obg.scaleToHeight(50);
		hole_obg.set({
			top:hole_y,
			left:hole_x
		});
        canvas.add(hole_obg);

	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obg = Img;
		ball_obg.scaleToWidth(50);
		ball_obg.scaleToHeight(50);
		ball_obg.set({
			top:ball_y,
			left:ball_x
		});
        canvas.add(ball_obg);

	});
}

window.addEventListener("keydown", my_keyvdown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obg);
		document.getElementById("hd3").innerHTML="you have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y <=40){
			ball_y=ball_y+block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Down arrow key is pressed, X =" + ball_x + ", Y =" +ball_y);
			canvas.remove(ball_obg);
			new_image();
		 }
	}

	function down()
	{
		 if(ball_y <=450){
			ball_y=ball_y+block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Down arrow key is pressed, X =" + ball_x + ", Y =" +ball_y);
			canvas.remove(ball_obg);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Left arrow key is pressed, X =" + ball_x + ", Y =" +ball_y);
			canvas.remove(ball_obg);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Left arrow key is pressed, X =" + ball_x + ", Y =" +ball_y);
			canvas.remove(ball_obg);
			new_image();
		}
	}
	
}

