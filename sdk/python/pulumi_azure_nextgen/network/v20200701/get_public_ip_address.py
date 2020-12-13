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
    'GetPublicIPAddressResult',
    'AwaitableGetPublicIPAddressResult',
    'get_public_ip_address',
]

@pulumi.output_type
class GetPublicIPAddressResult:
    """
    Public IP address resource.
    """
    def __init__(__self__, ddos_settings=None, dns_settings=None, etag=None, extended_location=None, id=None, idle_timeout_in_minutes=None, ip_address=None, ip_configuration=None, ip_tags=None, location=None, name=None, provisioning_state=None, public_ip_address_version=None, public_ip_allocation_method=None, public_ip_prefix=None, resource_guid=None, sku=None, tags=None, type=None, zones=None):
        if ddos_settings and not isinstance(ddos_settings, dict):
            raise TypeError("Expected argument 'ddos_settings' to be a dict")
        pulumi.set(__self__, "ddos_settings", ddos_settings)
        if dns_settings and not isinstance(dns_settings, dict):
            raise TypeError("Expected argument 'dns_settings' to be a dict")
        pulumi.set(__self__, "dns_settings", dns_settings)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if extended_location and not isinstance(extended_location, dict):
            raise TypeError("Expected argument 'extended_location' to be a dict")
        pulumi.set(__self__, "extended_location", extended_location)
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
        if ip_tags and not isinstance(ip_tags, list):
            raise TypeError("Expected argument 'ip_tags' to be a list")
        pulumi.set(__self__, "ip_tags", ip_tags)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if public_ip_address_version and not isinstance(public_ip_address_version, str):
            raise TypeError("Expected argument 'public_ip_address_version' to be a str")
        pulumi.set(__self__, "public_ip_address_version", public_ip_address_version)
        if public_ip_allocation_method and not isinstance(public_ip_allocation_method, str):
            raise TypeError("Expected argument 'public_ip_allocation_method' to be a str")
        pulumi.set(__self__, "public_ip_allocation_method", public_ip_allocation_method)
        if public_ip_prefix and not isinstance(public_ip_prefix, dict):
            raise TypeError("Expected argument 'public_ip_prefix' to be a dict")
        pulumi.set(__self__, "public_ip_prefix", public_ip_prefix)
        if resource_guid and not isinstance(resource_guid, str):
            raise TypeError("Expected argument 'resource_guid' to be a str")
        pulumi.set(__self__, "resource_guid", resource_guid)
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        pulumi.set(__self__, "sku", sku)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if zones and not isinstance(zones, list):
            raise TypeError("Expected argument 'zones' to be a list")
        pulumi.set(__self__, "zones", zones)

    @property
    @pulumi.getter(name="ddosSettings")
    def ddos_settings(self) -> Optional['outputs.DdosSettingsResponse']:
        """
        The DDoS protection custom policy associated with the public IP address.
        """
        return pulumi.get(self, "ddos_settings")

    @property
    @pulumi.getter(name="dnsSettings")
    def dns_settings(self) -> Optional['outputs.PublicIPAddressDnsSettingsResponse']:
        """
        The FQDN of the DNS record associated with the public IP address.
        """
        return pulumi.get(self, "dns_settings")

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        A unique read-only string that changes whenever the resource is updated.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter(name="extendedLocation")
    def extended_location(self) -> Optional['outputs.ExtendedLocationResponse']:
        """
        The extended location of the public ip address.
        """
        return pulumi.get(self, "extended_location")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="idleTimeoutInMinutes")
    def idle_timeout_in_minutes(self) -> Optional[int]:
        """
        The idle timeout of the public IP address.
        """
        return pulumi.get(self, "idle_timeout_in_minutes")

    @property
    @pulumi.getter(name="ipAddress")
    def ip_address(self) -> Optional[str]:
        """
        The IP address associated with the public IP address resource.
        """
        return pulumi.get(self, "ip_address")

    @property
    @pulumi.getter(name="ipConfiguration")
    def ip_configuration(self) -> 'outputs.IPConfigurationResponse':
        """
        The IP configuration associated with the public IP address.
        """
        return pulumi.get(self, "ip_configuration")

    @property
    @pulumi.getter(name="ipTags")
    def ip_tags(self) -> Optional[Sequence['outputs.IpTagResponse']]:
        """
        The list of tags associated with the public IP address.
        """
        return pulumi.get(self, "ip_tags")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
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
        The provisioning state of the public IP address resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="publicIPAddressVersion")
    def public_ip_address_version(self) -> Optional[str]:
        """
        The public IP address version.
        """
        return pulumi.get(self, "public_ip_address_version")

    @property
    @pulumi.getter(name="publicIPAllocationMethod")
    def public_ip_allocation_method(self) -> Optional[str]:
        """
        The public IP address allocation method.
        """
        return pulumi.get(self, "public_ip_allocation_method")

    @property
    @pulumi.getter(name="publicIPPrefix")
    def public_ip_prefix(self) -> Optional['outputs.SubResourceResponse']:
        """
        The Public IP Prefix this Public IP Address should be allocated from.
        """
        return pulumi.get(self, "public_ip_prefix")

    @property
    @pulumi.getter(name="resourceGuid")
    def resource_guid(self) -> str:
        """
        The resource GUID property of the public IP address resource.
        """
        return pulumi.get(self, "resource_guid")

    @property
    @pulumi.getter
    def sku(self) -> Optional['outputs.PublicIPAddressSkuResponse']:
        """
        The public IP address SKU.
        """
        return pulumi.get(self, "sku")

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
    @pulumi.getter
    def zones(self) -> Optional[Sequence[str]]:
        """
        A list of availability zones denoting the IP allocated for the resource needs to come from.
        """
        return pulumi.get(self, "zones")


