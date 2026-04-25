import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";

const enhancer = devToolsEnhancer()
export const store = createStore(enhancer)