(function() {
  var rows, cols, m = [];

  window.Matrix = function(_rows, _cols) {
    rows = _rows; cols = _cols;

    this.init();
  };

  Matrix.prototype = {
    init: function() {
      for(var i = 0; i < rows; ++i) {
        m.push([]);
        for(var j = 0; j < cols; ++j) {
          m[i].push(0);
        }
      }
    },
    addColumn: function(column, index) {
      var i, j;
      for(i = 0; i < rows; ++i) {
        for(j = 0; j < cols; ++j) {
          if (j === index) {
            m[i][j] += column[i];
          } else {
            m[i][j] -= column[i];
          }
        }
      }
    },
    addColumnSingle: function(column, j) {
      var i;
      for(i = 0; i < rows; ++i) {
        m[i][j] += column[i];
      }
    },
    subColumnSingle: function(column, j) {
      var i;
      for(i = 0; i < rows; ++i) {
        m[i][j] -= column[i];
      }
    },
    getSum: function(column) {
      var res = [], sum, i, j;
      for(i = 0; i < cols; ++i) {
        sum = 0;
        for(j = 0; j < rows; ++j) {
          sum += (m[j][i]*column[j]);
        }
        res.push(sum);
      }
      return res;
    },
    rows: function() {
      return rows;
    },
    cols: function() {
      return cols;
    },
    get: function(i, j) {
      return m[i][j];
    }
  };
  Matrix.prototype.toString = function() {
    return JSON.stringify(m);
  };
}).call(document);
