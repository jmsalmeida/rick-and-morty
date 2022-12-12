import { useAsyncStore } from "..";

describe("store", () => {
  it("should have the expected initial state", () => {
    const {
      page,
      loading,
      notFound,
      charactersResult,
      paginationInfo,
      filters,
    } = useAsyncStore.getState();

    expect(page).toBe(1);
    expect(loading).toBe(true);
    expect(notFound).toBe(false);
    expect(charactersResult).toStrictEqual([]);
    expect(paginationInfo).toStrictEqual({
      count: 0,
      pages: 0,
      next: "",
      prev: "",
    });
    expect(filters).toStrictEqual({
      name: "",
      gender: "",
      status: "",
      species: "",
    });
  });

  it("should change page number", () => {
    expect(useAsyncStore.getState().page).toBe(1);
    useAsyncStore.getState().changePage(10);
    expect(useAsyncStore.getState().page).toBe(10);
  });

  it("should set filter name correctly", () => {
    expect(useAsyncStore.getState().filters.name).toBe("");
    useAsyncStore.getState().setFilterName("name", "Picle Rick");
    expect(useAsyncStore.getState().filters.name).toBe("Picle Rick");
  });

  it("should clear all set filters", () => {
    useAsyncStore.setState({ notFound: true });
    useAsyncStore.getState().setFilterName("name", "Pickle Rick");
    useAsyncStore.getState().setFilterName("gender", "male");
    useAsyncStore.getState().setFilterName("status", "alive");
    useAsyncStore.getState().setFilterName("species", "pickle");

    expect(useAsyncStore.getState().notFound).toBeTruthy();
    expect(useAsyncStore.getState().filters.name).toBeTruthy();
    expect(useAsyncStore.getState().filters.gender).toBeTruthy();
    expect(useAsyncStore.getState().filters.status).toBeTruthy();
    expect(useAsyncStore.getState().filters.species).toBeTruthy();

    useAsyncStore.getState().clearFilters();

    expect(useAsyncStore.getState().notFound).toBeFalsy();
    expect(useAsyncStore.getState().filters.name).toBeFalsy();
    expect(useAsyncStore.getState().filters.gender).toBeFalsy();
    expect(useAsyncStore.getState().filters.status).toBeFalsy();
    expect(useAsyncStore.getState().filters.species).toBeFalsy();
  });

  describe("fetchCharacters", () => {
    const fetchRef = global.fetch;
    const mockResponse = {
      info: {
        count: 100,
        pages: 0,
        next: "",
        prev: "",
      },
      results: [
        {
          id: 9,
          name: "Agency Director",
          status: "Dead",
          species: "Human",
          gender: "Male",
        },
      ],
    };

    beforeEach(() => {
      global.fetch = jest.fn(async (): Promise<any> => {
        await Promise.resolve({
          json: async () => await Promise.resolve(mockResponse),
        });
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
      jest.clearAllMocks();
      global.fetch = fetchRef;
    });

    it("should fetch without search params", async () => {
      await useAsyncStore.getState().fetchCharacters();

      // Check for the url that fetch receives
    });

    it.todo("should fetch with search params");
    it.todo("should change notFound state when get 404 error");
  });
});
