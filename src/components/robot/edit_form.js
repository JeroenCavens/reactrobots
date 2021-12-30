import React, { Component } from "react";

class EditForm extends Component {
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
            <div className="post">
                <div className="alright">
                    <img  height={150} alt="robot" />
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text" placeholder="Enter Name" />
                    <br />
                    <input required className="form-control" id="serialnumber" type="text" placeholder="Enter Serialnumber" />
                    <br />
                    <select className="form-control" id="manufacturer"  >
                
                    </select>
                    <br />
                    <select className="form-control" id="category"  >
                    
                    </select>
                    <br />
                    <div className="control-buttons">
                        <button className="edit">Update</button>
                    </div>
                </form>
            </div>

        );
    }

    handleSubmit(event) {
        event.preventDefault();

    }
}

export default EditForm;