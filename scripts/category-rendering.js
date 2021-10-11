function loadCategoryOtters(category) {
  empty();
  otters = JSON.parse(localStorage.getItem("data"));
  $.each(otters, function (index, otter) {
    tags = otter.tags;
    console.log(
      tags.includes(category));
    divstring = `  
    <div class="col-lg-6 col">
      <div class="card h-100 w-75 otter-library" >
        <img src="${otter.imgs[0]}" class="card-img-top" alt="otter pic">
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
    if (
      tags.includes(category)
    ) {
      $(`#${category}-ankor`).append(divstring);
    }
  });
}
