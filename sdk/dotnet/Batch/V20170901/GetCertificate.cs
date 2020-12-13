// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Batch.V20170901
{
    public static class GetCertificate
    {
        public static Task<GetCertificateResult> InvokeAsync(GetCertificateArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCertificateResult>("azure-nextgen:batch/v20170901:getCertificate", args ?? new GetCertificateArgs(), options.WithVersion());
    }


    public sealed class GetCertificateArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Batch account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
        /// </summary>
        [Input("certificateName", required: true)]
        public string CertificateName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the Batch account.
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
        /// This is only returned when the certificate provisioningState is 'Failed'.
        /// </summary>
        public readonly Outputs.DeleteCertificateErrorResponse DeleteCertificateError;
        /// <summary>
        /// The ETag of the resource, used for concurrency statements.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
        /// </summary>
        public readonly string? Format;
        /// <summary>
        /// The ID of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The previous provisioned state of the resource
        /// </summary>
        public readonly string PreviousProvisioningState;
        public readonly string PreviousProvisioningStateTransitionTime;
        /// <summary>
        /// Values are:
        /// 
        ///  Succeeded - The certificate is available for use in pools.
        ///  Deleting - The user has requested that the certificate be deleted, but the delete operation has not yet completed. You may not reference the certificate when creating or updating pools.
        ///  Failed - The user requested that the certificate be deleted, but there are pools that still have references to the certificate, or it is still installed on one or more compute nodes. (The latter can occur if the certificate has been removed from the pool, but the node has not yet restarted. Nodes refresh their certificates only when they restart.) You may use the cancel certificate delete operation to cancel the delete, or the delete certificate operation to retry the delete.
        /// </summary>
        public readonly string ProvisioningState;
        public readonly string ProvisioningStateTransitionTime;
        /// <summary>
        /// The public key of the certificate.
        /// </summary>
        public readonly string PublicData;
        /// <summary>
        /// This must match the thumbprint from the name.
        /// </summary>
        public readonly string? Thumbprint;
        /// <summary>
        /// This must match the first portion of the certificate name. Currently required to be 'SHA1'.
        /// </summary>
        public readonly string? ThumbprintAlgorithm;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetCertificateResult(
            Outputs.DeleteCertificateErrorResponse deleteCertificateError,

            string etag,

            string? format,

            string id,

            string name,

            string previousProvisioningState,

            string previousProvisioningStateTransitionTime,

            string provisioningState,

            string provisioningStateTransitionTime,

            string publicData,

            string? thumbprint,

            string? thumbprintAlgorithm,

            string type)
        {
            DeleteCertificateError = deleteCertificateError;
            Etag = etag;
            Format = format;
            Id = id;
            Name = name;
            PreviousProvisioningState = previousProvisioningState;
            PreviousProvisioningStateTransitionTime = previousProvisioningStateTransitionTime;
            ProvisioningState = provisioningState;
            ProvisioningStateTransitionTime = provisioningStateTransitionTime;
            PublicData = publicData;
            Thumbprint = thumbprint;
            ThumbprintAlgorithm = thumbprintAlgorithm;
            Type = type;
        }
    }
}
