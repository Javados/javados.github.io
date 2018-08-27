<?php
$dbHost = "localhost";
$dbUser = "bogatyr-btc";
$dbPW = "pabogatyrs_dbrol";
$dbName = "bogatyrs_db";
$mysqli = mysqli_connect($dbHost, $dbUser, $dbPW, $dbName);
if(mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// basic info
$faucet['name'] = 'BOGATYR-BTC';
$faucet['description'] = 'Free Bitcoin';
$currency = 'BTC';
$currency_name = 'satoshi';
$faucet['captcha'] = 2; // 1 for bitcaptcha and 2 for recaptcha
// bitcaptcha setting
$bitcaptcha['id'] = '';
$bitcaptcha['key'] = '';


//recaptcha setting
$secretkey = '6LcNqTMUAAAAANwf9HR_FgCqO5URI_e_3WVFZUoe'; // your recaptcha private key
$publickey = '6LcNqTMUAAAAALDeimA2V1aSrB5hpcx7lUec2ptC'; // your recaptcha public key

// iphub setting, use it to block proxy. get your api at iphub.info
$iphub_api = '';

// config your reward
$faucet['reward'] = 1; // your faucet's reward
$faucet['time'] = 1800;  // time to wait beetwen 2 claims, in second.
$faucet['ref'] = 5;
$faucet['url'] = 'http://bogatyr-btc.tk/';

$faucethub_api = "709b5129ece23aab601648872939a1e7";

// config your short link, read full instruction at http://coinbox.club/
$config_link['status'] = 'on'; // turn on or off short link bounus
$config_link['reward'] = 19; // short link bounus amout
     //  start config short link api
$link[1] = "https://www.cut4.cash/api?api=0b58f6fec916e5ceb2016f24a588ffd71d7045b4&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//1.75 USD with-0.01$
$link[2] = "http://coinb.ink/api?api=90258f2b5a853351d72b07c00e1c48332013f4c4&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//2-7 USD with-0.01$
$link[3] = "http://cutbit.io/api?api=783368a732d2cb8a2649763f7fd7c4a12efa27cf&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//2-7 USD with-0.5$
$link[4] = "https://tmearn.com/api?api=14cc103b713ecd745feb0dd32d96af883612d55d&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//2.8-7 USD with-3$
$link[5] = "https://adbilty.me/api?api=4e6d573ca2817dd1179f677461da9c16af8978a3&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//2.5 USD with-1$
$link[6] = "https://cutit.io/api?api=fbbcf98aa8fc8c75d3f39bd4c4a7caf7b5076632&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//3 USD with-2$
$link[7] = "http://bitcoadz.pw/api/?api=dcd58101cd4ccab61de28b33013f2970131b3d0e&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//1.2 USD with-1$
$link[8] = "http://coinarge.com/api?api=c2c086ad1f7de4443dbc128ea24f709e59f95f25&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//1.1 USD with-1$
$link[9] = "http://psl.io/api?api=e05c50036029ca0556008c01b6297b392ee36e3d&url=http://bogatyr-btc.tk/link.php?k={key}&format=text";
//1.1 USD with-2$

// ad spaces
$ad['top'] = "<iframe data-aa='687416' src='//ad.a-ads.com/687416?size=728x90' scrolling='no' style='width:728px; height:90px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>";

$ad['left'] = "<iframe data-aa='687389' src='//ad.a-ads.com/687389?size=160x600' scrolling='no' style='width:160px; height:600px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>";

$ad['right'] = '<iframe src="https://coinmedia.co/new_code_site72886.js" scrolling="no" frameborder="0" width="160px" height="630px"></iframe>';

$ad['above-form'] = '<div class="adbit-display-ad" data-adspace-id="65559E2606"></div>';

//$ad['bottom'] = '';
 
$ad['bottom-center-top'] = '<iframe src="https://coinmedia.co/new_code_site72888.js" scrolling="no" frameborder="0" width="468px" height="90px"></iframe>';

$ad['bottom-center-bottom'] = '<div class="adbit-display-ad" data-adspace-id="2D100BBBA9"></div>';

$ad['bottom-left'] = '<iframe src="https://coinmedia.co/new_code_site72893.js" scrolling="no" frameborder="0" width="300px" height="280px"></iframe>';

$ad['bottom-right'] = "<iframe data-aa='687457' src='//ad.a-ads.com/687457?size=300x250' scrolling='no' style='width:300px; height:250px; border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe>";
?>   