// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";


function Index(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getbooks();
    }, []);

    const getbooks = async () => {
        const response = await axios.get("api/books/");
        console.log(response.data);
        setBooks(response.data.book);
    };
    return (
        <div>
            <h1>一覧ページ</h1>
            {books.map((books) => (
                <li key={books.id}> {books.title} </li>
            ))}
        </div>
    );
}

export default Index;
