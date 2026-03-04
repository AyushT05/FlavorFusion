const { ConnectDB } = require("@/lib/config/db");
const { NextResponse } = require("next/server");
import BlogModel from '@/lib/models/BlogModel';
import { writeFile } from 'fs/promises'
import { request } from 'http';
const fs = require('fs')



const LoadDB = async () => {
    await ConnectDB();

}

LoadDB();
//API EndPoint for Getting Blogs
export async function GET(request) 
{
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog)
    }
    else
    {
        const blogs = await BlogModel.find({});  
        return NextResponse.json({blogs})
    }
    
}
//API EndPoint for Uploading Blogs
export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    const blogData = {
        title : `${formData.get('title')}`,
        description : `${formData.get('description')}`,
        procedure : `${formData.get('procedure')}`,
        category : `${formData.get('category')}`,
        type :  `${formData.get('type')}`,
        author : `${formData.get('author')}`,
        image : `${imgUrl}`,
        ref : `${formData.get('ref')}`,
        authorImg : `${formData.get('authorImg')}`,
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");
    return NextResponse.json({success:true,msg:"Blog Added"});
  
}

//creating end point to delete blog
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`, ()=>{});
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"});

    
}
