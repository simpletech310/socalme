export interface Location {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  phoneHref: string;
}

export const locations: Location[] = [
  {
    name: "Colton",
    address: "1131 S Mt Vernon Ave",
    city: "Colton",
    state: "CA",
    zip: "92324",
    phone: "(909) 422-1155",
    phoneHref: "tel:+19094221155",
  },
  {
    name: "Hemet",
    address: "1161 S State St",
    city: "Hemet",
    state: "CA",
    zip: "92543",
    phone: "(951) 925-9511",
    phoneHref: "tel:+19519259511",
  },
  {
    name: "Moreno Valley",
    address: "12225 Heacock St, Suite 7",
    city: "Moreno Valley",
    state: "CA",
    zip: "92557",
    phone: "(951) 243-0412",
    phoneHref: "tel:+19512430412",
  },
  {
    name: "Norco",
    address: "1709 Hamner Ave",
    city: "Norco",
    state: "CA",
    zip: "92860",
    phone: "(951) 520-1849",
    phoneHref: "tel:+19515201849",
  },
  {
    name: "Redlands",
    address: "1450 Barton Rd",
    city: "Redlands",
    state: "CA",
    zip: "92373",
    phone: "(909) 478-6868",
    phoneHref: "tel:+19094786868",
  },
  {
    name: "Riverside",
    address: "6235 Riverside Ave",
    city: "Riverside",
    state: "CA",
    zip: "92506",
    phone: "(951) 530-2099",
    phoneHref: "tel:+19515302099",
  },
  {
    name: "Yucaipa",
    address: "34494 Yucaipa Blvd",
    city: "Yucaipa",
    state: "CA",
    zip: "92399",
    phone: "(909) 797-4848",
    phoneHref: "tel:+19097974848",
  },
];

export const hours = {
  days: "Monday - Sunday",
  time: "9:00 AM - 8:30 PM",
};
