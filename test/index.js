var assert  = require('assert');
var AGR     = require('..')(require('./data'));
var Tier    = require('../lib/tier');

describe('AGR Tier', function() {

  describe('.getTier()', function() {

    it('should return the correct tier when I use a valid tier name', function() {
      var tier = AGR.getTier('Tier1');
      assert(tier instanceof Tier);
    });

    it('should return the correct tier when I use a valid tier number', function() {
      var tier = AGR.getTier(1);
      assert(tier instanceof Tier);
    });

    it('should throw an error when I use an invalid tier name', function() {
      assert.throws(function() {
        AGR.getTier('blah');
      });
    });

  });

  describe('.getName()', function() {

    it('should return a name', function() {
      var tier = AGR.getTier('Tier1');
      assert.equal(tier.getName(), 'Tier1');
    });

  });

  describe('.getSalary()', function() {

    it('should return the min and max', function() {
      var tier = AGR.getTier('Tier1');
      assert.equal(tier.getSalary().min, 90001);
      assert.equal(tier.getSalary().max, 105000);
    });

  });

  describe('.getPercentage()', function() {

    it('should return the percentage for the age', function() {
      var tier = AGR.getTier('Tier1');

      var values = [
        {age: 0, percentage: 19.36},
        {age: 64, percentage: 19.36},
        {age: 65, percentage: 24.200},
        {age: 69, percentage: 24.200},
        {age: 70, percentage: 29.04}
      ];

      for (var i=0; i<values.length; ++i) {
        assert.equal(values[i].percentage, tier.getPercentage(values[i].age));
      }

    });

    it('should throw an error for invalid ages', function() {
      assert.throws(function() {
        var tier = AGR.getTier('Tier1');
        tier.getPercentage(-1);
      });
    });

    describe('for partner', function() {

      it('should return the percentage for the age', function() {
        var tier = AGR.getTier('Tier1');

        var values = [
          {age: 0, percentage: 19.36},
          {age: 64, percentage: 19.36},
          {age: 65, percentage: 24.200},
          {age: 69, percentage: 24.200},
          {age: 70, percentage: 29.04}
        ];

        for (var i=0; i<values.length; ++i) {
          assert.equal(values[i].percentage, tier.getPercentage(64, values[i].age));
        }

      });

    });

  });

});