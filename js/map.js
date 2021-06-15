var container = document.querySelector('#map');
var branch_btns = document.querySelectorAll(".branch li"); 

var options = {
  center: new kakao.maps.LatLng(37.5130525, 127.0582537),
  level: 3
};
var map = new kakao.maps.Map(container, options);
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

var markerOptions = [
  {
    title: "강남점",
    latlng: new kakao.maps.LatLng(37.5014232,126.9562681),
    // imgSrc: 'img/marker.png',
    // imgSize: new kakao.maps.Size(232, 99),
    // imgPos: { offset: new kakao.maps.Point(116, 99) },
    button: branch_btns[0]
  },
  {
    title: "대전은행점",
    latlng: new kakao.maps.LatLng(36.328879,127.4183453),
    // imgSrc: 'img/marker.png',
    // imgSize: new kakao.maps.Size(232, 99),
    // imgPos: { offset: new kakao.maps.Point(113, 99) },
    button: branch_btns[1]
  },
  {
    title: "대전시청역점",
    latlng: new kakao.maps.LatLng(36.3402215,127.3987247),
    // imgSrc: 'img/marker.png',
    // imgSize: new kakao.maps.Size(232, 99),
    // imgPos: { offset: new kakao.maps.Point(116, 99) },
    button: branch_btns[2]
  }
];

for (var i = 0; i < markerOptions.length; i++) {
  new kakao.maps.Marker({
    map: map,
    position: markerOptions[i].latlng,
    title: markerOptions[i].title,
    // image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
  });

  (function (index) {
    markerOptions[index].button.onclick = function (e) {
      e.preventDefault();

      for (var k = 0; k < markerOptions.length; k++) {
        markerOptions[k].button.classList.remove("on");
      }
      markerOptions[index].button.classList.add("on");
      moveTo(markerOptions[index].latlng);
    }
  })(i);
}

window.onresize = function () {
  var active_btn = document.querySelector(".branch li.on"); 
  var active_index = active_btn.getAttribute("data-index");
  console.log(active_index);
  map.setCenter(markerOptions[active_index].latlng);
}

function moveTo(target) {
  var moveLatLon = target;
  map.setCenter(moveLatLon);
}

var t_on = document.querySelectorAll(".traffic li")[0]; 
var t_off = document.querySelectorAll(".traffic li")[1];

t_on.addEventListener("click", function (e) {
  e.preventDefault();

  map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  t_on.classList.add("on");
  t_off.classList.remove("on");
});
t_off.addEventListener("click", function (e) {
  e.preventDefault();
  map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  t_on.classList.remove("on");
  t_off.classList.add("on");
});

setDraggable(true);
function setDraggable(draggable) {
  map.setDraggable(draggable);
}

setZoomable(true); //false 
function setZoomable(zoomable) {
  map.setZoomable(zoomable);
}
