import React, { Component } from "react";
import {connect} from 'react-redux';
import { SUBMIT } from "./redux/types/FormType";
class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      maSV : '',
      hoTen : '',
      Phone : '',
      email : '',
  }
  }
    handleOnChange = (e) => {
        let tagInput = e.target;
        console.log(tagInput)
        let {name , value} = tagInput;
        this.setState({
            [name]:value
        })
       
    }

    handleSubmit = (e) =>{
      e.preventDefault()
      this.props.OnSubmit(this.state)
    }
  render() {
    return (
      <div className="container mt-3">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h5 style={{
                fontSize : '16px',
                margin : "0px",
            }}>Thông Tin Sinh Viên</h5>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-6 form-group">
                        <label className='mb-2'>Mã SV</label>
                        <input className="form-control mb-2" name="maSV" value={this.state.maSV} onChange={this.handleOnChange}></input>
                    </div>
                    <div className="col-6 form-group">
                        <label className='mb-2'>Họ Tên</label>
                        <input className="form-control mb-2" name="hoTen" value={this.state.hoTen} onChange={this.handleOnChange}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 form-group">
                        <label className='mb-2'>Số Điện Thoại</label>
                        <input className="form-control mb-2" name="Phone" value={this.state.Phone} onChange={this.handleOnChange}></input>
                    </div>
                    <div className="col-6 form-group">
                        <label className='mb-2'>Email</label>
                        <input className="form-control mb-2" name="email" value={this.state.email} onChange={this.handleOnChange}></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Thêm Sinh Viên</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    OnSubmit : (user) => {
      const action = {
        type : SUBMIT,
        user
      };
      dispatch(action);
    } 
  }
}
export default connect(null,mapDispatchToProps)(User);
