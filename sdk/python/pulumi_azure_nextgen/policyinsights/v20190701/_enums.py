# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ResourceDiscoveryMode',
]


class ResourceDiscoveryMode(str, Enum):
    """
    The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
    """
    EXISTING_NON_COMPLIANT = "ExistingNonCompliant"
    RE_EVALUATE_COMPLIANCE = "ReEvaluateCompliance"
