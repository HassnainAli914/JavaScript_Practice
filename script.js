// // -------------------- Arrays --------------------

// // 1. Declare an empty array using JS literal notation to store student names in future

// let studentNamesLit = [];
// console.log("Empty array using JS literal notation:", studentNamesLit);
// // -------------------- end --------------------

// // 2. Declare an empty array using JS object notation to store student names in future.

// let studentNamesObj = new Array();
// console.log("Empty array using object notation:", studentNamesObj);
// // -------------------- end --------------------

// // 3. Declare and initialize a strings array.

// let stringArray = ["apple", "banana", "cherry"];
// console.log("Strings array:", stringArray);
// // -------------------- end --------------------

// // 4. Declare and initialize a numbers array.

// let numberArray = [1, 2, 3, 4, 5];
// console.log("Numbers array:", numberArray);
// // -------------------- end --------------------

// // 5. Declare and initialize a boolean array.

// let booleanArray = [true, false, true, false];
// console.log("Boolean array:", booleanArray);
// // -------------------- end --------------------

// // 6. Declare and initialize a mixed array.

// let mixedArray = ["string", 42, true, null];
// console.log("Mixed array:", mixedArray);
// // -------------------- end --------------------

// // 7. Declare and Initialize an array and store available mobile networks in Pakistan.

// let mobileNetworks = ["Jazz", "Telenor", "Zong", "Ufone"];
// console.log("Mobile networks in Pakistan:", mobileNetworks);
// // -------------------- end --------------------


// // 8. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// let pakQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for (let index in pakQualifications) {
//     console.log(`${++index}) ${pakQualifications[index]}`);
// }
// // -------------------- end --------------------

// // 9. Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & length of array in your browser. (Use array’s length method)

// let topMovies2015 = [];
// topMovies2015.push("Avengers: Age of Ultron");
// topMovies2015.push("Specture");
// topMovies2015.push("Jurassic World");
// topMovies2015.push("Inside Out");
// for (let index in topMovies2015) {
//     console.log(`${++index}) ${topMovies2015[index]}`);
// }
// console.log("Length of array:", topMovies2015.length);
// // -------------------- end --------------------

// // 10. Declare and Initialize an array with your favorite cars. Show
// // a. First index of the array
// // b. Car at first index of the array
// // c. Last index of the array
// // d. Car at last index of the array

// let favoriteCars = ["BMW", "Audi", "Mercedes", "Tesla"];
// console.log("First index of the array:", 0);
// console.log("Car at first index of the array:", favoriteCars[0]);
// console.log("Last index of the array:", favoriteCars.length - 1);
// console.log("Car at last index of the array:", favoriteCars[favoriteCars.length - 1]);
// // -------------------- end --------------------

// // 11. Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// let students = ["Ali", "Ahmed", "Shahmeer"];
// let scores = [450, 410, 380];
// for (let index in students) {
//     let percentage = (scores[index] / 500) * 100;
//     console.log(`Score of ${students[index]} is ${scores[index]}. Percentage: ${percentage}%`);
// }
// // -------------------- End --------------------

// // 12.  Initialize an array with color names. Display the array elements in your browser.
// let colorNames = ["red", "green", "blue"];
// console.log(colorNames)

// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// let addColorStart = prompt("Add new color in Starting of colorNames.");
// colorNames.unshift(addColorStart).toString()
// console.log(colorNames);


// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// let addColorEnd = prompt("Add new color in Starting of colorNames.");
// colorNames.push(addColorEnd).toString()
// console.log(colorNames);

// // c.  Add two more color to the beginning of the array. Display the updated array in your browser.

// let addColorsStart_1 = prompt("Add 1st color in Starting of colorNames.");
// let addColorsStart_2 = prompt("Add 2nd color in Starting of colorNames.");
// colorNames.unshift(addColorsStart_1, addColorsStart_2).toString();
// console.log(colorNames);

// // d. Delete the first color in the array. Display the updated array in your browser.

// colorNames.shift();
// console.log(colorNames);

// // e.  Delete the last color in the array. Display the updated array in your browser.

// colorNames.pop();
// console.log(colorNames)

// // f.  Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser.

// let enterIndex = prompt("Enter Index Number where you want to add new colorNames.");
// let enterColor = prompt("Enter Index Number where you want to add new color to colorNames.");
// colorNames.splice(enterIndex, 0, enterColor)
// console.log(colorNames);

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// let delIndex = prompt("Enter Index Number where from you want to delete colorNames.");
// let delNumbers = prompt("Enter Number of colors you want to delete.");
// colorNames.splice(delIndex, delNumbers)
// console.log(colorNames);
// // -------------------- End --------------------

