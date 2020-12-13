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
    'GetVirtualNetworkLinkResult',
    'AwaitableGetVirtualNetworkLinkResult',
    'get_virtual_network_link',
]

@pulumi.output_type
class GetVirtualNetworkLinkResult:
    """
    Describes a link to virtual network for a Private DNS zone.
    """
    def __init__(__self__, etag=None, id=None, location=None, name=None, provisioning_state=None, registration_enabled=None, tags=None, type=None, virtual_network=None, virtual_network_link_state=None):
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if registration_enabled and not isinstance(registration_enabled, bool):
            raise TypeError("Expected argument 'registration_enabled' to be a bool")
        pulumi.set(__self__, "registration_enabled", registration_enabled)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if virtual_network and not isinstance(virtual_network, dict):
            raise TypeError("Expected argument 'virtual_network' to be a dict")
        pulumi.set(__self__, "virtual_network", virtual_network)
        if virtual_network_link_state and not isinstance(virtual_network_link_state, str):
            raise TypeError("Expected argument 'virtual_network_link_state' to be a str")
        pulumi.set(__self__, "virtual_network_link_state", virtual_network_link_state)

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        The ETag of the virtual network link.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        The Azure Region where the resource lives
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="registrationEnabled")
    def registration_enabled(self) -> Optional[bool]:
        """
        Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
        """
        return pulumi.get(self, "registration_enabled")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="virtualNetwork")
    def virtual_network(self) -> Optional['outputs.SubResourceResponse']:
        """
        The reference of the virtual network.
        """
        return pulumi.get(self, "virtual_network")

    @property
    @pulumi.getter(name="virtualNetworkLinkState")
    def virtual_network_link_state(self) -> str:
        """
        The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.
        """
        return pulumi.get(self, "virtual_network_link_state")


class AwaitableGetVirtualNetworkLinkResult(GetVirtualNetworkLinkResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVirtualNetworkLinkResult(
            etag=self.etag,
            id=self.id,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            registration_enabled=self.registration_enabled,
            tags=self.tags,
            type=self.type,
            virtual_network=self.virtual_network,
            virtual_network_link_state=self.virtual_network_link_state)


def get_virtual_network_link(private_zone_name: Optional[str] = None,
                             resource_group_name: Optional[str] = None,
                             virtual_network_link_name: Optional[str] = None,
                             opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVirtualNetworkLinkResult:
    """
    Use this data source to access information about an existing resource.

    :param str private_zone_name: The name of the Private DNS zone (without a terminating dot).
    :param str resource_group_name: The name of the resource group.
    :param str virtual_network_link_name: The name of the virtual network link.
    """
    __args__ = dict()
    __args__['privateZoneName'] = private_zone_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['virtualNetworkLinkName'] = virtual_network_link_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20200101:getVirtualNetworkLink', __args__, opts=opts, typ=GetVirtualNetworkLinkResult).value

    return AwaitableGetVirtualNetworkLinkResult(
        etag=__ret__.etag,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        registration_enabled=__ret__.registration_enabled,
        tags=__ret__.tags,
        type=__ret__.type,
        virtual_network=__ret__.virtual_network,
        virtual_network_link_state=__ret__.virtual_network_link_state)
