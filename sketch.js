
let w = 100;
let h = 168;
let people = [];
let skinCols = [];
let bgcol;
let hairCols = [];
let cols = [];
let textGH;
let displayText = false
let englishText = [
  "As a transgender man who is not yet able to start taking hormones or undergo surgery, my hairstyle and clothing are more 'masculine'. My facial hair is gradually becoming thicker, but my voice is more 'feminine' and I have no Adam's apple.",
  "I cannot change the gender of my ID card for the time being, and my ethnic minority status, I am frequently troubled by the following problems in my daily life:  \"Are you actually a female/male?!\" \"Are you really me?\"",
  "Ticket inspectors in the subway, cashiers in supermarkets, ticket sellers in movie theaters, random passers-by on the street... all look at me strangely.",
  "Just because the gender is 'ambiguous' or the gender expression does not conform to the stereotype of 'men should be masculine and women should be feminine', they feel that they can feel confident about asking me. The truth about gender.",
  "I live in repeated and endless self-proof every day, but the people who need my proof always feel that there are flaws in my argument.",
  "To paraphrase Butler, I thought I was speaking like a human being, but I was not, my language was empty, and I could not be recognized because the norms on which recognition was based had no regard for me.",
  "I think that discussions about transgender people outside the transgender community will never be able to come up with the 'real' answers that people expect, let alone whether such a reality really exists.",
  "And if the question 'Who are you?' is asked, it's usually just the beginning.",
  "Openly stating 'I am a transgender person' does little to deter the following questions from those inquiring: \"So, are you gay?\" \"Have you had surgery down there?\" ",
  "When engaging with others, I have to be prepared at all times to face the risk of being disliked, shunned, stigmatized, or even subjected to violence and harm.",
  "I have a boy's voice and looks, but I have more secrets about a girl. The idea of 'I am a girl' was secretly growing in my heart.",
  "I was so envious when I saw little girls wearing those beautiful clothes, so I bought colorful headbands and secretly wore them on my wrists.",
  "But I can realize that I am different from ordinary girls, 'I know that women don't have that thing, I do, and I am different from others.'",
  "One day, I suddenly got my period. The classroom benches felt sticky, and when she touched them, it was blood. 'Confused, I didn't understand those things.'",
  "In their eyes, I am a freak, a monster. I couldn't answer the questions from those around me, and I didn't know why I was like this. ",
  "My parents gave me a choice: either leave this home or stay and continue being their son.",
  "Others often judge individuals solely by appearance, seeing someone's external features or hearing their voice and immediately concluding, 'Ah, this is a guy.' ",
  "I wonder, what should I do to make you understand who I truly am?",
  "Appearing cisgender is not my goal. Being transgender is a wonderful and beautiful life experience.",
  "There are always people who say that if we want to be accepted and cared for, we should do everything possible to conceal our transgender identity. Some claim that if our transgender identity is revealed, then we don't deserve love and respect.",
  "What they say is not correct. As a transgender individual, I embrace my identity and take pride in being transgender. It's a beautiful life experience.",
  "In a society that harbors aversion, fear, and exclusion towards transgender individuals, not being able to effectively conceal one's transgender identity, or choosing not to conceal it, can subject individuals to a significant amount of discrimination.",
  "Since I can remember, I've known that I am a boy. My mother loved buying clothes for me and often took me to try on beautiful dresses. These were the most painful moments for my young self."
    //The above content comes from the following websites：https://outrightinternational.org/pride-map?gclid=CjwKCAiA98WrBhAYEiwA2WvhOuSk5t5sfCMgpVRw6-hcxo0blQsUPTtHHcHNQEiIKMtm1SUPbPt0CxoC2eQQAvD_BwEhttps://chinadigitaltimes.net/chinese/694645.html；https://chinadigitaltimes.net/chinese/702677.html；
  
];

