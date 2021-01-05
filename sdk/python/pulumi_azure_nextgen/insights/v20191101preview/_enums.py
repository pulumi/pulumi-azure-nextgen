# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'KnownDataFlowStreams',
    'KnownExtensionDataSourceStreams',
    'KnownPerfCounterDataSourceScheduledTransferPeriod',
    'KnownPerfCounterDataSourceStreams',
    'KnownSyslogDataSourceFacilityNames',
    'KnownSyslogDataSourceLogLevels',
    'KnownSyslogDataSourceStreams',
    'KnownWindowsEventLogDataSourceScheduledTransferPeriod',
    'KnownWindowsEventLogDataSourceStreams',
]


class KnownDataFlowStreams(str, Enum):
    MICROSOFT_ANTI_MALWARE_STATUS = "Microsoft-AntiMalwareStatus"
    MICROSOFT_AUDITD = "Microsoft-Auditd"
    MICROSOFT_CISCOASA = "Microsoft-CISCOASA"
    MICROSOFT_COMMON_SECURITY_LOG = "Microsoft-CommonSecurityLog"
    MICROSOFT_COMPUTER_GROUP = "Microsoft-ComputerGroup"
    MICROSOFT_EVENT = "Microsoft-Event"
    MICROSOFT_FIREWALL_LOG = "Microsoft-FirewallLog"
    MICROSOFT_HEALTH_STATE_CHANGE = "Microsoft-HealthStateChange"
    MICROSOFT_HEARTBEAT = "Microsoft-Heartbeat"
    MICROSOFT_INSIGHTS_METRICS = "Microsoft-InsightsMetrics"
    MICROSOFT_OPERATION_LOG = "Microsoft-OperationLog"
    MICROSOFT_PERF = "Microsoft-Perf"
    MICROSOFT_PROCESS_INVESTIGATOR = "Microsoft-ProcessInvestigator"
    MICROSOFT_PROTECTION_STATUS = "Microsoft-ProtectionStatus"
    MICROSOFT_ROME_DETECTION_EVENT = "Microsoft-RomeDetectionEvent"
    MICROSOFT_SECURITY_BASELINE = "Microsoft-SecurityBaseline"
    MICROSOFT_SECURITY_BASELINE_SUMMARY = "Microsoft-SecurityBaselineSummary"
    MICROSOFT_SECURITY_EVENT = "Microsoft-SecurityEvent"
    MICROSOFT_SYSLOG = "Microsoft-Syslog"
    MICROSOFT_WINDOWS_EVENT = "Microsoft-WindowsEvent"


class KnownExtensionDataSourceStreams(str, Enum):
    MICROSOFT_ANTI_MALWARE_STATUS = "Microsoft-AntiMalwareStatus"
    MICROSOFT_AUDITD = "Microsoft-Auditd"
    MICROSOFT_CISCOASA = "Microsoft-CISCOASA"
    MICROSOFT_COMMON_SECURITY_LOG = "Microsoft-CommonSecurityLog"
    MICROSOFT_COMPUTER_GROUP = "Microsoft-ComputerGroup"
    MICROSOFT_EVENT = "Microsoft-Event"
    MICROSOFT_FIREWALL_LOG = "Microsoft-FirewallLog"
    MICROSOFT_HEALTH_STATE_CHANGE = "Microsoft-HealthStateChange"
    MICROSOFT_HEARTBEAT = "Microsoft-Heartbeat"
    MICROSOFT_INSIGHTS_METRICS = "Microsoft-InsightsMetrics"
    MICROSOFT_OPERATION_LOG = "Microsoft-OperationLog"
    MICROSOFT_PERF = "Microsoft-Perf"
    MICROSOFT_PROCESS_INVESTIGATOR = "Microsoft-ProcessInvestigator"
    MICROSOFT_PROTECTION_STATUS = "Microsoft-ProtectionStatus"
    MICROSOFT_ROME_DETECTION_EVENT = "Microsoft-RomeDetectionEvent"
    MICROSOFT_SECURITY_BASELINE = "Microsoft-SecurityBaseline"
    MICROSOFT_SECURITY_BASELINE_SUMMARY = "Microsoft-SecurityBaselineSummary"
    MICROSOFT_SECURITY_EVENT = "Microsoft-SecurityEvent"
    MICROSOFT_SYSLOG = "Microsoft-Syslog"
    MICROSOFT_WINDOWS_EVENT = "Microsoft-WindowsEvent"


class KnownPerfCounterDataSourceScheduledTransferPeriod(str, Enum):
    """
    The interval between data uploads (scheduled transfers), rounded up to the nearest minute.
    """
    PT1_M = "PT1M"
    PT5_M = "PT5M"
    PT15_M = "PT15M"
    PT30_M = "PT30M"
    PT60_M = "PT60M"


class KnownPerfCounterDataSourceStreams(str, Enum):
    MICROSOFT_PERF = "Microsoft-Perf"
    MICROSOFT_INSIGHTS_METRICS = "Microsoft-InsightsMetrics"


class KnownSyslogDataSourceFacilityNames(str, Enum):
    AUTH = "auth"
    AUTHPRIV = "authpriv"
    CRON = "cron"
    DAEMON = "daemon"
    KERN = "kern"
    LPR = "lpr"
    MAIL = "mail"
    MARK = "mark"
    NEWS = "news"
    SYSLOG = "syslog"
    USER = "user"
    UUCP = "UUCP"
    LOCAL0 = "local0"
    LOCAL1 = "local1"
    LOCAL2 = "local2"
    LOCAL3 = "local3"
    LOCAL4 = "local4"
    LOCAL5 = "local5"
    LOCAL6 = "local6"
    LOCAL7 = "local7"


class KnownSyslogDataSourceLogLevels(str, Enum):
    DEBUG = "Debug"
    INFO = "Info"
    NOTICE = "Notice"
    WARNING = "Warning"
    ERROR = "Error"
    CRITICAL = "Critical"
    ALERT = "Alert"
    EMERGENCY = "Emergency"


class KnownSyslogDataSourceStreams(str, Enum):
    MICROSOFT_SYSLOG = "Microsoft-Syslog"


class KnownWindowsEventLogDataSourceScheduledTransferPeriod(str, Enum):
    """
    The interval between data uploads (scheduled transfers), rounded up to the nearest minute.
    """
    PT1_M = "PT1M"
    PT5_M = "PT5M"
    PT15_M = "PT15M"
    PT30_M = "PT30M"
    PT60_M = "PT60M"


class KnownWindowsEventLogDataSourceStreams(str, Enum):
    MICROSOFT_WINDOWS_EVENT = "Microsoft-WindowsEvent"
    MICROSOFT_EVENT = "Microsoft-Event"