//Create i18n instance with options
import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  useScope: "global",
  globalInjection: true,
  allowComposition: true,
  enableLegacy: false,
  locale: "de", // set locale
  fallbackLocale: ["de", "en"], // set fallback locale
  default: "de",
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
  fallbackWarn: false,
});

export default i18n;
