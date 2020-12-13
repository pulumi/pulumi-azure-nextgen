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
    'NetworkACLArgs',
    'PrivateEndpointArgs',
    'PrivateEndpointACLArgs',
    'PrivateLinkServiceConnectionStateArgs',
    'ResourceSkuArgs',
    'ServerlessUpstreamSettingsArgs',
    'SignalRCorsSettingsArgs',
    'SignalRFeatureArgs',
    'SignalRNetworkACLsArgs',
    'UpstreamTemplateArgs',
]

@pulumi.input_type
class NetworkACLArgs:
    def __init__(__self__, *,
                 allow: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]] = None,
                 deny: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]] = None):
        """
        Network ACL
        :param pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]] allow: Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
        :param pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]] deny: Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
        """
        if allow is not None:
            pulumi.set(__self__, "allow", allow)
        if deny is not None:
            pulumi.set(__self__, "deny", deny)

    @property
    @pulumi.getter
    def allow(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]]:
        """
        Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
        """
        return pulumi.get(self, "allow")

    @allow.setter
    def allow(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]]):
        pulumi.set(self, "allow", value)

    @property
    @pulumi.getter
    def deny(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]]:
        """
        Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
        """
        return pulumi.get(self, "deny")

    @deny.setter
    def deny(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]]):
        pulumi.set(self, "deny", value)


@pulumi.input_type
class PrivateEndpointArgs:
    def __init__(__self__, *,
                 id: Optional[pulumi.Input[str]] = None):
        """
        Private endpoint
        :param pulumi.Input[str] id: Full qualified Id of the private endpoint
        """
        if id is not None:
            pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> Optional[pulumi.Input[str]]:
        """
        Full qualified Id of the private endpoint
        """
        return pulumi.get(self, "id")

    @id.setter
    def id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "id", value)


@pulumi.input_type
class PrivateEndpointACLArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[str],
                 allow: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]] = None,
                 deny: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]] = None):
        """
        ACL for a private endpoint
        :param pulumi.Input[str] name: Name of the private endpoint connection
        :param pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]] allow: Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
        :param pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]] deny: Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
        """
        pulumi.set(__self__, "name", name)
        if allow is not None:
            pulumi.set(__self__, "allow", allow)
        if deny is not None:
            pulumi.set(__self__, "deny", deny)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        Name of the private endpoint connection
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def allow(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]]:
        """
        Allowed request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
        """
        return pulumi.get(self, "allow")

    @allow.setter
    def allow(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]]):
        pulumi.set(self, "allow", value)

    @property
    @pulumi.getter
    def deny(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]]:
        """
        Denied request types. The value can be one or more of: ClientConnection, ServerConnection, RESTAPI.
        """
        return pulumi.get(self, "deny")

    @deny.setter
    def deny(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[Union[str, 'SignalRRequestType']]]]]):
        pulumi.set(self, "deny", value)


@pulumi.input_type
class PrivateLinkServiceConnectionStateArgs:
    def __init__(__self__, *,
                 actions_required: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 status: Optional[pulumi.Input[Union[str, 'PrivateLinkServiceConnectionStatus']]] = None):
        """
        Connection state of the private endpoint connection
        :param pulumi.Input[str] actions_required: A message indicating if changes on the service provider require any updates on the consumer.
        :param pulumi.Input[str] description: The reason for approval/rejection of the connection.
        :param pulumi.Input[Union[str, 'PrivateLinkServiceConnectionStatus']] status: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
        """
        if actions_required is not None:
            pulumi.set(__self__, "actions_required", actions_required)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter(name="actionsRequired")
    def actions_required(self) -> Optional[pulumi.Input[str]]:
        """
        A message indicating if changes on the service provider require any updates on the consumer.
        """
        return pulumi.get(self, "actions_required")

    @actions_required.setter
    def actions_required(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "actions_required", value)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        The reason for approval/rejection of the connection.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)

    @property
    @pulumi.getter
    def status(self) -> Optional[pulumi.Input[Union[str, 'PrivateLinkServiceConnectionStatus']]]:
        """
        Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
        """
        return pulumi.get(self, "status")

    @status.setter
    def status(self, value: Optional[pulumi.Input[Union[str, 'PrivateLinkServiceConnectionStatus']]]):
        pulumi.set(self, "status", value)


