import React, {useEffect, useState} from 'react';
import {postApi} from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";
import type {IPost} from "../models/IPost.ts";

const PostsContainer: React.FC = () => {
    const [limit, setLimit] = useState(100);

    const {data: posts, isLoading, error} = postApi.useFetchAllPostsQuery(limit, {
        // pollingInterval: 10000
    })

    const [ createPost, {} ] = postApi.useCreatePostMutation()
    const [deletePost, {}] = postApi.useDelePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation()



    const handleCreate = async () => {
        const title = prompt() || 'new post title'
        await createPost({body: title, title} as IPost);
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>Error</h1>}
            {posts &&posts.map(post =>
                <PostItem  key={post.id} post = {post} remove={handleRemove} update={handleUpdate}/>
            )}
        </div>
    );
};

export default PostsContainer;
