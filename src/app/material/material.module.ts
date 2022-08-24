import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MaterialRoutingModule } from './material-routing.module';


const materialModules = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules, MaterialRoutingModule],
  exports: [...materialModules],
})
export class MaterialModule {}