function setup() {
  bgcol = color(255);
  createCanvas(1300, 1100);
   foo = new p5.Speech(); 
       sound = Math.floor(random(this.foo.voices.length));
       foo.onEnd =function(){
         console.log("end")
         //Web Audio Speech Synthesis refer to https://idmnyu.github.io/p5.js-speech/tutorial
         displayText= false;
       }

        
  textGH = createGraphics(width, height);
  skinCols = [
    color(253, 248, 222),
    color(54, 181, 149),
    color(90,134,201),
    color(158, 62, 36),
    color(230, 123, 172),
    color(36, 36, 37),
    color(249,207,112),
    color(247, 182, 139),//light orange
    color(238, 181, 181),
    color(41,173,211),
  ];
  cols = [
    color(255),
    color(0),
    color(62, 94, 162),
    color(228, 150, 190),
    color(148, 66, 47),
    color(225, 175, 51),
    color(225, 89, 32),
    color(134, 153, 53),
    color(239, 187, 187),
    color(132, 132, 132),
  ];
  
    eyesCols = [
    color(0),
    color(54,181,149),
    color(62, 94, 162),
    color(41,173,211),
    color(228, 150, 190),
    color(148, 66, 47),
    color(225, 175, 51),
    color(134, 153, 53),
    color(132, 132, 132),
  ];
  
  hairCols = [
    color(0),
    color(43,63,61),
    color(226,96,161),
    color(132,132,132),
    color(234,177,36),
    color(224,69,16),
    
  ];
  
    noseCols = [
    color(0),
    color(141,83,148),
    color(62, 94, 162),
    color(228, 150, 190),
    color(233,77,25),
    color(109,31,13),

  ];
  
    mouseCols = [
    color(233,80,26),
    color(62, 94, 162),
    color(228, 150, 190),
    color(225, 175, 51),
    color(225, 89, 32),
    color(226, 161, 161),
    color(0),
  ];
      
  for (let x = w; x < width - w / 2; x += w * 1.1) {
    for (let y = h / 2; y < height - h / 2; y += h * 1.1) {
      people.push(new Human(x, y));
    }
  }

  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(bgcol);
  for (let human of people) {
    human.show();
  }
  
  image(textGH,0,0,width,height)
  textGH.clear()
}
function mouseClicked(){

  for (let human of people) {
    human.detectClicked();
  }
  
  
}
function turnoff(){
  displayText = false;
}
 //Initialize some basic attributes of humans
class Human {
  constructor(x, y) {
   
    this.x = x; 
    this.y = y; 
    this.s = 1;
    this.mouseCol = random(mouseCols);
    this.noseCol = random(noseCols);
    this.hearCol = random(hairCols);
    this.faceCol = random(skinCols);
    this.eyesCol = random(eyesCols);

    this.faceIndex = floor(random(5));
    this.noseIndex = floor(random(4));
    this.mustacheIndex = floor(random(-1, 2));
    this.eyesIndex = floor(random(4));
    this.mouseIndex = floor(random(5));
    this.displayText = false;
    this.textWords = random(englishText)
    this.aid = random(1)>0.8
    this.sound = random(1)>0.5 ?"Google UK English Female":"Google UK English Male";
    
    // foo.setVoice("Google UK English Male")
    // this.foo.setVoice('Google UK English Male');

  }
  detectClicked(){
         foo.setVoice(this.sound);

        let dd = dist(mouseX, mouseY, this.x, this.y);

    if(dd<w/2){
      
     this.displayText  = !this.displayText;
      if(this.displayText ){
        displayText=true
        
        foo.speak(this.textWords); // say something

      }else{
        foo.stop()
      }
    }
  }
  // turnoff(){
  //    this.displayText= false;
  // }
  show() {
//     if(!this.displayText){
      
//     }
    if(displayText == false){
      this.displayText=false
      foo.stop()
    }
    let dd = dist(mouseX, mouseY, this.x, this.y);

    let mouseFactor = map(dd, 0, 300, 1.2, 0, true);
    let sc = mouseFactor;
    this.s = sc + 1;
    push();
    translate(this.x, this.y);
    scale(this.s);

   if (this.faceIndex == 0) {
      this.face_hear0();
    } else if (this.faceIndex == 1) {
      this.face_hear1();
    } else if (this.faceIndex == 2) {
      this.face_hear2();
    } else if (this.faceIndex == 3) {
      this.face_hear3();
    } else if (this.faceIndex == 4) {
      this.face_hear4();
    }
    if (this.mustacheIndex == 0) {
      this.mustache0();
    } else if (this.mustacheIndex == 1) {
      this.mustache1();
    }
    
   
    
    if(this.displayText){
      push()
      scale(0.8+0.4*noise(frameCount*0.1))
      this.mouse2();
      pop()
    }else{
      if (this.mouseIndex == 0) {
      this.mouse0();
    } else if (this.mouseIndex == 1) {
      this.mouse1();
    } else if (this.mouseIndex == 2) {
      this.mouse2();
    } else if (this.mouseIndex == 3) {
      this.mouse3();
     } else if (this.mouseIndex == 4) {
      this.mouse4();
    }
    }

    if (this.eyesIndex == 0) {
      this.eyes0();
    } else if (this.eyesIndex == 1) {
      this.eyes1();
    } else if (this.eyesIndex == 2) {
      this.eyes2();
    } else if (this.eyesIndex == 3) {
      this.eyes3();
    }

    if (this.noseIndex == 0) {
      this.nose0();
    } else if (this.noseIndex == 1) {
      this.nose1();
    } else if (this.noseIndex == 2) {
      this.nose2();
    } else if (this.noseIndex == 3) {
      this.nose3();
    }
    if(this.aid){
      this.chuan()
    }
  if(this.displayText){
      this.showText();
  }
 
    pop();
  }

