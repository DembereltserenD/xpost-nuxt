(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KV4Q4DPP');
    
$(document).ready(function() {
    var tickerItems = $('.ticker-item');
    var currentIndex = 0;
    var itemCount = tickerItems.length;

    function showItem(index) {
        tickerItems.removeClass('active');
        tickerItems.eq(index).addClass('active');
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showItem(currentIndex);
    }

    $('.ticker-nav .next').click(nextItem);
    $('.ticker-nav .prev').click(prevItem);

    // Auto-advance every 3 seconds
    var autoAdvance = setInterval(nextItem, 3000);

    // Pause auto-advance when hovering over the ticker
    $('.ticker-wrapper').hover(
        function() { clearInterval(autoAdvance); },
        function() { autoAdvance = setInterval(nextItem, 3000); }
    );
});

