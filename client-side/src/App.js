import React, {Component} from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import AnnouncementList from "./components/AnnouncementList";
import DetailPage from "./components/DetailPage";
import EditAnnouncement from "./components/EditAnnouncement";
import AddAnnouncement from "./components/AddAnnouncement";
import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import "./styles.css"


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Header/>
                    <Route path='/' exact component={AnnouncementList}/>
                    <Route path='/announcements/detail/:id' exact component={DetailPage}/>
                    <Route path='/edit/:id' component={EditAnnouncement}/>
                    <Route path='/add' component={AddAnnouncement}/>
                    <Route path='/about' component={AboutPage}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
