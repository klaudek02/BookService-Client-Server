import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatToolbarModule, MatButtonModule,
    MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatSortModule],
  exports: [CommonModule, MatTableModule, MatPaginatorModule, MatToolbarModule, MatButtonModule,
    MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatSortModule ],
})
export class MaterialModule { }
