import { closeModal, showModal } from "./components/modal";
import renderCard from "./components/renderCard";
import { addCrew } from "./utils/addCrew";

const addNewBtn = document.querySelector('#add-new-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const modalBg = document.querySelector('.modal-background');

const addServiceBtn = document.querySelector('#add-service-btn');
// const crewNumber = document.querySelector('#crew-number');
// const driver = document.querySelector('#driver');
// const coDriver = document.querySelector('#co-driver');
// const carNumber = document.querySelector('#car-number');
// const serviceStart = document.querySelector('service-start');
// const serviceEnd = document.querySelector('service-end');

window.addEventListener('load', () => {
    renderCard();
})

addNewBtn?.addEventListener('click', () => {
    showModal();
})

closeModalBtn?.addEventListener('click', () => {
    closeModal();
})

modalBg?.addEventListener('click', () => {
    closeModal();
})

addServiceBtn?.addEventListener('click', () => {
    addCrew();
})