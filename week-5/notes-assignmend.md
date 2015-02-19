

###Week 5 Notes and Assignment

**This week’s assignment (DUE SATURDAY 2/21 AT NOON)** is to make a line chart using Columbia unemployment data I pulled from the Bureau of Labor Statistics website.
http://data.bls.gov/timeseries/LAUMT291786000000006?data_tool=XGtable

I've taken the liberty of cleaning up the Excel file and arranging it as a proper time series. Notice the dates and values all live in their own respective columns.

Steps:

**Set up a new project using the template:**

1. Clone a new version of the template and name is "d3-line-chart"
 
 ``` 
 Ex: $ git clone https://github.com/chriscanipe/web-app-template-simple.git d3-line-chart
 ```
2. Create a new repository on your Git site
3. Assign the repository as the remote location in your template

 ```
 $ git remote rm origin
 $ git add origin https://github.com/chriscanipe/d3-line-chart.git
 ```
4. Add your files locally
 
 ```
 $ git add .
 ```
5. Commit your files locally
 
 ```
 $ git commit -am "committing for the first time"
 ```
6. Push your changes to your remote repository
 
 ```
 $ git push origin master
 ```

**Prepare your data**

1. Convert the Excel data to JSON by pasting it into [Mr. Data Converter](http://shancarter.github.io/mr-data-converter/) (Output as: JSON - Properties).
2. Check to make sure your data is strucrured properly using the [JSON Lint tool](http://pro.jsonlint.com/).
3. Paste it into a JSON file in the JavaScript folder of your template.

**Create a line chart using the [d3 Line Chart example](http://bl.ocks.org/mbostock/3883245) as a starting point**

1. Copy and paste the script into your script.js file
2. Copy and paste the css into your style.css file
3. Change the ajax call to d3.json and point it at your JSON file
4. Change variable names and labels where appropriate in order to load your data


