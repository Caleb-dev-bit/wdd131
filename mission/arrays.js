document.addEventListener("DOMContentLoaded", () => {
    // Steps List
    const steps = ["one", "two", "three"];
    function listTemplate(step) {
        return `<li>${step}</li>`; 
    }
    const stepsHtml = steps.map(listTemplate).join("");
    document.querySelector("#myList").innerHTML = stepsHtml;

    // GPA Calculation
    const grades = ["A", "B", "A"];
    function convertGradeToNumber(grade) {
        if (grade === "A") return 4;
        if (grade === "B") return 3;
        return 0;
    }
    const gradePoints = grades.map(convertGradeToNumber);
    const gpa = gradePoints.length > 0 
        ? gradePoints.reduce((total, item) => total + item, 0) / gradePoints.length 
        : 0;
    document.querySelector("#gpaDisplay").innerHTML = `GPA: ${gpa.toFixed(2)}`;

    // Short Words Filter
    const words = ["watermelon", "peach", "apple", "tomato", "grape"];
    const shortWords = words.filter(word => word.length < 6);
    document.querySelector("#shortWordsDisplay").innerHTML = shortWords.join(", ");

    // Lucky Number Index
    const myArray = [12, 34, 21, 54];
    const luckyNumber = 21;
    const luckyIndex = myArray.indexOf(luckyNumber);
    document.querySelector("#luckyIndexDisplay").innerHTML = `Index: ${luckyIndex}`;
});
