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

<img
      src="https://via.placeholder.com/1200x800"
      alt="Large Image"
      id="largeImage"
    />

- Description:  
  The image on the page is very large and takes longer than the rest of the page to load.  

- Solution:  
  Resize the image to a smaller resolution or find a suitable image that is already at a smaller resolution.  

#### Problem 3:  

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="app.js"></script>
</body>

- Description: The jquery link is very script heavy, causing performance issues.  
      

- Solution:  The jquery link isn't really needed because it is full of code that JavaScript is already capable of carrying out. Remove the jquery link.  


### Style.css
    
#### Problem 5:  

  body {
    font-family: Arial, sans-serif !important;
    margin: 0 !important;
    padding: 0 !important;
    background-color: #f0f0f0 !important;
  }

  - Description:  
    There are unnecessary !important tags in the code. Since there is no bootstrap or other styling code linked to the document, there is no need for these tags and they may interact adversely with the rest of the css code.  

  - Solution:  
    Remove the !important tags. Example:  
    body {  
      font-family: Arial, sans-serif;  
      margin: 0;  
      padding: 0;  
      background-color: #f0f0f0;  
    }  

#### Problem 6:

  .unused-class-1,  
  .unused-class-2,  
  .unused-class-3 {  
    color: blue;  
    background-color: black;  
  }  

  - Description:  
    There is unused css code. This can cause performance issues when the page loads.

  - Solution:  
    Adjust css code so that unused classes or element IDs are instead linked to classes or element IDS that are currently in use. Example:  
    .body {  
      color: blue;  
      background-color: black;  
    }  

#### Problem 7:  

  img#largeImage {  
    width: 1200px;  
    height: auto;  
  }  

  - Description:  
    According to Lighthouse, the image does not have a static height or width.

  - Solution:  
    Adjust height property from auto to a static value. Example:  
    img#largeImage {  
      width: 1200px;  
      height: 900px;  
    }  

#### Problem 8:

  body div#profileContainer > h2 {
    font-size: 2em;
  }

- Description:  
  The div with an ID of profileContainer had no h2 element within it. This was causing the css code above to go unused.  

- Solution:  
  Add an h2 element with text to the div. Example:  
  <div id="profileContainer">
    <h2>Heading for Image</h2>
  </div>


### App.js

#### Problem 9:  

Unsure where the problem is, as code seems to be functioning correctly.

#### Problem 10:  

Unsure where the problem is, as the code seems to be functioning correctly.

#### Problem 11:  

  $('body').append(`<p>The sum is: ${sum}</p>`);

  - Description:  
    When the jquery script was unlinked from the document, this snippet ceased to function because $ was undefined.  

  - Solution:  
    Change the code to append the desired text to the document body. Example:  
    document.body.append(`The sum is: ${sum}`);


### Reflect

When debugging code, it is important to use the dev tools in tandem with one's attempts to locate errors or issues within the code by sight, as not all issues are readily apparent.