import { Space } from './space';
import { Player } from './player';
import { Device } from './device';
export class Game {
  private space: Space;
  private player: Player;
  private device: Device;
  constructor() {
    this.space = new Space();
    this.player = new Player();
    this.device = new Device();
  }
  setSpaceType(length: string) {
    this.space.setLength(length);
  }
  setPlayerType(type: string) {
    this.player.setType(type);
  }
  setDeviceType(type: string) {
    this.device.setType(type);
  }
  setConfigurations(configurations: {
    intervals: number;
    ballSpeed: string;
    targetColors: string[];
    targetLocations: string[];
    userName: string;
  }) {
    this.space.setIntervals(configurations.intervals);
    this.space.setBallSpeed(configurations.ballSpeed);
    this.space.setTargetColors(configurations.targetColors);
    this.space.setTargetLocations(configurations.targetLocations);
    this.player.setUserName(configurations.userName);
  }
  start() {
    console.log('Game started');
    console.log('Space Type:', this.space.getLength());
    console.log('Player Type:', this.player.getType());
    console.log('Device Type:', this.device.getType());
    console.log('Intervals:', this.space.getIntervals());
    console.log('Ball Speed:', this.space.getBallSpeed());
    console.log('Target Colors:', this.space.getTargetColors());
    console.log('Target Locations:', this.space.getTargetLocations());
    console.log('User Name:', this.player.getUserName());
  }
}