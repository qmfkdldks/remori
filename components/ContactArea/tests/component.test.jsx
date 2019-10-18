import React from "react";
import { shallow } from "enzyme";
import ContactArea from "../component";

describe("ContactArea", () => {
  it("renders correctly", () => {
    const tree = shallow(<ContactArea />);
    expect(tree).toMatchSnapshot();
  });
});
