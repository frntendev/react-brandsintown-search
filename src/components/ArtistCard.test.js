import React from "react";
import { shallow, mount, configure } from "enzyme";
import ArtistCard from "./ArtistCard";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("ArtistCard", () => {
  test("renders component itself correctly", () => {
    const renderedComponent = shallow(
      <ArtistCard
        id="3"
        image="https://s3.amazonaws.com/bit-photos/large/8518614.jpeg"
        detailsInfo={["name", "family"]}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  test("renders component props correctly", () => {
    const renderedComponent = mount(
      <ArtistCard
        id="3"
        image="https://s3.amazonaws.com/bit-photos/large/8518614.jpeg"
        detailsInfo={["name", "family"]}
      />
    );
    expect(renderedComponent.props().id).toEqual("3");
    expect(renderedComponent.props().image).toEqual(
      "https://s3.amazonaws.com/bit-photos/large/8518614.jpeg"
    );
    expect(renderedComponent.props().detailsInfo).toEqual(["name", "family"]);
  });

  test("Close Icon exists", () => {
    const renderedComponent = mount(
      <ArtistCard
        showClose
        id="3"
        image="https://s3.amazonaws.com/bit-photos/large/8518614.jpeg"
        detailsInfo={["name", "family"]}
      />
    );
    expect(renderedComponent.find("svg").exists()).toEqual(true);
  });

  test("Close Icon is not exist", () => {
    const renderedComponent = mount(
      <ArtistCard
        id="3"
        image="https://s3.amazonaws.com/bit-photos/large/8518614.jpeg"
        detailsInfo={["name", "family"]}
      />
    );
    expect(renderedComponent.find("svg").exists()).toEqual(false);
  });
});
