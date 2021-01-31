# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AdvancedFilterOperatorType',
    'DeadLetterEndPointType',
    'DeliveryAttributeMappingType',
    'EndpointType',
    'EventDeliverySchema',
    'EventSubscriptionIdentityType',
    'IdentityType',
    'InputSchema',
    'InputSchemaMappingType',
    'IpActionType',
    'PartnerRegistrationVisibilityState',
    'PersistedConnectionStatus',
    'PublicNetworkAccess',
    'ResourceKind',
    'ResourceProvisioningState',
    'Sku',
]


class AdvancedFilterOperatorType(str, Enum):
    """
    The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
    """
    NUMBER_IN = "NumberIn"
    NUMBER_NOT_IN = "NumberNotIn"
    NUMBER_LESS_THAN = "NumberLessThan"
    NUMBER_GREATER_THAN = "NumberGreaterThan"
    NUMBER_LESS_THAN_OR_EQUALS = "NumberLessThanOrEquals"
    NUMBER_GREATER_THAN_OR_EQUALS = "NumberGreaterThanOrEquals"
    BOOL_EQUALS = "BoolEquals"
    STRING_IN = "StringIn"
    STRING_NOT_IN = "StringNotIn"
    STRING_BEGINS_WITH = "StringBeginsWith"
    STRING_ENDS_WITH = "StringEndsWith"
    STRING_CONTAINS = "StringContains"
    NUMBER_IN_RANGE = "NumberInRange"
    NUMBER_NOT_IN_RANGE = "NumberNotInRange"
    STRING_NOT_BEGINS_WITH = "StringNotBeginsWith"
    STRING_NOT_ENDS_WITH = "StringNotEndsWith"
    STRING_NOT_CONTAINS = "StringNotContains"
    IS_NULL_OR_UNDEFINED = "IsNullOrUndefined"
    IS_NOT_NULL = "IsNotNull"


class DeadLetterEndPointType(str, Enum):
    """
    Type of the endpoint for the dead letter destination
    """
    STORAGE_BLOB = "StorageBlob"


class DeliveryAttributeMappingType(str, Enum):
    """
    Type of the delivery attribute or header name.
    """
    STATIC = "Static"
    DYNAMIC = "Dynamic"


class EndpointType(str, Enum):
    """
    Type of the endpoint for the event subscription destination.
    """
    WEB_HOOK = "WebHook"
    EVENT_HUB = "EventHub"
    STORAGE_QUEUE = "StorageQueue"
    HYBRID_CONNECTION = "HybridConnection"
    SERVICE_BUS_QUEUE = "ServiceBusQueue"
    SERVICE_BUS_TOPIC = "ServiceBusTopic"
    AZURE_FUNCTION = "AzureFunction"


class EventDeliverySchema(str, Enum):
    """
    The event delivery schema for the event subscription.
    """
    EVENT_GRID_SCHEMA = "EventGridSchema"
    CUSTOM_INPUT_SCHEMA = "CustomInputSchema"
    CLOUD_EVENT_SCHEMA_V1_0 = "CloudEventSchemaV1_0"


class EventSubscriptionIdentityType(str, Enum):
    """
    The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
    """
    SYSTEM_ASSIGNED = "SystemAssigned"
    USER_ASSIGNED = "UserAssigned"


class IdentityType(str, Enum):
    """
    The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
    """
    NONE = "None"
    SYSTEM_ASSIGNED = "SystemAssigned"
    USER_ASSIGNED = "UserAssigned"
    SYSTEM_ASSIGNED_USER_ASSIGNED = "SystemAssigned, UserAssigned"


class InputSchema(str, Enum):
    """
    This determines the format that Event Grid should expect for incoming events published to the topic.
    """
    EVENT_GRID_SCHEMA = "EventGridSchema"
    CUSTOM_EVENT_SCHEMA = "CustomEventSchema"
    CLOUD_EVENT_SCHEMA_V1_0 = "CloudEventSchemaV1_0"


class InputSchemaMappingType(str, Enum):
    """
    Type of the custom mapping
    """
    JSON = "Json"


class IpActionType(str, Enum):
    """
    Action to perform based on the match or no match of the IpMask.
    """
    ALLOW = "Allow"


class PartnerRegistrationVisibilityState(str, Enum):
    """
    Visibility state of the partner registration.
    """
    HIDDEN = "Hidden"
    PUBLIC_PREVIEW = "PublicPreview"
    GENERALLY_AVAILABLE = "GenerallyAvailable"


class PersistedConnectionStatus(str, Enum):
    """
    Status of the connection.
    """
    PENDING = "Pending"
    APPROVED = "Approved"
    REJECTED = "Rejected"
    DISCONNECTED = "Disconnected"


class PublicNetworkAccess(str, Enum):
    """
    This determines if traffic is allowed over public network. By default it is enabled. 
    You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class ResourceKind(str, Enum):
    """
    Kind of the resource.
    """
    AZURE = "Azure"
    AZURE_ARC = "AzureArc"


class ResourceProvisioningState(str, Enum):
    """
    Provisioning state of the Private Endpoint Connection.
    """
    CREATING = "Creating"
    UPDATING = "Updating"
    DELETING = "Deleting"
    SUCCEEDED = "Succeeded"
    CANCELED = "Canceled"
    FAILED = "Failed"


class Sku(str, Enum):
    """
    The Sku name of the resource. The possible values are: Basic or Premium.
    """
    BASIC = "Basic"
    PREMIUM = "Premium"
