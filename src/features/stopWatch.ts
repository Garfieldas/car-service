import showNotification from "../components/showNotification";

let state = 'is-on';
const getSate = () => state;
export const setState = (newState : 'is-on' | 'is-off') => {
    state = newState;
}

let diff : number;
export const getDiff = () => diff;
const setDiff = (newDiff: number) => {
    diff = newDiff;
}

let halfTime : number;
const getHalfTime = () => halfTime;
const setHalfTime = (newTime: number) =>{
    halfTime = newTime;
}

let negativeTime : number;
const getNegativeTime = () => negativeTime;
const setNegativeTime = (newTime: number) =>{
    negativeTime = newTime;
}


const stringToDate = (startTime: string, endTime: string) => {

    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);

    const start = setDate(startH, startM);
    const end = setDate(endH, endM);

    const diff = end.getTime() - start.getTime();
    setDiff(diff);

    return diff;
}

const setDate = (hour: number, minutes: number) => {
    
    const now = new Date();
    const newTime = new Date(now);
    newTime.setHours(hour);
    newTime.setMinutes(minutes);

    return newTime;
} 

const calculate = (ms: number): string => {

    const isNegative = ms < 0;
    const absMs = Math.abs(ms);

    const totalSeconds = Math.floor(absMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatted = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    return isNegative ? `-${formatted}` : formatted;
};

const pad = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const validateDate = (start: Date, end: Date) => {

    const startMinutes = (start.getHours() * 60) + start.getMinutes();
    const endMinutes = (end.getHours() * 60) + end.getMinutes();

    const result = endMinutes - startMinutes;

    return result;
}

const currentDate = () => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}-${pad(month)}-${pad(day)}`;
}

const countDown = (diff: number, displayElement: HTMLElement) => {

    const halfTime = getHalfTime() != null ? getHalfTime() : diff / 2;
    const negativeTime = getNegativeTime() != null ? getNegativeTime() : halfTime / 2;

        const interval = setInterval(() => {
            let action = getSate();
            if (action === 'is-off'){
                clearInterval(interval);
                showNotification('laikas sustabdytas', 'is-warning');
                setDiff(diff);
                setHalfTime(halfTime);
                setNegativeTime(negativeTime);
            }
            if (diff <= halfTime && diff > negativeTime){
                displayElement.className = 'is-size-1 has-text-warning has-text-weight-bold';
            }
            else if (diff <= negativeTime){
                displayElement.className = 'is-size-1 has-text-danger has-text-weight-bold';
            }
            const formatted = calculate(diff);
            displayElement.textContent = formatted;
            diff -= 1000;
            setDiff(diff);
        }, 1000);
    };
   
const timeLeftDisplay = (startTime: string, endTime: string) => {

    const diff = stringToDate(startTime, endTime);
    
    const display = calculate(diff);

    return display;
}

export { stringToDate, validateDate, setDate, currentDate, timeLeftDisplay, countDown };