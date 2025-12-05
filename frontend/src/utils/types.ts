export interface ThemeProviderPropTypes {
  children: React.ReactNode;
}

export interface ImagePreviewPropTypes {
  imageName: string;
  id: number;
}

export interface ImageProviderPropTypes {
  children: React.ReactNode;
}

export interface ImageDisplayPropTypes {
  imageId: number;
}

export interface ImageTooltipPropTypes {
  mousePosition: {
    x: number;
    y: number;
  };
}

export interface GameNavbarPropTypes {
  imageId: number;
}

export interface ImagesToBeFoundPropTypes {
  parentImageId: number;
}

export interface ImageToBeFoundPropTypes {
  image: string;
}
