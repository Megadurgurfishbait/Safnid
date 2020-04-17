import { createContext } from "react";
import { configure } from "mobx";
import NewsStore from "./NewsStore";
import MenuStore from "./MenuStore";

configure({ enforceActions: "always" });

export class RootStore {
  NewsStore: NewsStore;
  MenuStore: MenuStore;

  constructor() {
    this.NewsStore = new NewsStore(this);
    this.MenuStore = new MenuStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
