// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview
{
    /// <summary>
    /// Azure Active Directory only authentication.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:sql/v20200801preview:ManagedInstanceAzureADOnlyAuthentication")]
    public partial class ManagedInstanceAzureADOnlyAuthentication : Pulumi.CustomResource
    {
        /// <summary>
        /// Azure Active Directory only Authentication enabled.
        /// </summary>
        [Output("azureADOnlyAuthentication")]
        public Output<bool> AzureADOnlyAuthentication { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ManagedInstanceAzureADOnlyAuthentication resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ManagedInstanceAzureADOnlyAuthentication(string name, ManagedInstanceAzureADOnlyAuthenticationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200801preview:ManagedInstanceAzureADOnlyAuthentication", name, args ?? new ManagedInstanceAzureADOnlyAuthenticationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ManagedInstanceAzureADOnlyAuthentication(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200801preview:ManagedInstanceAzureADOnlyAuthentication", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200202preview:ManagedInstanceAzureADOnlyAuthentication"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ManagedInstanceAzureADOnlyAuthentication resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ManagedInstanceAzureADOnlyAuthentication Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ManagedInstanceAzureADOnlyAuthentication(name, id, options);
        }
    }

    public sealed class ManagedInstanceAzureADOnlyAuthenticationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of server azure active directory only authentication.
        /// </summary>
        [Input("authenticationName", required: true)]
        public Input<string> AuthenticationName { get; set; } = null!;

        /// <summary>
        /// Azure Active Directory only Authentication enabled.
        /// </summary>
        [Input("azureADOnlyAuthentication", required: true)]
        public Input<bool> AzureADOnlyAuthentication { get; set; } = null!;

        /// <summary>
        /// The name of the managed instance.
        /// </summary>
        [Input("managedInstanceName", required: true)]
        public Input<string> ManagedInstanceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public ManagedInstanceAzureADOnlyAuthenticationArgs()
        {
        }
    }
}
