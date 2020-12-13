# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'AlertRuleKind',
    'BillingType',
    'CaseSeverity',
    'ClusterSkuNameEnum',
    'DataConnectorKind',
    'DataSourceKind',
    'IdentityType',
    'IncidentClassification',
    'IncidentClassificationReason',
    'IncidentSeverity',
    'IncidentStatus',
    'LinkedServiceEntityStatus',
    'PublicNetworkAccessType',
    'WorkspaceEntityStatus',
    'WorkspaceSkuNameEnum',
]


class AlertRuleKind(str, Enum):
    """
    The alert rule kind
    """
    SCHEDULED = "Scheduled"
    MICROSOFT_SECURITY_INCIDENT_CREATION = "MicrosoftSecurityIncidentCreation"
    FUSION = "Fusion"


class BillingType(str, Enum):
    """
    Configures whether billing will be only on the cluster or each workspace will be billed by its proportional use. This does not change the overall billing, only how it will be distributed. Default value is 'Cluster'
    """
    CLUSTER = "Cluster"
    WORKSPACES = "Workspaces"


class CaseSeverity(str, Enum):
    """
    The severity of the incident
    """
    CRITICAL = "Critical"
    HIGH = "High"
    MEDIUM = "Medium"
    LOW = "Low"
    INFORMATIONAL = "Informational"


class ClusterSkuNameEnum(str, Enum):
    """
    The name of the SKU.
    """
    CAPACITY_RESERVATION = "CapacityReservation"


class DataConnectorKind(str, Enum):
    """
    The data connector kind
    """
    AZURE_ACTIVE_DIRECTORY = "AzureActiveDirectory"
    AZURE_SECURITY_CENTER = "AzureSecurityCenter"
    MICROSOFT_CLOUD_APP_SECURITY = "MicrosoftCloudAppSecurity"
    THREAT_INTELLIGENCE = "ThreatIntelligence"
    OFFICE365 = "Office365"
    AMAZON_WEB_SERVICES_CLOUD_TRAIL = "AmazonWebServicesCloudTrail"
    AZURE_ADVANCED_THREAT_PROTECTION = "AzureAdvancedThreatProtection"
    MICROSOFT_DEFENDER_ADVANCED_THREAT_PROTECTION = "MicrosoftDefenderAdvancedThreatProtection"


class DataSourceKind(str, Enum):
    """
    The kind of the DataSource.
    """
    WINDOWS_EVENT = "WindowsEvent"
    WINDOWS_PERFORMANCE_COUNTER = "WindowsPerformanceCounter"
    IIS_LOGS = "IISLogs"
    LINUX_SYSLOG = "LinuxSyslog"
    LINUX_SYSLOG_COLLECTION = "LinuxSyslogCollection"
    LINUX_PERFORMANCE_OBJECT = "LinuxPerformanceObject"
    LINUX_PERFORMANCE_COLLECTION = "LinuxPerformanceCollection"
    CUSTOM_LOG = "CustomLog"
    CUSTOM_LOG_COLLECTION = "CustomLogCollection"
    AZURE_AUDIT_LOG = "AzureAuditLog"
    AZURE_ACTIVITY_LOG = "AzureActivityLog"
    GENERIC_DATA_SOURCE = "GenericDataSource"
    CHANGE_TRACKING_CUSTOM_PATH = "ChangeTrackingCustomPath"
    CHANGE_TRACKING_PATH = "ChangeTrackingPath"
    CHANGE_TRACKING_SERVICES = "ChangeTrackingServices"
    CHANGE_TRACKING_DATA_TYPE_CONFIGURATION = "ChangeTrackingDataTypeConfiguration"
    CHANGE_TRACKING_DEFAULT_REGISTRY = "ChangeTrackingDefaultRegistry"
    CHANGE_TRACKING_REGISTRY = "ChangeTrackingRegistry"
    CHANGE_TRACKING_LINUX_PATH = "ChangeTrackingLinuxPath"
    LINUX_CHANGE_TRACKING_PATH = "LinuxChangeTrackingPath"
    CHANGE_TRACKING_CONTENT_LOCATION = "ChangeTrackingContentLocation"
    WINDOWS_TELEMETRY = "WindowsTelemetry"
    OFFICE365 = "Office365"
    SECURITY_WINDOWS_BASELINE_CONFIGURATION = "SecurityWindowsBaselineConfiguration"
    SECURITY_CENTER_SECURITY_WINDOWS_BASELINE_CONFIGURATION = "SecurityCenterSecurityWindowsBaselineConfiguration"
    SECURITY_EVENT_COLLECTION_CONFIGURATION = "SecurityEventCollectionConfiguration"
    SECURITY_INSIGHTS_SECURITY_EVENT_COLLECTION_CONFIGURATION = "SecurityInsightsSecurityEventCollectionConfiguration"
    IMPORT_COMPUTER_GROUP = "ImportComputerGroup"
    NETWORK_MONITORING = "NetworkMonitoring"
    ITSM = "Itsm"
    DNS_ANALYTICS = "DnsAnalytics"
    APPLICATION_INSIGHTS = "ApplicationInsights"
    SQL_DATA_CLASSIFICATION = "SqlDataClassification"


class IdentityType(str, Enum):
    """
    The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities.
    """
    SYSTEM_ASSIGNED = "SystemAssigned"
    USER_ASSIGNED = "UserAssigned"
    NONE = "None"


class IncidentClassification(str, Enum):
    """
    The reason the incident was closed
    """
    UNDETERMINED = "Undetermined"
    TRUE_POSITIVE = "TruePositive"
    BENIGN_POSITIVE = "BenignPositive"
    FALSE_POSITIVE = "FalsePositive"


class IncidentClassificationReason(str, Enum):
    """
    The classification reason the incident was closed with
    """
    SUSPICIOUS_ACTIVITY = "SuspiciousActivity"
    SUSPICIOUS_BUT_EXPECTED = "SuspiciousButExpected"
    INCORRECT_ALERT_LOGIC = "IncorrectAlertLogic"
    INACCURATE_DATA = "InaccurateData"


class IncidentSeverity(str, Enum):
    """
    The severity of the incident
    """
    HIGH = "High"
    MEDIUM = "Medium"
    LOW = "Low"
    INFORMATIONAL = "Informational"


class IncidentStatus(str, Enum):
    """
    The status of the incident
    """
    NEW = "New"
    ACTIVE = "Active"
    CLOSED = "Closed"


class LinkedServiceEntityStatus(str, Enum):
    """
    The provisioning state of the linked service.
    """
    SUCCEEDED = "Succeeded"
    DELETING = "Deleting"
    PROVISIONING_ACCOUNT = "ProvisioningAccount"
    UPDATING = "Updating"


class PublicNetworkAccessType(str, Enum):
    """
    The network access type for accessing Log Analytics query.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class WorkspaceEntityStatus(str, Enum):
    """
    The provisioning state of the workspace.
    """
    CREATING = "Creating"
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    CANCELED = "Canceled"
    DELETING = "Deleting"
    PROVISIONING_ACCOUNT = "ProvisioningAccount"
    UPDATING = "Updating"


class WorkspaceSkuNameEnum(str, Enum):
    """
    The name of the SKU.
    """
    FREE = "Free"
    STANDARD = "Standard"
    PREMIUM = "Premium"
    PER_NODE = "PerNode"
    PER_GB2018 = "PerGB2018"
    STANDALONE = "Standalone"
    CAPACITY_RESERVATION = "CapacityReservation"
    LA_CLUSTER = "LACluster"
