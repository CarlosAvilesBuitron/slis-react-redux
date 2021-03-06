(function($) {
    $(document).ready(function() {
        
        var headerHTML = ('<div class=row><div class="col-sm-4 form-image hide-for-small no-padding-left"><img alt="Give Now"border=0 class=img-responsive src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/test-header.png?v=1479160727000"></div><div class="col-sm-8 header-main-copy"><div class=row><div class="col-sm-12 header-copy no-padding"><a href=http://www.stlabre.org/ ><img alt="St. Labre Indian School"border=0 class="img-responsive main-logo"src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/st-labre-form-logo-react.png?v=1479160721000"></a><h2>Heal the wounds and broken&nbsp;hearts<br>of Indian children in need</h2></div></div><div class=row><div class="col-sm-12 header-copy-paragraph"><p>You can be a guardian angel to these incredible kids. Your gift now will feed, clothe, and provide a safe, secure place for Indian children who have nowhere else to go.</div></div></div></div>');
        
        var headerCSS = ('<style type="text/css">form{background:url(https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1988/background-banner-form-react.png?v=1479160715000) no-repeat #FFF}#mainHeader{margin:0 -20px}.form-image{height:220px}.form-image img{position:relative!important}.header-main-copy{padding-right:20px;margin-left:-20px}.header-copy-paragraph{padding-left:0}.header-copy-paragraph p{line-height:18px;padding-right:100px;padding-left:0}.main-logo{margin-top:20px;width:308px}.header-copy h2{font-weight:700;font-size:21px;color:#d62a2a;line-height:26px;margin:0 0 10px}@media (max-width:1200px){.form-image{position:relative;height:80px}}@media(max-width:760px){.header-copy-paragraph p,.header-main-copy{padding-right:20px;padding-left:20px}#mainHeader{margin:0!important}#mainHeader .row{margin-left:0;margin-right:0}.main-logo{width:auto;margin-top:0}.header-main-copy{margin-left:0}}</style>');
        
        
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