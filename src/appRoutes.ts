import BusinessView from "./views/BusinessView.vue";
import NotFound from "./views/NotFound.vue";
import TicketView from "./views/TicketView.vue";

export const routes: any = [
  { path: "/", component: BusinessView, name: "BusinessView" },
  { path: "/TicketView", component: TicketView, name: "TicketView" },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "siteNotFound",
    props: { title: "siteNotFound" },
  },
];
