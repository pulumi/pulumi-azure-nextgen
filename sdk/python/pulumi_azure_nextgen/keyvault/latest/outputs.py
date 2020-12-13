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
    'AccessPolicyEntryResponse',
    'IPRuleResponse',
    'KeyAttributesResponse',
    'NetworkRuleSetResponse',
    'PermissionsResponse',
    'PrivateEndpointConnectionItemResponse',
    'PrivateEndpointResponse',
    'PrivateLinkServiceConnectionStateResponse',
    'SecretAttributesResponse',
    'SecretPropertiesResponse',
    'SkuResponse',
    'VaultPropertiesResponse',
    'VirtualNetworkRuleResponse',
]

@pulumi.output_type
class AccessPolicyEntryResponse(dict):
    """
    An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
    """
    def __init__(__self__, *,
                 object_id: str,
                 permissions: 'outputs.PermissionsResponse',
                 tenant_id: str,
                 application_id: Optional[str] = None):
        """
        An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
        :param str object_id: The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
        :param 'PermissionsResponseArgs' permissions: Permissions the identity has for keys, secrets and certificates.
        :param str tenant_id: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
        :param str application_id:  Application ID of the client making request on behalf of a principal
        """
        pulumi.set(__self__, "object_id", object_id)
        pulumi.set(__self__, "permissions", permissions)
        pulumi.set(__self__, "tenant_id", tenant_id)
        if application_id is not None:
            pulumi.set(__self__, "application_id", application_id)

    @property
    @pulumi.getter(name="objectId")
    def object_id(self) -> str:
        """
        The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
        """
        return pulumi.get(self, "object_id")

    @property
    @pulumi.getter
    def permissions(self) -> 'outputs.PermissionsResponse':
        """
        Permissions the identity has for keys, secrets and certificates.
        """
        return pulumi.get(self, "permissions")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> str:
        """
        The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter(name="applicationId")
    def application_id(self) -> Optional[str]:
        """
         Application ID of the client making request on behalf of a principal
        """
        return pulumi.get(self, "application_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class IPRuleResponse(dict):
    """
    A rule governing the accessibility of a vault from a specific ip address or ip range.
    """
    def __init__(__self__, *,
                 value: str):
        """
        A rule governing the accessibility of a vault from a specific ip address or ip range.
        :param str value: An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
        """
        pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter
    def value(self) -> str:
        """
        An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
        """
        return pulumi.get(self, "value")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class KeyAttributesResponse(dict):
    """
    The attributes of the key.
    """
    def __init__(__self__, *,
                 created: int,
                 recovery_level: str,
                 updated: int,
                 enabled: Optional[bool] = None,
                 expires: Optional[int] = None,
                 not_before: Optional[int] = None):
        """
        The attributes of the key.
        :param int created: Creation time in seconds since 1970-01-01T00:00:00Z.
        :param str recovery_level: The deletion recovery level currently in effect for the object. If it contains 'Purgeable', then the object can be permanently deleted by a privileged user; otherwise, only the system can purge the object at the end of the retention interval.
        :param int updated: Last updated time in seconds since 1970-01-01T00:00:00Z.
        :param bool enabled: Determines whether or not the object is enabled.
        :param int expires: Expiry date in seconds since 1970-01-01T00:00:00Z.
        :param int not_before: Not before date in seconds since 1970-01-01T00:00:00Z.
        """
        pulumi.set(__self__, "created", created)
        pulumi.set(__self__, "recovery_level", recovery_level)
        pulumi.set(__self__, "updated", updated)
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if expires is not None:
            pulumi.set(__self__, "expires", expires)
        if not_before is not None:
            pulumi.set(__self__, "not_before", not_before)

    @property
    @pulumi.getter
    def created(self) -> int:
        """
        Creation time in seconds since 1970-01-01T00:00:00Z.
        """
        return pulumi.get(self, "created")

    @property
    @pulumi.getter(name="recoveryLevel")
    def recovery_level(self) -> str:
        """
        The deletion recovery level currently in effect for the object. If it contains 'Purgeable', then the object can be permanently deleted by a privileged user; otherwise, only the system can purge the object at the end of the retention interval.
        """
        return pulumi.get(self, "recovery_level")

    @property
    @pulumi.getter
    def updated(self) -> int:
        """
        Last updated time in seconds since 1970-01-01T00:00:00Z.
        """
        return pulumi.get(self, "updated")

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        """
        Determines whether or not the object is enabled.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter
    def expires(self) -> Optional[int]:
        """
        Expiry date in seconds since 1970-01-01T00:00:00Z.
        """
        return pulumi.get(self, "expires")

    @property
    @pulumi.getter(name="notBefore")
    def not_before(self) -> Optional[int]:
        """
        Not before date in seconds since 1970-01-01T00:00:00Z.
        """
        return pulumi.get(self, "not_before")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class NetworkRuleSetResponse(dict):
    """
    A set of rules governing the network accessibility of a vault.
    """
    def __init__(__self__, *,
                 bypass: Optional[str] = None,
                 default_action: Optional[str] = None,
                 ip_rules: Optional[Sequence['outputs.IPRuleResponse']] = None,
                 virtual_network_rules: Optional[Sequence['outputs.VirtualNetworkRuleResponse']] = None):
        """
        A set of rules governing the network accessibility of a vault.
        :param str bypass: Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
        :param str default_action: The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
        :param Sequence['IPRuleResponseArgs'] ip_rules: The list of IP address rules.
        :param Sequence['VirtualNetworkRuleResponseArgs'] virtual_network_rules: The list of virtual network rules.
        """
        if bypass is not None:
            pulumi.set(__self__, "bypass", bypass)
        if default_action is not None:
            pulumi.set(__self__, "default_action", default_action)
        if ip_rules is not None:
            pulumi.set(__self__, "ip_rules", ip_rules)
        if virtual_network_rules is not None:
            pulumi.set(__self__, "virtual_network_rules", virtual_network_rules)

    @property
    @pulumi.getter
    def bypass(self) -> Optional[str]:
        """
        Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
        """
        return pulumi.get(self, "bypass")

    @property
    @pulumi.getter(name="defaultAction")
    def default_action(self) -> Optional[str]:
        """
        The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
        """
        return pulumi.get(self, "default_action")

    @property
    @pulumi.getter(name="ipRules")
    def ip_rules(self) -> Optional[Sequence['outputs.IPRuleResponse']]:
        """
        The list of IP address rules.
        """
        return pulumi.get(self, "ip_rules")

    @property
    @pulumi.getter(name="virtualNetworkRules")
    def virtual_network_rules(self) -> Optional[Sequence['outputs.VirtualNetworkRuleResponse']]:
        """
        The list of virtual network rules.
        """
        return pulumi.get(self, "virtual_network_rules")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PermissionsResponse(dict):
    """
    Permissions the identity has for keys, secrets, certificates and storage.
    """
    def __init__(__self__, *,
                 certificates: Optional[Sequence[str]] = None,
                 keys: Optional[Sequence[str]] = None,
                 secrets: Optional[Sequence[str]] = None,
                 storage: Optional[Sequence[str]] = None):
        """
        Permissions the identity has for keys, secrets, certificates and storage.
        :param Sequence[str] certificates: Permissions to certificates
        :param Sequence[str] keys: Permissions to keys
        :param Sequence[str] secrets: Permissions to secrets
        :param Sequence[str] storage: Permissions to storage accounts
        """
        if certificates is not None:
            pulumi.set(__self__, "certificates", certificates)
        if keys is not None:
            pulumi.set(__self__, "keys", keys)
        if secrets is not None:
            pulumi.set(__self__, "secrets", secrets)
        if storage is not None:
            pulumi.set(__self__, "storage", storage)

    @property
    @pulumi.getter
    def certificates(self) -> Optional[Sequence[str]]:
        """
        Permissions to certificates
        """
        return pulumi.get(self, "certificates")

    @property
    @pulumi.getter
    def keys(self) -> Optional[Sequence[str]]:
        """
        Permissions to keys
        """
        return pulumi.get(self, "keys")

    @property
    @pulumi.getter
    def secrets(self) -> Optional[Sequence[str]]:
        """
        Permissions to secrets
        """
        return pulumi.get(self, "secrets")

    @property
    @pulumi.getter
    def storage(self) -> Optional[Sequence[str]]:
        """
        Permissions to storage accounts
        """
        return pulumi.get(self, "storage")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PrivateEndpointConnectionItemResponse(dict):
    """
    Private endpoint connection item.
    """
    def __init__(__self__, *,
                 provisioning_state: str,
                 private_endpoint: Optional['outputs.PrivateEndpointResponse'] = None,
                 private_link_service_connection_state: Optional['outputs.PrivateLinkServiceConnectionStateResponse'] = None):
        """
        Private endpoint connection item.
        :param str provisioning_state: Provisioning state of the private endpoint connection.
        :param 'PrivateEndpointResponseArgs' private_endpoint: Properties of the private endpoint object.
        :param 'PrivateLinkServiceConnectionStateResponseArgs' private_link_service_connection_state: Approval state of the private link connection.
        """
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if private_endpoint is not None:
            pulumi.set(__self__, "private_endpoint", private_endpoint)
        if private_link_service_connection_state is not None:
            pulumi.set(__self__, "private_link_service_connection_state", private_link_service_connection_state)

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        Provisioning state of the private endpoint connection.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="privateEndpoint")
    def private_endpoint(self) -> Optional['outputs.PrivateEndpointResponse']:
        """
        Properties of the private endpoint object.
        """
        return pulumi.get(self, "private_endpoint")

    @property
    @pulumi.getter(name="privateLinkServiceConnectionState")
    def private_link_service_connection_state(self) -> Optional['outputs.PrivateLinkServiceConnectionStateResponse']:
        """
        Approval state of the private link connection.
        """
        return pulumi.get(self, "private_link_service_connection_state")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PrivateEndpointResponse(dict):
    """
    Private endpoint object properties.
    """
    def __init__(__self__, *,
                 id: str):
        """
        Private endpoint object properties.
        :param str id: Full identifier of the private endpoint resource.
        """
        pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Full identifier of the private endpoint resource.
        """
        return pulumi.get(self, "id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PrivateLinkServiceConnectionStateResponse(dict):
    """
    An object that represents the approval state of the private link connection.
    """
    def __init__(__self__, *,
                 action_required: Optional[str] = None,
                 description: Optional[str] = None,
                 status: Optional[str] = None):
        """
        An object that represents the approval state of the private link connection.
        :param str action_required: A message indicating if changes on the service provider require any updates on the consumer.
        :param str description: The reason for approval or rejection.
        :param str status: Indicates whether the connection has been approved, rejected or removed by the key vault owner.
        """
        if action_required is not None:
            pulumi.set(__self__, "action_required", action_required)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter(name="actionRequired")
    def action_required(self) -> Optional[str]:
        """
        A message indicating if changes on the service provider require any updates on the consumer.
        """
        return pulumi.get(self, "action_required")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        The reason for approval or rejection.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        Indicates whether the connection has been approved, rejected or removed by the key vault owner.
        """
        return pulumi.get(self, "status")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SecretAttributesResponse(dict):
    """
    The secret management attributes.
    """
    def __init__(__self__, *,
                 created: int,
                 updated: int,
                 enabled: Optional[bool] = None,
                 expires: Optional[int] = None,
                 not_before: Optional[int] = None):
        """
        The secret management attributes.
        :param int created: Creation time in seconds since 1970-01-01T00:00:00Z.
        :param int updated: Last updated time in seconds since 1970-01-01T00:00:00Z.
        :param bool enabled: Determines whether the object is enabled.
        :param int expires: Expiry date in seconds since 1970-01-01T00:00:00Z.
        :param int not_before: Not before date in seconds since 1970-01-01T00:00:00Z.
        """
        pulumi.set(__self__, "created", created)
        pulumi.set(__self__, "updated", updated)
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if expires is not None:
            pulumi.set(__self__, "expires", expires)
        if not_before is not None:
            pulumi.set(__self__, "not_before", not_before)

    @property
    @pulumi.getter
    def created(self) -> int:
        """
        Creation time in seconds since 1970-01-01T00:00:00Z.
        """
        return pulumi.get(self, "created")

    @property
    @pulumi.getter
    def updated(self) -> int:
        """
        Last updated time in seconds since 1970-01-01T00:00:00Z.
        """
        return pulumi.get(self, "updated")

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        """
        Determines whether the object is enabled.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter
    def expires(self) -> Optional[int]:
        """
        Expiry date in seconds since 1970-01-01T00:00:00Z.
        """
        return pulumi.get(self, "expires")

    @property
    @pulumi.getter(name="notBefore")
    def not_before(self) -> Optional[int]:
        """
        Not before date in seconds since 1970-01-01T00:00:00Z.
        """
        return pulumi.get(self, "not_before")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SecretPropertiesResponse(dict):
    """
    Properties of the secret
    """
    def __init__(__self__, *,
                 secret_uri: str,
                 secret_uri_with_version: str,
                 attributes: Optional['outputs.SecretAttributesResponse'] = None,
                 content_type: Optional[str] = None,
                 value: Optional[str] = None):
        """
        Properties of the secret
        :param str secret_uri: The URI to retrieve the current version of the secret.
        :param str secret_uri_with_version: The URI to retrieve the specific version of the secret.
        :param 'SecretAttributesResponseArgs' attributes: The attributes of the secret.
        :param str content_type: The content type of the secret.
        :param str value: The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
        """
        pulumi.set(__self__, "secret_uri", secret_uri)
        pulumi.set(__self__, "secret_uri_with_version", secret_uri_with_version)
        if attributes is not None:
            pulumi.set(__self__, "attributes", attributes)
        if content_type is not None:
            pulumi.set(__self__, "content_type", content_type)
        if value is not None:
            pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter(name="secretUri")
    def secret_uri(self) -> str:
        """
        The URI to retrieve the current version of the secret.
        """
        return pulumi.get(self, "secret_uri")

    @property
    @pulumi.getter(name="secretUriWithVersion")
    def secret_uri_with_version(self) -> str:
        """
        The URI to retrieve the specific version of the secret.
        """
        return pulumi.get(self, "secret_uri_with_version")

    @property
    @pulumi.getter
    def attributes(self) -> Optional['outputs.SecretAttributesResponse']:
        """
        The attributes of the secret.
        """
        return pulumi.get(self, "attributes")

    @property
    @pulumi.getter(name="contentType")
    def content_type(self) -> Optional[str]:
        """
        The content type of the secret.
        """
        return pulumi.get(self, "content_type")

    @property
    @pulumi.getter
    def value(self) -> Optional[str]:
        """
        The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
        """
        return pulumi.get(self, "value")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SkuResponse(dict):
    """
    SKU details
    """
    def __init__(__self__, *,
                 family: str,
                 name: str):
        """
        SKU details
        :param str family: SKU family name
        :param str name: SKU name to specify whether the key vault is a standard vault or a premium vault.
        """
        pulumi.set(__self__, "family", family)
        pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def family(self) -> str:
        """
        SKU family name
        """
        return pulumi.get(self, "family")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        SKU name to specify whether the key vault is a standard vault or a premium vault.
        """
        return pulumi.get(self, "name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class VaultPropertiesResponse(dict):
    """
    Properties of the vault
    """
    def __init__(__self__, *,
                 private_endpoint_connections: Sequence['outputs.PrivateEndpointConnectionItemResponse'],
                 sku: 'outputs.SkuResponse',
                 tenant_id: str,
                 access_policies: Optional[Sequence['outputs.AccessPolicyEntryResponse']] = None,
                 create_mode: Optional[str] = None,
                 enable_purge_protection: Optional[bool] = None,
                 enable_rbac_authorization: Optional[bool] = None,
                 enable_soft_delete: Optional[bool] = None,
                 enabled_for_deployment: Optional[bool] = None,
                 enabled_for_disk_encryption: Optional[bool] = None,
                 enabled_for_template_deployment: Optional[bool] = None,
                 network_acls: Optional['outputs.NetworkRuleSetResponse'] = None,
                 soft_delete_retention_in_days: Optional[int] = None,
                 vault_uri: Optional[str] = None):
        """
        Properties of the vault
        :param Sequence['PrivateEndpointConnectionItemResponseArgs'] private_endpoint_connections: List of private endpoint connections associated with the key vault.
        :param 'SkuResponseArgs' sku: SKU details
        :param str tenant_id: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
        :param Sequence['AccessPolicyEntryResponseArgs'] access_policies: An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to `recover`, access policies are not required. Otherwise, access policies are required.
        :param str create_mode: The vault's create mode to indicate whether the vault need to be recovered or not.
        :param bool enable_purge_protection: Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
        :param bool enable_rbac_authorization: Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC.
        :param bool enable_soft_delete: Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false.
        :param bool enabled_for_deployment: Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
        :param bool enabled_for_disk_encryption: Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
        :param bool enabled_for_template_deployment: Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
        :param 'NetworkRuleSetResponseArgs' network_acls: Rules governing the accessibility of the key vault from specific network locations.
        :param int soft_delete_retention_in_days: softDelete data retention days. It accepts >=7 and <=90.
        :param str vault_uri: The URI of the vault for performing operations on keys and secrets. This property is readonly
        """
        pulumi.set(__self__, "private_endpoint_connections", private_endpoint_connections)
        pulumi.set(__self__, "sku", sku)
        pulumi.set(__self__, "tenant_id", tenant_id)
        if access_policies is not None:
            pulumi.set(__self__, "access_policies", access_policies)
        if create_mode is not None:
            pulumi.set(__self__, "create_mode", create_mode)
        if enable_purge_protection is not None:
            pulumi.set(__self__, "enable_purge_protection", enable_purge_protection)
        if enable_rbac_authorization is not None:
            pulumi.set(__self__, "enable_rbac_authorization", enable_rbac_authorization)
        if enable_soft_delete is not None:
            pulumi.set(__self__, "enable_soft_delete", enable_soft_delete)
        if enabled_for_deployment is not None:
            pulumi.set(__self__, "enabled_for_deployment", enabled_for_deployment)
        if enabled_for_disk_encryption is not None:
            pulumi.set(__self__, "enabled_for_disk_encryption", enabled_for_disk_encryption)
        if enabled_for_template_deployment is not None:
            pulumi.set(__self__, "enabled_for_template_deployment", enabled_for_template_deployment)
        if network_acls is not None:
            pulumi.set(__self__, "network_acls", network_acls)
        if soft_delete_retention_in_days is not None:
            pulumi.set(__self__, "soft_delete_retention_in_days", soft_delete_retention_in_days)
        if vault_uri is not None:
            pulumi.set(__self__, "vault_uri", vault_uri)

    @property
    @pulumi.getter(name="privateEndpointConnections")
    def private_endpoint_connections(self) -> Sequence['outputs.PrivateEndpointConnectionItemResponse']:
        """
        List of private endpoint connections associated with the key vault.
        """
        return pulumi.get(self, "private_endpoint_connections")

    @property
    @pulumi.getter
    def sku(self) -> 'outputs.SkuResponse':
        """
        SKU details
        """
        return pulumi.get(self, "sku")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> str:
        """
        The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter(name="accessPolicies")
    def access_policies(self) -> Optional[Sequence['outputs.AccessPolicyEntryResponse']]:
        """
        An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to `recover`, access policies are not required. Otherwise, access policies are required.
        """
        return pulumi.get(self, "access_policies")

    @property
    @pulumi.getter(name="createMode")
    def create_mode(self) -> Optional[str]:
        """
        The vault's create mode to indicate whether the vault need to be recovered or not.
        """
        return pulumi.get(self, "create_mode")

    @property
    @pulumi.getter(name="enablePurgeProtection")
    def enable_purge_protection(self) -> Optional[bool]:
        """
        Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
        """
        return pulumi.get(self, "enable_purge_protection")

    @property
    @pulumi.getter(name="enableRbacAuthorization")
    def enable_rbac_authorization(self) -> Optional[bool]:
        """
        Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC.
        """
        return pulumi.get(self, "enable_rbac_authorization")

    @property
    @pulumi.getter(name="enableSoftDelete")
    def enable_soft_delete(self) -> Optional[bool]:
        """
        Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false.
        """
        return pulumi.get(self, "enable_soft_delete")

    @property
    @pulumi.getter(name="enabledForDeployment")
    def enabled_for_deployment(self) -> Optional[bool]:
        """
        Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
        """
        return pulumi.get(self, "enabled_for_deployment")

    @property
    @pulumi.getter(name="enabledForDiskEncryption")
    def enabled_for_disk_encryption(self) -> Optional[bool]:
        """
        Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
        """
        return pulumi.get(self, "enabled_for_disk_encryption")

    @property
    @pulumi.getter(name="enabledForTemplateDeployment")
    def enabled_for_template_deployment(self) -> Optional[bool]:
        """
        Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
        """
        return pulumi.get(self, "enabled_for_template_deployment")

    @property
    @pulumi.getter(name="networkAcls")
    def network_acls(self) -> Optional['outputs.NetworkRuleSetResponse']:
        """
        Rules governing the accessibility of the key vault from specific network locations.
        """
        return pulumi.get(self, "network_acls")

    @property
    @pulumi.getter(name="softDeleteRetentionInDays")
    def soft_delete_retention_in_days(self) -> Optional[int]:
        """
        softDelete data retention days. It accepts >=7 and <=90.
        """
        return pulumi.get(self, "soft_delete_retention_in_days")

    @property
    @pulumi.getter(name="vaultUri")
    def vault_uri(self) -> Optional[str]:
        """
        The URI of the vault for performing operations on keys and secrets. This property is readonly
        """
        return pulumi.get(self, "vault_uri")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class VirtualNetworkRuleResponse(dict):
    """
    A rule governing the accessibility of a vault from a specific virtual network.
    """
    def __init__(__self__, *,
                 id: str):
        """
        A rule governing the accessibility of a vault from a specific virtual network.
        :param str id: Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
        """
        pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
        """
        return pulumi.get(self, "id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


