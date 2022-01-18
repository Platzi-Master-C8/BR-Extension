import React from "react";
import "./VacancyItem.scss";
import Delete from "Assets/icons/delete.svg";
import FilledHeart from "Assets/icons/filled-heart.svg";
import UnfilledHeart from "Assets/icons/unfilled-heart.svg";
import Phone from "Assets/icons/phone.svg";
import Share from "Assets/icons/share.svg";
import { IconButton, Typography } from "@mui/material";

function VacancyItem(props) {
  const { vacancy, deleteVacancyAction } = props;

  
  return (
    <div className="vacancyItem-container">
      <div className="vacancyItem-status">{vacancy.status}</div>
      <div className="vacancyItem-favorite">
        <img
          src={vacancy.isFavorite ? FilledHeart : UnfilledHeart}
          alt="Contact"
        />
      </div>
      <div className="vacancyItem-content">
        <Typography>{vacancy.title}</Typography>
        <div>
          <img src={Phone} alt="Contact" />
        </div>
        <div>
          <img src={Share} alt="Share" />
        </div>
        <div>
          <IconButton aria-label="delete vacancy" onClick={()=> {deleteVacancyAction(vacancy.id)}}>
            <img src={Delete} alt="Delete" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default VacancyItem;
