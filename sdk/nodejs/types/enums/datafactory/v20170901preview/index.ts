// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const DatasetCompressionLevel = {
    Optimal: "Optimal",
    Fastest: "Fastest",
} as const;

/**
 * The ZipDeflate compression level.
 */
export type DatasetCompressionLevel = (typeof DatasetCompressionLevel)[keyof typeof DatasetCompressionLevel];

export const Db2AuthenticationType = {
    Basic: "Basic",
} as const;

/**
 * AuthenticationType to be used for connection.
 */
export type Db2AuthenticationType = (typeof Db2AuthenticationType)[keyof typeof Db2AuthenticationType];

export const DependencyCondition = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Skipped: "Skipped",
    Completed: "Completed",
} as const;

export type DependencyCondition = (typeof DependencyCondition)[keyof typeof DependencyCondition];

export const DynamicsAuthenticationType = {
    Office365: "Office365",
    Ifd: "Ifd",
} as const;

/**
 * The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. Type: string (or Expression with resultType string).
 */
export type DynamicsAuthenticationType = (typeof DynamicsAuthenticationType)[keyof typeof DynamicsAuthenticationType];

export const DynamicsDeploymentType = {
    Online: "Online",
    OnPremisesWithIfd: "OnPremisesWithIfd",
} as const;

/**
 * The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
 */
export type DynamicsDeploymentType = (typeof DynamicsDeploymentType)[keyof typeof DynamicsDeploymentType];

export const FactoryIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type. Currently the only supported type is 'SystemAssigned'.
 */
export type FactoryIdentityType = (typeof FactoryIdentityType)[keyof typeof FactoryIdentityType];

export const FtpAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
} as const;

/**
 * The authentication type to be used to connect to the FTP server.
 */
export type FtpAuthenticationType = (typeof FtpAuthenticationType)[keyof typeof FtpAuthenticationType];

export const GoogleBigQueryAuthenticationType = {
    ServiceAuthentication: "ServiceAuthentication",
    UserAuthentication: "UserAuthentication",
} as const;

/**
 * The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
 */
export type GoogleBigQueryAuthenticationType = (typeof GoogleBigQueryAuthenticationType)[keyof typeof GoogleBigQueryAuthenticationType];

export const HBaseAuthenticationType = {
    Anonymous: "Anonymous",
    Basic: "Basic",
} as const;

/**
 * The authentication mechanism to use to connect to the HBase server.
 */
export type HBaseAuthenticationType = (typeof HBaseAuthenticationType)[keyof typeof HBaseAuthenticationType];

export const HiveAuthenticationType = {
    Anonymous: "Anonymous",
    Username: "Username",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

/**
 * The authentication method used to access the Hive server.
 */
export type HiveAuthenticationType = (typeof HiveAuthenticationType)[keyof typeof HiveAuthenticationType];

export const HiveServerType = {
    HiveServer1: "HiveServer1",
    HiveServer2: "HiveServer2",
    HiveThriftServer: "HiveThriftServer",
} as const;

/**
 * The type of Hive server.
 */
export type HiveServerType = (typeof HiveServerType)[keyof typeof HiveServerType];

export const HiveThriftTransportProtocol = {
    Binary: "Binary",
    SASL: "SASL",
    HTTP_: "HTTP ",
} as const;

/**
 * The transport protocol to use in the Thrift layer.
 */
export type HiveThriftTransportProtocol = (typeof HiveThriftTransportProtocol)[keyof typeof HiveThriftTransportProtocol];

export const HttpAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
    Digest: "Digest",
    Windows: "Windows",
    ClientCertificate: "ClientCertificate",
} as const;

/**
 * The authentication type to be used to connect to the HTTP server.
 */
export type HttpAuthenticationType = (typeof HttpAuthenticationType)[keyof typeof HttpAuthenticationType];

export const ImpalaAuthenticationType = {
    Anonymous: "Anonymous",
    SASLUsername: "SASLUsername",
    UsernameAndPassword: "UsernameAndPassword",
} as const;

/**
 * The authentication type to use.
 */
export type ImpalaAuthenticationType = (typeof ImpalaAuthenticationType)[keyof typeof ImpalaAuthenticationType];

export const IntegrationRuntimeEdition = {
    Standard: "Standard",
    Enterprise: "Enterprise",
} as const;

/**
 * The edition for the SSIS Integration Runtime
 */
export type IntegrationRuntimeEdition = (typeof IntegrationRuntimeEdition)[keyof typeof IntegrationRuntimeEdition];

export const IntegrationRuntimeEntityReferenceType = {
    IntegrationRuntimeReference: "IntegrationRuntimeReference",
    LinkedServiceReference: "LinkedServiceReference",
} as const;

/**
 * The type of this referenced entity.
 */
export type IntegrationRuntimeEntityReferenceType = (typeof IntegrationRuntimeEntityReferenceType)[keyof typeof IntegrationRuntimeEntityReferenceType];

export const IntegrationRuntimeLicenseType = {
    BasePrice: "BasePrice",
    LicenseIncluded: "LicenseIncluded",
} as const;

/**
 * License type for bringing your own license scenario.
 */
