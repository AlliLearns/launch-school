// Tick Tac Toe game

/*  Textual description of the game.
  - Tic Tac Toe is a 2-player board game.
  - The board is a 3 x 3 grid
  - Players take turns making a square with a marker that IDs the player.
  - Traditionally, the player to go first uses the marker `X` to mark their squares.
  - The player to go second uses the marker `O`
  - The first player to mark 3 squares in a row with their marker wins the game.
  - A row can be a horizontal row, a vertical column or either of the two diagonals.
  - There is one human player and one computer player. 
  - The human player always moves first in the initial version of our game. 
*/

/*  Identify the nouns and verbs.
  NOUNS
    game, board, square, grid, marker, row, player, human, computer
  
  VERBS
    play, mark, move, place

  Some of these words aren't significant to the game design so we won't 
  discuss them further. For instance, 'grid' is a synonym for 'board' so we 
  probably don't need to concern ourselves with grids. Similarly, 'move' and 
  'place' are synonyms for 'mark'.
*/

/*  Organize
  Let's organize our words a bit by writing down the significant nouns and 
  verbs in a way that shows some of the most likely relationships between words:
  - Game   (n)
  - Board  (n)
  - Row    (n)
  - Square (n)
  - Marker (n)
  - Player (n)
    Mark    (v)
    Play    (v)
    Human   (v)
    Computer(v)
  
  None of our verbs appear to apply to the 'game', 'board' or 'square' nouns.
  However, that doesn't matter; remember, we had a similar issue when working 
  on the Rock Paper Scissors game. 

  Note that 'human' and 'computer' beneath 'player' indicate that they are 
  'subclasses' of 'player'. A similar situation may apply to 'row', 'square'
  and 'marker', but that isn't clear at this point.

  This list may not be final and some of the words present may not be significant. 
  Our primary purpose in writing this list is to give ourselves a starting point. 
*/