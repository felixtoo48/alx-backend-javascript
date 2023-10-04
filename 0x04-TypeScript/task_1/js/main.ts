// Define the Teacher interface with the specified attributes
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow for any additional attributes
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define an interface for the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define an interface for the StudentClass itself
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Create a class that implements the Teacher interface
class TeacherImpl implements Teacher {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    public fullTimeEmployee: boolean,
    public yearsOfExperience?: number,
    public location: string,
    extraAttributes: Partial<Teacher> = {}
  ) {
    // Assign any additional attributes to the object
    Object.assign(this, extraAttributes);
  }
}

// Implement the StudentClass class
class StudentClassImpl implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create a Teacher object with initial attributes
const teacher1: Teacher = new TeacherImpl(
  "John",
  "Doe",
  true,
  4,
  "Nairobi",
  { contract: true } // Additional attribute
);

// Create a Director object
const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "San Francisco",
  numberOfReports: 10, // Required attribute from Directors interface
  // Additional attributes can also be added here
};

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstNameInitial = firstName.charAt(0); // Get the first letter of firstName
  const fullName = `${firstNameInitial}. ${lastName}`;
  return fullName;
};

// Create an instance of StudentClass
const student = new StudentClassImpl("John", "Doe");

// Print the Teacher object
console.log(teacher1);

// print the director object
console.log(director1);

// Test the printTeacher function
const fullName = printTeacher("John", "Doe");
console.log(fullName); // Output: "J. Doe"

// Test the class methods
console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName()); // Output: "John"
