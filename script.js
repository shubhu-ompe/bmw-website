function testFav(){

localStorage.setItem("bmwFavs", JSON.stringify([
{
name:"BMW M5 CS",
image:"images/BMW-M5-CS-1.jpg",
page:"m5cs.html"
}
]));

alert("Test Favourite Added");

}
function addFav(name,image,page){

let favs = JSON.parse(localStorage.getItem("bmwFavs")) || [];

let exists = favs.find(car => car.name === name);

if(!exists){

favs.push({
name:name,
image:image,
page:page
});

localStorage.setItem("bmwFavs",JSON.stringify(favs));

alert(name + " added to favourites");

}

}

function toggleMode(){

document.body.classList.toggle("light");

}
function enquireCar(car){

alert(
"Thank you for your interest in " +
car +
".\n\nPlease contact:\nshubhamraj2468sr@gmail.com"
);

}
function searchCar(){

let car =
document.getElementById("searchBox")
.value
.toLowerCase();

if(car.includes("m5"))
window.location.href="m5cs.html";

else if(car.includes("alpina"))
window.location.href="alpina.html";

else if(car.includes("i5"))
window.location.href="i5m60.html";

else if(car.includes("i7"))
window.location.href="i7.html";

else if(car.includes("ix"))
window.location.href="ix.html";

else if(car.includes("m2"))
window.location.href="m2cs.html";

else if(car.includes("m3"))
window.location.href="m3cs.html";

else if(car.includes("m4"))
window.location.href="m4cs.html";

else if(car.includes("m8"))
window.location.href="m8cs.html";

else if(car.includes("x5"))
window.location.href="x5m.html";

else if(car.includes("x6"))
window.location.href="x6.html";

else if(car.includes("x7"))
window.location.href="x7.html";

else if(car.includes("xm"))
window.location.href="xm.html";

else if(car.includes("z4"))
window.location.href="z4roadster.html";

else

alert("BMW Model Not Found 😢");

}
function askBMWAI(){

let input =
document.getElementById("userInput")
.value
.toLowerCase();

let reply = "";

if(input.includes("m5")){

reply =
"BMW M5 CS ek high-performance luxury sedan hai. Price lagbhag ₹2.2 Crore hai aur isme Twin Turbo V8 engine milta hai.";

}

else if(input.includes("m8")){

reply =
"BMW M8 Competition ek luxury sports coupe hai. Approx price ₹2.44 Crore aur top speed 305 km/h hai.";

}

else if(input.includes("xm")){

reply =
"BMW XM BMW ka flagship performance SUV model hai. Approx price ₹2.60 Crore.";

}

else if(input.includes("x7")){

reply =
"BMW X7 ek luxury 7-seater SUV hai. Approx price ₹1.35 Crore.";

}

else if(input.includes("m4")){

reply =
"BMW M4 Competition sports coupe hai. Approx price ₹1.55 Crore.";

}

else if(input.includes("m3")){

reply =
"BMW M3 Competition ek performance sedan hai. Approx price ₹1.47 Crore.";

}

else if(input.includes("x5")){

reply =
"BMW X5 M luxury SUV hai. Approx price ₹1.25 Crore.";

}

else if(input.includes("x6")){

reply =
"BMW X6 M coupe-style luxury SUV hai. Approx price ₹1.39 Crore.";

}

else if(input.includes("i7")){

reply =
"BMW i7 premium electric luxury sedan hai. Approx price ₹2.05 Crore.";

}

else if(input.includes("i5")){

reply =
"BMW i5 M60 ek performance electric sedan hai. Approx price ₹1.20 Crore.";

}

else if(input.includes("ix")){

reply =
"BMW iX premium electric SUV hai. Approx price ₹1.40 Crore.";

}

else if(input.includes("z4")){

reply =
"BMW Z4 Roadster ek convertible sports car hai. Approx price ₹92 Lakh.";

}

else if(input.includes("alpina")){

reply =
"BMW ALPINA B8 Gran Coupe ek ultra luxury performance sedan hai. Approx price ₹2.10 Crore.";

}

else if(input.includes("m5 sedan")){

reply =
"BMW M5 Sedan luxury performance sedan hai. Approx price ₹1.99 Crore.";

}

else if(input.includes("3 series")){

reply =
"BMW 3 Series premium sports sedan hai. Approx price ₹60 Lakh.";

}

else{

reply = "Bhai BMW model ka naam likho ya price, mileage, engine, top speed pucho 😎";

}

document.getElementById("chatBox").innerHTML +=
"<p><b>You:</b> " +
input +
"</p><p><b>BMW AI:</b> " +
reply +
"</p><hr>";
document.getElementById("userInput").value = "";
}

