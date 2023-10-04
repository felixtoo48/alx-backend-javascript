// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Create a function to render the table
function renderTable(students: Student[]) {
  const table = document.createElement("table");

  // Create table headers
  const headerRow = table.insertRow(0);
  const firstNameHeader = headerRow.insertCell(0);
  const locationHeader = headerRow.insertCell(1);
  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";

  // Iterate over the students and create rows
  students.forEach((student, index) => {
    const row = table.insertRow(index + 1);
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  // Append the table to the document
  document.body.appendChild(table);
}

// Call the renderTable function with the studentsList
renderTable(studentsList);

