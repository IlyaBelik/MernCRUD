import React, {Component} from 'react'
import axios from "axios";
import SimilarAnnouncements from "./SimilarAnnouncements";



class DetailPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            announcements: {},
        }
    }

    componentDidMount() {
            const id = this.props.match.params.id
            axios.get(`http://localhost:5000/announcements/detail/${id}`).then((res) => {
                if(res.data.success){
                    this.setState({
                        announcements: res.data.announcements,
                    })
                    console.log("announcement: ", this.state.announcements)
                }
            })
        }



    render() {
        const {title, description, announcementDate} = this.state.announcements
        return(
            <div>
            <div>
                <h4>{title}</h4>
                <hr/>
                <dl className="row">
                    <dt className="col-sm-3">Description</dt>
                    <dd className="col-sm-9" dangerouslySetInnerHTML={{__html:description}} />

                    <dt className="col-sm-3">Date</dt>
                    <dd className="col-sm-9">{announcementDate}</dd></dl>
            </div>
                <h4>Top 3 similar announcements</h4>
                <SimilarAnnouncements/>
            </div>
        )
    }
}

export default DetailPage