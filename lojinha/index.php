<?php 

session_start();
if(isset($_GET['limpar'])){
    unset($_SESSION['buy']);
}

$camisas = array(
    ['name' => 'Choerry', 'image' => 'uploads/choerry.jpg', 'price' => '55.9'],
    ['name' => 'Chuu', 'image' => 'uploads/chuu.png', 'price' => '45.9'],
    ['name' => 'Heejin  ', 'image' => 'uploads/heejin.jpg', 'price' => '65']
);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loja</title>
    <!-- boostrap -->
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" 
 integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" 
 integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <!--fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!--css-->
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <nav class="navbar navbar-light bg-danger">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="./imagens/loja.png" alt="" width="50" height="50" class="d-inline-block align-text-top">
            </a>
        </div>
    </nav>
    <div class= "card-group text-center  container">
        <?php foreach($camisas as $key => $value): ?>
		  <div class="card">
		    <img src="<?= $value['image'] ?>" class="card-img-top" alt="...">
		    <div class="card-body">
		      <h5 class="card-title"><?= $value['name'] ?></h5>
		      <p class="card-text"><?= $value['price'] ?></p>
		      <a href="?comprar=<?php echo $key ?>" class="btn btn-warning">COMPRAR</a>
		    </div>
		  </div>
		<?php endforeach; ?>
    </div>
    <div class="container">
        <?php
            if(isset($_GET['comprar'])){
                $idCamisa = (int) $_GET['comprar'];
                if(isset($camisas[$idCamisa])){
                    if(isset($_SESSION['buy'][$idCamisa])){
                        $_SESSION['buy']['idCamisa']['quant']++;
                    }else{
                        $_SESSION['buy'][$idCamisa] = array('quant'=>1, 'name'=>$camisas[$idCamisa]['name'],'price'=>$camisas[$idCamisa]['price']);
                    }
                    echo '<script>alert("Camisa adicionada no carrinho")</script>';
                }else{
                    die("O produto não está mais no estoque");
                }
            }
            ?>
            <h2>Carrinho: </h2>
            <p><a href="?limpar" class="btn btn-secondary">LIMPAR CARRINHO</a></p>
        <?php
         if(isset($_SESSION['buy'])){
          foreach($_SESSION['buy'] as $key => $value){
             echo '<p>Nome:'.$value['name'].'| Quant.:'.$value['quant'].' | Valor: R$'.$value['price']*$value['quant'].':';
             echo "<br>";
            }
         }else{
            echo "O carrinho está vazio!";
         }    
        ?>
    <?php 
    $total = [
        'quants' => 0,
        'prices' => 0
    ];
    if(isset($_SESSION['buy']))
        foreach($_SESSION['buy'] as $key){
            $total['quants'] = $total['quants'] + $key ['quant'];
            $total['prices'] = $total ['prices'] + $key ['price'] * $key ['quant'];
        }
    echo $total['quants'].' produtos por R$ ' .$total['prices'];
    ?>
        
            
    </div>
</body>
</html>