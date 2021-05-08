<?php
$cookies_prompt_appeared = False;
if (!isset($_COOKIE['allow_cookies'])) {
    // Cookies prompt hasn't appeared before
    $cookies_prompt_appeared = False;
} else {
    $cookies_prompt_appeared = True;
}

if ($cookies_prompt_appeared) {
    // handle tracking
    if ($_COOKIE['allow_cookies'] == "True") { ?>
        <head>
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-144577045-2"></script>
            <script>
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());

                gtag('config', 'UA-144577045-2');
            </script>
        </head>
    <?php // This fuck off semicolon keeps breaking the linter so that's why this comment is here
        ;
    } else {
    }
} else {
    ?>
    <div id="cookies_modal" class="cookies">
        <div class="cookies_modal">
            <h1>You've probably read this like a million times before but</h1>
            <h2>WE USE COOKIES</h2>
            <p>
                This website uses Google Analytics to help gather a better understanding of the users that visit the website.
                The analytics help us understand our target audience and find ways to improve the website and it's also really fun to see the reach of the website across the world.
                Also, if you reject the cookies you'll be able to use the website in the exact same way as having accepted them so don't worry about missing
                functionality or anything like that.
            </p>
            <div class="cookies_buttons">
                <a onclick="allow()">
                    <p>Allow</p>
                </a>
                <a onclick="ignore()">
                    <p>Ignore</p>
                </a>
                <a onclick="reject()">
                    <p>Reject</p>
                </a>
            </div>
        </div>
    </div>
    <script src="https://www.worldchangelogs.com/scripts/cookies.js"></script>
<?php
} ?>