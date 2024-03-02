//Light bulb placement
//-------------------------------------------------------------
//Set function for delegation
function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}
//-------------------------------------------------------------
//querySelector
const table = document.querySelector('table')
const score = document.querySelector('scorebord')

//-------------------------------------------------------------
//Set the map

function easy7x7(){
    startShowing()
    mapName("7x7_easy")
    for(let rowIndex = 0; rowIndex < 7; rowIndex++){
        const newTR = document.createElement('tr')
        for(let colIndex = 0; colIndex < 7; colIndex++){
            const newTD = document.createElement('td')
            newTD.dataset.row = rowIndex
            newTD.dataset.col = colIndex

            //Set the cells for correct condition
            /*
            if(rowIndex == 0 && colIndex == 0){
                newTD.innerText = "🚩"
            }else if(rowIndex == 0 && colIndex == 5){
                newTD.innerText = "🚩"
            }else if(rowIndex == 1 && colIndex == 3){
                newTD.innerText = "🚩"
            }else if(rowIndex == 1 && colIndex == 6){
                newTD.innerText = "🚩"
            }else if(rowIndex == 3 && colIndex == 1){
                newTD.innerText = "🚩"
            }else if(rowIndex == 5 && colIndex == 0){
                newTD.innerText = "🚩"
            }else if(rowIndex == 4 && colIndex == 5){
                newTD.innerText = "🚩"
            }else if(rowIndex == 5 && colIndex == 3){
                newTD.innerText = "🚩"
            }else if(rowIndex == 5 && colIndex == 6){
                newTD.innerText = "🚩"
            }else if(rowIndex == 6 && colIndex == 2){
                newTD.innerText = "🚩"
            }else if(rowIndex == 6 && colIndex == 4){
                newTD.innerText = "🚩"
            }else{newTD.dataset.correctCell = 0}
            */

            //Set the black cells
            if(rowIndex == 0 &&colIndex == 3){
                newTD.innerText = "1"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 1 &&colIndex == 1){
                newTD.innerText = "0"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 1 &&colIndex == 5){
                newTD.innerText = "2"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 3 &&colIndex == 0){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 3 &&colIndex == 3){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 3 &&colIndex == 6){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 5 &&colIndex == 1){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 5 &&colIndex == 5){
                newTD.innerText = "2"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 6 &&colIndex == 3){
                newTD.innerText = "3"
                newTD.classList.add('colour-2')
            }else{newTD.classList.add('colour-0')}

            newTR.appendChild(newTD)
        }
        table.appendChild(newTR)
    }
}

function hard7x7(){
    startShowing()
    mapName("7x7_hard")
    for(let rowIndex = 0; rowIndex < 7; rowIndex++){
        const newTR = document.createElement('tr')
        for(let colIndex = 0; colIndex < 7; colIndex++){
            const newTD = document.createElement('td')
            newTD.dataset.row = rowIndex
            newTD.dataset.col = colIndex

            //Set the black cells
            if(rowIndex == 0 &&colIndex == 2){
                newTD.innerText = "0"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 0 &&colIndex == 4){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 2 &&colIndex == 0){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 2 &&colIndex == 2){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 2 &&colIndex == 4){
                newTD.innerText = "3"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 2 &&colIndex == 6){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 3 &&colIndex == 3){
                newTD.innertext = "1"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 4 &&colIndex == 0){
                newTD.innerText = "2"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 4 &&colIndex == 2){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 4 &&colIndex == 4){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 4 &&colIndex == 6){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 6 &&colIndex == 2){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 6 &&colIndex == 4){
                newTD.innerText = "2"
                newTD.classList.add('colour-2')
            }else{newTD.classList.add('colour-0')}
            newTR.appendChild(newTD)
        }
        table.appendChild(newTR)
    }
}

