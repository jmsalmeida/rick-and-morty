import create from "zustand";
import { API_URL } from "../settings/constants";
import { CharacterType, PaginationInfoType } from "../@types/sharedTypes";

interface CharactersStateType {
  page: number;
  loading: boolean;
  paginationInfo: PaginationInfoType | {};
  charactersResult: CharacterType[];

  changePage: any;
  fetchCharacters: any;
}

const asyncCharactersSlice = (set: any, get: any): CharactersStateType => ({
  page: 1,
  loading: true,
  paginationInfo: {},
  charactersResult: [],

  changePage: (page: number) => set({ page, loading: true }),

  fetchCharacters: async () => {
    const page = get().page;
    const requestUrl = `${API_URL}/character?page=${page}`;
    const response = await fetch(requestUrl);
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
