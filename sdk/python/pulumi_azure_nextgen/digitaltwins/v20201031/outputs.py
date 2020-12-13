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
    'EventGridResponse',
    'EventHubResponse',
    'ServiceBusResponse',
]

@pulumi.output_type
class EventGridResponse(dict):
    """
    Properties related to EventGrid.
    """
    def __init__(__self__, *,
                 access_key1: str,
                 created_time: str,
                 endpoint_type: str,
                 provisioning_state: str,
                 topic_endpoint: str,
                 access_key2: Optional[str] = None,
                 dead_letter_secret: Optional[str] = None):
        """
        Properties related to EventGrid.
        :param str access_key1: EventGrid secondary accesskey. Will be obfuscated during read.
        :param str created_time: Time when the Endpoint was added to DigitalTwinsInstance.
        :param str endpoint_type: The type of Digital Twins endpoint
        :param str provisioning_state: The provisioning state.
        :param str topic_endpoint: EventGrid Topic Endpoint
        :param str access_key2: EventGrid secondary accesskey. Will be obfuscated during read.
        :param str dead_letter_secret: Dead letter storage secret. Will be obfuscated during read.
        """
        pulumi.set(__self__, "access_key1", access_key1)
        pulumi.set(__self__, "created_time", created_time)
        pulumi.set(__self__, "endpoint_type", 'EventGrid')
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        pulumi.set(__self__, "topic_endpoint", topic_endpoint)
        if access_key2 is not None:
            pulumi.set(__self__, "access_key2", access_key2)
        if dead_letter_secret is not None:
            pulumi.set(__self__, "dead_letter_secret", dead_letter_secret)

    @property
    @pulumi.getter(name="accessKey1")
    def access_key1(self) -> str:
        """
        EventGrid secondary accesskey. Will be obfuscated during read.
        """
        return pulumi.get(self, "access_key1")

    @property
    @pulumi.getter(name="createdTime")
    def created_time(self) -> str:
        """
        Time when the Endpoint was added to DigitalTwinsInstance.
        """
        return pulumi.get(self, "created_time")

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> str:
        """
        The type of Digital Twins endpoint
        """
        return pulumi.get(self, "endpoint_type")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="topicEndpoint")
    def topic_endpoint(self) -> str:
        """
        EventGrid Topic Endpoint
        """
        return pulumi.get(self, "topic_endpoint")

    @property
    @pulumi.getter(name="accessKey2")
    def access_key2(self) -> Optional[str]:
        """
        EventGrid secondary accesskey. Will be obfuscated during read.
        """
        return pulumi.get(self, "access_key2")

    @property
    @pulumi.getter(name="deadLetterSecret")
    def dead_letter_secret(self) -> Optional[str]:
        """
        Dead letter storage secret. Will be obfuscated during read.
        """
        return pulumi.get(self, "dead_letter_secret")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class EventHubResponse(dict):
    """
    Properties related to EventHub.
    """
    def __init__(__self__, *,
                 connection_string_primary_key: str,
                 created_time: str,
                 endpoint_type: str,
                 provisioning_state: str,
                 connection_string_secondary_key: Optional[str] = None,
                 dead_letter_secret: Optional[str] = None):
        """
        Properties related to EventHub.
        :param str connection_string_primary_key: PrimaryConnectionString of the endpoint. Will be obfuscated during read.
        :param str created_time: Time when the Endpoint was added to DigitalTwinsInstance.
        :param str endpoint_type: The type of Digital Twins endpoint
        :param str provisioning_state: The provisioning state.
        :param str connection_string_secondary_key: SecondaryConnectionString of the endpoint. Will be obfuscated during read.
        :param str dead_letter_secret: Dead letter storage secret. Will be obfuscated during read.
        """
        pulumi.set(__self__, "connection_string_primary_key", connection_string_primary_key)
        pulumi.set(__self__, "created_time", created_time)
        pulumi.set(__self__, "endpoint_type", 'EventHub')
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if connection_string_secondary_key is not None:
            pulumi.set(__self__, "connection_string_secondary_key", connection_string_secondary_key)
        if dead_letter_secret is not None:
            pulumi.set(__self__, "dead_letter_secret", dead_letter_secret)

    @property
    @pulumi.getter(name="connectionStringPrimaryKey")
    def connection_string_primary_key(self) -> str:
        """
        PrimaryConnectionString of the endpoint. Will be obfuscated during read.
        """
        return pulumi.get(self, "connection_string_primary_key")

    @property
    @pulumi.getter(name="createdTime")
    def created_time(self) -> str:
        """
        Time when the Endpoint was added to DigitalTwinsInstance.
        """
        return pulumi.get(self, "created_time")

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> str:
        """
        The type of Digital Twins endpoint
        """
        return pulumi.get(self, "endpoint_type")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="connectionStringSecondaryKey")
    def connection_string_secondary_key(self) -> Optional[str]:
        """
        SecondaryConnectionString of the endpoint. Will be obfuscated during read.
        """
        return pulumi.get(self, "connection_string_secondary_key")

    @property
    @pulumi.getter(name="deadLetterSecret")
    def dead_letter_secret(self) -> Optional[str]:
        """
        Dead letter storage secret. Will be obfuscated during read.
        """
        return pulumi.get(self, "dead_letter_secret")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ServiceBusResponse(dict):
    """
    Properties related to ServiceBus.
    """
    def __init__(__self__, *,
                 created_time: str,
                 endpoint_type: str,
                 primary_connection_string: str,
                 provisioning_state: str,
                 dead_letter_secret: Optional[str] = None,
                 secondary_connection_string: Optional[str] = None):
        """
        Properties related to ServiceBus.
        :param str created_time: Time when the Endpoint was added to DigitalTwinsInstance.
        :param str endpoint_type: The type of Digital Twins endpoint
        :param str primary_connection_string: PrimaryConnectionString of the endpoint. Will be obfuscated during read.
        :param str provisioning_state: The provisioning state.
        :param str dead_letter_secret: Dead letter storage secret. Will be obfuscated during read.
        :param str secondary_connection_string: SecondaryConnectionString of the endpoint. Will be obfuscated during read.
        """
        pulumi.set(__self__, "created_time", created_time)
        pulumi.set(__self__, "endpoint_type", 'ServiceBus')
        pulumi.set(__self__, "primary_connection_string", primary_connection_string)
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if dead_letter_secret is not None:
            pulumi.set(__self__, "dead_letter_secret", dead_letter_secret)
        if secondary_connection_string is not None:
            pulumi.set(__self__, "secondary_connection_string", secondary_connection_string)

    @property
    @pulumi.getter(name="createdTime")
    def created_time(self) -> str:
        """
        Time when the Endpoint was added to DigitalTwinsInstance.
        """
        return pulumi.get(self, "created_time")

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> str:
        """
        The type of Digital Twins endpoint
        """
        return pulumi.get(self, "endpoint_type")

    @property
    @pulumi.getter(name="primaryConnectionString")
    def primary_connection_string(self) -> str:
        """
        PrimaryConnectionString of the endpoint. Will be obfuscated during read.
        """
        return pulumi.get(self, "primary_connection_string")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="deadLetterSecret")
    def dead_letter_secret(self) -> Optional[str]:
        """
        Dead letter storage secret. Will be obfuscated during read.
        """
        return pulumi.get(self, "dead_letter_secret")

    @property
    @pulumi.getter(name="secondaryConnectionString")
    def secondary_connection_string(self) -> Optional[str]:
        """
        SecondaryConnectionString of the endpoint. Will be obfuscated during read.
        """
        return pulumi.get(self, "secondary_connection_string")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