function normal10x10(){
    startShowing()
    mapName("10x10_normal")
    for(let rowIndex = 0; rowIndex < 10; rowIndex++){
        const newTR = document.createElement('tr')
        for(let colIndex = 0; colIndex < 10; colIndex++){
            const newTD = document.createElement('td')
            newTD.dataset.row = rowIndex
            newTD.dataset.col = colIndex

            //Set the black cells
            if(rowIndex == 0 &&colIndex == 1){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 1 &&colIndex == 5){
                newTD.innerText = "3"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 1 &&colIndex == 7){
                newTD.innerText = "2"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 1 &&colIndex == 9){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 2 &&colIndex == 1){
                newTD.innerText = "0"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 2 &&colIndex == 2){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 2 &&colIndex == 7){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 3 &&colIndex == 4){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 4 &&colIndex == 1){
                newTD.innerText = "1"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 4 &&colIndex == 4){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 4 &&colIndex == 5){
                newTD.innerText = "1"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 4 &&colIndex == 6){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 5 &&colIndex == 3){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 5 &&colIndex == 4){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 5 &&colIndex == 5){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 5 &&colIndex == 8){
                newTD.innerText = "3"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 6 &&colIndex == 5){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 7 &&colIndex == 2){
                newTD.innerText = "1"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 7 &&colIndex == 7){
                newTD.innerText = "0"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 7 &&colIndex == 8){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 8 &&colIndex == 0){
                newTD.innerText = "3"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 8 &&colIndex == 2){
                newTD.classList.add('colour-2')
            }else if(rowIndex == 8 &&colIndex == 4){
                newTD.innerText = "0"
                newTD.classList.add('colour-2')
            }else if(rowIndex == 9 &&colIndex == 8){
                newTD.innerText = "0"
                newTD.classList.add('colour-2')
            }else{newTD.classList.add('colour-0')}
            newTR.appendChild(newTD)
        }
        table.appendChild(newTR)
    }
}

//------------------------------------------------------------------
//Set the event when the matrix is clicked
function switchColour(event, element){
    let row = parseInt(element.dataset.row)
    let col = parseInt(element.dataset.col)

    //in case of click the bulb on the yellow tole   
    if((element.classList.value == 'colour-1' ||element.classList.value == 'colour-3' )&& element.innerText == "💡"){

        element.classList.remove(element.classList[0])
        element.classList.add(`colour-0`)
        element.innerText = ""

        //upper side
        for(let i=1;row-i>=0;i++){
            let upper = table.rows[row-i].cells[col]
            if(upper.classList.value == 'colour-1'){
                upper.classList.remove( upper.classList[0])
                upper.classList.add(`colour-0`)
            }
        }
        
        //lower side
        for(let i=1;row+i<table.rows.length;i++){
            let lower = table.rows[row+i].cells[col]
            if(lower.classList.value == 'colour-1'){
                lower.classList.remove( lower.classList[0])
                lower.classList.add(`colour-0`)
            }
        }

        //left side
        for(let i=1;col-i>=0;i++){
            let left = table.rows[row].cells[col-i]
            if(left.classList.value == 'colour-1'){
                left.classList.remove( left.classList[0])
                left.classList.add(`colour-0`)
            }
        }

        //right side
        for(let i=1;col+i<table.rows.length;i++){
            let right = table.rows[row].cells[col+i]
            if(right.classList.value == 'colour-1'){
                right.classList.remove( right.classList[0])
                right.classList.add(`colour-0`)
            }
        }

        //modify the yellow tiles
        modify()
        checkNumbulb()

    //in case of click the white tile   
    }else if(element.classList.value == 'colour-0' || element.classList.value == 'colour-1') {     
        element.classList.remove(element.classList[0])
        element.classList.add(`colour-1`)
        element.innerText = "💡"
        
        //upper side        
        for(let i=1;row-i>=0;i++){
            let upper = table.rows[row-i].cells[col]
            if(upper.classList.value == 'colour-0'){
                upper.classList.remove( upper.classList[0])
                upper.classList.add(`colour-1`)
            }else if(upper.innerText == "💡"){
                upper.classList.remove( upper.classList[0])
                upper.classList.add(`colour-3`)
                element.classList.remove(element.classList[0])
                element.classList.add(`colour-3`)
                //console.log("1")
            }else if(upper.classList.value == 'colour-2')
                break
        }
        
        //lower side  
        for(let i=1;row+i<table.rows.length;i++){
            let lower = table.rows[row+i].cells[col]
            if(lower.classList.value == 'colour-0'){
                lower.classList.remove( lower.classList[0])
                lower.classList.add(`colour-1`)
            }else if(lower.innerText == "💡"){
                lower.classList.remove( lower.classList[0])
                lower.classList.add(`colour-3`)
                element.classList.remove(element.classList[0])
                element.classList.add(`colour-3`)
                //console.log("2")
            }else if(lower.classList.value == 'colour-2')
                break
        }
        
        //left side
        for(let i=1;col-i>=0;i++){
            let left = table.rows[row].cells[col-i]
            if(left.classList.value == 'colour-0'){
                left.classList.remove( left.classList[0])
                left.classList.add(`colour-1`)
            }else if(left.innerText == "💡"){
                left.classList.remove( left.classList[0])
                left.classList.add(`colour-3`)
                element.classList.remove(element.classList[0])
                element.classList.add(`colour-3`)
                //console.log("3")
            }else if(left.classList.value == 'colour-2')
                break
        }

        //right side  
        for(let i=1;col+i<table.rows.length;i++){
            let right = table.rows[row].cells[col+i]
            if(right.classList.value == 'colour-0'){
                right.classList.remove( right.classList[0])
                right.classList.add(`colour-1`)
            }else if(right.innerText == "💡"){
                right.classList.remove( right.classList[0])
                right.classList.add(`colour-3`)
                element.classList.remove(element.classList[0])
                element.classList.add(`colour-3`)
                //console.log("4")
            }else if(right.classList.value == 'colour-2')
                break
        }
        checkNumbulb()
    }
}
// Change the colour per click
delegate(table, 'td', 'click', switchColour)

