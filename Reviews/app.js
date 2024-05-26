const reviews = [
  {
      id: 1,
      name: 'Virat Kohli',
      img: 'img/virat.jpg',
      text: "Virat Kohli is an Indian cricket superstar, known for his incredible batting skills and leadership. He's broken many records and led the Indian team to victory. He's admired for his fitness and has a massive fan base. He's married to actress Anushka Sharma and has a daughter named Vamika.",
  },
  {
      id: 2,
      name: 'Rohit Sharama',
      img: 'img/Rohit-Sharma.webp',
      text: "Rohit Sharma, born on April 30, 1987, is an Indian cricket sensation renowned for his explosive batting. He holds the record for the highest individual score in ODIs, with 264 runs. Sharma's leadership has led Mumbai Indians to multiple IPL titles.",
  },
  {
      id: 3,
      name: 'Shubman Gill',
      img: 'img/Shubman.jpg',
      text: "Shubman Gill, born on September 8, 1999, is a rising star in Indian cricket known for his elegant batting style. He gained fame leading the Indian Under-19 team to victory in the 2018 ICC Under-19 Cricket World Cup",
  },
  {
      id: 4,
      name: 'Sachin Tendulkar',
      img: 'img/sachin.jpg',
      text: 'Sachin Tendulkar, born April 24, 1973, is an Indian cricket icon known for his unparalleled batting prowess. Regarded as one of the greatest batsmen of all time, he holds numerous records in international cricket, including the most runs and centuries.',
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
      currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
      currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
