import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const ImageUpload = ({ onImageUpload, currentImage }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      onImageUpload(reader.result);
    };
    
    reader.readAsDataURL(file);
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1
  });

  return (
    <div className="mb-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        {currentImage ? (
          <div className="relative w-32 h-32 mx-auto">
            <img
              src={currentImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="mt-2 text-sm text-gray-500">Drop a new image to replace</p>
          </div>
        ) : (
          <p className="text-gray-500">
            {isDragActive ? 'Drop the image here' : 'Drag & drop an image here, or click to select'}
          </p>
        )}
      </div>
    </div>
  );
};

