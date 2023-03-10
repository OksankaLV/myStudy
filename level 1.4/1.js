<!DOCTYPE html>
<html  lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale =1.0">
    <title> Introduction to the front </title>
    <style>
        .button {
        background-color: #8548e7;
        padding: 7px 20px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;}
        .start{
        width: 100px;
        height: 100px;
        background-color: black;
        margin: 2px;

        }
        .hidden {
        background-color: white;
        width: 00px;
        height: 00px;
        }
        .redStyle {
        background-color: red;
        width: 100px;
        height: 100px;
        margin: 2px;
        }
        .yellowSquare {
        background-color: yellow;
        width: 150px;
        height: 150px;
        margin: 2px;  
        }
    </style>
</head>
<body>

<!-- 1 item of the task -->

<div id="firstSquare" class="start"></div>
<p> </p>
<button 
    name="CSS (display: none)" class="button" onclick="document.getElementById('firstSquare').style.display='none'">
    CSS (display: none)
</button>
<button name="JS (delete)" class="button" onclick="deleteSquare()">Delete</button>
<button name="CSS+JS" class="button" onclick="hiddenSquare()">Hidden/visible</button>
<script>
    function deleteSquare() {
    document.getElementById("firstSquare").remove();
    }
</script>

<!-- 2 item of the task -->

<script>
    /* method checks the style of the first square and changes it to the opposite (black to white and vice versa)*/
    function hiddenSquare(){
        const squareFirst = document.getElementById("firstSquare")
        if (squareFirst.classList.contains("start")){ 
            squareFirst.classList.replace("start", "hidden") 
        } else { 
            squareFirst.classList.replace("hidden","start") 
        }   
    }
    </script>

<!-- 3 item of the task -->
<div id="blackSquare1" class="start"></div>
<div id="blackSquare2" class="start"></div>
<div id="blackSquare3" class="start"></div>
<div id="blackSquare4" class="start"></div>
<div id="blackSquare5" class="start"></div>
<button name="allSquare" class="button" onclick="delAllSquare()">all square</button>
<script>
    /* The function changes the style of the last 5 squares. The square from the previous task should be displayed in black. */
    function delAllSquare(){
        const allSquare = document.getElementsByClassName("start")
        if (allSquare.length!=1){
            while (allSquare.length != 1) {
                allSquare[1].classList.replace("start", "hidden")
            }
        } else {
            const fiveSquare = document.getElementsByClassName("hidden")
             while (fiveSquare.length!=0) {
                fiveSquare[0].classList.replace("hidden", "start")
            }
                }
    }
</script>

<!-- 4 item of the task -->

<input id="nameSelector" list="valueSelector">
<datalist id="valueSelector">
    <option value="hidden"></option>
    <option value="start"></option>
    <option value="redStyle"></option>
</datalist>
<button type="button" onclick="sellectorSquare()">Submit</button>
<script>
    /*
    * the method removes all squares from the screen, 
    * if the value specified in the input is a style that was not removed, 
    * then it is displayed on the screen. Otherwise, the "hidden" style remains on the screen
    */
    function sellectorSquare(){
        let value = document.getElementById("nameSelector").value;
        let allSquare = document.getElementsByClassName(value); 
        const numSquare = allSquare.length;
       {
          valueOnScreen = document.getElementById("blackSquare1").className; 
          allSquareScreen = document.getElementsByClassName(valueOnScreen);
          if (valueOnScreen!="hidden" /*|| ( valueOnScreen=="hidden" && value!="hidden")*/){ 
          while (allSquareScreen.length != 0) {
                allSquareScreen[0].classList.replace(valueOnScreen, "hidden")
            }}
        }
        if (value!="hidden" && numSquare<=1) {
            const hiddenElem = document.getElementsByClassName("hidden")
            while (hiddenElem.length != 0) {
                hiddenElem[0].classList.replace("hidden", value)
            }
        }
    }
</script>

<!-- 5 item of the task -->

<div type="button" id="yellowSquare" class="yellowSquare">
<script>
    const elementYellowSquare = document.querySelector("#yellowSquare");
    elementYellowSquare.addEventListener("click", function(){oneClick()});
    elementYellowSquare.removeEventListener("click", function () { oneClick() });
    elementYellowSquare.addEventListener("click",function(){twoClick()});   
  
    function oneClick(){
        alert("Hello")
    }
    function twoClick(){
            elementYellowSquare.classList.replace("yellowSquare","hidden")
        }
</script>
</div>


</body>
</html>
