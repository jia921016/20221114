var face_x=[]
var face_y=[]
var face_size=[]
var face_num=10




function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  // mic=new p5.AudioIn();
  // mic.start();
  for(var i=0;i<20;i++){
    face_size[i] = random(100,400)//臉的大小100~400
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
   }
  
}

function draw() {
 background(220);
 textSize(40)
 text("X:"+mouseX+"Y:"+mouseY,50,50)


// var micLevel=mic.getLevel();
// console.log()

for(var j=0;j<face_num;j++){

 push()
    translate(face_x[j],face_y[j]) 
  fill("#d5bdaf")
    ellipse(0,0,face_size[j]/1.05,face_size[j]/0.88) //臉
    fill("#caf0f8")
    triangle(0,-face_size[j]/20,-face_size[j]/13,face_size[j]/13,face_size[j]/20,face_size[j]/13) //鼻子

    // fill("#0077b6")
    // ellipse(-25,0,20)//左鼻孔
    // ellipse(25,0,20)//右鼻孔
    fill("#bc4749")

    ellipse(-face_size[j]/5.3,-face_size[j]/5,face_size[j]/6.66,face_size[j]/10) //眼睛
    ellipse(face_size[j]/5.3,-face_size[j]/5,face_size[j]/6.66,face_size[j]/10) //眼睛
  
    fill(0)
    ellipse(-face_size[j]/5.3+map(mouseX,0,width,-10,10),-face_size[j]/5+map(mouseY,0,height,-10,10),face_size[j]/16)//左眼珠
    ellipse(face_size[j]/5.3+map(mouseX,0,width,-10,10),-face_size[j]/5+map(mouseY,0,height,-10,10),face_size[j]/16)

    arc(0,-face_size[j]/3.07,face_size[j]/1.21,face_size[j]/1.6,180,0) //瀏海

     if(mouseIsPressed)
     {
       fill("#354f52")
       arc(0,face_size[j]/5.3,face_size[j]/4,face_size[j]/5.3,0,180)//滑鼠按下，嘴巴變綠色
     }
     else
     { 
 fill("#ffddd2")
   arc(0,face_size[j]/5.3,face_size[j]/4,face_size[j]/13,0,180)//一班的嘴巴是米色
   }
  
  }
  pop()




 

}

