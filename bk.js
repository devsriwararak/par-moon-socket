// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");
// const axios = require("axios");

// app.use(cors());
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: [
//       "http://localhost:5173",
//       "https://shrine-auction-app.netlify.app",
//       "http://192.168.1.149:5173",
//     ],
//     methods: ["GET", "POST"],
//   },
// });

// // SOCKET IO
// io.on("connection", (socket) => {
//   console.log("soket connect success :", socket.id);

//   socket.on("disconnect", () => {
//     console.log("user disconnected ", socket.id);
//   });

//   //order
//   socket.on("display_1", () => {
//     //io.sockets.emit("shop", data)
//     try {
//       axios
//         .get("https://bankcash1.herokuapp.com/Show")
//         .then((result) => io.sockets.emit("show_display_1", result.data))
//         .catch((err) => res.send(err));
//     } catch (err) {
//       console.error("GG", err);
//     }
//   });

//   socket.on("display_2", () => {
//     let data;

//     // ข้อมูลเสริม
//     try {
//       axios.get("https://bankcash1.herokuapp.com/Show").then((newData) => {
//         data = newData.data;
//         mainData(data);
//       });
//     } catch (err) {
//       console.error("GG", err);
//     }

//     // ข้อมูลหลัก
//     mainData = (data) => {
//       try {
//         axios.get("https://bankcash1.herokuapp.com/Show").then((newData) => {
//           const updateData = {
//             main: {
//               ...newData.data,
//             },
//             ...data,
//           };
//           io.sockets.emit("show_display_2", updateData);
//         });
//       } catch (err) {
//         console.error("GG", err);
//       }
//     };
//   });

//   socket.on("display_3", () => {
//     let data;

//     // ข้อมูลเสริม
//     try {
//       axios.get("https://bankcash1.herokuapp.com/Show").then((newData) => {
//         data = newData.data;
//         mainData(data);
//       });
//     } catch (err) {
//       console.error("GG", err);
//     }
//     // ข้อมูลหลัก
//     mainData = (data) => {
//       try {
//         axios
//           .get("https://bankcash1.herokuapp.com/Show/List/Top")
//           .then((newData) => {
//             const updateData = {
//               main: {
//                 ...newData.data,
//               },
//               ...data,
//             };
//             io.sockets.emit("show_display_3", updateData);
//             // console.log(updateData)
//           })
//           .catch((err) => res.send(err));
//       } catch (err) {
//         console.error("GG", err);
//       }
//     };
//   });

//   socket.on("display_4", () => {
//     const data = "ลบแล้ว";
//     io.sockets.emit("show_display_4", data);
//   });

//   // Number 0
//   socket.on("number_0", () => {
//     // ข้อมูลเสริม
//     try {
//       axios.get("https://bankcash1.herokuapp.com/Show").then((newData) => {
//         data = newData.data;
//         mainData(data);
//       });
//     } catch (err) {
//       console.error("GG", err);
//     }

//     // ข้อมูลหลัก
//     mainData = (dataSub) => {
//       const updateData = {
//         main: {
//           ...dataSub,
//         },
//         data: "",
//       };
//       io.sockets.emit("show_number_0", updateData);
//     };
//   });

//   //Number 1
//   socket.on("number_1", () => {
//     // ข้อมูลเสริม
//     try {
//       axios.get("https://bankcash1.herokuapp.com/Show").then((newData) => {
//         data = newData.data;
//         mainData(data);
//       });
//     } catch (err) {
//       console.error("GG", err);
//     }

//     // ข้อมูลหลัก
//     mainData = (dataSub) => {
//       const updateData = {
//         main: {
//           ...dataSub,
//         },
//         data: "1",
//       };
//       io.sockets.emit("show_number_1", updateData);
//     };
//   });

//   // Number 2
//   socket.on("number_2", () => {
//     // ข้อมูลเสริม
//     try {
//       axios.get("https://bankcash1.herokuapp.com/Show").then((newData) => {
//         data = newData.data;
//         mainData(data);
//       });
//     } catch (err) {
//       console.error("GG", err);
//     }

//     // ข้อมูลหลัก
//     mainData = (dataSub) => {
//       const updateData = {
//         main: {
//           ...dataSub,
//         },
//         data: "2",
//       };
//       io.sockets.emit("show_number_2", updateData);
//     };
//   });

//   // Number 3
//   socket.on("number_3", () => {
//     // ข้อมูลเสริม
//     try {
//       axios.get("https://bankcash1.herokuapp.com/Show").then((newData) => {
//         data = newData.data;
//         mainData(data);
//       });
//     } catch (err) {
//       console.error("GG", err);
//     }

//     // ข้อมูลหลัก
//     mainData = (dataSub) => {
//       const updateData = {
//         main: {
//           ...dataSub,
//         },
//         data: "3",
//       };
//       io.sockets.emit("show_number_3", updateData);
//     };
//   });

//   // Number 4
//   socket.on("number_4", () => {
//     try {
//       axios
//         .get("https://bankcash1.herokuapp.com/Show")
//         .then((result) => io.sockets.emit("show_number_4", result.data))
//         .catch((err) => res.send(err));
//     } catch (err) {
//       console.error("GG", err);
//     }
//     // const data = "4"
//     // io.sockets.emit("show_number_4", data)
//   });
// });

// // START SERVER
// server.listen(process.env.PORT || 3001, () => {
//   console.log("server Running is 3001");
// });
