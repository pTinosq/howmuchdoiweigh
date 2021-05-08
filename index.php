<!DOCTYPE html>
<html lang="en">
<!-- Global site tag (gtag.js) - Google Analytics -->



<head>
    <title>How much do I weigh?</title>
    <meta name="title" content="How much do I weigh?">
    <meta name="description"
        content="howmuchdoiweigh.com is a website that helps you convert any weight into many more useful and universal weight measurement units.">
    <meta name="keywords" content="weight, kilograms, how much, weigh, heavy, convert, conversion">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link href="./styles.css" rel="stylesheet">
    <link href="/includes/cookez/cookez.css" rel="stylesheet">
    <?php include $_SERVER["DOCUMENT_ROOT"] . "/includes/cookez/cookez.php"; ?>

</head>

<body>
    <h1 class="titleWrapper">How much do I weigh?</h1>

    <div class="selector-container">
        <p>kg</p>
        <input class="weightinput" id="weightinput" onkeydown="return noMinus(event)" onkeyup="weightHandler()"
            type="number" min="0"></input>
    </div>


    <div class="packages" id="packages">

    </div>

    <script src="./scripts/items.js"></script>
    <script src="./scripts/index.js"></script>
</body>

</html>