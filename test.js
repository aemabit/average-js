
// const btnOne = document.querySelector('#averageOne').getAttribute("disabled", "");
//  const btnTwo = document.querySelector('#averageOne').getAttribute("disabled", "");
//  const btnThree = document.querySelector('#averageOne').getAttribute("disabled", "");
//  const btnFour = document.querySelector('#averageOne').getAttribute("disabled", "");

// let btn = [ btnOne, btnTwo, btnThree, btnFour];

let oneAverageBtn, twoAverageBtn, threeAverageBtn, fourAverageBtn;


function checkbtn(){
    
    if (oneAverage){
        console.log("paso por el 1")
    }
    return oneAveragebtn = 4;
}

function checkbtnTwo(){
    
    if (twoAverage){
        console.log("paso por el 2")
    }
    return twoAverageBtn = 4;
}
function checkbtnThree(){
    
    if (threeAverage){
        console.log("paso por el 3")
    }
    return threeAverageBtn = 4;
}
function checkbtnFour(){
    
    if (fourAverage){
        console.log("paso por el 4")
    }
    return fourAverageBtn = 4;
}


 function allFunctionReady(){
    
    if(oneAveragebtn && twoAverageBtn && threeAverageBtn && fourAverageBtn === 4){
        console.log("stay rdy")
     }else{
         console.log("not yet")
     }
 }

 oneAverage.addEventListener('submit', checkbtn);
 twoAverage.addEventListener('submit', checkbtnTwo);
 threeAverage.addEventListener('submit', checkbtnThree);
 fourAverage.addEventListener('submit', checkbtnFour);

 oneAverage.addEventListener('submit', allFunctionReady);
 twoAverage.addEventListener('submit', allFunctionReady);
 threeAverage.addEventListener('submit', allFunctionReady);
 fourAverage.addEventListener('submit', allFunctionReady);