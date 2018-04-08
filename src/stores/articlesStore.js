import { observable, action } from 'mobx'

import api from '../api/articles'

class ArticlesStore {
  @observable isFirstLoad = true
  @observable isLoading = false
  @observable articlesPaginationActiveIndex = 1
  @observable totalArticlesPaginationCount = 1
  @observable articlesRegistry = observable.map()
  @observable shownTags = []
  @observable currentArticle = {}
  @observable shownArticles = []
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

  @action async initList() {
    this.setLoadingState(true)
    // 获取列表首页, pagination
    this.loadArticles()
    // tags
    this.shownTags = (await api.byTags()).data
    
    this.isFirstLoad = false
    this.setLoadingState(false)
    
    // this.setArticles(this.newestArticles)
    // // 获取分页信息
    // this.setLoadingState(false)
    // // 懒加载剩下的
    // this.lazyLoad()
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

  @action getArticle(id) {
    if(this.ishaveArticle(id)) {
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

  // 加载单一文章
  @action async loadArticle(id) {
    let data = (await (api.byId(`${id}`))).data
    this.setArticles([data])
    this.currentArticle = data
    this.setLoadingState(false)
  }
  // 加载单页文章列表
  @action async loadArticles() {
    // 加载完成后跳转
    let result = (await (api.all(this.articlesPaginationActiveIndex))).data
    this.shownArticles = result.rows
    this.setArticles(this.shownArticles)
    
    // 获取设置pagination
    this.totalArticlesPaginationCount = Math.ceil(result.count / 5)
  }

  @action setPaginationIndex(index) {
    this.articlesPaginationActiveIndex = index
    this.loadArticles()
  }
}

export default new ArticlesStore()