import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

export default class MenuStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable Menu = {
    open: false
  };

  @action openMenu = () => {
    this.Menu.open = true;
  };
  @action closeMenu = () => {
    this.Menu.open = false;
  };

  @action toggleMenu = () => {
    console.log(this.Menu.open);
    this.Menu.open = !this.Menu.open;
  };
}
