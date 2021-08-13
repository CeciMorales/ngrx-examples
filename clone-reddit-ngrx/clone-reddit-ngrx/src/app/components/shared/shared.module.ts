import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule


  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class SharedModule { }
