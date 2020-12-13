# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ExternalAccess',
    'FilteredSync',
    'Ldaps',
    'NotifyDcAdmins',
    'NotifyGlobalAdmins',
    'NtlmV1',
    'SyncNtlmPasswords',
    'TlsV1',
]


class ExternalAccess(str, Enum):
    """
    A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class FilteredSync(str, Enum):
    """
    Enabled or Disabled flag to turn on Group-based filtered sync
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class Ldaps(str, Enum):
    """
    A flag to determine whether or not Secure LDAP is enabled or disabled.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class NotifyDcAdmins(str, Enum):
    """
    Should domain controller admins be notified
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class NotifyGlobalAdmins(str, Enum):
    """
    Should global admins be notified
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class NtlmV1(str, Enum):
    """
    A flag to determine whether or not NtlmV1 is enabled or disabled.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class SyncNtlmPasswords(str, Enum):
    """
    A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class TlsV1(str, Enum):
    """
    A flag to determine whether or not TlsV1 is enabled or disabled.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"
