<!DOCTYPE html>
<html  lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale =1.0">
    <title> Introduction to the front </title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<div class="leftStyle">
<!-- 1 item of the task -->
<p>-----------1 & 2-----------</p>
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

<p>-----------3------------</p>
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
<p>-----------4------------</p>
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
<p>-----------5------------</p>
<div type="button" id="yellowSquare" class="yellowSquare"></div>

<script>
    const elementYellowSquare = document.querySelector("#yellowSquare");
    elementYellowSquare.addEventListener("click", oneClick);
      
  
    function oneClick(){
        alert("Hello")
        elementYellowSquare.removeEventListener("click", oneClick);
        elementYellowSquare.addEventListener("click", twoClick); 
    }
    function twoClick(){
            elementYellowSquare.classList.replace("yellowSquare","hidden")
        }
</script>

<!-- 6 item of the task -->
<p>-----------6------------</p>
<div id="redSquare" class="hidden"></div>
<button id="buttonRedSquare" class="button">Lead mouse</button>

<script>
    const elementRedSquare=document.getElementById("buttonRedSquare");
    elementRedSquare.addEventListener("mouseover", addSquare);
    elementRedSquare.addEventListener("mouseout", delSquare);

    function addSquare(){
        document.getElementById("redSquare").classList.replace("hidden","redStyle");
    }

    function delSquare() {
        document.getElementById("redSquare").classList.replace("redStyle", "hidden");
    }
</script>

<!-- 7 item of the task -->
<p>-----------7------------</p>
<div id="placeForGreen" class="hidden"> </div>
<input type="text" id="greenRectangle"> 

<script>
    const inputForGreenRectangle=document.getElementById("greenRectangle");
    inputForGreenRectangle.addEventListener("focus",addRectangle);
    inputForGreenRectangle.addEventListener("input",delRectangle);

    function addRectangle(){
        document.getElementById("placeForGreen").classList.replace("hidden","greenRectangle")
    }
    function delRectangle() {
        document.getElementById("placeForGreen").classList.replace("greenRectangle", "hidden")
    }

</script>

<!-- 8 item of the task -->
<div>
<p>-----------8------------</p>
<input type="http" id="inputHttp">
<button type="submit" id="goHttp" class="button" onclick="openImage()"> open image </button>
<img id="placeForImage" src="" alt="check the image path" width="200" >
</div>
<script>
       function openImage(){
        const elemHttpImage = document.getElementById("inputHttp");
        let http = elemHttpImage.value;
        let img = document.getElementById("placeForImage");
        document.createElement("img");
        img.src = http;
    }
</script>

<!-- 9 item of the task -->
<div id="task9">
    <p>-----------9------------</p>
    <label>Enter multiple picture paths</label>
    <textarea type="textarea" id="inputManyHttp"></textarea>
<button type="submit" id="goManyHttp" class="button" onclick="openManyImage()"> open image </button>
<div id="placeForImages" alt="check the image path" width="200"></div>
</div>
<script>
    function openManyImage() {
        const inputData = document.querySelector("#inputManyHttp");
        const allAdressImages = inputData.value.split("\n");

        
       for (let i=0; i<allAdressImages.length; i++){
        let imgView = document.createElement("img");
           imgView.src = allAdressImages[i];
           imgView.id = "number"+[i];
           imgView.alt = "не вдалося загрузити зображення"
           let imgParents = document.getElementById("placeForImages");
           imgParents.appendChild(imgView);

       }
    } 
</script>
</div>
<div class="rightStyle">
<!-- 10-12 item of the task -->
<div class="task10">
    <p>-----------10-12-----------</p>
    <!-- X:nn, Y:nn -->
<p> X: <i><span class="infoUser" type="text "id="getX"> </span></i>
, Y: <i><span class="infoUser" type="text" id="getY"> </span></i></p>
    <!-- Language -->
<div> Language: <i><span class="infoUser" type="text" id="language"> </span></i></div>
    <!-- Ш: ... , Д: ... -->
<p id="locationPlace"> Ш: <i><span class="infoUser" type="text " id="latitude"> </span></i>
    , Д: <i><span class="infoUser" type="text" id="longitude"> </span></i></p>
</div>
<script>

    function getXY(e){
        document.getElementById("getX").innerHTML = e.pageX;
        document.getElementById("getY").innerHTML = e.pageY;
    }
    document.getElementById("language").innerHTML = navigator.languages;

    navigator.geolocation.getCurrentPosition(position=>{
        document.getElementById("latitude").innerHTML = position.coords.latitude;
        document.getElementById("longitude").innerHTML = position.coords.longitude;
    });

</script>
</div class="rightStyle">
<div class="centerStyle">
<p>-----------13-----------</p>
<form >
    <table>
    <tr>
        <td> <label> Save with localStorage </label> </td>
        <td> <textarea id="textLocalStorage" class="saveText"> for text 1 </textarea> </td>
    </tr>
    <br>
    <tr>
        <td><label> Save with cookies </label> </td>
        <td><textarea id="textCookies" class="saveText"> for text 2 </textarea> </td>
    </tr>
    <br>
    <tr>
        <td> <label> Save with sessionStorage </label></td>
        <td> <textarea id="textSessionStorage" class="saveText"> for text 3</textarea> </td>
    </tr>
    </table>
