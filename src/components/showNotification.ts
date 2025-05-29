const showNotification = (message : string, type : 'is-success' | 'is-danger' | 'is-warning', duration = 3000) => {

    const container = document.querySelector('#notifications-container');

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    container?.appendChild(notification);

    setTimeout(() => {
        if (container?.contains(notification)){
            container.removeChild(notification)
        }
    }, duration);
}

export default showNotification;