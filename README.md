# PURPLE CRYSTAL — Conditional Execution

A browser-based quiz converted from the original `purple_crystal_quiz.py`.
It includes the same 60 questions, three levels, multiple-choice and short-answer questions, scoring, feedback, and a purple crystal theme.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. No Python, install, account, or server is needed for local play.

## Publish free with GitHub Pages
1. Sign in or create an account at https://github.com/
2. Create a new repository. For example: `purple-crystal-quiz`.
3. Upload these three files from this folder into the repository root:
   - `index.html`
   - `style.css`
   - `script.js`
4. In the repository, open **Settings** → **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait a minute or two; GitHub will show the public Pages URL in the Pages section.
8. Share that URL. It works on phones, tablets, and computers with a browser.

## Notes
- The quiz does not require a backend and does not upload answers anywhere.
- Scores are kept only for the current session; there is no shared leaderboard or permanent result storage.
- Short answers are checked with flexible keyword matching, so some valid alternative wording may not be recognized. The sample answer and explanation are shown when an answer is not accepted.
- The question bank was carried over from the Python version. Short-answer auto-grading is necessarily approximate.


### English and Arabic questions
Every question is displayed in English alongside its Arabic translation. On wider screens the two appear side by side; on phones they stack for readability.
