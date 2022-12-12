import create from "zustand";
import { API_URL } from "../settings/constants";
import {
  FilterTypes,
  CharacterType,
  PaginationInfoType,
} from "../@types/sharedTypes";

interface CharactersStateType {
  page: number;
  loading: boolean;
  notFound: boolean;
  filters: FilterTypes;
  paginationInfo: PaginationInfoType;
  charactersResult: CharacterType[];

  clearFilters: () => void;
  changePage: (page: number) => void;
  fetchCharacters: () => Promise<void>;
  setFilterName: (filterName: string, value: string) => void;
}

const asyncCharactersSlice = (set: any, get: any): CharactersStateType => ({
  page: 1,
  loading: true,
  notFound: false,
  charactersResult: [],
  paginationInfo: { count: 0, pages: 0, next: "", prev: "" },
  filters: { name: "", gender: "", status: "", species: "" },

  changePage: (page: number) => set({ page }),

  setFilterName: (filterName: string, value: string) => {
    const auxObject = { ...get().filters };
    auxObject[filterName] = value;

    set({ filters: { ...auxObject } });
  },

  clearFilters: () =>
    set({
      notFound: false,
      filters: { name: "", gender: "", status: "", species: "" },
    }),

  fetchCharacters: async () => {
    set({ loading: true });

    const page = get().page;
    const filters = get().filters;
    const { name, gender, status, species } = filters;

    const appliedFilters = (): boolean => {
      return (
        Boolean(name) || Boolean(gender) || Boolean(status) || Boolean(species)
      );
    };

    const searchParams: string = new URLSearchParams({ ...filters }).toString();
    const urlParams: string = appliedFilters()
      ? `${searchParams}`
      : `page=${page}`;

    try {
      const response = await fetch(`${API_URL}/character?${urlParams}`);
      if (!response.ok) throw response;

      const responseToJson = await response.json();

      set({
        loading: false,
        paginationInfo: { ...responseToJson.info },
        charactersResult: [...responseToJson.results],
      });
    } catch (error: any) {
      if (error.status === 404) set({ notFound: true });
    }
  },
});

export const useAsyncStore =
  create<CharactersStateType>()(asyncCharactersSlice);
