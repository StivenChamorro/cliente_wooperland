<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Dashboard')</title>
    <link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
    @vite(['resources/views/layouts/css-layouts/admin-css/dashboard.css', 'resources/views/layouts/js-layouts/admin-js/dashboard.js'])
    @yield('custom_css')
</head>
<body>
    <!-- Sidebar -->
    <aside class="sidebar">
        <div class="logo">
            <div class="logo-img"></div>
            <span class="logo-text">AdminPanel</span>
        </div>
        <nav>
            <div class="nav-item active">Dashboard</div>
            <div class="nav-item">Users</div>
            <a href="{{route('stores.index')}}"><div class="nav-item">Stores</div></a>
            <div class="nav-item">Articles</div>
            <a href="{{route('topics.index')}}"><div class="nav-item">Topics</div></a>
            <div class="nav-item">Levels</div>
            <div class="nav-item">Questions</div>
            <div class="nav-item">Achievements</div>
            <div class="nav-item">Answers</div>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Header -->
        <header class="header">
            <div class="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder="Search...">
            </div>
            <div class="admin-info" onclick="toggleModal()">
                <div class="admin-avatar"></div>
                <span class="admin-name">John Doe</span>
                <div class="dropdown-arrow"></div>
            </div>
        </header>

        <!-- Dynamic Content -->
        @yield('content')
    </main>

    <!-- Modal -->
    <div class="modal" id="adminModal">
        <div class="modal-content">
            <div class="modal-option" onclick="openProfile()">Profile</div>
            <div class="modal-option" onclick="logout()">Logout</div>
        </div>
    </div>
</body>

</html>
