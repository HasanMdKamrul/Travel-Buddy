// ** Dynamic Card Creation **


const card = (travelCompanion)=>{

    const mainSection = document.getElementById('main-section');

    const travelCompanionStringify = JSON.stringify(travelCompanion);

    const sectionElement = document.createElement('section');

    sectionElement.innerHTML = `
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

    mainSection.appendChild(sectionElement);

};

const bookNowHandler = (travelCompanion)=>{
    const modalBody = document.getElementById('modal-display');

    modalBody.innerHTML = `
    <div class="card bg-dark">
        <img src="${travelCompanion.imageURL}" class="card-img-top" alt="...">
        <div class="card-body text-light">
            <h5 class="card-title text-warning">${travelCompanion.veichle}</h5>
            <p class="card-text text-info">${travelCompanion.description}</p>
            <p><small>Fare Per Kilo: ${travelCompanion.farePerKilo}</small></p></p>
            <a href="#" class="btn btn-danger text-light">Booking</a>
        </div>
    </div>
    
    `;

    modalBody.appendChild(div);
}


card(Car);
card(Bus);
card(Bike);

