let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let wickets=0
let runs = 0

function increment() {
    runs += 1
    countEl.textContent = runs+"/"+wickets
}
function wicketfall(){
    wickets+=1;
    if(wickets==10){
        savescore();
    }
    countEl.textContent = runs+"/"+wickets
}

function savescore() {
    let countStr = runs+"/"+wickets + " - "
    saveEl.textContent += countStr
    countEl.textContent = "0/0"
    runs=0
    wickets=0
}
