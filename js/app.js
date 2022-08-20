// ** Dynamic Card Creation **


const card = (travelCompanion)=>{

    const cardSection = document.getElementById('card-section');

    const travelCompanionStringify = JSON.stringify(travelCompanion);

    const divElement = document.createElement('div');

    divElement.setAttribute('id', 'div-section')

    divElement.innerHTML = `
    <div class="card mb-3 my-5">
        <div class="row g-0">
            <div class="col-md-4">
                <img
                    src=${travelCompanion.imageURL}
                    class="img-fluid rounded-start"
                    alt="..."
                />
            </div>
        <div class="col-md-8 bg-dark">
            <div class="card-body">
                <h5 class="card-title text-warning">Mode of Travel: ${travelCompanion.veichle}</h5>
                <p class="card-text text-info">
                    ${travelCompanion.description}
                </p>
                <p class="card-text">
                    <small class="d-block text-warning">Fare per kilo: ${travelCompanion.farePerKilo}</small>
                    <small class="d-block text-primary">Capacity: ${travelCompanion.capacity}</small>
                </p>
                <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='bookNowHandler(${travelCompanionStringify})'>
                    BOOK NOW
              </button>
              
            </div>
        </div>
        </div>
        </div>
    `;

    cardSection.appendChild(divElement);

};

const bookNowHandler = (travelCompanion)=>{
    const modalBody = document.getElementById('modal-display');

    const travelCompanionStringify = JSON.stringify(travelCompanion);

    modalBody.innerHTML = `
    <div class="card bg-dark">
        <img src="${travelCompanion.imageURL}" class="card-img-top" alt="...">
        <div class="card-body text-light">
            <h5 class="card-title text-warning">${travelCompanion.veichle}</h5>
            <p class="card-text text-info">${travelCompanion.description}</p>
            <p><small>Fare Per Kilo: ${travelCompanion.farePerKilo}</small></p></p>
            <p><small>Fare: <span id='fare'></span> </small></p></p>
            <p><small>Tax: <span id='tax'></span> </small></p></p>
            <p><small>Subtotal: <span id='subtotal'></span> </small></p></p>
           
            <div class="input-group flex-nowrap my-5">
                <input id='number-of-kilo' type="text" class="form-control" placeholder="How-Many-Kilo" aria-label="Username" aria-describedby="addon-wrapping">
                <input id='number-of-veichle' type="text" class="form-control" placeholder="How-Many-Veichle" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <a href="#" class="btn btn-danger text-light" onclick='calculateTotalFare(${travelCompanionStringify})'>Booking</a>
        </div>
    </div>
    
    `;

    
}



const calculateTotalFare = (travelCompanion) => {
    const numberOfKilos = parseInt(document.getElementById('number-of-kilo').value);
    const numberOfVeichles = parseInt(document.getElementById('number-of-veichle').value);

    const totalFare = numberOfKilos * numberOfVeichles * travelCompanion.farePerKilo;
    const totalTax = totalFare * 10/100;
    const subtotalValue = totalFare + totalTax;


    const fareDisplay = document.getElementById('fare');
    const tax = document.getElementById('tax');
    const subtotal = document.getElementById('subtotal');




    fareDisplay.innerText = totalFare;
    tax.innerText = totalTax;
    subtotal.innerText = subtotalValue;


}


const cardDisplayFunction = (veichleTypes)=> veichleTypes.forEach(veichle=> card(veichle))

cardDisplayFunction(veichleTypes)


// ** Search Button Functionality **

document.getElementById('btn-search').addEventListener('click',()=>{
    const input = document.getElementById('input-search').value;

    for (const transportMode of veichleTypes) {
        if (transportMode.veichle.toLocaleLowerCase() === input.toLocaleLowerCase()) {
            document.getElementById('card-section').innerHTML = '';
            console.log(transportMode)
            card(transportMode);
            return;
        } else{
            document.getElementById('card-section').innerHTML = `<h1 class='text-light text-center'> No data found </h1>`;
        }
        
    }

    

    
})