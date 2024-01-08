import { reactive } from "vue";

interface Store {
  form: {
    firstname: string | undefined;
    lasname: string | undefined;
    birthdate: string | undefined; //| "YYYY-mm-dd"
    email: Array<{
      type: "business" | "private" | "other" | undefined;
      value: string;
      primary: boolean;
    }>;
    phone: Array<{
      type: "primary" | "mobile" | "business" | "private" | "other" | undefined;
      value: string;
      primary: boolean;
    }>;
    street: string | undefined;
    zip: string | undefined;
    city: string | undefined;
    country: string | undefined;
  };
}

// simple state-management according to vue.js documentation
// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api
export const store: Store = reactive({
  form: {
    firstname: undefined,
    lasname: undefined,
    birthdate: undefined,
    email: [{ type: undefined, value: "", primary: false }],
    phone: [{ type: undefined, value: "", primary: false }],
    street: undefined,
    zip: undefined,
    city: undefined,
    country: undefined,
  },
});
