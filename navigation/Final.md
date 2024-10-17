import random

# Initialize variables
grid_size = 5  # Grid is 5x5
grid = [['.' for _ in range(grid_size)] for _ in range(grid_size)]  # 5x5 grid of empty spaces
treasure_position = (random.randint(0, grid_size-1), random.randint(0, grid_size-1))
player_position = [0, 0]  # Player starts at the top-left corner (0, 0)

# Place the treasure in the grid
grid[treasure_position[0]][treasure_position[1]] = 'T'

# Function to display the grid
def display_grid():
    for row in grid:
        print(' '.join(row))

# Function to update the player's position
def update_player_position(new_position):
    grid[player_position[0]][player_position[1]] = '.'  # Remove old position
    player_position[0] = new_position[0]
    player_position[1] = new_position[1]
    grid[player_position[0]][player_position[1]] = 'P'  # Mark new position with 'P'

# Function to check if player found the treasure
def check_for_treasure():
    return player_position == list(treasure_position)

# Main game loop
def play_game():
    print("Welcome to the Treasure Hunt Game!")
    grid[player_position[0]][player_position[1]] = 'P'  # Mark initial position
    while True:
        display_grid()
        
        # Take player input for movement
        move = input("Move (up/down/left/right): ").lower()
        
        # Handle movement
        if move == "up" and player_position[0] > 0:
            update_player_position([player_position[0] - 1, player_position[1]])
        elif move == "down" and player_position[0] < grid_size - 1:
            update_player_position([player_position[0] + 1, player_position[1]])
        elif move == "left" and player_position[1] > 0:
            update_player_position([player_position[0], player_position[1] - 1])
        elif move == "right" and player_position[1] < grid_size - 1:
            update_player_position([player_position[0], player_position[1] + 1])
        else:
            print("Invalid move. Try again.")
            continue  # Skip to next iteration if invalid move
        
        # Check if player found the treasure
        if check_for_treasure():
            display_grid()
            print("Congratulations! You found the treasure!")
            break

# Run the game
play_game()
