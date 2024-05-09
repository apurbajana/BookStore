import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

export default function EditBooks() {
  const { id } = useParams();
  const {
    bookTitle,authorName,imageURL,category,
bookDescription,bookPDFURL
  } = useLoaderData();
  const bookCategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science-Fiction", "Fantasy",
    "Horror", "Bibliography", "Autobiography", "History", "Self-Help", "Memoir",
    "Business-Books", "Children", "Travel", "Religion", "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updatedBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    };

    console.log(bookObj);
    //update book data
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updatedBookObj)
    }).then(res=>res.json()).then(data=>{
      alert("Book updated successfully!")
      
    })
  }

  const handleChangeSelectedCategory = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1188px] flex-col flex-wrap gap-4">
        {/* First row */}
        <div className='flex gap-8'>
          {/* Book Title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              placeholder="Book Name"
              required
              type="text"
            />
          </div>
          {/* Author name */}
          <div className='lg-w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              placeholder="Author Name"
              required
              type="text"
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
            </div>
            <TextInput
              id="imageURL"
              name='imageURL'
              placeholder="Book Image Url"
              required
              type="text"
            />
          </div>
          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <Select
              id='category'
              name='category'
              className='w-full rounded'
              value={selectedBookCategory}
              onChange={handleChangeSelectedCategory}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>
        {/* 3rd row */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Write Your Book Description..."
            required
            className='w-full'
            rows={6}
          />
        </div>
        {/* Book PDF link */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF Url" />
          </div>
          <TextInput
            id="bookPDFURL"
            name='bookPDFURL'
            placeholder="Book PDF URL"
            required
            type="text"
          />
        </div>
        {/* Button */}
        <Button type="submit" className='mt-5'>
          Update Book Data
        </Button>
      </form>
    </div>
  )
  
}