  face_hear1() {
    //long hair girl
    push();
    fill(this.hearCol);
    circle(0, -h * 0.2, w * 0.9);
    rect(0, h * 0.1, w * 0.9, h * 0.7);
    push();
    fill(bgcol);
    noStroke();
    triangle(
      -w * 0.32,
      h * 0.45,
      -w * 0.3 + 3,
      h * 0.45,
      -w * 0.3,
      h * 0.45 - 13
    );
    pop();
    pop();

    push();
    strokeCap(ROUND);
    strokeWeight(25.0);
    stroke(this.faceCol);
    pop();//OpenAI. (2023). ChatGPT (Mar 14 version) [Round corner settings]. https://chat.openai.com/chat

    push();

    fill(this.faceCol);
    ellipse(-w * 0.35, -h * 0.06, w * 0.12, h * 0.15);
    ellipse(w * 0.35, -h * 0.06, w * 0.12, h * 0.15);

    let cornerRadius = 0.25 * w; 
rect(0, -h * 0.05, w * 0.7, h * 0.65, cornerRadius);
    rect(0, h * 0.2, w * 0.58, h * 0.40, cornerRadius);
    pop();
    
//Bangs
    push();
    strokeCap(ROUND);
    strokeWeight(22.0);
    stroke(this.hearCol);
    line(-w * 0.22, -h * 0.31, w * 0.22, -h * 0.31);
    pop();
  }
  
