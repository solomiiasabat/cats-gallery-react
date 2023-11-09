import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import {
  getImages,
  getAllBreeds,
  getFilteredImages,
} from "../redux/operations";
import { setLimit, setBreedId } from "../redux/slice";
import {
  selectLimit,
  selectAllBreeds,
  selectBreedId,
} from "../redux/selectors";

import { limitOptions } from "../utils/limit-options";

export default function Filters() {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const allBreeds = useSelector(selectAllBreeds);
  const breedId = useSelector(selectBreedId);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  useEffect(() => {
    dispatch(getImages(limit));
  }, []);

  useEffect(() => {
    dispatch(getAllBreeds());
  }, []);

  useEffect(() => {
    dispatch(getFilteredImages({ limit, breedId }));
  }, [limit, breedId, dispatch]);

  const handleLimitChange = (event) => {
    dispatch(setLimit(event.target.value));
  };

  const handleBreedChange = (event) => {
    const value = event.target.value;
    dispatch(setBreedId(typeof value === "string" ? value.split(",") : value));
  };

  return (
    <>
      <div>
        <FormControl l sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-simple-select-label">Limit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={limit}
            label="Limit"
            onChange={handleLimitChange}
          >
            {limitOptions.map((number) => {
              return (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Breeds</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={breedId}
            onChange={handleBreedChange}
            input={<OutlinedInput label="Breeds" />}
            renderValue={(selected) =>
              allBreeds
                .filter((breed) => selected.includes(breed.id))
                .map((breed) => breed.name)
                .join(", ")
            }
            MenuProps={MenuProps}
          >
            {allBreeds.map((breed) => (
              <MenuItem key={breed.id} value={breed.id}>
                <Checkbox checked={breedId.indexOf(breed.id) > -1} />
                <ListItemText primary={breed.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
