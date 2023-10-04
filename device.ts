export class Device {
  private type: string;
  setType(type: string) {
    this.type = type;
  }
  getType() {
    return this.type;
  }
}