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
    'GetVirtualApplianceSiteResult',
    'AwaitableGetVirtualApplianceSiteResult',
    'get_virtual_appliance_site',
]

@pulumi.output_type
class GetVirtualApplianceSiteResult:
    """
    Virtual Appliance Site resource.
    """
    def __init__(__self__, address_prefix=None, etag=None, id=None, name=None, o365_policy=None, provisioning_state=None, type=None):
        if address_prefix and not isinstance(address_prefix, str):
            raise TypeError("Expected argument 'address_prefix' to be a str")
        pulumi.set(__self__, "address_prefix", address_prefix)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if o365_policy and not isinstance(o365_policy, dict):
            raise TypeError("Expected argument 'o365_policy' to be a dict")
        pulumi.set(__self__, "o365_policy", o365_policy)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="addressPrefix")
    def address_prefix(self) -> Optional[str]:
        """
        Address Prefix.
        """
        return pulumi.get(self, "address_prefix")

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        A unique read-only string that changes whenever the resource is updated.
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
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Name of the virtual appliance site.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="o365Policy")
    def o365_policy(self) -> Optional['outputs.Office365PolicyPropertiesResponse']:
        """
        Office 365 Policy.
        """
        return pulumi.get(self, "o365_policy")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state of the resource.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Site type.
        """
        return pulumi.get(self, "type")


class AwaitableGetVirtualApplianceSiteResult(GetVirtualApplianceSiteResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVirtualApplianceSiteResult(
            address_prefix=self.address_prefix,
            etag=self.etag,
            id=self.id,
            name=self.name,
            o365_policy=self.o365_policy,
            provisioning_state=self.provisioning_state,
            type=self.type)


def get_virtual_appliance_site(network_virtual_appliance_name: Optional[str] = None,
                               resource_group_name: Optional[str] = None,
                               site_name: Optional[str] = None,
                               opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVirtualApplianceSiteResult:
    """
    Use this data source to access information about an existing resource.

    :param str network_virtual_appliance_name: The name of the Network Virtual Appliance.
    :param str resource_group_name: The name of the resource group.
    :param str site_name: The name of the site.
    """
    __args__ = dict()
    __args__['networkVirtualApplianceName'] = network_virtual_appliance_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['siteName'] = site_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20200601:getVirtualApplianceSite', __args__, opts=opts, typ=GetVirtualApplianceSiteResult).value

    return AwaitableGetVirtualApplianceSiteResult(
        address_prefix=__ret__.address_prefix,
        etag=__ret__.etag,
        id=__ret__.id,
        name=__ret__.name,
        o365_policy=__ret__.o365_policy,
        provisioning_state=__ret__.provisioning_state,
        type=__ret__.type)
