import React, { Component } from "react";

class CreateForm extends Component {
    constructor(props) {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {

        return (
            <div className="post-container">
                <h1 className="post_heading">Create Manufacturer</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text"  placeholder="Enter Name" />
                    <br />
                    <input required className="form-control" id="location" type="text"  placeholder="Enter Location" />
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