//---------------------------------------------------------------------
function checkMatrix(){
    for (let i=0;i<table.rows.length;i++) {
        for(let j=0;j<table.rows[i].cells.length;j++){
            if(table.rows[i].cells[j].classList.value == 'colour-0'){
                alert("There are still white tiles")
                return false
            }else if(table.rows[i].cells[j].classList.value == 'colour-2' && parseInt(table.rows[i].cells[j].innerText)>=0 && table.rows[i].cells[j].style.color != "green"){
                alert("a black tile isn't surrounded by the correct number of light bulbs")
                return false
            }else if(table.rows[i].cells[j].classList.value == 'colour-3') {
                alert("Two light bulbs illuminate each other!")
                return false
            }
        }
    }

    let result = window.confirm("Clear!!")
    if(result) {
        //score.innerHTML = nameText.value;
        window.location.reload()
    }else{
    }
}

//---------------------------------------------------------------------
//Turn the color of the number of black tiles to green 
function checkNumbulb(){
    for (let i=0;i<table.rows.length;i++) {
        for(let j=0;j<table.rows[i].cells.length;j++){
            if(table.rows[i].cells[j].classList.value == 'colour-2'){
                let cnt = 0
                //console.log(table.rows.length);
                //console.log(table.rows[i].cells.length);
                if(i==0){
                    if(table.rows[i+1].cells[j].innerText == "💡")
                        cnt += 1
                    if(table.rows[i].cells[j-1].innerText == "💡")
                        cnt += 1
                    if(table.rows[i].cells[j+1].innerText == "💡")
                        cnt += 1
                }else if(i==(table.rows.length)-1){
                    if(table.rows[i-1].cells[j].innerText == "💡")
                        cnt += 1
                    if(table.rows[i].cells[j-1].innerText == "💡")
                        cnt += 1
                    if(table.rows[i].cells[j+1].innerText == "💡")
                        cnt += 1
                }else if(j==0){
                    if(table.rows[i-1].cells[j].innerText == "💡")
                        cnt += 1
                    if(table.rows[i+1].cells[j].innerText == "💡")
                        cnt += 1
                    if(table.rows[i].cells[j+1].innerText == "💡")
                        cnt += 1
                }else if(j==(table.rows[i].cells.length)-1){
                    if(table.rows[i-1].cells[j].innerText == "💡")
                        cnt += 1
                    if(table.rows[i+1].cells[j].innerText == "💡")
                        cnt += 1
                    if(table.rows[i].cells[j-1].innerText == "💡")
                        cnt += 1
                }else{
                    if(table.rows[i-1].cells[j].innerText == "💡")
                        cnt += 1
                    if(table.rows[i+1].cells[j].innerText == "💡")
                        cnt += 1
                    if(table.rows[i].cells[j-1].innerText == "💡")
                        cnt += 1
                    if(table.rows[i].cells[j+1].innerText == "💡")
                        cnt += 1
                }
                //console.log("i:"+i+"j:"+j)
                //console.log(table.rows[i].cells[j].innerText);
                //console.log(cnt);
                if(cnt == parseInt(table.rows[i].cells[j].innerText))
                    table.rows[i].cells[j].style.color = "green"
                else{
                    table.rows[i].cells[j].style.color = "white"
                }
            }
        }
    }
}

