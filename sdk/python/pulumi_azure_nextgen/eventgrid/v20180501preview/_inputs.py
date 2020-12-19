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
    'EventHubEventSubscriptionDestinationArgs',
    'EventSubscriptionFilterArgs',
    'HybridConnectionEventSubscriptionDestinationArgs',
    'JsonFieldArgs',
    'JsonFieldWithDefaultArgs',
    'JsonInputSchemaMappingArgs',
    'RetryPolicyArgs',
    'StorageBlobDeadLetterDestinationArgs',
    'StorageQueueEventSubscriptionDestinationArgs',
    'WebHookEventSubscriptionDestinationArgs',
]

@pulumi.input_type
class EventHubEventSubscriptionDestinationArgs:
    def __init__(__self__, *,
                 endpoint_type: pulumi.Input[str],
                 resource_id: Optional[pulumi.Input[str]] = None):
        """
        Information about the event hub destination for an event subscription
        :param pulumi.Input[str] endpoint_type: Type of the endpoint for the event subscription destination
               Expected value is 'EventHub'.
        :param pulumi.Input[str] resource_id: The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.
        """
        pulumi.set(__self__, "endpoint_type", 'EventHub')
        if resource_id is not None:
            pulumi.set(__self__, "resource_id", resource_id)

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> pulumi.Input[str]:
        """
        Type of the endpoint for the event subscription destination
        Expected value is 'EventHub'.
        """
        return pulumi.get(self, "endpoint_type")

    @endpoint_type.setter
    def endpoint_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "endpoint_type", value)

    @property
    @pulumi.getter(name="resourceId")
    def resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.
        """
        return pulumi.get(self, "resource_id")

    @resource_id.setter
    def resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "resource_id", value)


@pulumi.input_type
class EventSubscriptionFilterArgs:
    def __init__(__self__, *,
                 included_event_types: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 is_subject_case_sensitive: Optional[pulumi.Input[bool]] = None,
                 subject_begins_with: Optional[pulumi.Input[str]] = None,
                 subject_ends_with: Optional[pulumi.Input[str]] = None):
        """
        Filter for the Event Subscription
        :param pulumi.Input[Sequence[pulumi.Input[str]]] included_event_types: A list of applicable event types that need to be part of the event subscription. 
               If it is desired to subscribe to all event types, the string "all" needs to be specified as an element in this list.
        :param pulumi.Input[bool] is_subject_case_sensitive: Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter 
               should be compared in a case sensitive manner.
        :param pulumi.Input[str] subject_begins_with: An optional string to filter events for an event subscription based on a resource path prefix.
               The format of this depends on the publisher of the events. 
               Wildcard characters are not supported in this path.
        :param pulumi.Input[str] subject_ends_with: An optional string to filter events for an event subscription based on a resource path suffix.
               Wildcard characters are not supported in this path.
        """
        if included_event_types is not None:
            pulumi.set(__self__, "included_event_types", included_event_types)
        if is_subject_case_sensitive is not None:
            pulumi.set(__self__, "is_subject_case_sensitive", is_subject_case_sensitive)
        if subject_begins_with is not None:
            pulumi.set(__self__, "subject_begins_with", subject_begins_with)
        if subject_ends_with is not None:
            pulumi.set(__self__, "subject_ends_with", subject_ends_with)

    @property
    @pulumi.getter(name="includedEventTypes")
    def included_event_types(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        A list of applicable event types that need to be part of the event subscription. 
        If it is desired to subscribe to all event types, the string "all" needs to be specified as an element in this list.
        """
        return pulumi.get(self, "included_event_types")

    @included_event_types.setter
    def included_event_types(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "included_event_types", value)

    @property
    @pulumi.getter(name="isSubjectCaseSensitive")
    def is_subject_case_sensitive(self) -> Optional[pulumi.Input[bool]]:
        """
        Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter 
        should be compared in a case sensitive manner.
        """
        return pulumi.get(self, "is_subject_case_sensitive")

    @is_subject_case_sensitive.setter
    def is_subject_case_sensitive(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "is_subject_case_sensitive", value)

    @property
    @pulumi.getter(name="subjectBeginsWith")
    def subject_begins_with(self) -> Optional[pulumi.Input[str]]:
        """
        An optional string to filter events for an event subscription based on a resource path prefix.
        The format of this depends on the publisher of the events. 
        Wildcard characters are not supported in this path.
        """
        return pulumi.get(self, "subject_begins_with")

    @subject_begins_with.setter
    def subject_begins_with(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "subject_begins_with", value)

    @property
    @pulumi.getter(name="subjectEndsWith")
    def subject_ends_with(self) -> Optional[pulumi.Input[str]]:
        """
        An optional string to filter events for an event subscription based on a resource path suffix.
        Wildcard characters are not supported in this path.
        """
        return pulumi.get(self, "subject_ends_with")

    @subject_ends_with.setter
    def subject_ends_with(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "subject_ends_with", value)


