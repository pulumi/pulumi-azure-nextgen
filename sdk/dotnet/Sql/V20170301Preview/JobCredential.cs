// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20170301Preview
{
    /// <summary>
    /// A stored credential that can be used by a job to connect to target databases.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:sql/v20170301preview:JobCredential")]
    public partial class JobCredential : Pulumi.CustomResource
    {
        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The credential password.
        /// </summary>
        [Output("password")]
        public Output<string> Password { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The credential user name.
        /// </summary>
        [Output("username")]
        public Output<string> Username { get; private set; } = null!;


        /// <summary>
        /// Create a JobCredential resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public JobCredential(string name, JobCredentialArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20170301preview:JobCredential", name, args ?? new JobCredentialArgs(), MakeResourceOptions(options, ""))
        {
        }

        private JobCredential(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20170301preview:JobCredential", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200202preview:JobCredential"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200801preview:JobCredential"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing JobCredential resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static JobCredential Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new JobCredential(name, id, options);
        }
    }

    public sealed class JobCredentialArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the credential.
        /// </summary>
        [Input("credentialName", required: true)]
        public Input<string> CredentialName { get; set; } = null!;

        /// <summary>
        /// The name of the job agent.
        /// </summary>
        [Input("jobAgentName", required: true)]
        public Input<string> JobAgentName { get; set; } = null!;

        /// <summary>
        /// The credential password.
        /// </summary>
        [Input("password", required: true)]
        public Input<string> Password { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

        /// <summary>
        /// The credential user name.
        /// </summary>
        [Input("username", required: true)]
        public Input<string> Username { get; set; } = null!;

        public JobCredentialArgs()
        {
        }
    }
}
