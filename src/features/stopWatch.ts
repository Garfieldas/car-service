const stopWatch = () => {

    const startTime = '12:00';
    const endTime = '12:30';

    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);

    const start = setDate(startH, startM);
    const end = setDate(endH, endM);

    const diff = end.getTime() - start.getTime();

    const seconds = diff / 1000;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const result = new Date();
    result.setHours(hours);
    result.setMinutes(minutes);
    result.setSeconds(remainingSeconds);



    console.log(`${hours}:${minutes}:${remainingSeconds}`);
    console.log(result)

}

const setDate = (hour: number, minutes: number) => {
    
    const now = new Date();
    const newTime = new Date(now);
    newTime.setHours(hour);
    newTime.setMinutes(minutes);

    return newTime;
} 

export { stopWatch };