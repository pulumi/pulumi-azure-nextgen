// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20190801
{
    public static class GetCertificate
    {
        public static Task<GetCertificateResult> InvokeAsync(GetCertificateArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCertificateResult>("azure-nextgen:web/v20190801:getCertificate", args ?? new GetCertificateArgs(), options.WithVersion());
    }


    public sealed class GetCertificateArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the certificate.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetCertificateArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCertificateResult
    {
        /// <summary>
        /// CNAME of the certificate to be issued via free certificate
        /// </summary>
        public readonly string? CanonicalName;
        /// <summary>
        /// Raw bytes of .cer file
        /// </summary>
        public readonly string CerBlob;
        /// <summary>
        /// Certificate expiration date.
        /// </summary>
        public readonly string ExpirationDate;
        /// <summary>
        /// Friendly name of the certificate.
        /// </summary>
        public readonly string FriendlyName;
        /// <summary>
        /// Host names the certificate applies to.
        /// </summary>
        public readonly ImmutableArray<string> HostNames;
        /// <summary>
        /// Specification for the App Service Environment to use for the certificate.
        /// </summary>
        public readonly Outputs.HostingEnvironmentProfileResponse HostingEnvironmentProfile;
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Certificate issue Date.
        /// </summary>
        public readonly string IssueDate;
        /// <summary>
        /// Certificate issuer.
        /// </summary>
        public readonly string Issuer;
        /// <summary>
        /// Key Vault Csm resource Id.
        /// </summary>
        public readonly string? KeyVaultId;
        /// <summary>
        /// Key Vault secret name.
        /// </summary>
        public readonly string? KeyVaultSecretName;
        /// <summary>
        /// Status of the Key Vault secret.
        /// </summary>
        public readonly string KeyVaultSecretStatus;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Certificate password.
        /// </summary>
        public readonly string Password;
        /// <summary>
        /// Pfx blob.
        /// </summary>
        public readonly string? PfxBlob;
        /// <summary>
        /// Public key hash.
        /// </summary>
        public readonly string PublicKeyHash;
        /// <summary>
        /// Self link.
        /// </summary>
        public readonly string SelfLink;
        /// <summary>
        /// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
        /// </summary>
        public readonly string? ServerFarmId;
        /// <summary>
        /// App name.
        /// </summary>
        public readonly string SiteName;
        /// <summary>
        /// Subject name of the certificate.
        /// </summary>
        public readonly string SubjectName;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Certificate thumbprint.
        /// </summary>
        public readonly string Thumbprint;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Is the certificate valid?.
        /// </summary>
        public readonly bool Valid;

        [OutputConstructor]
        private GetCertificateResult(
            string? canonicalName,

            string cerBlob,

            string expirationDate,

            string friendlyName,

            ImmutableArray<string> hostNames,

            Outputs.HostingEnvironmentProfileResponse hostingEnvironmentProfile,

            string id,

            string issueDate,

            string issuer,

            string? keyVaultId,

            string? keyVaultSecretName,

            string keyVaultSecretStatus,

            string? kind,

            string location,

            string name,

            string password,

            string? pfxBlob,

            string publicKeyHash,

            string selfLink,

            string? serverFarmId,

            string siteName,

            string subjectName,

            ImmutableDictionary<string, string>? tags,

            string thumbprint,

            string type,

            bool valid)
        {
            CanonicalName = canonicalName;
            CerBlob = cerBlob;
            ExpirationDate = expirationDate;
            FriendlyName = friendlyName;
            HostNames = hostNames;
            HostingEnvironmentProfile = hostingEnvironmentProfile;
            Id = id;
            IssueDate = issueDate;
            Issuer = issuer;
            KeyVaultId = keyVaultId;
            KeyVaultSecretName = keyVaultSecretName;
            KeyVaultSecretStatus = keyVaultSecretStatus;
            Kind = kind;
            Location = location;
            Name = name;
            Password = password;
            PfxBlob = pfxBlob;
            PublicKeyHash = publicKeyHash;
            SelfLink = selfLink;
            ServerFarmId = serverFarmId;
            SiteName = siteName;
            SubjectName = subjectName;
            Tags = tags;
            Thumbprint = thumbprint;
            Type = type;
            Valid = valid;
        }
    }
}
