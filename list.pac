function FindProxyForURL(url, host){
host=host.toLowerCase();
if (
dnsDomainIs(host,"youtube.com")
||dnsDomainIs(host,"zuola.com")
||dnsDomainIs(host,"ziddu.com")
||dnsDomainIs(host,"zhuoqun.org")
||dnsDomainIs(host,"zhaiyx.com")
||dnsDomainIs(host,"zh.wikisource.org")
||dnsDomainIs(host,"zh.wikipedia.org")
||dnsDomainIs(host,"zh.wikinews.org")
||dnsDomainIs(host,"zdnet.com.tw")
||dnsDomainIs(host,"yule.tc")
||dnsDomainIs(host,"ytimg.com")
||dnsDomainIs(host,"youporn.com")
||dnsDomainIs(host,"yimg.com")
||dnsDomainIs(host,"yfrog.com")
||dnsDomainIs(host,"yam.com")
||dnsDomainIs(host,"yahoo.co.jp")
||dnsDomainIs(host,"xys.org")
||dnsDomainIs(host,"xun6.com")
||dnsDomainIs(host,"xuite.net")
||dnsDomainIs(host,"xirvik.com")
||dnsDomainIs(host,"xinweiyuekan.com")
||dnsDomainIs(host,"xintianxia.info")
||dnsDomainIs(host,"xilu.com")
||dnsDomainIs(host,"www.nic.cz.cc")
||dnsDomainIs(host,"www.co.cc")
||dnsDomainIs(host,"wujie.net")
||dnsDomainIs(host,"wsj.com")
||dnsDomainIs(host,"wretch.cc")
||dnsDomainIs(host,"wpoforum.com")
||dnsDomainIs(host,"worldjournal.com")
||dnsDomainIs(host,"wordpress.com")
||dnsDomainIs(host,"wired.com")
||dnsDomainIs(host,"wikimedia.org")
||dnsDomainIs(host,"wikileaks.org")
||dnsDomainIs(host,"whois.net")
||dnsDomainIs(host,"wenxuecity.com")
||dnsDomainIs(host,"wenda.google.com.hk")
||dnsDomainIs(host,"websitepulse.com")
||dnsDomainIs(host,"webcache.googleusercontent.com")
||dnsDomainIs(host,"watchzerg.com")
||dnsDomainIs(host,"watchshow.tv")
||dnsDomainIs(host,"warelex.com")
||dnsDomainIs(host,"w8w8.com")
||dnsDomainIs(host,"vpner.net")
||dnsDomainIs(host,"vpncup.com")
||dnsDomainIs(host,"vpn123.com")
||dnsDomainIs(host,"voanews.com")
||dnsDomainIs(host,"voachinese.uni.cc")
||dnsDomainIs(host,"virtualnow.net")
||dnsDomainIs(host,"vimeo.com")
||dnsDomainIs(host,"viiion.com")
||dnsDomainIs(host,"video.google.com")
||dnsDomainIs(host,"uwants.com")
||dnsDomainIs(host,"ustream.tv")
||dnsDomainIs(host,"upload.wikimedia.org")
||dnsDomainIs(host,"updown.com")
||dnsDomainIs(host,"uocn.org")
||dnsDomainIs(host,"ultrasn0w.ca")
||dnsDomainIs(host,"uighurbiz.net")
||dnsDomainIs(host,"udn.com")
||dnsDomainIs(host,"typepad.com")
||dnsDomainIs(host,"twurl.nl")
||dnsDomainIs(host,"twiyia.com")
||dnsDomainIs(host,"twitter.com")
||dnsDomainIs(host,"twitpic.com")
||dnsDomainIs(host,"twitlonger.com")
||dnsDomainIs(host,"twitbrowser.net")
||dnsDomainIs(host,"twimg.com")
||dnsDomainIs(host,"tweetmeme.com")
||dnsDomainIs(host,"tw.rd.yahoo.com")
||dnsDomainIs(host,"tw.page.bid.yahoo.com")
||dnsDomainIs(host,"tw.news.yahoo.com")
||dnsDomainIs(host,"tw.myblog.yahoo.com")
||dnsDomainIs(host,"tuvpn.com")
||dnsDomainIs(host,"turbobit.net")
||dnsDomainIs(host,"tumblr.com")
||dnsDomainIs(host,"ttrrgg.com")
||dnsDomainIs(host,"tsunagarumon.com")
||dnsDomainIs(host,"trialpay.com")
||dnsDomainIs(host,"torproject.org")
||dnsDomainIs(host,"tor.zuo.la")
||dnsDomainIs(host,"topsy.com")
||dnsDomainIs(host,"tokyo-tube.com")
||dnsDomainIs(host,"todaym.com")
||dnsDomainIs(host,"tinypic.com")
||dnsDomainIs(host,"thepiratebay.se")
||dnsDomainIs(host,"thepiratebay.org")
||dnsDomainIs(host,"tenacy.dynet.com")
||dnsDomainIs(host,"techweb.com.cn")
||dnsDomainIs(host,"tbpic.info")
||dnsDomainIs(host,"tax-ccp.com")
||dnsDomainIs(host,"t66y.com")
||dnsDomainIs(host,"t.co")
||dnsDomainIs(host,"surveystartonline.com")
||dnsDomainIs(host,"sugarsync.com")
||dnsDomainIs(host,"studentsforafreetibet.org")
||dnsDomainIs(host,"staticflickr.com")
||dnsDomainIs(host,"static.flickr.com")
||dnsDomainIs(host,"staralliance.com")
||dnsDomainIs(host,"spreadsheets.google.com")
||dnsDomainIs(host,"sourceforge.net")
||dnsDomainIs(host,"sonystyle.com.hk")
||dnsDomainIs(host,"sogi.com.tw")
||dnsDomainIs(host,"so-net.ne.jp")
||dnsDomainIs(host,"sngtvro.forums-free.com")
||dnsDomainIs(host,"sngtvro.cn")
||dnsDomainIs(host,"snese.net")
||dnsDomainIs(host,"smugmug.com")
||dnsDomainIs(host,"slashgear.com")
||dnsDomainIs(host,"sitetag.us")
||dnsDomainIs(host,"sites.google.com")
||dnsDomainIs(host,"sitebro.tw")
||dnsDomainIs(host,"sinchew.com.my")
||dnsDomainIs(host,"sina.com.tw")
||dnsDomainIs(host,"sina.com.hk")
||dnsDomainIs(host,"simplecd.org")
||dnsDomainIs(host,"shinjukubunka.or.jp")
||dnsDomainIs(host,"shenyunperformingarts.org")
||dnsDomainIs(host,"sexinsex.net")
||dnsDomainIs(host,"sensics.com")
||dnsDomainIs(host,"sendspace.com")
||dnsDomainIs(host,"secretchina.com")
||dnsDomainIs(host,"scribd.com")
||dnsDomainIs(host,"sbs.com.au")
||dnsDomainIs(host,"ruten.com.tw")
||dnsDomainIs(host,"rti.org.tw")
||dnsDomainIs(host,"rthk.org.hk")
||dnsDomainIs(host,"rthk.hk")
||dnsDomainIs(host,"roodo.com")
||dnsDomainIs(host,"rfi.fr")
||dnsDomainIs(host,"rfachina.com")
||dnsDomainIs(host,"rfa.org")
||dnsDomainIs(host,"reuters.com")
||dnsDomainIs(host,"retrocovers.com")
||dnsDomainIs(host,"renminbao.com")
||dnsDomainIs(host,"rememberthemilk.com")
||dnsDomainIs(host,"relcn.com")
||dnsDomainIs(host,"rapidshare.com")
||dnsDomainIs(host,"radikal.ru")
||dnsDomainIs(host,"qx.net")
||dnsDomainIs(host,"python.org")
||dnsDomainIs(host,"puretna.com")
||dnsDomainIs(host,"ptt.cc")
||dnsDomainIs(host,"pts.org.tw")
||dnsDomainIs(host,"psx-scene.com")
||dnsDomainIs(host,"psgroove.com")
||dnsDomainIs(host,"psfreedom.com")
||dnsDomainIs(host,"ps3stinger.com")
||dnsDomainIs(host,"ps3slimilly.info")
||dnsDomainIs(host,"ps3key.com")
||dnsDomainIs(host,"ps3iso.com")
||dnsDomainIs(host,"ps3-iso.com")
||dnsDomainIs(host,"prohosting.com")
||dnsDomainIs(host,"prestige-av.com")
||dnsDomainIs(host,"president.gov.tw")
||dnsDomainIs(host,"porntube.com")
||dnsDomainIs(host,"plus.google.com")
||dnsDomainIs(host,"plurk.com")
||dnsDomainIs(host,"planete-hd.com")
||dnsDomainIs(host,"pixnet.net")
||dnsDomainIs(host,"pipes.yahoo.com")
||dnsDomainIs(host,"picbucks.com")
||dnsDomainIs(host,"picasaweb.google.com")
||dnsDomainIs(host,"pel.hu")
||dnsDomainIs(host,"peacehall.com")
||dnsDomainIs(host,"pastie.org")
||dnsDomainIs(host,"panoramio.com")
||dnsDomainIs(host,"page2rss.com")
||dnsDomainIs(host,"owind.com")
||dnsDomainIs(host,"ouk.edu.tw")
||dnsDomainIs(host,"ottawachinese.com")
||dnsDomainIs(host,"or.cz")
||dnsDomainIs(host,"openx.org")
||dnsDomainIs(host,"openstreetmap.org")
||dnsDomainIs(host,"opengeodata.org")
||dnsDomainIs(host,"open.com.hk")
||dnsDomainIs(host,"omobox.com")
||dnsDomainIs(host,"obmem.com")
||dnsDomainIs(host,"nttdocomo.co.jp")
||dnsDomainIs(host,"ntdtv.com")
||dnsDomainIs(host,"nownews.com")
||dnsDomainIs(host,"nowlive.com")
||dnsDomainIs(host,"nobelprize.org")
||dnsDomainIs(host,"njuice.com")
||dnsDomainIs(host,"nicovideo.jp")
||dnsDomainIs(host,"nexton-net.jp")
||dnsDomainIs(host,"nextmedia.com")
||dnsDomainIs(host,"news.wenxuecity.com")
||dnsDomainIs(host,"newcosmos.com")
||dnsDomainIs(host,"newcenturynews.com")
||dnsDomainIs(host,"newcenturymc.com")
||dnsDomainIs(host,"ndsbbs.com")
||dnsDomainIs(host,"navy.mil")
||dnsDomainIs(host,"nakuz.com")
||dnsDomainIs(host,"n4g.com")
||dnsDomainIs(host,"myweb.hinet.net")
||dnsDomainIs(host,"mychinamyhome.com")
||dnsDomainIs(host,"myav.com.tw")
||dnsDomainIs(host,"my.opera.com")
||dnsDomainIs(host,"multiupload.com")
||dnsDomainIs(host,"mrss.dokoda.jp")
||dnsDomainIs(host,"molihua.org")
||dnsDomainIs(host,"mobile01.com")
||dnsDomainIs(host,"mobile.fujitv.co.jp")
||dnsDomainIs(host,"mobicares.com")
||dnsDomainIs(host,"mmaaxx.com")
||dnsDomainIs(host,"mitbbs.com")
||dnsDomainIs(host,"mininova.org")
||dnsDomainIs(host,"mingpaonews.com")
||dnsDomainIs(host,"mingpao.com")
||dnsDomainIs(host,"mingjingnews.com")
||dnsDomainIs(host,"middle-way.net")
||dnsDomainIs(host,"megaupload.com")
||dnsDomainIs(host,"mediafreakcity.com")
||dnsDomainIs(host,"mediafire.com")
||dnsDomainIs(host,"mclee.foolme.net")
||dnsDomainIs(host,"maycode.com")
||dnsDomainIs(host,"marvell.com")
||dnsDomainIs(host,"maps-api-ssl.google.com")
||dnsDomainIs(host,"main-hosting.com")
||dnsDomainIs(host,"lusoft.idv.tw")
||dnsDomainIs(host,"lsd.org.hk")
||dnsDomainIs(host,"lovezard.com")
||dnsDomainIs(host,"linksalpha.com")
||dnsDomainIs(host,"libertytimes.com.tw")
||dnsDomainIs(host,"lequs.com")
||dnsDomainIs(host,"leitie.com")
||dnsDomainIs(host,"latelinenews.com")
||dnsDomainIs(host,"lalulalu.com")
||dnsDomainIs(host,"labs.live.com")
||dnsDomainIs(host,"la-forum.org")
||dnsDomainIs(host,"kornhill.com.hk")
||dnsDomainIs(host,"key3.net")
||dnsDomainIs(host,"kenengba.com")
||dnsDomainIs(host,"kej.tw")
||dnsDomainIs(host,"kanzhongguo.com")
||dnsDomainIs(host,"jsdvd.com")
||dnsDomainIs(host,"jmj.hk")
||dnsDomainIs(host,"jma.go.jp")
||dnsDomainIs(host,"jkforum.net")
||dnsDomainIs(host,"javtracker.com")
||dnsDomainIs(host,"javidol.com")
||dnsDomainIs(host,"jav9.com")
||dnsDomainIs(host,"janonden.name")
||dnsDomainIs(host,"jacso.hk")
||dnsDomainIs(host,"j.mp")
||dnsDomainIs(host,"itunesfriend.com")
||dnsDomainIs(host,"isohunt.com")
||dnsDomainIs(host,"iphoneinchina.com")
||dnsDomainIs(host,"iphone-dev.org")
||dnsDomainIs(host,"internetfreedom.org")
||dnsDomainIs(host,"indexariagiovanni.com")
||dnsDomainIs(host,"imupload.com")
||dnsDomainIs(host,"immage.de")
||dnsDomainIs(host,"imgchili.com")
||dnsDomainIs(host,"img.ly")
||dnsDomainIs(host,"ime.nu")
||dnsDomainIs(host,"imdb.com")
||dnsDomainIs(host,"imageshack.us")
||dnsDomainIs(host,"imagerabbit.net")
||dnsDomainIs(host,"igfw.tk")
||dnsDomainIs(host,"iewb.net")
||dnsDomainIs(host,"idv.tw")
||dnsDomainIs(host,"idroidproject.org")
||dnsDomainIs(host,"iask.ca")
||dnsDomainIs(host,"huarencheng.com")
||dnsDomainIs(host,"hotfile.com")
||dnsDomainIs(host,"host1free.com")
||dnsDomainIs(host,"hootsuite.com")
||dnsDomainIs(host,"homelinux.net")
||dnsDomainIs(host,"hohayo.pixnet.net")
||dnsDomainIs(host,"hkreporter.com")
||dnsDomainIs(host,"hkplaza.net")
||dnsDomainIs(host,"hkgolden.com")
||dnsDomainIs(host,"hkepc.com")
||dnsDomainIs(host,"hk32168.com")
||dnsDomainIs(host,"hk.news.yahoo.com")
||dnsDomainIs(host,"hk.knowledge.yahoo.com")
||dnsDomainIs(host,"hk-pub.com")
||dnsDomainIs(host,"himemix.com")
||dnsDomainIs(host,"highba.com")
||dnsDomainIs(host,"hebine.net")
||dnsDomainIs(host,"haxnetwork.net")
||dnsDomainIs(host,"handicraft.org.tw")
||dnsDomainIs(host,"hamodo.com")
||dnsDomainIs(host,"hamdo.info")
||dnsDomainIs(host,"hacken.cc")
||dnsDomainIs(host,"guao.hk")
||dnsDomainIs(host,"guanyuexiaozhu.com")
||dnsDomainIs(host,"gstatic.com")
||dnsDomainIs(host,"groups.yahoo.com")
||dnsDomainIs(host,"groups.google.com")
||dnsDomainIs(host,"greenfieldbookstore.com.hk")
||dnsDomainIs(host,"greatroc.org")
||dnsDomainIs(host,"gqueues.com")
||dnsDomainIs(host,"gplygb.com")
||dnsDomainIs(host,"gphonefans.net")
||dnsDomainIs(host,"govecn.org")
||dnsDomainIs(host,"googleusercontent.com")
||dnsDomainIs(host,"googlelabs.com")
||dnsDomainIs(host,"googlecode.com")
||dnsDomainIs(host,"googleapis.com")
||dnsDomainIs(host,"google.com.tw")
||dnsDomainIs(host,"google.com.hk")
||dnsDomainIs(host,"google.com")
||dnsDomainIs(host,"goodshow.tw")
||dnsDomainIs(host,"goo.gl")
||dnsDomainIs(host,"gohappy.com.tw")
||dnsDomainIs(host,"gmodules.com")
||dnsDomainIs(host,"globalvoicesonline.org")
||dnsDomainIs(host,"git-scm.com")
||dnsDomainIs(host,"ggsoku.com")
||dnsDomainIs(host,"ggpht.com")
||dnsDomainIs(host,"getlib.com")
||dnsDomainIs(host,"getiton.com")
||dnsDomainIs(host,"geohot.com")
||dnsDomainIs(host,"geocities.jp")
||dnsDomainIs(host,"gcpnews.com")
||dnsDomainIs(host,"gavec.com")
||dnsDomainIs(host,"gamer.com.tw")
||dnsDomainIs(host,"game-tuts.com")
||dnsDomainIs(host,"gaforum.org")
||dnsDomainIs(host,"fwall.info")
||dnsDomainIs(host,"futureme.org")
||dnsDomainIs(host,"fuqi2.info")
||dnsDomainIs(host,"fring.com")
||dnsDomainIs(host,"friendfeed.com")
||dnsDomainIs(host,"freevpntoday.com")
||dnsDomainIs(host,"freetibet.org")
||dnsDomainIs(host,"freemorenews.com")
||dnsDomainIs(host,"freegroup.org")
||dnsDomainIs(host,"freechinanet.org")
||dnsDomainIs(host,"free.fr")
||dnsDomainIs(host,"freakshare.com")
||dnsDomainIs(host,"foursquare.com")
||dnsDomainIs(host,"followyourworld.appspot.com")
||dnsDomainIs(host,"flukes1.com")
||dnsDomainIs(host,"fivefilters.org")
||dnsDomainIs(host,"findbook.tw")
||dnsDomainIs(host,"finalevil.com")
||dnsDomainIs(host,"filesonic.com")
||dnsDomainIs(host,"fileserve.com")
||dnsDomainIs(host,"filefap.com")
||dnsDomainIs(host,"feelssh.com")
||dnsDomainIs(host,"feelingme.cn")
||dnsDomainIs(host,"feedproxy.google.com")
||dnsDomainIs(host,"feedex.net")
||dnsDomainIs(host,"feedburner.google.com")
||dnsDomainIs(host,"feedburner.com")
||dnsDomainIs(host,"fc2.com")
||dnsDomainIs(host,"fbesson.fr")
||dnsDomainIs(host,"fbcdn.net")
||dnsDomainIs(host,"fbcddn.net")
||dnsDomainIs(host,"fastpic.ru")
||dnsDomainIs(host,"famitsu.com")
||dnsDomainIs(host,"facebook.com")
||dnsDomainIs(host,"extabit.com")
||dnsDomainIs(host,"exblog.jp")
||dnsDomainIs(host,"everpix.com")
||dnsDomainIs(host,"espalwii.com")
||dnsDomainIs(host,"espalpsp.com")
||dnsDomainIs(host,"espalnds.com")
||dnsDomainIs(host,"errotica-archives.com")
||dnsDomainIs(host,"epochtimes.com")
||dnsDomainIs(host,"epochhk.com")
||dnsDomainIs(host,"encrypted.google.com")
||dnsDomainIs(host,"empornium.us")
||dnsDomainIs(host,"empflix.com")
||dnsDomainIs(host,"effectgames.com")
||dnsDomainIs(host,"ee.ntu.edu.tw")
||dnsDomainIs(host,"e-zone.com.hk")
||dnsDomainIs(host,"e-classical.com.tw")
||dnsDomainIs(host,"dwnews.com")
||dnsDomainIs(host,"dw.de")
||dnsDomainIs(host,"dw-world.de")
||dnsDomainIs(host,"dvd-img.net")
||dnsDomainIs(host,"dvbdream.org")
||dnsDomainIs(host,"dukio.com")
||dnsDomainIs(host,"dtiblog.com")
||dnsDomainIs(host,"dropbox.com")
||dnsDomainIs(host,"dongtaiwang.com")
||dnsDomainIs(host,"docs.google.com")
||dnsDomainIs(host,"dmm.com")
||dnsDomainIs(host,"dmm.co.jp")
||dnsDomainIs(host,"dlsite.com")
||dnsDomainIs(host,"discuss.com.hk")
||dnsDomainIs(host,"diahosting.com")
||dnsDomainIs(host,"developer.android.com")
||dnsDomainIs(host,"ddo.jp")
||dnsDomainIs(host,"danwei.org")
||dnsDomainIs(host,"d2pass.com")
||dnsDomainIs(host,"csze.com")
||dnsDomainIs(host,"creaders.net")
||dnsDomainIs(host,"comprousa.com")
||dnsDomainIs(host,"cnzeta.200u.com")
||dnsDomainIs(host,"cnzeta.0lx.net")
||dnsDomainIs(host,"cnyes.com")
||dnsDomainIs(host,"cnn.com")
||dnsDomainIs(host,"cl.d0z.net")
||dnsDomainIs(host,"cityjav.org")
||dnsDomainIs(host,"city9x.com")
||dnsDomainIs(host,"chpwn.com")
||dnsDomainIs(host,"chinese.engadget.com")
||dnsDomainIs(host,"chinamemo.org")
||dnsDomainIs(host,"chinainperspective.org")
||dnsDomainIs(host,"chinainperspective.com")
||dnsDomainIs(host,"chinagfw.org")
||dnsDomainIs(host,"chinadigitaltimes.net")
||dnsDomainIs(host,"chilicity.com")
||dnsDomainIs(host,"chengmingmag.com")
||dnsDomainIs(host,"change.org")
||dnsDomainIs(host,"cdtnet2.info")
||dnsDomainIs(host,"ccc.de")
||dnsDomainIs(host,"casiogzone.com")
||dnsDomainIs(host,"canyu.org")
||dnsDomainIs(host,"buynow.com.cn")
||dnsDomainIs(host,"busytrade.com")
||dnsDomainIs(host,"bullogger.com")
||dnsDomainIs(host,"buffalo-tech.com.tw")
||dnsDomainIs(host,"btmon.com")
||dnsDomainIs(host,"brainchip.biz")
||dnsDomainIs(host,"boxun.com")
||dnsDomainIs(host,"books.com.tw")
||dnsDomainIs(host,"boardreader.com")
||dnsDomainIs(host,"blogspot.com")
||dnsDomainIs(host,"blogs.yahoo.co.jp")
||dnsDomainIs(host,"blogimg.jp")
||dnsDomainIs(host,"blogger.com")
||dnsDomainIs(host,"blogcdn.com")
||dnsDomainIs(host,"blog.wenxuecity.com")
||dnsDomainIs(host,"blog.taragana.com")
||dnsDomainIs(host,"blog.plaync.jp")
||dnsDomainIs(host,"blog.hjwu.org")
||dnsDomainIs(host,"bit.ly")
||dnsDomainIs(host,"bigpichost.com")
||dnsDomainIs(host,"besson.tk")
||dnsDomainIs(host,"bcchinese.net")
||dnsDomainIs(host,"bbsland.com")
||dnsDomainIs(host,"bbcchinese.com")
||dnsDomainIs(host,"bbc.co.uk")
||dnsDomainIs(host,"baidu.jp")
||dnsDomainIs(host,"baidu.com")
||dnsDomainIs(host,"badongo.com")
||dnsDomainIs(host,"backchina.com")
||dnsDomainIs(host,"axiang.idv.tw")
||dnsDomainIs(host,"avno1.com")
||dnsDomainIs(host,"avfantasy.com")
||dnsDomainIs(host,"aventertainments.com")
||dnsDomainIs(host,"avdvd.me")
||dnsDomainIs(host,"atwiki.jp")
||dnsDomainIs(host,"atnext.com")
||dnsDomainIs(host,"atlaspost.com")
||dnsDomainIs(host,"ast.ly")
||dnsDomainIs(host,"ashaw.org")
||dnsDomainIs(host,"archive.org")
||dnsDomainIs(host,"appspot.com")
||dnsDomainIs(host,"appgallery.appspot.com")
||dnsDomainIs(host,"appengine.google.com")
||dnsDomainIs(host,"app.heywire.com")
||dnsDomainIs(host,"aol.tw")
||dnsDomainIs(host,"anonymouse.org")
||dnsDomainIs(host,"android.com")
||dnsDomainIs(host,"ameblo.jp")
||dnsDomainIs(host,"allhabit.com")
||dnsDomainIs(host,"alicesoft.com")
||dnsDomainIs(host,"aisex.com")
||dnsDomainIs(host,"aircrack-ng.org")
||dnsDomainIs(host,"advanscene.com")
||dnsDomainIs(host,"adultfriendfinder.com")
||dnsDomainIs(host,"adultblogranking.com")
||dnsDomainIs(host,"adult-plus.info")
||dnsDomainIs(host,"adop.jp")
||dnsDomainIs(host,"adf.ly")
||dnsDomainIs(host,"adbrite.com")
||dnsDomainIs(host,"aboluowang.com")
||dnsDomainIs(host,"abchinese.com")
||dnsDomainIs(host,"8cyber.com")
||dnsDomainIs(host,"881903.com")
||dnsDomainIs(host,"72pines.com")
||dnsDomainIs(host,"6te.net")
||dnsDomainIs(host,"6park.com")
||dnsDomainIs(host,"69bits.com")
||dnsDomainIs(host,"64memo.com")
||dnsDomainIs(host,"5i01.com")
||dnsDomainIs(host,"1wyh.cn")
||dnsDomainIs(host,"18p2p.com")
||dnsDomainIs(host,"10pix.ru")
)
//    return "PROXY 127.0.0.1:8118";
//    return "PROXY 127.0.0.1:8086";
    return "PROXY 127.0.0.1:8087";
else
    return "DIRECT";
}