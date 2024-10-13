import React, { Component } from "react";
import { GroupData } from "../interfaces";

type GroupListProps = {

    groupList: Array<GroupData> | null;

}

type GroupListState = {

}

export class GroupList extends Component<GroupListProps, GroupListState> {

    constructor(props: GroupListProps) {
        super(props);
        this.state = {};
    }

    render = (): JSX.Element => {
        const groupListHTML: JSX.Element[] = [];

        if (this.props.groupList == null) {
            groupListHTML.push(
                <div>NO GROUPS!</div>
            );
            return (<div>{groupListHTML}</div>);
        }

        for (const group of this.props.groupList) {
            groupListHTML.push(
                <div className='flex justify-start ml-[8rem] mr-[2rem] mb-[1rem]'>
                    <a href='/group'>
                        <div className='bg-white items-center h-fit flex'>
                            <div className='w-fit mr-2 self-start'>
                                <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width='42' height='42' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                                </svg>
                            </div>
                            <div className=''>
                                <p className='text-xl'>{group.categoryName}</p>
                            </div>
                        </div>
                    </a>
                </div>
            );
        }

        return (<div>{groupListHTML}</div>)
    }
}