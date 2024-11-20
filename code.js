//My name is Theja & I am the author of this project.
//The purpose of this project is to decide whether or not you should study.

//variables
var studied = "Choose";
var confidence = 0;
var time = "Choose";

//home screen inputs and buttons update the variables and screen when appropriate
onEvent("confidenceSlider", "change", function( ) {
  updateVariable();
});
onEvent("studiedInputDropdown", "change", function( ) {
  updateVariable();
});
onEvent("timeDropdown", "change", function( ) {
  updateVariable();
});
onEvent("checkButton", "click", function( ) {
  updateScreen();
});

//the output screens' home buttons run the home function
onEvent("noButtonHome", "click", function( ) {
  home();
});
onEvent("yesHomeButton", "click", function( ) {
  home();
});
onEvent("sleepHomeButton", "click", function( ) {
  home();
});

//decision function, make the decision and take the user to appropriate output screen
function updateScreen() {
  if (time=="Yes") {
    setScreen("sleepOutput");
    console.log("too late");
  } else if ((studied=="Yes"&&(confidence>=7&&(time=="No")))) {
    setScreen("noOutput");
    console.log("studied and confident");
  } else if ((studied=="Yes"&&(confidence <7&&(time=="No")))) {
    setScreen("yesOutput");
    console.log("studied not confident");
  } else if (studied == "No" && confidence == 10 && time=="No") {
    setScreen("noOutput");
    console.log("hasn't studied but very confident");
  } else if (studied == "No" && time!="Choose") {
    setScreen("yesOutput");
    console.log("hasn't studied not confident");
  } else {
    setTimeout(function() {
      setProperty("errorTextBox", "hidden", true);
    }, 5000);
    setProperty("errorTextBox", "hidden", false);
    console.log("information entered incorrectly");
  }
}

//update the variables
function updateVariable() {
  confidence = getNumber("confidenceSlider");
  time = getText("timeDropdown");
  studied = getText("studiedInputDropdown");
  setText("confidenceMeter", confidence);
}

//take the user to home screen and reset inputs and variables
function home() {
  setScreen("homeScreen");
  studied = "Choose";
  time = "Choose";
  confidence = 0;
  setProperty("confidenceSlider", "value", 0);
  setProperty("studiedInputDropdown", "text", studied);
  setProperty("confidenceMeter", "text", confidence);
  setProperty("timeDropdown", "text", time);
}
