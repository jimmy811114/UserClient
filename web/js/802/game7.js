/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//大樂透_天碰使用
var gtype = 802;

//注單格式(多筆)
var Order_array = new Array();
var Order_result = new Object();
Order_result.gtype = gtype;
Order_result.order_id = "S046-538";
Order_result.data = Order_array;

//增加注單
function addOrder() {
    //注單格式(單筆)
    var Order = new Object();
    Order.num = {"result":[[1],[4]]};
    Order.price = 68;
    Order.pay = 100;
    Order.odds = 240;
    Order.group_num=1;
    Order.stype=1;
    Order.type=9;
    
    //增加一筆
    Order_array.push(Order);

    //清空注單紀錄
    //Order_array = new Array();

    //傳送
    send();
}

//傳送
function send() {
    //轉JSON格式
    var result_json = JSON.stringify(Order_result);

    var theForm = document.forms['add_order'];
    document.getElementById('gtype').value = gtype;
    document.getElementById('data').value = result_json;
    theForm.submit();

    //顯示
    layer.msg('增加注單');
}
