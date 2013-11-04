$(document).on('pop-initialized', function(){
  $('.asset').live('initialize', function(e, asset){
    fixBaseline(e.currentTarget);
  });

  $('.asset').live('destroy', function(e, asset){
    fixBaseline(e.currentTarget);
  });
});

function fixBaseline(el) {
  var $el = $(el).find('.content');
  $el.imagesLoaded(function(images, proper, broken){
    var height = $el.height();
    var baseline = 20;
    var offset = (baseline - height % baseline) % baseline;
    $el.css('padding-bottom', offset + 'px');
  });
  $(document).imagesLoaded(function(){
    Populr.ThemeEngine.repack();
  });
}
