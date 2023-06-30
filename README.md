                                                                               
                                WWWNNNNXXXXXNNNNWWW                                 
                           WNNXXKK000000000000000KKKXXNWW                           
                       WWNXK000000000000000000000000000KKXNW                        
                    WWXK00000000000000000000000000000000000KXNW                     
                  WNXK0000000000000000000000000000000000000000KXW                   
                WNK000000000000000000000000000000000000000000000KXW                 
               NX0000000000000000000000000000000000000000000000000KNW               
             WNK0000000000000000000000000000000000000000000000000000XW              
            WX0000000000000000000000000000000000000000000000000000000KN             
           WX0000000KKK00000000000000000000000000000000000000000000000KN            
          WX000KXXNWWWWNX0000000000000000000000000000000000000000000000KN           
       WNXKKKXNW        N000000000000KKXXNNNNNNNNNNXKK000000000000000000XW    WXXNW 
     WNXXXNWWNNXKKXW   WK00000000KXNNWW             WNK000000000000000KXN  WNKO0XW  
     WWWWXK0Okxxxx0N  WX000000KNNW      WWW        WNX0000000000000KXWW  WXOkkKW    
       NOxxxxxxxkXW  N0000KXWW     WNK0OOKW     WNX000000000000KXNW   NKOxxONW     
        XkxxxxxxxON  WNKKXNW     WX0OkxxkKN     WX00000000000KXNW    NKkxxx0N       
        Kxxxxxxxx0W   WWW     WXKOxxxxxOXW    WNK0000000000KXWW    NKkxxxxON        
        Kkxxxxxxx0W        WXKOxxxxxxxON     WX0000000000KNW     NKOxxxxxxOW        
        Xkxxxxxxxk0NWWWNXK0OxxxxxxxxxON    WWX00000000KXNW     WXOxxxxxxxx0W        
        NOxxxxxxxxxkkOkkxxxxxxxxxxxxkX     NKK000000KXNW     WXOxxxxxxxxxxK         
        WKxxxxxxxxxxxxxxxxxxxxxxxxxx0W     NK0000KXNW      WXOxxxxxxxxxxxON         
         NOxxxxxxxxxxxxxxxxxxxxxxxxkX      WNNXNNWW      WXOxxxxxxxxxxxxxKW         
         WKkxxxxxxxxxxxxxxxxxxxxxxxON                  NKOxxxxxxxxxxxxxx0N          
          WKxxxxxxxxxxxxxxxxxxxxxxxkX               WNKkxxxxxxxxxxxxxxxON           
           WKkxxxxxxxxxxxxxxxxxxxxxx0W           WNXOkxxxxxxxxxxxxxxxxOX            
            WKkxxxxxxxxxxxxxxxxxxxxxk0NW    WWWNK0kxxxxxxxxxxxxxxxxxxON             
             WXOxxxxxxxxxxxxxxxxxxxxxxkO0000OOkxxxxxxxxxxxxxxxxxxxxkKN              
               NKkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxOXW               
                WN0kxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxOXW                 
                  WNKOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxk0XW                   
                     WX0OxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkOKNW                     
                        WXK0OkxxxxxxxxxxxxxxxxxxxxxxxxkO0XNW                        
                           WWNXK0OOkkkxxxxxxxxkkkO00KXNW                            
                                  WWNNNXXXXNNNNWWW                                  
                                                                                

## Welcome to SplashCSS
We're still in pre-pre-release phase. Check back again soon or feel free to submit feedback.

### Building SplashCSS

#### Building the Demo
The demo page is already pre-built. The purpose of this page is to highlight several of the features of SplashCSS. You can browse the demo page by visiting the `index.html` file in the root. The .css and .js files it accesses are the files contained in the `/demo` folder.

To re-build the demo site including the CSS and JavaScript, run the following command in the root:

```
npm run buildDemo
```

#### Building the Distributables 
As with the demo, the distributables are already pre-built. These files are the files you'd want to reference in your application. They can be found in the `/dist` folder. 

To re-build the distributables including the CSS and JavaScript, run the following command in the root:

```
npm run build
```

### Using SplashCSS Functions and Mixins

#### color-wheel
The `color-wheel` function is found in the `_color-mixin.scss` file. It will take a base color and infer 10 other colors based on the base color including:

* light - 15% lighter base color
* lighter - 30% lighter base color
* dark - 15% darker base color
* darker - 30% darker base color
* complement - uses the SASS function to obtain the complement color
* invert - inverts the base color
* left60 - gets the color by adjusting the hue 60 degrees to the left of the existing color
* left120 - gets the color by adjusting the hue 120 degrees to the left of the existing color
* right60 - gets the color by adjusting the hue 60 degrees to the right of the existing color
* right120 - gets the color by adjusting the hue 120 degrees to the right of the existing color

You can use the function in your SASS like so:

```scss
$blue:    #007bff !default;
$indigo:  #6610f2 !default;
$purple:  #6f42c1 !default;
$pink:    #e83e8c !default;
$red:     #dc3545 !default;
$orange:  #fd7e14 !default;
$yellow:  #ffc107 !default;
$green:   #28a745 !default;
$teal:    #20c997 !default;
$cyan:    #17a2b8 !default;

$colors: ($blue, $indigo, $purple, $pink, $red, $orange, $yellow, $green, $teal, $cyan);

$i: 0;
@each $c in $colors {
    $theme: color-wheel($c);
    $i: $i + 1;

    $i2: 0;
    @each $l, $v in $theme {
        $i2: $i2 + 1;
        .color-#{$i}-#{$i2} {
            background-color: $v;
            &::before {
                content: "#{$v}";
            }
        }
    }
}
```