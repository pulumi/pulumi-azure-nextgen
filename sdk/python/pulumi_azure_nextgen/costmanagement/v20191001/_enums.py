# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ExportType',
    'FormatType',
    'FunctionType',
    'GranularityType',
    'OperatorType',
    'QueryColumnType',
    'RecurrenceType',
    'SortDirection',
    'StatusType',
    'TimeframeType',
]


class ExportType(str, Enum):
    """
    The type of the query.
    """
    USAGE = "Usage"


class FormatType(str, Enum):
    """
    The format of the export being delivered.
    """
    CSV = "Csv"


class FunctionType(str, Enum):
    """
    The name of the aggregation function to use.
    """
    SUM = "Sum"


class GranularityType(str, Enum):
    """
    The granularity of rows in the query.
    """
    DAILY = "Daily"
    HOURLY = "Hourly"


class OperatorType(str, Enum):
    """
    The operator to use for comparison.
    """
    IN_ = "In"


class QueryColumnType(str, Enum):
    """
    Has type of the column to group.
    """
    TAG = "Tag"
    DIMENSION = "Dimension"


class RecurrenceType(str, Enum):
    """
    The schedule recurrence.
    """
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    ANNUALLY = "Annually"


class SortDirection(str, Enum):
    """
    The sorting direction
    """
    ASCENDING = "Ascending"
    DESCENDING = "Descending"


class StatusType(str, Enum):
    """
    The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused.
    """
    ACTIVE = "Active"
    INACTIVE = "Inactive"


class TimeframeType(str, Enum):
    """
    The time frame for pulling data for the query. If custom, then a specific time period must be provided.
    """
    WEEK_TO_DATE = "WeekToDate"
    MONTH_TO_DATE = "MonthToDate"
    YEAR_TO_DATE = "YearToDate"
    THE_LAST_WEEK = "TheLastWeek"
    THE_LAST_MONTH = "TheLastMonth"
    THE_LAST_YEAR = "TheLastYear"
    CUSTOM = "Custom"
