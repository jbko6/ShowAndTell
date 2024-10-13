import React, { Component } from "react";
import { GroupData, CommentData } from "../interfaces";

type CommentListProps = {

    commentList: Array<CommentData> | null;

}

type GroupListState = {

}

export class CommentList extends Component<CommentListProps, GroupListState> {

    constructor(props: CommentListProps) {
        super(props);
        this.state = {};
    }

    render = (): JSX.Element => {
        const commentListHTML: JSX.Element[] = [];

        if (this.props.commentList == null) {
            commentListHTML.push(
                <div className="ml-1 mb-2 font-productsans">No one's commented yet! You could be the first...</div>
            );
            return (<div>{commentListHTML}</div>);
        }

        for (const comment of this.props.commentList) {
            commentListHTML.push(
                <div>
                    <div className='bg-white items-center h-fit flex'>
                        <div className='w-fit mr-2 self-start'>
                            <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width='35' height='35' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                            </svg>
                        </div>
                        <div className='-mt-1'>
                            <p className='text-md font-bold'>{comment.author}</p>
                            <p className='text-sm -mt-1'>{comment.content}</p>
                        </div>
                    </div>
                    <hr className="h-px my-1 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                </div>
            );
        }

        return (<div>{commentListHTML}</div>)
    }
}