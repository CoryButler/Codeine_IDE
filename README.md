# Codeine IDE
#### the language of simple, numerical mutation

This IDE was developed specifically to write, load, and save programs in Codeine, a purposefully archaic interpreted language that allows the user to perform simple calculations and even create custom functions.

## IDE
Load, run, and save you own Codeine programs in the [online Codeine IDE](https://corybutler.github.io/codeine_ide)!

## Documentation
#### Codeine Format:
When stored as in a plain-text file, Codeine programs should be saved with the `*.rx` extension. 

`[operation] [var_0] [var_1?]`

The result of any operation is always applied to `[var_0]`.

```diff
- NOTE: - Each line may only have one operation.
```

#### Available operations:
 | Key | Name | Example | Description | 
 | :-: | :-: | - | - | 
 | + | add | + my_var 12 | adds 12 to my_var | 
 | = | assign | = my_var 12 | sets my_var to 12 | 
 | \~ | comment | \~ this is a comment | ignored on execution | 
 | ! | deallocate | ! my_var | deallocates my_var | 
 | @ | define | @ my_var (value?) | defines my_var and optionally sets it to value (defalut: 0) | 
 | / | divide | / my_var 12 | divides my_var by 12 | 
 | < | log | < my_var | logs value of my_var | 
 | & | loop | & 4 { ... } | runs statements on lines between braces 4 times; use # to access index | 
 | > | custom method | > my_method { ... } | runs statements on lines between braces when using my_method as a command; use # to access the argument | 
 | % | module | % my_var 3 | sets my_var to itself modulo 3 | 
 | \* | multiply | \* my_var 12 | multiplies my_var by 12 | 
 | ^ | power of | ^ my_var 3 | sets my_var to itself to the power of 3 | 
 | _ | nth root | _ my_var (my_root_index?) | sets my_var to its my_root_index (defaut: 2) root; | 
 | - | subtract | - my_var 12 | subtracts 12 from my_var | 