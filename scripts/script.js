function loadOtters(query) {
  empty();
  $.getJSON("otters.json", function (data) {
    otters = data.otters;
    $.each(otters, function (index, otter) {
      divstring = `  
    <div class="col">
            <div class="card h-100 w-75" >
                <img src="${otter.img}" class="card-img-top" alt="otter pic">
                <div class="card-body">
                  <h5 class="card-title">${otter.name}</h5>
                  <p class="card-text">${otter.desc}</p>
                </div>              
                <div class="card-footer">
                    <small class="text-muted">  </small>
                </div>
            </div>
    </div>`;
    let name = otter.name.toString().toLowerCase();
    query = query.toString().toLowerCase();
      if (query == "" || name == query || name.includes(query)) {
        $("#ankor").append(divstring);
      }
    });
  });
}

function empty() {
  $(".col").each(function () {
    $(this).remove();
  });
}
