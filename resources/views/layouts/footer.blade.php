<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>@yield('title')</title> <!-- Sección para el título dinámico -->
    @vite(['resources/views/layouts/css-layouts/footer.css'])

    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">

</head>
<body>

    <!-- resources/views/layouts/footer.blade.php -->
    <footer class="wooperland-footer">
    <div class="footer-content">
        <div class="footer-left">
            <div class="logo2"><h2 class="footer-logo">WOOPERLAND</h2></div>
            <div class="social-icons">
                <a href="#" class="social-icon instagram"></a>
                <a href="#" class="social-icon youtube"></a>
                <a href="#" class="social-icon facebook"></a>
            </div>
        </div>
        <div class="footer-right">
            <div class="legal"><h3>Legal</h3></div>
            <ul>
                <li><a href="#">Términos de uso</a></li>
                <li><a href="#">Política de Cookies</a></li>
                <li><a href="#">Política de privacidad</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2024 Wooperland - Todos los derechos reservados</p>
    </div>
    </footer>
</body>
</html>
