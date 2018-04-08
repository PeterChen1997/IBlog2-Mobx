import { observable, action } from 'mobx'

class CommentsStore {
  @observable commentsPaginationActiveIndex = 0
  @observable totalCommentsPaginationCount = 0
  @observable isCommentsLoading = false
  @observable isFirstLoad = true
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
    }
  ]

  @action init() {
    this.isCommentsLoading = true
    
    this.isFirstLoad = false
    this.isCommentsLoading = false
  }
}

export default new CommentsStore()