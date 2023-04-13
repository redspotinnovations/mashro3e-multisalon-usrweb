/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Ultimate Salon Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopFreelancersRoutingModule } from './top-freelancers-routing.module';
import { TopFreelancersComponent } from './top-freelancers.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    TopFreelancersComponent
  ],
  imports: [
    CommonModule,
    TopFreelancersRoutingModule,
    IvyCarouselModule,
    MDBBootstrapModule.forRoot(),
    NgxSkeletonLoaderModule
  ]
})
export class TopFreelancersModule { }
