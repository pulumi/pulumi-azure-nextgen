# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'ExportDeliveryDestinationArgs',
    'ExportDeliveryInfoArgs',
    'ExportRecurrencePeriodArgs',
    'ExportScheduleArgs',
    'QueryAggregationArgs',
    'QueryComparisonExpressionArgs',
    'QueryDatasetArgs',
    'QueryDatasetConfigurationArgs',
    'QueryDefinitionArgs',
    'QueryFilterArgs',
    'QueryGroupingArgs',
    'QuerySortingConfigurationArgs',
    'QueryTimePeriodArgs',
]

@pulumi.input_type
class ExportDeliveryDestinationArgs:
    def __init__(__self__, *,
                 container: pulumi.Input[str],
                 resource_id: pulumi.Input[str],
                 root_folder_path: Optional[pulumi.Input[str]] = None):
        """
        The destination information for the delivery of the export.
        :param pulumi.Input[str] container: The name of the container where exports will be uploaded.
        :param pulumi.Input[str] resource_id: The resource id of the storage account where exports will be delivered.
        :param pulumi.Input[str] root_folder_path: The name of the directory where exports will be uploaded.
        """
        pulumi.set(__self__, "container", container)
        pulumi.set(__self__, "resource_id", resource_id)
        if root_folder_path is not None:
            pulumi.set(__self__, "root_folder_path", root_folder_path)

    @property
    @pulumi.getter
    def container(self) -> pulumi.Input[str]:
        """
        The name of the container where exports will be uploaded.
        """
        return pulumi.get(self, "container")

    @container.setter
    def container(self, value: pulumi.Input[str]):
        pulumi.set(self, "container", value)

    @property
    @pulumi.getter(name="resourceId")
    def resource_id(self) -> pulumi.Input[str]:
        """
        The resource id of the storage account where exports will be delivered.
        """
        return pulumi.get(self, "resource_id")

    @resource_id.setter
    def resource_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "resource_id", value)

    @property
    @pulumi.getter(name="rootFolderPath")
    def root_folder_path(self) -> Optional[pulumi.Input[str]]:
        """
        The name of the directory where exports will be uploaded.
        """
        return pulumi.get(self, "root_folder_path")

    @root_folder_path.setter
    def root_folder_path(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "root_folder_path", value)


@pulumi.input_type
class ExportDeliveryInfoArgs:
    def __init__(__self__, *,
                 destination: pulumi.Input['ExportDeliveryDestinationArgs']):
        """
        The delivery information associated with a export.
        :param pulumi.Input['ExportDeliveryDestinationArgs'] destination: Has destination for the export being delivered.
        """
        pulumi.set(__self__, "destination", destination)

    @property
    @pulumi.getter
    def destination(self) -> pulumi.Input['ExportDeliveryDestinationArgs']:
        """
        Has destination for the export being delivered.
        """
        return pulumi.get(self, "destination")

    @destination.setter
    def destination(self, value: pulumi.Input['ExportDeliveryDestinationArgs']):
        pulumi.set(self, "destination", value)


@pulumi.input_type
class ExportRecurrencePeriodArgs:
    def __init__(__self__, *,
                 from_: pulumi.Input[str],
                 to: Optional[pulumi.Input[str]] = None):
        """
        The start and end date for recurrence schedule.
        :param pulumi.Input[str] from_: The start date of recurrence.
        :param pulumi.Input[str] to: The end date of recurrence.
        """
        pulumi.set(__self__, "from_", from_)
        if to is not None:
            pulumi.set(__self__, "to", to)

    @property
    @pulumi.getter(name="from")
    def from_(self) -> pulumi.Input[str]:
        """
        The start date of recurrence.
        """
        return pulumi.get(self, "from_")

    @from_.setter
    def from_(self, value: pulumi.Input[str]):
        pulumi.set(self, "from_", value)

    @property
    @pulumi.getter
    def to(self) -> Optional[pulumi.Input[str]]:
        """
        The end date of recurrence.
        """
        return pulumi.get(self, "to")

    @to.setter
    def to(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "to", value)


