const GITHUB_REPOS_URL = "https://api.github.com/users/alex-bahena/repos";
// Github API used to get my repos data and render it in the component ReposManagement.js
export const githubReposAPI = async () => {
  const res = await fetch(GITHUB_REPOS_URL);
  const data = await res.json();
  return data;
};