@pulumi.input_type
class ResourceSkuArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[str],
                 capacity: Optional[pulumi.Input[int]] = None,
                 family: Optional[pulumi.Input[str]] = None,
                 size: Optional[pulumi.Input[str]] = None,
                 tier: Optional[pulumi.Input[Union[str, 'SignalRSkuTier']]] = None):
        """
        The billing information of the SignalR resource.
        :param pulumi.Input[str] name: The name of the SKU. Required.
               
               Allowed values: Standard_S1, Free_F1
        :param pulumi.Input[int] capacity: Optional, integer. The unit count of SignalR resource. 1 by default.
               
               If present, following values are allowed:
                   Free: 1
                   Standard: 1,2,5,10,20,50,100
        :param pulumi.Input[str] family: Optional string. For future use.
        :param pulumi.Input[str] size: Optional string. For future use.
        :param pulumi.Input[Union[str, 'SignalRSkuTier']] tier: Optional tier of this particular SKU. 'Standard' or 'Free'. 
               
               `Basic` is deprecated, use `Standard` instead.
        """
        pulumi.set(__self__, "name", name)
        if capacity is not None:
            pulumi.set(__self__, "capacity", capacity)
        if family is not None:
            pulumi.set(__self__, "family", family)
        if size is not None:
            pulumi.set(__self__, "size", size)
        if tier is not None:
            pulumi.set(__self__, "tier", tier)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        The name of the SKU. Required.
        
        Allowed values: Standard_S1, Free_F1
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def capacity(self) -> Optional[pulumi.Input[int]]:
        """
        Optional, integer. The unit count of SignalR resource. 1 by default.
        
        If present, following values are allowed:
            Free: 1
            Standard: 1,2,5,10,20,50,100
        """
        return pulumi.get(self, "capacity")

    @capacity.setter
    def capacity(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "capacity", value)

    @property
    @pulumi.getter
    def family(self) -> Optional[pulumi.Input[str]]:
        """
        Optional string. For future use.
        """
        return pulumi.get(self, "family")

    @family.setter
    def family(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "family", value)

    @property
    @pulumi.getter
    def size(self) -> Optional[pulumi.Input[str]]:
        """
        Optional string. For future use.
        """
        return pulumi.get(self, "size")

    @size.setter
    def size(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "size", value)

    @property
    @pulumi.getter
    def tier(self) -> Optional[pulumi.Input[Union[str, 'SignalRSkuTier']]]:
        """
        Optional tier of this particular SKU. 'Standard' or 'Free'. 
        
        `Basic` is deprecated, use `Standard` instead.
        """
        return pulumi.get(self, "tier")

    @tier.setter
    def tier(self, value: Optional[pulumi.Input[Union[str, 'SignalRSkuTier']]]):
        pulumi.set(self, "tier", value)


@pulumi.input_type
class ServerlessUpstreamSettingsArgs:
    def __init__(__self__, *,
                 templates: Optional[pulumi.Input[Sequence[pulumi.Input['UpstreamTemplateArgs']]]] = None):
        """
        The settings for the Upstream when the Azure SignalR is in server-less mode.
        :param pulumi.Input[Sequence[pulumi.Input['UpstreamTemplateArgs']]] templates: Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects.
        """
        if templates is not None:
            pulumi.set(__self__, "templates", templates)

    @property
    @pulumi.getter
    def templates(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['UpstreamTemplateArgs']]]]:
        """
        Gets or sets the list of Upstream URL templates. Order matters, and the first matching template takes effects.
        """
        return pulumi.get(self, "templates")

    @templates.setter
    def templates(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['UpstreamTemplateArgs']]]]):
        pulumi.set(self, "templates", value)