// // 13. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// scores.sort((a, b) => a - b)
// console.log(scores);
// // -------------------- End --------------------

// // 14. Write a program to sort the below mentioned array:

// let fruits = ["strawberry", "apple", "orange", "banana"];
// console.log("Fruits List: ", fruits);
// fruits.sort()
// console.log("Ordered fruits list: ", fruits);
// // -------------------- End --------------------

// // 15. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(1, 3)
// console.log("Cities List: ", cities)
// console.log("Selected cities list: ", selectedCities);
// // -------------------- End --------------------

// // 16. Write a program to create a single string from the below mentioned array: (Use array’s join method)

// let arr = ["This", "is", "my", "cat."];
// let joinedArr = arr.join(" ");
// console.log(joinedArr);
// // -------------------- End --------------------

// // 17.  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// let fifoDevices = [];
// fifoDevices.push("Keyboard")
// fifoDevices.push("Mouse")
// fifoDevices.push("Printer")
// fifoDevices.push("Moniter")
// console.log(`Devices: \n ${fifoDevices}`);

// for (let i = fifoDevices.length; i > 0; i--) {
//     let curDevice = fifoDevices.shift();
//     console.log("Out: ")
//     console.log(curDevice);
// }
// // -------------------- End --------------------

// // 18. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

// let lifoDevices = [];
// lifoDevices.push("Keyboard")
// lifoDevices.push("Mouse")
// lifoDevices.push("Printer")
// lifoDevices.push("Moniter")
// console.log(`Devices: \n ${lifoDevices}`);

// for (let i = lifoDevices.length; i > 0; i--) {
//     let curDevice = lifoDevices.pop();
//     console.log("Out: ")
//     console.log(curDevice);
// }
// // -------------------- End --------------------

// // 19. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// // let dropdown = document.getElementById("dropdown");
// let add = document.getElementById("drop");
// let select = document.createElement("select");
// select.setAttribute("id", "dropdown");
// select.setAttribute("name", "fruits");
// dropdown.innerHTML += "<option>" + manufacturers[i] + "</option>"
// select.append()

// for (let i = 0; i < manufacturers.length; i++) {
//     // dropdown.innerHTML += "<option>" + manufacturers[i] + "</option>"
//     dropdown.innerHTML += "<option>" + manufacturers[i] + "</option>"
// }
// // -------------------- End --------------------

// // 20. Declare and initialize an empty multidimensional array. (Array of arrays)

// let multiArry = [
//     [],
// ];
// console.log(multiArry);
// // -------------------- End --------------------

// // 21. Declare and initialize a multidimensional array representing the following matrix: 0123 1012 2101

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];
// console.log(matrix);
// // -------------------- End --------------------

// // -------------------- Arrays End --------------------


// // --------------------  Switch Statements --------------------

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let selectDay = prompt("Enter Day Here!")
// switch (selectDay) {
//     case "Monday":
//         alert("Its 1st Working Day.")
//         break;
//     case "Tuesday":
//         alert("Its 2nd Working Day.")
//         break;
//     case "Wednesday":
//         alert("Its 3rd Working Day.")
//         break;
//     case "Thursday":
//         alert("Its 4th Working Day.")
//         break;
//     case "Friday":
//         alert("Its 5th Working Day.")
//         break;
//     case "Saturday":
//         alert("Its Weekend")
//         break;
//     case "Sunday":
//         alert("Its Cill Day.")
//         break;
//     default:
//         alert("Wrong Entry")
// }

// // -------------------- Switch Statements End --------------------

// // -------------------- While Loop --------------------

// let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let i = 0;
// while (i <= dayOfWeek.length-1){
//     console.log(`Its: ${dayOfWeek[i]}`)
//     i++;
// }

// // -------------------- Do-While Loop --------------------

// let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let i = 0;
// do {
//     console.log(`Its: ${dayOfWeek[i]}`)
//     i++;
// } while (i <= dayOfWeek.length - 1);

// // -------------------- Do-While Loop End --------------------

// // --------------------  OOP in JavaScript --------------------

// let students = [
//     {
//         id: 1122,
//         name: "Muzaffar Ali",
//         campus: "Zaitoon Ashraf",
//         batch: 17
//     },
//     {
//         id: 2211,
//         name: "Hassnain Ali",
//         campus: "Zaitoon Ashraf",
//         batch: 17
//     }
// ];
// students[0].age = 17;
// students[1].age = 19;

// for (let i = 0; i <= students.length - 1; i++) {
//     students[i].number = 1122334;
// }
// for (let i in students) {
//     students[i].number = 1122334;
// }
// let i = 0;
// let num = 10;
// while (i <= 1) {
//     students[i].number = num;
//     i++;
//     num += 10
// }

