import React from "react";

const Card = ({url, title, release, birth, role}) => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-3">
                <div className="ratio ratio-1x1">
                <img src={url} className="card-img-top" alt={title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{release} | {role} </p>
                    <p className="card-text"><small class="text-body-secondary"> {birth}</small></p>
                </div>
            </div>
        </div>
    );
}

export default Card