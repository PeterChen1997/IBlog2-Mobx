import { observable, action, computed } from 'mobx'

class CommentsStore {
  @observable commentsPaginationActiveIndex = 0
  @observable totalCommentsPaginationCount = 0
  @observable isCommentsLoading = true
  @observable commentsRegistry = observable.map()
  @observable newestComments = [
    {
      title: "测试评论",
      id: "123",
      articleId: "123",
      detail: "some detail"
    }
  ]
  @observable shownComments = [
    {
      title: "测试评论",
      id: "123",
      articleId: "123",
      detail: "some detail"
    },
    {
      title: "测试评论",
      id: "123",
      articleId: "123",
      detail: "some detail"
    },
    {
      title: "测试评论",
      id: "123",
      articleId: "123",
      detail: "some detail"
    },{
      title: "测试评论",
      id: "123",
      articleId: "123",
      detail: "some detail"
    }
  ]

  @action init() {
    this.isCommentsLoading = true
  }

  @computed get comments() {
    return this.commentsList.values()
  }

  clear() {
    this.commentsRegistry.clear()
    this.pageIndex = 0
  }

  getArticle(id) {
    return this.commentsRegistry.get(id)
  }

  @action setPage(pageIndex) {
    this.pageIndex = pageIndex
  }

  @action loadcomments() {
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

export default new CommentsStore()