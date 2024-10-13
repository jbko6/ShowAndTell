import React, { Component, MouseEvent } from "react";
import { GroupData } from "../interfaces";

type ListCategoriesProps = {

    categoryList: Array<GroupData> | null;

}

type ListCategoriesState = {

    array: Array<string>;

}

export class ListCategories extends Component<ListCategoriesProps, ListCategoriesState> {

    constructor(props: ListCategoriesProps) {
        super(props);
        this.state = {array: []};
    }

    getSelected = (): void => {
        const arr: Array<string> = [];
        var data: any =  document.querySelectorAll('input[type=checkbox]:checked');
        var i;
        for (i=0;i<data.length;i++)
        {
        arr.push(data[i].value);
        }
        console.log(arr);
        this.setState({array: arr});
    }

    render = (): JSX.Element => {
        const catListHTML: JSX.Element[] = [];

        if (this.props.categoryList == null) {
            catListHTML.push(
                <div>NO GROUPS!</div>
            );
            return (<div>{catListHTML}</div>);
        }

        for (const group of this.props.categoryList) {
            catListHTML.push(
                <div className='mx-1 my-1 rounded-[1rem] bg-gray-400 text-white px-3 py-1 w-fit font-bold flex'>
                    <input type="checkbox" id="category" value={group.categoryName} className=""/>
                    <p>{group.categoryName}</p>
                </div>
            );
        }

        catListHTML.pop();

        catListHTML.push(
            <div className='w-full flex justify-center'>
                <button onClick={() => this.getSelected()}>
                    <p>Add</p>
                </button>
                
                <a href='/'>
                    <div className='mx-1 my-1 rounded-[1rem] bg-satBlue text-white px-3 py-1 w-fit font-bold items-center'>
                        <p>Add</p>
                    </div>
                </a>
            </div>
        );

        return (<div className='flex flex-wrap w-full'>{catListHTML}</div>)
    }
}