document.write("��վ���³�ע��ת���⣬��Ϊ��վԭ������������.�������»�ӭ��");
document.write("����ʽ��ת�أ�����ע�����߼����������������Ͷ��ɹ���<br/>");
document.write("������ת�ص����£����ߡ���Դ����Ȩ�����κ����ʣ����");
document.write("֪��һ����ʱ����abuse{at}rosoo.net����<br/>");
document.write("Some Rights Reserved 1998 - 2006  <a href='http://www.rosoo.net'><font face='Verdana, Arial, Helvetica, sans-serif' size='1'><b>Rosoo<font color='#CC0000'>.Net</font></b></font></a><br/>");
document.write("Except where otherwise noted, content on this site is<br/>");
document.write("licensed base <a href='http://creativecommons.org/licenses/by-nc-sa/1.0/deed.en'>a Creative Commons Attribution 2.5 License</a>");
document.write("<br/>");
document.write("<br/>");
document.write("��ý�忪�� QQȺ1��8655372");
document.write("<br/>");
document.write("��ý�忪�� QQȺ2��117013601");

function nocopy()
{
//document.selection.empty();
//alert("nocopy");
//return false;
//    if (window.clipboardData) {
  //      setTimeout(nocopy(){
    //        var text = clipboardData.getData("text");
      //      if (text && text.length > 300) {
        //        text = text + "\r\n\n�����������������ң�ת�������������" + location.href;
          //      clipboardData.setData("text", text);
           // }
//        }, 100);
//    }
}

function returnfalse()
{
	return false;
}

//document.oncontextmenu=returnfalse;
//document.ondragstart=returnfalse;
//document.onselectstart =returnfalse;
//document.onselect=nocopy;
document.oncopy=nocopy;
//document.onbeforecopy=returnfalse;
//document.onmouseup=nocopy;

document.oncopy=function(){
	if (window.clipboardData) {
		setTimeout(function() {
			var text = clipboardData.getData("text");
			if (text && text.length > 300) {
				text = text + "\r\n\n�����������������ң�ת�������������" + location.href;
				clipboardData.setData("text", text);
			}
		}, 100);
	}
}