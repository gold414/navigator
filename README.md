# NAV🧭
# code

map.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NAVO</title>
  <link rel="icon" href="dp nobg.png">
  <link rel="stylesheet" href="map.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <div class="NAVO">

    <!-- NAVBAR -->
    <nav class="navbar">
      <div><img src="NAVO.png" alt="NAVO"></div>
      <div class="toggle" onclick="showNavbar()">☰</div>
      <div class="list">
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="maps.html">Maps</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- SIDE NAVBAR -->
    <div class="side-navbar">
      <h3 class="close-btn" onclick="closeNavbar()">X</h3>
      <ul>
        <li class="side-navbar-link"><a href="home.html">Home</a></li>
        <li class="side-navbar-link"><a href="maps.html">Maps</a></li>
        <li class="side-navbar-link"><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <img src="logo.png" alt="Logo" class="logo">

    <!-- GLASS BOX -->
    <div class="glass-box">
      <h2>Navigator</h2>

      <input type="text" id="currentRoom" placeholder="Enter current room (e.g. 0231)">
      <br>
      <input type="text" id="destinationRoom" placeholder="Enter destination room (e.g. 0451)">
      <br>

      <button onclick="navigate()">Navigate</button>

      <p id="output"></p>
    </div>

  </div>

  <script src="map.js"></script>
</body>
</html>

```

map.css
```
body{
    margin: 0;
    height: 100vh;
    background: linear-gradient(-45deg, #2f0750, #220132, #180456, #450052);
    background-size: 400% 400%;
    animation: gradientMove 15s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes gradientMove{
    0%{background-position: 0% 50%;}
    50%{background-position: 100% 50%;}
    100%{background-position: 0% 50%;}
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;

  /* Glass effect */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  /* Bottom shadow */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

}

.navbar img{
    height: 30px;
    width: 100px;
    margin-left: -2px;
    margin-top: 10px;
}

.list{
    margin-right: 5%;
    display: flex;
}

.list ul,li{
    display: flex;
}   

li{
    margin-right: 20px;
}

li a{
    color: black;
    text-decoration: none;
}
li a:hover{
    color: white;
    transition: 0.3s;
    cursor: pointer;
}

.toggle {
    display: none;
    font-size: 28px;
    cursor: pointer;
    margin-right: 13%;
}

.side-navbar{
    background: linear-gradient(-45deg, rgb(14, 20, 130),rgb(103, 13, 119));
    height: 100%;
    width: 50%;
    position: fixed;
    color: aliceblue;
    padding: 15px;
    top: 0;
    left: -60%;
    transition: left 0.3s ease;
    z-index: 10;
}

.side-navbar-link{
    margin-bottom: 30px;
}

.side-navbar a{
    text-decoration: none;
    color: black;
    font-size: 20px;
}

.side-navbar a:hover{
    color: aliceblue;
}

.close-btn{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    cursor: pointer;
    margin-left: 85%;
    margin-bottom: 30px;
}

img{
    height: 100px;
    width: 500px;
    margin-left: 60px;
    margin-top: 50px;
    margin-bottom: 5px;
}

.glass-box {
  width: 550px;
  padding: 20px;

  /* Glass effect */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  /* Shadow */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

  color: rgb(255, 255, 255);
  text-align: center;
}

.glass-box input {
  width: 50%;
  padding: 12px;
  margin: 10px 0;

  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  border-radius: 8px;

  color: white;
  font-size: 14px;
}

.glass-box input::placeholder {
  color: white;
}

.glass-box button {
  width: 25%;
  padding: 12px;
  margin-top: 15px;

  background: rgba(175, 171, 171, 0.3);
  border: none;
  border-radius: 8px;

  color: white;
  font-size: 15px;
  cursor: pointer;

  transition: background 0.3s;
}

.glass-box button:hover {
  background: rgba(255, 255, 255, 0.45);
}



@media (max-width: 600px) {
  
  .glass-box {
    width: 90%;
    padding: 20px;
  }

  .glass-box input {
    width: 50%;
  }
  
  img{
    width: 300px;
    height: 60px;
    margin-left: 20px;
  }
  .glass-box button {
    width: 30%;
  }
    
  .list{
    display: none;
  }
  .toggle {
    display: block;
  }
}
```
map.js
```
// SIDE NAVBAR
const sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}

// ROOM DATA
const rooms = {
  "0231": { name: "Conference Hall", floor: 0 },
  "0331": { name: "Principal Room", floor: 0 },
  "0332": { name: "Office", floor: 0 },

  "0411": { name: "Lab", floor: 0 },
  "0412": { name: "Lab", floor: 0 },

  "0451": { name: "Mechatronics Lab", floor: 0 },
  "0452": { name: "Students Study Room", floor: 0 },
  "0453": { name: "CAD Lab", floor: 0 },
  "0454": { name: "CAD Lab", floor: 0 },

  "0481": { name: "Manufacturing Lab", floor: 0 },
  "0482": { name: "Survey Lab", floor: 0 },

  "0511": { name: "Spark", floor: 0 },
  "0512": { name: "Startup Office", floor: 0 },

  "0541": { name: "Staff Room", floor: 0 },
  "0542": { name: "Staff Room", floor: 0 },

  "0561": { name: "Room", floor: 0 },
  "0562": { name: "Room", floor: 0 },

  "0581": { name: "CNC Lab", floor: 0 },

  "0611": { name: "Electrical Mechanics Lab", floor: 0 },

  "0651": { name: "DOM Lab", floor: 0 },
  "0652": { name: "FM Lab", floor: 0 },

  "0671": { name: "Thermal Lab", floor: 0 },

  "0731": { name: "Soil Lab", floor: 0 },
  "0732": { name: "Concrete Lab", floor: 0 },

  "0771": { name: "Room", floor: 0 },
  "0772": { name: "Room", floor: 0 },

  "0851": { name: "Strength of Materials Lab", floor: 0 },
  "0852": { name: "MO Lab", floor: 0 },

  "0871": { name: "Agri Lab 1", floor: 0 },
  "0872": { name: "Agri Lab 2", floor: 0 },

  "0931": { name: "Room", floor: 0 },
  "0971": { name: "Room", floor: 0 }
};

// FORMAT ROOM NUMBER
function formatRoom(room) {
  return room.padStart(4, "0");
}

// NAVIGATION LOGIC (IF STATEMENTS)
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

  if (rooms[current].floor === rooms[dest].floor) {
    direction = "➡️ Same floor. Walk straight.";
  } else if (rooms[current].floor < rooms[dest].floor) {
    direction = "⬆️ Go upstairs.";
  } else {
    direction = "⬇️ Go downstairs.";
  }

  output.innerHTML = `
    <b>From:</b> ${current} (${rooms[current].name})<br>
    <b>To:</b> ${dest} (${rooms[dest].name})<br><br>
    <b>Direction:</b> ${direction}
  `;
}
```
