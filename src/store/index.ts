import create from "zustand";
import { API_URL } from "../settings/constants";
import { PaginationInfoType, CharacterType } from "../@types/sharedTypes";

interface CharactersStateType {
  loading: boolean;
  fetchCharacters: any;
  paginationInfo: PaginationInfoType | {};
  charactersResult: CharacterType[];
}

const asyncCharactersSlice = (set: any): CharactersStateType => ({
  loading: true,
  paginationInfo: {},
  charactersResult: [],
  fetchCharacters: async () => {
    const response = await fetch(`${API_URL}/character`);
    const responseToJson = await response.json();

    set({
      loading: false,
      paginationInfo: { ...responseToJson.info },
      charactersResult: [...responseToJson.results],
    });
  },
});

export const useAsyncStore =
  create<CharactersStateType>()(asyncCharactersSlice);
