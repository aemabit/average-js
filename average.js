/* first form*/
const oneAverage = document.querySelector('#one');

function aveOne(event){
    event.preventDefault()

    const maxAverage = 10;
    const averageOne = Number(document.querySelector("#averageOne").value);

    const totalAverage = maxAverage + averageOne;
    const averageFinal = ( totalAverage / 2 );
    console.log(averageOne)

    document.querySelector('#totalAverageOne').textContent = averageFinal.toFixed(1);
    document.querySelector('#answer').classList.remove('hiddenOne');
    document.querySelector('#averageOne').setAttribute("disabled", "");
}

oneAverage.addEventListener('submit', aveOne);


/* second form */
const twoAverage = document.querySelector('#two');

function aveTwo(event){
    event.preventDefault()

    const maxAverage = 10;
    const averageTwo = Number(document.querySelector("#averageTwo").value);

    const totalAverage = maxAverage + averageTwo;
    const averageFinal = ( totalAverage / 2 );
    console.log(averageTwo)

    document.querySelector('#totalAverageTwo').textContent = averageFinal.toFixed(1);
    document.querySelector('#answerTwo').classList.remove('hiddenTwo');
    document.querySelector('#averageTwo').setAttribute("disabled", "");

}

twoAverage.addEventListener('submit', aveTwo);

/* Three form  */
const threeAverage = document.querySelector('#three');

function aveThree(event){
    event.preventDefault()

    const maxAverage = 10;
    const averageThree = Number(document.querySelector("#averageThree").value);

    const totalAverage = maxAverage + averageThree;
    const averageFinal = ( totalAverage / 2 );
    console.log(averageThree)

    document.querySelector('#totalAverageThree').textContent = averageFinal.toFixed(1);
    document.querySelector('#answerThree').classList.remove('hiddenThree');
    document.querySelector('#averageThree').setAttribute("disabled", "");

}

threeAverage.addEventListener('submit', aveThree);

/* Four form */

const fourAverage = document.querySelector('#four');

function aveFour(event){
    event.preventDefault()

    const maxAverage = 10;
    const averageFour = Number(document.querySelector("#averageFour").value);

    const totalAverage = maxAverage + averageFour;
    const averageFinal = ( totalAverage / 2 );
    console.log(averageFour)

    document.querySelector('#totalAverageFour').textContent = averageFinal.toFixed(1);
    document.querySelector('#answerFour').classList.remove('hiddenFour');
    document.querySelector('#averageFour').setAttribute("disabled", "");

}

fourAverage.addEventListener('submit', aveFour);