  //Upper rectangular + round face size 0 face
  face_hear0() {
    push();
    strokeWeight(70);
    stroke(this.hearCol);
    line(-w * 0.2, -h * 0.25, w * 0.2, -h * 0.25);
    pop();
    push();

    fill(this.faceCol);
    //ear
    ellipse(-w * 0.35, -h * 0.06, w * 0.1, h * 0.1);
    ellipse(w * 0.35, -h * 0.06, w * 0.1, h * 0.1);
    push();
    fill(234,177,36);
    circle(-w * 0.4, -h * 0.02, w * 0.1); 
    circle(w * 0.4, -h * 0.02, w * 0.1); 
    pop();
    circle(0, h * 0.18, w * 0.7); 
    rect(0, -h * 0.05, w * 0.7, h * 0.5); 
    pop();
  }
//Four round heads
  face_hear2() {
    //ear
    push();
    fill(this.faceCol);
     ellipse(-w * 0.35, -h * 0.06, w * 0.15, h * 0.12);
    ellipse(w * 0.35, -h * 0.06, w * 0.15, h * 0.12);
    pop();

    push();
    stroke(this.faceCol);
    strokeWeight(70);
    line(0, -h * 0.2, 0, h * 0.2);
    pop();

    //hear
    push();
    fill(this.hearCol);
    circle(-w * 0.35, -h * 0.2, w * 0.3);
    circle(w * 0.35, -h * 0.2, w * 0.3);
    circle(-w * 0.15, -h * 0.35, w * 0.38);
    circle(w * 0.15, -h * 0.35, w * 0.38);
    pop();
  }
  //cute curly head
  face_hear4() {
    //ear
    push();
    fill(this.faceCol);
    ellipse(-w * 0.35, -h * 0.07, w * 0.2, h * 0.15);
    ellipse(w * 0.35, -h * 0.07, w * 0.2, h * 0.15);
    pop();
    push();
    stroke(this.faceCol);
    strokeWeight(30);
    fill(this.faceCol);
    strokeJoin(ROUND);
    rect(0, h * 0.05, w * 0.45, h * 0.35);
    rect(0, h * 0.048, w * 0.33, h * 0.6);
    pop();


    // //hear
    push();
    fill(this.hearCol);
    circle(-w * 0.35, h * 0, w * 0.11);
    circle(-w * 0.35, -w * 0.1, w * 0.11);
    circle(-w * 0.35, -w * 0.2, w * 0.11);
    circle(-w * 0.35, -w * 0.3, w * 0.11);
    circle(-w * 0.35, -w * 0.4, w * 0.11);
    circle(-w * 0.35, -w * 0.5, w * 0.11);
    circle(-w * 0.27, -w * 0.55, w * 0.11);
    circle(-w * 0.17, -w * 0.56, w * 0.11);
    circle(-w * 0.07, -w * 0.56, w * 0.11);
    circle(w * 0.03, -w * 0.56, w * 0.11);
    circle(w * 0.13, -w * 0.56, w * 0.11);
    circle(w * 0.23, -w * 0.56, w * 0.11);
    circle(w * 0.32, -w * 0.52, w * 0.11);
    circle(w * 0.34, -w * 0.42, w * 0.11);
    circle(w * 0.34, -w * 0.32, w * 0.11);
    circle(w * 0.34, -w * 0.22, w * 0.11);
    circle(w * 0.34, -w * 0.12, w * 0.11);
    circle(w * 0.34, -w * 0.02, w * 0.11);
    circle(w * 0.34, -w * 0.12, w * 0.11);


    pop();
  }
  //braided head
  face_hear3() {
        push();
    fill(this.hearCol);
     rotate(radians(15));
    rect(-w * 0.3, h * 0.1, w * 0.16,w * 0.26,10);
    rect(-w * 0.32, h * 0.25, w * 0.16,w * 0.26,10);
    triangle(-w * 0.39, h * 0.4, -w * 0.32, h * 0.31, -w * 0.26,h * 0.39);
    pop();
    
    push();
    fill(this.hearCol);
     rotate(-radians(15));
    rect(w * 0.3, h * 0.1, w * 0.16,w * 0.26,10);
    rect(w * 0.32, h * 0.25, w * 0.16,w * 0.26,10);
    triangle(w * 0.39, h * 0.39, w * 0.32, h * 0.31, w * 0.26,h * 0.39);
    pop();
    
    //ear
    push();
    fill(this.faceCol);
    ellipse(-w * 0.37, -h * 0.06, w * 0.15, h * 0.15);
    ellipse(w * 0.37, -h * 0.06, w * 0.15, h * 0.15);
    pop();

    push();
    stroke(this.faceCol);
    strokeWeight(30);
    fill(this.faceCol);
    strokeJoin(ROUND);
    rect(0, -h * 0.01, w * 0.4, h * 0.59);
    pop();

 //hear
    push();
    fill(this.hearCol);
    circle(-w * 0.38, -h * 0.2, w * 0.25);
    circle(w * 0.38, -h * 0.2, w * 0.25);
    push();
    translate(-w * 0.18, -h * 0.3);
    rotate(PI / 3);
    ellipse(0-3, 0-5, w * 0.29, h * 0.25);
    pop();//OpenAI. (2023). ChatGPT (Mar 14 version) [How to rotate]. https://chat.openai.com/chat
    
    push();
    translate(w * 0.18, -h * 0.3);
    rotate(-PI / 3);
    ellipse(0+3, 0-5, w * 0.29, h * 0.25);
    pop();//OpenAI. (2023). ChatGPT (Mar 14 version) [How to rotate]. https://chat.openai.com/chat
    pop();
  }

