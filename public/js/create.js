(function($){
  var entities = [];

  removeDescriptor = function(descriptor) {
    for(var i = 0; i < entities.length; ++i) {
      if (entities[i].values[descriptor]) {
        delete entities[i].values[descriptor];
      }
    }
  };

  addEntity = function(data) {
    var exists = false, index = -1;
    for(var i = 0; i < entities.length; ++i) {
      if (entities[i].name === data.name) {
        exists = true;
        index = i;
        break;
      }
    }
    if (exists) {
      entities[index] = data;
    } else {
      entities.push(data);
    }
  };

  displayEntities = function() {
    var tpl;
    $('#entity-table').empty();
    for(var i = 0; i < entities.length; ++i) {
      tpl = '';
      tpl += '<tr><td><a href="#" data-entity="' + i + '" class="entity">';
      tpl += entities[i].name;
      tpl += '</a></td></tr>';

      $('#entity-table').append(tpl);
    }
  };

  $(document).ready(function() {
    $('#tokenField').tokenfield();
    $('#tokenField').on('tokenfield:createtoken', onCreateToken);
    $('#tokenField').on('tokenfield:createdtoken', onTokenCreated);
    $('#tokenField').on('tokenfield:removedtoken', onTokenRemoved);
    $('body').on('click', '.entity', onEntitySelected);

    $('#create').on('click', onCreate);
    $('#save').on('click', onSaveData);
  });

  onSaveData = function(e) {
    var name = $('#name').val();
    var descriptors = JSON.stringify($('#tokenField').tokenfield('getTokens'));
    var _entities = JSON.stringify(entities);

    var data = { name: name, descriptors:descriptors, entities: _entities };

    $.post('create', data).done(function(res){
      window.location = '/';
    }).error(function(){
      console.log('error on saving');
    });
  };

  onEntitySelected = function(e) {
    var id = this.dataset.entity;
    $('#entity-name').val(entities[id].name);
    for(var key in entities[id].values) {
      console.log(key);
      document.getElementById(key).checked = true;
    }
  };

  // To avoid repetition of tokens
  onCreateToken = function(e) {
    var tokens = $(this).tokenfield('getTokens');
    var existingTokens = $(this).tokenfield('getTokens');
    $.each(existingTokens, function(index, token) {
      if (token.value === e.attrs.value) {
        e.preventDefault();
      }
    });
  };

  onTokenCreated = function(e) {
    var tpl = '';
    tpl += '<tr id="group-' + e.attrs.value + '">';
    tpl += '<td><label>';
    tpl += '<input type="checkbox" ';
    tpl += 'id="'+e.attrs.value +'">&nbsp;';
    tpl += e.attrs.label;
    tpl += '</label></td></tr>';

    $('#descriptor-table').append(tpl);
  };

  onTokenRemoved = function(e) {
    $('#group-'+e.attrs.value).remove();
    removeDescriptor(e.attrs.value);
  };

  onCreate = function(e) {
    if ($('#entity-name').val().trim() === '') {
      return;
    }

    var descriptors = $('#tokenField').tokenfield('getTokens');
    var result = {
      name: $('#entity-name').val(),
      values: {}
    };

    $('input[type=checkbox]').each(function(index, el) {
      if (el.checked) {
        result.values[el.id] = true;
      }
    });

    addEntity(result);
    displayEntities();
    // alert('Entidad guardada' + JSON.stringify(result));

    $('input[type=checkbox]').each(function(index, el) {
      el.checked = false;
    });
    $('#entity-name').val('');
  };
}).call(document, jQuery);
