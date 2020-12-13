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
    'GetFailoverGroupResult',
    'AwaitableGetFailoverGroupResult',
    'get_failover_group',
]

@pulumi.output_type
class GetFailoverGroupResult:
    """
    A failover group.
    """
    def __init__(__self__, databases=None, id=None, location=None, name=None, partner_servers=None, read_only_endpoint=None, read_write_endpoint=None, replication_role=None, replication_state=None, tags=None, type=None):
        if databases and not isinstance(databases, list):
            raise TypeError("Expected argument 'databases' to be a list")
        pulumi.set(__self__, "databases", databases)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if partner_servers and not isinstance(partner_servers, list):
            raise TypeError("Expected argument 'partner_servers' to be a list")
        pulumi.set(__self__, "partner_servers", partner_servers)
        if read_only_endpoint and not isinstance(read_only_endpoint, dict):
            raise TypeError("Expected argument 'read_only_endpoint' to be a dict")
        pulumi.set(__self__, "read_only_endpoint", read_only_endpoint)
        if read_write_endpoint and not isinstance(read_write_endpoint, dict):
            raise TypeError("Expected argument 'read_write_endpoint' to be a dict")
        pulumi.set(__self__, "read_write_endpoint", read_write_endpoint)
        if replication_role and not isinstance(replication_role, str):
            raise TypeError("Expected argument 'replication_role' to be a str")
        pulumi.set(__self__, "replication_role", replication_role)
        if replication_state and not isinstance(replication_state, str):
            raise TypeError("Expected argument 'replication_state' to be a str")
        pulumi.set(__self__, "replication_state", replication_state)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def databases(self) -> Optional[Sequence[str]]:
        """
        List of databases in the failover group.
        """
        return pulumi.get(self, "databases")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

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
    @pulumi.getter(name="partnerServers")
    def partner_servers(self) -> Sequence['outputs.PartnerInfoResponse']:
        """
        List of partner server information for the failover group.
        """
        return pulumi.get(self, "partner_servers")

    @property
    @pulumi.getter(name="readOnlyEndpoint")
    def read_only_endpoint(self) -> Optional['outputs.FailoverGroupReadOnlyEndpointResponse']:
        """
        Read-only endpoint of the failover group instance.
        """
        return pulumi.get(self, "read_only_endpoint")

    @property
    @pulumi.getter(name="readWriteEndpoint")
    def read_write_endpoint(self) -> 'outputs.FailoverGroupReadWriteEndpointResponse':
        """
        Read-write endpoint of the failover group instance.
        """
        return pulumi.get(self, "read_write_endpoint")

    @property
    @pulumi.getter(name="replicationRole")
    def replication_role(self) -> str:
        """
        Local replication role of the failover group instance.
        """
        return pulumi.get(self, "replication_role")

    @property
    @pulumi.getter(name="replicationState")
    def replication_state(self) -> str:
        """
        Replication state of the failover group instance.
        """
        return pulumi.get(self, "replication_state")

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


class AwaitableGetFailoverGroupResult(GetFailoverGroupResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetFailoverGroupResult(
            databases=self.databases,
            id=self.id,
            location=self.location,
            name=self.name,
            partner_servers=self.partner_servers,
            read_only_endpoint=self.read_only_endpoint,
            read_write_endpoint=self.read_write_endpoint,
            replication_role=self.replication_role,
            replication_state=self.replication_state,
            tags=self.tags,
            type=self.type)


def get_failover_group(failover_group_name: Optional[str] = None,
                       resource_group_name: Optional[str] = None,
                       server_name: Optional[str] = None,
                       opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetFailoverGroupResult:
    """
    Use this data source to access information about an existing resource.

    :param str failover_group_name: The name of the failover group.
    :param str resource_group_name: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    :param str server_name: The name of the server containing the failover group.
    """
    __args__ = dict()
    __args__['failoverGroupName'] = failover_group_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['serverName'] = server_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:sql/v20150501preview:getFailoverGroup', __args__, opts=opts, typ=GetFailoverGroupResult).value

    return AwaitableGetFailoverGroupResult(
        databases=__ret__.databases,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        partner_servers=__ret__.partner_servers,
        read_only_endpoint=__ret__.read_only_endpoint,
        read_write_endpoint=__ret__.read_write_endpoint,
        replication_role=__ret__.replication_role,
        replication_state=__ret__.replication_state,
        tags=__ret__.tags,
        type=__ret__.type)
