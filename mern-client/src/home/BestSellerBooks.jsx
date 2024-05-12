import React, {useEffect,useState} from 'react'
import BookCards from '../components/BookCards';

export default function BestSellerBooks() {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("https://bookstore-server-m0wg.onrender.com/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
        <BookCards books={books} headline="Best Seller books"/>
    </div>
  )
}
