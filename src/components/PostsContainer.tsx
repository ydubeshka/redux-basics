import React, {useEffect, useState} from 'react';
import {postApi} from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";

const PostsContainer: React.FC = () => {
    const [limit, setLimit] = useState(100);

    const {data: posts, isLoading, error} = postApi.useFetchAllPostsQuery(limit, {
        // pollingInterval: 10000
    })

    const [createPost, {}] = postApi.useCreatePostMutation()


    const handleCreate = async () => {
        const title = prompt() || 'new post title'
        await createPost({id: Date.now(), title: title, body: "body of a new post"});
    }
    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>Error</h1>}
            {posts &&posts.map(post =>
                <PostItem  key={post.id} post = {post}/>
            )}
        </div>
    );
};

export default PostsContainer;
