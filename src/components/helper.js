import fireIcon from "../assets/images/pubs.svg";
import packed from "../assets/images/packed.svg";
import busy from "../assets/images/busy.svg";
import calm from "../assets/images/calm.svg";
import dead from "../assets/images/dead.svg";
import pubs from "../assets/images/pubs.svg";
import bars from "../assets/images/bars.svg";
import lounges from "../assets/images/lounges.svg";
import clubs from "../assets/images/clubs.svg";
import walkable from "../assets/images/walkable.svg";
import nearby from "../assets/images/nearby.svg";
import cityWide from "../assets/images/city-wide.svg";
import noLimit from "../assets/images/no-limit.svg";
import cheap from "../assets/images/cheap.svg";
import average from "../assets/images/average.svg";
import expensive from "../assets/images/expensive.svg";
import luxury from "../assets/images/luxury.svg";
import axios from "axios";

export const handlePriceRange = (body, option) => {
  const selected = option.filter((value) => value.isSelected == true).length;
  if (selected > 1) {
    let filterTerm = [];
    option.map((value, index) => {
      if (value.isSelected) {
        filterTerm.push(value.filterTerm);
      }
    });
    body.push({
      filterTerm: filterTerm.join(),
      filterBy: "PriceRange",
      filterType: "MULTICONTAINS",
    });
  } else {
    option.map((value, index) => {
      if (value.isSelected) {
        body.push({
          filterTerm: value.filterTerm,
          filterBy: value.filterBy,
          filterType: value.filterType,
        });
      }
    });
  }
};

export const handlePlaceType = (body, option) => {
  const selected = option.filter((value) => value.isSelected == true).length;
  if (selected > 1) {
    let filterTerm = [];
    option.map((value, index) => {
      if (value.isSelected) {
        filterTerm.push(value.filterTerm);
      }
    });
    body.push({
      filterTerm: filterTerm.join(),
      filterBy: "PlaceType",
      filterType: "MULTICONTAINS",
    });
  } else {
    option.map((value, index) => {
      if (value.isSelected) {
        body.push({
          filterTerm: value.filterTerm,
          filterBy: value.filterBy,
          filterType: value.filterType,
        });
      }
    });
  }
};

export const handleCrowd = (body, option) => {
  option.map((value, index) => {
    if (value.isSelected) {
      body.push(...value.reqBody);
    }
  });
};

export function distance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
}

const handleSortOption = (option) => {
  switch (option) {
    case "Default":
      return {
        sortBy: "CurrentPopularity",
        sortDirection: "desc",
      };
      break;
    case "Busiest":
      return {
        sortBy: "CurrentPopularity",
        sortDirection: "desc",
      };
      break;
    case "Distance":
      return {
        sortBy: "Distance",
        sortDirection: "asc",
      };
      break;
    case "MostReviewed":
      return {
        sortBy: "Rating_n",
        sortDirection: "desc",
      };
      break;
    case "TopRate":
      return {
        sortBy: "Rating",
        sortDirection: "desc",
      };
      break;
  }
};

export function handlePlaces({
  cityId,
  optionData,
  setPlaces,
  location,
  sortOption,
  setIsLoading,
}) {
  let requestBody = {
    filterInfo: [
      {
        filterTerm: cityId,
        filterBy: "cityId",
        filterType: "EQUALS",
      },
    ],
    sortInfo: [handleSortOption(sortOption)],
    pageNo: 0,
    pageSize: 50,
  };
  handleCrowd(requestBody.filterInfo, optionData[0].options);
  handlePlaceType(requestBody.filterInfo, optionData[2].options);
  handlePriceRange(requestBody.filterInfo, optionData[3].options);
  axios
    .post("https://scouterextraction001.azurewebsites.net/api/v1/Place/List", requestBody)
    .then((res) => {
      let places = [];
      res.data.data.map((place, index) => {
        place.distance = distance(
          location.latitude,
          location.longitude,
          place.Latitude,
          place.Longitude
        );
      });

      setPlaces(res.data.data);
      setIsLoading(false);
    });
}

