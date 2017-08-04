/**
 * 计算两个坐标之间的距离
 * @method GetDistance
 * @param  {double}    lat1 第一个坐标纬度
 * @param  {double}    lng1 第一个坐标经度
 * @param  {double}    lat2 第二个坐标纬度
 * @param  {double}    lng2 第二个坐标经度
 * @return {double}         两个坐标见距离，单位M
 */
function GetDistance(lat1, lng1, lat2, lng2) {
    var dis = 0;
    var radLat1 = ToRadians(lat1);
    var radLat2 = ToRadians(lat2);
    var deltaLat = radLat1 - radLat2;
    var deltaLng = ToRadians(lng1) - ToRadians(lng2);
    var dis = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(deltaLng / 2), 2)));
    return dis * 6378137;

    function ToRadians(d) {  return d * Math.PI / 180;}
}
