declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_HOME_URL: '/portfolio';
      REACT_APP_LINKED_IN_URL: string | undefined;
      REACT_APP_GITHUB_URL: string | undefined;
    }
  }
}

export {}
