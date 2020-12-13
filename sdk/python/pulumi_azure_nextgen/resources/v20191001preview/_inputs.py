# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'ManagedServiceIdentityArgs',
]

@pulumi.input_type
class ManagedServiceIdentityArgs:
    def __init__(__self__, *,
                 tenant_id: Optional[pulumi.Input[str]] = None,
                 type: Optional[pulumi.Input[Union[str, 'ManagedServiceIdentityType']]] = None,
                 user_assigned_identities: Optional[pulumi.Input[Mapping[str, Any]]] = None):
        """
        Managed identity generic object.
        :param pulumi.Input[str] tenant_id: ID of the Azure Active Directory.
        :param pulumi.Input[Union[str, 'ManagedServiceIdentityType']] type: Type of the managed identity.
        :param pulumi.Input[Mapping[str, Any]] user_assigned_identities: The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
        """
        if tenant_id is not None:
            pulumi.set(__self__, "tenant_id", tenant_id)
        if type is not None:
            pulumi.set(__self__, "type", type)
        if user_assigned_identities is not None:
            pulumi.set(__self__, "user_assigned_identities", user_assigned_identities)

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> Optional[pulumi.Input[str]]:
        """
        ID of the Azure Active Directory.
        """
        return pulumi.get(self, "tenant_id")

    @tenant_id.setter
    def tenant_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "tenant_id", value)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input[Union[str, 'ManagedServiceIdentityType']]]:
        """
        Type of the managed identity.
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input[Union[str, 'ManagedServiceIdentityType']]]):
        pulumi.set(self, "type", value)

    @property
    @pulumi.getter(name="userAssignedIdentities")
    def user_assigned_identities(self) -> Optional[pulumi.Input[Mapping[str, Any]]]:
        """
        The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
        """
        return pulumi.get(self, "user_assigned_identities")

    @user_assigned_identities.setter
    def user_assigned_identities(self, value: Optional[pulumi.Input[Mapping[str, Any]]]):
        pulumi.set(self, "user_assigned_identities", value)


