declare var process: {
  env: {
    NG_APP_ENV: string;
    GRAPH_URL: string;
    GRAPH_TOKEN: string;
    // Replace the line below with your environment variable for better type checking
    [key: string]: any;
  };
};
