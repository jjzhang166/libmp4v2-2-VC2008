function ObjectAD() {
  /* Define Variables*/
  this.ADID        = 0;
  this.ADType      = 0;
  this.ADName      = "";
  this.ImgUrl      = "";
  this.ImgWidth    = 0;
  this.ImgHeight   = 0;
  this.FlashWmode  = 0;
  this.LinkUrl     = "";
  this.LinkTarget  = 0;
  this.LinkAlt     = "";
  this.Priority    = 0;
  this.CountView   = 0;
  this.CountClick  = 0;
  this.InstallDir  = "";
  this.ADDIR       = "";
}

function CodeZoneAD(_id) {
  /* Define Common Variables*/
  this.ID          = _id;
  this.ZoneID      = 0;

  /* Define Unique Variables*/

  /* Define Objects */
  this.AllAD       = new Array();
  this.ShowAD      = null;

  /* Define Functions */
  this.AddAD       = CodeZoneAD_AddAD;
  this.GetShowAD   = CodeZoneAD_GetShowAD;
  this.Show        = CodeZoneAD_Show;

}

function CodeZoneAD_AddAD(_AD) {
  this.AllAD[this.AllAD.length] = _AD;
}

function CodeZoneAD_GetShowAD() {
  if (this.ShowType > 1) {
    this.ShowAD = this.AllAD[0];
    return;
  }
  var num = this.AllAD.length;
  var sum = 0;
  for (var i = 0; i < num; i++) {
    sum = sum + this.AllAD[i].Priority;
  }
  if (sum <= 0) {return ;}
  var rndNum = Math.random() * sum;
  i = 0;
  j = 0;
  while (true) {
    j = j + this.AllAD[i].Priority;
    if (j >= rndNum) {break;}
    i++;
  }
  this.ShowAD = this.AllAD[i];
}

function CodeZoneAD_Show() {
  if (!this.AllAD) {
    return;
  } else {
    this.GetShowAD();
  }

  if (this.ShowAD == null) return false;
  document.write(this.ShowAD.ADIntro);
}

var ZoneAD_16 = new CodeZoneAD("ZoneAD_16");
ZoneAD_16.ZoneID      = 16;
ZoneAD_16.ZoneWidth   = 0;
ZoneAD_16.ZoneHeight  = 0;
ZoneAD_16.ShowType    = 2;

var objAD = new ObjectAD();
objAD.ADID           = 62;
objAD.ADType         = 4;
objAD.ADName         = "baidu";
objAD.ImgUrl         = "";
objAD.InstallDir     = "http://www.xue5.com/";
objAD.ImgWidth       = 0;
objAD.ImgHeight      = 0;
objAD.FlashWmode     = 0;
objAD.ADIntro        = "<!-- ���λ��xue5���µײ�����600*200 -->\n\r<script type=\"text/javascript\" >BAIDU_CLB_SLOT_ID = \"723364\";</script>\n\r<script type=\"text/javascript\" src=\"http://cbjs.baidu.com/js/o.js\"></script>\n\r\n\r\n\r<!-- Baidu Button BEGIN -->\n\r<div id=\"bdshare\" class=\"bdshare_t bds_tools_32 get-codes-bdshare\">\n\r<span  style=\"font-size:14px;font-weight:bold\">������</span>\n\r<a class=\"bds_qzone\"></a>\n\r<a class=\"bds_tsina\"></a>\n\r<a class=\"bds_tqq\"></a>\n\r<a class=\"bds_renren\"></a>\n\r<a class=\"bds_t163\"></a>\n\r<span class=\"bds_more\"></span>\n\r</div>\n\r<script type=\"text/javascript\" id=\"bdshare_js\" data=\"type=tools&mini=1&uid=11677\" ></script>\n\r<script type=\"text/javascript\" id=\"bdshell_js\"></script>\n\r<script type=\"text/javascript\">\n\rdocument.getElementById(\"bdshell_js\").src = \"http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=\" + Math.ceil(new Date()/3600000)\n\r</script>\n\r<!-- Baidu Button END --><br>";
objAD.LinkUrl        = "";
objAD.LinkTarget     = 1;
objAD.LinkAlt        = "";
objAD.Priority       = 1;
objAD.CountView      = 0;
objAD.CountClick     = 0;
objAD.ADDIR          = "AD";
ZoneAD_16.AddAD(objAD);

ZoneAD_16.Show();
