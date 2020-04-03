import React from "react";
import { storiesOf } from "@storybook/react";
import ArticleImage from "./ArticleImage";
import CatImage from "./cat_caviar.jpg";


storiesOf("Image", module)
  .add("Article Image", () => (
    <ArticleImage source={CatImage} class="articleImage" />
  ))
