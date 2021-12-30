import React, { Component } from "react";

class CreateForm extends Component {
    constructor(props) {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {

        return (
            <div className="post-container">
                <h1 className="post_heading">Create Category</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text"  placeholder="Enter Name" />
                    <br />
                    <textarea required rows="5" cols="28" className="form-control" id="location" type="text"  placeholder="Enter Comment" />
                    <br />
                    <button>Create</button>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();

    }
}

export default CreateForm;