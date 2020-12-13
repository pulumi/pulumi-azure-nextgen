# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetNamespaceAuthorizationRuleResult',
    'AwaitableGetNamespaceAuthorizationRuleResult',
    'get_namespace_authorization_rule',
]

@pulumi.output_type
class GetNamespaceAuthorizationRuleResult:
    """
    Description of a namespace authorization rule.
    """
    def __init__(__self__, id=None, location=None, name=None, rights=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if rights and not isinstance(rights, list):
            raise TypeError("Expected argument 'rights' to be a list")
        pulumi.set(__self__, "rights", rights)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id
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
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def rights(self) -> Sequence[str]:
        """
        The rights associated with the rule.
        """
        return pulumi.get(self, "rights")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type
        """
        return pulumi.get(self, "type")


class AwaitableGetNamespaceAuthorizationRuleResult(GetNamespaceAuthorizationRuleResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetNamespaceAuthorizationRuleResult(
            id=self.id,
            location=self.location,
            name=self.name,
            rights=self.rights,
            type=self.type)


def get_namespace_authorization_rule(authorization_rule_name: Optional[str] = None,
                                     namespace_name: Optional[str] = None,
                                     resource_group_name: Optional[str] = None,
                                     opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetNamespaceAuthorizationRuleResult:
    """
    Use this data source to access information about an existing resource.

    :param str authorization_rule_name: The authorization rule name.
    :param str namespace_name: The namespace name
    :param str resource_group_name: Name of the Resource group within the Azure subscription.
    """
    __args__ = dict()
    __args__['authorizationRuleName'] = authorization_rule_name
    __args__['namespaceName'] = namespace_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:servicebus/v20140901:getNamespaceAuthorizationRule', __args__, opts=opts, typ=GetNamespaceAuthorizationRuleResult).value

    return AwaitableGetNamespaceAuthorizationRuleResult(
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        rights=__ret__.rights,
        type=__ret__.type)
