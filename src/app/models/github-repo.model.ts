export interface GitHubRepo {
    name: string;
    stargazerCount: number;
  }
  
  export interface GitHubUser {
    user: {
      repositories: {
        nodes: GitHubRepo[];
      };
    };
  }
  