#!/bin/php
<?php
/* 
El comando que deberemos lanzar en CLI sería con la siguiente estructura:
php fibonacci.php "2018-11-01 21:30:00" "2020-10-01 22:00:00"
*/

function fibonacci($first,$last)
{
    $n =10;
    $numbers = [$first,$last];
    for($i=2;$i<$n;$i++)
    {        
        $numbers[] = $numbers[$i-1] + $numbers[$i-2];        
    }
    return $numbers;
}

$firstDayMonth =new DateTime(date('Y-m-01'), new DateTimeZone('UTC'));
$lastDayMonth =new DateTime(date('Y-m-t'), new DateTimeZone('UTC'));

$lastDayYear = new DateTime(date('Y-11-t'), new DateTimeZone('UTC'));
$firstDayYear = new DateTime(date('Y-00-01'), new DateTimeZone('UTC'));

$initData= new DateTime($argv[1], new DateTimeZone('UTC'));
$finishData= new DateTime($argv[2], new DateTimeZone('UTC'));

echo "UNO: ";
print_r(fibonacci($firstDayMonth->getTimestamp(),$lastDayMonth->getTimestamp()));
echo "DOS: ";
print_r(fibonacci($firstDayYear->getTimestamp(),$lastDayYear->getTimestamp()));
echo "TRES: ";
print_r(fibonacci($initData->getTimestamp(),$finishData->getTimestamp()));