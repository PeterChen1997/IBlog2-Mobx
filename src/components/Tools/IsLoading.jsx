import React, { Component } from 'react'

export default class IsLoading extends Component {
  render() {
    const loadingStyleObj = {
      width: "100%",
      height: "100%"
    }
    const loadingButtonStyleObj = {
      width: "100%",
      height: "100%",
      borderColor: "transparent"
    }
    return (
      <div style={ loadingStyleObj }>
        <button className="button is-loading" style={ loadingButtonStyleObj }>isLoading...</button>
      </div>
    )
  }
}
