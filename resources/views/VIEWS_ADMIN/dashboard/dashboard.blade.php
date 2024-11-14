@extends('layouts.admin-layouts.dashboard-layout')

@section('title', 'Dashboard Overview')

@section('content')
    <h1>Dashboard Overview</h1>
    <div class="dashboard-grid">
        <div class="dashboard-card">
            <div class="card-header">Total Users</div>
            <div class="card-content">10,234</div>
        </div>
        <div class="dashboard-card">
            <div class="card-header">Revenue</div>
            <div class="card-content">$52,389</div>
        </div>
        <div class="dashboard-card">
            <div class="card-header">Orders</div>
            <div class="card-content">1,423</div>
        </div>
        <div class="dashboard-card">
            <div class="card-header">Products</div>
            <div class="card-content">587</div>
        </div>
    </div>
@endsection
