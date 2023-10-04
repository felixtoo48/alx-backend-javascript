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

// Print the Teacher object
console.log(teacher1);

// print the director object
console.log(director1);
