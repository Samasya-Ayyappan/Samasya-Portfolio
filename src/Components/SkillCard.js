import React from "react";

const SkillCard = ({ image, name }) => {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-4">
            <div className="skill-card">
                <img
                    src={image}
                    alt={name}
                    className="skill-icon"
                />

                <h6 className="skill-name">
                    {name}
                </h6>
            </div>
        </div>
    );
};

export default SkillCard;