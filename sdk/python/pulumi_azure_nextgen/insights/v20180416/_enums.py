# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AlertSeverity',
    'ConditionalOperator',
    'Enabled',
    'MetricTriggerType',
    'Operator',
    'QueryType',
]


class AlertSeverity(str, Enum):
    """
    Severity of the alert
    """
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"


class ConditionalOperator(str, Enum):
    """
    Evaluation operation for rule - 'GreaterThan' or 'LessThan.
    """
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    LESS_THAN = "LessThan"
    EQUAL = "Equal"


class Enabled(str, Enum):
    """
    The flag which indicates whether the Log Search rule is enabled. Value should be true or false
    """
    TRUE = "true"
    FALSE = "false"


class MetricTriggerType(str, Enum):
    """
    Metric Trigger Type - 'Consecutive' or 'Total'
    """
    CONSECUTIVE = "Consecutive"
    TOTAL = "Total"


class Operator(str, Enum):
    """
    Operator for dimension values
    """
    INCLUDE = "Include"


class QueryType(str, Enum):
    """
    Set value to 'ResultCount' .
    """
    RESULT_COUNT = "ResultCount"
