// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Batch.Latest
{
    /// <summary>
    /// Contains information about a certificate.
    /// Latest API Version: 2020-09-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:batch/latest:Certificate")]
    public partial class Certificate : Pulumi.CustomResource
    {
        /// <summary>
        /// This is only returned when the certificate provisioningState is 'Failed'.
        /// </summary>
        [Output("deleteCertificateError")]
        public Output<Outputs.DeleteCertificateErrorResponse> DeleteCertificateError { get; private set; } = null!;

        /// <summary>
        /// The ETag of the resource, used for concurrency statements.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
        /// </summary>
        [Output("format")]
        public Output<string?> Format { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The previous provisioned state of the resource
        /// </summary>
        [Output("previousProvisioningState")]
        public Output<string> PreviousProvisioningState { get; private set; } = null!;

        [Output("previousProvisioningStateTransitionTime")]
        public Output<string> PreviousProvisioningStateTransitionTime { get; private set; } = null!;

        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        [Output("provisioningStateTransitionTime")]
        public Output<string> ProvisioningStateTransitionTime { get; private set; } = null!;

        /// <summary>
        /// The public key of the certificate.
        /// </summary>
        [Output("publicData")]
        public Output<string> PublicData { get; private set; } = null!;

        /// <summary>
        /// This must match the thumbprint from the name.
        /// </summary>
        [Output("thumbprint")]
        public Output<string?> Thumbprint { get; private set; } = null!;

        /// <summary>
        /// This must match the first portion of the certificate name. Currently required to be 'SHA1'.
        /// </summary>
        [Output("thumbprintAlgorithm")]
        public Output<string?> ThumbprintAlgorithm { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Certificate resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Certificate(string name, CertificateArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:batch/latest:Certificate", name, args ?? new CertificateArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Certificate(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:batch/latest:Certificate", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20170901:Certificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20181201:Certificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20190401:Certificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20190801:Certificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20200301:Certificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20200501:Certificate"},
                    new Pulumi.Alias { Type = "azure-nextgen:batch/v20200901:Certificate"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Certificate resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Certificate Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Certificate(name, id, options);
        }
    }

    public sealed class CertificateArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the Batch account.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
        /// </summary>
        [Input("certificateName", required: true)]
        public Input<string> CertificateName { get; set; } = null!;

        /// <summary>
        /// The maximum size is 10KB.
        /// </summary>
        [Input("data", required: true)]
        public Input<string> Data { get; set; } = null!;

        /// <summary>
        /// The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
        /// </summary>
        [Input("format")]
        public Input<Pulumi.AzureNextGen.Batch.Latest.CertificateFormat>? Format { get; set; }

        /// <summary>
        /// This must not be specified if the certificate format is Cer.
        /// </summary>
        [Input("password")]
        public Input<string>? Password { get; set; }

        /// <summary>
        /// The name of the resource group that contains the Batch account.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// This must match the thumbprint from the name.
        /// </summary>
        [Input("thumbprint")]
        public Input<string>? Thumbprint { get; set; }

        /// <summary>
        /// This must match the first portion of the certificate name. Currently required to be 'SHA1'.
        /// </summary>
        [Input("thumbprintAlgorithm")]
        public Input<string>? ThumbprintAlgorithm { get; set; }

        public CertificateArgs()
        {
        }
    }
}
