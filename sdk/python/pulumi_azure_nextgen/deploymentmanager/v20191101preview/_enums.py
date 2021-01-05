# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'DeploymentMode',
    'RestAuthLocation',
    'RestAuthType',
    'RestMatchQuantifier',
    'RestRequestMethod',
    'StepType',
]


class DeploymentMode(str, Enum):
    """
    Describes the type of ARM deployment to be performed on the resource.
    """
    INCREMENTAL = "Incremental"
    COMPLETE = "Complete"


class RestAuthLocation(str, Enum):
    """
    The location of the authentication key/value pair in the request.
    """
    QUERY = "Query"
    HEADER = "Header"


class RestAuthType(str, Enum):
    """
    The authentication type.
    """
    API_KEY = "ApiKey"
    ROLLOUT_IDENTITY = "RolloutIdentity"


class RestMatchQuantifier(str, Enum):
    """
    Indicates whether any or all of the expressions should match with the response content.
    """
    ALL = "All"
    ANY = "Any"


class RestRequestMethod(str, Enum):
    """
    The HTTP method to use for the request.
    """
    GET = "GET"
    POST = "POST"


class StepType(str, Enum):
    """
    The type of step.
    """
    WAIT = "Wait"
    HEALTH_CHECK = "HealthCheck"