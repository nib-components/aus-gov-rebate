
/**
 * The Australian Government Rebate Tier
 * @constructor
 * @param   {String} name
 * @param   {Object} data
 */
function Tier(name, data) {
  this.name = name;
  this.data = data;
}

/**
 * Get the name of the rebate tier
 * @returns {String}
 */
Tier.prototype.getName = function() {
  return this.name;
};

/**
 * Get the salary range for the rebate tier
 * @returns {*}
 */
Tier.prototype.getSalary = function() {
  return {min: this.data.SalaryRange.Min, max: this.data.SalaryRange.Max};
};

/**
 * Get the rebate percentage for an age range
 * @param   {Number} age
 * @param   {Number} partnerAge
 */
Tier.prototype.getPercentage = function(age, partnerAge) {
  var
    percentages = this.data.Percentages,
    percentage
    ;

  if (age < 0) {
    throw new Error('Invalid age "'+age+'"');
  }

  // Use the oldest person on the policy
  if (partnerAge && partnerAge > age) {
    age = partnerAge;
  }

  if (age < 65) {
    percentage = percentages.AgeUnder65;
  } else if (age >= 65 && age <= 69) {
    percentage = percentages.Age65To69;
  } else {
    percentage = percentages.Age70Plus;
  }

  return percentage.Value;
};

module.exports = Tier;
