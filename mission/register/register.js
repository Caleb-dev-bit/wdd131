document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1; 

    const addButton = document.getElementById("add-participant");
    const participantFieldset = document.getElementById("participants");

    function participantTemplate(count) {
        return `
        <section class="participant${count}">
            <h3>Participant ${count}</h3>
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}" required>
            
            <label for="age${count}">Age:</label>
            <input type="number" id="age${count}" name="age${count}" required>

            <label for="fee${count}">Fee ($):</label>
            <input type="number" id="fee${count}" name="fee${count}" required>
        </section>`;
    }

    addButton.addEventListener("click", () => {
        participantCount++;
        addButton.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
    });
});
