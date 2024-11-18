@extends('layouts.admin-layouts.dashboard-layout')

@section('title','Crear tienda')

@section('custom_css')

<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ADMIN-CSS/create.css')}}">

@endsection

@section('content')
<!-- stores/create.blade.php -->
<h1>Create Article</h1>
<form id="create-store-form">
  <label for="name">Name:</label>
  <input class="input" type="text" id="name" name="name" required>
  <label for="description">Description:</label>
  <textarea class="input" id="description" name="description"></textarea>
  <button class="button" type="submit">Create</button>
</form>

<script>
document.getElementById('create-store-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const token = localStorage.getItem('token'); // Obtén el token

    const response = await fetch('https://backend-production-40d8.up.railway.app/v1/stores/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, description })
    });
    
    if (response.ok) {
      alert('Store created successfully');
    } else {
      alert('Error creating store');
    }
  });
</script>
@endsection