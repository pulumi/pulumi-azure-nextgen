# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetEventChannelResult',
    'AwaitableGetEventChannelResult',
    'get_event_channel',
]

@pulumi.output_type
class GetEventChannelResult:
    """
    Event Channel.
    """
    def __init__(__self__, destination=None, expiration_time_if_not_activated_utc=None, filter=None, id=None, name=None, partner_topic_friendly_description=None, partner_topic_readiness_state=None, provisioning_state=None, source=None, system_data=None, type=None):
        if destination and not isinstance(destination, dict):
            raise TypeError("Expected argument 'destination' to be a dict")
        pulumi.set(__self__, "destination", destination)
        if expiration_time_if_not_activated_utc and not isinstance(expiration_time_if_not_activated_utc, str):
            raise TypeError("Expected argument 'expiration_time_if_not_activated_utc' to be a str")
        pulumi.set(__self__, "expiration_time_if_not_activated_utc", expiration_time_if_not_activated_utc)
        if filter and not isinstance(filter, dict):
            raise TypeError("Expected argument 'filter' to be a dict")
        pulumi.set(__self__, "filter", filter)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if partner_topic_friendly_description and not isinstance(partner_topic_friendly_description, str):
            raise TypeError("Expected argument 'partner_topic_friendly_description' to be a str")
        pulumi.set(__self__, "partner_topic_friendly_description", partner_topic_friendly_description)
        if partner_topic_readiness_state and not isinstance(partner_topic_readiness_state, str):
            raise TypeError("Expected argument 'partner_topic_readiness_state' to be a str")
        pulumi.set(__self__, "partner_topic_readiness_state", partner_topic_readiness_state)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if source and not isinstance(source, dict):
            raise TypeError("Expected argument 'source' to be a dict")
        pulumi.set(__self__, "source", source)
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def destination(self) -> Optional['outputs.EventChannelDestinationResponse']:
        """
        Represents the destination of an event channel.
        """
        return pulumi.get(self, "destination")

    @property
    @pulumi.getter(name="expirationTimeIfNotActivatedUtc")
    def expiration_time_if_not_activated_utc(self) -> Optional[str]:
        """
        Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,
        the event channel and corresponding partner topic are deleted.
        """
        return pulumi.get(self, "expiration_time_if_not_activated_utc")

    @property
    @pulumi.getter
    def filter(self) -> Optional['outputs.EventChannelFilterResponse']:
        """
        Information about the filter for the event channel.
        """
        return pulumi.get(self, "filter")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified identifier of the resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the resource.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="partnerTopicFriendlyDescription")
    def partner_topic_friendly_description(self) -> Optional[str]:
        """
        Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
        This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
        """
        return pulumi.get(self, "partner_topic_friendly_description")

    @property
    @pulumi.getter(name="partnerTopicReadinessState")
    def partner_topic_readiness_state(self) -> str:
        """
        The readiness state of the corresponding partner topic.
        """
        return pulumi.get(self, "partner_topic_readiness_state")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning state of the event channel.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def source(self) -> Optional['outputs.EventChannelSourceResponse']:
        """
        Source of the event channel. This represents a unique resource in the partner's resource model.
        """
        return pulumi.get(self, "source")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> 'outputs.SystemDataResponse':
        """
        The system metadata relating to this resource.
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Type of the resource.
        """
        return pulumi.get(self, "type")


class AwaitableGetEventChannelResult(GetEventChannelResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetEventChannelResult(
            destination=self.destination,
            expiration_time_if_not_activated_utc=self.expiration_time_if_not_activated_utc,
            filter=self.filter,
            id=self.id,
            name=self.name,
            partner_topic_friendly_description=self.partner_topic_friendly_description,
            partner_topic_readiness_state=self.partner_topic_readiness_state,
            provisioning_state=self.provisioning_state,
            source=self.source,
            system_data=self.system_data,
            type=self.type)


def get_event_channel(event_channel_name: Optional[str] = None,
                      partner_namespace_name: Optional[str] = None,
                      resource_group_name: Optional[str] = None,
                      opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetEventChannelResult:
    """
    Use this data source to access information about an existing resource.

    :param str event_channel_name: Name of the event channel.
    :param str partner_namespace_name: Name of the partner namespace.
    :param str resource_group_name: The name of the resource group within the user's subscription.
    """
    __args__ = dict()
    __args__['eventChannelName'] = event_channel_name
    __args__['partnerNamespaceName'] = partner_namespace_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:eventgrid/v20201015preview:getEventChannel', __args__, opts=opts, typ=GetEventChannelResult).value

    return AwaitableGetEventChannelResult(
        destination=__ret__.destination,
        expiration_time_if_not_activated_utc=__ret__.expiration_time_if_not_activated_utc,
        filter=__ret__.filter,
        id=__ret__.id,
        name=__ret__.name,
        partner_topic_friendly_description=__ret__.partner_topic_friendly_description,
        partner_topic_readiness_state=__ret__.partner_topic_readiness_state,
        provisioning_state=__ret__.provisioning_state,
        source=__ret__.source,
        system_data=__ret__.system_data,
        type=__ret__.type)
