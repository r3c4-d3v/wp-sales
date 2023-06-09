# Wp-bot
Whatsapp bot with typescript

### Commits convention.
* Always use dot `.` at the end of commit. 
* API relevant changes
    * `feat` Commits, that adds a new feature
    * `fix` Commits, that fixes a bug
* `refactor` Commits, that rewrite/restructure your code, however does not change any behaviour
    * `perf` Commits are special `refactor` commits, that improve performance
* `style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
* `test` Commits, that add missing tests or correcting existing tests
* `docs` Commits, that affect documentation only
* `build` Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
* `ops` Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
* `chore` Miscellaneous commits e.g. modifying `.gitignore`
  
### Used technologies
* `Node.js (^18.16.0)`


* `npm (^6.14.15)`


* `whatsapp-web.js (^1.19.5)`


* `dotenv (^16.0.3)`


* `qrcode-terminal (^0.12.0)`


* `nodemon (^2.0.22)`


* `typescript (^5.0.4)`

### Installation
* Clone this repository on your local machine using the command git clone https://github.com/r3c4-d3v/wp-sales.git.


* Navigate to the root directory of the project and run the command npm install to install the necessary dependencies.
Configuration


* Navigate to the root directory of the project and run `npm run build`


* Navigate to the root directory of the project and run `npm run dev`


* Rename .env.example file to .env file in the project root directory and fill it with keys.