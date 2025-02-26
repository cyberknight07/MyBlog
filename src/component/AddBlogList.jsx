import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInputChange, handleFormSubmit, handleEditBlog } from "../store/slices/blogSlice";

const AddBlogList = () => {
  const {blog} = useSelector((state) => state);
  const {currentEditedBlogId} = blog;
  const dispatch = useDispatch()


  function onChangeInput(event){
        dispatch(handleInputChange({
           [event.target.name] : event.target.value,
        })
    );
  }

  function onSubmitForm(event){
    event.preventDefault();
    currentEditedBlogId !== null ? dispatch(handleEditBlog())     
    : dispatch(handleFormSubmit())
}

  return (
    <div className="bg-amber-100 mt-3 p-4 w-105 rounded-md">
      <form className="font-bold flex flex-col justify-center items-between" onSubmit={onSubmitForm}>
        <div className="pb-2 flex flex-row justify-between items-center">
          <label htmlFor="blog_title">Blog Title</label>
          <input 
            type="text"
            name="blog_title"
            placeholder="Enter Blog Title"
            id="blog_title"
            onChange={onChangeInput}
            value={blog?.formData?.blog_title}
            className="border p-2 rounded-md " 
          />
        </div>
        <div className="pb-2 flex justify-between items-center">
          <label htmlFor="blog_description">Blog Description</label>
          <input 
            type="text"
            name="blog_description"
            placeholder="Enter Blog Description"
            id="blog_description"
            onChange={onChangeInput}
            value={blog?.formData?.blog_description}
            className="border p-2 rounded-md" 
          />
        </div>
        <button className="bg-amber-600 mt-3 rounded-lg w-50 self-center" type="submit">
          {
            blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"
          }
        </button>
      </form>
    </div>
  );
};

export default AddBlogList;
