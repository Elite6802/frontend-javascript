interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Guilherme",
    lastName: "Silva",
    age: 22,
    location: "Brazil"
}

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "USA"
}

const studentsList: Student[] = [student1, student2];

/**
 * Renders a table of students to the document bosy.
 */
function renderTable(): void {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody")

    studentsList.forEach((student) => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", renderTable);