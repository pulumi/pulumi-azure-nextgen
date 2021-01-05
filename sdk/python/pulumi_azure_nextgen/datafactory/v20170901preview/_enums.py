# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'DatasetCompressionLevel',
    'Db2AuthenticationType',
    'DependencyCondition',
    'DynamicsAuthenticationType',
    'DynamicsDeploymentType',
    'FactoryIdentityType',
    'FtpAuthenticationType',
    'GoogleBigQueryAuthenticationType',
    'HBaseAuthenticationType',
    'HiveAuthenticationType',
    'HiveServerType',
    'HiveThriftTransportProtocol',
    'HttpAuthenticationType',
    'ImpalaAuthenticationType',
    'IntegrationRuntimeEdition',
    'IntegrationRuntimeEntityReferenceType',
    'IntegrationRuntimeLicenseType',
    'IntegrationRuntimeType',
    'JsonFormatFilePattern',
    'MongoDbAuthenticationType',
    'ODataAuthenticationType',
    'ParameterType',
    'PhoenixAuthenticationType',
    'PrestoAuthenticationType',
    'SapHanaAuthenticationType',
    'ServiceNowAuthenticationType',
    'SftpAuthenticationType',
    'SparkAuthenticationType',
    'SparkServerType',
    'SparkThriftTransportProtocol',
    'SybaseAuthenticationType',
    'TeradataAuthenticationType',
    'TumblingWindowFrequency',
    'WebAuthenticationType',
]


class DatasetCompressionLevel(str, Enum):
    """
    The ZipDeflate compression level.
    """
    OPTIMAL = "Optimal"
    FASTEST = "Fastest"


class Db2AuthenticationType(str, Enum):
    """
    AuthenticationType to be used for connection.
    """
    BASIC = "Basic"


class DependencyCondition(str, Enum):
    SUCCEEDED = "Succeeded"
    FAILED = "Failed"
    SKIPPED = "Skipped"
    COMPLETED = "Completed"


class DynamicsAuthenticationType(str, Enum):
    """
    The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. Type: string (or Expression with resultType string).
    """
    OFFICE365 = "Office365"
    IFD = "Ifd"


class DynamicsDeploymentType(str, Enum):
    """
    The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
    """
    ONLINE = "Online"
    ON_PREMISES_WITH_IFD = "OnPremisesWithIfd"


class FactoryIdentityType(str, Enum):
    """
    The identity type. Currently the only supported type is 'SystemAssigned'.
    """
    SYSTEM_ASSIGNED = "SystemAssigned"


class FtpAuthenticationType(str, Enum):
    """
    The authentication type to be used to connect to the FTP server.
    """
    BASIC = "Basic"
    ANONYMOUS = "Anonymous"


class GoogleBigQueryAuthenticationType(str, Enum):
    """
    The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
    """
    SERVICE_AUTHENTICATION = "ServiceAuthentication"
    USER_AUTHENTICATION = "UserAuthentication"


class HBaseAuthenticationType(str, Enum):
    """
    The authentication mechanism to use to connect to the HBase server.
    """
    ANONYMOUS = "Anonymous"
    BASIC = "Basic"


class HiveAuthenticationType(str, Enum):
    """
    The authentication method used to access the Hive server.
    """
    ANONYMOUS = "Anonymous"
    USERNAME = "Username"
    USERNAME_AND_PASSWORD = "UsernameAndPassword"
    WINDOWS_AZURE_HD_INSIGHT_SERVICE = "WindowsAzureHDInsightService"


class HiveServerType(str, Enum):
    """
    The type of Hive server.
    """
    HIVE_SERVER1 = "HiveServer1"
    HIVE_SERVER2 = "HiveServer2"
    HIVE_THRIFT_SERVER = "HiveThriftServer"


class HiveThriftTransportProtocol(str, Enum):
    """
    The transport protocol to use in the Thrift layer.
    """
    BINARY = "Binary"
    SASL = "SASL"
    HTT_P_ = "HTTP "


class HttpAuthenticationType(str, Enum):
    """
    The authentication type to be used to connect to the HTTP server.
    """
    BASIC = "Basic"
    ANONYMOUS = "Anonymous"
    DIGEST = "Digest"
    WINDOWS = "Windows"
    CLIENT_CERTIFICATE = "ClientCertificate"


class ImpalaAuthenticationType(str, Enum):
    """
    The authentication type to use.
    """
    ANONYMOUS = "Anonymous"
    SASLUSERNAME = "SASLUsername"
    USERNAME_AND_PASSWORD = "UsernameAndPassword"


