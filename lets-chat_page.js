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
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
   name:user_name,
   message:msg,
   like:0
  });

  document.getElementById("msg").value = "";
}