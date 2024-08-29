import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  // The declarations array is for Components that aren't standalone
  declarations: [AppComponent, HeaderComponent, UserComponent],
  // bootstrap we have only to the root module
  bootstrap: [AppComponent],
  // The imports array is not just used for enabling standalone components, but also for including other modules.
  // These modules are available only to the declared components of this module.
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
