
var myCanvas = 0;
block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToheight(block_image_height);
        block_image_object.set({
top:player_y,
left:player_x
        });
canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		fabric.Image.fromURL("rr1.jpg", function(Img) {
			player_object = Img;
			player_object.scaleToWidth(150);
			player_object.scaleToHeight(140);
			player_object.set({
			top:player_y,
			left:player_x
			});
			canvas.add(player_object);
				});
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		fabric.Image.fromURL("gr.png", function(Img) {
			player_object = Img;
			player_object.scaleToWidth(150);
			player_object.scaleToHeight(140);
			player_object.set({
			top:player_y,
			left:player_x
			});
			canvas.add(player_object);
				});
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		fabric.Image.fromURL("yr.png", function(Img) {
			player_object = Img;
			player_object.scaleToWidth(150);
			player_object.scaleToHeight(140);
			player_object.set({
			top:player_y,
			left:player_x
			});
			canvas.add(player_object);
				});
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		fabric.Image.fromURL("pr.png", function(Img) {
			player_object = Img;
			player_object.scaleToWidth(150);
			player_object.scaleToHeight(140);
			player_object.set({
			top:player_y,
			left:player_x
			});
			canvas.add(player_object);
				});
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		fabric.Image.fromURL("br.png", function(Img) {
			player_object = Img;
			player_object.scaleToWidth(150);
			player_object.scaleToHeight(140);
			player_object.set({
			top:player_y,
			left:player_x
			});
			canvas.add(player_object);
				});
	}
	
}

