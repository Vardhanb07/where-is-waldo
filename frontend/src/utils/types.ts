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
  setShowGamePopup: React.Dispatch<React.SetStateAction<boolean>>;
  mouseClickPosition: {
    x: number;
    y: number;
  };
  setMouseClickPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
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
  onClick?: () => void;
  className?: string;
}

export interface ProtectRoutePropTypes {
  children: React.ReactElement;
}

export interface PopupPropTypes {
  content: string;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface GamePopupPropTypes {
  showGamePopup: boolean;
  setShowGamePopup: React.Dispatch<React.SetStateAction<boolean>>;
  imageId: number;
  setShowIncorrectMatchPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowErrorPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCorrectPopup: React.Dispatch<React.SetStateAction<boolean>>;
  mouseClickPosition: {
    x: number;
    y: number;
  };
}

export interface PositionsType {
  [index: number]: {
    [index: number]: {
      x: number;
      y: number;
    };
  };
}

export interface ScoreProviderPropTypes {
  children: React.ReactNode;
}

export interface GameProgressProviderPropTypes {
  children: React.ReactNode;
}

export interface GameProgressContextTypes {
  currentNotCompletedImages: number[];
  currentNotCompletedSnapsOfImages: number[][];
  updateCurrentNotCompletedImages: (imageId: number) => void;
  updateCurrentNotCompletedSnapsOfImages: (
    imageId: number,
    snapId: number
  ) => void;
}

export type completedSnaps = { [index: string]: boolean };

export interface playerProgressType {
  id: number;
  createdAt: string;
  updatedAt: string;
  completedSnaps: completedSnaps;
  playerId: number;
  imageId: number;
}

export interface PlayerContentPropTypes {
  rank: number;
  name: string;
  score: number;
}

export interface playerType {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  score: number;
}

export interface LeaderboardContentPropTypes {
  content: playerType[];
}
