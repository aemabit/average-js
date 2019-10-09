/* first form*/
const oneAverage = document.querySelector('#one');
const btn = document.querySelector('#btnOne');

function aveOne(event){
    event.preventDefault()

    const maxAverage = 10;
    const averageOne = Number(document.querySelector("#averageOne").value);

    const totalAverage = maxAverage + averageOne;
    const averageFinal = ( totalAverage / 2 );
    console.log(averageOne)

    document.querySelector('#totalAverageOne').textContent = averageFinal.toFixed(2);
    document.querySelector('#answer').classList.remove('hiddenOne');

}

oneAverage.addEventListener('submit', aveOne);
