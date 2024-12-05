import PropTypes from "prop-types";
import React from "react";

export const Card = (props) => {
    return (
        <div className="container-fluid" style={{ justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }}>
            <div className="row g-4"> 
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="card" style={{ width: '100%' }}>
                        <img className="card-img-top" src="https://image.winudf.com/v2/image/azdkZXZzLmltZ2RpdmVydGlkYXMuY29tLmltYWdlbmVzZGl2ZXJ0aWRhc19zY3JlZW5zaG90c183X2MxMDA1Njdh/screen-7.jpg?fakeurl=1&type=.jpg" alt={props.imgAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <a href={props.link} className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3"> 
                    <div className="card" style={{ width: '100%' }}>
                        <img className="card-img-top" src="https://static.vecteezy.com/system/resources/thumbnails/006/737/316/small_2x/astronaut-floating-in-space-cartoon-icon-illustration-space-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" alt={props.imgAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <a href={props.link} className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3"> 
                    <div className="card" style={{ width: '100%' }}>
                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZ6Vw-Br-RRvMstTlTqbeGXw4PNepXRrTzg&s" alt={props.imgAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <a href={props.link} className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="card" style={{ width: '100%' }}>
                        <img className="card-img-top" src="https://avatarfiles.alphacoders.com/374/374701.png" alt={props.imgAlt} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <a href={props.link} className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    link: PropTypes.string
};

Card.defaultProps = {
    title: "Titulo",
    text: "Mucho texto para que la card salga un poco más grande y no tenga una forma rara",
    imgSrc: "...",
    imgAlt: "Card image",
    link: "#"
};
