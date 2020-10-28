import React,{useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Shop () {

    const [Items, setItems] = useState([]);
    useEffect(
        () =>{
            fetchItems();
        }, []
    );

    const fetchItems = async() =>{
        const data = await fetch(
            'http://dummy.restapiexample.com/api/v1/employees'
        );
        const myItems = await data.json();
        setItems(myItems.data);
        console.log(myItems.data);
    };

    return(
        <div className = "Shop">
            <div>
                {
                    Items.map(Item => (
                        <h5 key = {Item.id}>
                            <Link to={`/Shop/${Item.id}`}>
                                {Item.employee_name}
                            </Link>
                        </h5>
                        ))
                }
            </div>
        </div>
    )

}

export default Shop;