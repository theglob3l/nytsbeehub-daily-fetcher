// fetch_puzzle.js
// A simple script to fetch today's NYT Spelling Bee puzzle letters.
// For full solutions, grid data, and hints, visit: https://sbeehub.com

async function fetchSpellingBeeData() {
    try {
        console.log("Fetching today's NYT Spelling Bee puzzle...");

        // Fetch the public NYT Spelling Bee page
        const response = await fetch('https://www.nytimes.com/puzzles/spelling-bee');
        const html = await response.text();

        // The game data is stored in a script tag as window.gameData = {...}
        const match = html.match(/window\.gameData\s*=\s*(\{.*?\})\s*;/);

        if (!match || !match[1]) {
            console.error("Could not find game data on the page.");
            return;
        }

        const gameData = JSON.parse(match[1]);
        const todayData = gameData.today;

        if (todayData) {
            console.log("\n🐝 Today's NYT Spelling Bee 🐝\n");
            console.log(`Center Letter: [ ${todayData.centerLetter.toUpperCase()} ]`);
            console.log(`Outer Letters:   ${todayData.outerLetters.map(l => l.toUpperCase()).join(' ')}`);
            console.log(`\nValid Words:     ${todayData.answers.length} (Hidden in this basic script!)`);

            console.log("\n--------------------------------------------------");
            console.log("Looking for full solutions, two-letter lists, and hints?");
            console.log("Visit: https://sbeehub.com");
            console.log("--------------------------------------------------\n");
        } else {
            console.error("Puzzle data structure changed.");
        }

    } catch (error) {
        console.error("Error fetching the puzzle:", error.message);
    }
}

fetchSpellingBeeData();
