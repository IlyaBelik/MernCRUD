import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

class AnnouncementList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
        }
    }

    componentDidMount() {
        this.getAnnouncements()
    }

    getAnnouncements() {
        axios.get('http://localhost:5000/announcements').then(res => {
            if (res.data.success) {
                this.setState({
                    announcements: res.data.announcements,
                })
                console.log(this.state.announcements)
            }
        })
    }
    onDelete = id => {
        axios.delete(`http://localhost:5000/announcements/delete/${id}`).then((res) => {
            alert(res.data.title + "Deleted Successfully")
            this.getAnnouncements()
        })
    }



    filterContent(announcements, searchTerm){
        const result = announcements.filter((announcements) =>
            announcements.title.toLowerCase().includes(searchTerm))
        this.setState({announcements:result})
    }

    handleTextSearch = e => {
        const searchTerm = e.currentTarget.value
        axios.get('http://localhost:5000/announcements').then(res => {
            if (res.data.success) {
                this.filterContent(res.data.announcements, searchTerm)
            }
    })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                        <h4>All Announcements</h4>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search" placeholder="Search"
                            name="searchTerm"
                            onChange={this.handleTextSearch}
                        />
                    </div>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.announcements.map((item, index) => (
                        <tr key={`${item}_${index}`}>
                            <th scope="row">{index + 1}</th>
                            <th scope="row">{item.title}</th>
                            <td>
                                <Link className="btn btn-info" to={`/announcements/detail/${item._id}`}>
                                    <i className="fas fa-info"/> Details
                                </Link>
                                &nbsp;
                                <Link className="btn btn-warning" to={`/edit/${item._id}`}>
                                    <i className="fas fa-edit"/> Edit
                                </Link>
                                &nbsp;
                                <a className="btn btn-danger" onClick={() => this.onDelete(item._id)}>
                                    <i className="far fa-times-circle"/> Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Link to='/add'><button className='btn btn-light'>Add New Announcement</button></Link>
            </div>
        )
    }
}

export default AnnouncementList