// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.DevTestLab.V20180915
{
    /// <summary>
    /// The OS type of the custom image (i.e. Windows, Linux)
    /// </summary>
    [EnumType]
    public readonly struct CustomImageOsType : IEquatable<CustomImageOsType>
    {
        private readonly string _value;

        private CustomImageOsType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static CustomImageOsType Windows { get; } = new CustomImageOsType("Windows");
        public static CustomImageOsType Linux { get; } = new CustomImageOsType("Linux");
        public static CustomImageOsType None { get; } = new CustomImageOsType("None");

        public static bool operator ==(CustomImageOsType left, CustomImageOsType right) => left.Equals(right);
        public static bool operator !=(CustomImageOsType left, CustomImageOsType right) => !left.Equals(right);

        public static explicit operator string(CustomImageOsType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is CustomImageOsType other && Equals(other);
        public bool Equals(CustomImageOsType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The status of the schedule (i.e. Enabled, Disabled)
    /// </summary>
    [EnumType]
    public readonly struct EnableStatus : IEquatable<EnableStatus>
    {
        private readonly string _value;

        private EnableStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EnableStatus Enabled { get; } = new EnableStatus("Enabled");
        public static EnableStatus Disabled { get; } = new EnableStatus("Disabled");

        public static bool operator ==(EnableStatus left, EnableStatus right) => left.Equals(right);
        public static bool operator !=(EnableStatus left, EnableStatus right) => !left.Equals(right);

        public static explicit operator string(EnableStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EnableStatus other && Equals(other);
        public bool Equals(EnableStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The access rights to be granted to the user when provisioning an environment
    /// </summary>
    [EnumType]
    public readonly struct EnvironmentPermission : IEquatable<EnvironmentPermission>
    {
        private readonly string _value;

        private EnvironmentPermission(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EnvironmentPermission Reader { get; } = new EnvironmentPermission("Reader");
        public static EnvironmentPermission Contributor { get; } = new EnvironmentPermission("Contributor");

        public static bool operator ==(EnvironmentPermission left, EnvironmentPermission right) => left.Equals(right);
        public static bool operator !=(EnvironmentPermission left, EnvironmentPermission right) => !left.Equals(right);

        public static explicit operator string(EnvironmentPermission value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EnvironmentPermission other && Equals(other);
        public bool Equals(EnvironmentPermission other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).
    /// </summary>
    [EnumType]
    public readonly struct HostCachingOptions : IEquatable<HostCachingOptions>
    {
        private readonly string _value;

        private HostCachingOptions(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static HostCachingOptions None { get; } = new HostCachingOptions("None");
        public static HostCachingOptions ReadOnly { get; } = new HostCachingOptions("ReadOnly");
        public static HostCachingOptions ReadWrite { get; } = new HostCachingOptions("ReadWrite");

        public static bool operator ==(HostCachingOptions left, HostCachingOptions right) => left.Equals(right);
        public static bool operator !=(HostCachingOptions left, HostCachingOptions right) => !left.Equals(right);

        public static explicit operator string(HostCachingOptions value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is HostCachingOptions other && Equals(other);
        public bool Equals(HostCachingOptions other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied).
    /// </summary>
    [EnumType]
    public readonly struct LinuxOsState : IEquatable<LinuxOsState>
    {
        private readonly string _value;

        private LinuxOsState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static LinuxOsState NonDeprovisioned { get; } = new LinuxOsState("NonDeprovisioned");
        public static LinuxOsState DeprovisionRequested { get; } = new LinuxOsState("DeprovisionRequested");
        public static LinuxOsState DeprovisionApplied { get; } = new LinuxOsState("DeprovisionApplied");

        public static bool operator ==(LinuxOsState left, LinuxOsState right) => left.Equals(right);
        public static bool operator !=(LinuxOsState left, LinuxOsState right) => !left.Equals(right);

        public static explicit operator string(LinuxOsState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is LinuxOsState other && Equals(other);
        public bool Equals(LinuxOsState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The event type for which this notification is enabled (i.e. AutoShutdown, Cost)
    /// </summary>
    [EnumType]
    public readonly struct NotificationChannelEventType : IEquatable<NotificationChannelEventType>
    {
        private readonly string _value;

        private NotificationChannelEventType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static NotificationChannelEventType AutoShutdown { get; } = new NotificationChannelEventType("AutoShutdown");
        public static NotificationChannelEventType Cost { get; } = new NotificationChannelEventType("Cost");

        public static bool operator ==(NotificationChannelEventType left, NotificationChannelEventType right) => left.Equals(right);
        public static bool operator !=(NotificationChannelEventType left, NotificationChannelEventType right) => !left.Equals(right);

        public static explicit operator string(NotificationChannelEventType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is NotificationChannelEventType other && Equals(other);
        public bool Equals(NotificationChannelEventType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
    /// </summary>
    [EnumType]
    public readonly struct PolicyEvaluatorType : IEquatable<PolicyEvaluatorType>
    {
        private readonly string _value;

        private PolicyEvaluatorType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PolicyEvaluatorType AllowedValuesPolicy { get; } = new PolicyEvaluatorType("AllowedValuesPolicy");
        public static PolicyEvaluatorType MaxValuePolicy { get; } = new PolicyEvaluatorType("MaxValuePolicy");

        public static bool operator ==(PolicyEvaluatorType left, PolicyEvaluatorType right) => left.Equals(right);
        public static bool operator !=(PolicyEvaluatorType left, PolicyEvaluatorType right) => !left.Equals(right);

        public static explicit operator string(PolicyEvaluatorType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PolicyEvaluatorType other && Equals(other);
        public bool Equals(PolicyEvaluatorType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
    /// </summary>
    [EnumType]
    public readonly struct PolicyFactName : IEquatable<PolicyFactName>
    {
        private readonly string _value;

        private PolicyFactName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PolicyFactName UserOwnedLabVmCount { get; } = new PolicyFactName("UserOwnedLabVmCount");
        public static PolicyFactName UserOwnedLabPremiumVmCount { get; } = new PolicyFactName("UserOwnedLabPremiumVmCount");
        public static PolicyFactName LabVmCount { get; } = new PolicyFactName("LabVmCount");
        public static PolicyFactName LabPremiumVmCount { get; } = new PolicyFactName("LabPremiumVmCount");
        public static PolicyFactName LabVmSize { get; } = new PolicyFactName("LabVmSize");
        public static PolicyFactName GalleryImage { get; } = new PolicyFactName("GalleryImage");
        public static PolicyFactName UserOwnedLabVmCountInSubnet { get; } = new PolicyFactName("UserOwnedLabVmCountInSubnet");
        public static PolicyFactName LabTargetCost { get; } = new PolicyFactName("LabTargetCost");
        public static PolicyFactName EnvironmentTemplate { get; } = new PolicyFactName("EnvironmentTemplate");
        public static PolicyFactName ScheduleEditPermission { get; } = new PolicyFactName("ScheduleEditPermission");

        public static bool operator ==(PolicyFactName left, PolicyFactName right) => left.Equals(right);
        public static bool operator !=(PolicyFactName left, PolicyFactName right) => !left.Equals(right);

        public static explicit operator string(PolicyFactName value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PolicyFactName other && Equals(other);
        public bool Equals(PolicyFactName other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The status of the policy.
    /// </summary>
    [EnumType]
    public readonly struct PolicyStatus : IEquatable<PolicyStatus>
    {
        private readonly string _value;

        private PolicyStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PolicyStatus Enabled { get; } = new PolicyStatus("Enabled");
        public static PolicyStatus Disabled { get; } = new PolicyStatus("Disabled");

        public static bool operator ==(PolicyStatus left, PolicyStatus right) => left.Equals(right);
        public static bool operator !=(PolicyStatus left, PolicyStatus right) => !left.Equals(right);

        public static explicit operator string(PolicyStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PolicyStatus other && Equals(other);
        public bool Equals(PolicyStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The setting to enable usage of premium data disks.
    /// When its value is 'Enabled', creation of standard or premium data disks is allowed.
    /// When its value is 'Disabled', only creation of standard data disks is allowed.
    /// </summary>
    [EnumType]
    public readonly struct PremiumDataDisk : IEquatable<PremiumDataDisk>
    {
        private readonly string _value;

        private PremiumDataDisk(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PremiumDataDisk Disabled { get; } = new PremiumDataDisk("Disabled");
        public static PremiumDataDisk Enabled { get; } = new PremiumDataDisk("Enabled");

        public static bool operator ==(PremiumDataDisk left, PremiumDataDisk right) => left.Equals(right);
        public static bool operator !=(PremiumDataDisk left, PremiumDataDisk right) => !left.Equals(right);

        public static explicit operator string(PremiumDataDisk value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PremiumDataDisk other && Equals(other);
        public bool Equals(PremiumDataDisk other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The artifact source's type.
    /// </summary>
    [EnumType]
    public readonly struct SourceControlType : IEquatable<SourceControlType>
    {
        private readonly string _value;

        private SourceControlType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SourceControlType VsoGit { get; } = new SourceControlType("VsoGit");
        public static SourceControlType GitHub { get; } = new SourceControlType("GitHub");

        public static bool operator ==(SourceControlType left, SourceControlType right) => left.Equals(right);
        public static bool operator !=(SourceControlType left, SourceControlType right) => !left.Equals(right);

        public static explicit operator string(SourceControlType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SourceControlType other && Equals(other);
        public bool Equals(SourceControlType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The storage type for the disk (i.e. Standard, Premium).
    /// </summary>
    [EnumType]
    public readonly struct StorageType : IEquatable<StorageType>
    {
        private readonly string _value;

        private StorageType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static StorageType Standard { get; } = new StorageType("Standard");
        public static StorageType Premium { get; } = new StorageType("Premium");
        public static StorageType StandardSSD { get; } = new StorageType("StandardSSD");

        public static bool operator ==(StorageType left, StorageType right) => left.Equals(right);
        public static bool operator !=(StorageType left, StorageType right) => !left.Equals(right);

        public static explicit operator string(StorageType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is StorageType other && Equals(other);
        public bool Equals(StorageType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Protocol type of the port.
    /// </summary>
    [EnumType]
    public readonly struct TransportProtocol : IEquatable<TransportProtocol>
    {
        private readonly string _value;

        private TransportProtocol(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TransportProtocol Tcp { get; } = new TransportProtocol("Tcp");
        public static TransportProtocol Udp { get; } = new TransportProtocol("Udp");

        public static bool operator ==(TransportProtocol left, TransportProtocol right) => left.Equals(right);
        public static bool operator !=(TransportProtocol left, TransportProtocol right) => !left.Equals(right);

        public static explicit operator string(TransportProtocol value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TransportProtocol other && Equals(other);
        public bool Equals(TransportProtocol other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny).
    /// </summary>
    [EnumType]
    public readonly struct UsagePermissionType : IEquatable<UsagePermissionType>
    {
        private readonly string _value;

        private UsagePermissionType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static UsagePermissionType Default { get; } = new UsagePermissionType("Default");
        public static UsagePermissionType Deny { get; } = new UsagePermissionType("Deny");
        public static UsagePermissionType Allow { get; } = new UsagePermissionType("Allow");

        public static bool operator ==(UsagePermissionType left, UsagePermissionType right) => left.Equals(right);
        public static bool operator !=(UsagePermissionType left, UsagePermissionType right) => !left.Equals(right);

        public static explicit operator string(UsagePermissionType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is UsagePermissionType other && Equals(other);
        public bool Equals(UsagePermissionType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Tells source of creation of lab virtual machine. Output property only.
    /// </summary>
    [EnumType]
    public readonly struct VirtualMachineCreationSource : IEquatable<VirtualMachineCreationSource>
    {
        private readonly string _value;

        private VirtualMachineCreationSource(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static VirtualMachineCreationSource FromCustomImage { get; } = new VirtualMachineCreationSource("FromCustomImage");
        public static VirtualMachineCreationSource FromGalleryImage { get; } = new VirtualMachineCreationSource("FromGalleryImage");
        public static VirtualMachineCreationSource FromSharedGalleryImage { get; } = new VirtualMachineCreationSource("FromSharedGalleryImage");

        public static bool operator ==(VirtualMachineCreationSource left, VirtualMachineCreationSource right) => left.Equals(right);
        public static bool operator !=(VirtualMachineCreationSource left, VirtualMachineCreationSource right) => !left.Equals(right);

        public static explicit operator string(VirtualMachineCreationSource value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is VirtualMachineCreationSource other && Equals(other);
        public bool Equals(VirtualMachineCreationSource other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied).
    /// </summary>
    [EnumType]
    public readonly struct WindowsOsState : IEquatable<WindowsOsState>
    {
        private readonly string _value;

        private WindowsOsState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static WindowsOsState NonSysprepped { get; } = new WindowsOsState("NonSysprepped");
        public static WindowsOsState SysprepRequested { get; } = new WindowsOsState("SysprepRequested");
        public static WindowsOsState SysprepApplied { get; } = new WindowsOsState("SysprepApplied");

        public static bool operator ==(WindowsOsState left, WindowsOsState right) => left.Equals(right);
        public static bool operator !=(WindowsOsState left, WindowsOsState right) => !left.Equals(right);

        public static explicit operator string(WindowsOsState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is WindowsOsState other && Equals(other);
        public bool Equals(WindowsOsState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
