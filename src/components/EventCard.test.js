import React from "react";
import { shallow, mount, configure } from "enzyme";
import EventCard from "./EventCard";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("EventCard", () => {
  test("renders component itself correctly", () => {
    const renderedComponent = shallow(<EventCard />);
    expect(renderedComponent).toMatchSnapshot();
  });

  test("renders component props correctly", () => {
    const renderedComponent = mount(
      <EventCard country="Germany" city="Berlin" />
    );
    expect(renderedComponent.props().country).toEqual("Germany");
    expect(renderedComponent.props().city).toEqual("Berlin");
  });
});
