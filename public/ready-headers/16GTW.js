(function($) {
    $(document).ready(function() {
        
        var headerHTML = ('<div class=row><div class="col-xs-4 form-image hide-for-med no-padding-left"><img alt="Give Now"border=0 class=img-responsive src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/slis_16gtw_gt_df.png?v=1479139988000"></div><div class="col-xs-12 col-lg-8 col-md-7 header-main-copy"><div class=row><div class="col-xs-12 header-copy no-padding"><a href=http://www.stlabre.org/ ><img alt="St. Labre Indian School"border=0 class="img-responsive main-logo"src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/st-labre-form-logo.png?v=1462903841000"></a></div><div class="col-xs-12 header-copy no-padding"><img alt=#GivingTuesday border=0 class="img-responsive gt-logo"src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/slis_16gtw_gt_df_text.png?v=1479139966000"><h2>Your special gift today will be doubled!</h2></div></div><div class=row><div class="col-xs-12 header-copy-paragraph"><p>Thanks to a generous matching gift, your donation will be matched dollar for dollar, up to $5,000. You can have an even greater impact on the Indian children at St. Labre, providing our boys and girls with hope for a better, brighter future.</div></div></div></div>');
        
        var headerCSS = ('<style type="text/css">p{padding:0;margin:0}form{background:url(https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/background-banner-form.png?v=1464984273000) no-repeat #FFF}#mainHeader{margin:5px -20px 0}.form-image{height:100%;width:auto}.form-image img{position:relative!important}.header-main-copy{margin-left:10px;padding-right:0;padding-top:10px}.main-logo{margin-top:20px;width:308px}.gt-logo{padding-top:5px;padding-bottom:5px;width:388px}.header-copy-paragraph{padding-left:0;padding-right:5px}.header-copy-paragraph p{line-height:18px;padding-left:0;padding-right:0}.header-copy h1,.header-copy h2,.header-copy h3,.header-copy h4,.header-copy h5,.header-copy h6{margin:0 0 10px;color:#d62a2a;font-weight:700}.header-copy h1{font-size:26px;line-height:30px}.header-copy h2{font-size:21px;line-height:26px}.header-copy h3{font-size:19px;line-height:23px}.header-copy h4{font-size:14px;line-height:17px}.header-copy h5{font-size:11px;line-height:14px}.header-copy h6{font-size:9px;line-height:12px}@media (max-width:1200px){.form-image{position:relative;height:80px}}@media(max-width:991px){#mainHeader{margin:0!important;text-align:center}.gt-logo,.main-logo{width:auto;margin-top:0;margin-left:auto;margin-right:auto}.header-copy,.header-copy-paragraph p,.header-main-copy{padding-right:30px;padding-left:30px;margin-left:auto;margin-right:auto;text-align:center}.hide-for-med{display:none!important}}</style>');
        
        
        var combined = headerHTML + ' ' + headerCSS;
        
        
        /* Append Header to Page */
        var headerContainer = document.getElementById('mainHeader');
        
        if(headerContainer){
            //Clear out header
            headerContainer.innerHTML = '';
        
            //Append Contents 
            headerContainer.innerHTML = combined;
        }
        
        
        
        /* Insert Additional JS Functions Here */
        
        
    });
})(jQuery);