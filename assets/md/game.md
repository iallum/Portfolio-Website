## Programming a Modified Connect 4 Game in C
*Fall 2021*

Language: C

#### Summary
* Used C to program a version of "Connection 4" with a fun twist!
* Game is a two-player game played in terminal
* Game board can be triangular or rectangular, and players can adjust the size of the board and the run length needed to win
* Coded a version that stores the piece positions in an array, and version that stores position in bit notation

#### Context
The final project for one of my classes taught in C was to code up a modified version of Connect 4 that could be played by two people in the terminal.

#### My Work
For my modified Connect 4 game, standard rules mostly apply. Players take turns placing pieces in a column of their choice on the board. The piece will then fall to the lowest available spot in that column. If a player manages to get a certain number of thier pieces (decided by the players in game setup) in a consecutive line (horizontally, vertically, or diagonally), they win the game. The twist with my version, however, is that players can play an "earthquake" for thier move instead of placing a piece in a column. When an earthquake occurs, all pieces on the board move to the furthest left or right (direction specified by the player) position they can. If after an earthquake, there are no longer enough pieces to hold a shifted piece up from below, it  falls down.

<div class="flex-center-container">
  <div>
    <img src="/assets/img/proj_details/eq_right1.png" height="150" style="margin-right: 60px">
    <img src="/assets/img/proj_details/eq_right2.png" height="150">
  </div>

  <p class="summary-text">Example of an earthquake right on a rectangular board</p>
</div>

<div class="flex-center-container">
  <div>
    <img src="/assets/img/proj_details/eq_left1.png" height="150" style="margin-right: 60px">
    <img src="/assets/img/proj_details/eq_left2.png" height="150">
  </div>

  <p class="summary-text">Example of an earthquake left on a triangular board</p>
</div>

I programmed the game to have a customizable board shape and size. The player can specify if they'd like the board to be triangular or rectangular, and how many rows they'd want. The numbers of columns is the calcalated based on the number of rows to maintain consistent board shapes. As I mentioned above, players also specify the number of pieces in a row that must be achived in order to win. Typically, the the positions of the pieces on the board are tracked in an array, but if specified, the positions of the pieces can be tracked in bit notiation instead.

#### An Example Game

Below is an example of a game played on a traingular board game a specified height of 5 and winning line length of 4 pieces.

<iframe 
  src="/assets/example_game.pdf" 
  width="100%" 
  height="500px"
  style="border: none;">
</iframe>