@pulumi.input_type
class ExportScheduleArgs:
    def __init__(__self__, *,
                 recurrence: pulumi.Input[Union[str, 'RecurrenceType']],
                 recurrence_period: Optional[pulumi.Input['ExportRecurrencePeriodArgs']] = None,
                 status: Optional[pulumi.Input[Union[str, 'StatusType']]] = None):
        """
        The schedule associated with a export.
        :param pulumi.Input[Union[str, 'RecurrenceType']] recurrence: The schedule recurrence.
        :param pulumi.Input['ExportRecurrencePeriodArgs'] recurrence_period: Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
        :param pulumi.Input[Union[str, 'StatusType']] status: The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused.
        """
        pulumi.set(__self__, "recurrence", recurrence)
        if recurrence_period is not None:
            pulumi.set(__self__, "recurrence_period", recurrence_period)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter
    def recurrence(self) -> pulumi.Input[Union[str, 'RecurrenceType']]:
        """
        The schedule recurrence.
        """
        return pulumi.get(self, "recurrence")

    @recurrence.setter
    def recurrence(self, value: pulumi.Input[Union[str, 'RecurrenceType']]):
        pulumi.set(self, "recurrence", value)

    @property
    @pulumi.getter(name="recurrencePeriod")
    def recurrence_period(self) -> Optional[pulumi.Input['ExportRecurrencePeriodArgs']]:
        """
        Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
        """
        return pulumi.get(self, "recurrence_period")

    @recurrence_period.setter
    def recurrence_period(self, value: Optional[pulumi.Input['ExportRecurrencePeriodArgs']]):
        pulumi.set(self, "recurrence_period", value)

    @property
    @pulumi.getter
    def status(self) -> Optional[pulumi.Input[Union[str, 'StatusType']]]:
        """
        The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused.
        """
        return pulumi.get(self, "status")

    @status.setter
    def status(self, value: Optional[pulumi.Input[Union[str, 'StatusType']]]):
        pulumi.set(self, "status", value)


@pulumi.input_type
class QueryAggregationArgs:
    def __init__(__self__, *,
                 function: pulumi.Input[Union[str, 'FunctionType']],
                 name: pulumi.Input[str]):
        """
        The aggregation expression to be used in the query.
        :param pulumi.Input[Union[str, 'FunctionType']] function: The name of the aggregation function to use.
        :param pulumi.Input[str] name: The name of the column to aggregate.
        """
        pulumi.set(__self__, "function", function)
        pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def function(self) -> pulumi.Input[Union[str, 'FunctionType']]:
        """
        The name of the aggregation function to use.
        """
        return pulumi.get(self, "function")

    @function.setter
    def function(self, value: pulumi.Input[Union[str, 'FunctionType']]):
        pulumi.set(self, "function", value)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        The name of the column to aggregate.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)


