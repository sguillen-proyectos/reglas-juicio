@extends('master')

@section('content')
<h1>{{{$model->name}}}</h1>
<hr>
<div class="row">
  <div class="col-md-2">
    <h4>Test</h4>
    <table class="t" id="test"></table>
    <button class="btn btn-success" id="test-result">Calcular</button>
  </div>
  <div class="col-md-4">
    <input type="hidden" id="rule" value="{{$model->id}}">
    <h4>Matriz Generada</h4>
    <table class="t" border="1" id="the-matrix">
    </table>
  </div>
  <div class="col-md-4">
    <h4>Resultados Generados</h4>
    <table class="t" id="results" border="1"></table>
  </div>
</div>
@stop

@section('styles')
<style type="text/css" media="screen">
  .t td {
    width: 50px;
    text-align: right;
  }
</style>
@stop

@section('scripts')
<script src="{{asset('js/utils.js')}}"></script>
<script src="{{asset('js/execute.js')}}"></script>
@stop
