@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Lista de usuarios')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/users/index.css') }}">

@endsection

@section('content')
<h1>Users List</h1>
<br>
<div class="container">
<button onclick="loadUsers()" class="btn">Load Users</button>
</div>

<table class="user-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Last_name</th>
      <th>Birthdate</th>
      <th>Email</th>
      <th>User</th>
      <th>Role</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody id="user-list">
    <!-- The rows will be populated dynamically -->
  </tbody>
</table>
<script src="{{asset('js/admin/users/indexuser.js')}}"></script>
@endsection
