import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice';

const userUtils = () => {
    const dispatch = useDispatch()

    // function for dispatch
    const userDispatch = () => {
        console.log(name)
        dispatch(addUser(name))// data go inside the action which in the slice
    }

  return (
    <div>
        
    </div>
  )
}

export default userUtils