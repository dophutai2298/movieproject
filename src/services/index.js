import { BookingService } from "./booking.service";
import { CinemaService } from "./cinema.service";
import { FilmService } from "./film.service";
import { NewsService } from "./news.service";
import { UserService } from "./user.service";

export const filmService = new FilmService();
export const userService = new UserService();
export const cinemaService = new CinemaService();
export const bookingService = new BookingService();
export const newsService = new NewsService();
/* export const userSignUpService = new UserService(); */
