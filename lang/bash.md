---
lang: Bash
syntax: bash
title: De-facto shell language
author: tusqasi
---

```bash
echo Hello world
```

## 📚 What is Bash?

Bash is a command interpreter, like the python interpreter, but with functions
related to system operation. Bash typically runs in a text window where the user types command that cause actions. Bash can also read and execute commands from a file, called a shell script. Like most Unix shells, it supports filename globbing (wildcard matching), piping, here documents, command substitution, variables, and control structures for condition-testing and iteration. The keywords, syntax, dynamically scoped variables, and other basic features of the language are all copied from sh. Other features, e.g., history, are copied from csh and ksh. Bash is a POSIX-compliant shell, but with a number of extensions.

The shell's name is an acronym for Bourne Again Shell, a pun on the name of the Bourne shell that it replaces and the notion of being "born again".

## 🤔 Why use Bash?

When you have to automate a build task for a project you can
write a simple bash script to do it for you. This saved time
for you.  

It is present in almost all linux servers and computer, and macos computers.  
It can be accessed in windows by using git-bash or by installing a sub-system for windows, commonly called as "Windows subsystem for Linux" 🖥  

You are not limited to doing devops operations with bash. You can automate things on your computer!
Like:  

- Create a backup and upload to a off-site backup location 
- Customize application behavior.  💻  
- Doing complex text processing with tools like `awk`, `sed`, `ed` ⚙  
- Find files and text in files with `find`, `grep`  🔎  
  
I have a function made with bash which lets me search and play youtube videos in vlc media player!

## 📝 Things needed to get Bashing

You can use any text editor to write Bash scripts.  

You should know your way around these programs:  
    - vim, nano (editing files)
    - grep, find (find files, and text in files)
    - cat, echo (printing files and text to screen)

I recommend these programs because when you are writing bash scripts you will need to use these often, and you might not have access to gui programs like vscode. Having a working knowledge of above tools is a plus in it self.

## 🛠️ Setting up Bash development environment

Windows 🪟:  
This an official [guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to go you started with `wsl`, Windows subsystem for Linux

Run these commands in PowerShell:

1. Enable the Windows Subsystem for Linux  

    ```powershell
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart  
    ```

2. Enable Virtual Machine feature  

    ```powershell
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart  
    ```

3. Download and Install this update  

    [WSL 2 Update](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

4. Set WSL 2 as your default version  

    ```powershell
    wsl --set-default-version 2  
    ```

5. Install Ubuntu from microsoft store  

    Get [Ubuntu](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q).

    ![Microsoft Store](https://imgur.com/a/A2hsX2o)  

    ## Press 'Get' 

    ![Ubuntu page](https://imgur.com/a/3xYA6CG)  
    Linux 🐧/macOs 🍎/bsd  🚩 :  
    It is already there in every system, if not, install with following commands.

6. Set up password  

    The first time you launch a newly installed Linux distribution, a console window will open and you'll be asked to wait for a minute or two for files to de-compress and be stored on your PC. All future launches should take less than a second.

    You will then need to create a user account and password for your new Linux distribution.

🍎 macOS

```sh
brew install bash
```

🐧 Debian/Ubuntu

```sh
sudo apt install bash
```

🐧 Arch 

```sh
sudo pacman -Syu bash
```
write
## 🏃‍♂️ Bash scripts  

Put this script in a file named `test.sh`  

```sh
#!/bin/bash
echo 'Hello World!'
```

And make it executable  

```sh
chmod +x ./test.sh
```

Now run that file with

```sh
$ ./test.sh
Hello World!
```

## 😎 Some Cool projects in bash

Here is a non-exhaustive list of cool projects made with Bash:

- 📒 [todo.sh](https://github.com/todotxt/todo.txt-cli)  a simple todo tracker  
- 🐋 [bocker](https://github.com/p8952/bocker)  Docker written in 100 lines of bash  
- 🐐 [mkdkr](https://github.com/rosineygp/mkdkr)  mkdkr = Makefile + Docker  

## 📑 Conclusion  

In the end, Bash is an excellent tool for getting mundane, repetitive tasks, and long-running tasks with ease. Even after the introduction of orchestration and CI/CD tooling like Kubernetes, Bash still exists. Giving a clue to how useful is the old but gold tool.

## Resources

- [To learn about various commands](https://linuxjourney.com/)
- [Basic syntax and concepts](https://guide.bash.academy/)
- [Quick lookup page](https://learnxinyminutes.com/docs/bash/)
- [A cheat sheet](https://devhints.io/bash)

**Thanks for Reading!** ✨