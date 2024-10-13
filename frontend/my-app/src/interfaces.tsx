import { ObjectId } from "bson";

export type UserData = {
    sub: string
    name: string
    nickname: string
    email: string
    picture: string
}

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
    comments: Array<CommentData>
    parentCategoryName?: String | undefined
}

export type CategoryData  = {
    id: ObjectId
    title: String
    description: String
}

export type CommentData = {
    id: ObjectId
    author: string
    content: string
}

export type Category = {
    title: string
    description: string
    groups: Array<ObjectId>
}