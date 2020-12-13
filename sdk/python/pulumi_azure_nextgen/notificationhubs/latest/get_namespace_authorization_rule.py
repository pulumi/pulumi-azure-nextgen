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
    'GetNamespaceAuthorizationRuleResult',
    'AwaitableGetNamespaceAuthorizationRuleResult',
    'get_namespace_authorization_rule',
]

@pulumi.output_type
class GetNamespaceAuthorizationRuleResult:
    """
    Description of a Namespace AuthorizationRules.
    """
    def __init__(__self__, claim_type=None, claim_value=None, created_time=None, id=None, key_name=None, location=None, modified_time=None, name=None, primary_key=None, revision=None, rights=None, secondary_key=None, sku=None, tags=None, type=None):
        if claim_type and not isinstance(claim_type, str):
            raise TypeError("Expected argument 'claim_type' to be a str")
        pulumi.set(__self__, "claim_type", claim_type)
        if claim_value and not isinstance(claim_value, str):
            raise TypeError("Expected argument 'claim_value' to be a str")
        pulumi.set(__self__, "claim_value", claim_value)
        if created_time and not isinstance(created_time, str):
            raise TypeError("Expected argument 'created_time' to be a str")
        pulumi.set(__self__, "created_time", created_time)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if key_name and not isinstance(key_name, str):
            raise TypeError("Expected argument 'key_name' to be a str")
        pulumi.set(__self__, "key_name", key_name)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if modified_time and not isinstance(modified_time, str):
            raise TypeError("Expected argument 'modified_time' to be a str")
        pulumi.set(__self__, "modified_time", modified_time)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if primary_key and not isinstance(primary_key, str):
            raise TypeError("Expected argument 'primary_key' to be a str")
        pulumi.set(__self__, "primary_key", primary_key)
        if revision and not isinstance(revision, int):
            raise TypeError("Expected argument 'revision' to be a int")
        pulumi.set(__self__, "revision", revision)
        if rights and not isinstance(rights, list):
            raise TypeError("Expected argument 'rights' to be a list")
        pulumi.set(__self__, "rights", rights)
        if secondary_key and not isinstance(secondary_key, str):
            raise TypeError("Expected argument 'secondary_key' to be a str")
        pulumi.set(__self__, "secondary_key", secondary_key)
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
    @pulumi.getter(name="claimType")
    def claim_type(self) -> str:
        """
        A string that describes the claim type
        """
        return pulumi.get(self, "claim_type")

    @property
    @pulumi.getter(name="claimValue")
    def claim_value(self) -> str:
        """
        A string that describes the claim value
        """
        return pulumi.get(self, "claim_value")

    @property
    @pulumi.getter(name="createdTime")
    def created_time(self) -> str:
        """
        The created time for this rule
        """
        return pulumi.get(self, "created_time")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="keyName")
    def key_name(self) -> str:
        """
        A string that describes the authorization rule.
        """
        return pulumi.get(self, "key_name")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        Resource location
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="modifiedTime")
    def modified_time(self) -> str:
        """
        The last modified time for this rule
        """
        return pulumi.get(self, "modified_time")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="primaryKey")
    def primary_key(self) -> str:
        """
        A base64-encoded 256-bit primary key for signing and validating the SAS token.
        """
        return pulumi.get(self, "primary_key")

    @property
    @pulumi.getter
    def revision(self) -> int:
        """
        The revision number for the rule
        """
        return pulumi.get(self, "revision")

    @property
    @pulumi.getter
    def rights(self) -> Optional[Sequence[str]]:
        """
        The rights associated with the rule.
        """
        return pulumi.get(self, "rights")

    @property
    @pulumi.getter(name="secondaryKey")
    def secondary_key(self) -> str:
        """
        A base64-encoded 256-bit primary key for signing and validating the SAS token.
        """
        return pulumi.get(self, "secondary_key")

    @property
    @pulumi.getter
    def sku(self) -> Optional['outputs.SkuResponse']:
        """
        The sku of the created namespace
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
        Resource type
        """
        return pulumi.get(self, "type")


class AwaitableGetNamespaceAuthorizationRuleResult(GetNamespaceAuthorizationRuleResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetNamespaceAuthorizationRuleResult(
            claim_type=self.claim_type,
            claim_value=self.claim_value,
            created_time=self.created_time,
            id=self.id,
            key_name=self.key_name,
            location=self.location,
            modified_time=self.modified_time,
            name=self.name,
            primary_key=self.primary_key,
            revision=self.revision,
            rights=self.rights,
            secondary_key=self.secondary_key,
            sku=self.sku,
            tags=self.tags,
            type=self.type)


def get_namespace_authorization_rule(authorization_rule_name: Optional[str] = None,
                                     namespace_name: Optional[str] = None,
                                     resource_group_name: Optional[str] = None,
                                     opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetNamespaceAuthorizationRuleResult:
    """
    Use this data source to access information about an existing resource.

    :param str authorization_rule_name: Authorization rule name.
    :param str namespace_name: The namespace name
    :param str resource_group_name: The name of the resource group.
    """
    __args__ = dict()
    __args__['authorizationRuleName'] = authorization_rule_name
    __args__['namespaceName'] = namespace_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:notificationhubs/latest:getNamespaceAuthorizationRule', __args__, opts=opts, typ=GetNamespaceAuthorizationRuleResult).value

    return AwaitableGetNamespaceAuthorizationRuleResult(
        claim_type=__ret__.claim_type,
        claim_value=__ret__.claim_value,
        created_time=__ret__.created_time,
        id=__ret__.id,
        key_name=__ret__.key_name,
        location=__ret__.location,
        modified_time=__ret__.modified_time,
        name=__ret__.name,
        primary_key=__ret__.primary_key,
        revision=__ret__.revision,
        rights=__ret__.rights,
        secondary_key=__ret__.secondary_key,
        sku=__ret__.sku,
        tags=__ret__.tags,
        type=__ret__.type)
