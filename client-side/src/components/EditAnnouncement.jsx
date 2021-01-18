import React, {Component} from 'react'
import axios from "axios";
import {setErrors} from "../validation/setErrors";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class EditAnnouncement extends Component {
    constructor(props) {
        super(props);
        let today = new Date()
        this.state = {
            title: "",
            description: "",
            announcementDate: today,
            errors: {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:5000/announcements/detail/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    title: res.data.announcements.title,
                    description: res.data.announcements.description
                })
            }
        })
    }

    handleInputChange = (e) => {
        const {name, value} = e.target
        this.setState({
            ...this.state,
            [name]:value,
        })
    }

    validate = (title, description) => {
        const errors = setErrors(title, description)
        this.setState({errors: errors})
        return Object.values(errors).every((err) => err === "")
    }

    onSubmit = e => {
        e.preventDefault()
        const id = this.props.match.params.id
        const {title, description, announcementDate} = this.state
        if(this.validate(title, description)){
            const data = {
                title: title,
                description: description,
                announcementDate: announcementDate
            }
            console.log(data)
            axios.put(`http://localhost:5000/announcements/update/${id}`, data).then((res) => {
                if(res.data.success){
                    alert("Announcement has been updated")
                }
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <div className="h3 mb-3 font-weight-normal">Edit Announcement</div>
                        <label htmlFor="formGroupExampleInput">Title</label>
                        <input type="text" className="form-control" id="formGroupExampleInput"
                               name="title"
                               maxLength="50"
                               placeholder="Enter your title"
                               value={this.state.title}
                               onChange={this.handleInputChange}
                        />
                        {this.state.errors.title && (
                            <div className='text-danger'>{this.state.errors.title}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Description</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={this.state.description}

                            onChange={ ( event, editor ) => {
                                const data = editor.getData()
                                this.setState({description: data})
                            } }
                        />
                        {this.state.errors.description && (
                            <div className='text-danger'>{this.state.errors.description}</div>
                        )}
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.onSubmit}>Edit</button>
                </form>
            </div>
        )
    }
}

export default EditAnnouncement