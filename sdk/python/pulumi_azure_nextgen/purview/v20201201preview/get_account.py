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
    'GetAccountResult',
    'AwaitableGetAccountResult',
    'get_account',
]

@pulumi.output_type
class GetAccountResult:
    """
    Account resource
    """
    def __init__(__self__, cloud_connectors=None, created_at=None, created_by=None, created_by_object_id=None, endpoints=None, friendly_name=None, id=None, identity=None, location=None, managed_resources=None, name=None, network_acls=None, private_endpoint_connections=None, provisioning_state=None, sku=None, tags=None, type=None):
        if cloud_connectors and not isinstance(cloud_connectors, dict):
            raise TypeError("Expected argument 'cloud_connectors' to be a dict")
        pulumi.set(__self__, "cloud_connectors", cloud_connectors)
        if created_at and not isinstance(created_at, str):
            raise TypeError("Expected argument 'created_at' to be a str")
        pulumi.set(__self__, "created_at", created_at)
        if created_by and not isinstance(created_by, str):
            raise TypeError("Expected argument 'created_by' to be a str")
        pulumi.set(__self__, "created_by", created_by)
        if created_by_object_id and not isinstance(created_by_object_id, str):
            raise TypeError("Expected argument 'created_by_object_id' to be a str")
        pulumi.set(__self__, "created_by_object_id", created_by_object_id)
        if endpoints and not isinstance(endpoints, dict):
            raise TypeError("Expected argument 'endpoints' to be a dict")
        pulumi.set(__self__, "endpoints", endpoints)
        if friendly_name and not isinstance(friendly_name, str):
            raise TypeError("Expected argument 'friendly_name' to be a str")
        pulumi.set(__self__, "friendly_name", friendly_name)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if identity and not isinstance(identity, dict):
            raise TypeError("Expected argument 'identity' to be a dict")
        pulumi.set(__self__, "identity", identity)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if managed_resources and not isinstance(managed_resources, dict):
            raise TypeError("Expected argument 'managed_resources' to be a dict")
        pulumi.set(__self__, "managed_resources", managed_resources)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if network_acls and not isinstance(network_acls, dict):
            raise TypeError("Expected argument 'network_acls' to be a dict")
        pulumi.set(__self__, "network_acls", network_acls)
        if private_endpoint_connections and not isinstance(private_endpoint_connections, list):
            raise TypeError("Expected argument 'private_endpoint_connections' to be a list")
        pulumi.set(__self__, "private_endpoint_connections", private_endpoint_connections)
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

    @property
    @pulumi.getter(name="cloudConnectors")
    def cloud_connectors(self) -> Optional['outputs.CloudConnectorsResponse']:
        """
        Cloud connectors.
        External cloud identifier used as part of scanning configuration.
        """
        return pulumi.get(self, "cloud_connectors")

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> str:
        """
        Gets the time at which the entity was created.
        """
        return pulumi.get(self, "created_at")

    @property
    @pulumi.getter(name="createdBy")
    def created_by(self) -> str:
        """
        Gets the creator of the entity.
        """
        return pulumi.get(self, "created_by")

    @property
    @pulumi.getter(name="createdByObjectId")
    def created_by_object_id(self) -> str:
        """
        Gets the creators of the entity's object id.
        """
        return pulumi.get(self, "created_by_object_id")

    @property
    @pulumi.getter
    def endpoints(self) -> 'outputs.AccountPropertiesResponseEndpoints':
        """
        The URIs that are the public endpoints of the account.
        """
        return pulumi.get(self, "endpoints")

    @property
    @pulumi.getter(name="friendlyName")
    def friendly_name(self) -> str:
        """
        Gets or sets the friendly name.
        """
        return pulumi.get(self, "friendly_name")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Gets or sets the identifier.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def identity(self) -> Optional['outputs.IdentityResponse']:
        """
        Identity Info on the tracked resource
        """
        return pulumi.get(self, "identity")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        Gets or sets the location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="managedResources")
    def managed_resources(self) -> 'outputs.AccountPropertiesResponseManagedResources':
        """
        Gets the resource identifiers of the managed resources.
        """
        return pulumi.get(self, "managed_resources")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Gets or sets the name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="networkAcls")
    def network_acls(self) -> Optional['outputs.NetworkAclsResponse']:
        """
        Get the network ACLs.
        """
        return pulumi.get(self, "network_acls")

    @property
    @pulumi.getter(name="privateEndpointConnections")
    def private_endpoint_connections(self) -> Sequence['outputs.PrivateEndpointConnectionResponse']:
        """
        Gets the private endpoint connections information.
        """
        return pulumi.get(self, "private_endpoint_connections")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Gets or sets the state of the provisioning.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def sku(self) -> Optional['outputs.AccountSkuResponse']:
        """
        Gets or sets the Sku.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        Tags on the azure resource.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Gets or sets the type.
        """
        return pulumi.get(self, "type")


class AwaitableGetAccountResult(GetAccountResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetAccountResult(
            cloud_connectors=self.cloud_connectors,
            created_at=self.created_at,
            created_by=self.created_by,
            created_by_object_id=self.created_by_object_id,
            endpoints=self.endpoints,
            friendly_name=self.friendly_name,
            id=self.id,
            identity=self.identity,
            location=self.location,
            managed_resources=self.managed_resources,
            name=self.name,
            network_acls=self.network_acls,
            private_endpoint_connections=self.private_endpoint_connections,
            provisioning_state=self.provisioning_state,
            sku=self.sku,
            tags=self.tags,
            type=self.type)


def get_account(account_name: Optional[str] = None,
                resource_group_name: Optional[str] = None,
                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetAccountResult:
    """
    Use this data source to access information about an existing resource.

    :param str account_name: The name of the account.
    :param str resource_group_name: The resource group name.
    """
    __args__ = dict()
    __args__['accountName'] = account_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:purview/v20201201preview:getAccount', __args__, opts=opts, typ=GetAccountResult).value

    return AwaitableGetAccountResult(
        cloud_connectors=__ret__.cloud_connectors,
        created_at=__ret__.created_at,
        created_by=__ret__.created_by,
        created_by_object_id=__ret__.created_by_object_id,
        endpoints=__ret__.endpoints,
        friendly_name=__ret__.friendly_name,
        id=__ret__.id,
        identity=__ret__.identity,
        location=__ret__.location,
        managed_resources=__ret__.managed_resources,
        name=__ret__.name,
        network_acls=__ret__.network_acls,
        private_endpoint_connections=__ret__.private_endpoint_connections,
        provisioning_state=__ret__.provisioning_state,
        sku=__ret__.sku,
        tags=__ret__.tags,
        type=__ret__.type)
