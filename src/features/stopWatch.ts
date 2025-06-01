const stringToDate = (startTime: string, endTime: string) => {

    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);

    const start = setDate(startH, startM);
    const end = setDate(endH, endM);

    const diff = end.getTime() - start.getTime();

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
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
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
        
    let timeLeft = diff;

        const interval = setInterval(() => {
            if (timeLeft <= 0){
                clearInterval(interval);
                displayElement.textContent = '00:00';
                return;
            }
            const formatted = calculate(timeLeft);
            displayElement.textContent = formatted;
            timeLeft -= 1000;
        }, 1000);
    };

const timeLeftDisplay = (startTime: string, endTime: string) => {

    const diff = stringToDate(startTime, endTime);
    
    const display = calculate(diff);

    return display;
}

export { stringToDate, validateDate, setDate, currentDate, timeLeftDisplay, countDown };