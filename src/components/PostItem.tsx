import React from 'react';
import type {IPost} from "../models/IPost.ts";


interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, remove, update }) => {
    const deletePostHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post)

    }

    const updateHandler = (event: React.MouseEvent)=> {
        const title = prompt("Post title") || "updated post title"
        update({...post, title});

    }
    return (
        <div className='post' onClick={updateHandler}>
            {post.id}. {post.title}
            <button onClick={deletePostHandler}>Delete</button>
        </div>
    );
};

export default PostItem;
