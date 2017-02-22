import {Routes, RouterModule} from "@angular/router";
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {PassengerSearchComponent} from "./passenger-search/passenger-search.component";
import {FlightEditComponent} from "./flight-edit/flight-edit.component";
import {FlightBookingComponent} from "./flight-booking.component";
import {FlightResolver} from "./services/flight.resolver";
import {FlightHistoryComponent} from "../flight-history/flight-history.component";
import {ChatComponent} from "./chat/chat.component";
import { AuthGuard } from '../shared/auth/auth.guard';

const FLIGHT_BOOKING_ROUTES: Routes = [
    /*
    {
        path: '',
        canActivateChild: [...],
        children: [

        ]
    },
    */
    {
        path: '',
        component: FlightBookingComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'flight-search',
                component: FlightSearchComponent,
                data: {
                    needsLogin: true,
                    needsRoles : ['admin', 'poweruser']
                }
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            },

            {
                path: 'flight-edit/:id',
                component: FlightEditComponent
            }
        ]
    }

];

export let FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);