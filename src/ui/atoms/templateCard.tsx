import AtomTemplate from "@UI/atoms/lib/AtomTemplate";
import CustomComponent from "@UI/TEST/CustomComponent";
import React from "react";

interface IProps {
  title?: string;
  content?: string;
  thumbnail?: string;
}

export default function TemplateCard({ title, content, thumbnail }: IProps) {
  return (
    <AtomTemplate>
      <h1>lamxan</h1>
      <h5>lamxan</h5>
      <CustomComponent></CustomComponent>
    </AtomTemplate>
  );
}
