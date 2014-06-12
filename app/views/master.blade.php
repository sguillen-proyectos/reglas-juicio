<!doctype html>
<html>
<head>
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
