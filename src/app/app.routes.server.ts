import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'customer/menu/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'customer/track-order/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'tracking/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
