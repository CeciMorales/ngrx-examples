import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostModalComponent } from '../post-modal/post-modal.component';


@Component({
  selector: 'app-posts-dashboard-primary-actions',
  templateUrl: './posts-dashboard-primary-actions.component.html',
  styleUrls: ['./posts-dashboard-primary-actions.component.scss']
})
export class PostsDashboardPrimaryActionsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.dialog.open(PostModalComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
    
  }

}
