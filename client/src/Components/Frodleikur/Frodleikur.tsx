import React, { useState } from "react";
import * as FL from "./Frodleikur.styled";
import * as U from "./Undirsidur";

const panes = [
  {
    menuItem: ["Um Safnið"],
    render: () => (
      <FL.TabPane>
        <U.UmSafnid />
      </FL.TabPane>
    )
  },
  {
    menuItem: "Velunnarar",
    render: () => (
      <FL.TabPane>
        <U.Velunnarar />
      </FL.TabPane>
    )
  },
  {
    menuItem: "Stuttmyndir",
    render: () => (
      <FL.TabPane>
        <U.Stuttmyndir />
      </FL.TabPane>
    )
  },
  {
    menuItem: "Ársskýrslur",
    render: () => (
      <FL.TabPane>
        <U.ArsSkyrslur />
      </FL.TabPane>
    )
  },
  {
    menuItem: "Mjólkurskólinn",
    render: () => (
      <FL.TabPane>
        <U.Mjolkurskolinn />
      </FL.TabPane>
    )
  },
  {
    menuItem: "Um Hvanneyri",
    render: () => (
      <FL.TabPane>
        <U.Hvanneyri />
      </FL.TabPane>
    )
  },
  {
    menuItem: "Vefrit",
    render: () => (
      <FL.TabPane>
        <U.Vefrit />
      </FL.TabPane>
    )
  }
];

export const Frodleikur = () => {
  const [title, setTitle] = useState();

  const handleChange = ({ currentTarget }: any) => {
    setTitle(currentTarget.text);
  };

  return (
    <FL.Layout>
      <FL.Segment>
        <h1>{title || "Um Safnið"}</h1>
      </FL.Segment>
      <FL.Tab
        menu={{ fluid: true, vertical: true }}
        menuPosition="right"
        panes={panes}
        onTabChange={handleChange}
      />
    </FL.Layout>
  );
};
