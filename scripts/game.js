const score = JSON.parse(localStorage.getItem('score'));

console.log(localStorage.getItem('score'));

updateScore();

function playGame(playerMove){

            const compMove = pickComputerMove();
            let rezultat = '';

            if (playerMove === 'Foarfeca'){
                if (compMove === 'Foarfeca') {rezultat = 'Egal';}
                else if (compMove === 'Hartie') {rezultat = 'Ai castigat!';}
                else if (compMove === 'Piatra') {rezultat = 'Ai pierdut!';}

            }else if (playerMove === 'Hartie'){
                if (compMove === 'Hartie') {rezultat = 'Egal';}
                else if (compMove === 'Piatra') {rezultat = 'Ai castigat!';}
                else if (compMove === 'Foarfeca') {rezultat = 'Ai pierdut!';}

            }else if(playerMove === 'Piatra'){
                if (compMove === 'Piatra') {rezultat = 'Egal';}
                else if (compMove === 'Hartie') {rezultat = 'Ai pierdut!';}
                else if (compMove === 'Foarfeca') {rezultat = 'Ai castigat!';}
            }

            if(rezultat === 'Ai castigat!'){
                score.Castigate += 1;
            }else if(rezultat === 'Ai pierdut!'){
                score.Pierdute += 1;
            }else if(rezultat === 'Egal'){
                score.Egal += 1;
            }

            /*save data - local. localStorage only supports strings*/
            localStorage.setItem('score', JSON.stringify(score));

            /*alert(`Ai ales ${playerMove}. Computer a ales ${compMove}. ${rezultat} ,
             Castigate: ${score.Castigate}, Pierdute: ${score.Pierdute}, Egal: ${score.Egal}` );*/

            updateScore();

            document.querySelector('.js-result').innerHTML = rezultat;

            document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${compMove} Computer`;
             
}

function pickComputerMove(){
    const nrA = Math.random();

    let compMove = '';
            if(nrA >= 0  && nrA < 1/3) {compMove = 'Piatra';}
            else if (nrA >= 1/3 && nrA < 2/3) {compMove = 'Hartie';}
            else if (nrA >= 2/3 && nrA <1) {compMove = 'Foarfeca';}

            return compMove;
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Castigate: ${score.Castigate}, Pierdute: ${score.Pierdute}, Egal: ${score.Egal}`;

}