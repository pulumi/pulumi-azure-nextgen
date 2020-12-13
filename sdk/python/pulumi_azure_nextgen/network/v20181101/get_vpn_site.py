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
    'GetVpnSiteResult',
    'AwaitableGetVpnSiteResult',
    'get_vpn_site',
]

@pulumi.output_type
class GetVpnSiteResult:
    """
    VpnSite Resource.
    """
    def __init__(__self__, address_space=None, bgp_properties=None, device_properties=None, etag=None, id=None, ip_address=None, is_security_site=None, location=None, name=None, provisioning_state=None, site_key=None, tags=None, type=None, virtual_wan=None):
        if address_space and not isinstance(address_space, dict):
            raise TypeError("Expected argument 'address_space' to be a dict")
        pulumi.set(__self__, "address_space", address_space)
        if bgp_properties and not isinstance(bgp_properties, dict):
            raise TypeError("Expected argument 'bgp_properties' to be a dict")
        pulumi.set(__self__, "bgp_properties", bgp_properties)
        if device_properties and not isinstance(device_properties, dict):
            raise TypeError("Expected argument 'device_properties' to be a dict")
        pulumi.set(__self__, "device_properties", device_properties)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if ip_address and not isinstance(ip_address, str):
            raise TypeError("Expected argument 'ip_address' to be a str")
        pulumi.set(__self__, "ip_address", ip_address)
        if is_security_site and not isinstance(is_security_site, bool):
            raise TypeError("Expected argument 'is_security_site' to be a bool")
        pulumi.set(__self__, "is_security_site", is_security_site)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if site_key and not isinstance(site_key, str):
            raise TypeError("Expected argument 'site_key' to be a str")
        pulumi.set(__self__, "site_key", site_key)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if virtual_wan and not isinstance(virtual_wan, dict):
            raise TypeError("Expected argument 'virtual_wan' to be a dict")
        pulumi.set(__self__, "virtual_wan", virtual_wan)

    @property
    @pulumi.getter(name="addressSpace")
    def address_space(self) -> Optional['outputs.AddressSpaceResponse']:
        """
        The AddressSpace that contains an array of IP address ranges.
        """
        return pulumi.get(self, "address_space")

    @property
    @pulumi.getter(name="bgpProperties")
    def bgp_properties(self) -> Optional['outputs.BgpSettingsResponse']:
        """
        The set of bgp properties.
        """
        return pulumi.get(self, "bgp_properties")

    @property
    @pulumi.getter(name="deviceProperties")
    def device_properties(self) -> Optional['outputs.DevicePropertiesResponse']:
        """
        The device properties
        """
        return pulumi.get(self, "device_properties")

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        Gets a unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="ipAddress")
    def ip_address(self) -> Optional[str]:
        """
        The ip-address for the vpn-site.
        """
        return pulumi.get(self, "ip_address")

    @property
    @pulumi.getter(name="isSecuritySite")
    def is_security_site(self) -> Optional[bool]:
        """
        IsSecuritySite flag
        """
        return pulumi.get(self, "is_security_site")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="siteKey")
    def site_key(self) -> Optional[str]:
        """
        The key for vpn-site that can be used for connections.
        """
        return pulumi.get(self, "site_key")

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
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="virtualWan")
    def virtual_wan(self) -> Optional['outputs.SubResourceResponse']:
        """
        The VirtualWAN to which the vpnSite belongs
        """
        return pulumi.get(self, "virtual_wan")


class AwaitableGetVpnSiteResult(GetVpnSiteResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVpnSiteResult(
            address_space=self.address_space,
            bgp_properties=self.bgp_properties,
            device_properties=self.device_properties,
            etag=self.etag,
            id=self.id,
            ip_address=self.ip_address,
            is_security_site=self.is_security_site,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            site_key=self.site_key,
            tags=self.tags,
            type=self.type,
            virtual_wan=self.virtual_wan)


def get_vpn_site(resource_group_name: Optional[str] = None,
                 vpn_site_name: Optional[str] = None,
                 opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVpnSiteResult:
    """
    Use this data source to access information about an existing resource.

    :param str resource_group_name: The resource group name of the VpnSite.
    :param str vpn_site_name: The name of the VpnSite being retrieved.
    """
    __args__ = dict()
    __args__['resourceGroupName'] = resource_group_name
    __args__['vpnSiteName'] = vpn_site_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20181101:getVpnSite', __args__, opts=opts, typ=GetVpnSiteResult).value

    return AwaitableGetVpnSiteResult(
        address_space=__ret__.address_space,
        bgp_properties=__ret__.bgp_properties,
        device_properties=__ret__.device_properties,
        etag=__ret__.etag,
        id=__ret__.id,
        ip_address=__ret__.ip_address,
        is_security_site=__ret__.is_security_site,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        site_key=__ret__.site_key,
        tags=__ret__.tags,
        type=__ret__.type,
        virtual_wan=__ret__.virtual_wan)
