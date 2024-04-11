// Declare variables below to save the different divs of your story.
let beginScreen = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneThirdScreen1 = document.querySelector(".option-one-screen-c1");
let optionOneThirdScreen2 = document.querySelector(".option-one-screen-c2");
let optionTwoThirdScreen1 = document.querySelector(".option-two-screen-c1");
let optionTwoThirdScreen2 = document.querySelector(".option-two-screen-c2");
let optionOneEnd1_1 = document.querySelector(".option-one-end-c1");
let optionOneEnd1_2 = document.querySelector(".option-one-end-c2");
let optionTwoEnd2_1 = document.querySelector(".option-two-end-c1");
let optionTwoEnd2_2 = document.querySelector(".option-two-end-c2");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let button1_1 = document.querySelector(".option-one-button1");
let button1_2 = document.querySelector(".option-one-button2");
let button2_1 = document.querySelector(".option-two-button1");
let button2_2 = document.querySelector(".option-two-button2");
let name = document.querySelector(".input");
let pname = document.querySelector(".pname");
let sub = document.querySelector(".submit");
let reset1_1 = document.querySelector(".reset1_1");
let reset1_2 = document.querySelector(".reset1_2");
let reset2_1 = document.querySelector(".reset2_1");
let reset2_2 = document.querySelector(".reset2_2");

sub.addEventListener("click", function(){
  pname.style.display = "block";
  pname.innerHTML = name.value;
  sub.style.display = "none"
  name.style.display = "none"
  button1.style.display = "block"
  button2.style.display = "block"
});


button1.addEventListener('click',function(){
  optionOneScreen.style.display = "block"
  beginScreen.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  name.style.display = "none"
  button1_1.style.display = "block"
  button1_2.style.display = "block"
});

button1_1.addEventListener('click',function(){
  optionOneThirdScreen1.style.display = "block"
  optionOneScreen.style.display = "none"
  button1_1.style.display = "none"
  button1_2.style.display = "none"
});

optionOneThirdScreen1.addEventListener('click',function(){
  optionOneEnd1_1.style.display = "block"
  optionOneThirdScreen1.style.display = "none"
});

button1_2.addEventListener('click',function(){
  optionOneThirdScreen2.style.display = "block"
  optionOneScreen.style.display = "none"
  button1_1.style.display = "none"
  button1_2.style.display = "none"
});

optionOneThirdScreen2.addEventListener('click',function(){
  optionOneEnd1_2.style.display = "block"
  optionOneThirdScreen2.style.display = "none"
});

button2.addEventListener('click',function(){
  optionTwoScreen.style.display = "block"
  beginScreen.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  name.style.display = "none"
  button2_1.style.display = "block"
  button2_2.style.display = "block"
});

button2_1.addEventListener('click',function(){
  optionTwoThirdScreen1.style.display = "block"
  optionTwoScreen.style.display = "none"
  button2_1.style.display = "none"
  button2_2.style.display = "none"
});

optionTwoThirdScreen1.addEventListener('click',function(){
  optionTwoEnd2_1.style.display = "block"
  optionTwoThirdScreen1.style.display = "none"
});

button2_2.addEventListener('click',function(){
  optionTwoThirdScreen2.style.display = "block"
  optionTwoScreen.style.display = "none"
  button2_1.style.display = "none"
  button2_2.style.display = "none"
});

optionTwoThirdScreen2.addEventListener('click',function(){
  optionTwoEnd2_2.style.display = "block"
  optionTwoThirdScreen2.style.display = "none"
})

reset1_1.addEventListener('click',function(){
  beginScreen.style.display = "block"
  optionOneScreen.style.display = "none"
  optionOneEnd1_1.style.display = "none"
  optionOneEnd1_2.style.display = "none"
  optionOneThirdScreen1.style.display = "none"
  optionOneThirdScreen2.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  pname.style.display = "none"
  name.style.display = "block"
  sub.style.display = "block"
})

reset1_2.addEventListener('click',function(){
  beginScreen.style.display = "block"
  optionOneScreen.style.display = "none"
  optionOneEnd1_1.style.display = "none"
  optionOneEnd1_2.style.display = "none"
  optionOneThirdScreen1.style.display = "none"
  optionOneThirdScreen2.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  pname.style.display = "none"
  name.style.display = "block"
  sub.style.display = "block"
})

reset2_1.addEventListener('click',function(){
  beginScreen.style.display = "block"
  optionTwoScreen.style.display = "none"
  optionTwoEnd2_1.style.display = "none"
  optionTwoEnd2_2.style.display = "none"
  optionTwoThirdScreen1.style.display = "none"
  optionTwoThirdScreen2.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  pname.style.display = "none"
  name.style.display = "block"
  sub.style.display = "block"
})

reset2_2.addEventListener('click',function(){
  beginScreen.style.display = "block"
  optionTwoScreen.style.display = "none"
  optionTwoEnd2_1.style.display = "none"
  optionTwoEnd2_2.style.display = "none"
  optionTwoThirdScreen1.style.display = "none"
  optionTwoThirdScreen2.style.display = "none"
  button1.style.display = "none"
  button2.style.display = "none"
  pname.style.display = "none"
  name.style.display = "block"
  sub.style.display = "block"
})

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });