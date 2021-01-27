// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.Latest.Outputs
{

    [OutputType]
    public sealed class CustomerCertificateParametersResponse
    {
        /// <summary>
        /// Certificate issuing authority.
        /// </summary>
        public readonly string? CertificateAuthority;
        /// <summary>
        /// Resource reference to the KV secret
        /// </summary>
        public readonly Outputs.ResourceReferenceResponse SecretSource;
        /// <summary>
        /// Version of the secret to be used
        /// </summary>
        public readonly string? SecretVersion;
        /// <summary>
        /// The list of SANs.
        /// </summary>
        public readonly ImmutableArray<string> SubjectAlternativeNames;
        /// <summary>
        /// The type of the Secret to create.
        /// Expected value is 'CustomerCertificate'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Whether to use the latest version for the certificate
        /// </summary>
        public readonly bool? UseLatestVersion;

        [OutputConstructor]
        private CustomerCertificateParametersResponse(
            string? certificateAuthority,

            Outputs.ResourceReferenceResponse secretSource,

            string? secretVersion,

            ImmutableArray<string> subjectAlternativeNames,

            string type,

            bool? useLatestVersion)
        {
            CertificateAuthority = certificateAuthority;
            SecretSource = secretSource;
            SecretVersion = secretVersion;
            SubjectAlternativeNames = subjectAlternativeNames;
            Type = type;
            UseLatestVersion = useLatestVersion;
        }
    }
}
