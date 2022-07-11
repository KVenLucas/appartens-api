import { IHttpResponse } from '../presentation/protocols';

function errorHandler(response: IHttpResponse) {
  return (error: { stack: unknown }) => {
    console.log('Something bad has happened** :(', error.stack);

    response.writeHead(500, { 'content-type': 'application/json' });
    response.write(JSON.stringify({ error: 'Internal server error!' }));

    return response.end();
  };
}

export { errorHandler };
