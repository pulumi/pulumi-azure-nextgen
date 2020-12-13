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
    'GetServiceEndpointPolicyResult',
    'AwaitableGetServiceEndpointPolicyResult',
    'get_service_endpoint_policy',
]

@pulumi.output_type
class GetServiceEndpointPolicyResult:
    """
    Service End point policy resource.
    """
    def __init__(__self__, etag=None, id=None, location=None, name=None, provisioning_state=None, resource_guid=None, service_endpoint_policy_definitions=None, subnets=None, tags=None, type=None):
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
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
        if resource_guid and not isinstance(resource_guid, str):
            raise TypeError("Expected argument 'resource_guid' to be a str")
        pulumi.set(__self__, "resource_guid", resource_guid)
        if service_endpoint_policy_definitions and not isinstance(service_endpoint_policy_definitions, list):
            raise TypeError("Expected argument 'service_endpoint_policy_definitions' to be a list")
        pulumi.set(__self__, "service_endpoint_policy_definitions", service_endpoint_policy_definitions)
        if subnets and not isinstance(subnets, list):
            raise TypeError("Expected argument 'subnets' to be a list")
        pulumi.set(__self__, "subnets", subnets)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def etag(self) -> Optional[str]:
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
        The provisioning state of the service endpoint policy. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="resourceGuid")
    def resource_guid(self) -> str:
        """
        The resource GUID property of the service endpoint policy resource.
        """
        return pulumi.get(self, "resource_guid")

    @property
    @pulumi.getter(name="serviceEndpointPolicyDefinitions")
    def service_endpoint_policy_definitions(self) -> Optional[Sequence['outputs.ServiceEndpointPolicyDefinitionResponse']]:
        """
        A collection of service endpoint policy definitions of the service endpoint policy.
        """
        return pulumi.get(self, "service_endpoint_policy_definitions")

    @property
    @pulumi.getter
    def subnets(self) -> Sequence['outputs.SubnetResponse']:
        """
        A collection of references to subnets.
        """
        return pulumi.get(self, "subnets")

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


class AwaitableGetServiceEndpointPolicyResult(GetServiceEndpointPolicyResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetServiceEndpointPolicyResult(
            etag=self.etag,
            id=self.id,
            location=self.location,
            name=self.name,
            provisioning_state=self.provisioning_state,
            resource_guid=self.resource_guid,
            service_endpoint_policy_definitions=self.service_endpoint_policy_definitions,
            subnets=self.subnets,
            tags=self.tags,
            type=self.type)


def get_service_endpoint_policy(expand: Optional[str] = None,
                                resource_group_name: Optional[str] = None,
                                service_endpoint_policy_name: Optional[str] = None,
                                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetServiceEndpointPolicyResult:
    """
    Use this data source to access information about an existing resource.

    :param str expand: Expands referenced resources.
    :param str resource_group_name: The name of the resource group.
    :param str service_endpoint_policy_name: The name of the service endpoint policy.
    """
    __args__ = dict()
    __args__['expand'] = expand
    __args__['resourceGroupName'] = resource_group_name
    __args__['serviceEndpointPolicyName'] = service_endpoint_policy_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:network/v20190601:getServiceEndpointPolicy', __args__, opts=opts, typ=GetServiceEndpointPolicyResult).value

    return AwaitableGetServiceEndpointPolicyResult(
        etag=__ret__.etag,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        provisioning_state=__ret__.provisioning_state,
        resource_guid=__ret__.resource_guid,
        service_endpoint_policy_definitions=__ret__.service_endpoint_policy_definitions,
        subnets=__ret__.subnets,
        tags=__ret__.tags,
        type=__ret__.type)
