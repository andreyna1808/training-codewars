// Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    default:
      return "green";
  }
}
