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
    'ActionArgs',
    'ConnectionStateArgs',
    'CorrelationFilterArgs',
    'EncryptionArgs',
    'IdentityArgs',
    'KeyVaultPropertiesArgs',
    'NWRuleSetIpRulesArgs',
    'NWRuleSetVirtualNetworkRulesArgs',
    'PrivateEndpointArgs',
    'SBSkuArgs',
    'SqlFilterArgs',
    'SubnetArgs',
]

@pulumi.input_type
class ActionArgs:
    def __init__(__self__, *,
                 compatibility_level: Optional[pulumi.Input[int]] = None,
                 requires_preprocessing: Optional[pulumi.Input[bool]] = None,
                 sql_expression: Optional[pulumi.Input[str]] = None):
        """
        Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
        :param pulumi.Input[int] compatibility_level: This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
        :param pulumi.Input[bool] requires_preprocessing: Value that indicates whether the rule action requires preprocessing.
        :param pulumi.Input[str] sql_expression: SQL expression. e.g. MyProperty='ABC'
        """
        if compatibility_level is not None:
            pulumi.set(__self__, "compatibility_level", compatibility_level)
        if requires_preprocessing is None:
            requires_preprocessing = True
        if requires_preprocessing is not None:
            pulumi.set(__self__, "requires_preprocessing", requires_preprocessing)
        if sql_expression is not None:
            pulumi.set(__self__, "sql_expression", sql_expression)

    @property
    @pulumi.getter(name="compatibilityLevel")
    def compatibility_level(self) -> Optional[pulumi.Input[int]]:
        """
        This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
        """
        return pulumi.get(self, "compatibility_level")

    @compatibility_level.setter
    def compatibility_level(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "compatibility_level", value)

    @property
    @pulumi.getter(name="requiresPreprocessing")
    def requires_preprocessing(self) -> Optional[pulumi.Input[bool]]:
        """
        Value that indicates whether the rule action requires preprocessing.
        """
        return pulumi.get(self, "requires_preprocessing")

    @requires_preprocessing.setter
    def requires_preprocessing(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "requires_preprocessing", value)

    @property
    @pulumi.getter(name="sqlExpression")
    def sql_expression(self) -> Optional[pulumi.Input[str]]:
        """
        SQL expression. e.g. MyProperty='ABC'
        """
        return pulumi.get(self, "sql_expression")

    @sql_expression.setter
    def sql_expression(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "sql_expression", value)


@pulumi.input_type
class ConnectionStateArgs:
    def __init__(__self__, *,
                 description: Optional[pulumi.Input[str]] = None,
                 status: Optional[pulumi.Input[Union[str, 'PrivateLinkConnectionStatus']]] = None):
        """
        ConnectionState information.
        :param pulumi.Input[str] description: Description of the connection state.
        :param pulumi.Input[Union[str, 'PrivateLinkConnectionStatus']] status: Status of the connection.
        """
        if description is not None:
            pulumi.set(__self__, "description", description)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        Description of the connection state.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)

    @property
    @pulumi.getter
    def status(self) -> Optional[pulumi.Input[Union[str, 'PrivateLinkConnectionStatus']]]:
        """
        Status of the connection.
        """
        return pulumi.get(self, "status")

    @status.setter
    def status(self, value: Optional[pulumi.Input[Union[str, 'PrivateLinkConnectionStatus']]]):
        pulumi.set(self, "status", value)


