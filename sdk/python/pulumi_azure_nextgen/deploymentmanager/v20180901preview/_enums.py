# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'DeploymentMode',
]


class DeploymentMode(str, Enum):
    """
    Describes the type of ARM deployment to be performed on the resource.
    """
    INCREMENTAL = "Incremental"
    COMPLETE = "Complete"
