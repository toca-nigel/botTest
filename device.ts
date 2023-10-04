'''
This class represents the device type of the soccer training game. It contains a property to store the type of the device.
'''
export class Device {
  private type: string;
  setType(type: string) {
    this.type = type;
  }
  getType() {
    return this.type;
  }
}