class IntegrationRuntimeEdition(str, Enum):
    """
    The edition for the SSIS Integration Runtime
    """
    STANDARD = "Standard"
    ENTERPRISE = "Enterprise"


class IntegrationRuntimeEntityReferenceType(str, Enum):
    """
    The type of this referenced entity.
    """
    INTEGRATION_RUNTIME_REFERENCE = "IntegrationRuntimeReference"
    LINKED_SERVICE_REFERENCE = "LinkedServiceReference"


class IntegrationRuntimeLicenseType(str, Enum):
    """
    License type for bringing your own license scenario.
    """
    BASE_PRICE = "BasePrice"
    LICENSE_INCLUDED = "LicenseIncluded"


class IntegrationRuntimeType(str, Enum):
    """
    Type of integration runtime.
    """
    MANAGED = "Managed"
    SELF_HOSTED = "SelfHosted"


class JsonFormatFilePattern(str, Enum):
    """
    File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
    """
    SET_OF_OBJECTS = "setOfObjects"
    ARRAY_OF_OBJECTS = "arrayOfObjects"


class MongoDbAuthenticationType(str, Enum):
    """
    The authentication type to be used to connect to the MongoDB database.
    """
    BASIC = "Basic"
    ANONYMOUS = "Anonymous"


class ODataAuthenticationType(str, Enum):
    """
    Type of authentication used to connect to the OData service.
    """
    BASIC = "Basic"
    ANONYMOUS = "Anonymous"


class ParameterType(str, Enum):
    """
    Parameter type.
    """
    OBJECT = "Object"
    STRING = "String"
    INT = "Int"
    FLOAT = "Float"
    BOOL = "Bool"
    ARRAY = "Array"
    SECURE_STRING = "SecureString"


class PhoenixAuthenticationType(str, Enum):
    """
    The authentication mechanism used to connect to the Phoenix server.
    """
    ANONYMOUS = "Anonymous"
    USERNAME_AND_PASSWORD = "UsernameAndPassword"
    WINDOWS_AZURE_HD_INSIGHT_SERVICE = "WindowsAzureHDInsightService"


class PrestoAuthenticationType(str, Enum):
    """
    The authentication mechanism used to connect to the Presto server.
    """
    ANONYMOUS = "Anonymous"
    LDAP = "LDAP"


class SapHanaAuthenticationType(str, Enum):
    """
    The authentication type to be used to connect to the SAP HANA server.
    """
    BASIC = "Basic"
    WINDOWS = "Windows"


class ServiceNowAuthenticationType(str, Enum):
    """
    The authentication type to use.
    """
    BASIC = "Basic"
    O_AUTH2 = "OAuth2"


class SftpAuthenticationType(str, Enum):
    """
    The authentication type to be used to connect to the FTP server.
    """
    BASIC = "Basic"
    SSH_PUBLIC_KEY = "SshPublicKey"


class SparkAuthenticationType(str, Enum):
    """
    The authentication method used to access the Spark server.
    """
    ANONYMOUS = "Anonymous"
    USERNAME = "Username"
    USERNAME_AND_PASSWORD = "UsernameAndPassword"
    WINDOWS_AZURE_HD_INSIGHT_SERVICE = "WindowsAzureHDInsightService"


class SparkServerType(str, Enum):
    """
    The type of Spark server.
    """
    SHARK_SERVER = "SharkServer"
    SHARK_SERVER2 = "SharkServer2"
    SPARK_THRIFT_SERVER = "SparkThriftServer"


class SparkThriftTransportProtocol(str, Enum):
    """
    The transport protocol to use in the Thrift layer.
    """
    BINARY = "Binary"
    SASL = "SASL"
    HTT_P_ = "HTTP "


class SybaseAuthenticationType(str, Enum):
    """
    AuthenticationType to be used for connection.
    """
    BASIC = "Basic"
    WINDOWS = "Windows"


class TeradataAuthenticationType(str, Enum):
    """
    AuthenticationType to be used for connection.
    """
    BASIC = "Basic"
    WINDOWS = "Windows"


class TumblingWindowFrequency(str, Enum):
    """
    The frequency of the time windows.
    """
    MINUTE = "Minute"
    HOUR = "Hour"


class WebAuthenticationType(str, Enum):
    """
    Type of authentication used to connect to the web table source.
    """
    BASIC = "Basic"
    ANONYMOUS = "Anonymous"
    CLIENT_CERTIFICATE = "ClientCertificate"