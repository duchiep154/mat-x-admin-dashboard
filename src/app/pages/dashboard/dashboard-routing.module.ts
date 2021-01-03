import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../main/main.module').then(m => m.MainModule),
        data: {
          title: 'Dashboard | Title of website',
          pageTitle: 'Dashboard',
          description: 'Description on page',
        },
      },
      // pages start
      {
        path: 'user-profile',
        loadChildren: () => import('../theme-pages/user-profile/user-profile.module').then(m => m.UserProfileModule),
        data: {
          title: 'User Profile | Title of website',
          pageTitle: 'User Profile',
          description: 'Description on page',
        },
      },
    
      // pages end
      // Components start
      {
        path: 'typography',
        loadChildren: () => import('../components/typography/typography.module').then(m => m.TypographyModule),
        data: {
          title: 'Typography | Title of website',
          pageTitle: 'Typography',
          description: 'Description on page',
        },
      },
      
      {
        path: 'icons',
        loadChildren: () => import('../components/icons/icons.module').then(m => m.IconsModule),
        data: {
          title: 'Icons | Title of website',
          pageTitle: 'Icons',
          description: 'Description on page',
        },
      },
      {
        path: 'tables',
        loadChildren: () => import('../components/tables/tables.module').then(m => m.TablesModule),
        data: {
          title: 'Tables | Title of website',
          pageTitle: 'Tables',
          description: 'Description on page',
        },
      },
      {
        path: 'notifications',
        loadChildren: () => import('../components/notifications/notifications.module').then(m => m.NotificationsModule),
        data: {
          title: 'Notifications | Title of website',
          pageTitle: 'Notifications',
          description: 'Description on page',
        },
      },
      // Components end
      {
        path: 'maps',
        loadChildren: () => import('../maps/maps.module').then(m => m.MapsModule),
        data: {
          title: 'Maps | Title of website',
          pageTitle: 'Maps',
          description: 'Description on page',
        },
      },
      {
        path: "**",
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
