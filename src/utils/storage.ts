import Crew from "./Crew"

const saveToStorage = (newCrew: Crew) => {
    const stored = readFromStorage();
    const crewList: Crew[] = stored ? JSON.parse(stored) : [];
    crewList.push(newCrew);
    localStorage.setItem('crew', JSON.stringify(crewList));
}

const saveAllToStorage = (crews: Crew[]) => {
    localStorage.setItem('crew', JSON.stringify(crews));
}

const readFromStorage = () => {
    const stored = localStorage.getItem('crew');
    return stored;
}

const getFromStorage = (): Crew[] => {
    
    const allItems = readFromStorage();
    if (!allItems){
        return[];
    }
    const filtered = JSON.parse(allItems);
    return filtered;
}

export {saveToStorage, getFromStorage, saveAllToStorage};