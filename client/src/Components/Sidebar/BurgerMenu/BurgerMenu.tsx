import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import * as BM from "./BurgerMenu.styled";
import { RootStoreContext } from "../../../App/Stores/rootStore";
import { Colors as C } from "../../../App/Styles/";

const BurgerMenu = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    toggleMenu,
    Menu: { open }
  } = rootStore.MenuStore;

  return (
    <BM.Container>
      <BM.CustomButton onClick={toggleMenu}>
        <BM.LineContainer>
          <BM.RowTop open={open}>
            <BM.Line open={open} lineWidth={"30"} color={C.BROWN} />
            <BM.LineWhite open={open} lineWidth={"60"} color={"white"} />
          </BM.RowTop>
          <BM.RowHide open={open}>
            <BM.LineWhite lineWidth={"60"} color={"white"} />
            <BM.Line lineWidth={"30"} color={C.BLACK} />
          </BM.RowHide>
          <BM.RowBottom open={open}>
            <BM.LineWhite open={open} lineWidth={"20"} color={"white"} />
            <BM.Line open={open} lineWidth={"70"} color={C.BROWN} />
          </BM.RowBottom>
        </BM.LineContainer>
      </BM.CustomButton>
    </BM.Container>
  );
};

export default observer(BurgerMenu);
