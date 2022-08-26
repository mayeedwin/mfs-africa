import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './components/transactions/transactions.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, TransactionsComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, HeaderComponent, TransactionsComponent],
})
export class SharedModule {}
