export class Player {
  private type: string;
  private userName: string;
  setType(type: string) {
    this.type = type;
  }
  setUserName(userName: string) {
    this.userName = userName;
  }
  getType() {
    return this.type;
  }
  getUserName() {
    return this.userName;
  }
}