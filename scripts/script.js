function loadOtters(query) {
  empty();
  $.getJSON("otters.json", function (data) {
    otters = data.otters;
    stack = $(window).width() > 800 ? true : false;
    localStorage.setItem("data", JSON.stringify(otters));
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
              <a href="${otter.link}"  class="btn">Wikipedia</a>
              <button class="btn" id=${index} onclick="redirect($(this).attr('id'))">Details</Button>
            </div>
          </div>
        </div>
    </div>`;
      let name = otter.name.toString().toLowerCase();
      let common = otter.common.toString().toLowerCase();
      query = query.toString().toLowerCase();
      if (
        query == "" ||
        name == query ||
        common == query ||
        common.includes(query) ||
        name.includes(query)
      ) {
        $("#ankor").append(divstring);
      }
    });
  });
}
function loadOneOtter(common) {
  empty();
  data = JSON.parse(localStorage.getItem("data"));
  $.each(data, function (index, otter) {
    if (
      otter.common.toString().toLowerCase() == common.toString().toLowerCase()
    ) {
      loadOtterByIndex(index);
    }
  });
}
function loadOtterByIndex(index) {
  empty();
  localStorage.setItem("otterIndex", index);
  data = JSON.parse(localStorage.getItem("data"));
  otter = data[index];
  let divstring = `
      <div class="col">
            <div class="card h-200 w-175" >
                <img src="${otter.img}" id="card-img-top" class="img-fluid rounded-start" alt="otter pic">
                <div class="card-body">
                  <h5 class="card-title">${otter.common}</h5>
                  <p class="card-text">${otter.desc}</p>
                  <hr>
                  <p class="card-text">${otter.detail}</p>
                </div>              
            </div>
    </div>
      `;
  $("#ankor").append(divstring);
}
function getWikipedia(article){
  $.ajax({
    type: "GET",
    url: `http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&page=${article}&callback=?`,
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
        console.log(data.parse);
    },
    error: function (errorMessage) {
    }
});
}
function redirect(index) {
  console.log(index);
  localStorage.setItem("otterIndex", index);
  window.location.href = "otter.html";
}
function loopIndex(index) {
  data = JSON.parse(localStorage.getItem("data"));
  length = data.length;
  index = index < 0 ? length - 1 : index;
  index = index > length - 1 ? 0 : index;
  return index;
}
function empty() {
  $(".col").each(function () {
    $(this).remove();
  });
}
