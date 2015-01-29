

###Week 2 Notes and Assignment

**1. Make sure that you can create a repository and commit files to Git.** We will follow the same basic pattern for creating projects and saving them to our repositories during the course of this class. The pattern goes like this: 


 1. Start a new project by cloning the simple-web-app-template from my Git repository:
 https://github.com/chriscanipe/web-app-template-simple

 In Terminal, navigate to your Sites folder and run the following command:
 ```
 $ git clone https://github.com/chriscanipe/web-app-template-simple.git project-name
 ```


 2. Work within the template to write the code and work through examples we cover in class.

 3. If you’ve added any files to your project, you’ll want to make sure they’re being tracked in Git. We do this by adding them  within the local repository.

 ```
 $ git add “my-file.json”
 ```
 Alternately, we can add all of the untracked files by typing this:
 ```
 $ git add .
 ```
 (Most of the time the latter will suffice.)


 4. Commit the changes to your local repository. The commit command requires a comment field indicated with “-am” followed by a note in quotes. Think of this as a note to yourself reminding the future you what you did before saving at this point. The comments will help you make sense of the commit history when viewed on your Git site.
 ```
 $ git commit -am “added a new data file and made changes to the css”
 ```

 5. If you haven’t done it yet, create a remote repository on your git page. This is done by clicking the plus sign next to your name in the upper right of your Git account page. Once created, you’ll want to assign the remote repository to the project on your desktop. This is the link between your working files and your Git page. To assign a remote address:

 First, check to see what’s currently assigned
 ```
 $ git remote show origin
 ```
 If it’s not the one you want (it’s probably still assigned to template repo on my Git site), you’ll want to remote it.
 ```
 $ git remote rm origin
 ```
 Now, assign the one you’ve just created using the link (HTTPS clone URL) on the right rail of your online Git repository.
 ```
 $ git remote add origin https://github.com/chriscanipe/my-new-project.git
 ```
 Finally, we’ll push our project to our newly created remote repository.
 ```
 $ git push origin master
 ```

 6. Miller time!!




**2. This week’s assignment (DUE SATURDAY 1/31 AT NOON)** is to write the following content from your data to the page as we did in class:

<ul>
<li>Player Name</li>
<li>Player Team</li>
<li>And one stat from their most recent season.</li>
</ul>

To help you with this assignment, I’ve created the following reference:
https://github.com/chriscanipe/baseball-ajax/blob/master/js/script.js

You can see a published version of the page here:
http://chriscanipe.com/data-vis-2015/baseball-card/








