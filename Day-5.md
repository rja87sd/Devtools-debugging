Go through the provided files (`index.html`, `style.css`, and `app.js`). Each file contains several marked problems (indicated by comments like `<!-- Problem 1: -->`, `/* Problem 5: */`, etc.). Your task is to identify what each problem is and why it is an issue.

In this README.md file, document each problem. Write a sentence for each problem explaining what the issue is and why it's problematic. Use the format below for your documentation:

For each identified problem, propose a solution or an optimization strategy. Briefly describe how you would fix the issue.


### Index.html

#### Problem 1:

<head><!-- Problem 1: -->
    
    <link rel="stylesheet" href="style.css" />
    <style>
      .inline-style {
        font-weight: bold;
      }
    </style>
  </head>

- Description:  
    The head element in this document has no meta data. There is also a style element in the head, when there is already a link to a .css file. There is also no document title element.  

- Solution:  
    Add element(s) containing meta information such as:  
        <meta charset="UTF-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
        <title>Document</title>  
    Move contents of the style element into the .css file and remove the style element from the head element.  
    Add a title element to the head element. Example:  
        <title>Document</title>  

#### Problem 2:

As yet unsure.

- Description:  

- Solution:  

#### Problem 3:  

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="app.js"></script>
</body>

- Description:  
      

- Solution:  
    



### Reflect

After completing the exercise, write a brief reflection on what you learned from this debugging and optimization process. Discuss any new insights you gained and how you might apply these skills in future projects.