export interface GetSearchResponse {
  joke: GetJokeSearchResponse;
  people: GetCharacterResponse[] | undefined;
}

export interface GetJokeSearchResponse {
  total: string;
  Result: string[];
}

export interface JokeResponse {
  value: string;
}

export interface SearchRequest {
  jokeQuery: string;
  peopleQuery: string;
}

export interface GetCharacterResponse {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeWorld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starShips: string[];
  created: string;
  edited: string;
  url: string;
}

export interface StarWarsSearchResult {
  count: number;
  results: GetCharacterResponse[];
}

export interface ChuckNorrisSearchResult {
  total: number;
  result: ChuckNorrisJoke[];
}

export interface ChuckNorrisJoke {
  id: string;
  url: string;
  value: string;
}

export interface SearchResultResponse {
  api: string;
  starWarsSearchResult: StarWarsSearchResult;
  chuckNorrisSearchResult: ChuckNorrisSearchResult;
}


