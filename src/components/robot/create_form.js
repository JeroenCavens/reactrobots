import React, { Component } from "react";

class CreateForm extends Component {
    constructor(props) {
        super();

        this.state = { };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSerialnumber = this.handleChangeSerialnumber.bind(this);
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
    }

    handleChangeSerialnumber(event) {
    }

    handleChangeManufacturer(event) {
    }

    handleChangeCategory(event) {
    }

    render() {

        return (
            <div className="post-container">
                <h1 className="post_heading">Create Robot</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text"  placeholder="Enter Name" />
                    <br />
                    <input required className="form-control" id="serialnumber" type="text"  placeholder="Enter Serialnumber" />
                    <br />
                    <select className="form-control" id="manufacturer" >
                        
                    </select>
                    <br />
                    <select className="form-control" id="category" >
                        
                    </select>
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