 //       <script type="text/javascript">
            $(window).on('scroll',function(){
                if($(window).scrollTop()){
                    $(' header').addClass('black');
                }
                else{
                    $(' header').removeClass('black');
                }
            });
    //   </script>