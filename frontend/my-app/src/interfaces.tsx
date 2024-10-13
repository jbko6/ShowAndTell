import { ObjectId } from "bson";

export type UserData = {
    sub: string
    name: string
    nickname: string
    email: string
    picture: string
    groups: GroupData[]
}

export type GroupData = {
    id: ObjectId,
    categoryName: string,
    member: Array<string>,
    posts: Array<PostData>,
}

export type PostData = {
    timestamp: Date
    title: string
    markdown: string
    author: string
    comments: Array<CommentData>
    parentCategoryName?: String | undefined
}

export type CategoryData  = {
    title: String
    description: String
    groups: Array<ObjectId>
}

export type CommentData = {
    timestamp: Date
    author: string
    content: string
}