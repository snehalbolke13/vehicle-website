import React from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
};

const Heading = ({ level = 1, children }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`text-${level}xl font-bold`}>{children}</Tag>;
};

export default Heading;
