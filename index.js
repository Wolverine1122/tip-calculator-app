document.getElementById("reset-button").disabled=true;


/* SELECT TIP PERCENT CUSTOM BUTTON */
var tipChosen = '';
var tipPercentButtons = document.getElementsByClassName("single-select-btn")

var customButton = document.getElementById("custom-input");
customButton.addEventListener('input', function (event) {
    tipChosen = event.target.value;
    calculateTip();
})

customButton.addEventListener('click', resetPercentButtons)
function resetPercentButtons() {
    for (let i = 0; i < tipPercentButtons.length; i++) {
        tipPercentButtons[i].checked = false;
    }
}


/* SELECT TIP PERCENT BUTTONS */


var button5 = document.getElementById("5%");
var button10 = document.getElementById("10%");
var button15 = document.getElementById("15%");
var button25 = document.getElementById("25%");
var button50 = document.getElementById("50%");

button5.addEventListener('click', function () {
    tipChosen = 5;
    customButton.value = '';
    calculateTip();
});
button10.addEventListener('click', function () {
    tipChosen = 10;
    customButton.value = '';
    calculateTip();
});
button15.addEventListener('click', function () {
    tipChosen = 15;
    customButton.value = '';
    calculateTip();
});
button25.addEventListener('click', function () {
    tipChosen = 25;
    customButton.value = '';
    calculateTip();
});
button50.addEventListener('click', function () {
    tipChosen = 50;
    customButton.value = '';
    calculateTip();
});


/* CALCULATE THE TIP WITH ALL THE INPUTS */


function calculateTip() {
    var billInput = document.getElementById("bill-input").value;
    var numberOfPeople = document.getElementById("people-input").value;

    // CHANGING OUTLINE COLOR TO RED IF THE INPUT IS NEGATIVE
    if (Number(billInput) < 0) {
        document.getElementById("bill-input").classList.add("invalid-input");
        document.getElementById("reset-button").disabled=false;
    } else {
        document.getElementById("bill-input").classList.remove("invalid-input");
    }
    if (Number(numberOfPeople) < 0) {
        document.getElementById("people-input").classList.add("invalid-input");
        document.getElementById("reset-button").disabled=false;
    } else {
        document.getElementById("people-input").classList.remove("invalid-input");
    }
    if (Number(customButton.value) < 0) {
        document.getElementById("custom-input").classList.add("invalid-input");
        document.getElementById("reset-button").disabled=false;
    } else {
        document.getElementById("custom-input").classList.remove("invalid-input");
    }

    // NOT RUNNING THE FUNCTION UNTIL WE GET ACCEPTABLE INPUTS FROM BILLINPUT & NUMBER-OF-PEOPLE
    if (billInput == "") {
        removeWarning();
        return false;
    } else if (Number(billInput) < 0) {
        giveWarning();
        return false;
    } else {
        removeWarning();
    }
    if (numberOfPeople == "")  {
        removeWarning();
        return false;
    }  else if (Number(numberOfPeople) < 0) {
        giveWarning();
        return false;
    } else {
        removeWarning();
    }
    if (Number(customButton.value) < 0) {
        giveWarning();
        return false;
    } else {
        removeWarning();
    }

    document.getElementById("reset-button").disabled=false;

    // WARN THE USER IF THE INPUT IS UNACCEPTABLE; REMOVE THE WARNING IF OTHERWISE; 
    function giveWarning() {
        document.getElementById("warning").innerHTML = "Negative input is not allowed";
    }
    function removeWarning () {
        document.getElementById("warning").innerHTML = "";
    }

    // FINDING TIP AMOUNT PER PERSON
    var tipResult = ((Number(billInput) * (Number(tipChosen) / 100)) / Number(numberOfPeople));
    tipResult = (Math.round(tipResult * 100) / 100).toFixed(2);

    // FINDING TOTAL COST PER PERSON
    var totalResult = (Number(billInput) / Number(numberOfPeople)) + Number(tipResult);
    totalResult = (Math.round(totalResult * 100) / 100).toFixed(2);

    document.getElementById("tip-amount").innerHTML = "$" + tipResult;
    document.getElementById("total").innerHTML = "$" + totalResult;
}


/* RESET ALL VARIABLES TO NULL/ZERO */


function reset() {
    customButton.value = '';
    document.getElementById("bill-input").value = '';
    document.getElementById("people-input").value = '';
    document.getElementById("tip-amount").innerHTML = "$0.00";
    document.getElementById("total").innerHTML = "$0.00";
    document.getElementById("warning").innerHTML = "";
    resetPercentButtons();
    
    document.getElementById("bill-input").classList.remove("invalid-input");
    document.getElementById("people-input").classList.remove("invalid-input");
    document.getElementById("custom-input").classList.remove("invalid-input");

    document.getElementById("reset-button").disabled=true;
}