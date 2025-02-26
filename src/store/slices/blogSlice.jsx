import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    formData : {
        blog_title : "",
        blog_description : ""
    },
    blogList: [],
    currentEditedBlogId: null,
}

export const openAddBlog = false


export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleInputChange: (state, action)=> {
            let copyFormData = {...state.formData};
            copyFormData = {
                ...copyFormData,
                ...action.payload,
            }
            state.formData = copyFormData;
        },
        handleFormSubmit: (state, action)=> {
            console.log(action);
            state.blogList.push({
                id : nanoid(),
                ...state.formData,
            });
            state.formData = {
                blog_description: "",
                blog_title: ""
            }
            localStorage.setItem("blogList", JSON.stringify(state.blogList))
        },

        setBlogsOnInitialized: (state, action)=>{
            state.blogList = action.payload.blogList
        },
        
        handleDeleteBlog: (state, action) => {
            console.log(action);
            const {currentBlogId} = action.payload;

            let cpyBlogList = [...state.blogList]
            cpyBlogList = cpyBlogList.filter(singleBlog => singleBlog.id !== currentBlogId)
            
            state.blogList = cpyBlogList;
            localStorage.setItem("blogList", JSON.stringify(state.blogList));
        },


        setCurrentEditedBlog: (state, action) => {
            console.log(action);
            const {currentBlogId} = action.payload;
            state.currentEditedBlogId = currentBlogId;  
        },

        handleEditBlog : (state, action) => {
            
            let copyBlogList = [...state.blogList];
            const currentIndex = copyBlogList.findIndex(cBlog=> cBlog.id === state.currentEditedBlogId)
            console.log(currentIndex);

            state.openAddBlog = true
            
            copyBlogList[currentIndex] = {
                ...copyBlogList[currentIndex],
                ...state.formData
            }
            
            state.currentEditedBlogId = null
            state.formData = {
                blog_title: "",
                blog_description: ""
            }
            
            
            state.blogList = copyBlogList
            localStorage.setItem("blogList", JSON.stringify(copyBlogList))
        },

        handleAddButton : (state) => {
            openAddBlog = true
        }

       
    },
})

export const {handleInputChange ,handleAddButton, handleEditBlog, setCurrentEditedBlog, handleFormSubmit, handleDeleteBlog, setBlogsOnInitialized} = blogSlice.actions;

export default blogSlice.reducer;