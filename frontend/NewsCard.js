export const NewsCard = (newscard) => {
    return (`
    <div class="card" style="width: 18rem;">
    <img src="${newscard.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${newscard.title}</h5>
      <p class="card-text">${newscard.description}</p>
      <a href="#" class="btn btn-primary">Open</a>
    </div>
  </div>
    `)
}