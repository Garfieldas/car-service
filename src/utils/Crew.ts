import { v4 as uuidv4 } from "uuid";

class Crew {
  id: string;
  number: number;
  driver: string;
  coDriver: string;
  car : string;
  startTime: string;
  endTime: string

  constructor(
    number: number,
    driver: string,
    coDriver: string,
    car : string,
    startTime: string,
    endTime: string
  ) {
    this.id = uuidv4();
    this.number = number;
    this.driver = driver;
    this.coDriver = coDriver;
    this.car = car;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

export default Crew;
