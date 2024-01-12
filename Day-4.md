- Section 1:

- Use Chrome DevTools to run a Lighthouse audit on the main page of your capstone project.
- Capture a screenshot of the Lighthouse report.  
-- https://raw.githubusercontent.com/rja87sd/Devtools-debugging/main/Screenshots/Day4-Lighthouse1.png

- Identify areas with low scores (below 80) and list them in your report.
-- According to Lighthouse report, LFG page has no section that scored below 80. (Lowest score was SEO section at 89.)



- Section 2:  

- Open the Performance tab in DevTools.  

- Record a performance profile while interacting with your site.  

- Identify any significant issues, such as long tasks, layout shifts, or heavy scripting.  
--  Unused CSS  
    Largest Contentful Paint Image Not Preloaded  
    CSS Not Minified  
    JS Not Minified  
    Unused JS  
    Legacy JS detected  

- Capture a screenshot of the performance profile.  
-- https://raw.githubusercontent.com/rja87sd/Devtools-debugging/main/Screenshots/Day4-Lighthouse2.png

- Propose optimizations based on your findings.  
--  Reduce unused CSS.  
    Preload images.  
    Minify CSS.  
    Minify JavaScript.  
    Reduce unused JavaScript.
    Modernize JavaScript code.



- Section 3:

- Switch to the Network tab in DevTools.

- Reload your site and analyze the network activity.

- Identify resources that are large in size or take a long time to load (e.g., images, scripts, CSS files).
-- No large file sizes detected. All listed file sizes are less than 1KB.

- Capture a screenshot of the network activity panel.
-- https://raw.githubusercontent.com/rja87sd/Devtools-debugging/main/Screenshots/Day4-Lighthouse3.png

- Suggest ways to optimize these resources.
-- Resources already optimized.