import { CinemaService } from "./cinema.service";
import { FilmService } from "./film.service";
import { UserService } from "./user.service";

export const filmService = new FilmService();
export const userService = new UserService();
export const cinemaService = new CinemaService();
