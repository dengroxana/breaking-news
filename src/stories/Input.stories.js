import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";
import SearchIcon from "./search-icon.png"


storiesOf("Input", module)
  .add("Search Bar", () => (
    <Input class="inputField" placeholder="Search Articles" type="text" buttonType="submit" buttonClass="searchIcon" source={SearchIcon}/>
  ))
