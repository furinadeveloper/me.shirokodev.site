import { Octokit } from "@octokit/core";
import { config } from "dotenv";
config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export default async function getGithubAPI(repo: string) {
  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });

  await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "sunaookamishirokodev",
    repo,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}
