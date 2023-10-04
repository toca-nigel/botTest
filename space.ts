export class Space {
  private length: string;
  private intervals: number;
  private ballSpeed: string;
  private targetColors: string[];
  private targetLocations: string[];
  setLength(length: string) {
    this.length = length;
  }
  setIntervals(intervals: number) {
    this.intervals = intervals;
  }
  setBallSpeed(ballSpeed: string) {
    this.ballSpeed = ballSpeed;
  }
  setTargetColors(targetColors: string[]) {
    this.targetColors = targetColors;
  }
  setTargetLocations(targetLocations: string[]) {
    this.targetLocations = targetLocations;
  }
  getLength() {
    return this.length;
  }
  getIntervals() {
    return this.intervals;
  }
  getBallSpeed() {
    return this.ballSpeed;
  }
  getTargetColors() {
    return this.targetColors;
  }
  getTargetLocations() {
    return this.targetLocations;
  }
}