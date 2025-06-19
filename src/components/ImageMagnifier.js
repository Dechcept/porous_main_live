import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ImageMagnifier = ({ src }) => {
  const sizes = [
    "355",
    "481",
    "584",
    "687",
    "770",
    "861",
    "955",
    "1033",
    "1112",
    "1192",
    "1200"
  ];

  


  return (
   
        <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Product",
        //   isFluidWidth: true,
          src: src,
        //   srcSet,
          sizes: "120vw",
          width:500,
          height:472
        
        },
        largeImage: {
          alt: "",
          src: src,
          width: 1200,
          height:1000,
        //   enlargedImageStyle:'scale-125'
        },
        enlargedImageContainerDimensions:{width:'200%',height:'100%'},

        className:'h-[100%]  flex-1 w-full ',
        imageClassName:'w-[100%] h-[100%]'

      }}
    />
 
  );
};

export default ImageMagnifier;