@pulumi.input_type
class CorrelationFilterArgs:
    def __init__(__self__, *,
                 content_type: Optional[pulumi.Input[str]] = None,
                 correlation_id: Optional[pulumi.Input[str]] = None,
                 label: Optional[pulumi.Input[str]] = None,
                 message_id: Optional[pulumi.Input[str]] = None,
                 properties: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 reply_to: Optional[pulumi.Input[str]] = None,
                 reply_to_session_id: Optional[pulumi.Input[str]] = None,
                 requires_preprocessing: Optional[pulumi.Input[bool]] = None,
                 session_id: Optional[pulumi.Input[str]] = None,
                 to: Optional[pulumi.Input[str]] = None):
        """
        Represents the correlation filter expression.
        :param pulumi.Input[str] content_type: Content type of the message.
        :param pulumi.Input[str] correlation_id: Identifier of the correlation.
        :param pulumi.Input[str] label: Application specific label.
        :param pulumi.Input[str] message_id: Identifier of the message.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] properties: dictionary object for custom filters
        :param pulumi.Input[str] reply_to: Address of the queue to reply to.
        :param pulumi.Input[str] reply_to_session_id: Session identifier to reply to.
        :param pulumi.Input[bool] requires_preprocessing: Value that indicates whether the rule action requires preprocessing.
        :param pulumi.Input[str] session_id: Session identifier.
        :param pulumi.Input[str] to: Address to send to.
        """
        if content_type is not None:
            pulumi.set(__self__, "content_type", content_type)
        if correlation_id is not None:
            pulumi.set(__self__, "correlation_id", correlation_id)
        if label is not None:
            pulumi.set(__self__, "label", label)
        if message_id is not None:
            pulumi.set(__self__, "message_id", message_id)
        if properties is not None:
            pulumi.set(__self__, "properties", properties)
        if reply_to is not None:
            pulumi.set(__self__, "reply_to", reply_to)
        if reply_to_session_id is not None:
            pulumi.set(__self__, "reply_to_session_id", reply_to_session_id)
        if requires_preprocessing is None:
            requires_preprocessing = True
        if requires_preprocessing is not None:
            pulumi.set(__self__, "requires_preprocessing", requires_preprocessing)
        if session_id is not None:
            pulumi.set(__self__, "session_id", session_id)
        if to is not None:
            pulumi.set(__self__, "to", to)

    @property
    @pulumi.getter(name="contentType")
    def content_type(self) -> Optional[pulumi.Input[str]]:
        """
        Content type of the message.
        """
        return pulumi.get(self, "content_type")

    @content_type.setter
    def content_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "content_type", value)

    @property
    @pulumi.getter(name="correlationId")
    def correlation_id(self) -> Optional[pulumi.Input[str]]:
        """
        Identifier of the correlation.
        """
        return pulumi.get(self, "correlation_id")

    @correlation_id.setter
    def correlation_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "correlation_id", value)

    @property
    @pulumi.getter
    def label(self) -> Optional[pulumi.Input[str]]:
        """
        Application specific label.
        """
        return pulumi.get(self, "label")

    @label.setter
    def label(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "label", value)

    @property
    @pulumi.getter(name="messageId")
    def message_id(self) -> Optional[pulumi.Input[str]]:
        """
        Identifier of the message.
        """
        return pulumi.get(self, "message_id")

    @message_id.setter
    def message_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "message_id", value)

    @property
    @pulumi.getter
    def properties(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        """
        dictionary object for custom filters
        """
        return pulumi.get(self, "properties")

    @properties.setter
    def properties(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "properties", value)

    @property
    @pulumi.getter(name="replyTo")
    def reply_to(self) -> Optional[pulumi.Input[str]]:
        """
        Address of the queue to reply to.
        """
        return pulumi.get(self, "reply_to")

    @reply_to.setter
    def reply_to(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "reply_to", value)

    @property
    @pulumi.getter(name="replyToSessionId")
    def reply_to_session_id(self) -> Optional[pulumi.Input[str]]:
        """
        Session identifier to reply to.
        """
        return pulumi.get(self, "reply_to_session_id")

    @reply_to_session_id.setter
    def reply_to_session_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "reply_to_session_id", value)

    @property
    @pulumi.getter(name="requiresPreprocessing")
    def requires_preprocessing(self) -> Optional[pulumi.Input[bool]]:
        """
        Value that indicates whether the rule action requires preprocessing.
        """
        return pulumi.get(self, "requires_preprocessing")

    @requires_preprocessing.setter
    def requires_preprocessing(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "requires_preprocessing", value)

    @property
    @pulumi.getter(name="sessionId")
    def session_id(self) -> Optional[pulumi.Input[str]]:
        """
        Session identifier.
        """
        return pulumi.get(self, "session_id")

    @session_id.setter
    def session_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "session_id", value)

    @property
    @pulumi.getter
    def to(self) -> Optional[pulumi.Input[str]]:
        """
        Address to send to.
        """
        return pulumi.get(self, "to")

    @to.setter
    def to(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "to", value)


