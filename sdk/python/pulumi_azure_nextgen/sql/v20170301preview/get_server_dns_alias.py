# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetServerDnsAliasResult',
    'AwaitableGetServerDnsAliasResult',
    'get_server_dns_alias',
]

@pulumi.output_type
class GetServerDnsAliasResult:
    """
    A server DNS alias.
    """
    def __init__(__self__, azure_dns_record=None, id=None, name=None, type=None):
        if azure_dns_record and not isinstance(azure_dns_record, str):
            raise TypeError("Expected argument 'azure_dns_record' to be a str")
        pulumi.set(__self__, "azure_dns_record", azure_dns_record)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="azureDnsRecord")
    def azure_dns_record(self) -> str:
        """
        The fully qualified DNS record for alias
        """
        return pulumi.get(self, "azure_dns_record")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetServerDnsAliasResult(GetServerDnsAliasResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetServerDnsAliasResult(
            azure_dns_record=self.azure_dns_record,
            id=self.id,
            name=self.name,
            type=self.type)


def get_server_dns_alias(dns_alias_name: Optional[str] = None,
                         resource_group_name: Optional[str] = None,
                         server_name: Optional[str] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetServerDnsAliasResult:
    """
    Use this data source to access information about an existing resource.

    :param str dns_alias_name: The name of the server DNS alias.
    :param str resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    :param str server_name: The name of the server that the alias is pointing to.
    """
    __args__ = dict()
    __args__['dnsAliasName'] = dns_alias_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['serverName'] = server_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:sql/v20170301preview:getServerDnsAlias', __args__, opts=opts, typ=GetServerDnsAliasResult).value

    return AwaitableGetServerDnsAliasResult(
        azure_dns_record=__ret__.azure_dns_record,
        id=__ret__.id,
        name=__ret__.name,
        type=__ret__.type)
