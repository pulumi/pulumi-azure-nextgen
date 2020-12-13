# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'CacheBehavior',
    'CacheType',
    'CookiesOperator',
    'DeliveryRuleAction',
    'DestinationProtocol',
    'GeoFilterActions',
    'HeaderAction',
    'HealthProbeRequestType',
    'HttpVersionOperator',
    'IsDeviceOperator',
    'MatchVariable',
    'OptimizationType',
    'PostArgsOperator',
    'ProbeProtocol',
    'QueryStringBehavior',
    'QueryStringCachingBehavior',
    'QueryStringOperator',
    'RedirectType',
    'RemoteAddressOperator',
    'RequestBodyOperator',
    'RequestHeaderOperator',
    'RequestMethodOperator',
    'RequestUriOperator',
    'ResponseBasedDetectedErrorTypes',
    'SkuName',
    'Transform',
    'UrlFileExtensionOperator',
    'UrlFileNameOperator',
    'UrlPathOperator',
]


class CacheBehavior(str, Enum):
    """
    Caching behavior for the requests
    """
    BYPASS_CACHE = "BypassCache"
    OVERRIDE = "Override"
    SET_IF_MISSING = "SetIfMissing"


class CacheType(str, Enum):
    """
    The level at which the content needs to be cached.
    """
    ALL = "All"


class CookiesOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"


class DeliveryRuleAction(str, Enum):
    """
    The name of the action for the delivery rule.
    """
    CACHE_EXPIRATION = "CacheExpiration"
    CACHE_KEY_QUERY_STRING = "CacheKeyQueryString"
    MODIFY_REQUEST_HEADER = "ModifyRequestHeader"
    MODIFY_RESPONSE_HEADER = "ModifyResponseHeader"
    URL_REDIRECT = "UrlRedirect"
    URL_REWRITE = "UrlRewrite"
    ORIGIN_GROUP_OVERRIDE = "OriginGroupOverride"


class DestinationProtocol(str, Enum):
    """
    Protocol to use for the redirect. The default value is MatchRequest
    """
    MATCH_REQUEST = "MatchRequest"
    HTTP = "Http"
    HTTPS = "Https"


class GeoFilterActions(str, Enum):
    """
    Action of the geo filter, i.e. allow or block access.
    """
    BLOCK = "Block"
    ALLOW = "Allow"


class HeaderAction(str, Enum):
    """
    Action to perform
    """
    APPEND = "Append"
    OVERWRITE = "Overwrite"
    DELETE = "Delete"


class HealthProbeRequestType(str, Enum):
    """
    The type of health probe request that is made.
    """
    NOT_SET = "NotSet"
    GET = "GET"
    HEAD = "HEAD"


class HttpVersionOperator(str, Enum):
    """
    Describes operator to be matched
    """
    EQUAL = "Equal"


class IsDeviceOperator(str, Enum):
    """
    Describes operator to be matched
    """
    EQUAL = "Equal"


class MatchVariable(str, Enum):
    """
    The name of the condition for the delivery rule.
    """
    REMOTE_ADDRESS = "RemoteAddress"
    REQUEST_METHOD = "RequestMethod"
    QUERY_STRING = "QueryString"
    POST_ARGS = "PostArgs"
    REQUEST_URI = "RequestUri"
    REQUEST_HEADER = "RequestHeader"
    REQUEST_BODY = "RequestBody"
    REQUEST_SCHEME = "RequestScheme"
    URL_PATH = "UrlPath"
    URL_FILE_EXTENSION = "UrlFileExtension"
    URL_FILE_NAME = "UrlFileName"
    HTTP_VERSION = "HttpVersion"
    COOKIES = "Cookies"
    IS_DEVICE = "IsDevice"


class OptimizationType(str, Enum):
    """
    Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download, Media services. With this information, CDN can apply scenario driven optimization.
    """
    GENERAL_WEB_DELIVERY = "GeneralWebDelivery"
    GENERAL_MEDIA_STREAMING = "GeneralMediaStreaming"
    VIDEO_ON_DEMAND_MEDIA_STREAMING = "VideoOnDemandMediaStreaming"
    LARGE_FILE_DOWNLOAD = "LargeFileDownload"
    DYNAMIC_SITE_ACCELERATION = "DynamicSiteAcceleration"


class PostArgsOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"


class ProbeProtocol(str, Enum):
    """
    Protocol to use for health probe.
    """
    NOT_SET = "NotSet"
    HTTP = "Http"
    HTTPS = "Https"


class QueryStringBehavior(str, Enum):
    """
    Caching behavior for the requests
    """
    INCLUDE = "Include"
    INCLUDE_ALL = "IncludeAll"
    EXCLUDE = "Exclude"
    EXCLUDE_ALL = "ExcludeAll"


class QueryStringCachingBehavior(str, Enum):
    """
    Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
    """
    IGNORE_QUERY_STRING = "IgnoreQueryString"
    BYPASS_CACHING = "BypassCaching"
    USE_QUERY_STRING = "UseQueryString"
    NOT_SET = "NotSet"


class QueryStringOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"


class RedirectType(str, Enum):
    """
    The redirect type the rule will use when redirecting traffic.
    """
    MOVED = "Moved"
    FOUND = "Found"
    TEMPORARY_REDIRECT = "TemporaryRedirect"
    PERMANENT_REDIRECT = "PermanentRedirect"


class RemoteAddressOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    IP_MATCH = "IPMatch"
    GEO_MATCH = "GeoMatch"


class RequestBodyOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"


class RequestHeaderOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"


class RequestMethodOperator(str, Enum):
    """
    Describes operator to be matched
    """
    EQUAL = "Equal"


class RequestUriOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"


class ResponseBasedDetectedErrorTypes(str, Enum):
    """
    Type of response errors for real user requests for which origin will be deemed unhealthy
    """
    NONE = "None"
    TCP_ERRORS_ONLY = "TcpErrorsOnly"
    TCP_AND_HTTP_ERRORS = "TcpAndHttpErrors"


class SkuName(str, Enum):
    """
    Name of the pricing tier.
    """
    STANDARD_VERIZON = "Standard_Verizon"
    PREMIUM_VERIZON = "Premium_Verizon"
    CUSTOM_VERIZON = "Custom_Verizon"
    STANDARD_AKAMAI = "Standard_Akamai"
    STANDARD_CHINA_CDN = "Standard_ChinaCdn"
    STANDARD_MICROSOFT = "Standard_Microsoft"
    PREMIUM_CHINA_CDN = "Premium_ChinaCdn"


class Transform(str, Enum):
    """
    Describes what transforms are applied before matching
    """
    LOWERCASE = "Lowercase"
    UPPERCASE = "Uppercase"


class UrlFileExtensionOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"


class UrlFileNameOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"


class UrlPathOperator(str, Enum):
    """
    Describes operator to be matched
    """
    ANY = "Any"
    EQUAL = "Equal"
    CONTAINS = "Contains"
    BEGINS_WITH = "BeginsWith"
    ENDS_WITH = "EndsWith"
    LESS_THAN = "LessThan"
    LESS_THAN_OR_EQUAL = "LessThanOrEqual"
    GREATER_THAN = "GreaterThan"
    GREATER_THAN_OR_EQUAL = "GreaterThanOrEqual"
    WILDCARD = "Wildcard"