// class StdData {
//     constructor(age, name) {
//         this.age = age,
//         this.name = name
//     }
//     speak() {
//         return `${this.name} Speaking bhago medi sawani`;
//     }
// }
// student_1 = new StdData(15, "Nadir");
// student_2 = new StdData(14, "Nadia")
// console.log(student_1.speak())
// console.log(student_2.speak())

// class calcu {
//     constructor(num1, oper, num2) {
//         this.num1 = num1,
//             this.oper = oper,
//             this.num2 = num2
//     }
//     add() {
//         return `${this.num1} ${this.oper} ${this.num2}`;
//     }
// }
// cal = new calcu(5, "+", 5);
// console.log(cal.add())

// // --------------------  OOP in JavaScript End --------------------

// // --------------------  Prototype in JavaScript --------------------

// let objOne = {
//     name: "Hassnain Ali",
//     roll: "1122",
// };

// let objTwo = {
//     name: "Hassnain Ali",
//     roll: "1122",
// };

// Object.__proto__ = {
//     start: () => {
//         alert("Prototype Inherit Success")
//     }
// };
// objOne.__proto__ = objTwo;
// objOne.start()

// // --------------------  Prototype in JavaScript End --------------------

// // --------------------  Contructor Function with Prototype --------------------

// function User(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }

// User.prototype.userData = function () {
//     console.log(`User Name = ${this.name}, age = ${this.age}, email = ${this.email}`)
// }

// let users = new User("Hassnain", 17, "hassnainali914@gmail.com")

// console.table(users)

// // --------------------  Contructor Function with Prototype End --------------------

// // --------------------  Objects with Different Methods --------------------

// Objects Creating with different methods

// let newObj = {
//     name: "Hassnain",
//     age: 17
// };
// console.log(newObj.name, Object.values(newObj))

// let newObj = new Object();
// newObj.name = "Hassnain";
// newObj.age = 17;
// console.log(newObj.name, Object.values(newObj))

// let newObj = Object.create(null);
// newObj.name = "Hassnain";
// newObj.age = 17;
// console.log(newObj.name, Object.values(newObj))

// Object.Methods

// let newArryObj = [
//     ["name", "Hassnain"],
//     ["Age", 17]
// ];
// console.log(newArryObj, Object.fromEntries(newArryObj))

// let newObj = {
//     name: "Hassnain",
//     age: 17
// };
// let result = Object.freeze(newObj); //to stop usage of updation/deleting
// newObj.roll = 1122; //Never Added
// newObj.name = "Muzaffar"; //Never Changed
// console.log(result, Object.isFrozen(newObj));

// let newObj = {
//     name: "Hassnain",
//     age: 17
// };
// let result = Object.seal(newObj); //to stop usage of updation/deleting
// newObj.roll = 1122; //Never Added
// newObj.name = "Muzaffar"; //Values still can be change
// console.log(result, Object.isSealed(newObj));

// let newObj = {
//     name: "Hassnain",
//     age: 17
// };
// let newObj2 = {
//     name2: "Muzaffar",
//     age2: 21
// };
// let result = Object.assign(newObj, newObj2); //Merging Objs
// console.log("Merged Data =>", result);
// console.log(result);

// let newObj = {
//     name: "Hassnain",
//     age: 17
// };
// function run(email) {
//     console.log(`Person name is ${this.name}, age is ${this.age} and email is ${email}`);
// };
// run.call(newObj, "hassnain@gmail.com") //Access Obj Data in a function

// let newObj = {
//     name: "Hassnain",
//     age: 17
// };
// function run(email, roll) {
//     console.log(`Person name is ${this.name}, age is ${this.age}, roll no. is ${roll} and email is ${email}`);
// };
// run.apply(newObj, ["hassnain@gmail.com", "1122"]) //Access Obj Multiple Data in a function

// let newObj = {
//     name: "Hassnain",
//     age: 17
// };
// for (let keys in newObj){ 
//     console.log(keys, newObj[keys]);
// }

// // --------------------  Objects with Different Methods End --------------------

// // --------------------  LocalStorage in JavaScript --------------------

// let log_in = document.getElementById("login");
// let signUp = document.getElementById("signup");


// function sign_Up() {
//     let s_email = document.getElementById("email").value;
//     let s_pass = document.getElementById("pass").value;

//     let newObj2 = {
//         email: s_email,
//         pass: s_pass
//     }

//     console.log(newObj2);
//     localStorage.setItem("Users", JSON.stringify(newObj2))
//     console.log("User Added Successfully");
// };
// signUp.addEventListener("click", sign_Up)

