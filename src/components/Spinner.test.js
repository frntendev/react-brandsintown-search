import React from "react";
import { shallow, mount, configure } from "enzyme";
import Spinner from "./Spinner";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Spinner", () => {
  test("renders component itself correctly", () => {
    const renderedComponent = shallow(<Spinner />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
