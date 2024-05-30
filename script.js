async function fetchData() {
  const sheetId = '1yGPlE-1hIPMnAdckRyL9ful3TDHoyXsq8G8Di5wdCns';
  const apiKey = 'YOUR_API_KEY';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/test/A1:D1000?key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  const values = data.values[1];

  const socialMedia = {
    twitter: values[0],
    facebook: values[1],
    youtube: values[2],
    instagram: values[3]
  };

  Object.keys(socialMedia).forEach(key => {
    const element = document.getElementById(key);
    const endValue = parseInt(socialMedia[key]);
    element.setAttribute('data-val', endValue);
    animateCountUp(element, endValue);
  });
}

function animateCountUp(element, endValue) {
  let startValue = 0;
  let duration = Math.floor(4000 / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    element.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}

document.addEventListener('DOMContentLoaded', fetchData);
