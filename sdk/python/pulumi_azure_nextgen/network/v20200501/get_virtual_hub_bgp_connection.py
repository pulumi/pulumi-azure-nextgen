# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetVirtualHubBgpConnectionResult',
    'AwaitableGetVirtualHubBgpConnectionResult',
    'get_virtual_hub_bgp_connection',
]

@pulumi.output_type
class GetVirtualHubBgpConnectionResult:
    """
    Virtual Appliance Site resource.
    """
    def __init__(__self__, connection_state=None, etag=None, id=None, name=None, peer_asn=None, peer_ip=None, provisioning_state=None, type=None):
        if connection_state and not isinstance(connection_state, str):
            raise TypeError("Expected argument 'connection_state' to be a str")
        pulumi.set(__self__, "connection_state", connection_state)
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if peer_asn and not isinstance(peer_asn, int):
            raise TypeError("Expected argument 'peer_asn' to be a int")
        pulumi.set(__self__, "peer_asn", peer_asn)
        if peer_ip and not isinstance(peer_ip, str):
            raise TypeError("Expected argument 'peer_ip' to be a str")
        pulumi.set(__self__, "peer_ip", peer_ip)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="connectionState")
    def connection_state(self) -> str:
        """
        The current state of the VirtualHub to Peer.
        """
        return pulumi.get(self, "connection_state")

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
        Name of the connection.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="peerAsn")
    def peer_asn(self) -> Optional[int]:
        """
        Peer ASN.
        """
        return pulumi.get(self, "peer_asn")

    @property
    @pulumi.getter(name="peerIp")
    def peer_ip(self) -> Optional[str]:
        """
        Peer IP.
        """
        return pulumi.get(self, "peer_ip")

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
        Connection type.
        """
        return pulumi.get(self, "type")


class AwaitableGetVirtualHubBgpConnectionResult(GetVirtualHubBgpConnectionResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVirtualHubBgpConnectionResult(
            connection_state=self.connection_state,
            etag=self.etag,
            id=self.id,
            name=self.name,
            peer_asn=self.peer_asn,
            peer_ip=self.peer_ip,
            provisioning_state=self.provisioning_state,
            type=self.type)


def get_virtual_hub_bgp_connection(connection_name: Optional[str] = None,
                                   resource_group_name: Optional[str] = None,
                                   virtual_hub_name: Optional[str] = None,
                                   opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVirtualHubBgpConnectionResult:
    """
    Use this data source to access information about an existing resource.

    :param str connection_name: The name of the connection.
    :param str resource_group_name: The resource group name of the VirtualHub.
    :param str virtual_hub_name: The name of the VirtualHub.
    """
    __args__ = dict()
    __args__['connectionName'] = connection_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['virtualHubName'] = virtual_hub_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20200501:getVirtualHubBgpConnection', __args__, opts=opts, typ=GetVirtualHubBgpConnectionResult).value

    return AwaitableGetVirtualHubBgpConnectionResult(
        connection_state=__ret__.connection_state,
        etag=__ret__.etag,
        id=__ret__.id,
        name=__ret__.name,
        peer_asn=__ret__.peer_asn,
        peer_ip=__ret__.peer_ip,
        provisioning_state=__ret__.provisioning_state,
        type=__ret__.type)
