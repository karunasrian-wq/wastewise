// ================= YEAR =================
const API_KEY = "406e9303ee555ba9a4c4be12fdaa57e7";

async function getWeather() {

    const city = "Visakhapatnam";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${Visakhapatnam}&appid=${406e9303ee555ba9a4c4be12fdaa57e7}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
}

getWeather();

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ================= COUNTERS =================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.innerText);

    let current = 0;

    const speed = Math.max(10, Math.floor(target / 100));

    const updateCounter = () => {

        current += speed;

        if (current < target) {

            counter.innerText = current;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});



// ================= PICKUP FORM =================

const form = document.getElementById("pickupForm");

if (form) {

    const dateInput = document.getElementById("date");

    const today = new Date()
        .toISOString()
        .split("T")[0];

    dateInput.min = today;


    form.addEventListener("submit", function(event) {

        event.preventDefault();


        const pickupData = {

            name: document.getElementById("name").value,

            phone: document.getElementById("phone").value,

            address: document.getElementById("address").value,

            waste: document.getElementById("waste").value,

            date: document.getElementById("date").value,

            message: document.getElementById("message").value

        };


        let requests =
            JSON.parse(
                localStorage.getItem("wasteWiseRequests")
            ) || [];


        requests.push(pickupData);


        localStorage.setItem(
            "wasteWiseRequests",
            JSON.stringify(requests)
        );


        const toast = document.getElementById("toast");

        toast.style.display = "block";


        form.reset();


        setTimeout(() => {

            toast.style.display = "none";

        }, 3000);

    });

}