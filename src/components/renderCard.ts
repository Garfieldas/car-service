import Crew from "../utils/Crew";
import { stopWatch, currentDate, timeLeftDisplay } from "../features/stopWatch";
import removeCrew from "../utils/removeCrew";
import showNotification from "./showNotification";

const renderCard = (crew: Crew) => {

    const cardContainer = document.querySelector('#crew-card-wrapper');

    const card = document.createElement('div');
    card.className = 'card p-5 has-background-dark has-text-white';
    card.setAttribute('id', crew.id);

    const title = document.createElement('h1');
    title.className = 'title has-text-white has-text-centered is-size-3 mb-4';
    card.appendChild(title);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-container';
    card.appendChild(tableContainer);

    const table = document.createElement('table');
    table.className = 'table is-fullwidth has-background-grey-dark has-text-white mb-5 is-bordered is-striped is-hoverable';
    tableContainer.appendChild(table);

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const rows = ['Ekipažas', 'Vairuotojas', 'Šturmanas', 'Automobilis'];
    const tr = document.createElement('tr');

    rows.forEach(row => {
        const th = document.createElement('th');
        th.className = 'is-size-4';
        th.textContent = row;
        tr.appendChild(th);
        
    });
    thead.appendChild(tr);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    const tr2 = document.createElement('tr');

    const values = ['number', 'driver', 'coDriver', 'car'];

    values.forEach(value => {
        const td = document.createElement('td');
        td.className = 'is-size-4';
        const fieldValue = crew[value as keyof typeof crew];
        td.textContent = value === 'number' ? `#${fieldValue}` : String(fieldValue);
        tr2.appendChild(td);
    })
    tbody.appendChild(tr2);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'has-text-centered mb-5';
    card.appendChild(timeDiv);

    const p1 = document.createElement('p');
    p1.className = 'is-size-4 has-text-grey-light';
    p1.textContent = 'Laikas iki serviso pabaigos:';
    timeDiv.appendChild(p1);

    const p2 = document.createElement('p');
    p2.className = 'is-size-1 has-text-danger has-text-weight-bold';
    p2.setAttribute('id', 'timer');
    p2.textContent = timeLeftDisplay(crew.startTime, crew.endTime);
    timeDiv.appendChild(p2);

    //Start button
    const startBtn = document.createElement('button');
    startBtn.className = 'button is-primary is-size-3';
    startBtn.textContent = 'Start';
    timeDiv.appendChild(startBtn);
    startBtn.addEventListener('click', () => {
        const stopWatchCall = stopWatch(crew.startTime, crew.endTime, p2);
        stopWatchCall.startCountdown();
        startBtn.remove();
        showNotification('Laiko skaičiavimas prasidėjo', 'is-success');
    })

    const servicetDiv = document.createElement('div');
    servicetDiv.className = 'columns is-mobile is-multiline is-variable is-4';
    card.appendChild(servicetDiv);

    const startDiv = document.createElement('div');
    startDiv.className = 'column is-full-mobile is-half-tablet';
    servicetDiv.appendChild(startDiv);

    const infoText = document.createElement('p');
    infoText.className = 'is-size-4 has-text-success is-bold';
    infoText.textContent = 'Papildoma informacija';
    startDiv.appendChild(infoText)

    const p3 = document.createElement('p');
    p3.className = 'is-size-4';
    p3.textContent = 'Serviso pradžia: ';

    const strong1 = document.createElement('strong');
    strong1.textContent = crew.startTime;
    p3.appendChild(strong1);
    startDiv.appendChild(p3);

    const endDiv = document.createElement('div');
    endDiv.className = 'column is-full-mobile is-half-tablet has-text-right';
    servicetDiv.appendChild(endDiv);

    const p4 = document.createElement('p');
    p4.className = 'is-size-4';
    p4.textContent = currentDate();
    endDiv.appendChild(p4);

    const p5 = document.createElement('p');
    p5.className = 'is-size-5';
    p5.textContent = 'Serviso pabaiga: ';

    const strong2 = document.createElement('strong');
    strong2.textContent = crew.endTime
    p5.appendChild(strong2);
    endDiv.appendChild(p5);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'button is-danger';
    deleteBtn.textContent = 'Ištrinti';
    servicetDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        removeCrew(crew.id);
        showNotification('Įrašas pašalintas', 'is-warning');
    })

    cardContainer?.appendChild(card);

}

export default renderCard;