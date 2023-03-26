import { DELETE, SEARCH, SUBMIT } from "../redux/types/FormType"

const initiaState = {
    ListUsers : [{
        id : 1,
        maSV: 1,
        hoTen : "Ngô Nguyễn Anh Tiến",
        Phone : "079321232123",
        email : "anhtien@gmail.com"
    },
    {
        id : 2,
        maSV: 2,
        hoTen : " Nguyễn Anh A",
        Phone : "03456908789",
        email : "Anha@gmail.com"
    },
    {
        id : 3,
        maSV: 3,
        hoTen : "Nguyen Van C",
        Phone : "0999999999",
        email : "anhB@gmail.com"
    }
],
    keyword : '',
}
export const UserManagerReducer = (state = initiaState , action ) =>{
    console.log(action)
    switch (action.type){
        case DELETE :{
            let ListUsersUpdate = [...state.ListUsers]
            let index = ListUsersUpdate.findIndex(maSV => maSV.maSV === action.maSV)
            console.log(index)
            if(index !== -1){
                ListUsersUpdate.splice(index,1);
            }
            state.ListUsers = ListUsersUpdate;
            return {...state}
        }
        case SEARCH : {
            state.keyword = action.keyword
            return {...state}
        }
        case SUBMIT : {
            let ListUserUpdate =[...state.ListUsers]
            const user = {...action.user , id : Math.floor(Math.random() * 100)};
            ListUserUpdate.push(user);
            state.ListUsers = ListUserUpdate
            console.log(state.ListUsers)
            return {...state}
        }
        default : return {...state};
    }
    
   
}