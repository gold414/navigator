// SIDE NAVBAR
const sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  sidenav.style.left = "0";
}
function closeNavbar() {
  sidenav.style.left = "-60%";
}

/* ==================================================
   ROOMS DATA USING PURE JS LOGIC (NO ROOM REMOVED)
================================================== */

// Final object used by navigation
const rooms = {};

// helper to add rooms
function addRooms(floor, list) {
  list.forEach(r => {
    rooms[r[0]] = {
      name: r[1],
      floor: floor
    };
  });
}

/* ---------------- FLOOR 0 ---------------- */
addRooms(0, [
  ["0231","Conference Hall"],["0331","Principal Room"],["0332","Office"],
  ["0411","Lab"],["0412","Lab"],
  ["0451","Mechatronics Lab"],["0452","Students Study Room"],
  ["0453","CAD Lab"],["0454","CAD Lab"],
  ["0481","Manufacturing Lab"],["0482","Survey Lab"],
  ["0511","Spark"],["0512","Startup Office"],
  ["0541","Staff Room"],["0542","Staff Room"],
  ["0561","Room"],["0562","Room"],
  ["0581","CNC Lab"],["0611","Electrical Mechanics Lab"],
  ["0651","DOM Lab"],["0652","FM Lab"],
  ["0671","Thermal Lab"],
  ["0731","Soil Lab"],["0732","Concrete Lab"],
  ["0771","Room"],["0772","Room"],
  ["0851","Strength of Materials Lab"],["0852","MO Lab"],
  ["0871","Agri Lab 1"],["0872","Agri Lab 2"],
  ["0931","Room"],["0971","Room"]
]);

/* ---------------- FLOOR 1 ---------------- */
addRooms(1, [
  ["1272","Industrial Robotics"],["1371","Industrial Robotics"],["1372","Mobile Robotics"],
  ["1411","PCB Lab"],["1412","PCB Lab"],
  ["1451","Class Room"],["1452","Class Room"],["1453","Class Room"],["1454","Class Room"],
  ["1481","Class Room"],["1482","Class Room"],
  ["1511","Class Room"],["1512","Class Room"],
  ["1541","Class Room"],["1542","Soft Office"],["1543","Room"],
  ["1562","3D Printing & AR/VR Lab"],
  ["1581","Admission Office"],["1582","Admission Office"],
  ["1611","Dining"],["1612","Class Room"],
  ["1651","Class Room"],["1652","Class Room"],["1653","Class Room"],["1654","Class Room"],
  ["1681","Pilot Training"],["1682","Class Room"],["1683","Drone Design"],
  ["1731","Exam Hall"],["1732","Staff Room"],
  ["1771","Room"],["1772","Room"],
  ["1851","Exam Hall"],["1852","Exam Hall"],
  ["1871","Class Room"],["1872","Class Room"],["1873","Class Room"],
  ["1931","UPS Room"],["1971","UPS Room"]
]);

/* ---------------- FLOOR 2 ---------------- */
addRooms(2, [
  ["2331","Class Room"],["2332","Class Room"],
  ["2371","Class Room"],["2372","Class Room"],
  ["2411","Class Room"],["2412","Class Room"],
  ["2451","Faculty Room"],["2452","Faculty Room"],
  ["2453","Class Room"],["2454","Class Room"],
  ["2481","Class Room"],["2482","Class Room"],
  ["2511","Class Room"],["2512","Class Room"],
  ["2541","Faculty Room"],["2542","Faculty Room"],
  ["2561","Faculty Room"],["2562","Faculty Room"],
  ["2581","Class Room"],["2582","Class Room"],
  ["2611","Lab"],
  ["2651","Class Room"],["2652","Class Room"],["2653","Class Room"],["2654","Class Room"],
  ["2681","Class Room"],["2682","Class Room"],["2683","Class Room"],
  ["2731","Study Hall"],["2732","Study Hall"],
  ["2771","Room"],["2772","Room"],
  ["2831","Study Hall"],
  ["2851","Class Room"],["2852","Class Room"],["2853","Class Room"],["2854","Class Room"],
  ["2871","Chemistry Lab"],["2872","Class Room"],
  ["2931","UPS Room"],["2971","UPS Room"]
]);

/* ---------------- FLOOR 3 ---------------- */
addRooms(3, [
  ["3231","Rest Room"],
  ["3331","Micro Controller Lab"],["3332","Digital Electronics Lab"],
  ["3371","Lab"],["3372","Lab"],
  ["3411","Class Room"],["3412","Class Room"],
  ["3451","Lab"],["3452","Lab"],["3453","Lab"],["3454","Lab"],
  ["3481","Class Room"],["3482","Class Room"],["3483","Class Room"],
  ["3511","Lab"],["3512","Lab"],
  ["3541","Staff Room"],["3542","Staff Room"],
  ["3561","Staff Room"],["3562","Staff Room"],
  ["3581","Lab"],["3582","Lab"],
  ["3611","Lab"],["3612","Lab"],["3613","Lab"],
  ["3651","Class Room"],["3652","Class Room"],["3653","Class Room"],["3654","Class Room"],
  ["3681","Class Room"],["3682","Class Room"],["3683","Class Room"],
  ["3731","Lab"],
  ["3771","Room"],["3772","Room"],
  ["3851","Lab"],["3852","Lab"],["3853","Lab"],["3854","Lab"],
  ["3871","Lab"],["3872","Lab"],["3873","Lab"],
  ["3931","Room"],["3971","Room"]
]);