function compareCars(){

let car1 = document.getElementById("car1").value;
let car2 = document.getElementById("car2").value;

let result = "";

if(car1 === "BMW M5 CS"){
result += `
<h3>${car1}</h3>
<p>Price: ₹2.2 Crore</p>
<p>Power: 635 HP</p>
<p>Top Speed: 305 km/h</p>
<hr>
`;
}

if(car2 === "BMW M8 Competition"){
result += `
<h3>${car2}</h3>
<p>Price: ₹2.44 Crore</p>
<p>Power: 625 HP</p>
<p>Top Speed: 305 km/h</p>
<hr>
`;
}

document.getElementById("compareResult").innerHTML = result;

}
function compareCars(){

let car1 = document.getElementById("car1").value;
let car2 = document.getElementById("car2").value;

let specs = {

"BMW M5 CS":{
price:"₹2.2 Crore",
power:"635 HP",
speed:"305 km/h"
},

"BMW M8 Competition":{
price:"₹2.44 Crore",
power:"625 HP",
speed:"305 km/h"
},

"BMW XM":{
price:"₹2.60 Crore",
power:"653 HP",
speed:"270 km/h"
},

"BMW X7":{
price:"₹1.35 Crore",
power:"381 HP",
speed:"245 km/h"
},

"BMW M4 Competition":{
price:"₹1.55 Crore",
power:"510 HP",
speed:"290 km/h"
},

"BMW M3 Competition":{
price:"₹1.47 Crore",
power:"510 HP",
speed:"290 km/h"
},

"BMW X5 M":{
price:"₹1.25 Crore",
power:"625 HP",
speed:"290 km/h"
},

"BMW X6 M":{
price:"₹1.39 Crore",
power:"625 HP",
speed:"290 km/h"
},

"BMW i7":{
price:"₹2.05 Crore",
power:"544 HP",
speed:"240 km/h"
},

"BMW i5 M60":{
price:"₹1.20 Crore",
power:"601 HP",
speed:"230 km/h"
},

"BMW iX":{
price:"₹1.40 Crore",
power:"523 HP",
speed:"200 km/h"
},

"BMW Z4 Roadster":{
price:"₹92 Lakh",
power:"340 HP",
speed:"250 km/h"
},

"BMW ALPINA B8 Gran Coupe":{
price:"₹2.10 Crore",
power:"612 HP",
speed:"324 km/h"
},

"BMW M5 Sedan":{
price:"₹1.99 Crore",
power:"717 HP",
speed:"305 km/h"
},

"BMW 3 Series":{
price:"₹60 Lakh",
power:"258 HP",
speed:"250 km/h"
}

};

document.getElementById("compareResult").innerHTML = `

<h3>${car1} VS ${car2}</h3>

<table style="width:100%;margin-top:15px;border-collapse:collapse;">

<tr>
<th>Feature</th>
<th>${car1}</th>
<th>${car2}</th>
</tr>

<tr>
<td>Price</td>
<td>${specs[car1].price}</td>
<td>${specs[car2].price}</td>
</tr>

<tr>
<td>Power</td>
<td>${specs[car1].power}</td>
<td>${specs[car2].power}</td>
</tr>

<tr>
<td>Top Speed</td>
<td>${specs[car1].speed}</td>
<td>${specs[car2].speed}</td>
</tr>

</table>
`;

}
// ENTER se AI message send

let userInput = document.getElementById("userInput");

if(userInput){

userInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){

askBMWAI();

}

});

}
const carsList = [
["BMW M2 CS","m2cs.html"],
["BMW M3 CS","m3cs.html"],
["BMW M4 CS","m4cs.html"],
["BMW M5 CS","m5cs.html"],
["BMW M8 CS","m8cs.html"],
["BMW X5 M","x5m.html"],
["BMW X6","x6.html"],
["BMW X7","x7.html"],
["BMW XM","xm.html"],
["BMW i7","i7.html"],
["BMW i5 M60","i5m60.html"],
["BMW iX","ix.html"],
["BMW ALPINA B8","alpina.html"],
["BMW Z4 Roadster","z4roadster.html"]
];

