var
    _ = require('lodash');

var AdWordsReport = require('./adWordsReport');

function Report(options) {
  var self = this;
  self.defaultFieldNames = [
    'AccountCurrencyCode',
    'AccountDescriptiveName',
    'AccountTimeZoneId',
    'AdFormat',
    'AdGroupId',
    'AdGroupName',
    'AdGroupStatus',
    'AdNetworkType1',
    'AdNetworkType2',
    'AllConversionRate',
    'AllConversions',
    'AllConversionValue',
    'AverageCost',
    'AverageCpc',
    'AverageCpm',
    'AverageCpv',
    'AveragePosition',
    'CampaignId',
    'CampaignName',
    'CampaignStatus',
    'CityCriteriaId',
    'Clicks',
    'ConversionRate',
    'Conversions',
    'ConversionValue',
    'Cost',
    'CostPerAllConversion',
    'CostPerConversion',
    'CountryCriteriaId',
    'CrossDeviceConversions',
    'Ctr',
    'CustomerDescriptiveName',
    'Date',
    'DayOfWeek',
    'Device',
    'ExternalCustomerId',
    'Impressions',
    'InteractionRate',
    'Interactions',
    'InteractionTypes',
    'IsTargetingLocation',
    'LocationType',
    'MetroCriteriaId',
    'Month',
    'MonthOfYear',
    'MostSpecificCriteriaId',
    'PrimaryCompanyName',
    'Quarter',
    'RegionCriteriaId',
    'ValuePerAllConversion',
    'ValuePerConversion',
    'VideoViewRate',
    'VideoViews',
    'ViewThroughConversions',
    'Week',
    'Year'
  ];

  self.reportName = 'Geo Performance Report';
  self.reportType = 'GEO_PERFORMANCE_REPORT';
  AdWordsReport.call(self, options);
}

Report.prototype = _.create(AdWordsReport.prototype, {
  constructor: Report
});

module.exports = Report;