@pulumi.input_type
class EncryptionArgs:
    def __init__(__self__, *,
                 key_source: Optional[pulumi.Input['KeySource']] = None,
                 key_vault_properties: Optional[pulumi.Input['KeyVaultPropertiesArgs']] = None):
        """
        Properties to configure Encryption
        :param pulumi.Input['KeySource'] key_source: Enumerates the possible value of keySource for Encryption
        :param pulumi.Input['KeyVaultPropertiesArgs'] key_vault_properties: Properties of KeyVault
        """
        if key_source is None:
            key_source = 'Microsoft.KeyVault'
        if key_source is not None:
            pulumi.set(__self__, "key_source", key_source)
        if key_vault_properties is not None:
            pulumi.set(__self__, "key_vault_properties", key_vault_properties)

    @property
    @pulumi.getter(name="keySource")
    def key_source(self) -> Optional[pulumi.Input['KeySource']]:
        """
        Enumerates the possible value of keySource for Encryption
        """
        return pulumi.get(self, "key_source")

    @key_source.setter
    def key_source(self, value: Optional[pulumi.Input['KeySource']]):
        pulumi.set(self, "key_source", value)

    @property
    @pulumi.getter(name="keyVaultProperties")
    def key_vault_properties(self) -> Optional[pulumi.Input['KeyVaultPropertiesArgs']]:
        """
        Properties of KeyVault
        """
        return pulumi.get(self, "key_vault_properties")

    @key_vault_properties.setter
    def key_vault_properties(self, value: Optional[pulumi.Input['KeyVaultPropertiesArgs']]):
        pulumi.set(self, "key_vault_properties", value)


@pulumi.input_type
class IdentityArgs:
    def __init__(__self__, *,
                 principal_id: Optional[pulumi.Input[str]] = None,
                 tenant_id: Optional[pulumi.Input[str]] = None,
                 type: Optional[pulumi.Input['IdentityType']] = None):
        """
        Properties to configure Identity for Bring your Own Keys
        :param pulumi.Input[str] principal_id: ObjectId from the KeyVault
        :param pulumi.Input[str] tenant_id: TenantId from the KeyVault
        :param pulumi.Input['IdentityType'] type: Enumerates the possible value Identity type, which currently supports only 'SystemAssigned'
        """
        if principal_id is not None:
            pulumi.set(__self__, "principal_id", principal_id)
        if tenant_id is not None:
            pulumi.set(__self__, "tenant_id", tenant_id)
        if type is None:
            type = 'SystemAssigned'
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="principalId")
    def principal_id(self) -> Optional[pulumi.Input[str]]:
        """
        ObjectId from the KeyVault
        """
        return pulumi.get(self, "principal_id")

    @principal_id.setter
    def principal_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "principal_id", value)

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> Optional[pulumi.Input[str]]:
        """
        TenantId from the KeyVault
        """
        return pulumi.get(self, "tenant_id")

    @tenant_id.setter
    def tenant_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "tenant_id", value)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input['IdentityType']]:
        """
        Enumerates the possible value Identity type, which currently supports only 'SystemAssigned'
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input['IdentityType']]):
        pulumi.set(self, "type", value)


@pulumi.input_type
class KeyVaultPropertiesArgs:
    def __init__(__self__, *,
                 key_name: Optional[pulumi.Input[str]] = None,
                 key_vault_uri: Optional[pulumi.Input[str]] = None):
        """
        Properties to configure keyVault Properties
        :param pulumi.Input[str] key_name: Name of the Key from KeyVault
        :param pulumi.Input[str] key_vault_uri: Uri of KeyVault
        """
        if key_name is not None:
            pulumi.set(__self__, "key_name", key_name)
        if key_vault_uri is not None:
            pulumi.set(__self__, "key_vault_uri", key_vault_uri)

    @property
    @pulumi.getter(name="keyName")
    def key_name(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the Key from KeyVault
        """
        return pulumi.get(self, "key_name")

    @key_name.setter
    def key_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "key_name", value)

    @property
    @pulumi.getter(name="keyVaultUri")
    def key_vault_uri(self) -> Optional[pulumi.Input[str]]:
        """
        Uri of KeyVault
        """
        return pulumi.get(self, "key_vault_uri")

    @key_vault_uri.setter
    def key_vault_uri(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "key_vault_uri", value)


