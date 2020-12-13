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
    'GetPublicIpAddressResult',
    'AwaitableGetPublicIpAddressResult',
    'get_public_ip_address',
]

@pulumi.output_type
class GetPublicIpAddressResult:
    """
    PublicIPAddress resource
    """
    def __init__(__self__, dns_settings=None, etag=None, id=None, idle_timeout_in_minutes=None, ip_address=None, ip_configuration=None, location=None, name=None, provisioning_state=None, public_ip_allocation_method=None, resource_guid=None, tags=None, type=None):
        if dns_settings and not isinstance(dns_settings, dict):
            raise TypeError("Expected argument 'dns_settings' to be a dict")
        pulumi.set(__self__, "dns_settings", dns_settings)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if idle_timeout_in_minutes and not isinstance(idle_timeout_in_minutes, int):
            raise TypeError("Expected argument 'idle_timeout_in_minutes' to be a int")
        pulumi.set(__self__, "idle_timeout_in_minutes", idle_timeout_in_minutes)
        if ip_address and not isinstance(ip_address, str):
            raise TypeError("Expected argument 'ip_address' to be a str")
        pulumi.set(__self__, "ip_address", ip_address)
        if ip_configuration and not isinstance(ip_configuration, dict):
            raise TypeError("Expected argument 'ip_configuration' to be a dict")
        pulumi.set(__self__, "ip_configuration", ip_configuration)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if public_ip_allocation_method and not isinstance(public_ip_allocation_method, str):
            raise TypeError("Expected argument 'public_ip_allocation_method' to be a str")
        pulumi.set(__self__, "public_ip_allocation_method", public_ip_allocation_method)
        if resource_guid and not isinstance(resource_guid, str):
            raise TypeError("Expected argument 'resource_guid' to be a str")
        pulumi.set(__self__, "resource_guid", resource_guid)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="dnsSettings")
    def dns_settings(self) -> Optional['outputs.PublicIpAddressDnsSettingsResponse']:
        """
        Gets or sets FQDN of the DNS record associated with the public IP address
        """
        return pulumi.get(self, "dns_settings")

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
        """
        Gets a unique read-only string that changes whenever the resource is updated
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="idleTimeoutInMinutes")
    def idle_timeout_in_minutes(self) -> Optional[int]:
        """
        Gets or sets the idle timeout of the public IP address
        """
        return pulumi.get(self, "idle_timeout_in_minutes")

    @property
    @pulumi.getter(name="ipAddress")
    def ip_address(self) -> Optional[str]:
        """
        Gets the assigned public IP address
        """
        return pulumi.get(self, "ip_address")

    @property
    @pulumi.getter(name="ipConfiguration")
    def ip_configuration(self) -> Optional['outputs.SubResourceResponse']:
        """
        Gets a reference to the network interface IP configurations using this public IP address
        """
        return pulumi.get(self, "ip_configuration")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        """
        Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="publicIPAllocationMethod")
    def public_ip_allocation_method(self) -> str:
        """
        Gets or sets PublicIP allocation method (Static/Dynamic)
        """
        return pulumi.get(self, "public_ip_allocation_method")

    @property
    @pulumi.getter(name="resourceGuid")
    def resource_guid(self) -> Optional[str]:
        """
        Gets or sets resource guid property of the PublicIP resource
        """
        return pulumi.get(self, "resource_guid")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Resource tags
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type
        """
        return pulumi.get(self, "type")


class AwaitableGetPublicIpAddressResult(GetPublicIpAddressResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetPublicIpAddressResult(
            dns_settings=self.dns_settings,
            etag=self.etag,
            id=self.id,
            idle_timeout_in_minutes=self.idle_timeout_in_minutes,
            ip_address=self.ip_address,
            ip_configuration=self.ip_configuration,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            public_ip_allocation_method=self.public_ip_allocation_method,
            resource_guid=self.resource_guid,
            tags=self.tags,
            type=self.type)


def get_public_ip_address(public_ip_address_name: Optional[str] = None,
                          resource_group_name: Optional[str] = None,
                          opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetPublicIpAddressResult:
    """
    Use this data source to access information about an existing resource.

    :param str public_ip_address_name: The name of the subnet.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['publicIpAddressName'] = public_ip_address_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20150501preview:getPublicIpAddress', __args__, opts=opts, typ=GetPublicIpAddressResult).value

    return AwaitableGetPublicIpAddressResult(
        dns_settings=__ret__.dns_settings,
        etag=__ret__.etag,
        id=__ret__.id,
        idle_timeout_in_minutes=__ret__.idle_timeout_in_minutes,
        ip_address=__ret__.ip_address,
        ip_configuration=__ret__.ip_configuration,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        public_ip_allocation_method=__ret__.public_ip_allocation_method,
        resource_guid=__ret__.resource_guid,
        tags=__ret__.tags,
        type=__ret__.type)
