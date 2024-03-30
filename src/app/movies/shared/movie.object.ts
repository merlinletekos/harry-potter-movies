
export type MinimalMovieData = "id" | "title" | "release_date" | "budget" | "duration";

export interface MovieObject {
  id:               string;
  title:            string;
  duration:         number;
  budget:           string;
  release_date:     Date;
  box_office:        number;
  cinematographers: string[];
  poster:           string;
  producers:        string[];
  summary:          string;
}
