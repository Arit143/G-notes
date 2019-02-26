import React, { Component } from 'react';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

class Lists extends Component {
    render() {
      return (
        <div className="col-lg-3 listItemContainer">
            {   
                map(this.props.list, (list, index) => {
                    if (isEmpty(list.title) && isEmpty(list.body)) {
                        return null;
                    }

                    return (
                        <div key={index} className="listContainer" onClick={() => this.props.listItemClick(index)}>
                            <div className="listTitle">
                                {list.title}
                                <span 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        this.props.onListItemDelete(index)
                                    }} 
                                    className="glyphicon glyphicon-remove deleteListItem"></span>
                            </div>
                            <div>{list.body}</div>
                        </div>
                    )
                })
            }
        </div>
      );
    }
  }
  
  export default Lists;