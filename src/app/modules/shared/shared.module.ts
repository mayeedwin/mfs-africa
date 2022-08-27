import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    TransactionsComponent,
    BottomNavComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BottomNavComponent,
    SidebarComponent,
    HeaderComponent,
    TransactionsComponent,
  ],
})
export class SharedModule {}
