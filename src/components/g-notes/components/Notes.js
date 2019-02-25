import React, { Component } from 'react';

class Notes extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onBodyChange = this.onBodyChange.bind(this);
		this.onAddNote = this.onAddNote.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	onAddNote() {
		this.setState({
			title: '',
			body: ''
		}, () => {
			this.props.onAddNote();
		})
	}

	onChangeTitle(e) {
		this.setState({
			title: e.target.value
		});
	}

	onBodyChange(e) {
		this.setState({
			body: e.target.value
		});
	}

	onSave() {
		const { title, body } = this.state;
		this.props.onSave(title, body, this.props.listId)	
	}

    render() {
		const title = this.state.title;
		const body = this.state.body;

		return (
			<div className="col-lg-8 noteContainer">
				<div className="addNote">
					<button type="button" className="btn btn-default" onClick={this.onAddNote}>
						<span className="glyphicon glyphicon-plus"></span>
						Add Note
					</button>
				</div>
				<form>				
					<div className="form-group">
						<label htmlFor="title">Title:</label>
						<input id={"title"} type="text" className="form-control" onChange={this.onChangeTitle} value={title}/>
					</div>
					<div className="form-group">
						<label htmlFor="body">Body:</label>
						<textarea rows={10} className="form-control" onChange={this.onBodyChange} value={body} />
					</div>
				</form>
				<div className="saveNote">
						<button className="btn btn-primary" onClick={this.onSave}>Save</button>
				</div>
			</div>

      );
    }
  }
  
  export default Notes;