// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Security.Latest
{
    /// <summary>
    /// Data types sent to workspace.
    /// </summary>
    [EnumType]
    public readonly struct AdditionalWorkspaceDataType : IEquatable<AdditionalWorkspaceDataType>
    {
        private readonly string _value;

        private AdditionalWorkspaceDataType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AdditionalWorkspaceDataType Alerts { get; } = new AdditionalWorkspaceDataType("Alerts");
        public static AdditionalWorkspaceDataType RawEvents { get; } = new AdditionalWorkspaceDataType("RawEvents");

        public static bool operator ==(AdditionalWorkspaceDataType left, AdditionalWorkspaceDataType right) => left.Equals(right);
        public static bool operator !=(AdditionalWorkspaceDataType left, AdditionalWorkspaceDataType right) => !left.Equals(right);

        public static explicit operator string(AdditionalWorkspaceDataType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AdditionalWorkspaceDataType other && Equals(other);
        public bool Equals(AdditionalWorkspaceDataType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Workspace type.
    /// </summary>
    [EnumType]
    public readonly struct AdditionalWorkspaceType : IEquatable<AdditionalWorkspaceType>
    {
        private readonly string _value;

        private AdditionalWorkspaceType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AdditionalWorkspaceType Sentinel { get; } = new AdditionalWorkspaceType("Sentinel");

        public static bool operator ==(AdditionalWorkspaceType left, AdditionalWorkspaceType right) => left.Equals(right);
        public static bool operator !=(AdditionalWorkspaceType left, AdditionalWorkspaceType right) => !left.Equals(right);

        public static explicit operator string(AdditionalWorkspaceType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AdditionalWorkspaceType other && Equals(other);
        public bool Equals(AdditionalWorkspaceType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Programmatic code for the status of the assessment
    /// </summary>
    [EnumType]
    public readonly struct AssessmentStatusCode : IEquatable<AssessmentStatusCode>
    {
        private readonly string _value;

        private AssessmentStatusCode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// The resource is healthy
        /// </summary>
        public static AssessmentStatusCode Healthy { get; } = new AssessmentStatusCode("Healthy");
        /// <summary>
        /// The resource has a security issue that needs to be addressed
        /// </summary>
        public static AssessmentStatusCode Unhealthy { get; } = new AssessmentStatusCode("Unhealthy");
        /// <summary>
        /// Assessment for this resource did not happen
        /// </summary>
        public static AssessmentStatusCode NotApplicable { get; } = new AssessmentStatusCode("NotApplicable");

        public static bool operator ==(AssessmentStatusCode left, AssessmentStatusCode right) => left.Equals(right);
        public static bool operator !=(AssessmentStatusCode left, AssessmentStatusCode right) => !left.Equals(right);

        public static explicit operator string(AssessmentStatusCode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AssessmentStatusCode other && Equals(other);
        public bool Equals(AssessmentStatusCode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
    /// </summary>
    [EnumType]
    public readonly struct AssessmentType : IEquatable<AssessmentType>
    {
        private readonly string _value;

        private AssessmentType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Azure Security Center managed assessments
        /// </summary>
        public static AssessmentType BuiltIn { get; } = new AssessmentType("BuiltIn");
        /// <summary>
        /// User defined policies that are automatically ingested from Azure Policy to Azure Security Center
        /// </summary>
        public static AssessmentType CustomPolicy { get; } = new AssessmentType("CustomPolicy");
        /// <summary>
        /// User assessments pushed directly by the user or other third party to Azure Security Center
        /// </summary>
        public static AssessmentType CustomerManaged { get; } = new AssessmentType("CustomerManaged");
        /// <summary>
        /// An assessment that was created by a verified 3rd party if the user connected it to ASC
        /// </summary>
        public static AssessmentType VerifiedPartner { get; } = new AssessmentType("VerifiedPartner");

        public static bool operator ==(AssessmentType left, AssessmentType right) => left.Equals(right);
        public static bool operator !=(AssessmentType left, AssessmentType right) => !left.Equals(right);

        public static explicit operator string(AssessmentType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AssessmentType other && Equals(other);
        public bool Equals(AssessmentType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The category of resource that is at risk when the assessment is unhealthy
    /// </summary>
    [EnumType]
    public readonly struct Category : IEquatable<Category>
    {
        private readonly string _value;

        private Category(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Category Compute { get; } = new Category("Compute");
        public static Category Networking { get; } = new Category("Networking");
        public static Category Data { get; } = new Category("Data");
        public static Category IdentityAndAccess { get; } = new Category("IdentityAndAccess");
        public static Category IoT { get; } = new Category("IoT");

        public static bool operator ==(Category left, Category right) => left.Equals(right);
        public static bool operator !=(Category left, Category right) => !left.Equals(right);

        public static explicit operator string(Category value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Category other && Equals(other);
        public bool Equals(Category other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    [EnumType]
    public readonly struct DataSource : IEquatable<DataSource>
    {
        private readonly string _value;

        private DataSource(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Devices twin data
        /// </summary>
        public static DataSource TwinData { get; } = new DataSource("TwinData");

        public static bool operator ==(DataSource left, DataSource right) => left.Equals(right);
        public static bool operator !=(DataSource left, DataSource right) => !left.Equals(right);

        public static explicit operator string(DataSource value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DataSource other && Equals(other);
        public bool Equals(DataSource other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    [EnumType]
    public readonly struct ExportData : IEquatable<ExportData>
    {
        private readonly string _value;

        private ExportData(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Agent raw events
        /// </summary>
        public static ExportData RawEvents { get; } = new ExportData("RawEvents");

        public static bool operator ==(ExportData left, ExportData right) => left.Equals(right);
        public static bool operator !=(ExportData left, ExportData right) => !left.Equals(right);

        public static explicit operator string(ExportData value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ExportData other && Equals(other);
        public bool Equals(ExportData other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The implementation effort required to remediate this assessment
    /// </summary>
    [EnumType]
    public readonly struct ImplementationEffort : IEquatable<ImplementationEffort>
    {
        private readonly string _value;

        private ImplementationEffort(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ImplementationEffort Low { get; } = new ImplementationEffort("Low");
        public static ImplementationEffort Moderate { get; } = new ImplementationEffort("Moderate");
        public static ImplementationEffort High { get; } = new ImplementationEffort("High");

        public static bool operator ==(ImplementationEffort left, ImplementationEffort right) => left.Equals(right);
        public static bool operator !=(ImplementationEffort left, ImplementationEffort right) => !left.Equals(right);

        public static explicit operator string(ImplementationEffort value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ImplementationEffort other && Equals(other);
        public bool Equals(ImplementationEffort other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    [EnumType]
    public readonly struct Protocol : IEquatable<Protocol>
    {
        private readonly string _value;

        private Protocol(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Protocol TCP { get; } = new Protocol("TCP");
        public static Protocol UDP { get; } = new Protocol("UDP");
        public static Protocol All { get; } = new Protocol("*");

        public static bool operator ==(Protocol left, Protocol right) => left.Equals(right);
        public static bool operator !=(Protocol left, Protocol right) => !left.Equals(right);

        public static explicit operator string(Protocol value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Protocol other && Equals(other);
        public bool Equals(Protocol other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Recommendation status. When the recommendation status is disabled recommendations are not generated.
    /// </summary>
    [EnumType]
    public readonly struct RecommendationConfigStatus : IEquatable<RecommendationConfigStatus>
    {
        private readonly string _value;

        private RecommendationConfigStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static RecommendationConfigStatus Disabled { get; } = new RecommendationConfigStatus("Disabled");
        public static RecommendationConfigStatus Enabled { get; } = new RecommendationConfigStatus("Enabled");

        public static bool operator ==(RecommendationConfigStatus left, RecommendationConfigStatus right) => left.Equals(right);
        public static bool operator !=(RecommendationConfigStatus left, RecommendationConfigStatus right) => !left.Equals(right);

        public static explicit operator string(RecommendationConfigStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is RecommendationConfigStatus other && Equals(other);
        public bool Equals(RecommendationConfigStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The type of IoT Security recommendation.
    /// </summary>
    [EnumType]
    public readonly struct RecommendationType : IEquatable<RecommendationType>
    {
        private readonly string _value;

        private RecommendationType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Authentication schema used for pull an edge module from an ACR repository does not use Service Principal Authentication.
        /// </summary>
        public static RecommendationType IoT_ACRAuthentication { get; } = new RecommendationType("IoT_ACRAuthentication");
        /// <summary>
        /// IoT agent message size capacity is currently underutilized, causing an increase in the number of sent messages. Adjust message intervals for better utilization.
        /// </summary>
        public static RecommendationType IoT_AgentSendsUnutilizedMessages { get; } = new RecommendationType("IoT_AgentSendsUnutilizedMessages");
        /// <summary>
        /// Identified security related system configuration issues.
        /// </summary>
        public static RecommendationType IoT_Baseline { get; } = new RecommendationType("IoT_Baseline");
        /// <summary>
        /// You can optimize Edge Hub memory usage by turning off protocol heads for any protocols not used by Edge modules in your solution.
        /// </summary>
        public static RecommendationType IoT_EdgeHubMemOptimize { get; } = new RecommendationType("IoT_EdgeHubMemOptimize");
        /// <summary>
        /// Logging is disabled for this edge module.
        /// </summary>
        public static RecommendationType IoT_EdgeLoggingOptions { get; } = new RecommendationType("IoT_EdgeLoggingOptions");
        /// <summary>
        /// A minority within a device security group has inconsistent Edge Module settings with the rest of their group.
        /// </summary>
        public static RecommendationType IoT_InconsistentModuleSettings { get; } = new RecommendationType("IoT_InconsistentModuleSettings");
        /// <summary>
        /// Install the Azure Security of Things Agent.
        /// </summary>
        public static RecommendationType IoT_InstallAgent { get; } = new RecommendationType("IoT_InstallAgent");
        /// <summary>
        /// IP Filter Configuration should have rules defined for allowed traffic and should deny all other traffic by default.
        /// </summary>
        public static RecommendationType IoT_IPFilter_DenyAll { get; } = new RecommendationType("IoT_IPFilter_DenyAll");
        /// <summary>
        /// An Allow IP Filter rules source IP range is too large. Overly permissive rules might expose your IoT hub to malicious intenders.
        /// </summary>
        public static RecommendationType IoT_IPFilter_PermissiveRule { get; } = new RecommendationType("IoT_IPFilter_PermissiveRule");
        /// <summary>
        /// A listening endpoint was found on the device.
        /// </summary>
        public static RecommendationType IoT_OpenPorts { get; } = new RecommendationType("IoT_OpenPorts");
        /// <summary>
        /// An Allowed firewall policy was found (INPUT/OUTPUT). The policy should Deny all traffic by default and define rules to allow necessary communication to/from the device.
        /// </summary>
        public static RecommendationType IoT_PermissiveFirewallPolicy { get; } = new RecommendationType("IoT_PermissiveFirewallPolicy");
        /// <summary>
        /// A rule in the firewall has been found that contains a permissive pattern for a wide range of IP addresses or Ports.
        /// </summary>
        public static RecommendationType IoT_PermissiveInputFirewallRules { get; } = new RecommendationType("IoT_PermissiveInputFirewallRules");
        /// <summary>
        /// A rule in the firewall has been found that contains a permissive pattern for a wide range of IP addresses or Ports.
        /// </summary>
        public static RecommendationType IoT_PermissiveOutputFirewallRules { get; } = new RecommendationType("IoT_PermissiveOutputFirewallRules");
        /// <summary>
        /// Edge module is configured to run in privileged mode, with extensive Linux capabilities or with host-level network access (send/receive data to host machine).
        /// </summary>
        public static RecommendationType IoT_PrivilegedDockerOptions { get; } = new RecommendationType("IoT_PrivilegedDockerOptions");
        /// <summary>
        /// Same authentication credentials to the IoT Hub used by multiple devices. This could indicate an illegitimate device impersonating a legitimate device. It also exposes the risk of device impersonation by an attacker.
        /// </summary>
        public static RecommendationType IoT_SharedCredentials { get; } = new RecommendationType("IoT_SharedCredentials");
        /// <summary>
        /// Insecure TLS configurations detected. Immediate upgrade recommended.
        /// </summary>
        public static RecommendationType IoT_VulnerableTLSCipherSuite { get; } = new RecommendationType("IoT_VulnerableTLSCipherSuite");

        public static bool operator ==(RecommendationType left, RecommendationType right) => left.Equals(right);
        public static bool operator !=(RecommendationType left, RecommendationType right) => !left.Equals(right);

        public static explicit operator string(RecommendationType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is RecommendationType other && Equals(other);
        public bool Equals(RecommendationType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Status of the IoT Security solution.
    /// </summary>
    [EnumType]
    public readonly struct SecuritySolutionStatus : IEquatable<SecuritySolutionStatus>
    {
        private readonly string _value;

        private SecuritySolutionStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SecuritySolutionStatus Enabled { get; } = new SecuritySolutionStatus("Enabled");
        public static SecuritySolutionStatus Disabled { get; } = new SecuritySolutionStatus("Disabled");

        public static bool operator ==(SecuritySolutionStatus left, SecuritySolutionStatus right) => left.Equals(right);
        public static bool operator !=(SecuritySolutionStatus left, SecuritySolutionStatus right) => !left.Equals(right);

        public static explicit operator string(SecuritySolutionStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SecuritySolutionStatus other && Equals(other);
        public bool Equals(SecuritySolutionStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The severity level of the assessment
    /// </summary>
    [EnumType]
    public readonly struct Severity : IEquatable<Severity>
    {
        private readonly string _value;

        private Severity(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Severity Low { get; } = new Severity("Low");
        public static Severity Medium { get; } = new Severity("Medium");
        public static Severity High { get; } = new Severity("High");

        public static bool operator ==(Severity left, Severity right) => left.Equals(right);
        public static bool operator !=(Severity left, Severity right) => !left.Equals(right);

        public static explicit operator string(Severity value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Severity other && Equals(other);
        public bool Equals(Severity other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The platform where the assessed resource resides
    /// </summary>
    [EnumType]
    public readonly struct Source : IEquatable<Source>
    {
        private readonly string _value;

        private Source(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Resource is in Azure
        /// </summary>
        public static Source Azure { get; } = new Source("Azure");
        /// <summary>
        /// Resource in an on premise machine connected to Azure cloud
        /// </summary>
        public static Source OnPremise { get; } = new Source("OnPremise");
        /// <summary>
        /// SQL Resource in an on premise machine connected to Azure cloud
        /// </summary>
        public static Source OnPremiseSql { get; } = new Source("OnPremiseSql");

        public static bool operator ==(Source left, Source right) => left.Equals(right);
        public static bool operator !=(Source left, Source right) => !left.Equals(right);

        public static explicit operator string(Source value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Source other && Equals(other);
        public bool Equals(Source other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The status of the port
    /// </summary>
    [EnumType]
    public readonly struct Status : IEquatable<Status>
    {
        private readonly string _value;

        private Status(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Status Revoked { get; } = new Status("Revoked");
        public static Status Initiated { get; } = new Status("Initiated");

        public static bool operator ==(Status left, Status right) => left.Equals(right);
        public static bool operator !=(Status left, Status right) => !left.Equals(right);

        public static explicit operator string(Status value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Status other && Equals(other);
        public bool Equals(Status other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// A description of why the `status` has its value
    /// </summary>
    [EnumType]
    public readonly struct StatusReason : IEquatable<StatusReason>
    {
        private readonly string _value;

        private StatusReason(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static StatusReason Expired { get; } = new StatusReason("Expired");
        public static StatusReason UserRequested { get; } = new StatusReason("UserRequested");
        public static StatusReason NewerRequestInitiated { get; } = new StatusReason("NewerRequestInitiated");

        public static bool operator ==(StatusReason left, StatusReason right) => left.Equals(right);
        public static bool operator !=(StatusReason left, StatusReason right) => !left.Equals(right);

        public static explicit operator string(StatusReason value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is StatusReason other && Equals(other);
        public bool Equals(StatusReason other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Threats impact of the assessment
    /// </summary>
    [EnumType]
    public readonly struct Threats : IEquatable<Threats>
    {
        private readonly string _value;

        private Threats(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Threats AccountBreach { get; } = new Threats("accountBreach");
        public static Threats DataExfiltration { get; } = new Threats("dataExfiltration");
        public static Threats DataSpillage { get; } = new Threats("dataSpillage");
        public static Threats MaliciousInsider { get; } = new Threats("maliciousInsider");
        public static Threats ElevationOfPrivilege { get; } = new Threats("elevationOfPrivilege");
        public static Threats ThreatResistance { get; } = new Threats("threatResistance");
        public static Threats MissingCoverage { get; } = new Threats("missingCoverage");
        public static Threats DenialOfService { get; } = new Threats("denialOfService");

        public static bool operator ==(Threats left, Threats right) => left.Equals(right);
        public static bool operator !=(Threats left, Threats right) => !left.Equals(right);

        public static explicit operator string(Threats value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Threats other && Equals(other);
        public bool Equals(Threats other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Unmasked IP address logging status
    /// </summary>
    [EnumType]
    public readonly struct UnmaskedIpLoggingStatus : IEquatable<UnmaskedIpLoggingStatus>
    {
        private readonly string _value;

        private UnmaskedIpLoggingStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Unmasked IP logging is disabled
        /// </summary>
        public static UnmaskedIpLoggingStatus Disabled { get; } = new UnmaskedIpLoggingStatus("Disabled");
        /// <summary>
        /// Unmasked IP logging is enabled
        /// </summary>
        public static UnmaskedIpLoggingStatus Enabled { get; } = new UnmaskedIpLoggingStatus("Enabled");

        public static bool operator ==(UnmaskedIpLoggingStatus left, UnmaskedIpLoggingStatus right) => left.Equals(right);
        public static bool operator !=(UnmaskedIpLoggingStatus left, UnmaskedIpLoggingStatus right) => !left.Equals(right);

        public static explicit operator string(UnmaskedIpLoggingStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is UnmaskedIpLoggingStatus other && Equals(other);
        public bool Equals(UnmaskedIpLoggingStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The user impact of the assessment
    /// </summary>
    [EnumType]
    public readonly struct UserImpact : IEquatable<UserImpact>
    {
        private readonly string _value;

        private UserImpact(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static UserImpact Low { get; } = new UserImpact("Low");
        public static UserImpact Moderate { get; } = new UserImpact("Moderate");
        public static UserImpact High { get; } = new UserImpact("High");

        public static bool operator ==(UserImpact left, UserImpact right) => left.Equals(right);
        public static bool operator !=(UserImpact left, UserImpact right) => !left.Equals(right);

        public static explicit operator string(UserImpact value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is UserImpact other && Equals(other);
        public bool Equals(UserImpact other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
