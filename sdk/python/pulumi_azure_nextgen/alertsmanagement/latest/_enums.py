# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AlertRuleState',
    'Severity',
]


class AlertRuleState(str, Enum):
    """
    The alert rule state.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class Severity(str, Enum):
    """
    The alert rule severity.
    """
    SEV0 = "Sev0"
    SEV1 = "Sev1"
    SEV2 = "Sev2"
    SEV3 = "Sev3"
    SEV4 = "Sev4"
