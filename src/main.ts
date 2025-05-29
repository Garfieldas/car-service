import { closeModal, showModal } from "./components/modal";
import renderCard from "./components/renderCard";
import { stopWatch } from "./features/stopWatch";
import { addCrew } from "./utils/addCrew";

const addNewBtn = document.querySelector('#add-new-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const modalBg = document.querySelector('.modal-background');

const addServiceBtn = document.querySelector<HTMLButtonElement>('#add-service-btn');
const modalBody = document.querySelector('.modal-card-body');

addNewBtn?.addEventListener('click', () => {
    showModal();
})

closeModalBtn?.addEventListener('click', () => {
    closeModal();
})

modalBg?.addEventListener('click', () => {
    closeModal();
})

modalBody?.addEventListener('keypress', (e) => {
    if (e instanceof KeyboardEvent && e.key === 'Enter') {
        addServiceBtn?.click();
    }
})

addServiceBtn?.addEventListener('click', () => {
    const crew = addCrew();
    if (crew){
        renderCard(crew);
        closeModal();
    }
})

window.addEventListener('load', () => {
    stopWatch();
})