import showNotification from "../components/showNotification";

class StopWatch {
  private state: "is-on" | "is-off" = "is-on";
  private diff: number;
  private halfTime: number;
  private negativeTime: number;
  private intervalId: number | null = null;

  private startTime: string;
  private endTime: string;
  private displayElement: HTMLElement;

  constructor(startTime: string, endTime: string, displayElement: HTMLElement) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.displayElement = displayElement;
    this.intervalId = null;

    const [startH, startM] = this.startTime.split(":").map(Number);
    const [endH, endM] = this.endTime.split(":").map(Number);

    const start = this.setDate(startH, startM);
    const end = this.setDate(endH, endM);

    this.diff = end.getTime() - start.getTime();
    this.halfTime = this.diff / 2;
    this.negativeTime = this.halfTime / 2;
  }

  private setDate(hour: number, minutes: number): Date {
    const now = new Date();
    const newTime = new Date(now);
    newTime.setHours(hour);
    newTime.setMinutes(minutes);

    return newTime;
  }

  private calculate(ms: number): string {
    const isNegative = ms < 0;
    const absMs = Math.abs(ms);

    const totalSeconds = Math.floor(absMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatted = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(
      seconds
    )}`;
    return isNegative ? `-${formatted}` : formatted;
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  start() {
    if (this.intervalId !== null) return;
    this.intervalId = setInterval(() => {
      if (this.state === "is-off") {
        clearInterval(this.intervalId!);
        showNotification("Laikas sustabdytas", "is-warning");
        return;
      }
      if (this.diff <= this.halfTime && this.diff > this.negativeTime) {
        this.displayElement.className =
          "is-size-1 has-text-warning has-text-weight-bold";
      } else if (this.diff <= this.negativeTime) {
        this.displayElement.className =
          "is-size-1 has-text-danger has-text-weight-bold";
      }
      const formated = this.calculate(this.diff);
      this.displayElement.textContent = formated;
      this.diff -= 1000;
    }, 1000);
  }
  stop() {
    this.state = "is-off";
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resume() {
    this.state = "is-on";
    this.start();
  }

  public getTimeLeft(): string {
    return this.calculate(this.diff);
  }

  public currentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${this.pad(month)}-${this.pad(day)}`;
  }

  public watchStartTime(): void {
    const now = new Date();
    const [startH, startM] = this.startTime.split(":").map(Number);
    const start = this.setDate(startH, startM);
    if (now >= start) {
      this.start();
      return;
    }

    const checker = setInterval(() => {
      const now = new Date();
      const currentH = this.pad(now.getHours());
      const currentM = this.pad(now.getMinutes());
      const formated = `${currentH}:${currentM}`;

      if (formated === this.startTime) {
        clearInterval(checker);
        this.start();
      }
    }, 1000);
  }
}

export default StopWatch;
