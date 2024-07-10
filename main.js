// Create a server that responds to several paths:
// /html should return any HTML code.
// /api should return an object such as animals, users, etc.
// /time should return the current time in ISO string format.
// Any other request should return "Not Found".

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/html") {
//     res.setHeader("content-type", "application/html");
//     res.write(`
//         <!DOCTYPE html>
//         <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//         </head>
//         <body>
//         <h1>hello world</h1>
//         </body>
//         </html>
//         <html lang="en">
//         `);
//     return res.end();
//   } else if (req.url === "/api") {
//     const data = {
//       name: "monkey",
//       meatEater: true,
//     };
//     res.setHeader("content-type", "application/json");
//     res.write(JSON.stringify(data));
//     return res.end();
//   } else if (req.url === "/time") {
//     res.setHeader("content-type", "application/json");
//     res.write(JSON.stringify(new Date().toISOString()));
//     return res.end();
//   } else {
//     res.setHeader("content-type", "application/json");
//     res.write(JSON.stringify("404 not found"));
//     return res.end();
//   }
// });

// server.listen(3000, () => {
//   console.log("server running on http://localhost:3000");
// });

// Create another server with two methods:
// /movie that returns a random movie title, genre, director, and year.
// /number that returns a random number between 1 and 1000, and check if the random number is 111, 222, 333, 444, ... 999, then return "You win the jackpot!" or something similar.

// const http = require("http");
// const fs = require("fs/promises");

// const server = http.createServer(async (req, res) => {
//   if (req.url === "/movies") {
//     const rawData = await fs.readFile("data.json", "utf-8");
//     const data = JSON.parse(rawData);
//     const randomIndex = Math.floor(Math.random() * data.length);
//     res.setHeader("content-type", "application.json");
//     res.write(JSON.stringify(data[randomIndex]));
//     return res.end();
//   } else if (req.url === "/number") {
//     res.setHeader("content-type", "application/json");
//     const random = Math.floor(Math.random() * 1000);
//     const stringNum = String(random);
//     if (random > 10) {
//       let jackpot = true;
//       for (let i = 0; i < stringNum.length - 1; i++) {
//         if (stringNum[i] !== stringNum[i + 1]) {
//           jackpot = false;
//           break;
//         }
//       }
//       if (jackpot) {
//         res.write(
//           JSON.stringify({ Number: random, message: "You win the jackpot!" })
//         );
//       } else {
//         res.write("try again");
//       }
//     } else {
//       res.write("try again");
//     }
//     return res.end();
//   }
// });
// server.listen(3000, () => {
//   console.log("server running on http://localhost:3000");
// });
