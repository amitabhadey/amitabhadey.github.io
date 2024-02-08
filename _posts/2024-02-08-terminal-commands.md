---
title: 'Essential Terminal Commands'
date: 2024-02-08
permalink: /posts/2024/02/terminal_commands
---

## Navigation Commands

### List Directory Contents

```console
amitabhadey@amitabhadey:~$ ls
amitabhadey@amitabhadey:~$ ls -lt
amitabhadey@amitabhadey:~$ ls -ls
amitabhadey@amitabhadey:~$ ls -la
amitabhadey@amitabhadey:~$ ls -d */
```
### Change directory

```console
amitabhadey@amitabhadey:~$ cd
amitabhadey@amitabhadey:~$ cd ..
amitabhadey@amitabhadey:~$ cd directory_name
amitabhadey@amitabhadey:~$ cd ~username

```

### Print working directory

```console
amitabhadey@amitabhadey:~$ pwd
amitabhadey@amitabhadey:~$ cd echo $PWD
```

### Make directory

```console
amitabhadey@amitabhadey:~$ mkdir directory_name
amitabhadey@amitabhadey:~$ mkdir directory1 directory2 directory3
```

### Remove directory

```console
amitabhadey@amitabhadey:~$ rmdir directory_name
amitabhadey@amitabhadey:~$ rmdir directory1 directory2 directory3
```

## File Management Commands

### Create an empty file

```console
amitabhadey@amitabhadey:~$ touch filename
amitabhadey@amitabhadey:~$ touch file1 file2 file3
```

### Copy files and directories

```console
amitabhadey@amitabhadey:~$ cp source_file destination_file
amitabhadey@amitabhadey:~$ cp file1 file2 file3 directory/
```

### Move or rename files and directories

```console
amitabhadey@amitabhadey:~$ mv old_name new_name
amitabhadey@amitabhadey:~$ mv file1 file2 file3 directory/
```

### Concatenate and display file content

```console
amitabhadey@amitabhadey:~$ cat filename
amitabhadey@amitabhadey:~$ cat file1 file2 file3
```

## System Information Commands

### Print system/kernel information

```console
amitabhadey@amitabhadey:~$ uname -a
amitabhadey@amitabhadey:~$ uname -s
```

### Display system processes

```console
amitabhadey@amitabhadey:~$ top -a
```

### Display disk usage

```console
amitabhadey@amitabhadey:~$ df -h
```
