const studentData = require("./Student Mock Data.json");
const assignmentName = "Welke opdracht of welk project lever je nu in?";
const uneasyRating = "Hoe moeilijk vond je deze opdracht?";
const easyRating = "Hoe leuk vond je deze opdracht?";
const studentName = "Wie ben je?";

const assignments = studentData
  .map((item) => item[assignmentName])
  .filter((value, index, self) => self.indexOf(value) === index);

function averageBy(arr, id, ratingType) {
  const { total, count } = arr.reduce(
    (a, b) => {
      if (b[assignmentName] === id) {
        a.total += b[ratingType];
        a.count++;
      }
      return a;
    },
    { total: 0, count: 0 }
  );
  return total / count;
}

const createAverageRatings = () => {
  let newArray = [];
  assignments.forEach((assignment) => {
    let assignmentAverage = {
      [studentName]: "All the Students with their Assignments",
      [assignmentName]: assignment,
      [uneasyRating]: averageBy(studentData, assignment, uneasyRating),
      [easyRating]: averageBy(studentData, assignment, easyRating),
    };
    newArray.push(assignmentAverage);
  });
  return newArray;
};

const averageRatingsArray = createAverageRatings();

const wincAssignmentData = averageRatingsArray.concat(studentData);

const studentsUnsorted = wincAssignmentData
  .map((item) => item["Wie ben je?"])
  .filter((value, index, self) => self.indexOf(value) === index);

const studentsSorted = studentsUnsorted.sort();

export { wincAssignmentData, studentsSorted };