@pulumi.input_type
class NWRuleSetIpRulesArgs:
    def __init__(__self__, *,
                 action: Optional[pulumi.Input[Union[str, 'NetworkRuleIPAction']]] = None,
                 ip_mask: Optional[pulumi.Input[str]] = None):
        """
        Description of NetWorkRuleSet - IpRules resource.
        :param pulumi.Input[Union[str, 'NetworkRuleIPAction']] action: The IP Filter Action
        :param pulumi.Input[str] ip_mask: IP Mask
        """
        if action is None:
            action = 'Allow'
        if action is not None:
            pulumi.set(__self__, "action", action)
        if ip_mask is not None:
            pulumi.set(__self__, "ip_mask", ip_mask)

    @property
    @pulumi.getter
    def action(self) -> Optional[pulumi.Input[Union[str, 'NetworkRuleIPAction']]]:
        """
        The IP Filter Action
        """
        return pulumi.get(self, "action")

    @action.setter
    def action(self, value: Optional[pulumi.Input[Union[str, 'NetworkRuleIPAction']]]):
        pulumi.set(self, "action", value)

    @property
    @pulumi.getter(name="ipMask")
    def ip_mask(self) -> Optional[pulumi.Input[str]]:
        """
        IP Mask
        """
        return pulumi.get(self, "ip_mask")

    @ip_mask.setter
    def ip_mask(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "ip_mask", value)


@pulumi.input_type
class NWRuleSetVirtualNetworkRulesArgs:
    def __init__(__self__, *,
                 ignore_missing_vnet_service_endpoint: Optional[pulumi.Input[bool]] = None,
                 subnet: Optional[pulumi.Input['SubnetArgs']] = None):
        """
        Description of VirtualNetworkRules - NetworkRules resource.
        :param pulumi.Input[bool] ignore_missing_vnet_service_endpoint: Value that indicates whether to ignore missing VNet Service Endpoint
        :param pulumi.Input['SubnetArgs'] subnet: Subnet properties
        """
        if ignore_missing_vnet_service_endpoint is not None:
            pulumi.set(__self__, "ignore_missing_vnet_service_endpoint", ignore_missing_vnet_service_endpoint)
        if subnet is not None:
            pulumi.set(__self__, "subnet", subnet)

    @property
    @pulumi.getter(name="ignoreMissingVnetServiceEndpoint")
    def ignore_missing_vnet_service_endpoint(self) -> Optional[pulumi.Input[bool]]:
        """
        Value that indicates whether to ignore missing VNet Service Endpoint
        """
        return pulumi.get(self, "ignore_missing_vnet_service_endpoint")

    @ignore_missing_vnet_service_endpoint.setter
    def ignore_missing_vnet_service_endpoint(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "ignore_missing_vnet_service_endpoint", value)

    @property
    @pulumi.getter
    def subnet(self) -> Optional[pulumi.Input['SubnetArgs']]:
        """
        Subnet properties
        """
        return pulumi.get(self, "subnet")

    @subnet.setter
    def subnet(self, value: Optional[pulumi.Input['SubnetArgs']]):
        pulumi.set(self, "subnet", value)


@pulumi.input_type
class PrivateEndpointArgs:
    def __init__(__self__, *,
                 id: Optional[pulumi.Input[str]] = None):
        """
        PrivateEndpoint information.
        :param pulumi.Input[str] id: The ARM identifier for Private Endpoint.
        """
        if id is not None:
            pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> Optional[pulumi.Input[str]]:
        """
        The ARM identifier for Private Endpoint.
        """
        return pulumi.get(self, "id")

    @id.setter
    def id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "id", value)


