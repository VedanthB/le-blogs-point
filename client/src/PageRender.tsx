import React from "react";
import { useParams } from "react-router-dom";
import { IParams } from "./utils/Typescript";
import NotFound from "./components/global/NotFound";

const generatePage = (name: string) => {
  const component = () => require(`./pages/${name}`).default;

  try {
    // Create and return a new React element of the given type. The type argument can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type.
    return React.createElement(component());
  } catch (error) {
    return <NotFound />;
  }
};

const PageRender = () => {
  const { page, slug }: IParams = useParams();

  let name = "";

  if (page) {
    name = slug ? `${page}/[slug]` : `${page}`;
  }

  return generatePage(name);
};

export default PageRender;
