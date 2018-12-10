<?php

require_once('vendor/autoload.php');

$yt = new YouTubeDownloader();

$links = $yt->getDownloadLinks("https://www.youtube.com/watch?v=eVTXPUF4Oz4");

var_dump($links);

die('foi!');