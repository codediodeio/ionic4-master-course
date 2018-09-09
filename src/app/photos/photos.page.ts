import { Component, OnInit, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss']
})
export class PhotosPage implements OnInit {
  imageUrl;
  device;
  constructor(private sanitizer: DomSanitizer, private zone: NgZone) {}

  ngOnInit() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    console.log(image);

    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.webPath
    );
  }
}
