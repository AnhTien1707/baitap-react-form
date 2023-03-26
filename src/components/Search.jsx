import React, { Component } from 'react'
import { SEARCH } from './redux/types/FormType'
import {connect} from 'react-redux'
class search extends Component {
    handleOnSearch = (e) => {
        this.props.searchAction(e.target.value);
    }
  render() {
    return (
      <div>
        <div className='container my-3'>
            <input className='form-control' placeholder='Nhập tên vào để tìm kiếm' onChange={this.handleOnSearch}></input>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchAction : (keyword) =>{
          const action = {
            type : SEARCH,
            keyword
          };
          dispatch(action)
        }
    }
}

export default connect(null , mapDispatchToProps)(search)