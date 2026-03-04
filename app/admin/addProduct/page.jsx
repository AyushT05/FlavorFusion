'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import Submitform from './Submitform'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {

    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        title:"",
        description:"",
        procedure:"",
        category:"Breakfast",
        type:"Veg",
        ref:"",
        author:"Alex Bennett",
        authorImg:"/author_img.png"
      
      }
      
      )
      
      const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
        console.log(data);
      }
      
      const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('procedure',data.procedure);
        formData.append('category',data.category);
        formData.append('type',data.type);
        formData.append('ref',data.ref);
        formData.append('author',data.author);
        formData.append('authorImg',data.authorImg);
        formData.append('image',image);
        const response = await axios.post('/api/blog',formData);
        if(response.data.success)
        {
            toast.success(response.data.msg);
            setImage(false);
            setData({
                title:"",
                description:"",
                procedure:"",
                category:"Breakfast",
                type:"Veg",
                ref:"",
                author:"Alex Bennett",
                authorImg:"/author_img.png"
              
              });
        }
        else{
            toast.error("Error");
        }

      }
  return (
    <>
    <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor='image'>
            <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
        <p className='text-xl mt-4'>Title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border rounded-lg' type='text' placeholder='Type Here' required />
        <p className='text-xl mt-4'>Ingredients</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border rounded-lg' type="text" placeholder='Write Ingredients Here' rows={6} required />
        <p className='text-xl mt-4'>Procedure</p>
        <textarea name='procedure' onChange={onChangeHandler} value={data.procedure} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border rounded-lg' type="text" placeholder='Write Procedure Here' rows={6} required />
        <p className='text-xl mt-4'>Dish Category</p>
        <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500 border rounded-lg'>
            <option value="Breakfast">Breakfast</option>
            <option value="Appetizers">Appetizers</option>
            <option value="MainCourse">Main Course</option>
            <option value="Desert">Desert and Beverages</option>
        </select>
        <select name='type' onChange={onChangeHandler} value={data.type} className='w-40 mt-4 px-4 py-3 border text-gray-500 border rounded-lg'>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>

        </select>
        <p className='text-xl mt-4'>Video Reference</p>
        <textarea name='ref' onChange={onChangeHandler} value={data.ref} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border rounded-lg' type="text" placeholder='Give a yt link here' rows={2} required />
        <div className='mt-8 w-40 h-12'>
        <Submitform />

        </div>
        


    </form>
       </>
   );
};

export default page;

