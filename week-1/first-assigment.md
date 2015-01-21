
###Week 1 Notes and Assignment###

**1) Install Git.**
If you haven’t done so yet, please try to get Git working on your machine. The Git set up instructions are here: 
http://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Windows specific instructions:http://git-scm.com/download/win

Git does provide a GUI (graphical user interface) application to download and use. I strongly encourage you to use Git through the command line, however. Git is a pretty simple application once you get it up and running. GUI’s tend to hide the logic behind a curtain. And frankly, I don’t know any developers who use the GUI. If you’d like to read more on the subject, you can find a thoughtful discussion here: http://blog.jenius.me/post/19143824330/git-from-the-command-line-or-gui

And if you’re looking for a good overview of how Git works and a great instruction on how to do things like create a repository and make a first commit, I highly recommend this tutorial geared toward first-time users:

http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1
http://readwrite.com/2013/10/02/github-for-beginners-part-2


**2) This week’s assignment (DUE SATURDAY 1/24 AT NOON)** is to create a JSON data object from the baseball card I gave you in class. First things first, please read this tutorial on the JSON data format. http://www.w3schools.com/json/

You can use my own example as a guide:
https://github.com/chriscanipe/Data-Vis-Spring-2015/blob/master/week-1/js/baseballcard.json

JSON the most common data format you’ll encounter when making visualizations for the web. It’s a little like making a text version of an Excel spreadsheet, and it’s the format we’ll be using throughout this class. Like everything in programming, you’ll find JSON to be very particular about formatting. Every bracket must open and close [], every curly brace must open and close {} and every quote must open and close “”. Every object in an array must be separated by a comma, and arrays do not end in commas.

`{
	“property name” : “value”,
	“array name” : [1,2,3,4,5]
}`

Before submitting your assignment, please verify that you’ve formatted correctly using an online JSON validator tool: http://pro.jsonlint.com/

**Submitting your assignment:** I’d prefer that you submit this and all future assignments through Git. BUT, seeing as how we didn’t really cover that in class yesterday, I’ll accept this first assignment via email. (But I encourage you to try to create a repo and commit it through Git). Make sure you save your file with the .json file extension (ex: my_baseball_card.json).