@pulumi.input_type
class SBSkuArgs:
    def __init__(__self__, *,
                 name: pulumi.Input['SkuName'],
                 capacity: Optional[pulumi.Input[int]] = None,
                 tier: Optional[pulumi.Input['SkuTier']] = None):
        """
        SKU of the namespace.
        :param pulumi.Input['SkuName'] name: Name of this SKU.
        :param pulumi.Input[int] capacity: The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
        :param pulumi.Input['SkuTier'] tier: The billing tier of this particular SKU.
        """
        pulumi.set(__self__, "name", name)
        if capacity is not None:
            pulumi.set(__self__, "capacity", capacity)
        if tier is not None:
            pulumi.set(__self__, "tier", tier)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input['SkuName']:
        """
        Name of this SKU.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input['SkuName']):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def capacity(self) -> Optional[pulumi.Input[int]]:
        """
        The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
        """
        return pulumi.get(self, "capacity")

    @capacity.setter
    def capacity(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "capacity", value)

    @property
    @pulumi.getter
    def tier(self) -> Optional[pulumi.Input['SkuTier']]:
        """
        The billing tier of this particular SKU.
        """
        return pulumi.get(self, "tier")

    @tier.setter
    def tier(self, value: Optional[pulumi.Input['SkuTier']]):
        pulumi.set(self, "tier", value)


@pulumi.input_type
class SqlFilterArgs:
    def __init__(__self__, *,
                 compatibility_level: Optional[pulumi.Input[int]] = None,
                 requires_preprocessing: Optional[pulumi.Input[bool]] = None,
                 sql_expression: Optional[pulumi.Input[str]] = None):
        """
        Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline.
        :param pulumi.Input[int] compatibility_level: This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
        :param pulumi.Input[bool] requires_preprocessing: Value that indicates whether the rule action requires preprocessing.
        :param pulumi.Input[str] sql_expression: The SQL expression. e.g. MyProperty='ABC'
        """
        if compatibility_level is None:
            compatibility_level = 20
        if compatibility_level is not None:
            pulumi.set(__self__, "compatibility_level", compatibility_level)
        if requires_preprocessing is None:
            requires_preprocessing = True
        if requires_preprocessing is not None:
            pulumi.set(__self__, "requires_preprocessing", requires_preprocessing)
        if sql_expression is not None:
            pulumi.set(__self__, "sql_expression", sql_expression)

    @property
    @pulumi.getter(name="compatibilityLevel")
    def compatibility_level(self) -> Optional[pulumi.Input[int]]:
        """
        This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
        """
        return pulumi.get(self, "compatibility_level")

    @compatibility_level.setter
    def compatibility_level(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "compatibility_level", value)

    @property
    @pulumi.getter(name="requiresPreprocessing")
    def requires_preprocessing(self) -> Optional[pulumi.Input[bool]]:
        """
        Value that indicates whether the rule action requires preprocessing.
        """
        return pulumi.get(self, "requires_preprocessing")

    @requires_preprocessing.setter
    def requires_preprocessing(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "requires_preprocessing", value)

    @property
    @pulumi.getter(name="sqlExpression")
    def sql_expression(self) -> Optional[pulumi.Input[str]]:
        """
        The SQL expression. e.g. MyProperty='ABC'
        """
        return pulumi.get(self, "sql_expression")

    @sql_expression.setter
    def sql_expression(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "sql_expression", value)


@pulumi.input_type
class SubnetArgs:
    def __init__(__self__, *,
                 id: pulumi.Input[str]):
        """
        Properties supplied for Subnet
        :param pulumi.Input[str] id: Resource ID of Virtual Network Subnet
        """
        pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> pulumi.Input[str]:
        """
        Resource ID of Virtual Network Subnet
        """
        return pulumi.get(self, "id")

    @id.setter
    def id(self, value: pulumi.Input[str]):
        pulumi.set(self, "id", value)


