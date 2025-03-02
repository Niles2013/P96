// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa4Kkl3TciyRXhVqdWngFQY1XGq97GTL8",
  authDomain: "lets-chat-8cae4.firebaseapp.com",
  databaseURL: "https://lets-chat-8cae4-default-rtdb.firebaseio.com",
  projectId: "lets-chat-8cae4",
  storageBucket: "lets-chat-8cae4.appspot.com",
  messagingSenderId: "1063696898682",
  appId: "1:1063696898682:web:440ba547fead981eb339c3",
  measurementId: "G-NGXPCFVVG8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

      localStorage.setItem("room_name", room_name);

      window.location = "lets-chat_page.html";
}
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets-chat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }
      