export const scouterOptionData = [
  {
    description: "Ok Step 1. What kind of crowd intensity are you looking for?",
    heading: "Set your desired energy levels",
    options: [
      {
        image: packed,
        text: "Packed",
        isSelected: false,
        type: "CrowdIntensity",
        reqBody: [
          {
            filterTerm: 84,
            filterBy: "CurrentPopularity",
            filterType: "GREATER",
          },
        ],
      },
      {
        image: busy,
        text: "Busy",
        isSelected: true,
        type: "CrowdIntensity",
        reqBody: [
          {
            filterTerm: 85,
            filterBy: "CurrentPopularity",
            filterType: "LESSER",
          },
          {
            filterTerm: 50,
            filterBy: "CurrentPopularity",
            filterType: "GREATER",
          },
        ],
      },
      {
        image: calm,
        text: "Calm",
        isSelected: false,
        type: "CrowdIntensity",
        reqBody: [
          {
            filterTerm: 51,
            filterBy: "CurrentPopularity",
            filterType: "LESSER",
          },
          {
            filterTerm: 24,
            filterBy: "CurrentPopularity",
            filterType: "GREATER",
          },
        ],
      },
      {
        image: dead,
        text: "Dead",
        isSelected: false,
        type: "CrowdIntensity",
        reqBody: [
          {
            filterTerm: 25,
            filterBy: "CurrentPopularity",
            filterType: "LESSER",
          },
          {
            filterTerm: 1,
            filterBy: "CurrentPopularity",
            filterType: "GREATER",
          },
        ],
      },
    ],
  },
  {
    description: "Cool, now Step 2. What type of places are you looking for?",
    heading: "Explore different types of venues",
    options: [
      {
        image: pubs,
        text: "Pubs",
        isSelected: true,
        type: "Distance",
      },
      {
        image: bars,
        text: "Bars",
        isSelected: true,
        type: "Distance",
      },
      {
        image: lounges,
        text: "Lounges",
        isSelected: false,
        type: "Distance",
      },
      {
        image: clubs,
        text: "Clubs",
        isSelected: false,
        type: "Distance",
      },
    ],
  },
  {
    description: "Nice! On to Step 3. How far are you willing to travel?",
    heading: "Determine your travel range",
    options: [
      {
        image: walkable,
        text: "Walkable",
        isSelected: true,
        type: "PlacesType",
        filterTerm: "pub",
        filterBy: "PlaceType",
        filterType: "MULTICONTAINS",
      },
      {
        image: nearby,
        text: "Nearby",
        isSelected: true,
        type: "PlacesType",
        filterTerm: "bar",
        filterBy: "PlaceType",
        filterType: "MULTICONTAINS",
      },
      {
        image: cityWide,
        text: "City Wide",
        isSelected: false,
        type: "PlacesType",
        filterTerm: "lounge",
        filterBy: "PlaceType",
        filterType: "MULTICONTAINS",
      },
      {
        image: noLimit,
        text: "No Limit",
        isSelected: false,
        type: "PlacesType",
        filterTerm: "club",
        filterBy: "PlaceType",
        filterType: "MULTICONTAINS",
      },
    ],
  },
  {
    description: "Almost there. Step 4. Are you on a budget?",
    heading: "Balance you expenses",
    options: [
      {
        image: cheap,
        text: "Cheap",
        isSelected: true,
        type: "PriceRange",
        filterTerm: "$",
        filterBy: "PriceRange",
        filterType: "MULTICONTAINS",
      },
      {
        image: average,
        text: "Average",
        isSelected: true,
        type: "PriceRange",
        filterTerm: "$$",
        filterBy: "PriceRange",
        filterType: "MULTICONTAINS",
      },
      {
        image: expensive,
        text: "Expensive",
        isSelected: false,
        type: "PriceRange",
        filterTerm: "$$$",
        filterBy: "PriceRange",
        filterType: "MULTICONTAINS",
      },
      {
        image: luxury,
        text: "Luxury",
        isSelected: false,
        type: "PriceRange",
        filterTerm: "$$$$",
        filterBy: "PriceRange",
        filterType: "MULTICONTAINS",
      },
    ],
  },
];
