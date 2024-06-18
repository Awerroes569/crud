import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoryRedux';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState(useSelector(state => getAllCategories(state)));

    return (
        <ListGroup>
            {categories.map(category => (
                <ListGroup.Item key={category}>                
                    <Link to={`/category/${category}`}>
                        {category}
                    </Link>            
                </ListGroup.Item>
            ))}
        </ListGroup>
    )

};

export default Categories;