class AwaitableGetPublicIPAddressResult(GetPublicIPAddressResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetPublicIPAddressResult(
            ddos_settings=self.ddos_settings,
            dns_settings=self.dns_settings,
            etag=self.etag,
            extended_location=self.extended_location,
            id=self.id,
            idle_timeout_in_minutes=self.idle_timeout_in_minutes,
            ip_address=self.ip_address,
            ip_configuration=self.ip_configuration,
            ip_tags=self.ip_tags,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            public_ip_address_version=self.public_ip_address_version,
            public_ip_allocation_method=self.public_ip_allocation_method,
            public_ip_prefix=self.public_ip_prefix,
            resource_guid=self.resource_guid,
            sku=self.sku,
            tags=self.tags,
            type=self.type,
            zones=self.zones)


def get_public_ip_address(expand: Optional[str] = None,
                          public_ip_address_name: Optional[str] = None,
                          resource_group_name: Optional[str] = None,
                          opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetPublicIPAddressResult:
    """
    Use this data source to access information about an existing resource.

    :param str expand: Expands referenced resources.
    :param str public_ip_address_name: The name of the public IP address.
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['expand'] = expand
    __args__['publicIpAddressName'] = public_ip_address_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20200701:getPublicIPAddress', __args__, opts=opts, typ=GetPublicIPAddressResult).value

    return AwaitableGetPublicIPAddressResult(
        ddos_settings=__ret__.ddos_settings,
        dns_settings=__ret__.dns_settings,
        etag=__ret__.etag,
        extended_location=__ret__.extended_location,
        id=__ret__.id,
        idle_timeout_in_minutes=__ret__.idle_timeout_in_minutes,
        ip_address=__ret__.ip_address,
        ip_configuration=__ret__.ip_configuration,
        ip_tags=__ret__.ip_tags,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        public_ip_address_version=__ret__.public_ip_address_version,
        public_ip_allocation_method=__ret__.public_ip_allocation_method,
        public_ip_prefix=__ret__.public_ip_prefix,
        resource_guid=__ret__.resource_guid,
        sku=__ret__.sku,
        tags=__ret__.tags,
        type=__ret__.type,
        zones=__ret__.zones)