@pulumi.input_type
class HybridConnectionEventSubscriptionDestinationArgs:
    def __init__(__self__, *,
                 endpoint_type: pulumi.Input[str],
                 resource_id: Optional[pulumi.Input[str]] = None):
        """
        Information about the HybridConnection destination for an event subscription.
        :param pulumi.Input[str] endpoint_type: Type of the endpoint for the event subscription destination
               Expected value is 'HybridConnection'.
        :param pulumi.Input[str] resource_id: The Azure Resource ID of an hybrid connection that is the destination of an event subscription.
        """
        pulumi.set(__self__, "endpoint_type", 'HybridConnection')
        if resource_id is not None:
            pulumi.set(__self__, "resource_id", resource_id)

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> pulumi.Input[str]:
        """
        Type of the endpoint for the event subscription destination
        Expected value is 'HybridConnection'.
        """
        return pulumi.get(self, "endpoint_type")

    @endpoint_type.setter
    def endpoint_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "endpoint_type", value)

    @property
    @pulumi.getter(name="resourceId")
    def resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        The Azure Resource ID of an hybrid connection that is the destination of an event subscription.
        """
        return pulumi.get(self, "resource_id")

    @resource_id.setter
    def resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "resource_id", value)


@pulumi.input_type
class JsonFieldArgs:
    def __init__(__self__, *,
                 source_field: Optional[pulumi.Input[str]] = None):
        """
        This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id','topic' and 'eventTime' properties. This represents a field in the input event schema.
        :param pulumi.Input[str] source_field: Name of a field in the input event schema that's to be used as the source of a mapping.
        """
        if source_field is not None:
            pulumi.set(__self__, "source_field", source_field)

    @property
    @pulumi.getter(name="sourceField")
    def source_field(self) -> Optional[pulumi.Input[str]]:
        """
        Name of a field in the input event schema that's to be used as the source of a mapping.
        """
        return pulumi.get(self, "source_field")

    @source_field.setter
    def source_field(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "source_field", value)


@pulumi.input_type
class JsonFieldWithDefaultArgs:
    def __init__(__self__, *,
                 default_value: Optional[pulumi.Input[str]] = None,
                 source_field: Optional[pulumi.Input[str]] = None):
        """
        This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'subject','eventType' and 'dataVersion' properties. This represents a field in the input event schema along with a default value to be used, and at least one of these two properties should be provided.
        :param pulumi.Input[str] default_value: The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
        :param pulumi.Input[str] source_field: Name of a field in the input event schema that's to be used as the source of a mapping.
        """
        if default_value is not None:
            pulumi.set(__self__, "default_value", default_value)
        if source_field is not None:
            pulumi.set(__self__, "source_field", source_field)

    @property
    @pulumi.getter(name="defaultValue")
    def default_value(self) -> Optional[pulumi.Input[str]]:
        """
        The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
        """
        return pulumi.get(self, "default_value")

    @default_value.setter
    def default_value(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "default_value", value)

    @property
    @pulumi.getter(name="sourceField")
    def source_field(self) -> Optional[pulumi.Input[str]]:
        """
        Name of a field in the input event schema that's to be used as the source of a mapping.
        """
        return pulumi.get(self, "source_field")

    @source_field.setter
    def source_field(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "source_field", value)


@pulumi.input_type
class JsonInputSchemaMappingArgs:
    def __init__(__self__, *,
                 data_version: Optional[pulumi.Input['JsonFieldWithDefaultArgs']] = None,
                 event_time: Optional[pulumi.Input['JsonFieldArgs']] = None,
                 event_type: Optional[pulumi.Input['JsonFieldWithDefaultArgs']] = None,
                 id: Optional[pulumi.Input['JsonFieldArgs']] = None,
                 input_schema_mapping_type: Optional[pulumi.Input[str]] = None,
                 subject: Optional[pulumi.Input['JsonFieldWithDefaultArgs']] = None,
                 topic: Optional[pulumi.Input['JsonFieldArgs']] = None):
        """
        This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.
        :param pulumi.Input['JsonFieldWithDefaultArgs'] data_version: The mapping information for the DataVersion property of the Event Grid Event.
        :param pulumi.Input['JsonFieldArgs'] event_time: The mapping information for the EventTime property of the Event Grid Event.
        :param pulumi.Input['JsonFieldWithDefaultArgs'] event_type: The mapping information for the EventType property of the Event Grid Event.
        :param pulumi.Input['JsonFieldArgs'] id: The mapping information for the Id property of the Event Grid Event.
        :param pulumi.Input[str] input_schema_mapping_type: Type of the custom mapping
               Expected value is 'Json'.
        :param pulumi.Input['JsonFieldWithDefaultArgs'] subject: The mapping information for the Subject property of the Event Grid Event.
        :param pulumi.Input['JsonFieldArgs'] topic: The mapping information for the Topic property of the Event Grid Event.
        """
        if data_version is not None:
            pulumi.set(__self__, "data_version", data_version)
        if event_time is not None:
            pulumi.set(__self__, "event_time", event_time)
        if event_type is not None:
            pulumi.set(__self__, "event_type", event_type)
        if id is not None:
            pulumi.set(__self__, "id", id)
        if input_schema_mapping_type is not None:
            pulumi.set(__self__, "input_schema_mapping_type", 'Json')
        if subject is not None:
            pulumi.set(__self__, "subject", subject)
        if topic is not None:
            pulumi.set(__self__, "topic", topic)

    @property
    @pulumi.getter(name="dataVersion")
    def data_version(self) -> Optional[pulumi.Input['JsonFieldWithDefaultArgs']]:
        """
        The mapping information for the DataVersion property of the Event Grid Event.
        """
        return pulumi.get(self, "data_version")

    @data_version.setter
    def data_version(self, value: Optional[pulumi.Input['JsonFieldWithDefaultArgs']]):
        pulumi.set(self, "data_version", value)

    @property
    @pulumi.getter(name="eventTime")
    def event_time(self) -> Optional[pulumi.Input['JsonFieldArgs']]:
        """
        The mapping information for the EventTime property of the Event Grid Event.
        """
        return pulumi.get(self, "event_time")

    @event_time.setter
    def event_time(self, value: Optional[pulumi.Input['JsonFieldArgs']]):
        pulumi.set(self, "event_time", value)

    @property
    @pulumi.getter(name="eventType")
    def event_type(self) -> Optional[pulumi.Input['JsonFieldWithDefaultArgs']]:
        """
        The mapping information for the EventType property of the Event Grid Event.
        """
        return pulumi.get(self, "event_type")

    @event_type.setter
    def event_type(self, value: Optional[pulumi.Input['JsonFieldWithDefaultArgs']]):
        pulumi.set(self, "event_type", value)

    @property
    @pulumi.getter
    def id(self) -> Optional[pulumi.Input['JsonFieldArgs']]:
        """
        The mapping information for the Id property of the Event Grid Event.
        """
        return pulumi.get(self, "id")

    @id.setter
    def id(self, value: Optional[pulumi.Input['JsonFieldArgs']]):
        pulumi.set(self, "id", value)

    @property
    @pulumi.getter(name="inputSchemaMappingType")
    def input_schema_mapping_type(self) -> Optional[pulumi.Input[str]]:
        """
        Type of the custom mapping
        Expected value is 'Json'.
        """
        return pulumi.get(self, "input_schema_mapping_type")

    @input_schema_mapping_type.setter
    def input_schema_mapping_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "input_schema_mapping_type", value)

    @property
    @pulumi.getter
    def subject(self) -> Optional[pulumi.Input['JsonFieldWithDefaultArgs']]:
        """
        The mapping information for the Subject property of the Event Grid Event.
        """
        return pulumi.get(self, "subject")

    @subject.setter
    def subject(self, value: Optional[pulumi.Input['JsonFieldWithDefaultArgs']]):
        pulumi.set(self, "subject", value)

    @property
    @pulumi.getter
    def topic(self) -> Optional[pulumi.Input['JsonFieldArgs']]:
        """
        The mapping information for the Topic property of the Event Grid Event.
        """
        return pulumi.get(self, "topic")

    @topic.setter
    def topic(self, value: Optional[pulumi.Input['JsonFieldArgs']]):
        pulumi.set(self, "topic", value)


@pulumi.input_type
class RetryPolicyArgs:
    def __init__(__self__, *,
                 event_time_to_live_in_minutes: Optional[pulumi.Input[int]] = None,
                 max_delivery_attempts: Optional[pulumi.Input[int]] = None):
        """
        Information about the retry policy for an event subscription
        :param pulumi.Input[int] event_time_to_live_in_minutes: Time To Live (in minutes) for events.
        :param pulumi.Input[int] max_delivery_attempts: Maximum number of delivery retry attempts for events.
        """
        if event_time_to_live_in_minutes is not None:
            pulumi.set(__self__, "event_time_to_live_in_minutes", event_time_to_live_in_minutes)
        if max_delivery_attempts is not None:
            pulumi.set(__self__, "max_delivery_attempts", max_delivery_attempts)

    @property
    @pulumi.getter(name="eventTimeToLiveInMinutes")
    def event_time_to_live_in_minutes(self) -> Optional[pulumi.Input[int]]:
        """
        Time To Live (in minutes) for events.
        """
        return pulumi.get(self, "event_time_to_live_in_minutes")

    @event_time_to_live_in_minutes.setter
    def event_time_to_live_in_minutes(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "event_time_to_live_in_minutes", value)

    @property
    @pulumi.getter(name="maxDeliveryAttempts")
    def max_delivery_attempts(self) -> Optional[pulumi.Input[int]]:
        """
        Maximum number of delivery retry attempts for events.
        """
        return pulumi.get(self, "max_delivery_attempts")

    @max_delivery_attempts.setter
    def max_delivery_attempts(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "max_delivery_attempts", value)


@pulumi.input_type
class StorageBlobDeadLetterDestinationArgs:
    def __init__(__self__, *,
                 endpoint_type: pulumi.Input[str],
                 blob_container_name: Optional[pulumi.Input[str]] = None,
                 resource_id: Optional[pulumi.Input[str]] = None):
        """
        Information about the storage blob based dead letter destination.
        :param pulumi.Input[str] endpoint_type: Type of the endpoint for the dead letter destination
               Expected value is 'StorageBlob'.
        :param pulumi.Input[str] blob_container_name: The name of the Storage blob container that is the destination of the deadletter events
        :param pulumi.Input[str] resource_id: The Azure Resource ID of the storage account that is the destination of the deadletter events
        """
        pulumi.set(__self__, "endpoint_type", 'StorageBlob')
        if blob_container_name is not None:
            pulumi.set(__self__, "blob_container_name", blob_container_name)
        if resource_id is not None:
            pulumi.set(__self__, "resource_id", resource_id)

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> pulumi.Input[str]:
        """
        Type of the endpoint for the dead letter destination
        Expected value is 'StorageBlob'.
        """
        return pulumi.get(self, "endpoint_type")

    @endpoint_type.setter
    def endpoint_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "endpoint_type", value)

    @property
    @pulumi.getter(name="blobContainerName")
    def blob_container_name(self) -> Optional[pulumi.Input[str]]:
        """
        The name of the Storage blob container that is the destination of the deadletter events
        """
        return pulumi.get(self, "blob_container_name")

    @blob_container_name.setter
    def blob_container_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "blob_container_name", value)

    @property
    @pulumi.getter(name="resourceId")
    def resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        The Azure Resource ID of the storage account that is the destination of the deadletter events
        """
        return pulumi.get(self, "resource_id")

    @resource_id.setter
    def resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "resource_id", value)


