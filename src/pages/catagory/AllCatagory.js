import React, { useState, useEffect } from 'react';

const AllCatagory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://dummyjson.com/products/categories";

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            console.log(data, 'data')
            setCategories(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApiData(API);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category.slug}</li>
                ))}
            </ul>
        </div>
    );
};

export default AllCatagory;
