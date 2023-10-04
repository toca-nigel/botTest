'''
This is the entry point of the web application. It creates a new game instance, sets the configurations, and starts the game.
'''
import { Game } from './game';
import { Space } from './space';
import { Player } from './player';
import { Device } from './device';
// Create a new game
const game = new Game();
// Set configurations for the game
game.setSpaceType('5 feet');
game.setPlayerType('multiplayer');
game.setDeviceType('multiple BTLE devices');
game.setConfigurations({
  intervals: 10,
  ballSpeed: 'medium',
  targetColors: ['red', 'blue', 'green'],
  targetLocations: ['left', 'center', 'right'],
  userName: 'John Doe',
});
// Start the game
game.start();