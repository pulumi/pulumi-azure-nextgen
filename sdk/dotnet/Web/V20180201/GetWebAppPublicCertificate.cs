// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20180201
{
    public static class GetWebAppPublicCertificate
    {
        public static Task<GetWebAppPublicCertificateResult> InvokeAsync(GetWebAppPublicCertificateArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppPublicCertificateResult>("azure-nextgen:web/v20180201:getWebAppPublicCertificate", args ?? new GetWebAppPublicCertificateArgs(), options.WithVersion());
    }


    public sealed class GetWebAppPublicCertificateArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Public certificate name.
        /// </summary>
        [Input("publicCertificateName", required: true)]
        public string PublicCertificateName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetWebAppPublicCertificateArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppPublicCertificateResult
    {
        /// <summary>
        /// Public Certificate byte array
        /// </summary>
        public readonly string? Blob;
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Public Certificate Location
        /// </summary>
        public readonly string? PublicCertificateLocation;
        /// <summary>
        /// Certificate Thumbprint
        /// </summary>
        public readonly string Thumbprint;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWebAppPublicCertificateResult(
            string? blob,

            string id,

            string? kind,

            string name,

            string? publicCertificateLocation,

            string thumbprint,

            string type)
        {
            Blob = blob;
            Id = id;
            Kind = kind;
            Name = name;
            PublicCertificateLocation = publicCertificateLocation;
            Thumbprint = thumbprint;
            Type = type;
        }
    }
}
