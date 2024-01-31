### Git Cheat Sheet

## Git Use Cases

1. Store code somewhere
2. Collaborate with others
3. Keep track of changes
4. Deploy code to production
   - Dev, stage, production
5. Version Upgrade/Tracking - Symantic Versioning

   - Major.Minor.Patch
   - 1.0.0
   - 1.0.1
   - 1.1.0
   - 2.0.0

6. **Initialization:**

   - `git init`: Initialize a new Git repository.

7. **Configuration:**

   - `git config --global user.name "Your Name"`: Set global username.
   - `git config --global user.email "your.email@example.com"`: Set global email.

8. **Basic Workflow:**

   - `git add <filename>`: Add changes to the staging area.
   - `git commit -m "Commit message"`: Commit changes to the repository.

9. **Status and Changes:**

   - `git status`: Check the status of the repository.
   - `git diff`: Compare changes between working directory and staging area.

10. **History and Branching:**

    - `git log`: View commit history.
    - `git branch <branch-name>`: Create a new branch.
    - `git checkout <branch-name>`: Switch to a branch.

11. **Collaboration and Remotes:**

    - `git remote add origin <remote-url>`: Add a remote repository.
    - `git push -u origin master`: Push local changes to GitHub.

12. **Other Useful Commands:**
    - `git pull`: Fetch and merge changes from a remote repository.
    - `git merge <branch-name>`: Merge changes from another branch.
    - `git clone <remote-url>`: Clone a repository.

Remember to customize the cheat sheet based on the specific commands covered in your class.
