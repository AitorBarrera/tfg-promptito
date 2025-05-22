import { IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import React, { useState } from "react";
import type { PromptFavouriteButtonProps } from "~/interfaces";
import { addFavourite, removeFavourite } from "~/services/Promptito_API";

export const PromptFavouriteButton = ({
  idCurrentUser,
  idPrompt,
  initialNumberFavourites,
  inFavourites,
  setFavourites,
}: PromptFavouriteButtonProps) => {
  const handleClickButton = () => {
    if (inFavourites) {
      removeFavourite(idCurrentUser ?? 0, idPrompt);
    } else {
      addFavourite(idCurrentUser ?? 0, idPrompt);
    }

    setFavourites((prev) => !prev);
  };

  return (
    <div className="flex items-center text-end">
      <IconButton aria-label="star" color="primary" onClick={handleClickButton}>
        {inFavourites ? <StarIcon /> : <StarBorderIcon />}
      </IconButton>
      <span>{initialNumberFavourites + (inFavourites ? 1 : 0)}</span>
    </div>
  );
};
