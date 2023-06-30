                                                                               
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

```PowerShell
npm run buildDemo
```

#### Building the Distributables 
As with the demo, the distributables are already pre-built. These files are the files you'd want to reference in your application. They can be found in the `/dist` folder. 

To re-build the distributables including the CSS and JavaScript, run the following command in the root:

```PowerShell
npm run build
```

### Using SplashCSS Functions and Mixins

#### `color-wheel` Function
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

You can use the function in your SASS to build out style rules like so:

```scss
$blue:    #007bff;
$indigo:  #6610f2;
$purple:  #6f42c1;
$pink:    #e83e8c;
$red:     #dc3545;
$orange:  #fd7e14;
$yellow:  #ffc107;
$green:   #28a745;
$teal:    #20c997;
$cyan:    #17a2b8;

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

#### `calculate-contrast` Function
The `calculate-contrast` function will take two hex color values, such as `#f2f2f2` and `#000`, and calculate the contrast ratio, also known as relative luminance, between the two values. It does this by sending each color from the hex code being passed in to the `sRGBToLinear` function, which converts the color value to a numeric contrast value. 

You can use this function in your SASS like so:

```scss
$v1:      #f2f2f2;
$v2:      #000;
$c: calculate-contrast($v1,$v2)
```

#### `find-safe-color` Function
The `find-safe-color` function takes two parameters. The first is the starting color. The second is optional and is the ratio you're trying to achieve. The default value is 4.5. You can find out more about the WCAG ratios by visiting the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) page. The function will return a color by checking the initial lightness and based on that value, lightening or darkening the color by 2% until it finds a complementary color that meets the ratio passed in.

You can use this function in your SASS like so:

```scss
$base-color: #f2f2f2;
$wcag45: find-safe-color($base-color);
```

#### `wcag-safe-colors` Function
The `wcag-safe-colors` function takes a single, base color parameter. From that base color, the function will find appropriate WCAG safe colors based on WCAG 2.0 and WCAG 2.1. In addition to learning more about the ratios, you can learn more about the WCAG rules by visiting the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) page. For example, if following WCAG Level AAA, the normal text ratio should be at least 7:1. You can find that color by grabbing the return value `wcag21-aaa-normal-color`.

A dictionary is returned from `wcag-safe-colors` including the rule name and the color. Here are the rule names returned:

* `base-color` - This is the color passed in and is included in case you are passing in each color in a color array to build a map.
* `wcag20-aa-normal-color` - This requires a contrast ratio of 4.5:1 for normal text
* `wcag20-aa-normal-ratio` - This is the ratio calculated between the `base-color` and `wcag20-aa-normal-color`
* `wcag20-aa-large-color` - This requires a contrast ratio of 3:1 for large text
* `wcag20-aa-large-ratio` - This is the ratio calculated between the `base-color` and `wcag20-aa-large-color`
* `wcag21-aa-input-color` - This requires a contrast ratio of 3:1 for graphics and user interface components such as form input borders
* `wcag21-aa-input-ratio` - This is the ratio calculated between the `base-color` and `wcag20-aa-input-color`
* `wcag21-aaa-normal-color` - This requires a contrast ratio of 7:1 for normal text
* `wcag21-aaa-normal-ratio` - This is the ratio calculated between the `base-color` and `wcag21-aaa-normal-color`
* `wcag21-aaa-large-color` - This requires a contrast ratio of 4.5:1 for large text
* `wcag21-aaa-large-ratio` - This is the ratio calculated between the `base-color` and `wcag21-aaa-large-color`

Using the rules above, large text is defined as text that is bold 14 points or larger. It can also be normal weight text 18 points or larger. Normal text would be anything smaller than that.

An example usage of this function is shown below:

```scss
$base-color: #007bff;
.blue-box {
    background-color: $base-color;
    color: map-get(wcag-safe-colors($base-color), 'wcag21-aaa-normal-color');
    border: 1px solid map-get(wcag-safe-colors($base-color), 'wcag21-aa-input-color');
    font-size: 12pt;
}
```