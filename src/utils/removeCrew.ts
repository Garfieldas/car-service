import { getFromStorage, saveAllToStorage } from "./storage";

const removeCrew = (id : string) => {
    
    const card = document.getElementById(id);
    card?.remove();

    const storedCrews = getFromStorage();
    const filtered = storedCrews.filter((crew) => crew.id !== id);

    saveAllToStorage(filtered);

}

export default removeCrew;