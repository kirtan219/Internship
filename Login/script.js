const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
e.preventDefault();

const name = form.querySelector("input[name=name]").value;
const email = form.querySelector("input[name=email]").value;
const phone = form.querySelector("input[name=phone]").value;
const car_type = form.querySelector("input[name=car_type]").value;
const start_date = form.querySelector("input[name=start_date]").value;
const end_date = form.querySelector("input[name=end_date]").value;

// Send the form data to the server
fetch("/api/car_rental", {
method: "POST",
body: JSON.stringify({
name,
email,
phone,
car_type,
start_date,
end_date
})
})
.then(response => response.json())
.then(data => {
// Display the success message
alert("Your car rental has been successfully submitted!");
})
.catch(error => {
// Display the error message
alert(error.message);
});
});
