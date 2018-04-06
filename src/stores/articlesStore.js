import { observable, action, computed } from 'mobx'

class ArticlesStore {
  @observable isLoading = false
  @observable articlesPaginationActiveIndex = 0
  @observable totalArticlesPaginationCount = 0
  @observable articlesRegistry = observable.map()
  @observable shownTags = ["Vue"]
  @observable currentArticle = {
    title: 'title1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
    createdAt: "2018-03-31T13:18:24.000Z",
    id: 'article1522501231232304142',
    topic: 'Vue',
    view: 5
  }
  @observable shownArticles = [
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article152250230433142',
      topic: 'Vue',
      view: 5
    },
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article152211502304142',
      topic: 'Vue',
      view: 5
    },
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article15225032304142',
      topic: 'Vue',
      view: 5
    },
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article152250112304142',
      topic: 'Vue',
      view: 5
    }
  ]
  @observable mostViewedArticles = [
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article152250233304142',
      topic: 'Vue',
      view: 5
    },
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article152250230334142',
      topic: 'Vue',
      view: 5
    },
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article152250232204142',
      topic: 'Vue',
      view: 5
    }
  ]
  @observable newestArticles = [
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article152250231104142',
      topic: 'Vue',
      view: 5
    },
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article15225023312041412',
      topic: 'Vue',
      view: 5
    },
    {
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
      createdAt: "2018-03-31T13:18:24.000Z",
      id: 'article15225023123041432',
      topic: 'Vue',
      view: 5
    }
  ]

  @computed get articles() {
    return this.articlesList.values()
  }

  clear() {
    this.articlesRegistry.clear()
    this.pageIndex = 0
  }

  getArticle(id) {
    return this.articlesRegistry.get(id)
  }

  @action setPage(pageIndex) {
    this.pageIndex = pageIndex
  }

  @action loadArticles() {
  }

  @action loadArticle(slug, { acceptCached = false } = {}) {
    // cached

    // if (acceptCached) {
    //   const article = this.getArticle(slug)
    //   if (article) reurn Promise.resolve(article)
    // }

    // not cached
  }


}

export default new ArticlesStore()