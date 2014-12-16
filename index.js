var Tier = require('./lib/tier');

var AGR = {

  /**
   * The tier data
   */
  TIER_DATA: {},

  /**
   * Get a tier
   * @param   {String|Number} tier
   * @returns {Tier}
   */
  getTier: function(tier) {

    if (typeof(tier) === 'number') {
      tier = 'Tier'+tier;
    }

    if (typeof(this.TIER_DATA[tier]) === 'undefined') {
      throw new Error('Tier "'+tier+'" does not exist.');
    }

    return new Tier(tier, this.TIER_DATA[tier]);
  }

};

/**
 * Initialise the Australian Government Rebate object
 * @params  {Object} tierdata The tier data
 * @returns {AGR}
 */
module.exports = function(tierdata) {
  AGR.TIER_DATA = tierdata;
  return AGR;
};
