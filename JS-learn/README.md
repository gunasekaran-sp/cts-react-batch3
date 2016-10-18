


   -------------------------
   
   1. Javascript - advanced
   
   2. ES6 new fetaures
   
   3. TDD & BDD style dev
   
      and
      
      compiler & build tools
      
      babel
      webpack
   --------------------------
   
   4. React 
   5. Redux
   
   --------------------------
   
   6. NodeJS
   
   7. Express
   
   --------------------------
   
   
    JS - lang
    
    
    --> scripting lang for web-pages in browser-envi
    +
    --> server side programming on Node.js
    
    --> mobile application
    
    --> command-line tools
   
   
   
   Features
   
   --> functional programming lang
   --> OO concepts
   --> dynamic data-types
   --> single-threaded lang
   --> supports better concurrency using 'Event-Loop'
   --> All IO operations are non-blocking with callbacks.
   
   
   when to use ?
   
   Event-Driven and Asynchronous function exe.
   
   
   
   standard
   
   
   JS-lang is based on 'ECMAScript' spec
   latest : ES6 spec
   
   
   
   how JS prgrams will get execute ?
   
    using 'JS-engine'
    
    
    browser envi
    
    chrome  --> v8 ( C++)
    firefox --> rhino ( java )  
    IE      --> chakra
    safari  --> nitro
    
    Non browser envi
    
    NodeJS  --> v8
    JVM     --> nashorn
    Apache CouchDB 
    
   ------------------------------------- 
     
   ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript
   
   ------------------------------------- 
   
   
   JS lang
   
     --> single threaded lang
     --> supports better concurrency
     --> supports non-blocking IO
     
     --> terms : callback , event-loop
   
   
   
   e.g  chrome-browser
   
        1. JS engine ( v8 )  based on ECMAScript spec
        
           a. call-stack  ( memory to execute contexts )
           b. heap        ( memory to keep objects     )
   
        2. Web APIs ( e.g DOM , XHR , Timer , HTML5 APIs )  based on w3c standards
        
        3. callback-queue / message-queue 
        
        4. Event-Loop  ( main hero )
   
   
   ---------------------------------------- 
   
   
   http://latentflip.com/loupe/


   ---------------------------------------- 
   

  Execution Context 
  -------------------

  Execution Context:

  memory with given args and local var to execute instructions.

  --> when JS-engine boots , by default we get one global-Execution Context

      global-Execution Context owned by 'global-object'

      browser-envi  --> window
      NodeJS envi   --> process/global


  2 phases

  phase-1 : creation phase

      all the variables declared anywhere will get hoisted to top with default value 'undefined'

  phase-2 : execution phase

      instruction will get execute in sequence.



 imp note:

 every function invocation also creates new execution-context which is child of above.

---------------------------------------------------------------------------      


   
   