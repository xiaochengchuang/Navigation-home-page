//搜索类型标志
var search_type=1;


//导航按钮点击事件
function dhclick(i){
	//设置搜索类型标志为当前点击类型
	search_type=i;
	//清除之前的选择位置提示
	$("#top li").removeClass("active");
	//将选择位置提示设置到点击位置
	$("#top ul li:nth-child("+i+")").addClass("active");
};


//搜索按钮点击事件	
function dhsearch(){
	//获取输入的搜索内容
	var keyword = $("#search_input").val();
	//根据选择的搜索类型进行跳转
	location.href=sslm[search_type-1][1]+keyword;
}


//初始化网站名
function wzmInit(){
	//修改title
	$("head title").text(wzm[0]);
	//修改左上角网站名
	$("#header .navbar-brand").text(wzm[0]);
	//修改左上角网站名超链接
	$("#header .navbar-brand").attr("href",wzm[1]);
}
	
	
/*
<ul class="nav nav-pills nav-justified">					
	<li class="active"><a href="javascript:dhclick(1);">网页</a></li>
	<li><a href="javascript:dhclick(2);">影视</a></li>
	<li><a href="javascript:dhclick(3);">网盘</a></li>
	<li><a href="javascript:dhclick(4);">种子</a></li>
	<li><a href="javascript:dhclick(5);">软件</a></li>
	<li><a href="javascript:dhclick(6);">音乐</a></li>
	<li><a href="javascript:dhclick(7);">小说</a></li>				
</ul>
*/	
//初始化搜索栏目
function sslmInit(){
	for (var k=0;k<sslm.length;k++){
		//给ul添加li标签，给li标签添加a标签，给a标签设置内容
		$('#top ul').append("<li><a>"+sslm[k][0]+"</a></li>"); 
		//给刚刚添加的a标签设置超链接
		$("#top ul li:nth-child("+(k+1)+") a").attr("href","javascript:dhclick("+(k+1)+")");
	};
	//初始化导航栏选择位置提示
	$("#top ul li:nth-child("+search_type+")").addClass("active");
}

	
/*
<div id="mid">
	<div>  
		<table class="table table-striped table-bordered table-hover text-center">
			<thead>
				<tr>
					<th colspan="6" class="active success text-center">网页</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
				</tr>
				<tr>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
					<td><a href="#">网页</a></td>
				</tr>
			</tbody>
		</table>
	</div>	  
</div>
*/
//初始化导航栏目
function dhlmInit(){
	for (var j=0;j<dhlm.length;j++){
		//添加table标签，给table添加thead和tbody标签
		$('#mid div').append("<table><thead></thead><tbody></tbody></table>"); 
		//给table添加class
		$("#mid div table:nth-child("+(j+1)+")").addClass("table table-striped table-bordered table-hover text-center");
		//给thead添加tr标签,给tr添加th标签,给th标签设置内容
		$("#mid div table:nth-child("+(j+1)+") thead ").append("<tr><th>"+dhlm[j][0][0]+"</th></tr>"); 
		//给th添加class
		$("#mid div table:nth-child("+(j+1)+") thead tr th").addClass("active success text-center");
		//给th设置自定义的背景颜色
		$("#mid div table:nth-child("+(j+1)+") thead tr th").css({"background-color": dhlm[j][0][1]});
		//给th添加colspan属性
		$("#mid div table:nth-child("+(j+1)+") thead tr th").attr("colspan","6");
		//每6个内容循环一次	
		for (var l=0;l<((dhlm[j].length-1.5)/6);l++){
			//给tbody标签添加tr标签，
			$("#mid div table:nth-child("+(j+1)+") tbody").append("<tr></tr>");
			for(var m=0;m<6;m++){
				//还存在元素未读取显示，添加有内容的td标签
				if(dhlm[j][1+l*6+m]!=null){
					//给tr标签添加td标签，给td标签添加a标签，给a标签设置内容
					$("#mid div table:nth-child("+(j+1)+") tbody tr:nth-child("+(l+1)+")").append("<td><a>"+dhlm[j][1+l*6+m][0]+"</a></td>");
					//将td设置为等宽
					$("#mid div table:nth-child("+(j+1)+") tbody tr:nth-child("+(l+1)+") td:nth-child("+(l*6+m+1)+")").addClass("col-xs-2");
					//给a标签添加超链接
					$("#mid div table:nth-child("+(j+1)+") tbody tr:nth-child("+(l+1)+") td:nth-child("+(l*6+m+1)+") a").attr("href",dhlm[j][1+l*6+m][1]);
				//元素已读取完，添加空标签
				}else{
					//给tr标签添加td空标签
					$("#mid div table:nth-child("+(j+1)+") tbody tr:nth-child("+(l+1)+")").append("<td></td>");
				}
			}
		}		
	};
}


//<div id="yqlj">友情链接：<a href="#"> 3.14导航 |</a><a href="#"> 3.14导航 |</a><a href="#"> 3.14导航 |</a><a href="#"> 3.14导航 |</a></div>
//初始化友情链接
function yqljInit(){
	for (var n=0;n<yqlj.length;n++){
		//添加a标签和标签内容
		$("#yqlj").append(" <a>"+yqlj[n][0]+" </a>|"); 
		//给a标签添加超链接
		$("#yqlj a:nth-child("+(n+1)+")").attr("href",yqlj[n][1]);
	}		
}


//<div id="gywm">关于我们： 3.14导航的介绍。3.14导航的介绍。3.14导航的介绍。3.14导航的介绍。</div>
//初始化关于我们	
function gywmInit(){
	//添加内容
	$("#gywm").append(" "+gywm);
}


//界面初始化
$(document).ready(function(){
	//初始化网站名
	wzmInit()
	//初始化搜索栏目
	sslmInit();
	//初始化导航栏目
	dhlmInit();
	//初始化友情链接
	yqljInit();
	//初始化关于我们
	gywmInit();
});