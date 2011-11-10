(function() {
  $.fn.extend({
    pictureGraph: function(cols, rows, color, array) {
      var body_segment, col, height, row, segment, span_height, span_width, width, _ref, _ref2;
      width = this.width();
      height = this.height();
      this.append($('<div>').addClass('pictureGraph_container').css('width', width + 1).css('height', height).css('margin-left', 1).css('margin-top', 3));
      span_width = (width / cols) - 1.7;
      span_height = (height / rows) - 1.7;
      if (array) {
        array = array.split('|');
        for (row = 0, _ref = rows - 1; 0 <= _ref ? row <= _ref : row >= _ref; 0 <= _ref ? row++ : row--) {
          for (col = 0, _ref2 = cols - 1; 0 <= _ref2 ? col <= _ref2 : col >= _ref2; 0 <= _ref2 ? col++ : col--) {
            body_segment = $("<div data-grid_point='" + array[(row * cols) + col] + "'>").addClass('pictureGraph_segment').css('border', "1px solid " + color).css('width', span_width).css('height', span_height).css('float', 'left');
            console.log(body_segment);
            segment = $('.pictureGraph_container').append(body_segment);
          }
        }
      }
      return $('.pictureGraph_segment').live('click', function() {
        return console.log($(this).data('grid_point'));
      });
    }
  });
}).call(this);
