import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../../services/error';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errors = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        errors.set('Network problem: the request was blocked or you are offline.');
      } else if (error.status === 404) {
        errors.set('Server problem: please try again later.');
      } else if (error.status >= 500) {
        errors.set('Server problem: please try again later')
      } else {
        errors.set('Something went wrong with the request.');
      }

      return throwError(() => error);
      }),
    )
}
