const stopWatch = () => {

    const startTime = '12:00';
    const endTime = '12:30';

    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);

    const start = setDate(startH, startM);
    const end = setDate(endH, endM);

    const diff = end.getTime() - start.getTime();

    const timeLeft = countDown(diff);

    const newTime = calculate(timeLeft);

    console.log(newTime)

}

const setDate = (hour: number, minutes: number) => {
    
    const now = new Date();
    const newTime = new Date(now);
    newTime.setHours(hour);
    newTime.setMinutes(minutes);

    return newTime;
} 

const calculate = (diff: number) => {
    
    const seconds = diff / 1000;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const result = new Date();
    result.setHours(hours);
    result.setMinutes(minutes);
    result.setSeconds(remainingSeconds);

    return result;
}

const countDown = (timeLeft: number) => {
    
    const diff = timeLeft - 1000;

    return diff;
}

export { stopWatch };