import { useEffect, useState } from "react";
import { CategoryData, GroupData } from "../interfaces";
import { Post } from "./post";

const PostList = ({groupData} : {groupData : Array<GroupData>}) => {
    const [categories, setCategories] = useState<CategoryData|null>(null);

    useEffect(() => {
        fetch('/api/categories', {credentials: 'include'})
            .then(res => res.json())
            .then(response => {
                setCategories(response);

                groupData.forEach(group => {
                    group.posts.forEach(post => {
                        post.parentCategoryName = group.categoryName;
                    })
                })
            })
    })

    return (
        <>
            {groupData.map(group => {
                return group.posts.map(post => {
                    return <Post id={post.id} title={post.title} markdown={post.markdown} author={post.author} comments={post.comments} parentCategoryName={post.parentCategoryName ? post.parentCategoryName : ""} />;
                })
            })}
        </>
    )
}

export default PostList