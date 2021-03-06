import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";

const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`
    },
    title: `1Beautiful & luxurious studio at great location`,
    premium: false,
    type: `apartment`,
    price: 20,
    rating: 4,
    image: ``,
    images: [],
    goods: [],
    host: {
      avatar: ``,
      name: ``
    }

  }, {
    id: 1,
    city: {
      name: `Amsterdam`
    },
    title: `2Beautiful & luxurious studio at great location`,
    premium: false,
    type: `room`,
    price: 70,
    rating: 4,
    image: ``,
    images: [],
    goods: [],
    host: {
      avatar: ``,
      name: ``
    }
  }
];

jest.mock(`../map/map`, () => `Map`);
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../list-cities/list-cities`, () => `ListCities`);
jest.mock(`../cities-places/cities-places`, () => `CitiesPlaces`);


it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          onOfferClick={() => {}}
          offers={offers}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
