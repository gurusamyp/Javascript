Here’s a **comprehensive, categorized list of Git commands**, from **basic to advanced**, that you’ll commonly use in real projects.

---

## 🔹 1. Basic Git Setup

```bash
git config
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
git config --list
git help <command>
```

---

## 🔹 2. Repository Creation & Cloning

```bash
git init
git clone <repo-url>
git clone <repo-url> <folder-name>
```

---

## 🔹 3. Working Directory & Status

```bash
git status
git diff
git diff --staged
git ls-files
```

---

## 🔹 4. Staging & Committing

```bash
git add <file>
git add .
git add -A
git reset <file>
git commit
git commit -m "message"
git commit --amend
```

---

## 🔹 5. Branching

```bash
git branch
git branch <branch-name>
git branch -d <branch-name>
git checkout <branch-name>
git checkout -b <branch-name>
git switch <branch-name>
git switch -c <branch-name>
```

---

## 🔹 6. Merging & Rebasing

```bash
git merge <branch>
git merge --abort
git rebase <branch>
git rebase --continue
git rebase --abort
```

---

## 🔹 7. Remote Repositories

```bash
git remote
git remote -v
git remote add origin <url>
git remote remove origin
git remote rename origin upstream
```

---

## 🔹 8. Push & Pull

```bash
git push
git push origin <branch>
git push -u origin <branch>
git pull
git pull origin <branch>
git fetch
```

---

## 🔹 9. Logs & History

```bash
git log
git log --oneline
git log --graph
git log --all
git show
git reflog
```

---

## 🔹 10. Undo & Recovery

```bash
git checkout -- <file>
git restore <file>
git restore --staged <file>
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
git revert <commit>
```

---

## 🔹 11. Stash

```bash
git stash
git stash push
git stash list
git stash apply
git stash pop
git stash drop
git stash clear
```

---

## 🔹 12. Tags

```bash
git tag
git tag <tag-name>
git tag -a v1.0 -m "version 1.0"
git tag -d <tag-name>
git push origin <tag-name>
```

---

## 🔹 13. File Operations

```bash
git mv <old> <new>
git rm <file>
git rm --cached <file>
git clean -f
git clean -fd
```

---

## 🔹 14. Submodules

```bash
git submodule add <repo-url>
git submodule init
git submodule update
git submodule update --remote
```

---

## 🔹 15. Cherry Pick

```bash
git cherry-pick <commit>
git cherry-pick --abort
```

---

## 🔹 16. Bisect (Find Bugs)

```bash
git bisect start
git bisect bad
git bisect good <commit>
git bisect reset
```

---

## 🔹 17. Blame & Inspection

```bash
git blame <file>
git grep "text"
```

---

## 🔹 18. Hooks

```bash
.git/hooks/
```

(Common hooks: `pre-commit`, `post-commit`, `pre-push`)

---

## 🔹 19. Git Help & Debugging

```bash
git help
git help <command>
git version
git fsck
git gc
```

---

## 🧠 Most Used Git Commands (Quick List)

```bash
git init
git clone
git status
git add .
git commit -m ""
git push
git pull
git branch
git checkout
git merge
```

-----------------------------------------------------
* 🧪 **Real-world Git workflow examples**


