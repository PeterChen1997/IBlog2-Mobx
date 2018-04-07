import { observable, action, computed } from 'mobx'

import api from '../api/articles'

class ArticlesStore {
  @observable isLoading = false
  @observable articlesPaginationActiveIndex = 0
  @observable totalArticlesPaginationCount = 0
  @observable articlesRegistry = observable.map()
  @observable shownTags = ["Vue"]
  @observable currentArticle = {}
  @observable shownArticle = {}
  @observable mostViewedArticles = []
  @observable newestArticles = []

  @action async init() {
    this.setLoadingState(true)
    // 获取首页阅读量最高的三篇文章
    this.mostViewedArticles = (await api.byView()).data
    this.setArticles(this.mostViewedArticles)
    // 获取最新的3篇文章
    this.newestArticles = (await api.byTime()).data
    this.setArticles(this.newestArticles)

    this.setLoadingState(false)
    // 懒加载剩下的
    this.lazyLoad()

  }

  @action setLoadingState(status) {
    this.isLoading = status
  }

  @action lazyLoad() {
    // DO some lazy load
  }

  setArticles(articles) {
    articles.forEach(article => this.articlesRegistry.set(article.id, article));
  }

  @computed get articles() {
    return this.articlesList.values()
  }

  clear() {
    this.articlesRegistry.clear()
    this.pageIndex = 0
  }

  @action getArticle(id) {
    if(this.articlesRegistry.get(id)) {
      this.setLoadingState(false)
      return this.articlesRegistry.get(id)
    } else {
      this.setLoadingState(true)
      this.loadArticle(id)
    }
  }

  @action ishaveArticle(id) {
    if(this.articlesRegistry.get(id)) {
      return true
    } else {
      return false
    }
  }

  @action setPage(pageIndex) {
    this.pageIndex = pageIndex
  }

  @action async loadArticle(id) {
    let data = (await (api.byId(`${id}`))).data
    this.setArticles([data])
    this.shownArticle = data
    this.isLoading = false
  }

  // @action loadArticle(slug, { acceptCached = false } = {}) {
  //   // cached

  //   // if (acceptCached) {
  //   //   const article = this.getArticle(slug)
  //   //   if (article) reurn Promise.resolve(article)
  //   // }

  //   // not cached
  // }


}

export default new ArticlesStore()