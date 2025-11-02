import React from 'react';
import {postApi} from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";

const PostsContainer: React.FC = () => {
    const {data: posts, isLoading, error} = postApi.useFetchAllPostsQuery(5)
    return (
        <div>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>Error</h1>}
            {posts &&posts.map(post =>
                <PostItem  key={post.id} post = {post}/>
            )}
        </div>
    );
};

export default PostsContainer;
