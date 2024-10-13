import { ObjectId } from "bson";

export type UserData = {
    sub: string
    name: string
    nickname: string
    email: string
    picture: string
}

<<<<<<< HEAD
export type GroupData = {
    id: ObjectId,
    categoryName: string,
    member: Array<string>,
    posts: Array<PostData>,
}

export type PostData = {
    id: ObjectId
    title: string
    markdown: string
    author: string
    comments: Array<Comment>
}

export type CommentData = {
    id: ObjectId
    author: string
    content: string
=======
export type Group = {
    id: ObjectId
    categoryName: string
    member: Array<ObjectId>
    posts: Array<Post>
}

export type Post = {
    id: ObjectId
    markdown: string
    author: ObjectId
    comments: Array<Comment>
>>>>>>> 9bc4880a6f7c69f1a5aa390eb2e8a1e974e841ed
}