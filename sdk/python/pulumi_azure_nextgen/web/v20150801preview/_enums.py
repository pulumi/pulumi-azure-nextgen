# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ConnectionParameterType',
    'PrincipalType',
]


class ConnectionParameterType(str, Enum):
    """
    Type of the parameter
    """
    STRING = "string"
    SECURESTRING = "securestring"
    SECUREOBJECT = "secureobject"
    INT = "int"
    BOOL = "bool"
    OBJECT = "object"
    ARRAY = "array"
    OAUTH_SETTING = "oauthSetting"
    CONNECTION = "connection"


class PrincipalType(str, Enum):
    """
    Principal type
    """
    ACTIVE_DIRECTORY = "ActiveDirectory"
    CONNECTION = "Connection"
    MICROSOFT_ACCOUNT = "MicrosoftAccount"