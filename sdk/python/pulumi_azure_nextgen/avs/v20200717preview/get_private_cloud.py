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
    'GetPrivateCloudResult',
    'AwaitableGetPrivateCloudResult',
    'get_private_cloud',
]

@pulumi.output_type
class GetPrivateCloudResult:
    """
    A private cloud resource
    """
    def __init__(__self__, circuit=None, endpoints=None, id=None, identity_sources=None, internet=None, location=None, management_cluster=None, management_network=None, name=None, network_block=None, nsxt_certificate_thumbprint=None, nsxt_password=None, provisioning_network=None, provisioning_state=None, sku=None, tags=None, type=None, vcenter_certificate_thumbprint=None, vcenter_password=None, vmotion_network=None):
        if circuit and not isinstance(circuit, dict):
            raise TypeError("Expected argument 'circuit' to be a dict")
        pulumi.set(__self__, "circuit", circuit)
        if endpoints and not isinstance(endpoints, dict):
            raise TypeError("Expected argument 'endpoints' to be a dict")
        pulumi.set(__self__, "endpoints", endpoints)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if identity_sources and not isinstance(identity_sources, list):
            raise TypeError("Expected argument 'identity_sources' to be a list")
        pulumi.set(__self__, "identity_sources", identity_sources)
        if internet and not isinstance(internet, str):
            raise TypeError("Expected argument 'internet' to be a str")
        pulumi.set(__self__, "internet", internet)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if management_cluster and not isinstance(management_cluster, dict):
            raise TypeError("Expected argument 'management_cluster' to be a dict")
        pulumi.set(__self__, "management_cluster", management_cluster)
        if management_network and not isinstance(management_network, str):
            raise TypeError("Expected argument 'management_network' to be a str")
        pulumi.set(__self__, "management_network", management_network)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if network_block and not isinstance(network_block, str):
            raise TypeError("Expected argument 'network_block' to be a str")
        pulumi.set(__self__, "network_block", network_block)
        if nsxt_certificate_thumbprint and not isinstance(nsxt_certificate_thumbprint, str):
            raise TypeError("Expected argument 'nsxt_certificate_thumbprint' to be a str")
        pulumi.set(__self__, "nsxt_certificate_thumbprint", nsxt_certificate_thumbprint)
        if nsxt_password and not isinstance(nsxt_password, str):
            raise TypeError("Expected argument 'nsxt_password' to be a str")
        pulumi.set(__self__, "nsxt_password", nsxt_password)
        if provisioning_network and not isinstance(provisioning_network, str):
            raise TypeError("Expected argument 'provisioning_network' to be a str")
        pulumi.set(__self__, "provisioning_network", provisioning_network)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        pulumi.set(__self__, "sku", sku)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if vcenter_certificate_thumbprint and not isinstance(vcenter_certificate_thumbprint, str):
            raise TypeError("Expected argument 'vcenter_certificate_thumbprint' to be a str")
        pulumi.set(__self__, "vcenter_certificate_thumbprint", vcenter_certificate_thumbprint)
        if vcenter_password and not isinstance(vcenter_password, str):
            raise TypeError("Expected argument 'vcenter_password' to be a str")
        pulumi.set(__self__, "vcenter_password", vcenter_password)
        if vmotion_network and not isinstance(vmotion_network, str):
            raise TypeError("Expected argument 'vmotion_network' to be a str")
        pulumi.set(__self__, "vmotion_network", vmotion_network)

    @property
    @pulumi.getter
    def circuit(self) -> Optional['outputs.CircuitResponse']:
        """
        An ExpressRoute Circuit
        """
        return pulumi.get(self, "circuit")

    @property
    @pulumi.getter
    def endpoints(self) -> 'outputs.EndpointsResponse':
        """
        The endpoints
        """
        return pulumi.get(self, "endpoints")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="identitySources")
    def identity_sources(self) -> Optional[Sequence['outputs.IdentitySourceResponse']]:
        """
        vCenter Single Sign On Identity Sources
        """
        return pulumi.get(self, "identity_sources")

    @property
    @pulumi.getter
    def internet(self) -> Optional[str]:
        """
        Connectivity to internet is enabled or disabled
        """
        return pulumi.get(self, "internet")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="managementCluster")
    def management_cluster(self) -> 'outputs.ManagementClusterResponse':
        """
        The default cluster used for management
        """
        return pulumi.get(self, "management_cluster")

    @property
    @pulumi.getter(name="managementNetwork")
    def management_network(self) -> str:
        """
        Network used to access vCenter Server and NSX-T Manager
        """
        return pulumi.get(self, "management_network")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="networkBlock")
    def network_block(self) -> str:
        """
        The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
        """
        return pulumi.get(self, "network_block")

    @property
    @pulumi.getter(name="nsxtCertificateThumbprint")
    def nsxt_certificate_thumbprint(self) -> str:
        """
        Thumbprint of the NSX-T Manager SSL certificate
        """
        return pulumi.get(self, "nsxt_certificate_thumbprint")

    @property
    @pulumi.getter(name="nsxtPassword")
    def nsxt_password(self) -> Optional[str]:
        """
        Indicate to rotate the NSX-T Manager password for the private cloud
        """
        return pulumi.get(self, "nsxt_password")

    @property
    @pulumi.getter(name="provisioningNetwork")
    def provisioning_network(self) -> str:
        """
        Used for virtual machine cold migration, cloning, and snapshot migration
        """
        return pulumi.get(self, "provisioning_network")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The provisioning state
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def sku(self) -> 'outputs.SkuResponse':
        """
        The private cloud SKU
        """
        return pulumi.get(self, "sku")

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
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="vcenterCertificateThumbprint")
    def vcenter_certificate_thumbprint(self) -> str:
        """
        Thumbprint of the vCenter Server SSL certificate
        """
        return pulumi.get(self, "vcenter_certificate_thumbprint")

    @property
    @pulumi.getter(name="vcenterPassword")
    def vcenter_password(self) -> Optional[str]:
        """
        Indicate to rotate the vCenter admin password for the private cloud
        """
        return pulumi.get(self, "vcenter_password")

    @property
    @pulumi.getter(name="vmotionNetwork")
    def vmotion_network(self) -> str:
        """
        Used for live migration of virtual machines
        """
        return pulumi.get(self, "vmotion_network")