  mouse1() {
    
 //tears
  fill(0, 0, 255); 
  noStroke(); 
  beginShape();
  vertex(0 * 0.105, h * 0.14);
  bezierVertex(0 * 0.05, h * 0.06, 0 * 0.1, h * 0.06,0 * 0.15, h * 0.14); 
  endShape(CLOSE);
    
    push();
    strokeCap(ROUND);
    strokeWeight(10.0);
    stroke(this.mouseCol);
    // strokeCap(ROUND);
    noFill()
  strokeWeight(5);
  beginShape();
vertex(-w * 0.15, h * 0.24);
quadraticVertex(0, h * 0.25 - 25, w * 0.15, h * 0.24);
  endShape();
    pop();

    
  }
  
  //没有线的厚嘴唇
  mouse3() {
    push();
    // strokeCap(ROUND);
    fill(this.mouseCol);
    stroke(this.mouseCol);
    // strokeWeight(20.0);
    ellipse(-w * 0.06, h * 0.25, w * 0.12, w * 0.1);
    ellipse(w * 0.06, h * 0.25, w * 0.12, w * 0.1);
    arc(0, h * 0.25, w * 0.24, h * 0.1, 0, PI);
    pop();
  }
  
  mouse2() {//张嘴
    push();
    // strokeCap(ROUND);
    fill(this.mouseCol);
    stroke(this.mouseCol);
    // strokeWeight(20.0);
    circle(0, h * 0.25, w * 0.25);
    fill(0);
    circle(0, h * 0.25, w * 0.15);
    pop();
  }
  
  //lined lips
  mouse4() {
  push();
  fill(this.mouseCol);
  stroke(this.mouseCol);

  ellipse(-w * 0.08, h * 0.20, w * 0.15, w * 0.12);
  ellipse(w * 0.08, h * 0.20, w * 0.15, w * 0.12);
  arc(0, h * 0.20, w * 0.30, h * 0.15, 0, PI);//OpenAI. (2023). ChatGPT (Mar 14 version) [The principle of ellipse drawing]. https://chat.openai.com/chat

  //lip slit
 stroke(0); 
    noFill()
  strokeWeight(2);
  beginShape();
  vertex(-w * 0.2, h * 0.20);
  quadraticVertex(0, h * 0.25, w * 0.2, h * 0.20);
  endShape();
  

  pop();
}
  
    mouse0() {//purse your lips
     let centerColor = color(255, 0, 0); 
  let edgeColor = color(255, 0, 0,0); 
   // Wound
      // console.log(w*0.25)
  for (let r =w*0.25; r>=0; r -= 1) {
    let lerpedColor = lerpColor(centerColor, edgeColor, map(r,0,w*0.25,0.5,1));
    fill(lerpedColor);
    ellipse(w * 0.17, h * 0.25, r);
  }
    push();
    strokeCap(ROUND);
    strokeWeight(20.0);
    stroke(this.mouseCol);
    line(-w * 0.1, h * 0.25, w * 0.1, h * 0.24);
    strokeWeight(3);
    stroke(0);
    line(-w * 0.1, h * 0.25, w * 0.1, h * 0.24);
    pop();
  }
  
  nose1() {//triangular nose
    push();
    fill(this.noseCol);
    triangle(0, -h * 0.08, w * 0.05, h * 0.1, -w * 0.05, h * 0.1);
    pop();
  }
  nose2() {//Rectangular nose
    push();
    fill(this.noseCol);
    rect(0, h * 0.04, w * 0.1, h * 0.13);
    pop();
  }
  nose3() {
    push();
    fill(this.noseCol);
    triangle(
      0,
      -h * 0.06,
      w * 0.055,
      h * 0.05 - w * 0.05,
      -w * 0.055,
      h * 0.05 - w * 0.05
    );
    rect(0, h * 0.05, w * 0.1, w * 0.15);
    pop();
  }
  
