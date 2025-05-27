const modal = document.querySelector<HTMLElement>('#service-modal');

const showModal = () => {
    modal?.classList.add('is-active');
}

const closeModal = () => {
    modal?.classList.remove('is-active');
}

export { showModal, closeModal }