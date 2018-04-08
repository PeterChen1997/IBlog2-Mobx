import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
export default class Pagination extends Component {

  renderPaginations = () => {
    let result = []
    for(let i = 1; i <= this.props.totalCount; i++) {
      result.push((
        <li key={i}>
          <a className={this.props.activeIndex === i ? "pagination-link is-current" : "pagination-link"}
            data-type="index"
            onClick={() => this.props.setIndex(i)}
          >
            {i}
          </a>
        </li>
      ))
    }
    return result
  }

  toSetIndex = (activeIndex, type, totalCount) => {
    switch (type) {
      case "pre":
        this.props.setIndex(activeIndex - 1 > 0 ? activeIndex - 1 : activeIndex)
        break
      case "next":
        this.props.setIndex(activeIndex + 1 > totalCount ? activeIndex : activeIndex + 1)
        break
      default:
        break
    }
  }


  render() {
    return (
      <nav className="pagination is-rounded is-centered" aria-label="pagination">
        <a className="pagination-previous"
          data-type="pre"
          onClick={() => this.toSetIndex(this.props.activeIndex, "pre", this.props.totalCount)}
        >
          上一页
        </a>
        <a className="pagination-next"
          data-type="next"
          onClick={() => this.toSetIndex(this.props.activeIndex, "next", this.props.totalCount)}
        >
          下一页
        </a>
        <ul className="pagination-list">
          {
            this.renderPaginations()
          }
        </ul>
      </nav>
    )
  }
}