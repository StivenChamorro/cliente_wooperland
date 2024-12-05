@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Dashboard Overview')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
@vite(['resources/views/layouts/css-layouts/admin-css/adminprofile.css' , 'resources/views/layouts/js-layouts/admin-js/adminprofile.js'])

@endsection


@section('content')
<main class="main-content">

    <!-- Profile Content -->
    <div class="profile-container">
        <h1 class="profile-title">Admin Profile</h1>
        <form id="profileForm" class="profile-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
            </div>
            <div class="form-group">
                <label for="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name" >
            </div>
            <div class="form-group">
                <label for="birthdate">Birthdate:</label>
                <input type="date" id="birthdate" name="birthdate" >
            </div>
            <div class="form-group">
                <label for="user">Username:</label>
                <input type="text" id="user" name="user" >
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" >
            </div>
            <button type="submit" class="submit-btn">Save Changes</button>
        </form>
    </div>
</main>
@endsection