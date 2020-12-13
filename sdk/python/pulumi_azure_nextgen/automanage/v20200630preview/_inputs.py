# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'AccountIdentityArgs',
    'ConfigurationProfilePreferenceAntiMalwareArgs',
    'ConfigurationProfilePreferencePropertiesArgs',
    'ConfigurationProfilePreferenceVmBackupArgs',
]

@pulumi.input_type
class AccountIdentityArgs:
    def __init__(__self__, *,
                 type: Optional[pulumi.Input['ResourceIdentityType']] = None):
        """
        Identity for the Automanage account.
        :param pulumi.Input['ResourceIdentityType'] type: The type of identity used for the Automanage account. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
        """
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input['ResourceIdentityType']]:
        """
        The type of identity used for the Automanage account. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input['ResourceIdentityType']]):
        pulumi.set(self, "type", value)


@pulumi.input_type
class ConfigurationProfilePreferenceAntiMalwareArgs:
    def __init__(__self__, *,
                 enable_real_time_protection: Optional[pulumi.Input[Union[str, 'EnableRealTimeProtection']]] = None,
                 exclusions: Optional[Any] = None,
                 run_scheduled_scan: Optional[pulumi.Input[Union[str, 'RunScheduledScan']]] = None,
                 scan_day: Optional[pulumi.Input[str]] = None,
                 scan_time_in_minutes: Optional[pulumi.Input[str]] = None,
                 scan_type: Optional[pulumi.Input[Union[str, 'ScanType']]] = None):
        """
        Automanage configuration profile Antimalware preferences.
        :param pulumi.Input[Union[str, 'EnableRealTimeProtection']] enable_real_time_protection: Enables or disables Real Time Protection
        :param Any exclusions: Extensions, Paths and Processes that must be excluded from scan
        :param pulumi.Input[Union[str, 'RunScheduledScan']] run_scheduled_scan: Enables or disables a periodic scan for antimalware
        :param pulumi.Input[str] scan_day: Schedule scan settings day
        :param pulumi.Input[str] scan_time_in_minutes: Schedule scan settings time
        :param pulumi.Input[Union[str, 'ScanType']] scan_type: Type of scheduled scan
        """
        if enable_real_time_protection is not None:
            pulumi.set(__self__, "enable_real_time_protection", enable_real_time_protection)
        if exclusions is not None:
            pulumi.set(__self__, "exclusions", exclusions)
        if run_scheduled_scan is not None:
            pulumi.set(__self__, "run_scheduled_scan", run_scheduled_scan)
        if scan_day is not None:
            pulumi.set(__self__, "scan_day", scan_day)
        if scan_time_in_minutes is not None:
            pulumi.set(__self__, "scan_time_in_minutes", scan_time_in_minutes)
        if scan_type is not None:
            pulumi.set(__self__, "scan_type", scan_type)

    @property
    @pulumi.getter(name="enableRealTimeProtection")
    def enable_real_time_protection(self) -> Optional[pulumi.Input[Union[str, 'EnableRealTimeProtection']]]:
        """
        Enables or disables Real Time Protection
        """
        return pulumi.get(self, "enable_real_time_protection")

    @enable_real_time_protection.setter
    def enable_real_time_protection(self, value: Optional[pulumi.Input[Union[str, 'EnableRealTimeProtection']]]):
        pulumi.set(self, "enable_real_time_protection", value)

    @property
    @pulumi.getter
    def exclusions(self) -> Optional[Any]:
        """
        Extensions, Paths and Processes that must be excluded from scan
        """
        return pulumi.get(self, "exclusions")

    @exclusions.setter
    def exclusions(self, value: Optional[Any]):
        pulumi.set(self, "exclusions", value)

    @property
    @pulumi.getter(name="runScheduledScan")
    def run_scheduled_scan(self) -> Optional[pulumi.Input[Union[str, 'RunScheduledScan']]]:
        """
        Enables or disables a periodic scan for antimalware
        """
        return pulumi.get(self, "run_scheduled_scan")

    @run_scheduled_scan.setter
    def run_scheduled_scan(self, value: Optional[pulumi.Input[Union[str, 'RunScheduledScan']]]):
        pulumi.set(self, "run_scheduled_scan", value)

    @property
    @pulumi.getter(name="scanDay")
    def scan_day(self) -> Optional[pulumi.Input[str]]:
        """
        Schedule scan settings day
        """
        return pulumi.get(self, "scan_day")

    @scan_day.setter
    def scan_day(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "scan_day", value)

    @property
    @pulumi.getter(name="scanTimeInMinutes")
    def scan_time_in_minutes(self) -> Optional[pulumi.Input[str]]:
        """
        Schedule scan settings time
        """
        return pulumi.get(self, "scan_time_in_minutes")

    @scan_time_in_minutes.setter
    def scan_time_in_minutes(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "scan_time_in_minutes", value)

    @property
    @pulumi.getter(name="scanType")
    def scan_type(self) -> Optional[pulumi.Input[Union[str, 'ScanType']]]:
        """
        Type of scheduled scan
        """
        return pulumi.get(self, "scan_type")

    @scan_type.setter
    def scan_type(self, value: Optional[pulumi.Input[Union[str, 'ScanType']]]):
        pulumi.set(self, "scan_type", value)


@pulumi.input_type
class ConfigurationProfilePreferencePropertiesArgs:
    def __init__(__self__, *,
                 anti_malware: Optional[pulumi.Input['ConfigurationProfilePreferenceAntiMalwareArgs']] = None,
                 vm_backup: Optional[pulumi.Input['ConfigurationProfilePreferenceVmBackupArgs']] = None):
        """
        Automanage configuration profile preference properties.
        :param pulumi.Input['ConfigurationProfilePreferenceAntiMalwareArgs'] anti_malware: The custom preferences for Azure Antimalware.
        :param pulumi.Input['ConfigurationProfilePreferenceVmBackupArgs'] vm_backup: The custom preferences for Azure VM Backup.
        """
        if anti_malware is not None:
            pulumi.set(__self__, "anti_malware", anti_malware)
        if vm_backup is not None:
            pulumi.set(__self__, "vm_backup", vm_backup)

    @property
    @pulumi.getter(name="antiMalware")
    def anti_malware(self) -> Optional[pulumi.Input['ConfigurationProfilePreferenceAntiMalwareArgs']]:
        """
        The custom preferences for Azure Antimalware.
        """
        return pulumi.get(self, "anti_malware")

    @anti_malware.setter
    def anti_malware(self, value: Optional[pulumi.Input['ConfigurationProfilePreferenceAntiMalwareArgs']]):
        pulumi.set(self, "anti_malware", value)

    @property
    @pulumi.getter(name="vmBackup")
    def vm_backup(self) -> Optional[pulumi.Input['ConfigurationProfilePreferenceVmBackupArgs']]:
        """
        The custom preferences for Azure VM Backup.
        """
        return pulumi.get(self, "vm_backup")

    @vm_backup.setter
    def vm_backup(self, value: Optional[pulumi.Input['ConfigurationProfilePreferenceVmBackupArgs']]):
        pulumi.set(self, "vm_backup", value)


@pulumi.input_type
class ConfigurationProfilePreferenceVmBackupArgs:
    def __init__(__self__, *,
                 instant_rp_retention_range_in_days: Optional[pulumi.Input[int]] = None,
                 retention_policy: Optional[pulumi.Input[str]] = None,
                 schedule_policy: Optional[pulumi.Input[str]] = None,
                 time_zone: Optional[pulumi.Input[str]] = None):
        """
        Automanage configuration profile VM Backup preferences.
        :param pulumi.Input[int] instant_rp_retention_range_in_days: Instant RP retention policy range in days
        :param pulumi.Input[str] retention_policy: Retention policy with the details on backup copy retention ranges.
        :param pulumi.Input[str] schedule_policy: Backup schedule specified as part of backup policy.
        :param pulumi.Input[str] time_zone: TimeZone optional input as string. For example: Pacific Standard Time
        """
        if instant_rp_retention_range_in_days is not None:
            pulumi.set(__self__, "instant_rp_retention_range_in_days", instant_rp_retention_range_in_days)
        if retention_policy is not None:
            pulumi.set(__self__, "retention_policy", retention_policy)
        if schedule_policy is not None:
            pulumi.set(__self__, "schedule_policy", schedule_policy)
        if time_zone is not None:
            pulumi.set(__self__, "time_zone", time_zone)

    @property
    @pulumi.getter(name="instantRpRetentionRangeInDays")
    def instant_rp_retention_range_in_days(self) -> Optional[pulumi.Input[int]]:
        """
        Instant RP retention policy range in days
        """
        return pulumi.get(self, "instant_rp_retention_range_in_days")

    @instant_rp_retention_range_in_days.setter
    def instant_rp_retention_range_in_days(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "instant_rp_retention_range_in_days", value)

    @property
    @pulumi.getter(name="retentionPolicy")
    def retention_policy(self) -> Optional[pulumi.Input[str]]:
        """
        Retention policy with the details on backup copy retention ranges.
        """
        return pulumi.get(self, "retention_policy")

    @retention_policy.setter
    def retention_policy(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "retention_policy", value)

    @property
    @pulumi.getter(name="schedulePolicy")
    def schedule_policy(self) -> Optional[pulumi.Input[str]]:
        """
        Backup schedule specified as part of backup policy.
        """
        return pulumi.get(self, "schedule_policy")

    @schedule_policy.setter
    def schedule_policy(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "schedule_policy", value)

    @property
    @pulumi.getter(name="timeZone")
    def time_zone(self) -> Optional[pulumi.Input[str]]:
        """
        TimeZone optional input as string. For example: Pacific Standard Time
        """
        return pulumi.get(self, "time_zone")

    @time_zone.setter
    def time_zone(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "time_zone", value)


