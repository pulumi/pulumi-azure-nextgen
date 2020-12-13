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
    'GetNamespaceResult',
    'AwaitableGetNamespaceResult',
    'get_namespace',
]

@pulumi.output_type
class GetNamespaceResult:
    """
    Description of a namespace resource.
    """
    def __init__(__self__, create_acs_namespace=None, created_at=None, enabled=None, id=None, location=None, name=None, provisioning_state=None, service_bus_endpoint=None, sku=None, status=None, tags=None, type=None, updated_at=None):
        if create_acs_namespace and not isinstance(create_acs_namespace, bool):
            raise TypeError("Expected argument 'create_acs_namespace' to be a bool")
        pulumi.set(__self__, "create_acs_namespace", create_acs_namespace)
        if created_at and not isinstance(created_at, str):
            raise TypeError("Expected argument 'created_at' to be a str")
        pulumi.set(__self__, "created_at", created_at)
        if enabled and not isinstance(enabled, bool):
            raise TypeError("Expected argument 'enabled' to be a bool")
        pulumi.set(__self__, "enabled", enabled)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if service_bus_endpoint and not isinstance(service_bus_endpoint, str):
            raise TypeError("Expected argument 'service_bus_endpoint' to be a str")
        pulumi.set(__self__, "service_bus_endpoint", service_bus_endpoint)
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        pulumi.set(__self__, "sku", sku)
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        pulumi.set(__self__, "status", status)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if updated_at and not isinstance(updated_at, str):
            raise TypeError("Expected argument 'updated_at' to be a str")
        pulumi.set(__self__, "updated_at", updated_at)

    @property
    @pulumi.getter(name="createACSNamespace")
    def create_acs_namespace(self) -> Optional[bool]:
        """
        Indicates whether to create an ACS namespace.
        """
        return pulumi.get(self, "create_acs_namespace")

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> str:
        """
        The time the namespace was created.
        """
        return pulumi.get(self, "created_at")

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        """
        Specifies whether this instance is enabled.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id
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
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning state of the namespace.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="serviceBusEndpoint")
    def service_bus_endpoint(self) -> str:
        """
        Endpoint you can use to perform Service Bus operations.
        """
        return pulumi.get(self, "service_bus_endpoint")

    @property
    @pulumi.getter
    def sku(self) -> Optional['outputs.SkuResponse']:
        """
        SKU of the namespace.
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        State of the namespace.
        """
        return pulumi.get(self, "status")

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

    @property
    @pulumi.getter(name="updatedAt")
    def updated_at(self) -> str:
        """
        The time the namespace was updated.
        """
        return pulumi.get(self, "updated_at")


class AwaitableGetNamespaceResult(GetNamespaceResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetNamespaceResult(
            create_acs_namespace=self.create_acs_namespace,
            created_at=self.created_at,
            enabled=self.enabled,
            id=self.id,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            service_bus_endpoint=self.service_bus_endpoint,
            sku=self.sku,
            status=self.status,
            tags=self.tags,
            type=self.type,
            updated_at=self.updated_at)


def get_namespace(namespace_name: Optional[str] = None,
                  resource_group_name: Optional[str] = None,
                  opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetNamespaceResult:
    """
    Use this data source to access information about an existing resource.

    :param str namespace_name: The namespace name
    :param str resource_group_name: Name of the Resource group within the Azure subscription.
    """
    __args__ = dict()
    __args__['namespaceName'] = namespace_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:servicebus/v20150801:getNamespace', __args__, opts=opts, typ=GetNamespaceResult).value

    return AwaitableGetNamespaceResult(
        create_acs_namespace=__ret__.create_acs_namespace,
        created_at=__ret__.created_at,
        enabled=__ret__.enabled,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        service_bus_endpoint=__ret__.service_bus_endpoint,
        sku=__ret__.sku,
        status=__ret__.status,
        tags=__ret__.tags,
        type=__ret__.type,
        updated_at=__ret__.updated_at)
