import React, {Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

class SimilarAnnouncements extends Component{
    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
        }
    }
    //
    // filterContent(announcements, searchTerm){
    //     const result = announcements.filter((announcements) =>
    //         announcements.title.toLowerCase().includes(searchTerm))
    //     this.setState({announcements:result})
    // }
    //
    // handleSimilarAnnouncements = e => {
    //     const searchTerm = e.value
    //     axios.get('http://localhost:5000/announcements').then(res => {
    //         if (res.data.success) {
    //             this.filterContent(res.data.announcements, searchTerm)
    //         }
    //     })
    // }

    render() {
        return(
            <table className="table table-success table-striped">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                </tr>
                </thead>
                <tbody>
                {this.state.announcements.map && this.state.announcements.map((item) => (
                    <tr>
                        <td>
                            <th scope="row">{item.title}</th>
                        </td>
                        <td>
                            <Link className="btn btn-info" to={`/announcements/detail/${item._id}`}>
                                <i className="fas fa-info"/> Details
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}

export default SimilarAnnouncements

