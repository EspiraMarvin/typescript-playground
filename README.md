### TYPESCRIPT PLAYGROUND

#### TOPICS COVERED

1. Built-in types
2. Variables
3. Arrays
4. Tuples
5. Enums
6. Functions
7. Objects
-  Type Alias (custom types)
8. Union Types
9. Intersection Types
10. Literal Types
11. Null types  
12. Optional Chaining
   - Optional property access operator
   - Optional element access operator
   - Optional call operator


### Additional
- tsconfig.json file compiler options
####  /* Language and Environment */
1.  "target": "ES2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
####  /* Modules */
2.   "module": "commonjs",                                /* Specify what module code is generated. */
3. "rootDir": "./src",                                  /* Specify the root folder within your source files. */
4.  "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
5.   "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
6. "removeComments": true,                           /* Disable emitting comments. */   
7.   "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */

 #### /* Type Checking */
8. "strict": true,                                      /* Enable all strict type-checking options. */
9. "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
10. "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
11.   "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */