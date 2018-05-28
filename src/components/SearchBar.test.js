import React from "react";
import { shallow, mount, configure } from "enzyme";
import SearchBar from "./SearchBar";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SearchBar", () => {
  test("renders component itself correctly", () => {
    const renderedComponent = shallow(<SearchBar />);
    expect(renderedComponent).toMatchSnapshot();
  });

  test("input value is sync state", () => {
    const renderedComponent = mount(<SearchBar />);
    renderedComponent.setState({ name: "Maroon 5" });
    expect(renderedComponent.find("input").props().value).toEqual("Maroon 5");
  });

  test("clear history button exists", () => {
    const renderedComponent = mount(<SearchBar value="Maroon 5" />);
    expect(renderedComponent.find("#clear-history").exists()).toEqual(true);
  });

  test("clear history button is not exist", () => {
    const renderedComponent = mount(<SearchBar />);
    expect(renderedComponent.find("#clear-history").exists()).toEqual(false);
  });

  test("input onChange simulation", () => {
    const renderedComponent = mount(<SearchBar />);
    renderedComponent.setState({ name: "Maroon 5" });
    expect(renderedComponent.find("input").props().value).toEqual("Maroon 5");
    renderedComponent
      .find("input")
      .simulate("change", { target: { value: "Shakira" } });
    expect(renderedComponent.find("input").props().value).toEqual("Shakira");
  });
});
