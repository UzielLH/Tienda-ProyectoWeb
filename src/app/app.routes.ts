import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarproductoComponent } from './pages/registrarproducto/registrarproducto.component';
import { RegistrarventaComponent } from './pages/registrarventa/registrarventa.component';
import { VerproductosComponent } from './pages/verproductos/verproductos.component';
import { VerventasComponent } from './pages/verventas/verventas.component';
import { RegistroerrorventaComponent } from './pages/registroerrorventa/registroerrorventa.component';
import { RegistroerrorproductoComponent } from './pages/registroerrorproducto/registroerrorproducto.component';
import { RegistroexitosoventaComponent } from './pages/registroexitosoventa/registroexitosoventa.component';
import { RegistroexitosoproductoComponent } from './pages/registroexitosoproducto/registroexitosoproducto.component';
import { ActualizarProductoComponent } from './pages/actualizar-producto/actualizar-producto.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'registrarproducto',
        component: RegistrarproductoComponent
    },
    {
        path: 'registrarventa',
        component: RegistrarventaComponent
    },
    {
        path: 'verproductos',
        component: VerproductosComponent
    },
    {
        path: 'verventas',
        component: VerventasComponent
    },
    {
        path: 'registroerrorventa',
        component: RegistroerrorventaComponent
    },
    {
        path: 'registroerrorproducto',
        component: RegistroerrorproductoComponent
    },
    {
        path: 'registroexitosoventa',
        component: RegistroexitosoventaComponent
    },
    {
        path: 'registroexitosoproducto',
        component: RegistroexitosoproductoComponent
    },
    {
        path: 'actualizarproducto/:id',  // Agregar el parámetro 'id'
        component: ActualizarProductoComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'**',
        redirectTo: 'home',
        pathMatch: 'full'  // Redirects to the home page if the entered path doesn't match any of the routes defined above.
    }
];
