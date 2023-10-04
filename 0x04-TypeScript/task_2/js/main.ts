// Define the DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define the createEmployee function
function createEmployee(salary: number | string): string {
  if (typeof salary === "number" && salary < 500) {
    return "Teacher";
  } else {
    return "Director";
  }
}

// Define the isDirector function (type predicate)
function isDirector(employee: string): employee is "Director" {
  return employee === "Director";
}

// Define the executeWork function
function executeWork(employee: string) {
  if (isDirector(employee)) {
    const director = new Director();
    console.log(director.workDirectorTasks());
  } else {
    const teacher = new Teacher();
    console.log(teacher.workTeacherTasks());
  }
}

// Define the Subjects string literal type
type Subjects = "Math" | "History";

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    return "Invalid subject";
  }
}

// Test the createEmployee function
console.log(createEmployee(200));    // Output: "Teacher"
console.log(createEmployee(1000));   // Output: "Director"
console.log(createEmployee('$500')); // Output: "Director"

// Test the executeWork function
executeWork(createEmployee(200));    // Output: "Getting to work"
executeWork(createEmployee(1000));   // Output: "Getting to director tasks"

// Test the teachClass function
console.log(teachClass('Math'));     // Output: "Teaching Math"
console.log(teachClass('History'));  // Output: "Teaching History"
