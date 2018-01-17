import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { Ng2ImgToolsService } from 'ng2-img-tools';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // uploadedImage: File;
  // imagenRedimensionada: string;
  // imagenReal: string;

  cropperSettings: CropperSettings;
  data: any;
 
  constructor(public navCtrl: NavController,
    private ng2ImgMax: Ng2ImgMaxService,
    private ng2ImgToolsService: Ng2ImgToolsService,
    public sanitizer: DomSanitizer) {

      this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 120;
        this.cropperSettings.height = 67;
        this.cropperSettings.croppedWidth =120;
        this.cropperSettings.croppedHeight = 67;
        this.cropperSettings.canvasWidth = 650;
        this.cropperSettings.canvasHeight = 350;
 
        this.data = {};
      
  }

  verImagenCrop(){
    console.log(this.data.image);
  }

  // redimensionarImagen(event) {
  //   let reader = new FileReader();
  //   let file = event.target.files[0];
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     // let base64 = reader.result.split(',')[1]
  //     this.imagenReal = reader.result;
  //   } // todo lo anterior es solo para ver la imagen real subida, no es necesario despues    
    
  //   // 10000 es para que ajutes el aspecto con respecto a la otra variable
  //   //en este caso, ajutamos el heigh a 100 , y el width se ajusta sin deformar
  //   // si queremos al revez, se pone el 10000 en el segundo parametro, no en el primero

  //   //primero redimensionamos la imagen, y ldespues la cortamos al tamaño justo
  //   this.ng2ImgMax.resizeImage(file, 10000, 67).subscribe(
  //     result => {
  //       let a = [result];
  //       console.log("this.uptloadeimage",this.uploadedImage);
  //       console.log("image",file);
  //       this.ng2ImgToolsService.crop(a, 120, 67).subscribe(
  //         result => {
  //           this.uploadedImage = new File([result], result.name);
  //           this.verImagen(this.uploadedImage);
  //         },
  //         error => {
  //           console.log("Error",error)
  //         }
  //       );
  //       console.log("en imageChange",this.uploadedImage)
  //     },
  //     error => {
  //       console.log('😢 Oh no!', error);
  //     }
  //   );
  // }

  // verImagen(file: File) {
  //   const reader: FileReader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.imagenRedimensionada = reader.result;
  //     console.log("nueva imagen",this.imagenRedimensionada)
  //   };
  // }

}
