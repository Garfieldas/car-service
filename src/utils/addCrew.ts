import Crew from "./Crew";
import { setDate, validateDate } from "../features/stopWatch";
import { closeModal } from "../components/modal";
import showNotification from "../components/showNotification";

const addCrew = () => {
  const crewNumber = document.querySelector<HTMLInputElement>("#crew-number");
  const driver = document.querySelector<HTMLInputElement>("#driver");
  const coDriver = document.querySelector<HTMLInputElement>("#co-driver");
  const carNumber = document.querySelector<HTMLInputElement>("#car-number");
  const serviceStart = document.querySelector<HTMLInputElement>("#service-start");
  const serviceEnd = document.querySelector<HTMLInputElement>("#service-end");

  const crewNumberValue = crewNumber?.value;
  const driverValue = driver?.value;
  const coDriverValue = coDriver?.value;
  const carValue = carNumber?.value;
  const start = serviceStart?.value;
  const end = serviceEnd?.value;

  if (
    !crewNumberValue ||
    !driverValue ||
    !coDriverValue ||
    !carValue ||
    !start ||
    !end
  ) {
    showNotification('Kai kurie laukai nebuvo užpildyti!', 'is-danger');
    closeModal();
    return;
  }

  const [startH, startM] = start.split(":").map(Number);
  const [endH, endM] = end.split(":").map(Number);

  const startDate = setDate(startH, startM);
  const endDate = setDate(endH, endM);

  const checkDate = validateDate(startDate, endDate);

  if (checkDate <= 0){
    showNotification('Neteisingas starto laikas', 'is-danger');
    closeModal();
    serviceStart.value = '';
    serviceEnd.value = '';
    return;
  }

  const crew = new Crew(
    parseInt(crewNumberValue),
    driverValue,
    coDriverValue,
    carValue,
    start,
    end
  );
  crewNumber.value = '';
  driver.value = '';
  coDriver.value = '';
  carNumber.value= '';
  serviceStart.value = '';
  serviceEnd.value = '';
  
  return crew;
};

export { addCrew };
