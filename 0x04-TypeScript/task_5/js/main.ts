// task_5/js/main.ts

interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // Brand property
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // Brand property
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MajorCredits" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MinorCredits" };
}


