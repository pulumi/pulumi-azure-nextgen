// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Compute.V20160430Preview
{
    /// <summary>
    /// Specifies the caching requirements. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **None** &lt;br&gt;&lt;br&gt; **ReadOnly** &lt;br&gt;&lt;br&gt; **ReadWrite** &lt;br&gt;&lt;br&gt; Default: **None for Standard storage. ReadOnly for Premium storage**
    /// </summary>
    [EnumType]
    public readonly struct CachingTypes : IEquatable<CachingTypes>
    {
        private readonly string _value;

        private CachingTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static CachingTypes None { get; } = new CachingTypes("None");
        public static CachingTypes ReadOnly { get; } = new CachingTypes("ReadOnly");
        public static CachingTypes ReadWrite { get; } = new CachingTypes("ReadWrite");

        public static bool operator ==(CachingTypes left, CachingTypes right) => left.Equals(right);
        public static bool operator !=(CachingTypes left, CachingTypes right) => !left.Equals(right);

        public static explicit operator string(CachingTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is CachingTypes other && Equals(other);
        public bool Equals(CachingTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
    /// </summary>
    [EnumType]
    public readonly struct ComponentNames : IEquatable<ComponentNames>
    {
        private readonly string _value;

        private ComponentNames(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ComponentNames Microsoft_Windows_Shell_Setup { get; } = new ComponentNames("Microsoft-Windows-Shell-Setup");

        public static bool operator ==(ComponentNames left, ComponentNames right) => left.Equals(right);
        public static bool operator !=(ComponentNames left, ComponentNames right) => !left.Equals(right);

        public static explicit operator string(ComponentNames value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ComponentNames other && Equals(other);
        public bool Equals(ComponentNames other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// This enumerates the possible sources of a disk's creation.
    /// </summary>
    [EnumType]
    public readonly struct DiskCreateOption : IEquatable<DiskCreateOption>
    {
        private readonly string _value;

        private DiskCreateOption(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DiskCreateOption Empty { get; } = new DiskCreateOption("Empty");
        public static DiskCreateOption Attach { get; } = new DiskCreateOption("Attach");
        public static DiskCreateOption FromImage { get; } = new DiskCreateOption("FromImage");
        public static DiskCreateOption Import { get; } = new DiskCreateOption("Import");
        public static DiskCreateOption Copy { get; } = new DiskCreateOption("Copy");
        public static DiskCreateOption Restore { get; } = new DiskCreateOption("Restore");

        public static bool operator ==(DiskCreateOption left, DiskCreateOption right) => left.Equals(right);
        public static bool operator !=(DiskCreateOption left, DiskCreateOption right) => !left.Equals(right);

        public static explicit operator string(DiskCreateOption value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DiskCreateOption other && Equals(other);
        public bool Equals(DiskCreateOption other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies how the virtual machines in the scale set should be created.&lt;br&gt;&lt;br&gt; The only allowed value is: **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
    /// </summary>
    [EnumType]
    public readonly struct DiskCreateOptionTypes : IEquatable<DiskCreateOptionTypes>
    {
        private readonly string _value;

        private DiskCreateOptionTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DiskCreateOptionTypes FromImage { get; } = new DiskCreateOptionTypes("FromImage");
        public static DiskCreateOptionTypes Empty { get; } = new DiskCreateOptionTypes("Empty");
        public static DiskCreateOptionTypes Attach { get; } = new DiskCreateOptionTypes("Attach");

        public static bool operator ==(DiskCreateOptionTypes left, DiskCreateOptionTypes right) => left.Equals(right);
        public static bool operator !=(DiskCreateOptionTypes left, DiskCreateOptionTypes right) => !left.Equals(right);

        public static explicit operator string(DiskCreateOptionTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DiskCreateOptionTypes other && Equals(other);
        public bool Equals(DiskCreateOptionTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The OS State.
    /// </summary>
    [EnumType]
    public readonly struct OperatingSystemStateTypes : IEquatable<OperatingSystemStateTypes>
    {
        private readonly string _value;

        private OperatingSystemStateTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static OperatingSystemStateTypes Generalized { get; } = new OperatingSystemStateTypes("Generalized");
        public static OperatingSystemStateTypes Specialized { get; } = new OperatingSystemStateTypes("Specialized");

        public static bool operator ==(OperatingSystemStateTypes left, OperatingSystemStateTypes right) => left.Equals(right);
        public static bool operator !=(OperatingSystemStateTypes left, OperatingSystemStateTypes right) => !left.Equals(right);

        public static explicit operator string(OperatingSystemStateTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is OperatingSystemStateTypes other && Equals(other);
        public bool Equals(OperatingSystemStateTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Windows** &lt;br&gt;&lt;br&gt; **Linux**
    /// </summary>
    [EnumType]
    public readonly struct OperatingSystemTypes : IEquatable<OperatingSystemTypes>
    {
        private readonly string _value;

        private OperatingSystemTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static OperatingSystemTypes Windows { get; } = new OperatingSystemTypes("Windows");
        public static OperatingSystemTypes Linux { get; } = new OperatingSystemTypes("Linux");

        public static bool operator ==(OperatingSystemTypes left, OperatingSystemTypes right) => left.Equals(right);
        public static bool operator !=(OperatingSystemTypes left, OperatingSystemTypes right) => !left.Equals(right);

        public static explicit operator string(OperatingSystemTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is OperatingSystemTypes other && Equals(other);
        public bool Equals(OperatingSystemTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The pass name. Currently, the only allowable value is OobeSystem.
    /// </summary>
    [EnumType]
    public readonly struct PassNames : IEquatable<PassNames>
    {
        private readonly string _value;

        private PassNames(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PassNames OobeSystem { get; } = new PassNames("OobeSystem");

        public static bool operator ==(PassNames left, PassNames right) => left.Equals(right);
        public static bool operator !=(PassNames left, PassNames right) => !left.Equals(right);

        public static explicit operator string(PassNames value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PassNames other && Equals(other);
        public bool Equals(PassNames other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the protocol of listener. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;**http** &lt;br&gt;&lt;br&gt; **https**
    /// </summary>
    [EnumType]
    public readonly struct ProtocolTypes : IEquatable<ProtocolTypes>
    {
        private readonly string _value;

        private ProtocolTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ProtocolTypes Http { get; } = new ProtocolTypes("Http");
        public static ProtocolTypes Https { get; } = new ProtocolTypes("Https");

        public static bool operator ==(ProtocolTypes left, ProtocolTypes right) => left.Equals(right);
        public static bool operator !=(ProtocolTypes left, ProtocolTypes right) => !left.Equals(right);

        public static explicit operator string(ProtocolTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ProtocolTypes other && Equals(other);
        public bool Equals(ProtocolTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The type of identity used for the virtual machine scale set. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
    /// </summary>
    [EnumType]
    public readonly struct ResourceIdentityType : IEquatable<ResourceIdentityType>
    {
        private readonly string _value;

        private ResourceIdentityType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ResourceIdentityType SystemAssigned { get; } = new ResourceIdentityType("SystemAssigned");

        public static bool operator ==(ResourceIdentityType left, ResourceIdentityType right) => left.Equals(right);
        public static bool operator !=(ResourceIdentityType left, ResourceIdentityType right) => !left.Equals(right);

        public static explicit operator string(ResourceIdentityType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ResourceIdentityType other && Equals(other);
        public bool Equals(ResourceIdentityType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
    /// </summary>
    [EnumType]
    public readonly struct SettingNames : IEquatable<SettingNames>
    {
        private readonly string _value;

        private SettingNames(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SettingNames AutoLogon { get; } = new SettingNames("AutoLogon");
        public static SettingNames FirstLogonCommands { get; } = new SettingNames("FirstLogonCommands");

        public static bool operator ==(SettingNames left, SettingNames right) => left.Equals(right);
        public static bool operator !=(SettingNames left, SettingNames right) => !left.Equals(right);

        public static explicit operator string(SettingNames value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SettingNames other && Equals(other);
        public bool Equals(SettingNames other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The level code.
    /// </summary>
    [EnumType]
    public readonly struct StatusLevelTypes : IEquatable<StatusLevelTypes>
    {
        private readonly string _value;

        private StatusLevelTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static StatusLevelTypes Info { get; } = new StatusLevelTypes("Info");
        public static StatusLevelTypes Warning { get; } = new StatusLevelTypes("Warning");
        public static StatusLevelTypes Error { get; } = new StatusLevelTypes("Error");

        public static bool operator ==(StatusLevelTypes left, StatusLevelTypes right) => left.Equals(right);
        public static bool operator !=(StatusLevelTypes left, StatusLevelTypes right) => !left.Equals(right);

        public static explicit operator string(StatusLevelTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is StatusLevelTypes other && Equals(other);
        public bool Equals(StatusLevelTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.
    /// </summary>
    [EnumType]
    public readonly struct StorageAccountTypes : IEquatable<StorageAccountTypes>
    {
        private readonly string _value;

        private StorageAccountTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static StorageAccountTypes Standard_LRS { get; } = new StorageAccountTypes("Standard_LRS");
        public static StorageAccountTypes Premium_LRS { get; } = new StorageAccountTypes("Premium_LRS");

        public static bool operator ==(StorageAccountTypes left, StorageAccountTypes right) => left.Equals(right);
        public static bool operator !=(StorageAccountTypes left, StorageAccountTypes right) => !left.Equals(right);

        public static explicit operator string(StorageAccountTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is StorageAccountTypes other && Equals(other);
        public bool Equals(StorageAccountTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the mode of an upgrade to virtual machines in the scale set.&lt;br /&gt;&lt;br /&gt; Possible values are:&lt;br /&gt;&lt;br /&gt; **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.&lt;br /&gt;&lt;br /&gt; **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
    /// </summary>
    [EnumType]
    public readonly struct UpgradeMode : IEquatable<UpgradeMode>
    {
        private readonly string _value;

        private UpgradeMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static UpgradeMode Automatic { get; } = new UpgradeMode("Automatic");
        public static UpgradeMode Manual { get; } = new UpgradeMode("Manual");

        public static bool operator ==(UpgradeMode left, UpgradeMode right) => left.Equals(right);
        public static bool operator !=(UpgradeMode left, UpgradeMode right) => !left.Equals(right);

        public static explicit operator string(UpgradeMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is UpgradeMode other && Equals(other);
        public bool Equals(UpgradeMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). &lt;br&gt;&lt;br&gt; The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  &lt;br&gt;&lt;br&gt; [List all available virtual machine sizes in an availability set](virtualmachines-list-sizes-availability-set.md) &lt;br&gt;&lt;br&gt; [List all available virtual machine sizes in a region](virtualmachines-list-sizes-region.md) &lt;br&gt;&lt;br&gt; [List all available virtual machine sizes for resizing](virtualmachines-list-sizes-for-resizing.md)
    /// </summary>
    [EnumType]
    public readonly struct VirtualMachineSizeTypes : IEquatable<VirtualMachineSizeTypes>
    {
        private readonly string _value;

        private VirtualMachineSizeTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static VirtualMachineSizeTypes Basic_A0 { get; } = new VirtualMachineSizeTypes("Basic_A0");
        public static VirtualMachineSizeTypes Basic_A1 { get; } = new VirtualMachineSizeTypes("Basic_A1");
        public static VirtualMachineSizeTypes Basic_A2 { get; } = new VirtualMachineSizeTypes("Basic_A2");
        public static VirtualMachineSizeTypes Basic_A3 { get; } = new VirtualMachineSizeTypes("Basic_A3");
        public static VirtualMachineSizeTypes Basic_A4 { get; } = new VirtualMachineSizeTypes("Basic_A4");
        public static VirtualMachineSizeTypes Standard_A0 { get; } = new VirtualMachineSizeTypes("Standard_A0");
        public static VirtualMachineSizeTypes Standard_A1 { get; } = new VirtualMachineSizeTypes("Standard_A1");
        public static VirtualMachineSizeTypes Standard_A2 { get; } = new VirtualMachineSizeTypes("Standard_A2");
        public static VirtualMachineSizeTypes Standard_A3 { get; } = new VirtualMachineSizeTypes("Standard_A3");
        public static VirtualMachineSizeTypes Standard_A4 { get; } = new VirtualMachineSizeTypes("Standard_A4");
        public static VirtualMachineSizeTypes Standard_A5 { get; } = new VirtualMachineSizeTypes("Standard_A5");
        public static VirtualMachineSizeTypes Standard_A6 { get; } = new VirtualMachineSizeTypes("Standard_A6");
        public static VirtualMachineSizeTypes Standard_A7 { get; } = new VirtualMachineSizeTypes("Standard_A7");
        public static VirtualMachineSizeTypes Standard_A8 { get; } = new VirtualMachineSizeTypes("Standard_A8");
        public static VirtualMachineSizeTypes Standard_A9 { get; } = new VirtualMachineSizeTypes("Standard_A9");
        public static VirtualMachineSizeTypes Standard_A10 { get; } = new VirtualMachineSizeTypes("Standard_A10");
        public static VirtualMachineSizeTypes Standard_A11 { get; } = new VirtualMachineSizeTypes("Standard_A11");
        public static VirtualMachineSizeTypes Standard_D1 { get; } = new VirtualMachineSizeTypes("Standard_D1");
        public static VirtualMachineSizeTypes Standard_D2 { get; } = new VirtualMachineSizeTypes("Standard_D2");
        public static VirtualMachineSizeTypes Standard_D3 { get; } = new VirtualMachineSizeTypes("Standard_D3");
        public static VirtualMachineSizeTypes Standard_D4 { get; } = new VirtualMachineSizeTypes("Standard_D4");
        public static VirtualMachineSizeTypes Standard_D11 { get; } = new VirtualMachineSizeTypes("Standard_D11");
        public static VirtualMachineSizeTypes Standard_D12 { get; } = new VirtualMachineSizeTypes("Standard_D12");
        public static VirtualMachineSizeTypes Standard_D13 { get; } = new VirtualMachineSizeTypes("Standard_D13");
        public static VirtualMachineSizeTypes Standard_D14 { get; } = new VirtualMachineSizeTypes("Standard_D14");
        public static VirtualMachineSizeTypes Standard_D1_v2 { get; } = new VirtualMachineSizeTypes("Standard_D1_v2");
        public static VirtualMachineSizeTypes Standard_D2_v2 { get; } = new VirtualMachineSizeTypes("Standard_D2_v2");
        public static VirtualMachineSizeTypes Standard_D3_v2 { get; } = new VirtualMachineSizeTypes("Standard_D3_v2");
        public static VirtualMachineSizeTypes Standard_D4_v2 { get; } = new VirtualMachineSizeTypes("Standard_D4_v2");
        public static VirtualMachineSizeTypes Standard_D5_v2 { get; } = new VirtualMachineSizeTypes("Standard_D5_v2");
        public static VirtualMachineSizeTypes Standard_D11_v2 { get; } = new VirtualMachineSizeTypes("Standard_D11_v2");
        public static VirtualMachineSizeTypes Standard_D12_v2 { get; } = new VirtualMachineSizeTypes("Standard_D12_v2");
        public static VirtualMachineSizeTypes Standard_D13_v2 { get; } = new VirtualMachineSizeTypes("Standard_D13_v2");
        public static VirtualMachineSizeTypes Standard_D14_v2 { get; } = new VirtualMachineSizeTypes("Standard_D14_v2");
        public static VirtualMachineSizeTypes Standard_D15_v2 { get; } = new VirtualMachineSizeTypes("Standard_D15_v2");
        public static VirtualMachineSizeTypes Standard_DS1 { get; } = new VirtualMachineSizeTypes("Standard_DS1");
        public static VirtualMachineSizeTypes Standard_DS2 { get; } = new VirtualMachineSizeTypes("Standard_DS2");
        public static VirtualMachineSizeTypes Standard_DS3 { get; } = new VirtualMachineSizeTypes("Standard_DS3");
        public static VirtualMachineSizeTypes Standard_DS4 { get; } = new VirtualMachineSizeTypes("Standard_DS4");
        public static VirtualMachineSizeTypes Standard_DS11 { get; } = new VirtualMachineSizeTypes("Standard_DS11");
        public static VirtualMachineSizeTypes Standard_DS12 { get; } = new VirtualMachineSizeTypes("Standard_DS12");
        public static VirtualMachineSizeTypes Standard_DS13 { get; } = new VirtualMachineSizeTypes("Standard_DS13");
        public static VirtualMachineSizeTypes Standard_DS14 { get; } = new VirtualMachineSizeTypes("Standard_DS14");
        public static VirtualMachineSizeTypes Standard_DS1_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS1_v2");
        public static VirtualMachineSizeTypes Standard_DS2_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS2_v2");
        public static VirtualMachineSizeTypes Standard_DS3_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS3_v2");
        public static VirtualMachineSizeTypes Standard_DS4_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS4_v2");
        public static VirtualMachineSizeTypes Standard_DS5_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS5_v2");
        public static VirtualMachineSizeTypes Standard_DS11_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS11_v2");
        public static VirtualMachineSizeTypes Standard_DS12_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS12_v2");
        public static VirtualMachineSizeTypes Standard_DS13_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS13_v2");
        public static VirtualMachineSizeTypes Standard_DS14_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS14_v2");
        public static VirtualMachineSizeTypes Standard_DS15_v2 { get; } = new VirtualMachineSizeTypes("Standard_DS15_v2");
        public static VirtualMachineSizeTypes Standard_G1 { get; } = new VirtualMachineSizeTypes("Standard_G1");
        public static VirtualMachineSizeTypes Standard_G2 { get; } = new VirtualMachineSizeTypes("Standard_G2");
        public static VirtualMachineSizeTypes Standard_G3 { get; } = new VirtualMachineSizeTypes("Standard_G3");
        public static VirtualMachineSizeTypes Standard_G4 { get; } = new VirtualMachineSizeTypes("Standard_G4");
        public static VirtualMachineSizeTypes Standard_G5 { get; } = new VirtualMachineSizeTypes("Standard_G5");
        public static VirtualMachineSizeTypes Standard_GS1 { get; } = new VirtualMachineSizeTypes("Standard_GS1");
        public static VirtualMachineSizeTypes Standard_GS2 { get; } = new VirtualMachineSizeTypes("Standard_GS2");
        public static VirtualMachineSizeTypes Standard_GS3 { get; } = new VirtualMachineSizeTypes("Standard_GS3");
        public static VirtualMachineSizeTypes Standard_GS4 { get; } = new VirtualMachineSizeTypes("Standard_GS4");
        public static VirtualMachineSizeTypes Standard_GS5 { get; } = new VirtualMachineSizeTypes("Standard_GS5");

        public static bool operator ==(VirtualMachineSizeTypes left, VirtualMachineSizeTypes right) => left.Equals(right);
        public static bool operator !=(VirtualMachineSizeTypes left, VirtualMachineSizeTypes right) => !left.Equals(right);

        public static explicit operator string(VirtualMachineSizeTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is VirtualMachineSizeTypes other && Equals(other);
        public bool Equals(VirtualMachineSizeTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
