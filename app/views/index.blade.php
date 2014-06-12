@extends('master')

@section('content')
<h1>Conjuntos de Reglas del Juicio</h1>
<a class="btn btn-primary" href="{{url('create')}}">Nuevo Conjunto</a>
<hr>
<table border="1" style="padding: 2px; border: 1px solid #AAAAAA">
  <thead>
    <th>Id</th>
    <th style="width: 200px">Name</th>
    <th></th>
    <th></th>
  </thead>
  <tbody>
  @foreach ($rules as $rule)
    <tr>
      <td>{{$rule->id}}</td>
      <td>{{{$rule->name}}}</td>
      <td><a href="{{url("execute/$rule->id")}}">Ejecutar</a></td>
      <td><a href="{{url("edit/$rule->id")}}">Editar</a></td>
    </tr>
  @endforeach
  </tbody>
</table>
@stop
