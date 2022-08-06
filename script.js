// this will hold the list of news
let newsContainer = document.getElementById('news');

// we will fetch news 
let url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e36aefed69ac448abfadf97c2d759467';

// fetch news using AJAX --> XMLHttpRequest is a browser object
const xhr = new XMLHttpRequest();
fetch()

function business() {
    url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e36aefed69ac448abfadf97c2d759467';
    fetch()
}

function techcrunch() {
    url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e36aefed69ac448abfadf97c2d759467';
    fetch()
}

function tesla() {
    url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-06&sortBy=publishedAt&apiKey=e36aefed69ac448abfadf97c2d759467';
    fetch()
}


function apple() {
    url = 'https://newsapi.org/v2/everything?q=apple&from=2022-08-05&to=2022-08-05&sortBy=popularity&apiKey=e36aefed69ac448abfadf97c2d759467';
    fetch()
}

function fetch() {
    // send request to the object
    xhr.open('GET', `${url}`);

    xhr.onload = function () {
        // this function defines the process that should occure once the response is ready
        // this refers to xhr object
        if (this.status === 200) {
            // responseText is the property of XHR object that returns data as a string
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newsHtml = '';
            articles.forEach(function (element) {
                let date = element['publishedAt'].split('T')[0]
                let time = element['publishedAt'].split('T')[1].split('Z')[0]
                let news = `<div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700">${element['author']}</span>
              <span class="mt-1 text-gray-500 text-sm">${date}</span> 
              <span class="mt-1 text-gray-500 text-sm">${time}</span> 
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">${element['title']}</h2>
              <p class="leading-relaxed">${element['description']}</p>
              <button><a class="text-indigo-500 inline-flex items-center mt-4" href='${element['url']}' target="_blank">Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a></button>
            </div>
          </div>`
                newsHtml += news;
            })
            newsContainer.innerHTML = newsHtml;
        }
        else {
            alert('Some error occured in fetching')
            xhr.abort();
        }
    }

    xhr.send()
}
