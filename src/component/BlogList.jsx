import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteBlog,
  handleFormSubmit,
  handleInputChange,
  setBlogsOnInitialized,
  setCurrentEditedBlog,
} from "../store/slices/blogSlice";
import BlogCard from "./BlogCard";

const BlogList = ({setIsAdded}) => {
  const { blog } = useSelector((state) => state);
  const { blogList } = blog;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBlogsOnInitialized({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, []);

  

  return (
    <div>
      <ul className="grid sm:grid-cols-2 gap-x-4 md:gap-x-10">
        {blogList?.length > 0 ? (
          blogList.map((newBlog) => BlogCard(newBlog = {newBlog}))
        ) : (
          <h2> No Blog Is Added</h2>
        )}
      </ul>
    </div>
  );
};

export default BlogList;