class AwaitableGetPrivateCloudResult(GetPrivateCloudResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetPrivateCloudResult(
            circuit=self.circuit,
            endpoints=self.endpoints,
            id=self.id,
            identity_sources=self.identity_sources,
            internet=self.internet,
            location=self.location,
            management_cluster=self.management_cluster,
            management_network=self.management_network,
            name=self.name,
            network_block=self.network_block,
            nsxt_certificate_thumbprint=self.nsxt_certificate_thumbprint,
            nsxt_password=self.nsxt_password,
            provisioning_network=self.provisioning_network,
            provisioning_state=self.provisioning_state,
            sku=self.sku,
            tags=self.tags,
            type=self.type,
            vcenter_certificate_thumbprint=self.vcenter_certificate_thumbprint,
            vcenter_password=self.vcenter_password,
            vmotion_network=self.vmotion_network)


def get_private_cloud(private_cloud_name: Optional[str] = None,
                      resource_group_name: Optional[str] = None,
                      opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetPrivateCloudResult:
    """
    Use this data source to access information about an existing resource.

    :param str private_cloud_name: Name of the private cloud
    :param str resource_group_name: The name of the resource group. The name is case insensitive.
    """
    __args__ = dict()
    __args__['privateCloudName'] = private_cloud_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:avs/v20200717preview:getPrivateCloud', __args__, opts=opts, typ=GetPrivateCloudResult).value

    return AwaitableGetPrivateCloudResult(
        circuit=__ret__.circuit,
        endpoints=__ret__.endpoints,
        id=__ret__.id,
        identity_sources=__ret__.identity_sources,
        internet=__ret__.internet,
        location=__ret__.location,
        management_cluster=__ret__.management_cluster,
        management_network=__ret__.management_network,
        name=__ret__.name,
        network_block=__ret__.network_block,
        nsxt_certificate_thumbprint=__ret__.nsxt_certificate_thumbprint,
        nsxt_password=__ret__.nsxt_password,
        provisioning_network=__ret__.provisioning_network,
        provisioning_state=__ret__.provisioning_state,
        sku=__ret__.sku,
        tags=__ret__.tags,
        type=__ret__.type,
        vcenter_certificate_thumbprint=__ret__.vcenter_certificate_thumbprint,
        vcenter_password=__ret__.vcenter_password,
        vmotion_network=__ret__.vmotion_network)
