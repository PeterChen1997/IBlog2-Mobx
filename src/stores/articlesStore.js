import { observable, action, computed } from 'mobx';

class ArticlesStore {
  @observable isLoading = false
  @observable pageIndex = 0
  @observable totalPagesCount = 0
  @observable articlesRegistry = observable.map();

  @computed get articles() {
    return this.articlesList.values()
  }

  clear() {
    this.articlesRegistry.clear()
    this.pageIndex = 0
  }

  getArticle(id) {
    return this.articlesRegistry.get(id);
  }

  @action setPage(pageIndex) {
    this.pageIndex = pageIndex;
  }

  @action loadArticles() {
  }

  @action loadArticle(slug, { acceptCached = false } = {}) {
    // cached

    // if (acceptCached) {
    //   const article = this.getArticle(slug);
    //   if (article) reurn Promise.resolve(article);
    // }

    // not cached
  }


}

export default new ArticlesStore()