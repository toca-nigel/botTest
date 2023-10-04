'''
This class represents the player type of the soccer training game. It contains properties to store the type and user name of the player.
'''
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