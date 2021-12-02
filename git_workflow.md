# Git workflow guidelines

There are 3 types of branches in this project:
 - `master` - main branch
 - `milestone0`, `milestone1`, etc. - for each milestone, I will refer to it as `milestone*`
 - `mybranch`, `max`, etc. - for features/personal use

`master` and `milestone*` branches are protected. You should never push commits directly into these branches.
At the beginning of a new milestone a new branch `milestone*` is created from the top of the `master` branch.
From that moment on every new branch is created from this `milestone*` branch and then merged back into it via pull request on GitHub.

## Workflow

_As an example I will provide git terminal commands, but you are free to use any GUI tool you like._

Create a branch for your changes from the `milestone*` branch. You can name a branch after yourself or after a feature you are working on. Here I will name the branch `my_branch`.
```shell
$ git checkout milestone1
$ git pull
$ git checkout -b my_branch
```
Do the necessary code changes, stage and commit them. For example:
```shell
$ git add my_file.html another_file.html
$ git commit -m 'Add html files'
$ git add some_file.js
$ git commit -m 'Fix an error in some_file.js'
```
This way there will be some commits on your branch.
When you think it is ready to be merged, push this branch to GitHub.
```shell
$ git push --set-upstream origin my_branch
```
Now go to GitHub and create a pull-request from your branch to `milestone*` branch (not `master`!).
When somebody checks your work and puts a +1 (approved) mark on your pull-request it will be possible to finally merge the branch.
You can safely delete your branch after the pull-request is merged.

At the end of a milestone the `milestone*` branch is merged to `master` via pull-request and the next `milestone*` branch is created.

### Reusing a local branch

If you want to use your local branch `my_branch` again you can delete it and create a new one from top of current `milestone*` branch:
```shell
$ git checkout milestone2
$ git branch -D my_branch
$ git pull
$ git checkout -b my_branch
```
Or you can reset it to match `milestone*`:
```shell
$ git fetch --all
$ git checkout my_branch
$ git reset --hard origin/milestone2
```

## Resolving conflicts

If you have created a pull-request but GitHub does not allow to merge it saying that there are merged conflicts, you should resolve the conflicts first.
Go back to your branch on your local machine and merge the conflicting branch into yours:
```shell
$ git checkout my_branch
$ git merge milestone1
```
Git will show you the files with conflicts. You can use any tool to resolve the conflicts or do it manually by going into each file with a conflict and searching for `>>>>>>`, `======` and `<<<<<<` lines.
The code between these lines should be edited and these lines themselves removed.
After resolving the conflicts proceed with the merge:
```shell
$ git add some_file_with_a_conflict.js
$ git merge --continue
```
Now you can push your updated branch to GitHub, your pull request should be updated automatically and the conflicts should be gone.