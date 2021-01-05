# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AlwaysLog',
    'ApiType',
    'ApimIdentityType',
    'AppType',
    'AuthorizationMethod',
    'BackendProtocol',
    'BearerTokenSendingMethod',
    'BearerTokenSendingMethods',
    'ClientAuthenticationMethod',
    'Confirmation',
    'ContentFormat',
    'GrantType',
    'GroupType',
    'HostnameType',
    'HttpCorrelationProtocol',
    'IdentityProviderType',
    'LoggerType',
    'PolicyContentFormat',
    'ProductState',
    'Protocol',
    'ProvisioningState',
    'SamplingType',
    'SkuType',
    'SoapApiType',
    'State',
    'SubscriptionState',
    'UserState',
    'Verbosity',
    'VersioningScheme',
    'VirtualNetworkType',
]


class AlwaysLog(str, Enum):
    """
    Specifies for what type of messages sampling settings should not apply.
    """
    ALL_ERRORS = "allErrors"


class ApiType(str, Enum):
    """
    Type of API.
    """
    HTTP = "http"
    SOAP = "soap"


class ApimIdentityType(str, Enum):
    """
    The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
    """
    SYSTEM_ASSIGNED = "SystemAssigned"
    USER_ASSIGNED = "UserAssigned"
    SYSTEM_ASSIGNED_USER_ASSIGNED = "SystemAssigned, UserAssigned"
    NONE = "None"


class AppType(str, Enum):
    """
    Determines the type of application which send the create user request. Default is old publisher portal.
    """
    DEVELOPER_PORTAL = "developerPortal"


class AuthorizationMethod(str, Enum):
    HEAD = "HEAD"
    OPTIONS = "OPTIONS"
    TRACE = "TRACE"
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    PATCH = "PATCH"
    DELETE = "DELETE"


class BackendProtocol(str, Enum):
    """
    Backend communication protocol.
    """
    HTTP = "http"
    SOAP = "soap"


class BearerTokenSendingMethod(str, Enum):
    AUTHORIZATION_HEADER = "authorizationHeader"
    QUERY = "query"


class BearerTokenSendingMethods(str, Enum):
    """
    Form of an authorization grant, which the client uses to request the access token.
    """
    AUTHORIZATION_HEADER = "authorizationHeader"
    QUERY = "query"


class ClientAuthenticationMethod(str, Enum):
    BASIC = "Basic"
    BODY = "Body"


class Confirmation(str, Enum):
    """
    Determines the type of confirmation e-mail that will be sent to the newly created user.
    """
    SIGNUP = "signup"
    INVITE = "invite"


class ContentFormat(str, Enum):
    """
    Format of the Content in which the API is getting imported.
    """
    WADL_XML = "wadl-xml"
    WADL_LINK_JSON = "wadl-link-json"
    SWAGGER_JSON = "swagger-json"
    SWAGGER_LINK_JSON = "swagger-link-json"
    WSDL = "wsdl"
    WSDL_LINK = "wsdl-link"
    OPENAPI = "openapi"
    OPENAPI_JSON = "openapi+json"
    OPENAPI_LINK = "openapi-link"
    OPENAPI_JSON_LINK = "openapi+json-link"


class GrantType(str, Enum):
    AUTHORIZATION_CODE = "authorizationCode"
    IMPLICIT = "implicit"
    RESOURCE_OWNER_PASSWORD = "resourceOwnerPassword"
    CLIENT_CREDENTIALS = "clientCredentials"


class GroupType(str, Enum):
    """
    Group type.
    """
    CUSTOM = "custom"
    SYSTEM = "system"
    EXTERNAL = "external"


class HostnameType(str, Enum):
    """
    Hostname type.
    """
    PROXY = "Proxy"
    PORTAL = "Portal"
    MANAGEMENT = "Management"
    SCM = "Scm"
    DEVELOPER_PORTAL = "DeveloperPortal"


class HttpCorrelationProtocol(str, Enum):
    """
    Sets correlation protocol to use for Application Insights diagnostics.
    """
    NONE = "None"
    LEGACY = "Legacy"
    W3_C = "W3C"


class IdentityProviderType(str, Enum):
    """
    Identity Provider Type identifier.
    """
    FACEBOOK = "facebook"
    GOOGLE = "google"
    MICROSOFT = "microsoft"
    TWITTER = "twitter"
    AAD = "aad"
    AAD_B2_C = "aadB2C"


class LoggerType(str, Enum):
    """
    Logger type.
    """
    AZURE_EVENT_HUB = "azureEventHub"
    APPLICATION_INSIGHTS = "applicationInsights"


class PolicyContentFormat(str, Enum):
    """
    Format of the policyContent.
    """
    XML = "xml"
    XML_LINK = "xml-link"
    RAWXML = "rawxml"
    RAWXML_LINK = "rawxml-link"


class ProductState(str, Enum):
    """
    whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
    """
    NOT_PUBLISHED = "notPublished"
    PUBLISHED = "published"


class Protocol(str, Enum):
    HTTP = "http"
    HTTPS = "https"


class ProvisioningState(str, Enum):
    """
    Provisioning state.
    """
    CREATED = "created"


class SamplingType(str, Enum):
    """
    Sampling type.
    """
    FIXED = "fixed"


class SkuType(str, Enum):
    """
    Name of the Sku.
    """
    DEVELOPER = "Developer"
    STANDARD = "Standard"
    PREMIUM = "Premium"
    BASIC = "Basic"
    CONSUMPTION = "Consumption"


class SoapApiType(str, Enum):
    """
    Type of Api to create. 
     * `http` creates a SOAP to REST API 
     * `soap` creates a SOAP pass-through API .
    """
    SOAP_TO_REST = "http"
    SOAP_PASS_THROUGH = "soap"


class State(str, Enum):
    """
    Status of the issue.
    """
    PROPOSED = "proposed"
    OPEN = "open"
    REMOVED = "removed"
    RESOLVED = "resolved"
    CLOSED = "closed"


class SubscriptionState(str, Enum):
    """
    Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
    """
    SUSPENDED = "suspended"
    ACTIVE = "active"
    EXPIRED = "expired"
    SUBMITTED = "submitted"
    REJECTED = "rejected"
    CANCELLED = "cancelled"


class UserState(str, Enum):
    """
    Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
    """
    ACTIVE = "active"
    BLOCKED = "blocked"
    PENDING = "pending"
    DELETED = "deleted"


class Verbosity(str, Enum):
    """
    The verbosity level applied to traces emitted by trace policies.
    """
    VERBOSE = "verbose"
    INFORMATION = "information"
    ERROR = "error"


class VersioningScheme(str, Enum):
    """
    An value that determines where the API Version identifer will be located in a HTTP request.
    """
    SEGMENT = "Segment"
    QUERY = "Query"
    HEADER = "Header"


class VirtualNetworkType(str, Enum):
    """
    The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
    """
    NONE = "None"
    EXTERNAL = "External"
    INTERNAL = "Internal"