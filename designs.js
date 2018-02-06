// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  const inputHeight = $("#inputHeight").val();
  const inputWidth = $("#inputWidth").val();
  const table = $("#pixelCanvas");
  table.children().remove();

  for (let x = 0; x < height; r++) {
    table.append("<tr></tr>");

    for (let y = 0; y < width; c++) {
      table.children().last().append("<td></td>");
    }
  }
  
  table.on("click", "td", function() {
    let color = $("input[type='color']").val();
    $(this).attr("bgcolor", color);
  });
}

$('input[type="submit"]').on('click', function (type){     
    type.preventDefault();
    makeGrid();
});

}
