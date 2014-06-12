<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <title>Sistemas Expertos</title>
  <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
  <link rel="stylesheet" href="{{asset('css/font-awesome.css')}}">
  @yield('styles', '')
</head>
<body>
<div class="container">
  @yield('content')
</div>

<script src="{{asset('js/jquery.js')}}"></script>
<script src="{{asset('js/bootstrap.js')}}"></script>
@yield('scripts', '')
</body>
</html>