/* ---------------- FLOOR 4 ---------------- */
addRooms(4, [
  ["4331","Class Room"],["4332","Class Room"],
  ["4371","Class Room"],["4372","Class Room"],
  ["4411","Class Room"],["4412","Class Room"],["4413","Class Room"],["4414","Class Room"],
  ["4451","Class Room"],["4452","Class Room"],["4453","Class Room"],["4454","Class Room"],
  ["4481","Class Room"],["4482","Class Room"],["4483","Class Room"],
  ["4511","Class Room"],["4512","Class Room"],
  ["4541","Class Room"],["4542","Class Room"],["4543","HOD Room"],
  ["4561","Faculty Room"],["4562","Faculty Room"],
  ["4581","Class Room"],["4582","Class Room"],
  ["4611","Class Room"],["4612","Class Room"],["4613","Class Room"],["4614","Class Room"],
  ["4651","Class Room"],["4652","Class Room"],["4653","Class Room"],["4654","Class Room"],
  ["4681","Class Room"],["4682","Class Room"],
  ["4731","Placement Hall"],
  ["4771","Room"],["4772","Room"],
  ["4851","Placement Hall"],
  ["4871","Lab"],["4872","Lab"],
  ["4931","Room"],["4932","Room"]
]);

/* ---------------- FLOOR 5 ---------------- */
addRooms(5, [
  ["5331","Lab"],["5332","Lab"],
  ["5371","Class Room"],["5372","Class Room"],
  ["5411","Lab"],["5412","Lab"],
  ["5451","Class Room"],["5452","Class Room"],["5453","Class Room"],["5454","Class Room"],
  ["5481","Class Room"],["5482","Class Room"],["5483","Class Room"],
  ["5611","Class Room"],["5612","Class Room"],["5613","Class Room"],
  ["5641","Staff Room"],["5642","Staff Room"],
  ["5661","Yoga Room"],["5562","Yoga Room"],
  ["5681","Class Room"],["5682","Class Room"],["5683","Class Room"],["5684","Class Room"],
  ["5731","Class Room"],["5732","Class Room"],
  ["5832","Class Room"],
  ["5851","Class Room"],["5852","Class Room"],["5853","Class Room"],
  ["5854","Class Room"],["5855","Class Room"],
  ["5931","Room"],["5971","Room"]
]);

/* ---------------- FLOOR 6 ---------------- */
addRooms(6, [
  ["6331","Class Room"],["6332","Class Room"],
  ["6371","Class Room"],["6372","Class Room"],
  ["6411","Class Room"],["6412","Class Room"],
  ["6451","Class Room"],["6452","Class Room"],["6453","Class Room"],["6454","Class Room"],
  ["6481","Class Room"],["6482","Class Room"],["6483","Class Room"],
  ["6511","Class Room"],["6512","Class Room"],
  ["6541","Staff Room"],["6542","Staff Room"],
  ["6561","Board Room"],["6562","Board Room"],
  ["6581","Class Room"],["6582","Class Room"],
  ["6611","Class Room"],["6612","Class Room"],["6613","Class Room"],
  ["6651","Lab"],["6652","Class Room"],["6653","Class Room"],
  ["6681","Class Room"],["6682","Class Room"],["6683","Class Room"],
  ["6731","Class Room"],["6732","Class Room"],["6733","Class Room"],
  ["6771","Room"],["6772","Room"],
  ["6851","Class Room"],["6852","Class Room"],["6853","Class Room"],
  ["6854","Class Room"],["6855","Class Room"],
  ["6871","IT Room"],["6872","IT Store"],
  ["6931","Room"],["6971","Room"]
]);

/* ==================================================
   NAVIGATION LOGIC (UNCHANGED)
================================================== */

function formatRoom(room) {
  return room.padStart(4, "0");
}

function navigate() {
  const current = formatRoom(document.getElementById("currentRoom").value.trim());
  const dest = formatRoom(document.getElementById("destinationRoom").value.trim());
  const output = document.getElementById("output");

  if (!rooms[current]) {
    output.innerHTML = "❌ Current room not found";
    return;
  }
  if (!rooms[dest]) {
    output.innerHTML = "❌ Destination room not found";
    return;
  }
  if (current === dest) {
    output.innerHTML = "✅ You are already in this room";
    return;
  }

  let direction = "";
  if (rooms[current].floor === rooms[dest].floor)
    direction = "➡️ Same floor. Walk straight.";
  else if (rooms[current].floor < rooms[dest].floor)
    direction = "⬆️ Go upstairs.";
  else
    direction = "⬇️ Go downstairs.";

  output.innerHTML = `
    <b>From:</b> ${current} (${rooms[current].name})<br>
    <b>To:</b> ${dest} (${rooms[dest].name})<br><br>
    <b>Direction:</b> ${direction}
  `;
}

function clearFields() {
  document.getElementById("currentRoom").value = "";
  document.getElementById("destinationRoom").value = "";
  document.getElementById("output").innerHTML = "";
}

function clearFields() {
  document.getElementById("currentRoom").value = "";
  document.getElementById("destinationRoom").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("currentRoom").focus();
}
