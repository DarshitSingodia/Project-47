squares = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];



function setup(){
  createCanvas(600, 600);
}
function draw (){
  background ("cyan");

  strokeWeight(6);
  //line(150, 200, 400, 200);
  //line(150, 300, 400, 300);
  //line(230, 140, 230, 370);
  //line(320, 140, 320, 370);

  textSize(50);
  text("\t_________________\n", 45, 157);

  text("\t|          |          |          |\n", 50, 200);
  text("\t|   "+squares[0]+ "     |   "+squares[1]+ "     |   "+squares[2]+ "     |                    \n", 50, 235);
  text("\t|          |          |          |\n", 50, 270);
  text("\t_________________\n", 45, 250);

  text("\t|          |          |          |\n", 50, 305);
  text("\t|   "+squares[3]+ "     |   "+squares[4]+ "     |   "+squares[5]+ "     |                    \n", 50, 340);
  text("\t|          |          |          |\n", 50, 375);
  text("\t_________________\n", 45, 365);

  text("\t|          |          |          |\n", 50, 410);
  text("\t|   "+squares[6]+ "     |   "+squares[7]+ "     |   "+squares[8]+ "     |                    \n", 50, 445);
  text("\t|          |          |          |\n", 50, 480);
  text("\t_________________\n", 45, 475);
}