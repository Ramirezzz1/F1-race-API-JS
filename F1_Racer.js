let form = document.getElementById('F1Stats');

let racers = {};

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let name = event.path[0][0].value;
    let wishes = event.path[0][1].value;

    //save data
    if (racers[name]){

    }else{
        racers[name] = [];
    }

    //API call
    loadData(wishes,name);
    console.log(racers);
});

//Making API call to ergast.com
let getData = async (input) => {
    console.log(input);
    let thing = 'series'; //should be f1
    let thing2 = 'season'; //should be the season requested
    let thing3 = 'round'; // should be 1 or two digits
    let response = await ergast.get(`http://ergast.com/api/${thing}/${thing2}/${thing3}`);
    return response.data
}

// Make an html element from F1 api
let loadData = async (input, racers) => {
    let catFact = await getData(input);
    let html = `<h3 id="stats">${thing2}<h3> `;
    document.querySelector('#F1Stats').insertAdjacentElement('afterend',html);
}