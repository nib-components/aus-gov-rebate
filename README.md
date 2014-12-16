# aus-gov-rebate

Logic around the Australian Government Rebate tiers.

## Installation

    component install --save nib-components/aus-gov-rebate

## Example

    var agr = require('aus-gov-rebate')(rebateDataProbablyRetrievedFromTheBackendAsJSONInOrderToKeepAllTheLogicAllInOneSpot);

    var tier = agr.getTier(0);

    console.log(
        tier.getName(),
        tier.getSalary(),
        tier.getPercentage(65)
    );

## API

### AGR.getTier(tier : String|Number) : Tier

Get the AGR tier information.

- `tier` - The name or number of the tier e.g. `Tier0`

### Tier.getName() : String

Get the tier name e.g. `Tier0`

### Tier.getSalary() : String

Get the tier salary e.g. `{min: 0, max: 0}`

### Tier.getPercentage(age : Number) : Number

Get the tier rebate percentage e.g. `19.36`

- `age` - The age of the policy holder in years


