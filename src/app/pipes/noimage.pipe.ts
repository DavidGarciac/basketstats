import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any ): string{

    if(images === ' '){

      return 'assets/img/noimage.jpg';
    }

    if(images != ' '){
   
      return images;
    } else{
      return 'assets/img/noimage.jpg';
    }
  }

}