let searchBox = document.getElementById("searchBox");
let suggestionBox = document.getElementById("suggestions");

if(searchBox && suggestionBox){

    searchBox.addEventListener("input", function(){

        let value = this.value.toLowerCase();

        suggestionBox.innerHTML = "";

        carsList.forEach(car=>{

            if(car[0].toLowerCase().includes(value) && value !== ""){

                suggestionBox.innerHTML += `
                <div class="suggestion-item">
                <a href="${car[1]}"
                style="color:white;text-decoration:none;display:block;padding:10px;">
                ${car[0]}
                </a>
                </div>`;
            }

        });

    });

}

window.addEventListener("pageshow", function() {
});
function saveRecentCar(name,image,page){

let recent =
JSON.parse(localStorage.getItem("recentCars")) || [];

recent = recent.filter(car => car.name !== name);

recent.unshift({
name:name,
image:image,
page:page
});

if(recent.length > 5){
recent.pop();
}

localStorage.setItem(
"recentCars",
JSON.stringify(recent)
);
}
function updateNavbarCounts(){

let favs =
JSON.parse(localStorage.getItem("bmwFavs")) || [];

let recent =
JSON.parse(localStorage.getItem("recentCars")) || [];

let favBtn =
document.getElementById("favCount");

let recentBtn =
document.getElementById("recentCount");

if(favBtn){
favBtn.innerHTML =
"❤️ Favourite (" + favs.length + ")";
}

if(recentBtn){
recentBtn.innerHTML =
"🕒 Recent (" + recent.length + ")";
}

}

updateNavbarCounts();
const dailyCars = [

{
name:"BMW M2 CS",
page:"m2cs.html",
price:"₹1.20 Crore"
},

{
name:"BMW M5 CS",
page:"m5cs.html",
price:"₹2.20 Crore"
},

{
name:"BMW M8 CS",
page:"m8cs.html",
price:"₹2.44 Crore"
},

{
name:"BMW X7",
page:"x7.html",
price:"₹1.35 Crore"
},

{
name:"BMW XM",
page:"xm.html",
price:"₹2.60 Crore"
}

];

let dayBox = document.getElementById("carOfDay");

if(dayBox){

let car =
dailyCars[
Math.floor(
Math.random() * dailyCars.length
)
];

dayBox.innerHTML = `
<h3>${car.name}</h3>
<p>${car.price}</p>

<a href="${car.page}">
<button style="
background:#1c69d4;
color:white;
border:none;
padding:12px 25px;
border-radius:10px;
cursor:pointer;
margin-top:10px;
">
View Details
</button>
</a>
`;

}
function registerUser(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

if(email === "" || password === ""){

alert("Please fill all fields");
return;

}

localStorage.setItem(
"bmwUser",
JSON.stringify({
email:email,
password:password
})
);

document.getElementById("loginStatus").innerHTML =
"✅ Account Created Successfully";

}

function loginUser(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let user =
JSON.parse(localStorage.getItem("bmwUser"));

if(
user &&
user.email === email &&
user.password === password
){

localStorage.setItem(
"isLoggedIn",
"true"
);

document.getElementById("loginStatus").innerHTML =
"✅ Login Successful";

setTimeout(function(){

window.location.href="index.html";

},1000);

}
else{

document.getElementById("loginStatus").innerHTML =
"❌ Invalid Email or Password";

}

}
function handleCredentialResponse(response) {

    const data = parseJwt(response.credential);

    localStorage.setItem("bmwUserName", data.name);
    localStorage.setItem("bmwUserEmail", data.email);
    localStorage.setItem("bmwUserPicture", data.picture);

    document.getElementById("loginStatus").innerHTML =
        "✅ Welcome " + data.name;

    window.location.href = "account.html";
}

function parseJwt(token) {

    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    return JSON.parse(
        decodeURIComponent(
            atob(base64)
                .split('')
                .map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        )
    );
}
window.addEventListener("load", function () {

    let loginBox = document.querySelector(".login-box");

    if(!loginBox) return;

    let user = localStorage.getItem("bmwUserName");
    let email = localStorage.getItem("bmwUserEmail");
    let picture = localStorage.getItem("bmwUserPicture");

    if(user){

        loginBox.innerHTML = `
            <img src="${picture}"
                 style="width:120px;height:120px;border-radius:50%;margin-bottom:20px;">

            <h2>Welcome ${user}</h2>

            <p>${email}</p>

            <button class="login-btn" onclick="logoutUser()">
                🚪 Logout
            </button>
        `;
    }

});

