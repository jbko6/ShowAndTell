import { ObjectId } from "bson";

export type User = {
    sub: string
    name: string
    nickname: string
    email: string
    picture: string
}

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
}