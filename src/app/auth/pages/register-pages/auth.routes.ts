import { Routes } from "@angular/router";
import { RegisterPages } from "./register-pages";

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: RegisterPages
      },
      {
        path: '**',
        redirectTo: 'register'
      },
    ],
  },
];

export default authRoutes;
