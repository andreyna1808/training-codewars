// Beginner Series #2 Clock

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  const sumMilliSeconds = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;

  return sumMilliSeconds;
}
