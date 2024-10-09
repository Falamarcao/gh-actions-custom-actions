# Storing Actions In Repositories & Sharing Actions With Others

In this module, we created custom Actions that were stored in the same repository as our Workflow(s).

Alternatively, we could've stored the custom Actions in separate repositories (which therefore then only include the Action definition + code).

This is actually quite straightforward:

1. Create a new, local project folder which contains your action.yml file + all the code belonging to the action (Important: Don't put your action.yml file or code in a .github/actions folder or anything like that - just keep it directly on the root level of your created project!)

2. Add a local Git repository to your created project (via git init)

3. Create your commit(s) via git add and git commit

4. Create a GitHub repository and connect it to your local Git repository (via git remote add)

5. Add a tag via git tag -a -m "My action release" v1

6. Push your local code to the remote GitHub repository (via git push --follow tags)

6. Use your custom Action in any other Workflow (in any other project and repository) by referencing the repository which contains your action (e.g., my-account/my-action@v1)

If your custom Action is stored in a public repository, it can also be published to the GitHub Actions Marketplace as described here: https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action