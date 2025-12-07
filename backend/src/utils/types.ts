interface imageStatusType {
  snapOneStatus: boolean;
  snapTwoStatus: boolean;
  snapThreeStatus: boolean;
}

export interface addNewPlayerBodyTypes {
  username: string;
  score: number;
  imageStatus: imageStatusType[];
}
