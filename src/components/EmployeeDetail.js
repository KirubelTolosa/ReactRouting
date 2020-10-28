import React,{useState, useEffect} from 'react';
import '../App.css';

function EmployeeDetail ({match}) {

    const [Item, setItem] = useState({});
    useEffect(
        () =>{
            fetchItem();
        },[]
    );

    const fetchItem = async() =>{
        const data = await fetch(
            `http://dummy.restapiexample.com/api/v1/employee/${match.params.hhh}`
        );
        console.log(match);
        const myItem = await data.json();
        setItem(myItem.data);
        console.log(myItem);
    };

    return(
        <div className = "EmployeeDetail">
            <div>
                <h2> 
                    {Item.employee_name}                            
                </h2>
                <h4>{Item.employee_salary}</h4>
                <h4>{Item.employee_age}</h4>
            </div>
        </div>
    )

}

export default EmployeeDetail;