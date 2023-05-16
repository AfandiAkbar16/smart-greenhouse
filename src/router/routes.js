const routes = [
  {
    path: "/",
    component: () => import("layouts/GuestLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      {
        path: "product",
        name: "product",
        component: () => import("pages/IndexProduct.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
