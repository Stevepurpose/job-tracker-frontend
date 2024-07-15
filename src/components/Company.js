import React from "react";


function Company({ company, onDelete, onEdit }) {

    return (
        <div className="company-container">
            <p className="company-display">{company.company_name}</p>
            <p className="company-display">{company.role}</p>
            <p className="company-display">{company.applied}</p>
            <p className="company-display">{company.Discussions}</p>
            <p className="company-display">{company.offer}</p>
            <p className="company-date">{company.advert_start}</p>
            <p className="company-date">{company.close_date}</p>
            <div className="companies-updates">
            <button className="delete-button" onClick={() => onDelete(company.id)}>
                Delete
            </button>
            <button className="update-button" onClick={() => onEdit(company)}>

                Edit
            </button>
            </div>
        </div>
    );
}

export default Company
