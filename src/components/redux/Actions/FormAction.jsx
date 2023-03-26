import { DELETE,} from "../types/FormType"

export const deleteAction = (maSV) =>{
    return {
        type : DELETE,
        maSV
    }
}
