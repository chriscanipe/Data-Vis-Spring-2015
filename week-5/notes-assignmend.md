

###Week 5 Notes and Assignment

**This week’s assignment (DUE SATURDAY 2/21 AT NOON)** is to make a line chart using Columbia unemployment data I pulled from the Bureau of Labor Statistics website.
http://data.bls.gov/timeseries/LAUMT291786000000006?data_tool=XGtable

I've taken the liberty of cleaning up the Excel file and arranging it as a proper time series. Notice the dates and values all live in their own respective columns.

Steps:

1. Set up a new project using the template
2. Clone a new version of the template and name is "d3-line-chart"
``` 
Ex: $ git clone https://github.com/chriscanipe/web-app-template-simple.git d3-line-chart
```
3. Create a new repository on your Git site
4. 3. Assign the repository as the remote location in your template
```
$ git remote rm origin
$ git add origin https://github.com/chriscanipe/d3-line-chart.git
```
5. Add your files locally
```
$ git add .
```
6. Commit your files locally
```
$ git commit -am "committing for the first time"
```
7. Push your changes to your remote repository
```
$ git push origin master
```



Prepare your data

1. Convert the Excel data to JSON by pasting it into Mr. Data Converter (Output as: JSON - Properties).
2. Check to make sure your data is strucrured properly using the JSON Lint tool.
3. Paste it into a JSON file in the JavaScript folder of your template.

Create a line chart using the d3 Line Chart example as a starting point
1. Copy and paste the script into your script.js file
2. Copy and paste the css into your style.css file
3. Change the ajax call to d3.json and point it at your JSON file
4. Change variable names and labels where appropriate in order to load your data












You can use this working example as a reference:

**Link:** http://chriscanipe.com/data-vis-2015/d3-bars/

**Repo:** https://github.com/chriscanipe/d3-bars

**IN ADDITION**, I'd like you to comment your code. We haven't spent enough time yet with D3 for you to understand everything that's happening, but I'd like to see you take a stab at explaining what's happening. I've added 7 prompts in the working example (see the repo link above). 

**Complete the assignment by committing your changes and pushing them to your Git page, and emailing the link to me and Mike Jenner.**

There are no wrong answers here, other than those that show lack of effort. So give it a shot, tell me how you think it works. It's helpful to Google bits of code. The internet is full of people asking the same questions you have, and just as full of other people willing to compose thoughtful answers. And of course, D3 is a very well documented library. You can find exhuastive and technical answers in the official documentation: https://github.com/mbostock/d3/wiki

Best,
Chris




