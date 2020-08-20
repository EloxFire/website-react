<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['username']) && empty($_POST['usermail'])){
  die();
  exit();
}else if(!empty($_POST['username']) && !empty($_POST['usermail'])){
  http_response_code(200);
  $subject = $_POST['userobject'];
  $to = "enzo.avagliano@ynov.com";
  $from = $_POST['usermail'];
  $msg = "<p style='margin-top:20px;'>". $_POST['usermessage'] ."</p>";
  $headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
  $headers.= "<h1>Nouveau message depuis <pre>enzoavagliano.fr</pre> !</h1>";
  $headers.= "<h4 style='margin:0;'>Email : " . $from . "</h4>";
  $headers.= "<h4 style='margin:0;'>Autheur : " . $_POST['username'] . "</h4>";
  $headers.= "<h4 style='margin:0;'>Objet : " . $subject . "</h4>";
  $headers.= "<br/>";
  mail($to, $subject, $msg, $headers);
  echojson_encode(array(
    "sent" => true
  ));
  exit();
}else{
  echojson_encode(array(
    "sent" => false
  ));
  echo "Something went wrong";
  exit();
}
// if (empty($_POST['name']) && empty($_POST['mail'])) die();
//
// if ($_POST)
// {
//
//   // set response code - 200 OK
//
//   http_response_code(200);
//   $subject = $_POST['messageObject'];
//   $to = "enzo.avagliano@ynov.com";
//   $from = $_POST['mail'];
//
//   // data
//
//   $msg = $_POST['message'];
//
//   // Headers
//
//   $headers = "MIME-Version: 1.0\r\n";
//   $headers.= "Content-type: text/html; charset=UTF-8\r\n";
//   $headers.= "Vous avez reçu un message de la part de : " . $from . " !";
//   mail($to, $subject, $msg, $headers);
//
//   // echo json_encode( $_POST );
//
//   echojson_encode(array(
//     "sent" => true
//   ));
// }
// else
// {
//
//   // tell the user about error
//
//   echojson_encode(["sent" => false, "message" => "Something went wrong"]);
// }

?>
