<template>
  <div>
    <h3>{{imgPath}}</h3>
    <!--<img :src="imgPath" alt="">-->
    <h3>{{duration}}</h3>
    <div id="svgcontainer"></div>
  </div>
</template>

<script>

  import ImageTracer from 'imagetracerjs';

  let testImage = require('./img/test.jpg');

  export default {
    props: ['imgPath'],
    data() {
      return {
        duration: ''
      }
    },
    watch: {
      imgPath (newValue) {
        this.handleImagePath(newValue);
      }
    },
    methods: {
      handleImagePath(imgPath){
//        this.isValidImage(imgPath)
//          .then((img) => {
            this.traceImage(testImage);
//          })
//          .catch((e) => {
//              console.error('Error', e);
//            }
//          );
      },
      traceImage(img){
//console.log(img);
//return;

        let start = new Date().getTime();

        ImageTracer.imageToSVG(
          testImage,
          (svgstr) => {
            this.duration = this.msToHMS(new Date().getTime() - start);
            ImageTracer.appendSVGString( svgstr, 'svgcontainer' );
          },
          'Artistic4'
        );

//        ImageTracer.imageToSVG( img, ImageTracer.appendSVGString( svgstr, '#svgcontainer'), {
//          ltres: 0.1,
//          qtres:1,
//          scale:10,
//          strokewidth:5
//        } );
      },
      isValidImage(imgURL) {
        // https://stackoverflow.com/questions/9714525/javascript-image-url-verify
        return new Promise((resolve, reject) => {

          if(this.hasAllowedExtension(imgURL)) {

            const timeout = 3000;
            let timer;
//            let img = new Image();
            let img = testImage;

            img.onerror = img.onabort = function () {
              clearTimeout(timer);
              reject('error');
            };

            img.onload = function () {
              clearTimeout(timer);
              resolve(img);
            };

            timer = setTimeout(function () {
              // reset .src to invalid URL so it stops previous
              // loading, but doesn't trigger new load
              img.src = "//!!!!/test.jpg";
              reject('timeout');
            }, timeout);

            img.crossOrigin = "Anonymous";
            img.src = imgURL;

          } else {
            reject('wrong img extension');
          }
        })
      },
      hasAllowedExtension(imgURL) {
        return (/\.(gif|jpg|jp?g|tiff|png)$/i).test(imgURL);
      },
      msToHMS(ms) {
        let seconds = ms / 1000;
        let hours = parseInt( seconds / 3600 );
        seconds = seconds % 3600;
        let minutes = parseInt( seconds / 60 );
        seconds = seconds % 60;
        hours = hours < 10 ? `0${hours}`: hours;
        minutes = minutes < 10 ? `0${minutes}`: minutes;
        return `${hours}:${minutes}:${seconds}`;
      }
    }
  }

  /**
   *  TODO:
   *  - create new imageTracer instance
   *  - trace the image
   */

</script>
