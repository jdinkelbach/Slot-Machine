<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> 
        <title>Slot Machine</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="css/styles.css" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" type="text/javascript" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.11.0/underscore-min.js"></script>
    </head>
    <body class="text-center">
        <div class="machine">
            <iframe src="https://ntmaker.gfto.ru/newneontexten/?image_height=100&image_width=400&image_font_shadow_width=30&image_font_size=50&image_background_color=AA2323&image_text_color=FFFFFF&image_font_shadow_color=FF3434&image_url=&image_text=Slot Machine&image_font_family=MonumentoTi&" frameborder='no' scrolling='no' width="100%" height="100"></iframe>
            <h5 class="messages d-flex justify-content-around py-3">
                <span id="message"></span>
                <div>Money: <span id="playerMoney">$100</span></div>
            </h5>
            <div class="slots d-flex justify-content-center mb-4">
                <div class="symbol mx-2">
                    <img id="slot0" src="img/bar.png"></img>
                </div>
                <div class="symbol mx-2">
                    <img id="slot1" src="img/bar.png"></img>
                </div>
                <div class="symbol mx-2">
                    <img id="slot2" src="img/bar.png"></img>
                </div>
            </div>
            <h5 class>Current Bet: <span id="betAmount">$0</span></h5>
            <div class="bets d-flex justify-content-around my-4">
                <button id="bet-1" type="button" class="btn btn-info">$1</button>
                <button id="bet-5" type="button" class="btn btn-info">$5</button>
                <button id="bet-10" type="button" class="btn btn-info">$10</button>
                <div id="custom" class="d-flex">
                    <input id="input-custom" type="number" name="custom" placeholder="Custom Bet" class="px-0 text-center border-info"/>
                    <button id="bet-custom" type="button" class="btn btn-info ml-2 mr-0">Bet</button>
                </div>
            </div>
            <button id="spin" type="button" class="btn btn mb-3 px-4">Spin</button>
        </div>
        <div id="sources" class="mt-2">Images: engfto.com, Benoit Dare<br> SFX: Daniel Simion, Stephan Schutze.</div>
        <!--JS-->
        <script type="text/javascript" src="js/game.js"></script>  
    </body>
</html>