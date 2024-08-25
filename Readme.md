After downloading the file
open two terminals

<!-- *Terminal one: Client -->

cd client
npm install --legacy-peer-deps

<!-- (--legacy-peer-deps ) this help you to forcefully install or uninstall some packages in this project -->

npm run dev

<!-- * Terminal Two: Server -->

cd server
npm install
nodemon
