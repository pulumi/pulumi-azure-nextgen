// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Peering.V20190801Preview
{
    /// <summary>
    /// The type of direct peering.
    /// </summary>
    [EnumType]
    public readonly struct DirectPeeringType : IEquatable<DirectPeeringType>
    {
        private readonly string _value;

        private DirectPeeringType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DirectPeeringType Edge { get; } = new DirectPeeringType("Edge");
        public static DirectPeeringType Transit { get; } = new DirectPeeringType("Transit");
        public static DirectPeeringType Cdn { get; } = new DirectPeeringType("Cdn");
        public static DirectPeeringType Internal { get; } = new DirectPeeringType("Internal");

        public static bool operator ==(DirectPeeringType left, DirectPeeringType right) => left.Equals(right);
        public static bool operator !=(DirectPeeringType left, DirectPeeringType right) => !left.Equals(right);

        public static explicit operator string(DirectPeeringType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DirectPeeringType other && Equals(other);
        public bool Equals(DirectPeeringType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The family of the peering SKU.
    /// </summary>
    [EnumType]
    public readonly struct Family : IEquatable<Family>
    {
        private readonly string _value;

        private Family(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Family Direct { get; } = new Family("Direct");
        public static Family Exchange { get; } = new Family("Exchange");

        public static bool operator ==(Family left, Family right) => left.Equals(right);
        public static bool operator !=(Family left, Family right) => !left.Equals(right);

        public static explicit operator string(Family value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Family other && Equals(other);
        public bool Equals(Family other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The kind of the peering.
    /// </summary>
    [EnumType]
    public readonly struct Kind : IEquatable<Kind>
    {
        private readonly string _value;

        private Kind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Kind Direct { get; } = new Kind("Direct");
        public static Kind Exchange { get; } = new Kind("Exchange");

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
    /// The prefix learned type
    /// </summary>
    [EnumType]
    public readonly struct LearnedType : IEquatable<LearnedType>
    {
        private readonly string _value;

        private LearnedType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static LearnedType None { get; } = new LearnedType("None");
        public static LearnedType ViaPartner { get; } = new LearnedType("ViaPartner");
        public static LearnedType ViaSession { get; } = new LearnedType("ViaSession");

        public static bool operator ==(LearnedType left, LearnedType right) => left.Equals(right);
        public static bool operator !=(LearnedType left, LearnedType right) => !left.Equals(right);

        public static explicit operator string(LearnedType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is LearnedType other && Equals(other);
        public bool Equals(LearnedType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The name of the peering SKU.
    /// </summary>
    [EnumType]
    public readonly struct Name : IEquatable<Name>
    {
        private readonly string _value;

        private Name(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Name Basic_Exchange_Free { get; } = new Name("Basic_Exchange_Free");
        public static Name Basic_Direct_Free { get; } = new Name("Basic_Direct_Free");
        public static Name Premium_Direct_Free { get; } = new Name("Premium_Direct_Free");
        public static Name Premium_Exchange_Metered { get; } = new Name("Premium_Exchange_Metered");
        public static Name Premium_Direct_Metered { get; } = new Name("Premium_Direct_Metered");
        public static Name Premium_Direct_Unlimited { get; } = new Name("Premium_Direct_Unlimited");

        public static bool operator ==(Name left, Name right) => left.Equals(right);
        public static bool operator !=(Name left, Name right) => !left.Equals(right);

        public static explicit operator string(Name value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Name other && Equals(other);
        public bool Equals(Name other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The prefix validation state
    /// </summary>
    [EnumType]
    public readonly struct PrefixValidationState : IEquatable<PrefixValidationState>
    {
        private readonly string _value;

        private PrefixValidationState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PrefixValidationState None { get; } = new PrefixValidationState("None");
        public static PrefixValidationState Invalid { get; } = new PrefixValidationState("Invalid");
        public static PrefixValidationState Verified { get; } = new PrefixValidationState("Verified");
        public static PrefixValidationState Failed { get; } = new PrefixValidationState("Failed");
        public static PrefixValidationState Pending { get; } = new PrefixValidationState("Pending");
        public static PrefixValidationState Unknown { get; } = new PrefixValidationState("Unknown");

        public static bool operator ==(PrefixValidationState left, PrefixValidationState right) => left.Equals(right);
        public static bool operator !=(PrefixValidationState left, PrefixValidationState right) => !left.Equals(right);

        public static explicit operator string(PrefixValidationState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PrefixValidationState other && Equals(other);
        public bool Equals(PrefixValidationState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The field indicating if Microsoft provides session ip addresses.
    /// </summary>
    [EnumType]
    public readonly struct SessionAddressProvider : IEquatable<SessionAddressProvider>
    {
        private readonly string _value;

        private SessionAddressProvider(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SessionAddressProvider Microsoft { get; } = new SessionAddressProvider("Microsoft");
        public static SessionAddressProvider Peer { get; } = new SessionAddressProvider("Peer");

        public static bool operator ==(SessionAddressProvider left, SessionAddressProvider right) => left.Equals(right);
        public static bool operator !=(SessionAddressProvider left, SessionAddressProvider right) => !left.Equals(right);

        public static explicit operator string(SessionAddressProvider value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SessionAddressProvider other && Equals(other);
        public bool Equals(SessionAddressProvider other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The size of the peering SKU.
    /// </summary>
    [EnumType]
    public readonly struct Size : IEquatable<Size>
    {
        private readonly string _value;

        private Size(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Size Free { get; } = new Size("Free");
        public static Size Metered { get; } = new Size("Metered");
        public static Size Unlimited { get; } = new Size("Unlimited");

        public static bool operator ==(Size left, Size right) => left.Equals(right);
        public static bool operator !=(Size left, Size right) => !left.Equals(right);

        public static explicit operator string(Size value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Size other && Equals(other);
        public bool Equals(Size other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The tier of the peering SKU.
    /// </summary>
    [EnumType]
    public readonly struct Tier : IEquatable<Tier>
    {
        private readonly string _value;

        private Tier(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Tier Basic { get; } = new Tier("Basic");
        public static Tier Premium { get; } = new Tier("Premium");

        public static bool operator ==(Tier left, Tier right) => left.Equals(right);
        public static bool operator !=(Tier left, Tier right) => !left.Equals(right);

        public static explicit operator string(Tier value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Tier other && Equals(other);
        public bool Equals(Tier other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The validation state of the ASN associated with the peer.
    /// </summary>
    [EnumType]
    public readonly struct ValidationState : IEquatable<ValidationState>
    {
        private readonly string _value;

        private ValidationState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ValidationState None { get; } = new ValidationState("None");
        public static ValidationState Pending { get; } = new ValidationState("Pending");
        public static ValidationState Approved { get; } = new ValidationState("Approved");
        public static ValidationState Failed { get; } = new ValidationState("Failed");

        public static bool operator ==(ValidationState left, ValidationState right) => left.Equals(right);
        public static bool operator !=(ValidationState left, ValidationState right) => !left.Equals(right);

        public static explicit operator string(ValidationState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ValidationState other && Equals(other);
        public bool Equals(ValidationState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