@pulumi.input_type
class QueryComparisonExpressionArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[str],
                 operator: pulumi.Input[Union[str, 'OperatorType']],
                 values: pulumi.Input[Sequence[pulumi.Input[str]]]):
        """
        The comparison expression to be used in the query.
        :param pulumi.Input[str] name: The name of the column to use in comparison.
        :param pulumi.Input[Union[str, 'OperatorType']] operator: The operator to use for comparison.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] values: Array of values to use for comparison
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "operator", operator)
        pulumi.set(__self__, "values", values)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        The name of the column to use in comparison.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def operator(self) -> pulumi.Input[Union[str, 'OperatorType']]:
        """
        The operator to use for comparison.
        """
        return pulumi.get(self, "operator")

    @operator.setter
    def operator(self, value: pulumi.Input[Union[str, 'OperatorType']]):
        pulumi.set(self, "operator", value)

    @property
    @pulumi.getter
    def values(self) -> pulumi.Input[Sequence[pulumi.Input[str]]]:
        """
        Array of values to use for comparison
        """
        return pulumi.get(self, "values")

    @values.setter
    def values(self, value: pulumi.Input[Sequence[pulumi.Input[str]]]):
        pulumi.set(self, "values", value)


@pulumi.input_type
class QueryDatasetArgs:
    def __init__(__self__, *,
                 aggregation: Optional[pulumi.Input[Mapping[str, pulumi.Input['QueryAggregationArgs']]]] = None,
                 configuration: Optional[pulumi.Input['QueryDatasetConfigurationArgs']] = None,
                 filter: Optional[pulumi.Input['QueryFilterArgs']] = None,
                 granularity: Optional[pulumi.Input[Union[str, 'GranularityType']]] = None,
                 grouping: Optional[pulumi.Input[Sequence[pulumi.Input['QueryGroupingArgs']]]] = None,
                 sorting: Optional[pulumi.Input[Sequence[pulumi.Input['QuerySortingConfigurationArgs']]]] = None):
        """
        The definition of data present in the query.
        :param pulumi.Input[Mapping[str, pulumi.Input['QueryAggregationArgs']]] aggregation: Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses.
        :param pulumi.Input['QueryDatasetConfigurationArgs'] configuration: Has configuration information for the data in the export. The configuration will be ignored if aggregation and grouping are provided.
        :param pulumi.Input['QueryFilterArgs'] filter: Has filter expression to use in the query.
        :param pulumi.Input[Union[str, 'GranularityType']] granularity: The granularity of rows in the query.
        :param pulumi.Input[Sequence[pulumi.Input['QueryGroupingArgs']]] grouping: Array of group by expression to use in the query. Query can have up to 2 group by clauses.
        :param pulumi.Input[Sequence[pulumi.Input['QuerySortingConfigurationArgs']]] sorting: Array of sorting by columns in query.
        """
        if aggregation is not None:
            pulumi.set(__self__, "aggregation", aggregation)
        if configuration is not None:
            pulumi.set(__self__, "configuration", configuration)
        if filter is not None:
            pulumi.set(__self__, "filter", filter)
        if granularity is not None:
            pulumi.set(__self__, "granularity", granularity)
        if grouping is not None:
            pulumi.set(__self__, "grouping", grouping)
        if sorting is not None:
            pulumi.set(__self__, "sorting", sorting)

    @property
    @pulumi.getter
    def aggregation(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input['QueryAggregationArgs']]]]:
        """
        Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses.
        """
        return pulumi.get(self, "aggregation")

    @aggregation.setter
    def aggregation(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input['QueryAggregationArgs']]]]):
        pulumi.set(self, "aggregation", value)

    @property
    @pulumi.getter
    def configuration(self) -> Optional[pulumi.Input['QueryDatasetConfigurationArgs']]:
        """
        Has configuration information for the data in the export. The configuration will be ignored if aggregation and grouping are provided.
        """
        return pulumi.get(self, "configuration")

    @configuration.setter
    def configuration(self, value: Optional[pulumi.Input['QueryDatasetConfigurationArgs']]):
        pulumi.set(self, "configuration", value)

    @property
    @pulumi.getter
    def filter(self) -> Optional[pulumi.Input['QueryFilterArgs']]:
        """
        Has filter expression to use in the query.
        """
        return pulumi.get(self, "filter")

    @filter.setter
    def filter(self, value: Optional[pulumi.Input['QueryFilterArgs']]):
        pulumi.set(self, "filter", value)

    @property
    @pulumi.getter
    def granularity(self) -> Optional[pulumi.Input[Union[str, 'GranularityType']]]:
        """
        The granularity of rows in the query.
        """
        return pulumi.get(self, "granularity")

    @granularity.setter
    def granularity(self, value: Optional[pulumi.Input[Union[str, 'GranularityType']]]):
        pulumi.set(self, "granularity", value)

    @property
    @pulumi.getter
    def grouping(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['QueryGroupingArgs']]]]:
        """
        Array of group by expression to use in the query. Query can have up to 2 group by clauses.
        """
        return pulumi.get(self, "grouping")

    @grouping.setter
    def grouping(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['QueryGroupingArgs']]]]):
        pulumi.set(self, "grouping", value)

    @property
    @pulumi.getter
    def sorting(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['QuerySortingConfigurationArgs']]]]:
        """
        Array of sorting by columns in query.
        """
        return pulumi.get(self, "sorting")

    @sorting.setter
    def sorting(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['QuerySortingConfigurationArgs']]]]):
        pulumi.set(self, "sorting", value)


@pulumi.input_type
class QueryDatasetConfigurationArgs:
    def __init__(__self__, *,
                 columns: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None):
        """
        The configuration of dataset in the query.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] columns: Array of column names to be included in the query. Any valid query column name is allowed. If not provided, then query includes all columns.
        """
        if columns is not None:
            pulumi.set(__self__, "columns", columns)

    @property
    @pulumi.getter
    def columns(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        Array of column names to be included in the query. Any valid query column name is allowed. If not provided, then query includes all columns.
        """
        return pulumi.get(self, "columns")

    @columns.setter
    def columns(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "columns", value)