checkNumbulb()// for checking when the game is started

//---------------------------------------------------------------------
//modify yellow tiles when a bulb is deleted
function modify(){
    for (let i=0;i<table.rows.length;i++) {
        for(let j=0;j<table.rows[i].cells.length;j++){
            let row = i
            let col = j
            if(table.rows[i].cells[j].innerText == "💡"){
                let cnt = 0
                //upper side  
                for(let k=1;row-k>=0;k++){
                    let upper = table.rows[row-k].cells[col]
                    if(upper.classList.value == 'colour-0'){
                        upper.classList.remove( upper.classList[0])
                        upper.classList.add(`colour-1`)
                        //console.log("upper: " + k)
                    }else if(upper.innerText == "💡"){
                        upper.classList.remove( upper.classList[0])
                        upper.classList.add(`colour-3`)
                        //console.log(1)
                        //console.log("row: "+row + " -k: "+k +" col: " + col)
                        cnt = 1
                    }else if(upper.classList.value == 'colour-2'){
                        break
                    }
                }
                
                //lower side  
                for(let k=1;row+k<table.rows.length;k++){
                    let lower = table.rows[row+k].cells[col]
                    if(lower.classList.value == 'colour-0'){
                        lower.classList.remove( lower.classList[0])
                        lower.classList.add(`colour-1`)
                        //console.log("lower: " + k)
                    }else if(lower.innerText == "💡"){
                        lower.classList.remove( lower.classList[0])
                        lower.classList.add(`colour-3`)
                        //console.log(2)
                        //console.log("row: "+row + " +k: "+k +" col: " + col)
                        cnt = 1
                    }else if(lower.classList.value == 'colour-2'){
                        break
                    }
                }
                
                //left side
                for(let k=1;col-k>=0;k++){
                    let left = table.rows[row].cells[col-k]
                    if(left.classList.value == 'colour-0'){
                        left.classList.remove( left.classList[0])
                        left.classList.add(`colour-1`)
                        //console.log("left: " + k)
                    }else if(left.innerText == "💡"){
                        left.classList.remove( left.classList[0])
                        left.classList.add(`colour-3`)
                        //console.log(3)
                        //console.log("row: "+row +" col: " + col + " -k: "+k )
                        cnt = 1
                    }else if(left.classList.value == 'colour-2'){
                        break
                    }
                }
        
                //right side  
                for(let k=1;col+k<table.rows.length;k++){
                    let right = table.rows[row].cells[col+k]
                    if(right.classList.value == 'colour-0'){
                        right.classList.remove( right.classList[0])
                        right.classList.add(`colour-1`)
                        //console.log("right: " + k)
                    }else if(right.innerText == "💡"){
                        right.classList.remove(right.classList[0])
                        right.classList.add(`colour-3`)
                        //console.log(4)
                        //console.log("row: "+row  +" col: " + col + " +k: "+k)
                        cnt = 1
                    }else if(right.classList.value == 'colour-2'){
                        break
                    }
                }
                
                if(cnt==0){
                table.rows[i].cells[j].classList.remove(table.rows[i].cells[j].classList[0])
                table.rows[i].cells[j].classList.add(`colour-1`)
                }

            }
        }
    }
}

//---------------------------------------------------------------------
//Input name section
let nameText = document.getElementById('nameText')
nameText.addEventListener('change', inputChange)
let playerName = document.getElementById('name')

function inputChange(event){
    playerName.innerText = 'Player: ' + nameText.value
    nameText.value = ""
  }
//---------------------------------------------------------------------
//Input Map name
let map = document.getElementById('map')
function mapName(string){
    map.innerText = string

}
//---------------------------------------------------------------------
//Timer section
let PassSec;   // variable for displaying the timer
 
function showPassage() {
   PassSec++ 
   let timer = PassSec + " sec"
   document.getElementById("PassageArea").innerHTML = timer
}
 
//Start the timer
function startShowing() {
   PassSec = 0 //reset the timer
   PassageID = setInterval('showPassage()',1000) //Set the timer per 1000ms
}
