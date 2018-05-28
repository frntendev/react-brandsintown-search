import React from "react";
import { shallow, mount, configure } from "enzyme";
import ArtistDetails from "./ArtistDetails";
import Adapter from "enzyme-adapter-react-16";
import EventCard from "./EventCard";
configure({ adapter: new Adapter() });

const initEvents = [
  {
    id: "21262663",
    artist_id: "90",
    url:
      "https://www.bandsintown.com/e/21262663?app_id=sd40fhp3731&came_from=267",
    on_sale_datetime: "2018-01-23T09:00:00",
    datetime: "2018-06-03T19:00:00",
    description: "",
    venue: {
      name: "Barclaycard Arena",
      latitude: "53.589234",
      longitude: "9.899232",
      city: "Hamburg",
      region: "04",
      country: "Germany"
    },
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/21262663?app_id=sd40fhp3731&came_from=267",
        status: "available"
      }
    ],
    lineup: ["Shakira"]
  },
  {
    id: "19009960",
    artist_id: "90",
    url:
      "https://www.bandsintown.com/e/19009960?app_id=sd40fhp3731&came_from=267",
    on_sale_datetime: "2017-06-28T08:00:00",
    datetime: "2018-06-05T19:00:00",
    description: "Rescheduled from 8 Nov 2017",
    venue: {
      name: "LANXESS Arena",
      latitude: "50.9333333",
      longitude: "6.95",
      city: "Koln",
      region: "07",
      country: "Germany"
    },
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/19009960?app_id=sd40fhp3731&came_from=267",
        status: "available"
      },
      {
        type: "VIP",
        url:
          "https://www.bandsintown.com/t/19009960?app_id=sd40fhp3731&came_from=267&custom=true",
        status: "available"
      }
    ],
    lineup: ["Shakira"]
  },
  {
    id: "19002149",
    artist_id: "90",
    url:
      "https://www.bandsintown.com/e/19002149?app_id=sd40fhp3731&came_from=267",
    on_sale_datetime: "",
    datetime: "2018-06-07T19:00:00",
    description: "Rescheduled from 12 Nov 2017",
    venue: {
      name: "Sportpaleis",
      latitude: "51.2301",
      longitude: "4.44156",
      city: "Merksem (Antwerpen)",
      region: "",
      country: "Belgium"
    },
    offers: [
      {
        type: "Tickets",
        url:
          "https://www.bandsintown.com/t/19002149?app_id=sd40fhp3731&came_from=267",
        status: "available"
      },
      {
        type: "VIP",
        url:
          "https://www.bandsintown.com/t/19002149?app_id=sd40fhp3731&came_from=267&custom=true",
        status: "available"
      }
    ],
    lineup: ["Shakira"]
  }
];
const initArtist = {
  id: "90",
  name: "Shakira",
  url: "https://www.bandsintown.com/a/90?came_from=267&app_id=sd40fhp3731",
  image_url: "https://s3.amazonaws.com/bit-photos/large/8518614.jpeg",
  thumb_url: "https://s3.amazonaws.com/bit-photos/thumb/8518614.jpeg",
  facebook_page_url: "https://www.facebook.com/shakira",
  mbid: "726cb350-d775-4e07-b006-898555f24b0d",
  tracker_count: 2728738,
  upcoming_event_count: 53
};
describe("ArtistDetails", () => {
  test("renders component itself correctly", () => {
    const renderedComponent = shallow(
      <ArtistDetails data={{ artist: {}, event: {} }} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  test("renders component ArtistCard", () => {
    const renderedComponent = mount(<ArtistDetails data={{ artist: {} }} />);
    expect(renderedComponent.find("#artist-card").exists()).toEqual(true);
  });

  test("doesn't render component ArtistCard", () => {
    const renderedComponent = mount(<ArtistDetails data={{ event: {} }} />);
    expect(renderedComponent.find("#artist-card").exists()).toEqual(false);
  });

  test("render component Events", () => {
    const renderedComponent = shallow(
      <ArtistDetails
        data={{
          artist: initArtist,
          events: initEvents
        }}
      />
    );
    expect(renderedComponent.find(EventCard)).toHaveLength(3);
  });
});
