## Programming a Modified Connect 4 Game in C
*Fall 2021*

Language: C

#### Summary
* Used C to program a version of "Connection 4" with a fun twist!
* Game is a two-player game played in terminal
* Game board can be triangular or rectangular with custom height and width
* Coded a version that stores the piece positions in an array, and version that stores position in bit notation

#### Context
The final project for one of my classes taught in C was to code up a modified version of Connect 4 that could be played by two people in the terminal.

#### My Work
For my modified Connect 4 game, the standard win condition still applied. If a player managed to get four of thier pieces in a consecutive line (horizontally, vertically, or diagonally), they would win the game. The twist with my version, however, was that players could play an "earthquake" for thier move rather than placing a piece in a column. When an earthquake occured made, all pieces on the board would move to the furthest left or right (direction specified by the player) position they could. If after an earthquake there were no longer enough pieces to hold a shifted piece up from below, it would fall down.

I programmed the game to have a customizable board shape and size. The player can specify if they'd like the board to be triangular or rectangular, and how many rows and columns they'd want. I also coded the game so that the positions of the pieces throughout the grid are tracked in an array. But if specified, the positions of the pieces can be tracked in bit notiation instead.

#### Photos of an Example Game