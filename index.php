<?php

$_CONF = [
  'development' => [
    'API_BASE_URL' => 'https://entourage-back-preprod.herokuapp.com/api',
    ],
  'staging' => [
    'API_BASE_URL' => 'https://entourage-back-preprod.herokuapp.com/api',
    ],
  'production' => [
    'API_BASE_URL' => 'https://entourage-back.herokuapp.com/api',
    ],
];

$DEFAULT_ENV = 'development';
$ENV = getenv('ENV');

if(!isset($_CONF[$ENV])) {
  $ENV = $DEFAULT_ENV;
}
$CONF = $_CONF[$ENV];

$html_file = 'index.html'
if(isset($_GET['path']) && 'contact' === $_GET['path']) {
  $html_file = 'contact.html';
}

include $html_file;