@pulumi.input_type
class StorageQueueEventSubscriptionDestinationArgs:
    def __init__(__self__, *,
                 endpoint_type: pulumi.Input[str],
                 queue_name: Optional[pulumi.Input[str]] = None,
                 resource_id: Optional[pulumi.Input[str]] = None):
        """
        Information about the storage queue destination for an event subscription.
        :param pulumi.Input[str] endpoint_type: Type of the endpoint for the event subscription destination
               Expected value is 'StorageQueue'.
        :param pulumi.Input[str] queue_name: The name of the Storage queue under a storage account that is the destination of an event subscription.
        :param pulumi.Input[str] resource_id: The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.
        """
        pulumi.set(__self__, "endpoint_type", 'StorageQueue')
        if queue_name is not None:
            pulumi.set(__self__, "queue_name", queue_name)
        if resource_id is not None:
            pulumi.set(__self__, "resource_id", resource_id)

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> pulumi.Input[str]:
        """
        Type of the endpoint for the event subscription destination
        Expected value is 'StorageQueue'.
        """
        return pulumi.get(self, "endpoint_type")

    @endpoint_type.setter
    def endpoint_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "endpoint_type", value)

    @property
    @pulumi.getter(name="queueName")
    def queue_name(self) -> Optional[pulumi.Input[str]]:
        """
        The name of the Storage queue under a storage account that is the destination of an event subscription.
        """
        return pulumi.get(self, "queue_name")

    @queue_name.setter
    def queue_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "queue_name", value)

    @property
    @pulumi.getter(name="resourceId")
    def resource_id(self) -> Optional[pulumi.Input[str]]:
        """
        The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.
        """
        return pulumi.get(self, "resource_id")

    @resource_id.setter
    def resource_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "resource_id", value)


