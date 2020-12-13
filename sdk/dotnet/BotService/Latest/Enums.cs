// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.BotService.Latest
{
    /// <summary>
    /// The current state of the Enterprise Channel Node.
    /// </summary>
    [EnumType]
    public readonly struct EnterpriseChannelNodeState : IEquatable<EnterpriseChannelNodeState>
    {
        private readonly string _value;

        private EnterpriseChannelNodeState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EnterpriseChannelNodeState Creating { get; } = new EnterpriseChannelNodeState("Creating");
        public static EnterpriseChannelNodeState CreateFailed { get; } = new EnterpriseChannelNodeState("CreateFailed");
        public static EnterpriseChannelNodeState Started { get; } = new EnterpriseChannelNodeState("Started");
        public static EnterpriseChannelNodeState Starting { get; } = new EnterpriseChannelNodeState("Starting");
        public static EnterpriseChannelNodeState StartFailed { get; } = new EnterpriseChannelNodeState("StartFailed");
        public static EnterpriseChannelNodeState Stopped { get; } = new EnterpriseChannelNodeState("Stopped");
        public static EnterpriseChannelNodeState Stopping { get; } = new EnterpriseChannelNodeState("Stopping");
        public static EnterpriseChannelNodeState StopFailed { get; } = new EnterpriseChannelNodeState("StopFailed");
        public static EnterpriseChannelNodeState Deleting { get; } = new EnterpriseChannelNodeState("Deleting");
        public static EnterpriseChannelNodeState DeleteFailed { get; } = new EnterpriseChannelNodeState("DeleteFailed");

        public static bool operator ==(EnterpriseChannelNodeState left, EnterpriseChannelNodeState right) => left.Equals(right);
        public static bool operator !=(EnterpriseChannelNodeState left, EnterpriseChannelNodeState right) => !left.Equals(right);

        public static explicit operator string(EnterpriseChannelNodeState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EnterpriseChannelNodeState other && Equals(other);
        public bool Equals(EnterpriseChannelNodeState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The current state of the Enterprise Channel.
    /// </summary>
    [EnumType]
    public readonly struct EnterpriseChannelState : IEquatable<EnterpriseChannelState>
    {
        private readonly string _value;

        private EnterpriseChannelState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EnterpriseChannelState Creating { get; } = new EnterpriseChannelState("Creating");
        public static EnterpriseChannelState CreateFailed { get; } = new EnterpriseChannelState("CreateFailed");
        public static EnterpriseChannelState Started { get; } = new EnterpriseChannelState("Started");
        public static EnterpriseChannelState Starting { get; } = new EnterpriseChannelState("Starting");
        public static EnterpriseChannelState StartFailed { get; } = new EnterpriseChannelState("StartFailed");
        public static EnterpriseChannelState Stopped { get; } = new EnterpriseChannelState("Stopped");
        public static EnterpriseChannelState Stopping { get; } = new EnterpriseChannelState("Stopping");
        public static EnterpriseChannelState StopFailed { get; } = new EnterpriseChannelState("StopFailed");
        public static EnterpriseChannelState Deleting { get; } = new EnterpriseChannelState("Deleting");
        public static EnterpriseChannelState DeleteFailed { get; } = new EnterpriseChannelState("DeleteFailed");

        public static bool operator ==(EnterpriseChannelState left, EnterpriseChannelState right) => left.Equals(right);
        public static bool operator !=(EnterpriseChannelState left, EnterpriseChannelState right) => !left.Equals(right);

        public static explicit operator string(EnterpriseChannelState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EnterpriseChannelState other && Equals(other);
        public bool Equals(EnterpriseChannelState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Required. Gets or sets the Kind of the resource.
    /// </summary>
    [EnumType]
    public readonly struct Kind : IEquatable<Kind>
    {
        private readonly string _value;

        private Kind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Kind Sdk { get; } = new Kind("sdk");
        public static Kind Designer { get; } = new Kind("designer");
        public static Kind Bot { get; } = new Kind("bot");
        public static Kind Function { get; } = new Kind("function");

        public static bool operator ==(Kind left, Kind right) => left.Equals(right);
        public static bool operator !=(Kind left, Kind right) => !left.Equals(right);

        public static explicit operator string(Kind value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Kind other && Equals(other);
        public bool Equals(Kind other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The sku name
    /// </summary>
    [EnumType]
    public readonly struct SkuName : IEquatable<SkuName>
    {
        private readonly string _value;

        private SkuName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuName F0 { get; } = new SkuName("F0");
        public static SkuName S1 { get; } = new SkuName("S1");

        public static bool operator ==(SkuName left, SkuName right) => left.Equals(right);
        public static bool operator !=(SkuName left, SkuName right) => !left.Equals(right);

        public static explicit operator string(SkuName value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SkuName other && Equals(other);
        public bool Equals(SkuName other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
