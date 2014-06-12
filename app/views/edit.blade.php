@extends('master')

@section('content')
<h1>Nuevo Conjunto de Reglas</h1>
<hr>
<div class="row">
  <div class="col-md-4">
    <div class="form-group">
      <b>{{Form::label('Nombre:')}}</b><br>
      {{Form::text('name', '', array(
        'class'=>'form-control',
        'placeholder'=>'Nombre',
        'id'=>'name'
      ))}}
      <br>
      <b>{{Form::label('Descriptores:')}}</b><br>
      {{Form::text('descriptors', '', array(
        'class'=>'form-control',
        'id'=>'tokenField'
      ))}}
    </div>
  </div>
  <div class="col-md-4">
    <div class="form-group">
      {{Form::label('Crear Entidad: ')}}
      <br>
      <div class="row">
        <div class="col-lg-8">
          <div class="input-group">
            <input type="text" id="entity-name" class="form-control">
            <span class="input-group-btn">
              <button class="btn btn-primary" id="create" type="button">Adicionar</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <table id="descriptor-table"></table>
  </div>
  <div class="col-md-4">
    <b>Entidades:</b>
    <br>
    <table id="entity-table"></table>
    <br>
    <button class="btn btn-primary" id="save">Guardar Datos</button>
  </div>
</div>
@stop

@section('styles')
<link rel="stylesheet" href="{{asset('css/bootstrap-tokenfield.css')}}">
<link rel="stylesheet" href="{{asset('css/tokenfield-typeahead.min.css')}}">
@stop

@section('scripts')
<script src="{{asset('js/bootstrap-tokenfield.min.js')}}"></script>
<script src="{{asset('js/create.js')}}"></script>
@stop
