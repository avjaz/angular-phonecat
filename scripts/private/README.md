# Private Maintenance Scripts

This folder contains a bunch of scripts that the maintainers of the phonecat tutorial project
can use to update and modify the steps of the tutorial.

## Testing

Since each step of the tutorial is a commit, we have a script that can checkout each commit in turn
and run the unit/e2e tests for all the steps.

- **test-all.sh**: Run this script to checkout out each of the steps in the tutorial running the
  unit and e2e tests on each step.

## Demo Pages on GitHub

We use GitHub to host a live demo of each step.  This is stored in the gh-pages branch of the git
repository.  The folder structure of this branch is different to the main master branch. Each step
is copied to its own folder.

- **snapshot-web.sh**: Run this script to iterate through each step checking out the application
  code and copying it to the `angular-phonecat-snapshots-web` folder, before checking out the
  gh-pages branch and updating the folders with the snapshot.

Once you have generated the snapshots you can review the changes and then commit and push them to
the gh-pages branch.


```
git add --all step-*
git commit -m"chore(*): update live steps to new version of tutorial"
git push origin gh-pages
```

## Pushing to GitHub

Each step in the tutorial is one commit in the git repository. Each step is also is identified by a
git tag. Any changes to a step requires the commits to be rebased and retagged.

Since it is likely that rebasing and retagging the commits will cause the local git repository to
diverge from the GitHub repository, we must force a push of the master and the tags to GitHub.

- **retag.sh**: Run this script to delete all the step tags and reapply them to the commits that
  contain the steps.  This is useful if you have rebased the commits after modifying an earlier
  step.
- **push-to-github.sh**: Run this script to retag and force push the master branch and the tags to
  the remote GitHub repository.