import React from "react";

const PageLink = ({ link = "", className = "", children }) => {
  return (
    <a target="_blank" rel="noreferrer" href={link} className={className}>
      {children}
    </a>
  );
};

export default PageLink;
