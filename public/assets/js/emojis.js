//Purpose is to fill the slot under the radio buttons with the emotion the user has selected. Happy, Neutral, Sad
function displayEmojiValue() {
    var ele = document.getElementsByName("emotion");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked)
        document.getElementById("result").innerHTML = ele[i].value;
    }
  };

  //Purpose is to fill the slot under the radio buttons with the ability to breathe the user has selected. Can or Can't Breathe
  function displayBreatheValue() {
    var ele = document.getElementsByName("breathe");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
      {document.getElementById("result2").innerHTML = ele[i].value;}
    }
  }
  };
