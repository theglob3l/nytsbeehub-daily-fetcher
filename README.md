# NYT Spelling Bee Daily Fetcher

A basic, lightweight script to fetch the daily New York Times Spelling Bee letters directly from the source. 

If you are just looking to quickly see what today's letters are from your terminal, this script does exactly that. 

## How it Works
The script fetches the public HTML from the NYT Spelling Bee page and securely extracts the `window.gameData` JSON payload containing the puzzle's daily letters. 

## Usage

You'll need [Node.js](https://nodejs.org/) installed on your machine.
Run the script natively using:
```bash
node fetch_puzzle.js
```

### Example Output:
```
Fetching today's NYT Spelling Bee puzzle...

🐝 Today's NYT Spelling Bee 🐝

Center Letter: [ A ]
Outer Letters:   B C D E F G

Valid Words:     42 (Hidden in this basic script!)
```

## Expanding for Solutions & Hints

This script is intentionally kept basic. **It does not print or fetch the answers.** 

If you want to access:
- **Full Daily Solutions & Answers**
- **Two-Letter List (2LL)**
- **Grid Matrix (Hints)**
- **Past puzzle archives**

You can find all of this beautifully formatted and updated daily at:

👉 **[Spelling Bee Hub (sbeehub.com)](https://sbeehub.com)** 👈


## License
MIT License. Feel free to fork and modify!
