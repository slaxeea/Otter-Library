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
                  <h5 class="card-title">${otter.common}</h5>
                  <p class="card-text">${otter.desc}</p>
                </div>              
                <div class="card-footer">
                <div class="hstack text-center gap-3">
                <a href="${otter.link}" class="btn">Wikipedia</a>
                <a href="https://www.google.com/search?q=${otter.common}" class="btn">Google</a>
                </div>
                </div>
            </div>
    </div>`;
    let name = otter.name.toString().toLowerCase();
    let common = otter.common.toString().toLowerCase();
    query = query.toString().toLowerCase();
      if (query == "" || name == query  || common == query || common.includes(query) || name.includes(query)) {
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
