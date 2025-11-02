import React, {useEffect, useState} from 'react';
import {postApi} from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";

const PostsContainer: React.FC = () => {
    const [limit, setLimit] = useState(10);

    const {data: posts, isLoading, error, refetch} = postApi.useFetchAllPostsQuery(limit, {
        pollingInterval: 10000
    })

    useEffect(()=> {
        setTimeout(()=> setLimit(3), 3000);
    }, [])
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
