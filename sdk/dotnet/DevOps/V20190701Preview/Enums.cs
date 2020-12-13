// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.DevOps.V20190701Preview
{
    /// <summary>
    /// Type of authorization.
    /// </summary>
    [EnumType]
    public readonly struct AuthorizationType : IEquatable<AuthorizationType>
    {
        private readonly string _value;

        private AuthorizationType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AuthorizationType PersonalAccessToken { get; } = new AuthorizationType("personalAccessToken");

        public static bool operator ==(AuthorizationType left, AuthorizationType right) => left.Equals(right);
        public static bool operator !=(AuthorizationType left, AuthorizationType right) => !left.Equals(right);

        public static explicit operator string(AuthorizationType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AuthorizationType other && Equals(other);
        public bool Equals(AuthorizationType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Type of code repository.
    /// </summary>
    [EnumType]
    public readonly struct CodeRepositoryType : IEquatable<CodeRepositoryType>
    {
        private readonly string _value;

        private CodeRepositoryType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static CodeRepositoryType GitHub { get; } = new CodeRepositoryType("gitHub");
        public static CodeRepositoryType VstsGit { get; } = new CodeRepositoryType("vstsGit");

        public static bool operator ==(CodeRepositoryType left, CodeRepositoryType right) => left.Equals(right);
        public static bool operator !=(CodeRepositoryType left, CodeRepositoryType right) => !left.Equals(right);

        public static explicit operator string(CodeRepositoryType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is CodeRepositoryType other && Equals(other);
        public bool Equals(CodeRepositoryType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
