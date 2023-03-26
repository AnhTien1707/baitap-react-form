import React, { Component } from 'react'
import TableUser from './TableUser';
import User from './User';
import Search from './Search'
export default class home extends Component {
  render() {
    return (
      <div>
        <h3>Bài Tập Form</h3>
        <User/>
        <Search/>
        <TableUser/>
      </div>
    )
  }
}
