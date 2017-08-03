


function switches(id){

    'use strict';

    var Switch = document.getElementById(id),
        circle = document.getElementById(id).children[0];

     switch(circle.id){

              /*switch one vertical*/
         case 'v1off' : circle.id = 'v1on' ; Switch.id = 'sv1on' ; break;
         case 'v1on'  : circle.id = 'v1off'; Switch.id = 'sv1off'; break;
              /*switch one horiontal*/
         case 'h1off' : circle.id = 'h1on' ; Switch.id = 'sh1on' ; break;
         case 'h1on'  : circle.id = 'h1off'; Switch.id = 'sh1off'; break;

                /*switch two vertical*/
         case 'v2off' : circle.id = 'v2on' ; Switch.id = 'sv2on' ; break;
         case 'v2on'  : circle.id = 'v2off'; Switch.id = 'sv2off'; break;
         
              /*switch two horizontal*/
         case 'h2off' : circle.id = 'h2on' ; Switch.id = 'sh2on' ; break;
         case 'h2on'  : circle.id = 'h2off'; Switch.id = 'sh2off'; break;
            
              /*switch three vertical*/
         case 'v3off' : circle.id = 'v3on' ; Switch.id = 'sv3on' ; break;
         case 'v3on'  : circle.id = 'v3off'; Switch.id = 'sv3off'; break;
             /*switch three horiontal*/
         case 'h3off' : circle.id = 'h3on' ; Switch.id = 'sh3on' ; break;
         case 'h3on'  : circle.id = 'h3off'; Switch.id = 'sh3off'; break;

             /*switch four vertical*/
         case 'v4off' : circle.id = 'v4on' ; Switch.id = 'sv4on' ; break;
         case 'v4on'  : circle.id = 'v4off'; Switch.id = 'sv4off'; break;

            /*switch four horizontal*/
         case 'h4off' : circle.id = 'h4on' ; Switch.id = 'sh4on' ; break;
         case 'h4on'  : circle.id = 'h4off'; Switch.id = 'sh4off'; break;
            
         default: alert('something is going wrong!');

            }


    }
