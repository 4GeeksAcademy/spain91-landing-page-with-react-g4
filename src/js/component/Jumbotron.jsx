import PropTypes from "prop-types";
import React from "react";

export const Jumbotron = () =>{
    return(
        <div className="p-5 text-center bg-body-tertiary rounded-3">
            <h1 className="text-body-emphasis">A Warm Welcome!</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="d-inline-flex gap-2 mb-5">
                <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4" type="button">
                    Call to action!</button>               
            </div>
        </div>
    )
}


