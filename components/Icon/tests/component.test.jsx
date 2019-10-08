import React from "react";
import { shallow } from "enzyme";
import Icon from "../component";

describe("Icon", () => {
  it("renders correctly", () => {
    const tree = shallow(<Icon name="Layout" size={50} />);
    expect(tree).toMatchSnapshot();
  });
});
