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

include 'home.html';
