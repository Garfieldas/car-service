import Crew from "./Crew";

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
    console.log("invalid");
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
