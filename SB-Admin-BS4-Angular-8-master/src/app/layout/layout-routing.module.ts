import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'employee', loadChildren: () => import('../emp/emp.module').then(m => m.EmpModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'emp-type', loadChildren: () => import('../emptype/emptype.module').then(m => m.EmptypeModule)},
            {path:'patient',loadChildren:() => import('../patient/patient.module').then(m => m.PatientModule)},
            {path:'rooms-type',loadChildren:() => import('../roomstype/roomstype.module').then(m => m.RoomstypeModule)},
            {path:'rooms',loadChildren:() => import('../rooms/rooms.module').then(m => m.RoomsModule)},
            {path:'labs',loadChildren:() => import('../labs/labs.module').then(m => m.LabsModule)},
            {path:'labrates',loadChildren:() => import('../labsrates/labsrates.module').then(m => m.LabsratesModule)},
            {path:'units',loadChildren:() => import('../units/units.module').then(m => m.UnitsModule)},
            {path:'service',loadChildren:() => import('../serviceunit/serviceunit.module').then(m => m.ServiceunitModule)},
            {path:'doctors',loadChildren:() => import('../unitsdoctor/unitsdoctor.module').then(m => m.UnitsdoctorModule)},
            {path:'medrec',loadChildren:() => import('../medrec/medrec.module').then(m => m.MedrecModule)},
            {path:'medsuplly',loadChildren:() => import('../medsuppliers/medsuppliers.module').then(m => m.MedsuppliersModule)},
            {path:'suppliers',loadChildren:() => import('../supliers/supliers.module').then(m => m.SupliersModule)},
            {path:'medicines',loadChildren:() => import('../mediciners/mediciners.module').then(m => m.MedicinersModule)},
            {path:'bill',loadChildren:() => import('../bil/bil.module').then(m => m.BilModule)}









        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
