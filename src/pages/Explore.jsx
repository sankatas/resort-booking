import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { fetchingHotelListByRegion } from "../redux/services";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Explore = () => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const dispatch = useDispatch();
  const { hotelListByRegion } = useSelector((state) => state.hotel);

  useEffect(() => {
    dispatch(fetchingHotelListByRegion());
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const filteredResorts = hotelListByRegion.filter((item) => {
    return item.resortName.toLowerCase().includes(searchField.toLowerCase());
  });

  console.log(filteredResorts);

  console.log(hotelListByRegion, "resorts");

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
        />
      </Search>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          columnGap: "10px",
          marginTop: "100px",
          marginBottom: "auto",
          height: "100%",
        }}
      >
        {searchShow
          ? filteredResorts.length > 0 &&
            filteredResorts.map((resort) => {
              return <ProductCard info={resort} />;
            })
          : hotelListByRegion.length &&
            hotelListByRegion.map((resort) => {
              return <ProductCard info={resort} />;
            })}
      </div>
    </>
  );
};

export default Explore;
