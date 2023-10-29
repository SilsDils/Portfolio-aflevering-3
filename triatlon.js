document.addEventListener("DOMContentLoaded", function () {
    const buttons = [
        {class: ".Ironman-button", values: ["3.8", "180", "42"]},
        {class: ".half-Ironman-button", values: ["1.9", "90", "21"]},
        {class: ".one-tenth-ironman-button", values: ["0.4", "18", "4"]},
        {class: ".olympic-distance-ironman-button", values: ["1.5", "40", "10"]}
    ];

    const inputElements = [".swim-distance", ".bike-distance", ".run-distance"];
    const unitElements = [".swim-unit-select", ".bike-unit-select", ".run-unit-select"];

    buttons.forEach(button => {
        const btn = document.querySelector(button.class);
        btn.addEventListener("click", function () {
            inputElements.forEach((inputClass, index) => {
                const input = document.querySelector(inputClass);
                input.value = button.values[index];
            });

            unitElements.forEach(unitClass => {
                const unit = document.querySelector(unitClass);
                unit.value = "kilometers";
            });
        });
    });
});

// Remove all non numbers and limit input all class="input-limiter"
document.addEventListener("DOMContentLoaded", function () {
    const inputElements = document.querySelectorAll(".input-limiter");
    const cursorPosition = this.selectionStart;

    inputElements.forEach((element) => {
        inputElements.forEach((element) => {
            element.addEventListener("input", function() {
                // Store the current cursor position
                const cursorPosition = this.selectionStart;

                // Replace unwanted characters
                const newValue = this.value.replace(/[^0-9,]/g, "");

                if (newValue !== this.value) {
                    this.value = newValue;
                    // Adjust cursor position if character is bye bye
                    this.selectionStart = cursorPosition - 1;
                    this.selectionEnd = cursorPosition - 1;
                } else {
                    this.selectionStart = cursorPosition;
                    this.selectionEnd = cursorPosition;
                }

                if (this.value.toString().length > 6) {
                    this.value = this.value.toString().slice(0, 6);
                }
            });
        });
    });

    // Time fields which includes ":" to use in hh:mm:ss
    const timeInputElements = document.querySelectorAll(".time-limiter");

    timeInputElements.forEach((element) => {
        element.addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9:]/g, "");
            if (this.value.toString().length > 8) {
                this.value = this.value.toString().slice(0, 8);
            }
        });
    });
});

// Pace fields which includes M or KM
document.addEventListener("DOMContentLoaded", function () {
    const paceInputElements = document.querySelectorAll(".pace-limiter");
    paceInputElements.forEach((element) => {
        element.addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9 kmKM]/g, "");
            if (this.value.toString().length > 5) {
                this.value = this.value.toString().slice(0, 5);
            }
        });
    });
});

// Dropdown menu for bike distance
document.addEventListener("DOMContentLoaded", function() {
    const customInputBike = document.getElementsByClassName("customInput-pace-bike")[0];
    const bikeDistanceOption = document.getElementById("bike-distance-option");

    customInputBike.addEventListener("focus", function() {
        bikeDistanceOption.style.display = "block";
    });

    customInputBike.addEventListener("blur", function() {
        setTimeout(() => { bikeDistanceOption.style.display = "none"; }, 280);
    });

    bikeDistanceOption.addEventListener("click", function() {
        customInputBike.value = this.value;
    });
});

/* Input fields with custom values for biking */
document.addEventListener("DOMContentLoaded", function() {
    const optionsBikeDistanceArray = ["10 km", "40 km", "90 km", "100 km", "180 km"];
    const selectBikeElement = document.getElementById("bike-distance-option");

    optionsBikeDistanceArray.forEach(function(optionValue) {
        const optionElement = document.createElement("option");
        optionElement.textContent = optionValue;
        optionElement.value = optionValue;
        selectBikeElement.appendChild(optionElement);
    });
});

/* Dropdown menu for run distance */
document.addEventListener("DOMContentLoaded", function() {
    const customInputRun = document.getElementsByClassName("customInput-pace-run")[0];
    const runDistanceOption = document.getElementById("run-distance-option");

    customInputRun.addEventListener("focus", function() {
        runDistanceOption.style.display = "block";
    });

    customInputRun.addEventListener("blur", function() {
        setTimeout(() => { runDistanceOption.style.display = "none"; }, 280);
    });

    runDistanceOption.addEventListener("click", function() {
        customInputRun.value = this.value;
    });
});

/* Input fields with custom values for run */
document.addEventListener("DOMContentLoaded", function() {
    const optionsRunDistanceArray = ["1 km", "5 km", "10 km", "21 km", "42 km"];
    const selectRunElement = document.getElementById("run-distance-option");

    optionsRunDistanceArray.forEach(function(optionValue) {
        const optionElement = document.createElement("option");
        optionElement.textContent = optionValue;
        optionElement.value = optionValue;
        selectRunElement.appendChild(optionElement);
    });
});

