'<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

date_default_timezone_set('Europe/Paris');
$date = date('m/d/Y h:i:s a', time());

if (empty($_POST['username']) || empty($_POST['usermail']) || empty($_POST['usermessage'])){
  echojson_encode(array(
    "sent" => false
  ));
  echo "One or more fields are not filled !";
  die();
  exit();
}else if(!empty($_POST['username']) && !empty($_POST['usermail'])){
  http_response_code(200);
  $subject = $_POST['userobject'];
  $to = "enzo.avagliano@ynov.com";
  $from = $_POST['usermail'];
  $msg = "<p style='margin-top:20px;'></p>";
  $headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
  // Starting message styling
  $headers.= "<p style='text-align: center;'><strong>NOUVEAU <span style='color: #9146ff;'>MESSAGE</span> DEPUIS ENZOAVAGLIANO.fr</strong></p>";
  $headers.="<p style='text-align: center;'><span style='color: #9146ff;'><strong>_______________________________________</strong></span></p>";
  $headers.="<p style='text-align: center;'>&nbsp;</p>";
  $headers.="<p style='text-align: left;'><span style='color: #000000;'>Nouveau message provenant du formulaire de contact.</span></p>";
  $headers.="<p style='text-align: left;'><span style='color: #000000;'>- Adresse mail &eacute;m&eacute;trice : " . $_POST['usermail'] . "</span></p>";
  $headers.="<p style='text-align: left;'><span style='color: #000000;'>- Objet du message : " . $_POST['userobject'] . "</span></p>";
  $headers.="<p style='text-align: left;'><span style='color: #000000;'>- Date d'envoi : " . $date . "</span></p>";
  $headers.="<p style='text-align: left;'>&nbsp;</p>";
  $headers.="<p style='text-align: left;'><span style='color: #9146ff;'>___________________&nbsp;</span></p>";
  $headers.="<p style='text-align: left;'><span style='color: #9146ff;'><strong>MESSAGE :</strong></span></p>";
  $headers.="<p style='text-align: left;'>&nbsp; " . $_POST['usermessage'] . "</p>";
  $headers.="<p style='text-align: left;'><span style='color: #000000;'>___________________&nbsp;</span></p>";

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
?>
