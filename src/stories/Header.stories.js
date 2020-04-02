import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import Header from "../components/Header"

storiesOf("Header", module)
.addDecorator(StoryRouter())
.add ("Header", () =>(<Header class="pageTitle" title="New York Live"/>))