@pulumi.input_type
class WebHookEventSubscriptionDestinationArgs:
    def __init__(__self__, *,
                 endpoint_type: pulumi.Input[str],
                 endpoint_url: Optional[pulumi.Input[str]] = None):
        """
        Information about the webhook destination for an event subscription
        :param pulumi.Input[str] endpoint_type: Type of the endpoint for the event subscription destination
               Expected value is 'WebHook'.
        :param pulumi.Input[str] endpoint_url: The URL that represents the endpoint of the destination of an event subscription.
        """
        pulumi.set(__self__, "endpoint_type", 'WebHook')
        if endpoint_url is not None:
            pulumi.set(__self__, "endpoint_url", endpoint_url)

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> pulumi.Input[str]:
        """
        Type of the endpoint for the event subscription destination
        Expected value is 'WebHook'.
        """
        return pulumi.get(self, "endpoint_type")

    @endpoint_type.setter
    def endpoint_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "endpoint_type", value)

    @property
    @pulumi.getter(name="endpointUrl")
    def endpoint_url(self) -> Optional[pulumi.Input[str]]:
        """
        The URL that represents the endpoint of the destination of an event subscription.
        """
        return pulumi.get(self, "endpoint_url")

    @endpoint_url.setter
    def endpoint_url(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "endpoint_url", value)