// function login() {
//     let email = document.getElementById("email").value;
//     let pass = document.getElementById("pass").value;
//     let addedUsers = JSON.parse(localStorage.getItem("Users"));

//     if (email == addedUsers.email && pass == addedUsers.pass) {
//         console.log("User Loggedin Successfully");
//     } else if(email == "" && pass == ""){
//         console.log("Please Fill Email and Pass First");
//     } else {
//         console.log("Please Signup First");
//     }
// };
// log_in.addEventListener("click", login)

// // --------------------  LocalStorage in JavaScript End --------------------

// // --------------------  Firebase Authentication --------------------

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
// import {
//     getAuth, createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     GoogleAuthProvider,
//     signInWithPopup,
//     signInWithRedirect, FacebookAuthProvider
// } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// // Import configuration from other folder or Add firebaseConfig Below as written
// import {firebaseConfig} from "/firebaseConfig.js"

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();

// // Login Form 
// const signUpButton = document.getElementById('signUpButton');
// const signInButton = document.getElementById('signInButton');
// const signInForm = document.getElementById('signIn');
// const signUpForm = document.getElementById('signup');
// const email = document.getElementById('sEmail');
// const password = document.getElementById('sPassword');
// const lemail = document.getElementById('lemail');
// const lpassword = document.getElementById('lpassword');
// const signUp = document.getElementById("submitSignUp");
// const signIn = document.getElementById("submitSignIn");
// const signInWithGoogle = document.getElementById("signInWithGoogle");
// const signInWithFacebook = document.getElementById("signInWithFacebook");

// signUpButton.addEventListener('click', function () {
//     signInForm.style.display = "none";
//     signUpForm.style.display = "block";
// })
// signInButton.addEventListener('click', function () {
//     signInForm.style.display = "block";
//     signUpForm.style.display = "none";
// })

// // SignUp Functionality
// function signUpFunc() {

//     createUserWithEmailAndPassword(auth, email.value, password.value)
//         .then((userCredential) => {
//             // Signed up 
//             const user = userCredential.user;
//             console.log(user);

//         })
//         .catch((error) => {
//             console.log(error.message);
//         });

// }
// signUp.addEventListener("click", signUpFunc)

// // SignIp Functionality
// function signInFunc() {

//     signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user);
//             // location.href = "https://google.com"
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// };
// signIn.addEventListener("click", signInFunc)

// // // on Auth State Changed = Get Currently signed-in use data
// onAuthStateChanged(auth, (user) => {

//     if (user) {
//         const uid = user.uid;
//         console.log("Last User is signed in", uid)

//     } else {
//         console.log("User is signed out")
//     }
// });

// // currentUser Checks
// const user = auth.currentUser;
// if (user) {
//     console.log("User is signed in", user)
// } else {
//     console.log("No user is signed in")
// };

// // Sign-in with Google

// async function signWithGoogle() {
//     const provider = new GoogleAuthProvider();

//     signInWithPopup(auth, provider)
//         .then((result) => {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             // The signed-in user info.
//             const user = result.user;
//             const getAdd = getAdditionalUserInfo(result);
//             console.log("Signed use is = ", user, getAdd, token);

//         }).catch((error) => {
//             // Handle Errors here.
//             console.log(error.message)
//             const credential = GoogleAuthProvider.credentialFromError(error);
//         });
//     // signInWithRedirect(auth, provider);
// }
// signInWithGoogle.addEventListener('click', signWithGoogle)

// // Sign-in With FaceBook
// async function signWithFacebook() {
//     const provider = new FacebookAuthProvider();

//     signInWithPopup(auth, provider)
//         .then((result) => {
//             // The signed-in user info.
//             const user = result.user;
//             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//             const credential = FacebookAuthProvider.credentialFromResult(result);
//             const accessToken = credential.accessToken;
//             console.log("Signed use is = ", user, credential, accessToken);
//             // IdP data available using getAdditionalUserInfo(result)
//             // ...
//         })
//         .catch((error) => {
//             // Handle Errors here.
//             console.log(error.message)
//             const credential = FacebookAuthProvider.credentialFromError(error);
//         });
// }
// signInWithFacebook.addEventListener('click', signWithFacebook)

// // --------------------  Firebase Authentication End --------------------

// // --------------------  Firebase Firestore Database --------------------

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
// import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// // Import configuration from other folder or Add firebaseConfig Below as written
// import {firebaseConfig} from "/firebaseConfig.js"

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// // Add data
// let add = document.getElementById("add");
// async function added() {
//     let firstName = document.getElementById("firstName");
//     let lastName = document.getElementById("lastName");
//     let readList = document.getElementById("readList");
//     readList.innerHTML = "";

