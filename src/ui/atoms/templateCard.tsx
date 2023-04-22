import AtomTemplate from "@UI/atoms/Atom";
import React from "react";

interface IProps {
  title?: string;
  content?: string;
  thumbnail?: string;
}

export default function TemplateCard({ title, content, thumbnail }: IProps) {
  return (
    <AtomTemplate>
      <p> Hi, I am an Atom.</p>
    </AtomTemplate>
  );
}
