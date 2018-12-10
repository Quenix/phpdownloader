<?php

require_once('../vendor/autoload.php');

$url = $_POST['data'];

$yt = new YouTubeDownloader();

$links = $yt->getDownloadLinks($url);

die(json_encode($links));

