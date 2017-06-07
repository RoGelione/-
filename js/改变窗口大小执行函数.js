	<script type="text/javascript">
		window.onresize = ScreenHeight;//当窗口被调整时执行的函数
		function ScreenHeight(){
			var bod = document.getElementsByTagName("body");//获得的是一个数组
			if (parseInt(window.innerWidth)<800) {
				bod[0].style.height="946px";
			}else{
				bod[0].style.height="1995px";
			}	
		}		
	</script>