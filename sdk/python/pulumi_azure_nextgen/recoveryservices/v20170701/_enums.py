# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'BackupManagementType',
    'ProtectionStatus',
]


class BackupManagementType(str, Enum):
    """
    Type of backup management for the backed up item.
    """
    INVALID = "Invalid"
    AZURE_IAAS_VM = "AzureIaasVM"
    MAB = "MAB"
    DPM = "DPM"
    AZURE_BACKUP_SERVER = "AzureBackupServer"
    AZURE_SQL = "AzureSql"
    AZURE_STORAGE = "AzureStorage"
    AZURE_WORKLOAD = "AzureWorkload"
    DEFAULT_BACKUP = "DefaultBackup"


class ProtectionStatus(str, Enum):
    """
    Backup state of this backup item.
    """
    INVALID = "Invalid"
    NOT_PROTECTED = "NotProtected"
    PROTECTING = "Protecting"
    PROTECTED = "Protected"
    PROTECTION_FAILED = "ProtectionFailed"