(function($) {
  var descriptors = {}, entities = [], m, results, descriptorArray = [];

  $(document).ready(function() {
    var id = $('#rule').val();
    $.get('/rule/'+id).done(function(res) {
      init(res);
      initTest();
      start();
      calcResults();
      displayData();
    }).error(function() {
      console.log('Error fetching rule data');
    });
    $('.t').on('click', '.add', addColumn);
    $('.t').on('click', '.sub', subColumn);
    $('#test-result').on('click', testResult);
  });

  initTest = function() {
    var i, tpl;
    for(i = 0; i < m.rows(); ++i) {
      tpl = '<tr><td style="width: 100px;">';
      tpl += '<label>';
      tpl += '<input type="checkbox" data-descriptor="' + descriptorArray[i] +'"> ' + descriptorArray[i];
      tpl += '</label>';
      tpl += '</td></tr>';
      $('#test').append(tpl);
    }
  };

  testResult = function() {
    console.log('Calculating result ...');
    var testArray = [];
    $('#test input[type=checkbox]').each(function(index, el) {
      if (el.checked) {
        testArray.push(1);
      } else {
        testArray.push(0);
      }
    });
    var testResult = m.getSum(testArray);
    console.log(JSON.stringify(testResult));
    alert(JSON.stringify(testResult));
  };

  init = function(info) {
    var i, data, j, key;
    m = new Matrix(info.descriptors.length, info.entities.length);
    window.foo = m;

    // init descriptors
    for(i = 0; i < m.rows(); ++i) {
      descriptors[info.descriptors[i].value] = i;
      descriptorArray.push(info.descriptors[i].value);
    }

    // init entities
    for(i = 0; i < m.cols(); ++i) {
      data = { index: i, name: info.entities[i].name, values: []};
      for(j = 0; j < m.rows(); ++j) {
        data.values.push(0);
      }
      for(key in info.entities[i].values) {
        data.values[descriptors[key]] = 1;
      }
      entities.push(data);
    }
  };

  // all logic here
  start = function() {
    var i;
    for(i = 0; i < m.cols(); ++i) {
      m.addColumn(entities[i].values, i);
    }
    console.log(m.toString());
  };

  calcResults = function() {
    results = [];
    for(i = 0; i < m.cols(); ++i) {
      results.push(m.getSum(entities[i].values));
    }
  };

  addColumn = function(e) {
    e.preventDefault();
    var index = this.dataset.col;
    m.addColumnSingle(entities[index].values, index);

    displayMatrix();
    calcResults();
    displayResults();
  };

  subColumn = function(e) {
    e.preventDefault();
    var index = this.dataset.col;
    m.subColumnSingle(entities[index].values, index);

    displayMatrix();
    calcResults();
    displayResults();
  };

  displayData = function() {
    displayMatrix();
    displayResults();
  };

  displayMatrix = function() {
    var i, j, tpl, k = 0;
    $('#the-matrix').empty();
    for(i = 0; i < m.rows(); ++i) {
      tpl = '';
      tpl += '<tr>';
      for(j = -1; j < m.cols(); ++j) {
        if (j === -1) {
          tpl += '<td>' +descriptorArray[i];
          tpl += '</td>';
          k++;
        } else {
          tpl += '<td id="' + i + '-' + j + '">' + m.get(i, j) + '</td>';
        }
      }
      tpl += '</tr>';
      $('#the-matrix').append(tpl);
    }
    tpl = '<tr><td></td>';
    for(j = 0; j < m.cols(); ++j) {
      tpl += '<td>';
      tpl += '<a href="#" data-col="'+j+'" class="add"><i class="fa fa-plus-square"></i></a>';
      tpl += '</td>';
    }
    $('#the-matrix').append(tpl);
    tpl = '<tr><td></td>';
    for(j = 0; j < m.cols(); ++j) {
      tpl += '<td>';
      tpl += '<a href="#" data-col="'+j+'" class="sub"><i class="fa fa-minus-square"></i></a>';
      tpl += '</td>';
    }
    $('#the-matrix').append(tpl);
  };

  displayResults = function() {
    var i, j, tpl;
    $('#results').empty();
    for(i = 0; i < m.cols(); ++i) {
      tpl = '';
      tpl += '<tr>';
      for(j = -1; j < m.cols(); ++j) {
        if (j === -1) {
          tpl += '<td>' +entities[i].name + '</td>';
        } else {
          tpl += '<td id="r-' + i + '-' + j + '">' + results[i][j] + '</td>';
        }
      }
      tpl += '</tr>';
      $('#results').append(tpl);
    }
  };
}).call(document, jQuery);
