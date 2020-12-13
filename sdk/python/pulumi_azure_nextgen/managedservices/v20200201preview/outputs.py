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
    'AuthorizationResponse',
    'EligibleAuthorizationResponse',
    'JustInTimeAccessPolicyResponse',
    'PlanResponse',
    'RegistrationAssignmentPropertiesResponse',
    'RegistrationAssignmentPropertiesResponseProperties',
    'RegistrationAssignmentPropertiesResponseRegistrationDefinition',
    'RegistrationDefinitionPropertiesResponse',
]

@pulumi.output_type
class AuthorizationResponse(dict):
    """
    Authorization tuple containing principal Id (of user/service principal/security group) and role definition id.
    """
    def __init__(__self__, *,
                 principal_id: str,
                 role_definition_id: str,
                 delegated_role_definition_ids: Optional[Sequence[str]] = None,
                 principal_id_display_name: Optional[str] = None):
        """
        Authorization tuple containing principal Id (of user/service principal/security group) and role definition id.
        :param str principal_id: Principal Id of the security group/service principal/user that would be assigned permissions to the projected subscription
        :param str role_definition_id: The role definition identifier. This role will define all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role.
        :param Sequence[str] delegated_role_definition_ids: The delegatedRoleDefinitionIds field is required when the roleDefinitionId refers to the User Access Administrator Role. It is the list of role definition ids which define all the permissions that the user in the authorization can assign to other security groups/service principals/users.
        :param str principal_id_display_name: Display name of the principal Id.
        """
        pulumi.set(__self__, "principal_id", principal_id)
        pulumi.set(__self__, "role_definition_id", role_definition_id)
        if delegated_role_definition_ids is not None:
            pulumi.set(__self__, "delegated_role_definition_ids", delegated_role_definition_ids)
        if principal_id_display_name is not None:
            pulumi.set(__self__, "principal_id_display_name", principal_id_display_name)

    @property
    @pulumi.getter(name="principalId")
    def principal_id(self) -> str:
        """
        Principal Id of the security group/service principal/user that would be assigned permissions to the projected subscription
        """
        return pulumi.get(self, "principal_id")

    @property
    @pulumi.getter(name="roleDefinitionId")
    def role_definition_id(self) -> str:
        """
        The role definition identifier. This role will define all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role.
        """
        return pulumi.get(self, "role_definition_id")

    @property
    @pulumi.getter(name="delegatedRoleDefinitionIds")
    def delegated_role_definition_ids(self) -> Optional[Sequence[str]]:
        """
        The delegatedRoleDefinitionIds field is required when the roleDefinitionId refers to the User Access Administrator Role. It is the list of role definition ids which define all the permissions that the user in the authorization can assign to other security groups/service principals/users.
        """
        return pulumi.get(self, "delegated_role_definition_ids")

    @property
    @pulumi.getter(name="principalIdDisplayName")
    def principal_id_display_name(self) -> Optional[str]:
        """
        Display name of the principal Id.
        """
        return pulumi.get(self, "principal_id_display_name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class EligibleAuthorizationResponse(dict):
    """
    Eligible authorization tuple containing principle Id (of user/service principal/security group), role definition id, and the just-in-time access setting.
    """
    def __init__(__self__, *,
                 principal_id: str,
                 role_definition_id: str,
                 just_in_time_access_policy: Optional['outputs.JustInTimeAccessPolicyResponse'] = None,
                 principal_id_display_name: Optional[str] = None):
        """
        Eligible authorization tuple containing principle Id (of user/service principal/security group), role definition id, and the just-in-time access setting.
        :param str principal_id: Principal Id of the security group/service principal/user that would be delegated permissions to the projected subscription
        :param str role_definition_id: The role definition identifier. This role will delegate all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role.
        :param 'JustInTimeAccessPolicyResponseArgs' just_in_time_access_policy: Just-in-time access policy setting.
        :param str principal_id_display_name: Display name of the principal Id.
        """
        pulumi.set(__self__, "principal_id", principal_id)
        pulumi.set(__self__, "role_definition_id", role_definition_id)
        if just_in_time_access_policy is not None:
            pulumi.set(__self__, "just_in_time_access_policy", just_in_time_access_policy)
        if principal_id_display_name is not None:
            pulumi.set(__self__, "principal_id_display_name", principal_id_display_name)

    @property
    @pulumi.getter(name="principalId")
    def principal_id(self) -> str:
        """
        Principal Id of the security group/service principal/user that would be delegated permissions to the projected subscription
        """
        return pulumi.get(self, "principal_id")

    @property
    @pulumi.getter(name="roleDefinitionId")
    def role_definition_id(self) -> str:
        """
        The role definition identifier. This role will delegate all the permissions that the security group/service principal/user must have on the projected subscription. This role cannot be an owner role.
        """
        return pulumi.get(self, "role_definition_id")

    @property
    @pulumi.getter(name="justInTimeAccessPolicy")
    def just_in_time_access_policy(self) -> Optional['outputs.JustInTimeAccessPolicyResponse']:
        """
        Just-in-time access policy setting.
        """
        return pulumi.get(self, "just_in_time_access_policy")

    @property
    @pulumi.getter(name="principalIdDisplayName")
    def principal_id_display_name(self) -> Optional[str]:
        """
        Display name of the principal Id.
        """
        return pulumi.get(self, "principal_id_display_name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class JustInTimeAccessPolicyResponse(dict):
    """
    Just-in-time access policy setting.
    """
    def __init__(__self__, *,
                 multi_factor_auth_provider: str,
                 maximum_activation_duration: Optional[str] = None):
        """
        Just-in-time access policy setting.
        :param str multi_factor_auth_provider: MFA provider.
        :param str maximum_activation_duration: Maximum access duration in ISO 8601 format.  The default value is "PT8H".
        """
        pulumi.set(__self__, "multi_factor_auth_provider", multi_factor_auth_provider)
        if maximum_activation_duration is not None:
            pulumi.set(__self__, "maximum_activation_duration", maximum_activation_duration)

    @property
    @pulumi.getter(name="multiFactorAuthProvider")
    def multi_factor_auth_provider(self) -> str:
        """
        MFA provider.
        """
        return pulumi.get(self, "multi_factor_auth_provider")

    @property
    @pulumi.getter(name="maximumActivationDuration")
    def maximum_activation_duration(self) -> Optional[str]:
        """
        Maximum access duration in ISO 8601 format.  The default value is "PT8H".
        """
        return pulumi.get(self, "maximum_activation_duration")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PlanResponse(dict):
    """
    Plan details for the managed services.
    """
    def __init__(__self__, *,
                 name: str,
                 product: str,
                 publisher: str,
                 version: str):
        """
        Plan details for the managed services.
        :param str name: The plan name.
        :param str product: The product code.
        :param str publisher: The publisher ID.
        :param str version: The plan's version.
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "product", product)
        pulumi.set(__self__, "publisher", publisher)
        pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The plan name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def product(self) -> str:
        """
        The product code.
        """
        return pulumi.get(self, "product")

    @property
    @pulumi.getter
    def publisher(self) -> str:
        """
        The publisher ID.
        """
        return pulumi.get(self, "publisher")

    @property
    @pulumi.getter
    def version(self) -> str:
        """
        The plan's version.
        """
        return pulumi.get(self, "version")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class RegistrationAssignmentPropertiesResponse(dict):
    """
    Properties of a registration assignment.
    """
    def __init__(__self__, *,
                 provisioning_state: str,
                 registration_definition: 'outputs.RegistrationAssignmentPropertiesResponseRegistrationDefinition',
                 registration_definition_id: str):
        """
        Properties of a registration assignment.
        :param str provisioning_state: Current state of the registration assignment.
        :param 'RegistrationAssignmentPropertiesResponseRegistrationDefinitionArgs' registration_definition: Registration definition inside registration assignment.
        :param str registration_definition_id: Fully qualified path of the registration definition.
        """
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        pulumi.set(__self__, "registration_definition", registration_definition)
        pulumi.set(__self__, "registration_definition_id", registration_definition_id)

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Current state of the registration assignment.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="registrationDefinition")
    def registration_definition(self) -> 'outputs.RegistrationAssignmentPropertiesResponseRegistrationDefinition':
        """
        Registration definition inside registration assignment.
        """
        return pulumi.get(self, "registration_definition")

    @property
    @pulumi.getter(name="registrationDefinitionId")
    def registration_definition_id(self) -> str:
        """
        Fully qualified path of the registration definition.
        """
        return pulumi.get(self, "registration_definition_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class RegistrationAssignmentPropertiesResponseProperties(dict):
    """
    Properties of registration definition inside registration assignment.
    """
    def __init__(__self__, *,
                 authorizations: Optional[Sequence['outputs.AuthorizationResponse']] = None,
                 description: Optional[str] = None,
                 eligible_authorizations: Optional[Sequence['outputs.EligibleAuthorizationResponse']] = None,
                 managed_by_tenant_id: Optional[str] = None,
                 managed_by_tenant_name: Optional[str] = None,
                 managee_tenant_id: Optional[str] = None,
                 managee_tenant_name: Optional[str] = None,
                 provisioning_state: Optional[str] = None,
                 registration_definition_name: Optional[str] = None):
        """
        Properties of registration definition inside registration assignment.
        :param Sequence['AuthorizationResponseArgs'] authorizations: Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
        :param str description: Description of the registration definition.
        :param Sequence['EligibleAuthorizationResponseArgs'] eligible_authorizations: Eligible PIM authorization tuple containing principal id of the user/security group or service principal, id of the built-in role, and just-in-time access policy setting
        :param str managed_by_tenant_id: Id of the managedBy tenant.
        :param str managed_by_tenant_name: Name of the managedBy tenant.
        :param str managee_tenant_id: Id of the home tenant.
        :param str managee_tenant_name: Name of the home tenant.
        :param str provisioning_state: Current state of the registration definition.
        :param str registration_definition_name: Name of the registration definition.
        """
        if authorizations is not None:
            pulumi.set(__self__, "authorizations", authorizations)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if eligible_authorizations is not None:
            pulumi.set(__self__, "eligible_authorizations", eligible_authorizations)
        if managed_by_tenant_id is not None:
            pulumi.set(__self__, "managed_by_tenant_id", managed_by_tenant_id)
        if managed_by_tenant_name is not None:
            pulumi.set(__self__, "managed_by_tenant_name", managed_by_tenant_name)
        if managee_tenant_id is not None:
            pulumi.set(__self__, "managee_tenant_id", managee_tenant_id)
        if managee_tenant_name is not None:
            pulumi.set(__self__, "managee_tenant_name", managee_tenant_name)
        if provisioning_state is not None:
            pulumi.set(__self__, "provisioning_state", provisioning_state)
        if registration_definition_name is not None:
            pulumi.set(__self__, "registration_definition_name", registration_definition_name)

    @property
    @pulumi.getter
    def authorizations(self) -> Optional[Sequence['outputs.AuthorizationResponse']]:
        """
        Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
        """
        return pulumi.get(self, "authorizations")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Description of the registration definition.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="eligibleAuthorizations")
    def eligible_authorizations(self) -> Optional[Sequence['outputs.EligibleAuthorizationResponse']]:
        """
        Eligible PIM authorization tuple containing principal id of the user/security group or service principal, id of the built-in role, and just-in-time access policy setting
        """
        return pulumi.get(self, "eligible_authorizations")

    @property
    @pulumi.getter(name="managedByTenantId")
    def managed_by_tenant_id(self) -> Optional[str]:
        """
        Id of the managedBy tenant.
        """
        return pulumi.get(self, "managed_by_tenant_id")

    @property
    @pulumi.getter(name="managedByTenantName")
    def managed_by_tenant_name(self) -> Optional[str]:
        """
        Name of the managedBy tenant.
        """
        return pulumi.get(self, "managed_by_tenant_name")

    @property
    @pulumi.getter(name="manageeTenantId")
    def managee_tenant_id(self) -> Optional[str]:
        """
        Id of the home tenant.
        """
        return pulumi.get(self, "managee_tenant_id")

    @property
    @pulumi.getter(name="manageeTenantName")
    def managee_tenant_name(self) -> Optional[str]:
        """
        Name of the home tenant.
        """
        return pulumi.get(self, "managee_tenant_name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        """
        Current state of the registration definition.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="registrationDefinitionName")
    def registration_definition_name(self) -> Optional[str]:
        """
        Name of the registration definition.
        """
        return pulumi.get(self, "registration_definition_name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class RegistrationAssignmentPropertiesResponseRegistrationDefinition(dict):
    """
    Registration definition inside registration assignment.
    """
    def __init__(__self__, *,
                 id: str,
                 name: str,
                 type: str,
                 plan: Optional['outputs.PlanResponse'] = None,
                 properties: Optional['outputs.RegistrationAssignmentPropertiesResponseProperties'] = None):
        """
        Registration definition inside registration assignment.
        :param str id: Fully qualified path of the registration definition.
        :param str name: Name of the registration definition.
        :param str type: Type of the resource (Microsoft.ManagedServices/registrationDefinitions).
        :param 'PlanResponseArgs' plan: Plan details for the managed services.
        :param 'RegistrationAssignmentPropertiesResponsePropertiesArgs' properties: Properties of registration definition inside registration assignment.
        """
        pulumi.set(__self__, "id", id)
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "type", type)
        if plan is not None:
            pulumi.set(__self__, "plan", plan)
        if properties is not None:
            pulumi.set(__self__, "properties", properties)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified path of the registration definition.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the registration definition.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Type of the resource (Microsoft.ManagedServices/registrationDefinitions).
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def plan(self) -> Optional['outputs.PlanResponse']:
        """
        Plan details for the managed services.
        """
        return pulumi.get(self, "plan")

    @property
    @pulumi.getter
    def properties(self) -> Optional['outputs.RegistrationAssignmentPropertiesResponseProperties']:
        """
        Properties of registration definition inside registration assignment.
        """
        return pulumi.get(self, "properties")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class RegistrationDefinitionPropertiesResponse(dict):
    """
    Properties of a registration definition.
    """
    def __init__(__self__, *,
                 authorizations: Sequence['outputs.AuthorizationResponse'],
                 managed_by_tenant_id: str,
                 managed_by_tenant_name: str,
                 provisioning_state: str,
                 description: Optional[str] = None,
                 eligible_authorizations: Optional[Sequence['outputs.EligibleAuthorizationResponse']] = None,
                 registration_definition_name: Optional[str] = None):
        """
        Properties of a registration definition.
        :param Sequence['AuthorizationResponseArgs'] authorizations: Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
        :param str managed_by_tenant_id: Id of the managedBy tenant.
        :param str managed_by_tenant_name: Name of the managedBy tenant.
        :param str provisioning_state: Current state of the registration definition.
        :param str description: Description of the registration definition.
        :param Sequence['EligibleAuthorizationResponseArgs'] eligible_authorizations: Eligible PIM authorization tuple containing principal id of the user/security group or service principal, id of the built-in role, and just-in-time access policy setting
        :param str registration_definition_name: Name of the registration definition.
        """
        pulumi.set(__self__, "authorizations", authorizations)
        pulumi.set(__self__, "managed_by_tenant_id", managed_by_tenant_id)
        pulumi.set(__self__, "managed_by_tenant_name", managed_by_tenant_name)
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if eligible_authorizations is not None:
            pulumi.set(__self__, "eligible_authorizations", eligible_authorizations)
        if registration_definition_name is not None:
            pulumi.set(__self__, "registration_definition_name", registration_definition_name)

    @property
    @pulumi.getter
    def authorizations(self) -> Sequence['outputs.AuthorizationResponse']:
        """
        Authorization tuple containing principal id of the user/security group or service principal and id of the build-in role.
        """
        return pulumi.get(self, "authorizations")

    @property
    @pulumi.getter(name="managedByTenantId")
    def managed_by_tenant_id(self) -> str:
        """
        Id of the managedBy tenant.
        """
        return pulumi.get(self, "managed_by_tenant_id")

    @property
    @pulumi.getter(name="managedByTenantName")
    def managed_by_tenant_name(self) -> str:
        """
        Name of the managedBy tenant.
        """
        return pulumi.get(self, "managed_by_tenant_name")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Current state of the registration definition.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Description of the registration definition.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="eligibleAuthorizations")
    def eligible_authorizations(self) -> Optional[Sequence['outputs.EligibleAuthorizationResponse']]:
        """
        Eligible PIM authorization tuple containing principal id of the user/security group or service principal, id of the built-in role, and just-in-time access policy setting
        """
        return pulumi.get(self, "eligible_authorizations")

    @property
    @pulumi.getter(name="registrationDefinitionName")
    def registration_definition_name(self) -> Optional[str]:
        """
        Name of the registration definition.
        """
        return pulumi.get(self, "registration_definition_name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


