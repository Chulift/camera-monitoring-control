import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoLiveComponent } from './video-live/video-live.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LeftSideNavComponent } from '../components/left-side-nav/left-side-nav.component';


@NgModule({
  declarations: [VideoPlayerComponent, VideoLiveComponent],
  imports: [
    CommonModule,    
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
