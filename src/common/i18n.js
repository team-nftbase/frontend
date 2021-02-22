import {
  init,
  addMessages,
  getLocaleFromNavigator,
  isLoading,
} from "svelte-i18n";

import en from "./locale/en.json";
import cn from "./locale/cn.json";
import kr from "./locale/kr.json";

export const initI18n = () => {
  addMessages("en", en);
  addMessages("cn", cn);
  addMessages("kr", kr);

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
}
