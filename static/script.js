
function searchEvents() {

    let input = document.getElementById("searchInput");
    let search = input.value.toLowerCase();

    let cards = document.querySelectorAll(".event-card");

    let found = false;

    cards.forEach(function(card) {

        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(search)) {

            card.style.display = "block";
            found = true;

        }
        else {

            card.style.display = "none";

        }

    });

    if (found) {
        document.getElementById("noEvent").style.display = "none";
    }
    else {
        document.getElementById("noEvent").style.display = "block";
    }

}

function filterEvents(category) {

    let cards = document.querySelectorAll(".event-card");

    document.getElementById("searchInput").value = "";

    let found = false;

    cards.forEach(function(card) {

        if (category == "all" || card.dataset.category == category) {

            card.style.display = "block";
            found = true;

        }
        else {

            card.style.display = "none";

        }

    });

    if (found) {
        document.getElementById("noEvent").style.display = "none";
    }
    else {
        document.getElementById("noEvent").style.display = "block";
    }

}
s
function bookEvent(eventName) {

    document.getElementById("eventName").value = eventName;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

}