@pulumi.input_type
class QueryDefinitionArgs:
    def __init__(__self__, *,
                 timeframe: pulumi.Input[Union[str, 'TimeframeType']],
                 type: pulumi.Input[Union[str, 'ExportType']],
                 dataset: Optional[pulumi.Input['QueryDatasetArgs']] = None,
                 time_period: Optional[pulumi.Input['QueryTimePeriodArgs']] = None):
        """
        The definition of a query.
        :param pulumi.Input[Union[str, 'TimeframeType']] timeframe: The time frame for pulling data for the query. If custom, then a specific time period must be provided.
        :param pulumi.Input[Union[str, 'ExportType']] type: The type of the query.
        :param pulumi.Input['QueryDatasetArgs'] dataset: Has definition for data in this query.
        :param pulumi.Input['QueryTimePeriodArgs'] time_period: Has time period for pulling data for the query.
        """
        pulumi.set(__self__, "timeframe", timeframe)
        pulumi.set(__self__, "type", type)
        if dataset is not None:
            pulumi.set(__self__, "dataset", dataset)
        if time_period is not None:
            pulumi.set(__self__, "time_period", time_period)

    @property
    @pulumi.getter
    def timeframe(self) -> pulumi.Input[Union[str, 'TimeframeType']]:
        """
        The time frame for pulling data for the query. If custom, then a specific time period must be provided.
        """
        return pulumi.get(self, "timeframe")

    @timeframe.setter
    def timeframe(self, value: pulumi.Input[Union[str, 'TimeframeType']]):
        pulumi.set(self, "timeframe", value)

    @property
    @pulumi.getter
    def type(self) -> pulumi.Input[Union[str, 'ExportType']]:
        """
        The type of the query.
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: pulumi.Input[Union[str, 'ExportType']]):
        pulumi.set(self, "type", value)

    @property
    @pulumi.getter
    def dataset(self) -> Optional[pulumi.Input['QueryDatasetArgs']]:
        """
        Has definition for data in this query.
        """
        return pulumi.get(self, "dataset")

    @dataset.setter
    def dataset(self, value: Optional[pulumi.Input['QueryDatasetArgs']]):
        pulumi.set(self, "dataset", value)

    @property
    @pulumi.getter(name="timePeriod")
    def time_period(self) -> Optional[pulumi.Input['QueryTimePeriodArgs']]:
        """
        Has time period for pulling data for the query.
        """
        return pulumi.get(self, "time_period")

    @time_period.setter
    def time_period(self, value: Optional[pulumi.Input['QueryTimePeriodArgs']]):
        pulumi.set(self, "time_period", value)


@pulumi.input_type
class QueryFilterArgs:
    def __init__(__self__, *,
                 and_: Optional[pulumi.Input[Sequence[pulumi.Input['QueryFilterArgs']]]] = None,
                 dimension: Optional[pulumi.Input['QueryComparisonExpressionArgs']] = None,
                 not_: Optional[pulumi.Input['QueryFilterArgs']] = None,
                 or_: Optional[pulumi.Input[Sequence[pulumi.Input['QueryFilterArgs']]]] = None,
                 tag: Optional[pulumi.Input['QueryComparisonExpressionArgs']] = None):
        """
        The filter expression to be used in the export.
        :param pulumi.Input[Sequence[pulumi.Input['QueryFilterArgs']]] and_: The logical "AND" expression. Must have at least 2 items.
        :param pulumi.Input['QueryComparisonExpressionArgs'] dimension: Has comparison expression for a dimension
        :param pulumi.Input['QueryFilterArgs'] not_: The logical "NOT" expression.
        :param pulumi.Input[Sequence[pulumi.Input['QueryFilterArgs']]] or_: The logical "OR" expression. Must have at least 2 items.
        :param pulumi.Input['QueryComparisonExpressionArgs'] tag: Has comparison expression for a tag
        """
        if and_ is not None:
            pulumi.set(__self__, "and_", and_)
        if dimension is not None:
            pulumi.set(__self__, "dimension", dimension)
        if not_ is not None:
            pulumi.set(__self__, "not_", not_)
        if or_ is not None:
            pulumi.set(__self__, "or_", or_)
        if tag is not None:
            pulumi.set(__self__, "tag", tag)

    @property
    @pulumi.getter(name="and")
    def and_(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['QueryFilterArgs']]]]:
        """
        The logical "AND" expression. Must have at least 2 items.
        """
        return pulumi.get(self, "and_")

    @and_.setter
    def and_(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['QueryFilterArgs']]]]):
        pulumi.set(self, "and_", value)

    @property
    @pulumi.getter
    def dimension(self) -> Optional[pulumi.Input['QueryComparisonExpressionArgs']]:
        """
        Has comparison expression for a dimension
        """
        return pulumi.get(self, "dimension")

    @dimension.setter
    def dimension(self, value: Optional[pulumi.Input['QueryComparisonExpressionArgs']]):
        pulumi.set(self, "dimension", value)

    @property
    @pulumi.getter(name="not")
    def not_(self) -> Optional[pulumi.Input['QueryFilterArgs']]:
        """
        The logical "NOT" expression.
        """
        return pulumi.get(self, "not_")

    @not_.setter
    def not_(self, value: Optional[pulumi.Input['QueryFilterArgs']]):
        pulumi.set(self, "not_", value)

    @property
    @pulumi.getter(name="or")
    def or_(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['QueryFilterArgs']]]]:
        """
        The logical "OR" expression. Must have at least 2 items.
        """
        return pulumi.get(self, "or_")

    @or_.setter
    def or_(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['QueryFilterArgs']]]]):
        pulumi.set(self, "or_", value)

    @property
    @pulumi.getter
    def tag(self) -> Optional[pulumi.Input['QueryComparisonExpressionArgs']]:
        """
        Has comparison expression for a tag
        """
        return pulumi.get(self, "tag")

    @tag.setter
    def tag(self, value: Optional[pulumi.Input['QueryComparisonExpressionArgs']]):
        pulumi.set(self, "tag", value)


@pulumi.input_type
class QueryGroupingArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[str],
                 type: pulumi.Input[Union[str, 'QueryColumnType']]):
        """
        The group by expression to be used in the query.
        :param pulumi.Input[str] name: The name of the column to group.
        :param pulumi.Input[Union[str, 'QueryColumnType']] type: Has type of the column to group.
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        The name of the column to group.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def type(self) -> pulumi.Input[Union[str, 'QueryColumnType']]:
        """
        Has type of the column to group.
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: pulumi.Input[Union[str, 'QueryColumnType']]):
        pulumi.set(self, "type", value)


@pulumi.input_type
class QuerySortingConfigurationArgs:
    def __init__(__self__, *,
                 name: Optional[pulumi.Input[str]] = None,
                 query_sorting_direction: Optional[pulumi.Input[Union[str, 'SortDirection']]] = None):
        """
        The configuration for sorting in the query.
        :param pulumi.Input[str] name: The name of the column to use in sorting.
        :param pulumi.Input[Union[str, 'SortDirection']] query_sorting_direction: The sorting direction
        """
        if name is not None:
            pulumi.set(__self__, "name", name)
        if query_sorting_direction is not None:
            pulumi.set(__self__, "query_sorting_direction", query_sorting_direction)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        The name of the column to use in sorting.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="querySortingDirection")
    def query_sorting_direction(self) -> Optional[pulumi.Input[Union[str, 'SortDirection']]]:
        """
        The sorting direction
        """
        return pulumi.get(self, "query_sorting_direction")

    @query_sorting_direction.setter
    def query_sorting_direction(self, value: Optional[pulumi.Input[Union[str, 'SortDirection']]]):
        pulumi.set(self, "query_sorting_direction", value)


@pulumi.input_type
class QueryTimePeriodArgs:
    def __init__(__self__, *,
                 from_: pulumi.Input[str],
                 to: pulumi.Input[str]):
        """
        The start and end date for pulling data for the query.
        :param pulumi.Input[str] from_: The start date to pull data from.
        :param pulumi.Input[str] to: The end date to pull data to.
        """
        pulumi.set(__self__, "from_", from_)
        pulumi.set(__self__, "to", to)

    @property
    @pulumi.getter(name="from")
    def from_(self) -> pulumi.Input[str]:
        """
        The start date to pull data from.
        """
        return pulumi.get(self, "from_")

    @from_.setter
    def from_(self, value: pulumi.Input[str]):
        pulumi.set(self, "from_", value)

    @property
    @pulumi.getter
    def to(self) -> pulumi.Input[str]:
        """
        The end date to pull data to.
        """
        return pulumi.get(self, "to")

    @to.setter
    def to(self, value: pulumi.Input[str]):
        pulumi.set(self, "to", value)


