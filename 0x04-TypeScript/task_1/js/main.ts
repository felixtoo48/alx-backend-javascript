// Define the Teacher interface with the specified attributes
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow for any additional attributes
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

// Print the Teacher object
console.log(teacher1);