@pulumi.input_type
class SignalRCorsSettingsArgs:
    def __init__(__self__, *,
                 allowed_origins: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None):
        """
        Cross-Origin Resource Sharing (CORS) settings.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] allowed_origins: Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.
        """
        if allowed_origins is not None:
            pulumi.set(__self__, "allowed_origins", allowed_origins)

    @property
    @pulumi.getter(name="allowedOrigins")
    def allowed_origins(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.
        """
        return pulumi.get(self, "allowed_origins")

    @allowed_origins.setter
    def allowed_origins(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "allowed_origins", value)


@pulumi.input_type
class SignalRFeatureArgs:
    def __init__(__self__, *,
                 flag: pulumi.Input[Union[str, 'FeatureFlags']],
                 value: pulumi.Input[str],
                 properties: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None):
        """
        Feature of a SignalR resource, which controls the SignalR runtime behavior.
        :param pulumi.Input[Union[str, 'FeatureFlags']] flag: FeatureFlags is the supported features of Azure SignalR service.
               - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
               - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
        :param pulumi.Input[str] value: Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] properties: Optional properties related to this feature.
        """
        pulumi.set(__self__, "flag", flag)
        pulumi.set(__self__, "value", value)
        if properties is not None:
            pulumi.set(__self__, "properties", properties)

    @property
    @pulumi.getter
    def flag(self) -> pulumi.Input[Union[str, 'FeatureFlags']]:
        """
        FeatureFlags is the supported features of Azure SignalR service.
        - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
        - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
        """
        return pulumi.get(self, "flag")

    @flag.setter
    def flag(self, value: pulumi.Input[Union[str, 'FeatureFlags']]):
        pulumi.set(self, "flag", value)

    @property
    @pulumi.getter
    def value(self) -> pulumi.Input[str]:
        """
        Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
        """
        return pulumi.get(self, "value")

    @value.setter
    def value(self, value: pulumi.Input[str]):
        pulumi.set(self, "value", value)

    @property
    @pulumi.getter
    def properties(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        """
        Optional properties related to this feature.
        """
        return pulumi.get(self, "properties")

    @properties.setter
    def properties(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "properties", value)


@pulumi.input_type
class SignalRNetworkACLsArgs:
    def __init__(__self__, *,
                 default_action: Optional[pulumi.Input[Union[str, 'ACLAction']]] = None,
                 private_endpoints: Optional[pulumi.Input[Sequence[pulumi.Input['PrivateEndpointACLArgs']]]] = None,
                 public_network: Optional[pulumi.Input['NetworkACLArgs']] = None):
        """
        Network ACLs for SignalR
        :param pulumi.Input[Union[str, 'ACLAction']] default_action: Default action when no other rule matches
        :param pulumi.Input[Sequence[pulumi.Input['PrivateEndpointACLArgs']]] private_endpoints: ACLs for requests from private endpoints
        :param pulumi.Input['NetworkACLArgs'] public_network: ACL for requests from public network
        """
        if default_action is not None:
            pulumi.set(__self__, "default_action", default_action)
        if private_endpoints is not None:
            pulumi.set(__self__, "private_endpoints", private_endpoints)
        if public_network is not None:
            pulumi.set(__self__, "public_network", public_network)

    @property
    @pulumi.getter(name="defaultAction")
    def default_action(self) -> Optional[pulumi.Input[Union[str, 'ACLAction']]]:
        """
        Default action when no other rule matches
        """
        return pulumi.get(self, "default_action")

    @default_action.setter
    def default_action(self, value: Optional[pulumi.Input[Union[str, 'ACLAction']]]):
        pulumi.set(self, "default_action", value)

    @property
    @pulumi.getter(name="privateEndpoints")
    def private_endpoints(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['PrivateEndpointACLArgs']]]]:
        """
        ACLs for requests from private endpoints
        """
        return pulumi.get(self, "private_endpoints")

    @private_endpoints.setter
    def private_endpoints(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['PrivateEndpointACLArgs']]]]):
        pulumi.set(self, "private_endpoints", value)

    @property
    @pulumi.getter(name="publicNetwork")
    def public_network(self) -> Optional[pulumi.Input['NetworkACLArgs']]:
        """
        ACL for requests from public network
        """
        return pulumi.get(self, "public_network")

    @public_network.setter
    def public_network(self, value: Optional[pulumi.Input['NetworkACLArgs']]):
        pulumi.set(self, "public_network", value)


@pulumi.input_type
class UpstreamTemplateArgs:
    def __init__(__self__, *,
                 url_template: pulumi.Input[str],
                 category_pattern: Optional[pulumi.Input[str]] = None,
                 event_pattern: Optional[pulumi.Input[str]] = None,
                 hub_pattern: Optional[pulumi.Input[str]] = None):
        """
        Upstream template item settings. It defines the Upstream URL of the incoming requests.
        The template defines the pattern of the event, the hub or the category of the incoming request that matches current URL template.
        :param pulumi.Input[str] url_template: Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.
               For example, if the urlTemplate is `http://example.com/{hub}/api/{event}`, with a client request from hub `chat` connects, it will first POST to this URL: `http://example.com/chat/api/connect`.
        :param pulumi.Input[str] category_pattern: Gets or sets the matching pattern for category names. If not set, it matches any category.
               There are 3 kind of patterns supported:
                   1. "*", it to matches any category name
                   2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages"
                   3. The single category name, for example, "connections", it matches the category "connections"
        :param pulumi.Input[str] event_pattern: Gets or sets the matching pattern for event names. If not set, it matches any event.
               There are 3 kind of patterns supported:
                   1. "*", it to matches any event name
                   2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect"
                   3. The single event name, for example, "connect", it matches "connect"
        :param pulumi.Input[str] hub_pattern: Gets or sets the matching pattern for hub names. If not set, it matches any hub.
               There are 3 kind of patterns supported:
                   1. "*", it to matches any hub name
                   2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2"
                   3. The single hub name, for example, "hub1", it matches "hub1"
        """
        pulumi.set(__self__, "url_template", url_template)
        if category_pattern is not None:
            pulumi.set(__self__, "category_pattern", category_pattern)
        if event_pattern is not None:
            pulumi.set(__self__, "event_pattern", event_pattern)
        if hub_pattern is not None:
            pulumi.set(__self__, "hub_pattern", hub_pattern)

    @property
    @pulumi.getter(name="urlTemplate")
    def url_template(self) -> pulumi.Input[str]:
        """
        Gets or sets the Upstream URL template. You can use 3 predefined parameters {hub}, {category} {event} inside the template, the value of the Upstream URL is dynamically calculated when the client request comes in.
        For example, if the urlTemplate is `http://example.com/{hub}/api/{event}`, with a client request from hub `chat` connects, it will first POST to this URL: `http://example.com/chat/api/connect`.
        """
        return pulumi.get(self, "url_template")

    @url_template.setter
    def url_template(self, value: pulumi.Input[str]):
        pulumi.set(self, "url_template", value)

    @property
    @pulumi.getter(name="categoryPattern")
    def category_pattern(self) -> Optional[pulumi.Input[str]]:
        """
        Gets or sets the matching pattern for category names. If not set, it matches any category.
        There are 3 kind of patterns supported:
            1. "*", it to matches any category name
            2. Combine multiple categories with ",", for example "connections,messages", it matches category "connections" and "messages"
            3. The single category name, for example, "connections", it matches the category "connections"
        """
        return pulumi.get(self, "category_pattern")

    @category_pattern.setter
    def category_pattern(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "category_pattern", value)

    @property
    @pulumi.getter(name="eventPattern")
    def event_pattern(self) -> Optional[pulumi.Input[str]]:
        """
        Gets or sets the matching pattern for event names. If not set, it matches any event.
        There are 3 kind of patterns supported:
            1. "*", it to matches any event name
            2. Combine multiple events with ",", for example "connect,disconnect", it matches event "connect" and "disconnect"
            3. The single event name, for example, "connect", it matches "connect"
        """
        return pulumi.get(self, "event_pattern")

    @event_pattern.setter
    def event_pattern(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "event_pattern", value)

    @property
    @pulumi.getter(name="hubPattern")
    def hub_pattern(self) -> Optional[pulumi.Input[str]]:
        """
        Gets or sets the matching pattern for hub names. If not set, it matches any hub.
        There are 3 kind of patterns supported:
            1. "*", it to matches any hub name
            2. Combine multiple hubs with ",", for example "hub1,hub2", it matches "hub1" and "hub2"
            3. The single hub name, for example, "hub1", it matches "hub1"
        """
        return pulumi.get(self, "hub_pattern")

    @hub_pattern.setter
    def hub_pattern(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "hub_pattern", value)


