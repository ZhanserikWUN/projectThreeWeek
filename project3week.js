const articles = [
  {
    title: '7 Practical CSS Tips',
    caption:
      'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
    topic: 'Java Script',
    date: '9 july',
    author: 'JOHN',
    Image: './img1.png',
  },
  {
    title: '7 Practical CSS Tips',
    caption:
      'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
    topic: 'Java Script',
    date: '7 july',
    author: 'Alikhan',
    Image: './img2.png',
  },
  {
    title: '7 Practical CSS Tips',
    caption:
      'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
    topic: 'Java Script',
    date: '10 july',
    author: 'KALI',
    Image: './img3.png',
  },
];

const articeDiv = document.getElementById('articles');

articles.map((item) => {
  const html = `<div class="article">
    <div>
      <p>${item.author} </p>
      <p> ${item.date} </p>
      <h4> ${item.title}</h4>
      <p> ${item.caption} </p>
    </div>
    <img src="${item.Image}" style="right:200px;" width="150",  height="150" />
  </div>`;
  articeDiv.innerHTML += html;
});

const apiKey = 'wc0KfHYsaeDkoTT9OB4v89NwOMeZ3PTF';
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=javascript&api-key=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.response.docs;
    const articleDiv = document.getElementById('articles');

    articles.forEach((item) => {
      const html = `<div class="article">
        <div>
          <p> ${item.byline.original} </p>
          <p> ${item.pub_date} </p>
          <h4> ${item.headline.main}</h4>
          <p> ${item.lead_paragraph} </p>
        </div>
        <img src="${item?.multimedia[0]?.url}" style="right:160px;" width="150",  height="150"  />
      </div>`;
      articleDiv.innerHTML += html;
    });
  })
  .catch((error) => console.error(error)); 


