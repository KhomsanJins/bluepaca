jQuery(document).ready(function ($) {



// Form-Payment ///
    $('.form-click').eq(0).closest('li').addClass("active");
    $('.form-click').eq(0).children('input').attr("checked", "checked");
    $(".form-click").on("click", function () {
        $('.form-click').children('input').removeAttr("checked");
        $('.form-click').closest('li').removeClass("active");
        $(this).children('input').attr("checked", "checked");
        $(this).closest('li').addClass("active");
    });




// Wish-List //
    $('#btnwishlist').click(function (e) {
        e.stopPropagation();
        console.log("click")
        $('#wishlistBox').addClass('active');
    });
    $('#closeWishlist').click(function (e) {
        e.stopPropagation();
        console.log("click")
        $('#wishlistBox').removeClass('active');
    });



    // Cart-List //
    $('#btncartlist').click(function (e) {
        e.stopPropagation();
        console.log("click")
        $('#cartlistBox').addClass('active');
    });
    $('#closecartlist').click(function (e) {
        e.stopPropagation();
        console.log("click")
        $('#cartlistBox').removeClass('active');
    });



    // Log-In //
    $('#btnLogin').click(function (e) {
        e.stopPropagation();
        console.log("click")
        $('#boxLogin').addClass('open');
    });
    $('#closeLogin').click(function (e) {
        e.stopPropagation();
        console.log("click")
        $('#boxLogin').removeClass('open');
    });



      // Register //
    $('#btnRegis').click(function (e) {
        e.stopPropagation();
        console.log("click")
        $('#boxRegis').addClass('open');
    });
    $('#closeRegis').click(function (e) {
        e.stopPropagation();
        console.log("click")
        $('#boxRegis').removeClass('open');
    });



///// หน้ารายละเอียดสินค้า /////
    $('#imageGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 3,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });


    ///// หน้าแรกบนสุด /////
    $("#slide-home").lightSlider({
        auto: false,
        loop: true,
        item: 1,
        keyPress: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 6,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });

        ///// หน้าแรก flashsale /////
    $("#flash-slider").lightSlider({
        auto: true,
        loop: true,
        item: 5,
        keyPress: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 6,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });


      ///// หน้าสินค้า Banner สินค้า /////
    $("#cat-slider").lightSlider({
        auto: true,
        loop: true,
        item: 1,
        keyPress: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 6,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });


     ///// หน้าสินค้า Banner สินค้า /////
    $("#newspd-slider").lightSlider({
        auto: true,
        loop: true,
        item: 1,
        keyPress: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 6,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });

     ///// หน้าสินค้ามาใหม่ /////
    $(".new-slider").lightSlider({
        auto: true,
        loop: true,
        item: 3,
        keyPress: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 6,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });

 
   ///// หน้ารายละเอียดสินค้า /////
    $("#related-slider").lightSlider({
        auto: true,
        loop: true,
        item: 5,
        keyPress: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 6,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });


         ///// หน้าแรก Brand /////
    $("#brand-slider").lightSlider({
        auto: true,
        loop: true,
        item: 6,
        keyPress: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 6,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
});