</form>
<script>
    //Save with localStorage
    document.addEventListener("onload", getOneText());
    document.getElementById("textLocalStorage").addEventListener("input",saveTextOne);
   
    function saveTextOne(){
        const textOne = document.getElementById("textLocalStorage").value;
        localStorage.setItem("textOneSave", textOne);
    }
    function getOneText() {
        document.getElementById("textLocalStorage").value = localStorage.getItem("textOneSave");
    }

    //Save with cookies
    document.addEventListener("onload", getTextTwo());
    document.getElementById("textCookies").addEventListener("input", saveTextTwo);

    function saveTextTwo() {
         document.cookie = document.getElementById("textCookies").value;
    }
    function getTextTwo() {
        document.getElementById("textCookies").value = document.cookie;
    }

    //Save with sessionStorage
    document.addEventListener("onload", getThreeText());
    document.getElementById("textSessionStorage").addEventListener("input", saveTextThree);

    function saveTextThree() {
        const textTree = document.getElementById("textSessionStorage").value;
        sessionStorage.setItem("textThreeSave", textTree);
    }
    function getThreeText() {
        if (sessionStorage.getItem("textThreeSave")){
        document.getElementById("textSessionStorage").value = sessionStorage.getItem("textThreeSave");}
    }
</script>
</div>

<!-- 15 item of the task -->
<div class="centerStyle">
    <p>-----------15-----------</p>

    <div id="block1" class="block1">
        <div id="block2" class="block2" onclick="event.stopPropagation()"></div>
    </div>
</div>
<script>
   
    document.getElementById("block2").addEventListener("click", function () {
            alert("You click block2")
    })

    document.getElementById("block1").addEventListener("click", function () {
                alert("You click block1")
            })
</script>

<!-- 16 item of the task -->
<div class="centerStyle">
    <p>-----------16-----------</p>
<button class="button" onclick="greyScreen()">Make the screen gray</button>
<div id="placeForGreyScreen" class="hidden"> </div>
<script>
    function greyScreen(){
        const elem = document.createElement("div");
        elem.className="greyScreen"
        elem.id = "greyScreen"
        document.body.style.overflow = "hidden";
        document.body.appendChild(elem)
        document.getElementById("greyScreen").addEventListener("click", onScroll)
    }

function onScroll(){
    const delElem = document.getElementById("greyScreen");
    delElem.parentNode.removeChild(delElem);
    document.body.style.overflow = "scroll";
}
</script>
</div>

<!-- 17 item of the task -->
<div class="centerStyle">
    <p>-----------17-----------</p>
    <form onsubmit="return false"><input type="submit" value="GO"></form>
</div>   

<!-- 18 item of the task -->
<div class="centerStyle">
    <p>-----------18-----------</p>
<div class="inputFile" id="draqNDrop">
    <p style="width: 100%;"> You can upload your file to this part of the page</p></div>
    <input id="inputForFile" class="fileStyle" type="file" multiple >
    <div id="infoForFile" class="infoFile"></div>

<script>
    document.addEventListener('dragover', ev => ev.preventDefault())
    document.addEventListener('drop', ev => ev.preventDefault())

    const elemDragNDrop = document.getElementById("draqNDrop");
    const inputElem = document.getElementById("inputForFile")
    elemDragNDrop.addEventListener("dragover", styleForDragover,false);
    elemDragNDrop.addEventListener("drop", styleForDrop, false);
    elemDragNDrop.addEventListener("dragleave", delStyleForDragover, false);
    elemDragNDrop.addEventListener("click", ()=>{
        inputElem.click();
        inputElem.addEventListener("change", ()=>{
            console.log(inputElem.files)
            file= inputElem.files[0]; 
            console.log(file)
            openFile(file)})
    })
    function styleForDrop(el){
        elemDragNDrop.classList.remove("styleForDragover");
        elemDragNDrop.classList.add("styleForDrop");
        el.preventDefault();
        console.log(JSON.stringify(el.dataTransfer))
        const file = el.dataTransfer.files[0];
        openFile(file);
        el.stopPropagation();
    }
    function styleForDragover(el) {
        el.preventDefault();
        elemDragNDrop.classList.add("styleForDragover");
        el.stopPropagation();
    } 
    function delStyleForDragover(el){
        elemDragNDrop.classList.remove("styleForDragover")
        el.stopPropagation();
    }     
   function openFile(file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file)
    img.alt = file.name;
    img.className = "infoFile";
    const name = document.createElement("p");
    name.innerHTML=file.name + ` size: ${file.size} Kb`;
    const thereImage = document.getElementById("infoForFile");
            thereImage.appendChild(name);
            thereImage.appendChild(img)
        }
    
</script>
</div>

<!-- 14 item of the task -->
    <footer id="endPage" class="centerStyle"> 
    <p>-----------14-----------</p>
    <button class="button" onclick="scrollPage()"> Press for start page </button>
    </footer>
<script>
        function scrollPage(){
            if (document.documentElement.scrollTop!=0)
            { document.documentElement.scrollTop -= 10;
            setTimeout(scrollPage, 10);
            }
        }
</script>
</body>
</html>
