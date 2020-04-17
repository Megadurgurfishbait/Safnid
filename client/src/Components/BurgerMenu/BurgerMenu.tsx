import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { RootStoreContext } from "../../App/Stores/rootStore";
import * as BM from "./BurgerMenu.styled";

const List = ["Forsíða", "Fréttir", "Fróðleikur", "Upplýsingar", "English"];

const BurgerMenu: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    Menu: { open },
    toggleMenu
  } = rootStore.MenuStore;

  return (
    <BM.Relative MenuOpen={open}>
      <BM.BackgroundImage />
      <BM.Container>
        <BM.UL>
          {List.map((v, i) => (
            <BM.LI>
              <BM.LineAbove reverse={i % 2 === 0 ? true : false}>
                <BM.Line width={"40"} color={"#ffffff"} />
                <BM.Line width={"25"} color={"#000030"} />
                <BM.Line width={"20"} color={"#ffffff"} />
              </BM.LineAbove>
              <BM.LBL as={Link} to={"/frettir"} onClick={toggleMenu}>
                {v}
              </BM.LBL>
            </BM.LI>
          ))}
        </BM.UL>
      </BM.Container>
    </BM.Relative>
  );
};

export default observer(BurgerMenu);