export type IntegrationRuntimeLicenseType = (typeof IntegrationRuntimeLicenseType)[keyof typeof IntegrationRuntimeLicenseType];

export const IntegrationRuntimeType = {
    Managed: "Managed",
    SelfHosted: "SelfHosted",
} as const;

/**
 * Type of integration runtime.
 */
export type IntegrationRuntimeType = (typeof IntegrationRuntimeType)[keyof typeof IntegrationRuntimeType];

export const JsonFormatFilePattern = {
    SetOfObjects: "setOfObjects",
    ArrayOfObjects: "arrayOfObjects",
} as const;

/**
 * File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive.
 */
export type JsonFormatFilePattern = (typeof JsonFormatFilePattern)[keyof typeof JsonFormatFilePattern];

export const MongoDbAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
} as const;

/**
 * The authentication type to be used to connect to the MongoDB database.
 */
export type MongoDbAuthenticationType = (typeof MongoDbAuthenticationType)[keyof typeof MongoDbAuthenticationType];

export const ODataAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
} as const;

/**
 * Type of authentication used to connect to the OData service.
 */
export type ODataAuthenticationType = (typeof ODataAuthenticationType)[keyof typeof ODataAuthenticationType];

export const ParameterType = {
    Object: "Object",
    String: "String",
    Int: "Int",
    Float: "Float",
    Bool: "Bool",
    Array: "Array",
    SecureString: "SecureString",
} as const;

/**
 * Parameter type.
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

export const PhoenixAuthenticationType = {
    Anonymous: "Anonymous",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

/**
 * The authentication mechanism used to connect to the Phoenix server.
 */
export type PhoenixAuthenticationType = (typeof PhoenixAuthenticationType)[keyof typeof PhoenixAuthenticationType];

export const PrestoAuthenticationType = {
    Anonymous: "Anonymous",
    LDAP: "LDAP",
} as const;

/**
 * The authentication mechanism used to connect to the Presto server.
 */
export type PrestoAuthenticationType = (typeof PrestoAuthenticationType)[keyof typeof PrestoAuthenticationType];

export const SapHanaAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

/**
 * The authentication type to be used to connect to the SAP HANA server.
 */
export type SapHanaAuthenticationType = (typeof SapHanaAuthenticationType)[keyof typeof SapHanaAuthenticationType];

export const ServiceNowAuthenticationType = {
    Basic: "Basic",
    OAuth2: "OAuth2",
} as const;

/**
 * The authentication type to use.
 */
export type ServiceNowAuthenticationType = (typeof ServiceNowAuthenticationType)[keyof typeof ServiceNowAuthenticationType];

export const SftpAuthenticationType = {
    Basic: "Basic",
    SshPublicKey: "SshPublicKey",
} as const;

/**
 * The authentication type to be used to connect to the FTP server.
 */
export type SftpAuthenticationType = (typeof SftpAuthenticationType)[keyof typeof SftpAuthenticationType];

export const SparkAuthenticationType = {
    Anonymous: "Anonymous",
    Username: "Username",
    UsernameAndPassword: "UsernameAndPassword",
    WindowsAzureHDInsightService: "WindowsAzureHDInsightService",
} as const;

/**
 * The authentication method used to access the Spark server.
 */
export type SparkAuthenticationType = (typeof SparkAuthenticationType)[keyof typeof SparkAuthenticationType];

export const SparkServerType = {
    SharkServer: "SharkServer",
    SharkServer2: "SharkServer2",
    SparkThriftServer: "SparkThriftServer",
} as const;

/**
 * The type of Spark server.
 */
export type SparkServerType = (typeof SparkServerType)[keyof typeof SparkServerType];

export const SparkThriftTransportProtocol = {
    Binary: "Binary",
    SASL: "SASL",
    HTTP_: "HTTP ",
} as const;

/**
 * The transport protocol to use in the Thrift layer.
 */
export type SparkThriftTransportProtocol = (typeof SparkThriftTransportProtocol)[keyof typeof SparkThriftTransportProtocol];

export const SybaseAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

/**
 * AuthenticationType to be used for connection.
 */
export type SybaseAuthenticationType = (typeof SybaseAuthenticationType)[keyof typeof SybaseAuthenticationType];

export const TeradataAuthenticationType = {
    Basic: "Basic",
    Windows: "Windows",
} as const;

/**
 * AuthenticationType to be used for connection.
 */
export type TeradataAuthenticationType = (typeof TeradataAuthenticationType)[keyof typeof TeradataAuthenticationType];

export const TumblingWindowFrequency = {
    Minute: "Minute",
    Hour: "Hour",
} as const;

/**
 * The frequency of the time windows.
 */
export type TumblingWindowFrequency = (typeof TumblingWindowFrequency)[keyof typeof TumblingWindowFrequency];

export const WebAuthenticationType = {
    Basic: "Basic",
    Anonymous: "Anonymous",
    ClientCertificate: "ClientCertificate",
} as const;

/**
 * Type of authentication used to connect to the web table source.
 */
export type WebAuthenticationType = (typeof WebAuthenticationType)[keyof typeof WebAuthenticationType];
