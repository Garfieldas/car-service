import { v4 as uuidv4 } from "uuid";

class Crew {
  id: string;
  number: number;
  driver: string;
  coDriver: string;
  car : string;
  startTime: Date;
  endTime: Date;

  constructor(
    id: string,
    number: number,
    driver: string,
    coDriver: string,
    car : string,
    startTime: Date,
    endTime: Date
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
