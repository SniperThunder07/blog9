var last_x, last_y;
color ="black";
width_of_line = 2;

var width = screen.width;
var height = screen.height;

new_width = screen.width - 100;
new_heigt = screen.height - 300;

if(width < 992)
{
    document.getElementById("mycanvas").width =new_width;
    document.getElementById("mycanvas").height =new_height;
    document.body.style.overflow="hidden";

}

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
        //Addictonal Activity ends
        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clientY - canvas.offsetTop;
    }

       canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        current_x = e.touches[0].clientX - canvas.offsetLeft;
        current_y = e.touches[0].clientY - canvas.offsetTop;

        {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_x, last_y);

    
        ctx.lineTo(current_x, current_y)
        ctx.stroke();
        }

        last_x = current_x; 
        last_y = current_y;
    }

