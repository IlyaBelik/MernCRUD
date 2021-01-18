import React from "react";
import "../styles.css"

const AboutPage = () => {
    return (
        <div className="container">
            <h4>Contact me: </h4>
            <br/>
            <div className="flexbox">
                <a href="https://t.me/wozexy" target="_blank" rel="noopener noreferrer" type="media_type"><i className="fab fa-telegram fa-4x"/></a>
                &nbsp;
                <a href="https://github.com/IlyaBelik/crud-test" target="_blank" rel="noopener noreferrer" type="media_type"><i className="fab fa-github fa-4x"/></a>
                &nbsp;
                <a href="#"type="media_type" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-4x"/></a>
                &nbsp;
                <a href="https://www.linkedin.com/in/ilya-beleykanych-210106202/" type="media_type" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-linkedin-in fa-4x"/></a>
            </div>
        </div>
    )
}

export default AboutPage