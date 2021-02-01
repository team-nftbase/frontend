import {
  init,
  addMessages,
  getLocaleFromNavigator,
  isLoading,
} from "svelte-i18n";

import en from "./locale/en.json";
import kr from "./locale/kr.json";

export const initI18n = () => {
  addMessages("en", en);
  addMessages("kr", kr);

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
}
