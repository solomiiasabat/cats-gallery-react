import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  ListItemText,
  Checkbox,
} from "@mui/material";

import {
  getImages,
  getAllBreeds,
  getFilteredImages,
} from "../../../redux/operations";

import { setLimit, setBreedId, setHasBreed } from "../../../redux/slice";

import {
  selectLimit,
  selectAllBreeds,
  selectBreedId,
  selectHasBreed,
} from "../../../redux/selectors";

import { MenuProps } from "./helpers/MenuProps";
import { limitOptions } from "../../../utils/limit-options";

export default function Filters() {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const allBreeds = useSelector(selectAllBreeds);
  const breedId = useSelector(selectBreedId);
  const hasBreed = useSelector(selectHasBreed);

  // Track initial mount
  const isInitialMount = useRef(true);

  // Get all breeds and fetch images with default limit on initial mount
  useEffect(() => {
    dispatch(getAllBreeds());
    if (limit !== undefined && hasBreed !== undefined) {
      dispatch(getImages({ limit, hasBreed }));
    }
  }, []);

  // Fetch new images on the basis of changes in filters
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(getFilteredImages({ limit, breedId, hasBreed }));
    }
  }, [limit, breedId, hasBreed, dispatch]);

  const handleLimitChange = (event) => {
    dispatch(setLimit(event.target.value));
  };

  const handleBreedChange = (event) => {
    const value = event.target.value;

    if (value.includes("all")) {
      dispatch(setBreedId([]));
      dispatch(setHasBreed(true));
    } else if (value.includes("withoutBreed")) {
      dispatch(setBreedId([]));
      dispatch(setHasBreed(false));
    } else {
      dispatch(setBreedId(value));
      dispatch(setHasBreed(true));
    }
  };

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
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
            <MenuItem value="withoutBreed">
              <Checkbox checked={!hasBreed} />
              <ListItemText primary="Without Breed" />
            </MenuItem>
            <MenuItem value="all">
              <Checkbox checked={hasBreed && breedId.length === 0} />
              <ListItemText primary="All" />
            </MenuItem>

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
