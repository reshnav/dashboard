import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tastdes';

  columns = [
    {
      title: 'Uncategorized',
      color: '#99d6ff',
      cards: [
        {
          id: '1001',
          date: new Date(),
          requestType: 'Application',
          status: 'New',
          priority: 'Low',
          progress: 50,
          estimatedDate: new Date('2024-05-10'),
          users: ['https://i.pravatar.cc/24?img=1', 'https://i.pravatar.cc/24?img=2']
        },
        {
          id: '1002',
          date: new Date(),
          requestType: 'Application',
          status: 'New',
          priority: 'Medium',
          progress: 50,
          estimatedDate: new Date('2024-05-10'),
          users: ['https://i.pravatar.cc/24?img=3']
        }
      ]
    },
    {
      title: 'Inprogress',
      color: '#ffe6cc',
      cards: [
        {
          id: '1003',
          date: new Date(),
          requestType: 'Application',
          status: 'Inprogress',
          priority: 'High',
          progress: 50,
          estimatedDate: new Date('2024-05-10'),
          users: ['https://i.pravatar.cc/24?img=4', 'https://i.pravatar.cc/24?img=5',
            'https://i.pravatar.cc/24?img=5',
          ]
        }
      ]
    },
    {
      title: 'Pending',
      color: '#ffccff',
      cards: [
        {
          id: '1006',
          date: new Date(),
          requestType: 'Application',
          status: 'Pending',
          priority: 'High',
          progress: 50,
          estimatedDate: new Date('2024-05-10'),
          users: ['https://i.pravatar.cc/24?img=6']
        }
      ]
    },
    {
      title: 'Complete',
      color: '#d4d4aa',
      cards: [
        {
          id: '2345',
          date: new Date(),
          requestType: 'Application',
          status: 'Completed',
          priority: 'High',
          progress: 50,
          estimatedDate: new Date('2024-05-10'),
          users: ['https://i.pravatar.cc/24?img=7']
        }
      ]
    },
    {
      title: 'Closed',
      color: '#d1d1e0',
      cards: [
        {
          id: '2345',
          date: new Date(),
          requestType: 'Application',
          status: 'Completed',
          priority: 'High',
          progress: 50,
          estimatedDate: new Date('2024-05-10'),
          users: ['https://i.pravatar.cc/24?img=7']
        }
      ]
    }
  ];
  
  activeMenu = 'dashboard'; // default

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }
}
