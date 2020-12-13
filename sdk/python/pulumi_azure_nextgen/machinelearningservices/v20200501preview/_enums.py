# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ComputeEnvironmentType',
    'ComputeType',
    'DatasetType',
    'DatastoreTypeArm',
    'EncryptionStatus',
    'Header',
    'PrivateEndpointServiceConnectionStatus',
    'RemoteLoginPortPublicAccess',
    'ResourceIdentityType',
    'SourceType',
    'VmPriority',
]


class ComputeEnvironmentType(str, Enum):
    """
    The compute environment type for the service.
    """
    ACI = "ACI"
    AKS = "AKS"


class ComputeType(str, Enum):
    """
    The type of compute
    """
    AKS = "AKS"
    AML_COMPUTE = "AmlCompute"
    DATA_FACTORY = "DataFactory"
    VIRTUAL_MACHINE = "VirtualMachine"
    HD_INSIGHT = "HDInsight"
    DATABRICKS = "Databricks"
    DATA_LAKE_ANALYTICS = "DataLakeAnalytics"


class DatasetType(str, Enum):
    """
    Specifies dataset type.
    """
    TABULAR = "tabular"
    FILE = "file"


class DatastoreTypeArm(str, Enum):
    """
    Specifies datastore type.
    """
    BLOB = "blob"
    ADLS = "adls"
    ADLS_GEN2 = "adls-gen2"
    DBFS = "dbfs"
    FILE = "file"
    MYSQLDB = "mysqldb"
    SQLDB = "sqldb"
    PSQLDB = "psqldb"


class EncryptionStatus(str, Enum):
    """
    Indicates whether or not the encryption is enabled for the workspace.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"


class Header(str, Enum):
    """
    Header type.
    """
    ALL_FILES_HAVE_SAME_HEADERS = "all_files_have_same_headers"
    ONLY_FIRST_FILE_HAS_HEADERS = "only_first_file_has_headers"
    NO_HEADERS = "no_headers"
    COMBINE_ALL_FILES_HEADERS = "combine_all_files_headers"


class PrivateEndpointServiceConnectionStatus(str, Enum):
    """
    Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
    """
    PENDING = "Pending"
    APPROVED = "Approved"
    REJECTED = "Rejected"
    DISCONNECTED = "Disconnected"
    TIMEOUT = "Timeout"


class RemoteLoginPortPublicAccess(str, Enum):
    """
    State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
    """
    ENABLED = "Enabled"
    DISABLED = "Disabled"
    NOT_SPECIFIED = "NotSpecified"


class ResourceIdentityType(str, Enum):
    """
    The identity type.
    """
    SYSTEM_ASSIGNED = "SystemAssigned"
    SYSTEM_ASSIGNED_USER_ASSIGNED = "SystemAssigned,UserAssigned"
    USER_ASSIGNED = "UserAssigned"
    NONE = "None"


class SourceType(str, Enum):
    """
    Data source type.
    """
    DELIMITED_FILES = "delimited_files"
    JSON_LINES_FILES = "json_lines_files"
    PARQUET_FILES = "parquet_files"


class VmPriority(str, Enum):
    """
    Virtual Machine priority
    """
    DEDICATED = "Dedicated"
    LOW_PRIORITY = "LowPriority"
