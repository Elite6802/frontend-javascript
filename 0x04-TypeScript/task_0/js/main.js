var student1 = {
    firstName: "Guilherme",
    lastName: "Silva",
    age: 22,
    location: "Brazil"
};
var student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "USA"
};
var studentsList = [student1, student2];
/**
 * Renders a table of students to the document bosy.
 */
function renderTable() {
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
document.addEventListener("DOMContentLoaded", renderTable);
