export interface PaginationInfoType {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
  image: string;
}
