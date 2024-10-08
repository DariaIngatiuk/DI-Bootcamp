import TaskRemove from './TaskRemove.jsx';
import TaskEdit from './TaskEdit.jsx';
import {complete} from './state/slice.js'
import {useDispatch} from 'react-redux'
import './tasks.css'

const TaskItem = (props) => {
    const {task} = props
    const dispatch = useDispatch();

    const changeStatus = ()=> {
        dispatch(complete(task.id)); 
    }
    return (
        <>
                <div className={task.active? '':'active'}>
                    <span onClick={()=>changeStatus()}>
                    {task.task} {task.dueDate}
                    </span>
                    <TaskEdit id={task.id}/>
                    <TaskRemove id={task.id}/>
                </div>
        </>
    )
}

export default TaskItem;