  nose0() {
    push();
    fill(this.noseCol);
    circle(0, h * 0.04, w * 0.18);
    
    pop();
  }
  
  chuan(){
    push();
    // fill(this.noseCol);
    // circle(0, h * 0.04, w * 0.18);
    //创口贴
    fill(186,131,82);
    rect(-w * 0.01, h * 0.04,  w * 0.45, w * 0.12, 5);
    fill(245,214,173);
    rect(-w * 0.0, h * 0.04,  w * 0.2, w * 0.07, 3);
    //左孔
    ellipse(-w * 0.17,h * 0.03, w * 0.025, w * 0.02);
    ellipse(-w * 0.13,h * 0.03, w * 0.025, w * 0.02);
    circle(-w * 0.13,h * 0.05, w * 0.025);
    circle(-w * 0.17,h * 0.05, w * 0.025);
    
  //右孔
     //左孔
    ellipse(w * 0.17,h * 0.03, w * 0.025, w * 0.02);
    ellipse(w * 0.13,h * 0.03, w * 0.025, w * 0.02);
    circle(w * 0.13,h * 0.05, w * 0.025);
    circle(w * 0.17,h * 0.05, w * 0.025);
    
    pop();
  }

  
  
  
  eyes1() {
    let s = w * 0.15;
    let offX = map(mouseX - this.x, -width, width, -5, 5, true);
    let offY = map(mouseY - this.y, -height, height, -5, 5, true);
 //eyeball
    push();
    strokeWeight(1);
    fill(255);
    ellipse(-w * 0.16, -h * 0.13, s * 1.2, s*1.2);
    pop();
    fill(this.eyesCol);
    ellipse(-w * 0.16 + offX, -h * 0.13 + offY, s *0.8, s *0.8);
    fill(255);
    ellipse(w * 0.16, -h * 0.13, s * 1.2, s*1.2);
    fill(this.eyesCol);
    ellipse(w * 0.16 + offX, -h * 0.13 + offY, s *0.8, s *0.8);
    
//eye shadow
   fill(eyesCols) ;
    beginShape()
    curveVertex( -w * 0.28, -h * 0.12)
    curveVertex( -w * 0.28, -h * 0.12)
    curveVertex(-w * 0.15, -h * 0.23)
    curveVertex( -w * 0.03, -h * 0.12)
    curveVertex(-w * 0.03, -h * 0.12)
    endShape(CLOSE)
   
      beginShape()
    curveVertex( w * 0.3, -h * 0.12)
    curveVertex( w * 0.3, -h * 0.12)
    curveVertex(w * 0.15, -h * 0.23)
    curveVertex( w * 0.05, -h * 0.12)
    curveVertex(w * 0.05, -h * 0.12)
    endShape(CLOSE)
    //eye shadow
    fill(0)    
    beginShape()
    curveVertex( -w * 0.3, -h * 0.12)
    curveVertex( -w * 0.3, -h * 0.12)
    curveVertex(-w * 0.20, -h * 0.16)
    curveVertex( -w * 0.03, -h * 0.12)
    curveVertex(-w * 0.03, -h * 0.12)
    endShape(CLOSE)
    
     fill(0)    
    beginShape()
    curveVertex( w * 0.3, -h * 0.12)
    curveVertex( w * 0.3, -h * 0.12)
    curveVertex(w * 0.20, -h * 0.16)
    curveVertex( w * 0.03, -h * 0.12)
    curveVertex(w * 0.03, -h * 0.12)
    endShape(CLOSE)
    //lower eyelashes
    push();
    stroke(0)
    line(-w * 0.22, -h * 0.09, -w * 0.25, -h * 0.06);
    line(-w * 0.15, -h * 0.075, -w * 0.15, -h * 0.05);
    line(-w * 0.08, -h * 0.09, -w * 0.05, -h * 0.06);
    line(w * 0.22, -h * 0.09, w * 0.25, -h * 0.06);
    line(w * 0.15, -h * 0.075, w * 0.15, -h * 0.05);
    line(w * 0.08, -h * 0.09, w * 0.05, -h * 0.06);
   pop();
  }
   eyes3() {
    let s = w * 0.15;
    let offX = map(mouseX - this.x, -width, width, -5, 5, true);
    let offY = map(mouseY - this.y, -height, height, -5, 5, true);
      push();
    stroke(0)
     //upper eyelashes
    line(-w * 0.22, -h * 0.185, -w * 0.25, -h * 0.22);
    line(-w * 0.18, -h * 0.192, -w * 0.2, -h * 0.225);
    line(-w * 0.15, -h * 0.193, -w * 0.15, -h * 0.23);
    line(-w * 0.12, -h * 0.192, -w * 0.1, -h * 0.23);
    line(-w * 0.08, -h * 0.185, -w * 0.05, -h * 0.22);
    line(w * 0.22, -h * 0.185, w * 0.25, -h * 0.22);
    line(w * 0.18, -h * 0.192, w * 0.2, -h * 0.225);
    line(w * 0.12, -h * 0.192, w * 0.1, -h * 0.23);
    line(w * 0.15, -h * 0.19, w * 0.15, -h * 0.23);
    line(w * 0.08, -h * 0.185, w * 0.05, -h * 0.22);
    //lower eyelashes
    line(-w * 0.22, -h * 0.11, -w * 0.25, -h * 0.085);
    line(-w * 0.18, -h * 0.117, -w * 0.2, -h * 0.075);
    line(-w * 0.15, -h * 0.105, -w * 0.15, -h * 0.07);
    line(-w * 0.12, -h * 0.117, -w * 0.1, -h * 0.075);
    line(-w * 0.08, -h * 0.11, -w * 0.05, -h * 0.085);
    line(w * 0.22, -h * 0.11, w * 0.25, -h * 0.08);
    line(w * 0.18, -h * 0.117, w * 0.2, -h * 0.075);
    line(w * 0.15, -h * 0.105, w * 0.15, -h * 0.07);
    line(w * 0.12, -h * 0.117, w * 0.1, -h * 0.075);
    line(w * 0.08, -h * 0.11, w * 0.05, -h * 0.08);
     pop();
    noStroke()
    fill(255);
    ellipse(-w * 0.15, -h * 0.15, s * 1.4, s*1.2);
    fill(0);
    ellipse(-w * 0.15 + offX, -h * 0.15 + offY, s *0.9, s *0.9);
    fill(this.eyesCol);
    ellipse(-w * 0.15 + offX, -h * 0.15 + offY, s *0.4, s *0.4);
    fill(255);
    ellipse(w * 0.15, -h * 0.15, s * 1.4, s*1.2);
    fill(0);
    ellipse(w * 0.15 + offX, -h * 0.15 + offY, s *0.9, s *0.9);
    fill(this.eyesCol);
    ellipse(w * 0.15 + offX, -h * 0.15 + offY, s *0.4, s *0.4);
     
  
  }
  eyes0() {//eyes with transparency
    let s = w * 0.15;
    let offX = map(mouseX - this.x, -width, width, -6, 6, true);
    let offY = map(mouseY - this.y, -height, height, -6, 6, true);
    fill(255);
    ellipse(-w * 0.15, -h * 0.12, s * 1.4, s);
    fill(this.eyesCol);
    ellipse(-w * 0.15 + offX, -h * 0.12 + offY, s / 1.5, s / 1.5);

    fill(255);
    ellipse(w * 0.15, -h * 0.12, s * 1.4, s);
    fill(this.eyesCol);
    ellipse(w * 0.15 + offX, -h * 0.12 + offY, s / 1.5, s / 1.5);

    fill(red(this.eyesCol), green(this.eyesCol), blue(this.eyesCol), 200);//OpenAI. (2023). ChatGPT (Mar 14 version) [Transparency settings]. https://chat.openai.com/chat
    arc(w * 0.15, -h * 0.13, s * 1.6, s * 1.1, -PI, 0);
    arc(-w * 0.15, -h * 0.13, s * 1.6, s * 1.1, -PI, 0);
    push();
    fill(hairCols);
    rotate(PI/36)
    rect(w * 0.15, -h * 0.22, s * 1.4, s * 0.2, 10);
   pop();
    
    push();
    fill(hairCols);
    rotate(-PI/36)
    rect(-w * 0.15, -h * 0.22, s * 1.4, s * 0.2, 10);
   pop();
    
  }
//The most common male eyes
  eyes2() {
    let s = w * 0.15;
    let offX = map(mouseX - this.x, -width, width, -5, 5, true);
    let offY = map(mouseY - this.y, -height, height, -5, 5, true);
    push();
    fill(255);  
    strokeWeight(2)
    stroke(0); 
    ellipse(-w * 0.15, -h * 0.12, s*1.2 , s*1.2);
    pop();
    fill(0);
    ellipse(-w * 0.15 + offX, -h * 0.12 + offY, s / 1.3, s / 1.3);
    
push ();
    fill(255);
     strokeWeight(2)
    stroke(0); 
    ellipse(w * 0.15, -h * 0.12, s*1.2 , s*1.2);
    pop ();
    fill(0);
    ellipse(w * 0.15 + offX, -h * 0.12 + offY, s / 1.3, s / 1.3);
    push();
    fill(hairCols);
    rotate(-PI/10)
    rect(w * 0.2, -h * 0.2, s * 1.1, s * 0.3, 10);
   pop();
    
    push();
    fill(hairCols);
    rotate(PI/10)
    rect(-w * 0.2, -h * 0.2, s * 1.1, s * 0.3, 10);
   pop();
    
  }
  
  
  mustache0() {
    let offsetY = h * 0.2;
    let maxRadius = w * 0.3;
    fill(0); 
    // 横向
    for (let y = -maxRadius * 0.3; y <= maxRadius; y += 4) {
      // 纵向
      for (let x = -maxRadius; x <= maxRadius; x += 4) {
        let distance = dist(x, y, 0, 0); 
        if (distance < maxRadius) {
          let size = 2; 
          ellipse(
            x + 2 * noise(x + y),
            offsetY + y + 2 * noise(10 + x + y),
            size,
            size
          ); 
        }
      }
    }
  }

