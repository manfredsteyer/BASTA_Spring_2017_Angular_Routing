import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FlightHistoryComponent} from "./flight-history/flight-history.component";
import {CustomPreloadingStrategy} from "./shared/preload/custom-preloading.strategy";
import {BookingsComponent} from "./bookings/bookings.component";
import {FlightBookingComponent} from "./flight-booking/flight-booking.component";

let APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
        data: {
            preload: false
        }
    },
    {
        path: 'history',
        component: FlightHistoryComponent,
        outlet: 'aux'
    },
    {
        path: 'bookings',
        component: BookingsComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export let AppRouterModule
    = RouterModule.forRoot(APP_ROUTES, {
        preloadingStrategy: CustomPreloadingStrategy });

































//
//
//
//
//









//
/*
 {
 path: 'flight-booking',
 loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
 },
 */