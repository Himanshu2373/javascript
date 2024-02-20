let courses = [
  { no: 1, Name: "himanshu" },
  { no: 2, Name: "Amit" },
];

let res = courses.find(function (res) {
  return res.Name == "himanshu";
});

console.log(res);
