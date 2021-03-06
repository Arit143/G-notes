import React, { Component } from 'react';
import Media from 'react-media';

import concat from 'lodash/concat';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';

import Notes from './components/Notes';
import List from './components/List';


class GNotesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            selectedIndex: 0,
            selectedTitle: '',
            selectedBody: ''
        };

        this.addNotes = this.addNotes.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.updateNotes = this.updateNotes.bind(this);
        this.listItemClick = this.listItemClick.bind(this);
    }

    addNotes() {
        const listSize = this.state.list.length;
        if (listSize > 0) {
            const getListDetails = this.state.list[listSize - 1];
            if (isEmpty(getListDetails.title) && isEmpty(getListDetails.body)) {
                return;
            }
        }

        this.setState({
            list: concat(this.state.list, [{ title: '', body: ''}]),
            selectedIndex: this.state.list.length
        });
    }

    listItemClick(index) {
        this.setState({
            selectedTitle: this.state.list[index].title,
            selectedBody: this.state.list[index].body,
            selectedIndex: index
        })
    }

    deleteListItem(itemToDelete) {
        this.setState({
            list: filter(this.state.list, (list, index) => index !== itemToDelete)
        })
    }

    updateNotes(title, body, id) {
        const listDetails = this.state.list[id];
        const updateListDetails = merge(listDetails, { title, body});

        const updatedList = [
            ...this.state.list.slice(0, id),
            updateListDetails,
            ...this.state.list.slice(id + 1)
        ];

        this.setState({
            selectedTitle: updatedList[id].title,
            selectedBody: updatedList[id].body,
            list: updatedList
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <List list={this.state.list} listItemClick={this.listItemClick} onListItemDelete={this.deleteListItem}/>
                    <Media query={{ minWidth: 1025 }}>
                        <div className="col-lg-1 verticalLine"></div>
                    </Media>
                    <Notes listId={this.state.selectedIndex} 
                            title={this.state.selectedTitle}
                            body={this.state.selectedBody}
                            onAddNote={this.addNotes} 
                            onSave={this.updateNotes}
                    />
                </div>
            </div>
        );
    }

}

export default GNotesContainer;