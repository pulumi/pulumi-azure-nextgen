# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs
from ._enums import *

__all__ = [
    'NetworkProfileResponse',
    'OpenShiftManagedClusterAADIdentityProviderResponse',
    'OpenShiftManagedClusterAgentPoolProfileResponse',
    'OpenShiftManagedClusterAuthProfileResponse',
    'OpenShiftManagedClusterIdentityProviderResponse',
    'OpenShiftManagedClusterMasterPoolProfileResponse',
    'OpenShiftRouterProfileResponse',
    'PurchasePlanResponse',
]

@pulumi.output_type
class NetworkProfileResponse(dict):
    """
    Represents the OpenShift networking configuration
    """
    def __init__(__self__, *,
                 peer_vnet_id: Optional[str] = None,
                 vnet_cidr: Optional[str] = None):
        """
        Represents the OpenShift networking configuration
        :param str peer_vnet_id: CIDR of the Vnet to peer.
        :param str vnet_cidr: CIDR for the OpenShift Vnet.
        """
        if peer_vnet_id is not None:
            pulumi.set(__self__, "peer_vnet_id", peer_vnet_id)
        if vnet_cidr is not None:
            pulumi.set(__self__, "vnet_cidr", vnet_cidr)

    @property
    @pulumi.getter(name="peerVnetId")
    def peer_vnet_id(self) -> Optional[str]:
        """
        CIDR of the Vnet to peer.
        """
        return pulumi.get(self, "peer_vnet_id")

    @property
    @pulumi.getter(name="vnetCidr")
    def vnet_cidr(self) -> Optional[str]:
        """
        CIDR for the OpenShift Vnet.
        """
        return pulumi.get(self, "vnet_cidr")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OpenShiftManagedClusterAADIdentityProviderResponse(dict):
    """
    Defines the Identity provider for MS AAD.
    """
    def __init__(__self__, *,
                 kind: str,
                 client_id: Optional[str] = None,
                 customer_admin_group_id: Optional[str] = None,
                 secret: Optional[str] = None,
                 tenant_id: Optional[str] = None):
        """
        Defines the Identity provider for MS AAD.
        :param str kind: The kind of the provider.
               Expected value is 'AADIdentityProvider'.
        :param str client_id: The clientId password associated with the provider.
        :param str customer_admin_group_id: The groupId to be granted cluster admin role.
        :param str secret: The secret password associated with the provider.
        :param str tenant_id: The tenantId associated with the provider.
        """
        pulumi.set(__self__, "kind", 'AADIdentityProvider')
        if client_id is not None:
            pulumi.set(__self__, "client_id", client_id)
        if customer_admin_group_id is not None:
            pulumi.set(__self__, "customer_admin_group_id", customer_admin_group_id)
        if secret is not None:
            pulumi.set(__self__, "secret", secret)
        if tenant_id is not None:
            pulumi.set(__self__, "tenant_id", tenant_id)

    @property
    @pulumi.getter
    def kind(self) -> str:
        """
        The kind of the provider.
        Expected value is 'AADIdentityProvider'.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> Optional[str]:
        """
        The clientId password associated with the provider.
        """
        return pulumi.get(self, "client_id")

    @property
    @pulumi.getter(name="customerAdminGroupId")
    def customer_admin_group_id(self) -> Optional[str]:
        """
        The groupId to be granted cluster admin role.
        """
        return pulumi.get(self, "customer_admin_group_id")

    @property
    @pulumi.getter
    def secret(self) -> Optional[str]:
        """
        The secret password associated with the provider.
        """
        return pulumi.get(self, "secret")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> Optional[str]:
        """
        The tenantId associated with the provider.
        """
        return pulumi.get(self, "tenant_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OpenShiftManagedClusterAgentPoolProfileResponse(dict):
    """
    Defines the configuration of the OpenShift cluster VMs.
    """
    def __init__(__self__, *,
                 count: int,
                 name: str,
                 vm_size: str,
                 os_type: Optional[str] = None,
                 role: Optional[str] = None,
                 subnet_cidr: Optional[str] = None):
        """
        Defines the configuration of the OpenShift cluster VMs.
        :param int count: Number of agents (VMs) to host docker containers.
        :param str name: Unique name of the pool profile in the context of the subscription and resource group.
        :param str vm_size: Size of agent VMs.
        :param str os_type: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        :param str role: Define the role of the AgentPoolProfile.
        :param str subnet_cidr: Subnet CIDR for the peering.
        """
        pulumi.set(__self__, "count", count)
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "vm_size", vm_size)
        if os_type is not None:
            pulumi.set(__self__, "os_type", os_type)
        if role is not None:
            pulumi.set(__self__, "role", role)
        if subnet_cidr is not None:
            pulumi.set(__self__, "subnet_cidr", subnet_cidr)

    @property
    @pulumi.getter
    def count(self) -> int:
        """
        Number of agents (VMs) to host docker containers.
        """
        return pulumi.get(self, "count")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Unique name of the pool profile in the context of the subscription and resource group.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="vmSize")
    def vm_size(self) -> str:
        """
        Size of agent VMs.
        """
        return pulumi.get(self, "vm_size")

    @property
    @pulumi.getter(name="osType")
    def os_type(self) -> Optional[str]:
        """
        OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        """
        return pulumi.get(self, "os_type")

    @property
    @pulumi.getter
    def role(self) -> Optional[str]:
        """
        Define the role of the AgentPoolProfile.
        """
        return pulumi.get(self, "role")

    @property
    @pulumi.getter(name="subnetCidr")
    def subnet_cidr(self) -> Optional[str]:
        """
        Subnet CIDR for the peering.
        """
        return pulumi.get(self, "subnet_cidr")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OpenShiftManagedClusterAuthProfileResponse(dict):
    """
    Defines all possible authentication profiles for the OpenShift cluster.
    """
    def __init__(__self__, *,
                 identity_providers: Optional[Sequence['outputs.OpenShiftManagedClusterIdentityProviderResponse']] = None):
        """
        Defines all possible authentication profiles for the OpenShift cluster.
        :param Sequence['OpenShiftManagedClusterIdentityProviderResponseArgs'] identity_providers: Type of authentication profile to use.
        """
        if identity_providers is not None:
            pulumi.set(__self__, "identity_providers", identity_providers)

    @property
    @pulumi.getter(name="identityProviders")
    def identity_providers(self) -> Optional[Sequence['outputs.OpenShiftManagedClusterIdentityProviderResponse']]:
        """
        Type of authentication profile to use.
        """
        return pulumi.get(self, "identity_providers")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OpenShiftManagedClusterIdentityProviderResponse(dict):
    """
    Defines the configuration of the identity providers to be used in the OpenShift cluster.
    """
    def __init__(__self__, *,
                 name: Optional[str] = None,
                 provider: Optional['outputs.OpenShiftManagedClusterAADIdentityProviderResponse'] = None):
        """
        Defines the configuration of the identity providers to be used in the OpenShift cluster.
        :param str name: Name of the provider.
        :param 'OpenShiftManagedClusterAADIdentityProviderResponseArgs' provider: Configuration of the provider.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)
        if provider is not None:
            pulumi.set(__self__, "provider", provider)

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Name of the provider.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def provider(self) -> Optional['outputs.OpenShiftManagedClusterAADIdentityProviderResponse']:
        """
        Configuration of the provider.
        """
        return pulumi.get(self, "provider")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OpenShiftManagedClusterMasterPoolProfileResponse(dict):
    """
    OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
    """
    def __init__(__self__, *,
                 count: int,
                 vm_size: str,
                 name: Optional[str] = None,
                 os_type: Optional[str] = None,
                 subnet_cidr: Optional[str] = None):
        """
        OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
        :param int count: Number of masters (VMs) to host docker containers. The default value is 3.
        :param str vm_size: Size of agent VMs.
        :param str name: Unique name of the master pool profile in the context of the subscription and resource group.
        :param str os_type: OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        :param str subnet_cidr: Subnet CIDR for the peering.
        """
        pulumi.set(__self__, "count", count)
        pulumi.set(__self__, "vm_size", vm_size)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if os_type is not None:
            pulumi.set(__self__, "os_type", os_type)
        if subnet_cidr is not None:
            pulumi.set(__self__, "subnet_cidr", subnet_cidr)

    @property
    @pulumi.getter
    def count(self) -> int:
        """
        Number of masters (VMs) to host docker containers. The default value is 3.
        """
        return pulumi.get(self, "count")

    @property
    @pulumi.getter(name="vmSize")
    def vm_size(self) -> str:
        """
        Size of agent VMs.
        """
        return pulumi.get(self, "vm_size")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Unique name of the master pool profile in the context of the subscription and resource group.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="osType")
    def os_type(self) -> Optional[str]:
        """
        OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        """
        return pulumi.get(self, "os_type")

    @property
    @pulumi.getter(name="subnetCidr")
    def subnet_cidr(self) -> Optional[str]:
        """
        Subnet CIDR for the peering.
        """
        return pulumi.get(self, "subnet_cidr")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OpenShiftRouterProfileResponse(dict):
    """
    Represents an OpenShift router
    """
    def __init__(__self__, *,
                 fqdn: str,
                 name: Optional[str] = None,
                 public_subdomain: Optional[str] = None):
        """
        Represents an OpenShift router
        :param str fqdn: Auto-allocated FQDN for the OpenShift router.
        :param str name: Name of the router profile.
        :param str public_subdomain: DNS subdomain for OpenShift router.
        """
        pulumi.set(__self__, "fqdn", fqdn)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if public_subdomain is not None:
            pulumi.set(__self__, "public_subdomain", public_subdomain)

    @property
    @pulumi.getter
    def fqdn(self) -> str:
        """
        Auto-allocated FQDN for the OpenShift router.
        """
        return pulumi.get(self, "fqdn")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Name of the router profile.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="publicSubdomain")
    def public_subdomain(self) -> Optional[str]:
        """
        DNS subdomain for OpenShift router.
        """
        return pulumi.get(self, "public_subdomain")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PurchasePlanResponse(dict):
    """
    Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
    """
    def __init__(__self__, *,
                 name: Optional[str] = None,
                 product: Optional[str] = None,
                 promotion_code: Optional[str] = None,
                 publisher: Optional[str] = None):
        """
        Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
        :param str name: The plan ID.
        :param str product: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
        :param str promotion_code: The promotion code.
        :param str publisher: The plan ID.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)
        if product is not None:
            pulumi.set(__self__, "product", product)
        if promotion_code is not None:
            pulumi.set(__self__, "promotion_code", promotion_code)
        if publisher is not None:
            pulumi.set(__self__, "publisher", publisher)

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The plan ID.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def product(self) -> Optional[str]:
        """
        Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
        """
        return pulumi.get(self, "product")

    @property
    @pulumi.getter(name="promotionCode")
    def promotion_code(self) -> Optional[str]:
        """
        The promotion code.
        """
        return pulumi.get(self, "promotion_code")

    @property
    @pulumi.getter
    def publisher(self) -> Optional[str]:
        """
        The plan ID.
        """
        return pulumi.get(self, "publisher")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