/*Dropdown menu for swim distance */
document.addEventListener("DOMContentLoaded", function () {
    const customInputSwim = document.getElementsByClassName("customInput-pace-swim")[0];
    const swimDistanceOption = document.getElementById("swim-distance-option");

    customInputSwim.addEventListener("focus", function () {
        swimDistanceOption.style.display = "block";
    });

    customInputSwim.addEventListener("blur", function () {
        setTimeout(() => {swimDistanceOption.style.display = "none"; }, 280);
    });

    swimDistanceOption.addEventListener("click", function ()  {
        customInputSwim.value = this.value;

    });
});

/* Input fields with custom values for swim */
document.addEventListener("DOMContentLoaded", function () {
    const optionsSwimDistanceArray = ["01", "02", "08", "1,5", "3,8"];
    const selectSwimElement = document.getElementById("swim-distance-option");

    optionsSwimDistanceArray.forEach(function (optionValue) {
        const optionElement = document.createElement("option");
        optionElement.textContent = optionValue;
        optionElement.value = optionValue;
        selectSwimElement.appendChild(optionElement);
    });
});

function timeToSeconds(time) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return (hours * 3600) + (minutes * 60) + seconds;
}

function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".results-button").addEventListener('click', () => {
        const swimTime = swimTimeTotalInput.value;
        const bikeTime = bikeTimeTotalInput.value;
        const runTime = runTimeTotalInput.value;

        const totalTimeInSeconds = convertToSeconds(swimTime) + convertToSeconds(bikeTime) + convertToSeconds(runTime);

        const totalTime = convertSecondsToTime(totalTimeInSeconds);

        document.getElementById('total-time').value = totalTime;
    });

    function convertToSeconds(timeStr) {
        const [hours, minutes, seconds] = timeStr.split(':').map(Number);
        return (hours * 3600) + (minutes * 60) + seconds;
    }

    function convertSecondsToTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Swim
    const swimDistanceInput = document.querySelector(".swim-distance");
    const swimPaceInput = document.querySelector(".swim-pace");
    const swimTimeTotalInput = document.getElementById("swim-time-total");
    const swimPaceDistanceInput = document.querySelector(".swim-pace-distance");

    // Bike
    const bikeDistanceInput = document.querySelector(".bike-distance");
    const bikePaceInput = document.querySelector(".bike-pace");
    const bikePaceDistanceInput = document.querySelector(".customInput-pace-bike");
    const bikeTimeTotalInput = document.getElementById("bike-time-total");

    // Run
    const runDistanceInput = document.querySelector(".run-distance");
    const runPaceInput = document.querySelector(".run-pace");
    const runTimeTotalInput = document.getElementById("run-time-total");
    const runPaceDistanceInput = document.querySelector(".run-pace-distance");

    function updateTotalTime(distanceInput, paceInput, totalTimeInput, paceDistanceInput = null) {
        const distanceKm = parseFloat(distanceInput.value) || 0;
        const pacePerKmValue = timeToSeconds(paceInput.value) || 0;

        let adjustedPace = pacePerKmValue;

        if (paceDistanceInput) {
            const paceDistance = parseFloat(paceDistanceInput.value) || 1;
            adjustedPace = pacePerKmValue / paceDistance;
        }

        const totalPaceSeconds = distanceKm * adjustedPace;
        const totalTime = secondsToTime(totalPaceSeconds);
        totalTimeInput.value = totalTime;
    }

    // Event listeners for swim
    swimDistanceInput.addEventListener("input", () => updateTotalTime(swimDistanceInput, swimPaceInput, swimTimeTotalInput, swimPaceDistanceInput));
    swimPaceInput.addEventListener("input", () => updateTotalTime(swimDistanceInput, swimPaceInput, swimTimeTotalInput, swimPaceDistanceInput));
    swimPaceDistanceInput.addEventListener("input", () => updateTotalTime(swimDistanceInput, swimPaceInput, swimTimeTotalInput, swimPaceDistanceInput));

    // Event listeners for bike
    bikeDistanceInput.addEventListener("input", () => updateTotalTime(bikeDistanceInput, bikePaceInput, bikeTimeTotalInput, bikePaceDistanceInput));
    bikePaceInput.addEventListener("input", () => updateTotalTime(bikeDistanceInput, bikePaceInput, bikeTimeTotalInput, bikePaceDistanceInput));
    bikePaceDistanceInput.addEventListener("input", () => updateTotalTime(bikeDistanceInput, bikePaceInput, bikeTimeTotalInput, bikePaceDistanceInput));

    // Event listeners for run
    runDistanceInput.addEventListener("input", () => updateTotalTime(runDistanceInput, runPaceInput, runTimeTotalInput, runPaceDistanceInput));
    runPaceInput.addEventListener("input", () => updateTotalTime(runDistanceInput, runPaceInput, runTimeTotalInput, runPaceDistanceInput));
    runPaceDistanceInput.addEventListener("input", () => updateTotalTime(runDistanceInput, runPaceInput, runTimeTotalInput, runPaceDistanceInput));
});


