import React from "react";

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => (
  <p className="text-base leading-relaxed text-gray-700">{children}</p>
);

export default Paragraph;
