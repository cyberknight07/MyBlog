import React from "react";
import { handleDeleteBlog, setCurrentEditedBlog, handleInputChange } from "../store/slices/blogSlice";
import { useDispatch } from "react-redux";

const BlogCard = ({ newBlog}) => {


    const dispatch = useDispatch();
    


    function onDeleteBlog(blogId) {
        dispatch(
          handleDeleteBlog({
            currentBlogId: blogId,
          })
        );
        console.log(blogId);
      }
      function onEditBlog(cBlog) {
        dispatch(
          setCurrentEditedBlog({
            currentBlogId: cBlog?.id,
          })
        );
        dispatch(
          handleInputChange({
            blog_title: cBlog?.blog_title,
            blog_description: cBlog?.blog_description,
          })
        );
      }

  return (
    <div key={newBlog?.id} className="border-b shadow-sm hover:shadow-lg  bg-amber-100 border-amber-200 p-4 mt-4 rounded-md font-bold">
      <h2 className="bg-amber-100 border-b-2 border-amber-200 hover:border-amber-300 text-xl">{newBlog.blog_title}</h2>
      <div className="pt-2 pb-5 text-lg text-gray-600 font-medium">{newBlog?.blog_description}</div>
      <button  className="bg-amber-600 mr-4 shadow-sm border-b-2 rounded-lg" onClick={() =>{ onEditBlog(newBlog); setIsAdded(true)}}>Edit BLog</button>
      <button  className="bg-amber-600 shadow-sm border-b-2 rounded-lg" onClick={() => onDeleteBlog(newBlog?.id)}>Delete BLog</button>
    </div>
  );
};

export default BlogCard;
