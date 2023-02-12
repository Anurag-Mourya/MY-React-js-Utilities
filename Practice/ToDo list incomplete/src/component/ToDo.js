import React, {useState} from 'react';
import ShowTodo from './ShowTodo';

const ToDo = () => {
    const [task, setToDo] = useState('');
    const [data, setData] = useState([]);


    const toDoHandler = (e) =>{
        const task = e.target.value;
        setToDo(task);
    }

    const submitHnadler = (e) =>{
        e.preventDefault()
        const newData = task;
        setData([...data, newData]); 
        setToDo('');
        console.log(data);
    }

    return (
        <div className="container w-50 mt-5">
            <div className="row justify-content-center align-item-center main-row mt-5" style={{minHeight: 200}}>
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col p2">
                            <h4 className='text-center'>ToDo App </h4>
                        </div>
                    </div>
                    <form action="" onSubmit={submitHnadler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb2 col-9">
                                <input type="text" id='todo-input' className='form-control' onChange={toDoHandler} value={task}/>
                            </div>
                            <button type='submit' className='btn btn-primary mb-2 ml-2 col-3'> Add Todo</button>
                        </div>
                      
                    </form>
                    {
                        data.map((value,index)=>{
                            <ShowTodo key={index} id={index} task={value}/>
                                
                        })
                    }  
                    
                </div>

            </div>
        </div>
    );
}

export default ToDo;