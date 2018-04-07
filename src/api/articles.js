import requests from './index'

const Articles = {
  byView: (lim = 3) => 
    requests.get(`/articles/view/${lim}`),
  byTime: (lim = 3) => 
    requests.get(`/articles/updatedAt/${lim}`),
  // all: (page, lim = 10) =>
  //   requests.get(`/articles?${limit(lim, page)}`),
  // byAuthor: (author, page, query) =>
  //   requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  // byTag: (tag, page, lim = 10) =>
  //   requests.get(`/articles?tag=${encode(tag)}&${limit(lim, page)}`),
  // del: slug =>
  //   requests.del(`/articles/${slug}`),
  // favorite: slug =>
  //   requests.post(`/articles/${slug}/favorite`),
  // favoritedBy: (author, page) =>
  //   requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  // feed: () =>
  //   requests.get('/articles/feed?limit=10&offset=0'),
  byId: id =>
    requests.get(`/articles/${id}`)
  // unfavorite: slug =>
  //   requests.del(`/articles/${slug}/favorite`),
  // update: article =>
  //   requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  // create: article =>
  //   requests.post('/articles', { article })
}

export default Articles