  mustache1() {
    push();
    fill(this.noseCol);
    rect(-w * 0.15, h * 0.14, w * 0.01, h * 0.05);
    rect(-w * 0.11, h * 0.14, w * 0.01, h * 0.05);
    rect(-w * 0.07, h * 0.14, w * 0.01, h * 0.05);
    rect(-w * 0.03, h * 0.14, w * 0.01, h * 0.05);
    rect(w * 0.01, h * 0.14, w * 0.01, h * 0.05);
    rect(w * 0.05, h * 0.14, w * 0.01, h * 0.05);
    rect(w * 0.09, h * 0.14, w * 0.01, h * 0.05);
    rect(w * 0.13, h * 0.14, w * 0.01, h * 0.05);
    pop();
  }
  showText() {
    textGH.push();
    textGH.translate(this.x, this.y);
    textGH.scale(this.s);
    textGH.stroke(220);
    textGH.strokeJoin(ROUND);
    textGH.strokeWeight(10);
    textGH.fill(220);
    textGH.rect(w * 0.2, -h * 0.2, w * 0.6, h * 0.3);
    textGH.strokeWeight(1);
    textGH.triangle(
      w * 0.2,
      h * 0.1,
      w * 0.2,
      h * 0.1 + 20,
      w * 0.2 + 30,
      h * 0.1
    );
    textGH.fill(0);
    textGH.textAlign(CENTER, CENTER);
    textGH.textSize(5);
    textGH.text(this.textWords, w * 0.2, -h * 0.2, w * 0.6, h * 0.3);
    textGH.pop();
  }
}