import { closeModal, showModal } from "./components/modal";
import renderCard from "./components/renderCard";
import showNotification from "./components/showNotification";
import { addCrew } from "./utils/addCrew";
import { getFromStorage, saveToStorage } from "./utils/storage";

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
    const storedList = getFromStorage();
    const exists = storedList.some(
        (item) =>
        (item.number === crew?.number || 
            item.driver && item?.coDriver === crew?.driver && crew.coDriver)
    );
    if (exists){
        closeModal();
        showNotification('Šis ekipažas jau egzistuoja', 'is-danger');
        return;
    }
    if (crew){
        renderCard(crew);
        closeModal();
        showNotification('Įrašas sėkmingai pridėtas', 'is-success');
        saveToStorage(crew);
    }
})

window.addEventListener('load', () => {
    const crewList = getFromStorage();
    crewList.forEach(crew => {
        renderCard(crew);
    });
})