/**

* JS实现可编辑的表格

* 用法:addRow(...);

* Create by Asher at 2019-05-12

**/

/*表格最后新增一行*/
function addRow(Obj,tablename)
{
//	alert(sourTR.innerHTML);
	if(confirm("确定要添加吗？")==true){
	var con = Obj.cloneNode(true);	
	con.id=	"addrows";
	var copytr = Obj.parentNode.insertAdjacentElement("beforeEnd",con);
	var i = 0;
	for (i;i<document.getElementById(tablename).rows[con.rowIndex].cells.length;i++){
		if(document.getElementById(tablename).rows[con.rowIndex].cells[i].innerHTML != "")
			document.getElementById(tablename).rows[con.rowIndex].cells[i].innerHTML = "";
		}
		}
		else
		{return;}
//添加行
//    var newTr = document.getElementById('tabProduct').insertRow(index.parentNode.parentNode.rowIndex);    
//    //添加列
//    var newTd0 = newTr.insertCell();
//    //设置列内容和属性
//    newTr.setAttribute("height","50")
    }

/*删除表格最后一行*/
function delRow(notdeltr,notdeltd,tablename) {
//	alert(document.getElementById(tablename).rows.length);
	var flag=confirm("确定要删除吗？");
	if(flag==true){
	var delrowsindex = document.getElementById(tablename).rows.length-1;
	if (document.getElementById(tablename).rows[delrowsindex].id != notdeltr)
	document.getElementById(tablename).deleteRow(delrowsindex);
	else{
		document.getElementById(tablename).rows[delrowsindex].text="";
		$("table tr#"+notdeltr).each(function() {
			$("td#"+notdeltd).text("");
		});
		alert("禁止删除!"+"\n"+"已清空内容!");
		}
		}
		else
		{return;}
}

function download() {
	// 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，设置charset为urf-8以防止中文乱码
	//获取表格
	var tableHtml = $('table');
	var htmlx = []
	for(var i = 0;i<tableHtml.length;i++){
		htmlx.push (tableHtml[i].outerHTML)
	}

	html =  "<html><head><meta charset='utf-8' />" +
		    '<style type="text/css">' +
		    'table td {' +
		    'text-align: center;' +
		    'font-size: 20px;'+
		    ' }' +
		    '</style>' +
			"</head><body>" + htmlx.join("") + "</body></html>";	
		
		// 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
		var blob = new Blob([html], {
			type: "application/vnd.ms-excel"
		});
		
		var a = document.createElement("a");
		a.setAttribute("id","output");
		
		// 利用URL.createObjectURL()方法为a元素生成blob URL
		a.href = URL.createObjectURL(blob)
		// 设置文件名，目前只有Chrome和FireFox支持此属性
		a.download = "测试简报.xls";
		
		a.style.display = 'none';
		//触发点击事件
		a.click();		
				}
				
function playcss() {

	//不能显示class的样式，所以自己重新添加样式 主要为设置边框 格子大小
	$('table').css({
		'border':'1px solid #d5d5d2',
		'text-align':'',
		'border-collapse':'collapse',
		'background-color':'',
	});
	$('html').find('tr td').css({
		'text-align':'',
		'border':'1px solid #d5d5d2',
		'line-height':'30px',
		'padding':'0px 10px',
		'min-width':'50px'
	});
	
	$('div').css({
		'border':'',
		'text-align':'',
		'border-collapse':'',
		'background-color':'',
		'z-Index':'1',
	});
}

function tabletoxls(){
    $("html").table2excel({
        exclude: ".excludeThisClass",
        sheetName: "测试简报",
        name: "测试简报",
        filename: "测试简报-"+new Date(), // do include extension
        preserveColors: true // set to true if you want background colors and font colors preserved
    });
}