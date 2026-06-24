import { Routes } from "@angular/router";
import { BasicPage } from "./pages/basic-page/basic-page";
import { SwitchesPage } from "./pages/switches-page/switches-page";
import { DynamicPage } from "./pages/dynamic-page/dynamic-page";

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Básicos',
        component: BasicPage
      },
      {
        path: 'dynamic',
        title: 'Dinámicos',
        component: DynamicPage
      },
      {
        path: 'switches',
        title: 'Switches',
        component: SwitchesPage
      },
      {
        path: '**',
        redirectTo: 'basic'
      },
    ],
  },
]
