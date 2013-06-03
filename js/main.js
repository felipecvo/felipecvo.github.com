(function( $ ) {
  $.present = function(selector, callback) {
    var item = this.find(selector);
    if (item.length > 0) {
      callback($(item));
    }
  };
})(jQuery);

$(function() {
  $.present('.js-github-projects', function(div) {
    $.getJSON('https://api.github.com/users/felipecvo/repos?callback=?', function(data) {
      for(var i=0; i<data.data.length; i++) {
        var project = $('<p />').append(data.data[i].name).append($('<br/>'));
        div.append(project);
      }
      console.log(data);
    });
  });
});
