import type { HttpInterceptorFn } from '@angular/common/http';

export const todoInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
