import React from "react";
import { shallow, mount, configure } from "enzyme";
import MessageBox from "./MessageBox";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("MessageBox", () => {
  test("renders component itself correctly", () => {
    const renderedComponent = shallow(<MessageBox />);
    expect(renderedComponent).toMatchSnapshot();
  });

  test("renders component props correctly", () => {
    const renderedComponent = mount(<MessageBox text="Hello World" />);
    expect(renderedComponent.props().text).toEqual("Hello World");
  });
});