//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//             first: firstName.value,
//             last: lastName.value,
//             createdAt: new Date().toLocaleString()
//         });
//         console.log("Document written with ID: ", docRef.id);
//         console.log("✅ User Added: ", docRef);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
//     ReadData()
// };
// add.addEventListener('click', added)

// // Read Data
// let readData = document.getElementById("read");
// let readList = document.getElementById("readList");

// async function ReadData() {
//     readList.innerHTML = "";

//     try {
//         const querySnapshot = await getDocs(collection(db, "users"));
//         querySnapshot.forEach((doc) => {

//             const data = JSON.stringify(doc.data());
//             const dataLoaded = JSON.parse(data);
//             readList.innerHTML += `
//                     <li id="${doc.id}">
//                     <strong>Firstname:</strong> ${dataLoaded.first}<br>
//                     <strong>Lastname:</strong> ${dataLoaded.last}<br>
//                     <button class="delete-btn" data-id="${doc.id}">Delete</button>
//                     </li><br>
//             `;
//             console.log(doc.id, dataLoaded);
//         });

//     } catch (error) {
//         console.log(error.message);
//     }
// }
// readData.addEventListener('click', ReadData)

// // Delete Data
// let deleteData = readList;
// async function DeleteData(e) {
//     readList.innerHTML = "";

//         if (e.target.classList.contains("delete-btn")) {
//             const id = e.target.getAttribute("data-id");
//             try {
//                 await deleteDoc(doc(db, "users", id));
//                 console.log("✅ User Deleted:", id);
//                 ReadData(); // refresh list
//             } catch (error) {
//                 console.log("❌ Error deleting:", error.message);
//             }
//         }
// };
// deleteData.addEventListener('click', DeleteData)

// // --------------------  Firebase Firestore Database End --------------------

// // --------------------  Firebase Storage --------------------

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
// import { getStorage, ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

// // Import configuration from other folder or Add firebaseConfig Below as written
// import {firebaseConfig} from "/firebaseConfig.js"

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app);
// const listRef = ref(storage, 'images/');

// // Dom Node
// let uploadBtn = document.getElementById("uploadBtn");
// let fileInput = document.getElementById("uploadImg");
// let link = document.getElementById("link");

// // Upload Files
// async function Upload() {
//     let file = fileInput.files[0]

//     if (!file) {
//         console.log("No file selected.");
//         return;
//     }

//     try {
//         const fileRef = ref(storage, `images/${file.name}`);
//         console.log(fileRef);
//         const snapshot = await uploadBytes(fileRef, file);
//         const url = await getDownloadURL(snapshot.ref);
//         link.innerHTML = `Uploaded file Link: <a href="${url}" target="_blank">Click to Show Image</a>.`
//         console.log("Uploaded! File URL:", url);

//     } catch (error) {
//         console.log(error.message);
//     }
//     List()
// };
// uploadBtn.addEventListener('click', Upload)

// // List All Uploaded Files
// let listBtn = document.getElementById("listBtn");
// let list = document.getElementById("list");

// async function List() {
//     list.innerHTML = "";

//     try {
//         const listA = await listAll(listRef);
//         console.log("All results:", listA);

//         // Show subfolders (prefixes)
//         listA.prefixes.forEach((folderRef) => {
//             const li = document.createElement("li");
//             li.textContent = `📁 Folder: ${folderRef.name}`;
//             list.appendChild(li);
//         });

//         // Show file items
//         for (const itemRef of listA.items) {
//             const url = await getDownloadURL(itemRef);
//             const li = document.createElement("li");
//             li.innerHTML += `📄 File: <a href="${url}" target="_blank">${itemRef.name}</a> <br> <button class="delete-btn" data-id="${itemRef.name}">Delete</button>`;
//             list.appendChild(li);
//         };
//     } catch (error) {
//         console.log(error.message);
//     }
// };
// listBtn.addEventListener('click', List)

// // Delete Listed Files
// let deleteData = document.getElementById("list");

// async function DeleteFile(e) {
//     list.innerHTML = "";

//     if (e.target.classList.contains("delete-btn")) {
//         const id = e.target.getAttribute("data-id");

//         try {
//             const desertRef = ref(storage, `images/${id}`);
//             await deleteObject(desertRef);
//             console.log("✅ File Deleted:", id);
//             List() //Reload List Function

//         } catch (error) {
//             console.log("❌ Error deleting:", error.message);
//         }
//     }
// };
// deleteData.addEventListener('click', DeleteFile)


// // --------------------  Firebase Storage --------------------