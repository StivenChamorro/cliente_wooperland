@extends('layouts.header1')

@section('custom_css')

    <link rel="stylesheet" href="{{ asset('css/terms.css')}}">
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">

@endsection

@section('content')

<body>
    <main class="main-container">
        <div class="content-wrapper">
            <!-- Imagen solo visible en pantallas grandes -->
            <div class="image-wrapper">
                <img src="img/terms_image.png" alt="Términos" class="terms-image">
            </div>

            <div class="terms-container">
                <h1 class="terms-title">Términos y Condiciones</h1>
                <div class="terms-content">
                    <h2 class="section-title">Bienvenido a Wooperland</h2>
                    <p class="section-text">
                        Al acceder y utilizar la aplicación Wooperland, aceptas cumplir con los siguientes términos y condiciones.
                        Wooperland es una aplicación educativa diseñada para niños, donde pueden aprender a través del juego.
                    </p>

                    <h3 class="section-subtitle">1. Uso adecuado</h3>
                    <p class="section-text">
                        Wooperland está destinada a niños y debe ser utilizada con fines educativos. Los usuarios no deben emplear la
                        aplicación para actividades que no estén relacionadas con el aprendizaje.
                    </p>

                    <h3 class="section-subtitle">2. Privacidad de los niños</h3>
                    <p class="section-text">
                        Respetamos la privacidad de los niños. Cualquier información proporcionada en la aplicación será utilizada
                        exclusivamente para mejorar la experiencia de aprendizaje. No compartimos ni vendemos la información personal
                        de los usuarios a terceros.
                    </p>

                    <h3 class="section-subtitle">3. Actualizaciones de contenido</h3>
                    <p class="section-text">
                        Wooperland puede actualizar sus contenidos y funcionalidades de vez en cuando para mejorar la experiencia del
                        usuario. Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.
                    </p>

                    <h3 class="section-subtitle">4. Responsabilidad del usuario</h3>
                    <p class="section-text">
                        Los padres y tutores son responsables de supervisar el uso de Wooperland por parte de los niños. La aplicación
                        no es responsable por cualquier mal uso de la misma.
                    </p>

                    <h3 class="section-subtitle">5. Contacto</h3>
                    <p class="section-text">
                        Si tienes alguna pregunta o inquietud sobre estos términos, puedes contactarnos a través de nuestro soporte en
                        la aplicación.
                    </p>
                </div>

                <!-- Checkbox para aceptar los términos -->
                <div class="checkbox-container">
                    <input type="checkbox" id="acceptTerms" class="terms-checkbox">
                    <label for="acceptTerms" class="terms-label">Acepto los Términos y Condiciones</label>
                </div>

                <!-- Botón Continuar -->
                <div class="button-container">
                    <a href="add_child">
                        <button class="continue-button">Continuar</button>
                    </a>
                </div>
            </div>
        </div>
    </main>

    @include('layouts.footer')

</body>

@endsection