<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <div class=head>
    
     <link href="index.css" rel="stylesheet">
     <link href="index.html" rel="stylesheet">
    
  </div>
</head>
<body>


<form method="post" action="insert.php">
  <div class="jumbotron">
   <fieldset>
    <legend>パーソナルデータ</legend>
     <form action="insert.php" method="post">
     <p>性別:
       <input type="radio" name="sex" value="Male">Male
       <input type="radio" name="sex" value="Female">Female<br>
     <label>名前：<input type="text" name="name"></label><br>
     <label>Email：<input type="text" name="email"></label><br>
     <label>Height：<input type="text" name="height"></label><br>
     <label>Weight：<input type="weight" name="weight"></label><br>
     <label>Comments:<textArea name="naiyou" rows="4" cols="40"></textArea></label><br>
     <input type="submit" value="送信">
    </fieldset>
  </div>
</form>




</body>
</html>
