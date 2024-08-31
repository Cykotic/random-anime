# Random Anime Selector

This script selects a random anime title from your "Plan to Watch" list on Hianime. Since Hianime does not have a random button, this script fetches all the titles from a specified number of pages and picks one randomly.

## How It Works

1. **Fetch Anime Titles**: The script fetches titles from each page of your "Plan to Watch" list.
2. **Combine Results**: It combines the titles from all pages into one list.
3. **Select Random Anime**: It randomly selects one anime from the combined list and logs the title and URL to the console.

## Usage

1. **Open Hianime's "Plan to Watch" Page**:
   Navigate to the "Plan to Watch" section on Hianime where your anime list is displayed.

2. **Open Browser Developer Console**:
   - **Chrome**: Right-click on the page, select "Inspect", and then go to the "Console" tab.
   - **Firefox**: Right-click on the page, select "Inspect Element", and then go to the "Console" tab.
   - **Edge**: Right-click on the page, select "Inspect", and then go to the "Console" tab.
   - **Opera GX**: Right-click on the page, select "Inspect", and then go to the "Console" tab.


3. **Paste and Run the Script**:
   - Copy the entire script from the Script section above.
   - Paste it into the console prompt and press Enter.

4. **View the Random Anime**:
   After running the script, the console will display the title and URL of a randomly selected anime from your "Plan to Watch" list.

5. **Adjust Total Pages**:
   If the number of pages in your "Plan to Watch" list is different from 16, change the number in `await RandomAnime(16)` to match the number of pages you have.

**Note**: This script is for [Hianime](https://hianime.to).
