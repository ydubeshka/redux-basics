import React from 'react';
import type {IPost} from "../models/IPost.ts";


interface PostItemProps {
    post: IPost
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    return (
        <div className='post'>
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    );
};

export default PostItem;