function logoutUser(){

    localStorage.removeItem("bmwUserName");
    localStorage.removeItem("bmwUserEmail");
    localStorage.removeItem("bmwUserPicture");

    location.reload();
}
const form = document.getElementById("testDriveForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("bookingMessage").innerHTML =
"✅ Your BMW Test Drive has been booked successfully!";

});

}
// ===== GEMINI BMW AI OVERRIDE =====

async function askBMWAI() {

let inputBox = document.getElementById("userInput");
let chatBox = document.getElementById("chatBox");

let userMessage = inputBox.value.trim();

if(!userMessage) return;

chatBox.innerHTML += `
<div class="user-message">
${userMessage}
</div>
`;

inputBox.value = "";

chatBox.innerHTML += `
<div id="bmwThinking" class="ai-message typing">
<div class="ai-badge">🤖 BMW Expert AI</div>
Analyzing BMW Data...
</div>
`;

const systemPrompt = `
You are BMW AI Assistant for SHUBHAM OMPEEE EXPORTS.

Rules:

- Answer ONLY BMW related questions.
- If question is not related to BMW, politely refuse.
- Reply in the same language as the user.
- Hinglish user = Hinglish reply.
- English user = English reply.
- Keep answers concise by default.
- If user asks for short answer, reply in 30-80 words.
- If user asks for detailed answer, provide full details.
- Match the length requested by the user.
- Give detailed answers.
- Never give unnecessarily long answers.
- Match the user's requested answer length.
- Explain BMW history, founders, engines, models, generations, technologies and performance.
- If unsure, say you are not certain.
`;
let finalQuestion = `
User Request:
${userMessage}

Important:
If the user asks for a word limit, strictly follow it.
`;
try {

const response = await fetch(
"https://bmw-ai-backend.onrender.com/ask",
{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        question: systemPrompt + "\n\n" + finalQuestion
    })
}
);
console.log(response.status);
console.log(response.statusText);

const data = await response.json();
console.log(data);


document.getElementById("bmwThinking")?.remove();

let reply =
data?.candidates?.[0]?.content?.parts?.[0]?.text ||
"Sorry, BMW AI could not generate a response.";

chatBox.innerHTML += `
<div class="ai-message">
<div class="ai-badge">
🤖 BMW Expert AI
</div>

${reply}
</div>
`;

}
catch(err){

console.error(err);

document.getElementById("bmwThinking")?.remove();

chatBox.innerHTML += `
<p><b>BMW AI:</b> Connection Error.</p>
<hr>
`;

}

chatBox.scrollTop = chatBox.scrollHeight;

}

if(searchBox){

searchBox.addEventListener(
"keypress",
function(e){

if(e.key==="Enter"){
searchCar();
}

});

}
const bmwCars = [
["BMW M5 CS","m5cs.html"],
["BMW M4 CS","m4cs.html"],
["BMW M3 CS","m3cs.html"],
["BMW M8 CS","m8cs.html"],
["BMW X7","x7.html"],
["BMW XM","xm.html"],
["BMW i7","i7.html"],
["BMW iX","ix.html"],
["BMW Z4 Roadster","z4roadster.html"],
["BMW M2 CS","m2cs.html"]
];

if(searchBox && suggestionBox){

searchBox.addEventListener("input", function(){

let value = this.value.toLowerCase().trim();

suggestionBox.innerHTML = "";

if(value === ""){
suggestionBox.style.display = "none";
return;
}

bmwCars.forEach(car => {

if(car[0].toLowerCase().includes(value)){

suggestionBox.innerHTML += `
<div class="suggestion-item">
<a href="${car[1]}"
style="color:white;text-decoration:none;display:block;padding:10px;">
${car[0]}
</a>
</div>
`;

}

});

suggestionBox.style.display =
suggestionBox.innerHTML ? "block" : "none";

});

}
function addFav(name, image, page) {

let favs =
JSON.parse(localStorage.getItem("bmwFavs")) || [];

let exists = favs.find(car => car.name === name);

if (exists) {
return;
}

favs.push({
name: name,
image: image,
page: page
});

localStorage.setItem(
"bmwFavs",
JSON.stringify(favs)
);

}