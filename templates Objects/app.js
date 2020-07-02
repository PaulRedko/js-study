const fitbitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avCalorieBurn: 5755,
  avGoodSleep: "3:12",
  workoutsPerWeek: "0 of 7",
};

const numbers = {
  100: "one hundred",
  16: "sixteen",
  20: "twenty",
};

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

let mysteryColor = "yellow";

const userReview = {};
userReview["paulred11"] = "good";
userReview.paulch23 = "poor";

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

// need to get av for exams and add the new record.

const examsTogether = student.exams.midterm + student.exams.final;
student.average = examsTogether / 2; //

// if we get objects under array, how do we get info records?

const newGroup = [
  {
    firstName: "David",
    lastName: "Jones",
    strengths: ["Music", "Art"],
    exams: {
      midterm: 92,
      final: 88,
    },
  },
  {
    firstName: "Paul",
    lastName: "Red",
    strengths: ["War", "Death"],
    exams: {
      midterm: 75,
      final: 81,
    },
  },
  {
    firstName: "John",
    lastName: "Doe",
    strengths: ["Water", "Social work"],
    exams: {
      midterm: 99,
      final: 79,
    },
  },
];
