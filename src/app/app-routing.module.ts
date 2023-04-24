import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.module').then( m => m.ParentPageModule)
  },
  {
    path: 'childinfo',
    loadChildren: () => import('./childinfo/childinfo.module').then( m => m.ChildinfoPageModule)
  },
  {
    path: 'holiday-list',
    loadChildren: () => import('./holiday-list/holiday-list.module').then( m => m.HolidayListPageModule)
  },
  {
    path: 'examschedule',
    loadChildren: () => import('./examschedule/examschedule.module').then( m => m.ExamschedulePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'examresult',
    loadChildren: () => import('./examresult/examresult.module').then( m => m.ExamresultPageModule)
  },
  {
    path: 'assignment',
    loadChildren: () => import('./assignment/assignment.module').then( m => m.AssignmentPageModule)
  },
  {
    path: 'feedetails',
    loadChildren: () => import('./feedetails/feedetails.module').then( m => m.FeedetailsPageModule)
  },
  {
    path: 'leaves',
    loadChildren: () => import('./leaves/leaves.module').then( m => m.LeavesPageModule)
  },
  {
    path: 'leave-history',
    loadChildren: () => import('./leave-history/leave-history.module').then( m => m.LeaveHistoryPageModule)
  },
  {
    path: 'syllabus',
    loadChildren: () => import('./syllabus/syllabus.module').then( m => m.SyllabusPageModule)
  },
  {
    path: 'daily-class-schedule',
    loadChildren: () => import('./daily-class-schedule/daily-class-schedule.module').then( m => m.DailyClassSchedulePageModule)
  },
  {
    path: 'child-attendance',
    loadChildren: () => import('./child-attendance/child-attendance.module').then( m => m.ChildAttendancePageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'child-list',
    loadChildren: () => import('./child-list/child-list.module').then( m => m.ChildListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
