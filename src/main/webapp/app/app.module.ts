import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Onlinestore1SharedModule } from 'app/shared/shared.module';
import { Onlinestore1CoreModule } from 'app/core/core.module';
import { Onlinestore1AppRoutingModule } from './app-routing.module';
import { Onlinestore1HomeModule } from './home/home.module';
import { Onlinestore1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Onlinestore1SharedModule,
    Onlinestore1CoreModule,
    Onlinestore1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Onlinestore1EntityModule,
    Onlinestore1AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Onlinestore1AppModule {}
