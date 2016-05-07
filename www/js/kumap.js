var map;

var markers = new Array();
var zIndex = 0;

function createMap(mapId) {
  var lat = "35.39291572";
  var lng = "139.44288869";

  var latlng = new google.maps.LatLng(lat, lng);
  var opts = {
    zoom: 18,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById(mapId), opts);
}

function createMapMarker(lat, lng, hereIcon, befIcon) {
  var latlng = new google.maps.LatLng(lat, lng);
  var markerOpt = {
    position: latlng,
    map: map,
    icon: hereIcon,
    zIndex: zIndex
  }

  if (zIndex != 0) {
    markers[zIndex - 1].setIcon(befIcon);
  }

  markers.push(new google.maps.Marker(markerOpt));
  map.setOptions({
    center: latlng
  });
  zIndex++;
}

function getErrorMsg(error) {
  // エラーコードのメッセージを定義
  var errorMessage = {
    0: "原因不明のエラーが発生しました…。" ,
    1: "位置情報の取得が許可されませんでした…。" ,
    2: "電波状況などで位置情報が取得できませんでした…。" ,
    3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
  };
  // エラーコードに合わせたエラー内容をアラート表示
  return errorMessage[error.code];
}