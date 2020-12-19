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
    'CacheExpirationActionParametersResponse',
    'DeepCreatedOriginResponse',
    'DeliveryRuleCacheExpirationActionResponse',
    'DeliveryRuleResponse',
    'DeliveryRuleUrlFileExtensionConditionResponse',
    'DeliveryRuleUrlPathConditionResponse',
    'EndpointPropertiesUpdateParametersResponseDeliveryPolicy',
    'GeoFilterResponse',
    'SkuResponse',
    'UrlFileExtensionConditionParametersResponse',
    'UrlPathConditionParametersResponse',
]

@pulumi.output_type
class CacheExpirationActionParametersResponse(dict):
    """
    Defines the parameters for the cache expiration action.
    """
    def __init__(__self__, *,
                 cache_behavior: str,
                 cache_type: str,
                 odata_type: str,
                 cache_duration: Optional[str] = None):
        """
        Defines the parameters for the cache expiration action.
        :param str cache_behavior: Caching behavior for the requests that include query strings.
        :param str cache_type: The level at which the content needs to be cached.
        :param str cache_duration: The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
        """
        pulumi.set(__self__, "cache_behavior", cache_behavior)
        pulumi.set(__self__, "cache_type", cache_type)
        pulumi.set(__self__, "odata_type", odata_type)
        if cache_duration is not None:
            pulumi.set(__self__, "cache_duration", cache_duration)

    @property
    @pulumi.getter(name="cacheBehavior")
    def cache_behavior(self) -> str:
        """
        Caching behavior for the requests that include query strings.
        """
        return pulumi.get(self, "cache_behavior")

    @property
    @pulumi.getter(name="cacheType")
    def cache_type(self) -> str:
        """
        The level at which the content needs to be cached.
        """
        return pulumi.get(self, "cache_type")

    @property
    @pulumi.getter(name="odataType")
    def odata_type(self) -> str:
        return pulumi.get(self, "odata_type")

    @property
    @pulumi.getter(name="cacheDuration")
    def cache_duration(self) -> Optional[str]:
        """
        The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
        """
        return pulumi.get(self, "cache_duration")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DeepCreatedOriginResponse(dict):
    """
    The main origin of CDN content which is added when creating a CDN endpoint.
    """
    def __init__(__self__, *,
                 host_name: str,
                 name: str,
                 http_port: Optional[int] = None,
                 https_port: Optional[int] = None):
        """
        The main origin of CDN content which is added when creating a CDN endpoint.
        :param str host_name: The address of the origin. It can be a domain name, IPv4 address, or IPv6 address.
        :param str name: Origin name
        :param int http_port: The value of the HTTP port. Must be between 1 and 65535
        :param int https_port: The value of the HTTPS port. Must be between 1 and 65535
        """
        pulumi.set(__self__, "host_name", host_name)
        pulumi.set(__self__, "name", name)
        if http_port is not None:
            pulumi.set(__self__, "http_port", http_port)
        if https_port is not None:
            pulumi.set(__self__, "https_port", https_port)

    @property
    @pulumi.getter(name="hostName")
    def host_name(self) -> str:
        """
        The address of the origin. It can be a domain name, IPv4 address, or IPv6 address.
        """
        return pulumi.get(self, "host_name")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Origin name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="httpPort")
    def http_port(self) -> Optional[int]:
        """
        The value of the HTTP port. Must be between 1 and 65535
        """
        return pulumi.get(self, "http_port")

    @property
    @pulumi.getter(name="httpsPort")
    def https_port(self) -> Optional[int]:
        """
        The value of the HTTPS port. Must be between 1 and 65535
        """
        return pulumi.get(self, "https_port")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DeliveryRuleCacheExpirationActionResponse(dict):
    """
    Defines the cache expiration action for the delivery rule.
    """
    def __init__(__self__, *,
                 name: str,
                 parameters: 'outputs.CacheExpirationActionParametersResponse'):
        """
        Defines the cache expiration action for the delivery rule.
        :param str name: The name of the action for the delivery rule.
               Expected value is 'CacheExpiration'.
        :param 'CacheExpirationActionParametersResponseArgs' parameters: Defines the parameters for the action.
        """
        pulumi.set(__self__, "name", 'CacheExpiration')
        pulumi.set(__self__, "parameters", parameters)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the action for the delivery rule.
        Expected value is 'CacheExpiration'.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def parameters(self) -> 'outputs.CacheExpirationActionParametersResponse':
        """
        Defines the parameters for the action.
        """
        return pulumi.get(self, "parameters")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DeliveryRuleResponse(dict):
    """
    A rule that specifies a set of actions and conditions
    """
    def __init__(__self__, *,
                 actions: Sequence['outputs.DeliveryRuleCacheExpirationActionResponse'],
                 order: int,
                 conditions: Optional[Sequence[Any]] = None):
        """
        A rule that specifies a set of actions and conditions
        :param Sequence['DeliveryRuleCacheExpirationActionResponseArgs'] actions: A list of actions that are executed when all the conditions of a rule are satisfied.
        :param int order: The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
        :param Sequence[Union['DeliveryRuleUrlFileExtensionConditionResponseArgs', 'DeliveryRuleUrlPathConditionResponseArgs']] conditions: A list of conditions that must be matched for the actions to be executed
        """
        pulumi.set(__self__, "actions", actions)
        pulumi.set(__self__, "order", order)
        if conditions is not None:
            pulumi.set(__self__, "conditions", conditions)

    @property
    @pulumi.getter
    def actions(self) -> Sequence['outputs.DeliveryRuleCacheExpirationActionResponse']:
        """
        A list of actions that are executed when all the conditions of a rule are satisfied.
        """
        return pulumi.get(self, "actions")

    @property
    @pulumi.getter
    def order(self) -> int:
        """
        The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
        """
        return pulumi.get(self, "order")

    @property
    @pulumi.getter
    def conditions(self) -> Optional[Sequence[Any]]:
        """
        A list of conditions that must be matched for the actions to be executed
        """
        return pulumi.get(self, "conditions")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DeliveryRuleUrlFileExtensionConditionResponse(dict):
    """
    Defines the URL file extension condition for the delivery rule.
    """
    def __init__(__self__, *,
                 name: str,
                 parameters: 'outputs.UrlFileExtensionConditionParametersResponse'):
        """
        Defines the URL file extension condition for the delivery rule.
        :param str name: The name of the condition for the delivery rule.
               Expected value is 'UrlFileExtension'.
        :param 'UrlFileExtensionConditionParametersResponseArgs' parameters: Defines the parameters for the condition.
        """
        pulumi.set(__self__, "name", 'UrlFileExtension')
        pulumi.set(__self__, "parameters", parameters)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the condition for the delivery rule.
        Expected value is 'UrlFileExtension'.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def parameters(self) -> 'outputs.UrlFileExtensionConditionParametersResponse':
        """
        Defines the parameters for the condition.
        """
        return pulumi.get(self, "parameters")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DeliveryRuleUrlPathConditionResponse(dict):
    """
    Defines the URL path condition for the delivery rule.
    """
    def __init__(__self__, *,
                 name: str,
                 parameters: 'outputs.UrlPathConditionParametersResponse'):
        """
        Defines the URL path condition for the delivery rule.
        :param str name: The name of the condition for the delivery rule.
               Expected value is 'UrlPath'.
        :param 'UrlPathConditionParametersResponseArgs' parameters: Defines the parameters for the condition.
        """
        pulumi.set(__self__, "name", 'UrlPath')
        pulumi.set(__self__, "parameters", parameters)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the condition for the delivery rule.
        Expected value is 'UrlPath'.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def parameters(self) -> 'outputs.UrlPathConditionParametersResponse':
        """
        Defines the parameters for the condition.
        """
        return pulumi.get(self, "parameters")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class EndpointPropertiesUpdateParametersResponseDeliveryPolicy(dict):
    """
    A policy that specifies the delivery rules to be used for an endpoint.
    """
    def __init__(__self__, *,
                 rules: Sequence['outputs.DeliveryRuleResponse'],
                 description: Optional[str] = None):
        """
        A policy that specifies the delivery rules to be used for an endpoint.
        :param Sequence['DeliveryRuleResponseArgs'] rules: A list of the delivery rules.
        :param str description: User-friendly description of the policy.
        """
        pulumi.set(__self__, "rules", rules)
        if description is not None:
            pulumi.set(__self__, "description", description)

    @property
    @pulumi.getter
    def rules(self) -> Sequence['outputs.DeliveryRuleResponse']:
        """
        A list of the delivery rules.
        """
        return pulumi.get(self, "rules")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        User-friendly description of the policy.
        """
        return pulumi.get(self, "description")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class GeoFilterResponse(dict):
    """
    Rules defining user's geo access within a CDN endpoint.
    """
    def __init__(__self__, *,
                 action: str,
                 country_codes: Sequence[str],
                 relative_path: str):
        """
        Rules defining user's geo access within a CDN endpoint.
        :param str action: Action of the geo filter, i.e. allow or block access.
        :param Sequence[str] country_codes: Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US.
        :param str relative_path: Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)
        """
        pulumi.set(__self__, "action", action)
        pulumi.set(__self__, "country_codes", country_codes)
        pulumi.set(__self__, "relative_path", relative_path)

    @property
    @pulumi.getter
    def action(self) -> str:
        """
        Action of the geo filter, i.e. allow or block access.
        """
        return pulumi.get(self, "action")

    @property
    @pulumi.getter(name="countryCodes")
    def country_codes(self) -> Sequence[str]:
        """
        Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US.
        """
        return pulumi.get(self, "country_codes")

    @property
    @pulumi.getter(name="relativePath")
    def relative_path(self) -> str:
        """
        Relative path applicable to geo filter. (e.g. '/mypictures', '/mypicture/kitty.jpg', and etc.)
        """
        return pulumi.get(self, "relative_path")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SkuResponse(dict):
    """
    The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
    """
    def __init__(__self__, *,
                 name: Optional[str] = None):
        """
        The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
        :param str name: Name of the pricing tier.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Name of the pricing tier.
        """
        return pulumi.get(self, "name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class UrlFileExtensionConditionParametersResponse(dict):
    """
    Defines the parameters for the URL file extension condition.
    """
    def __init__(__self__, *,
                 extensions: Sequence[str],
                 odata_type: str):
        """
        Defines the parameters for the URL file extension condition.
        :param Sequence[str] extensions: A list of extensions for the condition of the delivery rule.
        """
        pulumi.set(__self__, "extensions", extensions)
        pulumi.set(__self__, "odata_type", odata_type)

    @property
    @pulumi.getter
    def extensions(self) -> Sequence[str]:
        """
        A list of extensions for the condition of the delivery rule.
        """
        return pulumi.get(self, "extensions")

    @property
    @pulumi.getter(name="odataType")
    def odata_type(self) -> str:
        return pulumi.get(self, "odata_type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class UrlPathConditionParametersResponse(dict):
    """
    Defines the parameters for the URL path condition.
    """
    def __init__(__self__, *,
                 match_type: str,
                 odata_type: str,
                 path: str):
        """
        Defines the parameters for the URL path condition.
        :param str match_type: The match type for the condition of the delivery rule
        :param str path: A URL path for the condition of the delivery rule
        """
        pulumi.set(__self__, "match_type", match_type)
        pulumi.set(__self__, "odata_type", odata_type)
        pulumi.set(__self__, "path", path)

    @property
    @pulumi.getter(name="matchType")
    def match_type(self) -> str:
        """
        The match type for the condition of the delivery rule
        """
        return pulumi.get(self, "match_type")

    @property
    @pulumi.getter(name="odataType")
    def odata_type(self) -> str:
        return pulumi.get(self, "odata_type")

    @property
    @pulumi.getter
    def path(self) -> str:
        """
        A URL path for the condition of the delivery rule
        """
        return pulumi.get(self, "path")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


