@extends('master')

@section('content')
<div class="row">
  <div class="col-md-4 col-md-offset-4">
<h1>Conjuntos de Reglas del Juicio</h1>
<a class="btn btn-primary" href="{{url('create')}}">Nuevo Conjunto</a>
<hr>
<table class="table" style="padding: 2px; border: 1px solid #AAAAAA">
  <thead>
    <th coik>Id</th>
    <th style="width: 200px">Name</th>
    <th></th>
  </thead>
  <tbody>
  @foreach ($rules as $rule)
    <tr>
      <td>{{$rule->id}}</td>
      <td>{{{$rule->name}}}</td>
      <td><a href="{{url("execute/$rule->id")}}"><i class="fa fa-play-circle"></i> Ejecutar</a></td>
    </tr>
  @endforeach
  </tbody>
</table>
</div>
</div>
@stop
