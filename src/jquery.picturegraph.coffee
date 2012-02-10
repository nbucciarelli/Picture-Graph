$.fn.extend
  pictureGraph: (cols, rows, color, array)->
    width = @.width()
    height = @.height()
    @.append($('<div>').addClass('pictureGraph_container').css('width', width + 3).css('height', height).css('margin-left', 1).css('margin-top', 3))
    span_width = (width / cols) - 1.7
    span_height = (height / rows) - 1.7
    if array
      array = array.split('|')
      for row in [0..rows-1]
        for col in [0..cols-1]
          body_segment = $("<div data-grid_point='#{array[(row * (cols)) + col]}'>").addClass('pictureGraph_segment').css('border', "1px solid #{color}").css('width', span_width).css('height', span_height).css('float','left')
          $('.pictureGraph_container').append(body_segment)

    $('.pictureGraph_segment').live('click', ->
      alert $(this).data('grid_point')
    )
