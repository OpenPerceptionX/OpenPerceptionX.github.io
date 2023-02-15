<?php
$file = 'text.txt';
$content = file_get_contents($file);
?>

<?php
echo file_put_contents("text.txt","$content");
?>


<?php
$file = 'text.txt';

$t = $_POST["text"];

$text = "\n$t";

// 向文件追加写入内容
// 使用 FILE_APPEND 标记，可以在文件末尾追加内容
//  LOCK_EX 标记可以防止多人同时写入
file_put_contents($file, $text, FILE_APPEND | LOCK_EX);
?>
