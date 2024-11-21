import {
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

export const httpFilterInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next,
) => {
  let authReq = request.clone();

  if (request.url.startsWith('/api')) {
    authReq = request.clone({
      url: `${SERVER_URL}${request.url}`,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=31536000, immutable, no-store',
        'Access-Control-Allow-Origin': '*',
        /*  Authorization: `Bearer ${this.getToken()}`*/
      }),
    });
  }

  if (request.url.includes('imagekit')) {
    authReq = request.clone({
      url: `${request.url}`,
      headers: new HttpHeaders({
        'Content-Type': 'image/*',
        'Cache-Control': 'max-age=31536000, immutable, no-store',
        'X-Content-Type-Options': 'nosniff',
      }),
    });
  }

  return next(authReq);
};
