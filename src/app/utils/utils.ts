const fetcher = (args: string | URL | Request) => fetch(args).then(res => res.json());

export { fetcher };