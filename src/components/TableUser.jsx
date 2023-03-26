import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deleteAction} from './redux/Actions/FormAction'
class TableUser extends Component {
    renderTableUser = () => {
        let {ListUsers,keyword} = this.props
        ListUsers = ListUsers.filter((user) => {
            return user.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        })
        return ListUsers.map((user,index)=>{
            return (
                <tr key={index} className = 'text-dark'>
                    <td>{user.maSV}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.Phone}</td>
                    <td>{user.email}</td>
                    <td><button className='btn-success btn'>Sửa</button></td>
                    <td><button className='btn-danger btn' onClick={() => {
                        this.props.dispatch(deleteAction(user.maSV))
                    }}>Xóa</button></td>
                </tr>
            )
        })
    }
  render() {
    console.log(this.props.ListUsers)
    return (
      <div className='container'>
        <table className='table'>
            <thead>
                <tr className='bg-dark text-white'>
                    <th>Mã SV</th>
                    <th>Họ Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>Email</th>
                    <th colSpan={2}>Action</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    this.renderTableUser()
                }
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        ListUsers:state.UserManagerReducer.ListUsers,
        keyword : state.UserManagerReducer.keyword
    }
}

export default connect(mapStateToProps,null)(TableUser)